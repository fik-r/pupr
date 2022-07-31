// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import knex from "../../utils/knex";
import response, { badRequest } from "../../utils/response";
import constants from "../../utils/constants";
import { uuid } from "uuidv4";
import moment from "moment";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

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
      email,
      password,
    } = req.body;
    try {
      if (!email) return response.badRequest("field email required", res);
      if (!password) return response.badRequest("field password required", res);
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
      var salt = bcrypt.genSaltSync(10);
      var hashedPassword = bcrypt.hashSync(password, salt);
      var _teamId = "";
      if (teamName) {
        _teamId = uuid();
        await knex("team").insert({
          id: _teamId,
          name: teamName,
          user_id: userId,
          category: categoryId,
          created_date: moment().utc().format("YYYY-MM-DD HH:mm:ss"),
        });
      }

      if (teamId) {
        const members = await knex("user_accounts")
          .where("team_id", teamId)
          .select("id");

        const memberCount = members.length;
        const maleMember = members.filter((member) => member.sex == "M");
        const femaleMember = members.filter((member) => member.sex == "F");
        const maleMemberCount = maleMember ? maleMember.length : 0;
        const femaleMemberCount = femaleMember ? femaleMember.length : 0;
        const maxMember = categoryId == "01.A" || categoryId == "01.B" ? 5 : 2;

        const categoryType1Validation =
          ((categoryId == "01.A" || categoryId == "01.B") &&
            gender == "M" &&
            maleMemberCount >= 3) ||
          (gender == "F" && femaleMemberCount >= 2);

        const categoryType2Validation =
          (categoryId == "02" && gender == "M" && maleMemberCount >= 1) ||
          (gender == "F" && femaleMemberCount >= 1);
        if (categoryType1Validation || categoryType2Validation) {
          return badRequest(
            "Group sudah penuh, atau anda tidak memenuhi syarat.",
            res
          );
        }
      }

      await knex("user_accounts").insert({
        id: userId,
        full_name: fullName,
        team_id: teamId ? teamId : _teamId,
        phone_number: phoneNumber,
        dob: dob,
        age: moment().diff(dob, "years"),
        sex: gender,
        organization: organization,
        nip: nip,
        password: hashedPassword,
        email: email,
        created_date: moment().utc().format("YYYY-MM-DD HH:mm:ss"),
      });
      const accessToken = await jwt.sign(
        {
          user_id: userId,
        },
        process.env.ACCESS_TOKEN_SECRET_KEY,
        {
          algorithm: "HS512",
          expiresIn: "600000", // 5 minutes
        }
      );

      const refreshToken = await jwt.sign(
        {
          user_id: userId,
        },
        process.env.REFRESH_TOKEN_SECRET_KEY,
        {
          algorithm: "HS512",
          expiresIn: "30d", // 30 hari
        }
      );
      return response.ok(
        "Successfully register",
        {
          accessToken: accessToken,
          refreshToken: refreshToken,
        },
        res
      );
    } catch (e) {
      if (e.code == "ER_DUP_ENTRY" && e.sql.includes("insert into `team`")) {
        return response.error(500, "Nama group sudah digunakan", res);
      }
      return response.error(500, "Internal server error", res);
    }
  } else {
    return response.notFound("wrong route api", res);
  }
}
