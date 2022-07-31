"use strict";
(() => {
var exports = {};
exports.id = 925;
exports.ids = [925];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 514:
/***/ ((module) => {

module.exports = require("knex");

/***/ }),

/***/ 7051:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _utils_knex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9458);
/* harmony import */ var _utils_knex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils_knex__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1956);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction



async function handler(req, res) {
    if (req.method == "GET") {
        if (req.headers["authorization"]) {
            const [, token] = req.headers["authorization"].split(" ");
            jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, {
                algorithms: [
                    "HS512"
                ]
            }, async (err, decoded)=>{
                if (err) return _utils_response__WEBPACK_IMPORTED_MODULE_1__.unauthorized("Token invalid or expired", res);
                try {
                    const user = await _utils_knex__WEBPACK_IMPORTED_MODULE_0___default()("user_accounts as u").where("u.id", decoded.user_id).join("user_athlete_strava as us", "us.user_id", "u.id").select("u.id", "u.full_name", "u.nip", "u.dob", "u.organization", "u.phone_number", "u.sex", "u.team_id", "us.profile").first();
                    if (!user) {
                        return _utils_response__WEBPACK_IMPORTED_MODULE_1__.notFound("User tidak ditemukan", res);
                    }
                    const [userGroup, memberUserGroup] = await Promise.all([
                        _utils_knex__WEBPACK_IMPORTED_MODULE_0___default()("team as t").where("t.id", user.team_id).join("user_accounts as u", "u.id", "t.user_id").select("u.full_name as captain_name", "t.name").first(),
                        _utils_knex__WEBPACK_IMPORTED_MODULE_0___default()("user_accounts as u").where("u.team_id", user.team_id).select("u.full_name"), 
                    ]);
                    return _utils_response__WEBPACK_IMPORTED_MODULE_1__.ok("Successfully fetch profile", {
                        user: user,
                        group: userGroup,
                        member: memberUserGroup
                    }, res);
                } catch (e) {
                    console.log(e);
                    return _utils_response__WEBPACK_IMPORTED_MODULE_1__.error(500, "Internal server error", res);
                }
            });
        } else {
            return _utils_response__WEBPACK_IMPORTED_MODULE_1__.unauthorized("Missing token", res);
        }
    } else {
        return _utils_response__WEBPACK_IMPORTED_MODULE_1__.notFound("wrong route api", res);
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
var __webpack_exports__ = __webpack_require__.X(0, [956], () => (__webpack_exec__(7051)));
module.exports = __webpack_exports__;

})();