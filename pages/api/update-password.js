// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import knex from "../../utils/knex";
import response from "../../utils/response";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

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
            const { newPassword, oldPassword } = req.body;
            if (!newPassword)
              return response.badRequest("Field new password required", res);
            if (!oldPassword)
              return response.badRequest("Field old password required", res);

            const user = await knex("user_accounts")
              .where("id", decoded.user_id)
              .select("password")
              .first();

            const isValidPassword = bcrypt.compareSync(
              oldPassword,
              user.password
            );
            if (!isValidPassword) {
              return response.badRequest("Password lama salah", res);
            }
            var salt = bcrypt.genSaltSync(10);
            var hashedPassword = bcrypt.hashSync(newPassword, salt);

            await knex("user_accounts")
              .where("id", decoded.user_id)
              .update({
                password: hashedPassword,
              });

            return response.ok("Successfully update password", {}, res);
          } catch (e) {
            console.log(e)
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
