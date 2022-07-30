// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import knex from "../../utils/knex";
import response from "../../utils/response";
import { uuid } from "uuidv4";
import moment from "moment";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const { userId, athleteId } = req.body;
    try {
      if (!athleteId)
        return response.badRequest("field athleteId required", res);
      if (!userId) return response.badRequest("field userId required", res);

      await knex("user_athlete_strava")
        .insert({
          id: uuid(),
          user_id: userId,
          athlete_id: athleteId,
          created_date: moment().utc().format("YYYY-MM-DD HH:mm:ss"),
        })
        .returning("id");

      return response.ok(
        "Successfully link to strava",
        {
          userId: userId,
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
