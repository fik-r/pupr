// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import response from "../../utils/response";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method == "POST") {
    try {
      const { user_id } = await jwt.verify(
        req.body.refreshToken,
        process.env.REFRESH_TOKEN_SECRET_KEY,
        {
          algorithms: ["HS512"],
        }
      );

      const accessToken = await jwt.sign(
        { user_id },
        process.env.ACCESS_TOKEN_SECRET_KEY,
        {
          algorithm: "HS512",
          expiresIn: "1800000", // 5 minutes
        }
      );

      const refreshToken = await jwt.sign(
        { user_id },
        process.env.REFRESH_TOKEN_SECRET_KEY,
        {
          algorithm: "HS512",
          expiresIn: "30d", // 30 hari
        }
      );

      return response.ok(
        "Token refreshed",
        {
          accessToken,
          refreshToken,
        },
        res
      );
    } catch (e) {
      return response.unauthorized(
        "Sesi telah habis, Silahkan login ulang",
        res
      );
    }
  } else {
    return response.notFound("wrong route api", res);
  }
}
