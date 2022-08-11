// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import knex from "../../utils/knex";
import response from "../../utils/response";

export default async function handler(req, res) {
  if (req.method == "GET") {
    try {
      const query = req.query.q;
      const page = req.query.page - 1;
      const category = req.query.category;
      const limit = parseInt(req.query.limit);
      const offset = parseInt(page != 0 ? page * limit : 0);

      const totalGroupParticipant = await knex("leader_boards")
        .where("category", category)
        .count();
      const leaderboards = await knex("leader_boards as l")
        .modify((queryBuilder) => {
          if (query)
            queryBuilder.whereRaw("LOWER(l.full_name) LIKE ?", [
              `%${query.toLowerCase()}%`,
            ]);
        })
        .where("l.category", category)
        .offset(offset)
        .limit(limit)
        .orderBy("l.current_rank_position", "asc")
        .select(
          "l.id",
          "l.full_name",
          "l.athlete_id",
          "l.sum_distance",
          "l.sum_elapsed_time",
          "l.target_total_elapsed_time",
          "l.target_sum_distance",
          "l.current_rank_position",
          "l.team_id"
        );

      for (let i = 0; i < leaderboards.length; i++) {
        const leaderboard = leaderboards[i];
        const groupCaptain = await knex("team as t")
          .join("user_accounts as u", "u.id", "t.user_id")
          .leftJoin("leader_boards as l", "l.user_id", "t.user_id")
          .where("t.id", leaderboard.team_id)
          .select(
            "u.id",
            "u.team_id",
            "u.full_name",
            "l.category",
            "l.athlete_id",
            "l.sum_distance",
            "l.sum_elapsed_time",
            "l.target_total_elapsed_time",
            "l.target_sum_distance"
          )
          .first();

        let groupMember = [];
        if (groupCaptain) {
          groupMember = await knex("user_accounts as u")
            .where("u.team_id", leaderboard.team_id)
            .where("u.id", "!=", groupCaptain.id)
            .leftJoin("leader_boards as l", "l.user_id", "u.id")

            .select(
              "u.full_name",
              "u.id",
              "l.category",
              "l.athlete_id",
              "l.sum_distance",
              "l.sum_elapsed_time",
              "l.target_total_elapsed_time",
              "l.target_sum_distance"
            );
        }

        leaderboards[i] = {
          ...leaderboard,
          captain: groupCaptain,
          member: groupMember,
        };
      }

      return response.ok(
        "successfully",
        {
          total: totalGroupParticipant[0]["count(*)"],
          leaderboards: leaderboards,
        },
        res
      );
    } catch (e) {
      console.log(e);
      return response.error(500, "Internal server error", res);
    }
  } else {
    return response.notFound("wrong route api", res);
  }
}
