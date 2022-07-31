// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import knex from "../../utils/knex";
import response from "../../utils/response";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const { email } = req.body;
    try {
      if (!email) return response.badRequest("field email required", res);

      const emailExists = await knex("user_accounts")
        .where("email", email)
        .first();
      if (emailExists) {
        return response.conflict("Email sudah digunakan", res);
      } else {
        return response.ok(
          "Email belum digunakan",
          {
            exist: false,
          },
          res
        );
      }
    } catch (e) {
      console.log(e);
      return response.error(500, "Internal server error", res);
    }
  } else {
    return response.notFound("wrong route api", res);
  }
}
