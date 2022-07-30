"use strict";
(() => {
var exports = {};
exports.id = 553;
exports.ids = [553];
exports.modules = {

/***/ 514:
/***/ ((module) => {

module.exports = require("knex");

/***/ }),

/***/ 245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 398:
/***/ ((module) => {

module.exports = require("uuidv4");

/***/ }),

/***/ 361:
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
var knex = __webpack_require__(458);
var knex_default = /*#__PURE__*/__webpack_require__.n(knex);
// EXTERNAL MODULE: ./utils/response.js
var response = __webpack_require__(956);
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


// EXTERNAL MODULE: external "uuidv4"
var external_uuidv4_ = __webpack_require__(398);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(245);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
;// CONCATENATED MODULE: ./pages/api/register.js
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction





async function handler(req, res) {
    if (req.method == "POST") {
        const { fullName , nip , dob , gender , phoneNumber , teamId , organization , categoryId , teamName ,  } = req.body;
        try {
            if (!fullName) return response.badRequest("field name required", res);
            if (!nip) return response.badRequest("field nip required", res);
            if (!dob) return response.badRequest("field dob required", res);
            if (!gender) return response.badRequest("field gender required", res);
            if (!phoneNumber) return response.badRequest("field phoneNumber required", res);
            if (!organization) return response.badRequest("field organization required", res);
            if (!categoryId && !constants_namespaceObject["default"].includes(category)) return response.badRequest("field categoryId invalid", res);
            if (!teamId && !teamName) return response.badRequest("field teamId required", res);
            const userId = (0,external_uuidv4_.uuid)();
            var _teamId = "";
            if (teamName) {
                const [id] = await knex_default()("team").insert({
                    id: (0,external_uuidv4_.uuid)(),
                    name: teamName,
                    user_id: userId,
                    created_date: external_moment_default()().utc().format("YYYY-MM-DD HH:mm:ss")
                }).returning("id");
                _teamId = id;
            }
            await knex_default()("user_accounts").insert({
                id: (0,external_uuidv4_.uuid)(),
                full_name: fullName,
                team_id: teamId ? teamId : _teamId,
                phone_number: phoneNumber,
                dob: dob,
                sex: gender,
                organization: organization,
                nip: nip,
                created_date: external_moment_default()().utc().format("YYYY-MM-DD HH:mm:ss")
            }).returning("id");
            return response.ok("Successfully register", {
                userId: userId
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


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [371], () => (__webpack_exec__(361)));
module.exports = __webpack_exports__;

})();