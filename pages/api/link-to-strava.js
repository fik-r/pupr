// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import knex from "../../utils/knex";
import response from "../../utils/response";
import { uuid } from "uuidv4";
import moment from "moment";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const { athleteId, profile, accessToken, refreshToken } = req.body;
    try {
      if (!athleteId)
        return response.badRequest("field athleteId required", res);

      if (req.headers["authorization"]) {
        const [, token] = req.headers["authorization"].split(" ");
        jwt.verify(
          token,
          process.env.ACCESS_TOKEN_SECRET_KEY,
          {
            algorithms: ["HS512"],
          },
          async (err, decoded) => {
            try {
              if (err)
                return response.unauthorized("Token invalid or expired", res);
              await knex("user_athlete_strava").insert({
                id: uuid(),
                user_id: decoded.user_id,
                athlete_id: athleteId,
                profile: profile,
                access_token: accessToken,
                refresh_token: refreshToken,
                created_date: moment().utc().format("YYYY-MM-DD HH:mm:ss"),
              });

              return response.ok(
                "Successfully link to strava",
                {
                  userId: decoded.user_id,
                },
                res
              );
            } catch (e) {
              console.log(e);
              return response.error(500, "Internal server error", res);
            }
          }
        );
      } else {
        return response.unauthorized("Missing token", res);
      }
    } catch (e) {
      console.log(e);
      return response.error(500, "Internal server error", res);
    }
  } else {
    return response.notFound("wrong route api", res);
  }
}
