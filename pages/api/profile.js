// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import knex from "../../utils/knex";
import response from "../../utils/response";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method == "GET") {
    if (req.headers["authorization"]) {
      const [, token] = req.headers["authorization"].split(" ");
      jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET_KEY,
        { algorithms: ["HS512"] },
        async (err, decoded) => {
          if (err)
            return response.unauthorized("Token invalid or expired", res);

          try {
            const user = await knex("user_accounts as u")
              .where("u.id", decoded.user_id)
              .join("user_athlete_strava as us", "us.user_id", "u.id")
              .select(
                "u.id",
                "u.full_name",
                "u.nip",
                "u.dob",
                "u.organization",
                "u.phone_number",
                "u.sex",
                "u.team_id",
                "us.profile",
                "us.athlete_id"
              )
              .first();

            if (!user) {
              return response.notFound("User tidak ditemukan", res);
            }

            const [userGroup, memberUserGroup, activities] = await Promise.all([
              knex("team as t")
                .where("t.id", user.team_id)
                .join("user_accounts as u", "u.id", "t.user_id")
                .select(
                  "u.full_name as captain_name",
                  "t.name",
                  "t.category",
                  "t.user_id"
                )
                .first(),
              knex("user_accounts as u")
                .where("u.team_id", user.team_id)
                .select("u.full_name", "u.sex", "u.id"),
              knex("strava_activities as sv")
                .where("sv.athlete_id", user.athlete_id)
                .select(
                  "sv.name",
                  "sv.distance",
                  "sv.type",
                  "sv.elapsed_time",
                  "sv.start_date"
                ),
            ]);

            if (userGroup) {
              const memberCount = memberUserGroup.length;
              const maleMember = memberUserGroup.filter(
                (member) => member.sex == "M"
              );
              const femaleMember = memberUserGroup.filter(
                (member) => member.sex == "F"
              );
              const maleMemberCount = maleMember ? maleMember.length : 0;
              const femaleMemberCount = femaleMember ? femaleMember.length : 0;

              const categoryType1Validation =
                ((userGroup.category == "01.A" ||
                  userGroup.category == "01.B") &&
                  maleMemberCount == 3) ||
                ((userGroup.category == "01.A" ||
                  userGroup.category == "01.B") &&
                  femaleMemberCount == 2);

              const categoryType2Validation =
                (userGroup.category == "02" && maleMemberCount == 1) ||
                (userGroup.category == "02" && femaleMemberCount == 1);
              let isReady = categoryType1Validation || categoryType2Validation;

              userGroup.isReady = isReady;
            }
            return response.ok(
              "Successfully fetch profile",
              {
                user: user,
                group: userGroup,
                member: memberUserGroup,
                activities: activities,
              },
              res
            );
          } catch (e) {
            return response.error(500, "Internal server error", res);
          }
        }
      );
    } else {
      return response.unauthorized("Missing token", res);
    }
  } else {
    return response.notFound("wrong route api", res);
  }
}
