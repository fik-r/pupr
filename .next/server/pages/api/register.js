"use strict";
(() => {
var exports = {};
exports.id = 553;
exports.ids = [553];
exports.modules = {

/***/ 8432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 514:
/***/ ((module) => {

module.exports = require("knex");

/***/ }),

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 3398:
/***/ ((module) => {

module.exports = require("uuidv4");

/***/ }),

/***/ 9361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// NAMESPACE OBJECT: ./utils/constants.js
var constants_namespaceObject = {};
__webpack_require__.r(constants_namespaceObject);

// EXTERNAL MODULE: ./utils/knex.js
var knex = __webpack_require__(9458);
var knex_default = /*#__PURE__*/__webpack_require__.n(knex);
// EXTERNAL MODULE: ./utils/response.js
var response = __webpack_require__(1956);
;// CONCATENATED MODULE: ./utils/constants.js
const LIST_CATEGORY = [
    {
        title: "01.A",
        category: "RUN",
        rules: [
            "Tim",
            "Komponen Tim (5 Anggota dengan 3 Pria dan 2 Wanita)",
            "Usia ≤ 40 Tahun",
            "Total Jarak 77 km per-tim", 
        ]
    },
    {
        title: "01.B",
        category: "RUN",
        rules: [
            "Tim",
            "Komponen Tim (5 Anggota dengan 3 Pria dan 2 Wanita)",
            "Usia > 40 Tahun",
            "Total Jarak 77 km per-tim", 
        ]
    },
    {
        title: "02",
        category: "RIDE",
        rules: [
            "Tim",
            "Komponen Tim (1 Pria dan 1 Wanita)",
            "Total Jarak 77 km per-tim", 
        ]
    }, 
];
const LIST_UNIT_ORGANIZATION = (/* unused pure expression or super */ null && ([
    "Sekretariat Jenderal",
    "Inspektorat Jenderal",
    "Direktorat Jenderal Bina Marga",
    "Direktorat Jenderal Sumber Daya Air",
    "Direktorat Jenderal Cipta Karya",
    "Direktorat Jenderal Perumahan",
    "Direktorat Jenderal Bina Konstruksi",
    "Direktorat Jenderal Pembiayaan Infrastruktur",
    "Badan Pengembangan Infrastruktur Wilayah",
    "Badan Pengembangan Sumber Daya Manusia",
    "Badan Pengatur Jalan Tol",
    "Lembaga Pengembangan Jasa Konstruksi", 
]));
const STORAGE_DRAFT_REGISTER = "DRAFT_REGISTER";
const ACCESS_TOKEN = "ACCESS_TOKEN";
const REFRESH_TOKEN = "REFRESH_TOKEN";
const ATHLETE_ID = "ATHLETE_ID";


// EXTERNAL MODULE: external "uuidv4"
var external_uuidv4_ = __webpack_require__(3398);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2245);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
// EXTERNAL MODULE: external "jsonwebtoken"
var external_jsonwebtoken_ = __webpack_require__(9344);
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_);
// EXTERNAL MODULE: external "bcryptjs"
var external_bcryptjs_ = __webpack_require__(8432);
var external_bcryptjs_default = /*#__PURE__*/__webpack_require__.n(external_bcryptjs_);
;// CONCATENATED MODULE: ./pages/api/register.js
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction







async function handler(req, res) {
    if (req.method == "POST") {
        const { fullName , nip , dob , gender , phoneNumber , teamId , organization , categoryId , teamName , email , password ,  } = req.body;
        try {
            if (!email) return response.badRequest("field email required", res);
            if (!password) return response.badRequest("field password required", res);
            if (!fullName) return response.badRequest("field name required", res);
            if (!nip) return response.badRequest("field nip required", res);
            if (!dob) return response.badRequest("field dob required", res);
            if (!gender) return response.badRequest("field gender required", res);
            if (!phoneNumber) return response.badRequest("field phoneNumber required", res);
            if (!organization) return response.badRequest("field organization required", res);
            if (!categoryId && !constants_namespaceObject["default"].includes(category)) return response.badRequest("field categoryId invalid", res);
            if (!teamId && !teamName) return response.badRequest("field teamId required", res);
            const userId = (0,external_uuidv4_.uuid)();
            var salt = external_bcryptjs_default().genSaltSync(10);
            var hashedPassword = external_bcryptjs_default().hashSync(password, salt);
            var _teamId = "";
            if (teamName) {
                _teamId = (0,external_uuidv4_.uuid)();
                await knex_default()("team").insert({
                    id: _teamId,
                    name: teamName,
                    user_id: userId,
                    category: categoryId,
                    created_date: external_moment_default()().utc().format("YYYY-MM-DD HH:mm:ss")
                });
            }
            await knex_default()("user_accounts").insert({
                id: userId,
                full_name: fullName,
                team_id: teamId ? teamId : _teamId,
                phone_number: phoneNumber,
                dob: dob,
                age: external_moment_default()().diff(dob, "years"),
                sex: gender,
                organization: organization,
                nip: nip,
                password: hashedPassword,
                email: email,
                created_date: external_moment_default()().utc().format("YYYY-MM-DD HH:mm:ss")
            });
            const accessToken = await external_jsonwebtoken_default().sign({
                user_id: userId
            }, process.env.ACCESS_TOKEN_SECRET_KEY, {
                algorithm: "HS512",
                expiresIn: "300000"
            });
            const refreshToken = await external_jsonwebtoken_default().sign({
                user_id: userId
            }, process.env.REFRESH_TOKEN_SECRET_KEY, {
                algorithm: "HS512",
                expiresIn: "30d"
            });
            return response.ok("Successfully register", {
                accessToken: accessToken,
                refreshToken: refreshToken
            }, res);
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
};


/***/ }),

/***/ 9458:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


module.exports = __webpack_require__(514)({
    client: "mysql2",
    debug: false,
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
        connectTimeout: 300000
    },
    pool: {
        min: 0,
        max: 10
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [956], () => (__webpack_exec__(9361)));
module.exports = __webpack_exports__;

})();