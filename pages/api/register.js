// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import knex from "../../utils/knex";
import response from "../../utils/response";
import constants from "../../utils/constants";
import { uuid } from "uuidv4";
import moment from "moment";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const {
      fullName,
      nip,
      dob,
      gender,
      phoneNumber,
      teamId,
      organization,
      categoryId,
      teamName,
    } = req.body;
    try {
      if (!fullName) return response.badRequest("field name required", res);
      if (!nip) return response.badRequest("field nip required", res);
      if (!dob) return response.badRequest("field dob required", res);
      if (!gender) return response.badRequest("field gender required", res);
      if (!phoneNumber)
        return response.badRequest("field phoneNumber required", res);
      if (!organization)
        return response.badRequest("field organization required", res);
      if (!categoryId && !constants.includes(category))
        return response.badRequest("field categoryId invalid", res);
      if (!teamId && !teamName)
        return response.badRequest("field teamId required", res);
      const userId = uuid();
      var _teamId = "";
      if (teamName) {
        const [id] = await knex("team")
          .insert({
            id: uuid(),
            name: teamName,
            user_id: userId,
            created_date: moment().utc().format("YYYY-MM-DD HH:mm:ss"),
          })
          .returning("id");
        _teamId = id;
      }

      await knex("user_accounts")
        .insert({
          id: uuid(),
          full_name: fullName,
          team_id: teamId ? teamId : _teamId,
          phone_number: phoneNumber,
          dob: dob,
          sex: gender,
          organization: organization,
          nip: nip,
          created_date: moment().utc().format("YYYY-MM-DD HH:mm:ss"),
        })
        .returning("id");

      return response.ok(
        "Successfully register",
        {
          userId: userId,
        },
        res
      );
    } catch (e) {
      console.log(e);
      if (e.code == "ER_DUP_ENTRY" && e.sql.includes("insert into `team`")) {
        return response.error(500, "Nama group sudah digunakan", res);
      }
      return response.error(500, "Internal server error", res);
    }
  } else {
    return response.notFound("wrong route api", res);
  }
}
