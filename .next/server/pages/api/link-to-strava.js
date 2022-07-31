"use strict";
(() => {
var exports = {};
exports.id = 728;
exports.ids = [728];
exports.modules = {

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

/***/ 5750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _utils_knex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9458);
/* harmony import */ var _utils_knex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils_knex__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1956);
/* harmony import */ var uuidv4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3398);
/* harmony import */ var uuidv4__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuidv4__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction





async function handler(req, res) {
    if (req.method == "POST") {
        const { athleteId , profile , accessToken , refreshToken  } = req.body;
        try {
            if (!athleteId) return _utils_response__WEBPACK_IMPORTED_MODULE_1__.badRequest("field athleteId required", res);
            if (req.headers["authorization"]) {
                const [, token] = req.headers["authorization"].split(" ");
                jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default().verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, {
                    algorithms: [
                        "HS512"
                    ]
                }, async (err, decoded)=>{
                    try {
                        if (err) return _utils_response__WEBPACK_IMPORTED_MODULE_1__.unauthorized("Token invalid or expired", res);
                        await _utils_knex__WEBPACK_IMPORTED_MODULE_0___default()("user_athlete_strava").insert({
                            id: (0,uuidv4__WEBPACK_IMPORTED_MODULE_2__.uuid)(),
                            user_id: decoded.user_id,
                            athlete_id: athleteId,
                            profile: profile,
                            access_token: accessToken,
                            refresh_token: refreshToken,
                            created_date: moment__WEBPACK_IMPORTED_MODULE_3___default()().utc().format("YYYY-MM-DD HH:mm:ss")
                        });
                        return _utils_response__WEBPACK_IMPORTED_MODULE_1__.ok("Successfully link to strava", {
                            userId: decoded.user_id
                        }, res);
                    } catch (e) {
                        console.log(e);
                        return _utils_response__WEBPACK_IMPORTED_MODULE_1__.error(500, "Internal server error", res);
                    }
                });
            } else {
                return _utils_response__WEBPACK_IMPORTED_MODULE_1__.unauthorized("Missing token", res);
            }
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
var __webpack_exports__ = __webpack_require__.X(0, [956], () => (__webpack_exec__(5750)));
module.exports = __webpack_exports__;

})();