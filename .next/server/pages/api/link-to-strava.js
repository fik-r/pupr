"use strict";
(() => {
var exports = {};
exports.id = 728;
exports.ids = [728];
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

/***/ 750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _utils_knex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(458);
/* harmony import */ var _utils_knex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils_knex__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(956);
/* harmony import */ var uuidv4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(398);
/* harmony import */ var uuidv4__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuidv4__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction




async function handler(req, res) {
    if (req.method == "POST") {
        const { userId , athleteId  } = req.body;
        try {
            if (!athleteId) return _utils_response__WEBPACK_IMPORTED_MODULE_1__.badRequest("field athleteId required", res);
            if (!userId) return _utils_response__WEBPACK_IMPORTED_MODULE_1__.badRequest("field userId required", res);
            await _utils_knex__WEBPACK_IMPORTED_MODULE_0___default()("user_athlete_strava").insert({
                id: (0,uuidv4__WEBPACK_IMPORTED_MODULE_2__.uuid)(),
                user_id: userId,
                athlete_id: athleteId,
                created_date: moment__WEBPACK_IMPORTED_MODULE_3___default()().utc().format("YYYY-MM-DD HH:mm:ss")
            }).returning("id");
            return _utils_response__WEBPACK_IMPORTED_MODULE_1__.ok("Successfully link to strava", {
                userId: userId
            }, res);
        } catch (e) {
            console.log(e);
            return _utils_response__WEBPACK_IMPORTED_MODULE_1__.error(500, "Internal server error", res);
        }
    } else {
        return _utils_response__WEBPACK_IMPORTED_MODULE_1__.notFound("wrong route api", res);
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [371], () => (__webpack_exec__(750)));
module.exports = __webpack_exports__;

})();