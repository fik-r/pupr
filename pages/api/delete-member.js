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
            const { userId } = req.body;
            if (!userId)
              return response.badRequest("Field userId required", res);
            const team = await knex("team")
              .where("user_id", decoded.user_id)
              .select("user_id")
              .first();

            if (!team) {
              return response.badRequest("Kamu bukan ketua grup", res);
            }

            if (team.user_id == userId) {
              return response.badRequest(
                "Kamu ketua grup, tidak bisa menghapus diri sendiri",
                res
              );
            }
            await knex("user_accounts").where("id", userId).update({
              team_id: null,
            });
            return response.ok("Successfully delete member", {}, res);
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
