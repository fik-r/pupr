"use strict";
(() => {
var exports = {};
exports.id = 994;
exports.ids = [994];
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

/***/ 7202:
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
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8432);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_3__);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction




async function handler(req, res) {
    if (req.method == "POST") {
        const { email , password  } = req.body;
        const user = await _utils_knex__WEBPACK_IMPORTED_MODULE_0___default()("user_accounts as u").where("u.email", email).select("u.id", "u.password").first();
        if (!user) {
            console.log(email);
            return _utils_response__WEBPACK_IMPORTED_MODULE_1__.unauthorized("Email atau Password salah", res);
        }
        try {
            const isValidPassword = bcryptjs__WEBPACK_IMPORTED_MODULE_3___default().compareSync(password, user.password);
            if (!isValidPassword) {
                return _utils_response__WEBPACK_IMPORTED_MODULE_1__.unauthorized("Email atau Password salah", res);
            }
            const athlete = await _utils_knex__WEBPACK_IMPORTED_MODULE_0___default()("user_athlete_strava").where("user_id", user.id).select("athlete_id").first() || {};
            console.log(athlete);
            const accessToken = await jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().sign({
                user_id: user.id
            }, process.env.ACCESS_TOKEN_SECRET_KEY, {
                algorithm: "HS512",
                expiresIn: "300000"
            });
            const refreshToken = await jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().sign({
                user_id: user.id
            }, process.env.REFRESH_TOKEN_SECRET_KEY, {
                algorithm: "HS512",
                expiresIn: "30d"
            });
            console.log(athlete);
            return _utils_response__WEBPACK_IMPORTED_MODULE_1__.ok("Successfully login", {
                athleteId: athlete.athlete_id,
                accessToken: accessToken,
                refreshToken: refreshToken
            }, res);
        } catch (e) {
            console.log(e);
            return _utils_response__WEBPACK_IMPORTED_MODULE_1__.error(500, "Internal server error", res);
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
var __webpack_exports__ = __webpack_require__.X(0, [956], () => (__webpack_exec__(7202)));
module.exports = __webpack_exports__;

})();