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
            const page = req.query.page - 1;
            const limit = parseInt(req.query.limit);
            const offset = parseInt(page != 0 ? page * limit : 0);

            const totalUnitOrganization = await knex(
              "unit_organitation"
            ).count();
            const unitOrganization = await knex("unit_organitation")
              .limit(limit)
              .offset(offset)
              .orderBy("name", "asc")
              .select("id_unor as id", "nama_unor as name");

            for (let i = 0; i < unitOrganization.length; i++) {
              const data = unitOrganization[i];
              const member = await knex("user_accounts as u")
                .where("u.organization", data.name)
                .select("full_name");
              unitOrganization[i] = {
                ...data,
                member: member,
              };
            }
            return response.ok(
              "successfully",
              {
                total: totalUnitOrganization[0]["count(*)"],
                unitOrganizations: unitOrganization,
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
