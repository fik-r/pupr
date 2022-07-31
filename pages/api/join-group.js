// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import knex from "../../utils/knex";
import response from "../../utils/response";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method == "POST") {
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
            const { teamId, teamName, categoryId } = req.body;
            if (!teamId && !teamName)
              return response.badRequest("field teamId required", res);
            if (!categoryId)
              return response.badRequest("field categoryId required", res);

            const user = await knex("user_accounts")
              .where("id", decoded.user_id)
              .select("team_id", "sex")
              .first();
            if (user && user.team_id) {
              return response.badRequest("User ini sudah punya team", res);
            }

            var _teamId = "";
            if (teamName) {
              _teamId = uuid();
              await knex("team").insert({
                id: _teamId,
                name: teamName,
                user_id: decoded.user_id,
                category: categoryId,
                created_date: moment().utc().format("YYYY-MM-DD HH:mm:ss"),
              });
            }

            if (teamId) {
              const members = await knex("user_accounts")
                .where("team_id", teamId)
                .select("id");

              const memberCount = members.length;
              const maleMember = members.filter((member) => member.sex == "M");
              const femaleMember = members.filter(
                (member) => member.sex == "F"
              );
              const maleMemberCount = maleMember ? maleMember.length : 0;
              const femaleMemberCount = femaleMember ? femaleMember.length : 0;

              const categoryType1Validation =
                ((categoryId == "01.A" || categoryId == "01.B") &&
                  user.sex == "M" &&
                  maleMemberCount >= 3) ||
                (user.sex == "F" && femaleMemberCount >= 2);

              const categoryType2Validation =
                (categoryId == "02" &&
                  user.sex == "M" &&
                  maleMemberCount >= 1) ||
                (user.sex == "F" && femaleMemberCount >= 1);
              if (categoryType1Validation || categoryType2Validation) {
                return response.badRequest(
                  "Group sudah penuh, atau anda tidak memenuhi syarat.",
                  res
                );
              }
            }

            await knex("user_accounts")
              .where("id", decoded.user_id)
              .update({
                team_id: teamId ? teamId : _teamId,
              });

            return response.ok("Successfully join group", {}, res);
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
