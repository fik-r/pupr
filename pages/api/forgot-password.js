// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import knex from "../../utils/knex";
import response from "../../utils/response";
import moment from "moment";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const { email, dob } = req.body;
    try {
      if (!email) return response.badRequest("field email required", res);
      if (!dob) return response.badRequest("field dob required", res);

      const user = await knex("user_accounts")
        .where("email", email)
        .select("id", "dob")
        .first();

      if (!user) {
        return response.notFound("Email tidak ditemukan", res);
      }
      if (moment(user.dob).format("YYYY-MM-DD") != dob) {
        return response.badRequest("Tanggal lahir tidak sesuai", res);
      }

      var salt = bcrypt.genSaltSync(10);
      var hashedPassword = bcrypt.hashSync(
        moment(user.dob).utc().format("YYYY-MM-DD"),
        salt
      );

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
