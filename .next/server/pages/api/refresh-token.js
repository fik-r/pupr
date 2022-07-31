"use strict";
(() => {
var exports = {};
exports.id = 385;
exports.ids = [385];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 6011:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _utils_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1956);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


async function handler(req, res) {
    if (req.method == "POST") {
        try {
            const { user_id  } = await jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(req.body.refreshToken, process.env.REFRESH_TOKEN_SECRET_KEY, {
                algorithms: [
                    "HS512"
                ]
            });
            const accessToken = await jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({
                user_id
            }, process.env.ACCESS_TOKEN_SECRET_KEY, {
                algorithm: "HS512",
                expiresIn: "300000"
            });
            const refreshToken = await jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({
                user_id
            }, process.env.REFRESH_TOKEN_SECRET_KEY, {
                algorithm: "HS512",
                expiresIn: "30d"
            });
            return _utils_response__WEBPACK_IMPORTED_MODULE_0__.ok("Token refreshed", {
                accessToken,
                refreshToken
            }, res);
        } catch (e) {
            return _utils_response__WEBPACK_IMPORTED_MODULE_0__.unauthorized("Sesi telah habis, Silahkan login ulang", res);
        }
    } else {
        return _utils_response__WEBPACK_IMPORTED_MODULE_0__.notFound("wrong route api", res);
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [956], () => (__webpack_exec__(6011)));
module.exports = __webpack_exports__;

})();