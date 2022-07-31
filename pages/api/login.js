// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import knex from "../../utils/knex";
import response from "../../utils/response";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const { email, password } = req.body;

    const user = await knex("user_accounts as u")
      .where("u.email", email)
      .select("u.id", "u.password")
      .first();

    if (!user) {
      return response.unauthorized("Email atau Password salah", res);
    }

    try {
      const isValidPassword = bcrypt.compareSync(password, user.password);
      if (!isValidPassword) {
        return response.unauthorized("Email atau Password salah", res);
      }

      const athlete =
        (await knex("user_athlete_strava")
          .where("user_id", user.id)
          .select("athlete_id")
          .first()) || {};

      const accessToken = await jwt.sign(
        {
          user_id: user.id,
        },
        process.env.ACCESS_TOKEN_SECRET_KEY,
        {
          algorithm: "HS512",
          expiresIn: "600000",
        }
      );

      const refreshToken = await jwt.sign(
        {
          user_id: user.id,
        },
        process.env.REFRESH_TOKEN_SECRET_KEY,
        {
          algorithm: "HS512",
          expiresIn: "30d", // 30 hari
        }
      );
      return response.ok(
        "Successfully login",
        {
          athleteId: athlete.athlete_id,
          accessToken: accessToken,
          refreshToken: refreshToken,
        },
        res
      );
    } catch (e) {
      return response.error(500, "Internal server error", res);
    }
  } else {
    return response.notFound("wrong route api", res);
  }
}
