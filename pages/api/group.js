// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import knex from "../../utils/knex";
import response from "../../utils/response";
export default async function handler(req, res) {
  if (req.method == "GET") {
    try {
      const query = req.query.q;
      const page = req.query.page - 1;
      const unitOrganization = req.query.unit_organization;
      const category = req.query.category;

      const limit = parseInt(req.query.limit);
      const offset = parseInt(page != 0 ? page * limit : 0);

      let groups = await knex("team")
        .modify((queryBuilder) => {
          if (query)
            queryBuilder.whereRaw("LOWER(team.name) LIKE ?", [
              `%${query.toLowerCase()}%`,
            ]);
        })
        .where("team.category", category)
        .where("user_accounts.organization", unitOrganization)
        .join("user_accounts", "team.id", "user_accounts.team_id")
        .orderBy("team.name")
        .offset(offset)
        .limit(limit)
        .select(
          "team.name",
          "team.id",
          "team.category",
          "team.user_id as captain_id",
          "user_accounts.organization",
          "user_accounts.full_name as user_name",
          "user_accounts.id as user_id "
        );

      if (groups.length > 0) {
        for (let i = 0; i < groups.length; i++) {
          const members = await knex("user_accounts")
            .where("team_id", groups[i].id)
            .select("full_name", "sex", "team_id", "id");
          groups[i].members = members;
        }
      }

      groups = groups.filter((group) => {
        return group.user_id == group.captain_id;
      });

      return response.ok(
        "Successfully fetch group",
        {
          total: groups.length,
          data: groups,
          currentPage: page + 1,
          nextPage: page + 2,
          previousPage: page + 1 < 1 ? 1 : page,
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
