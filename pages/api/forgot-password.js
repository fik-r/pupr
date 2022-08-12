// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import knex from "../../utils/knex";
import response from "../../utils/response";
import moment from "moment";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const { email, nip } = req.body;
    try {
      if (!email) return response.badRequest("field email required", res);
      if (!nip) return response.badRequest("field nip required", res);

      const user = await knex("user_accounts")
        .where("email", email)
        .select("id", "nip")
        .first();

      if (!user) {
        return response.notFound("Email tidak ditemukan", res);
      }
      if (user.nip != nip) {
        return response.badRequest("Tanggal lahir tidak sesuai", res);
      }

      var salt = bcrypt.genSaltSync(10);
      var hashedPassword = bcrypt.hashSync(user.nip, salt);

      await knex("user_accounts").where("id", user.id).update({
        password: hashedPassword,
      });

      return response.ok("Successfully forgot password", null, res);
    } catch (e) {
      console.log(e);
      return response.error(500, "Internal server error", res);
    }
  } else {
    return response.notFound("wrong route api", res);
  }
}
