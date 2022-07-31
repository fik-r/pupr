"use strict";
(() => {
var exports = {};
exports.id = 772;
exports.ids = [772];
exports.modules = {

/***/ 514:
/***/ ((module) => {

module.exports = require("knex");

/***/ }),

/***/ 2:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _utils_knex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9458);
/* harmony import */ var _utils_knex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils_knex__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1956);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


async function handler(req, res) {
    if (req.method == "GET") {
        try {
            const query = req.query.q;
            const page = req.query.page - 1;
            const unitOrganization = req.query.unit_organization;
            const category = req.query.category;
            const limit = parseInt(req.query.limit);
            const offset = parseInt(page != 0 ? page * limit : 0);
            const groups = await _utils_knex__WEBPACK_IMPORTED_MODULE_0___default()("team").modify((queryBuilder)=>{
                if (query) queryBuilder.whereRaw("LOWER(team.name) LIKE ?", [
                    `%${query.toLowerCase()}%`, 
                ]);
            }).where("team.category", category).where("user_accounts.organization", unitOrganization).join("user_accounts", "team.id", "user_accounts.team_id").orderBy("team.name").offset(offset).limit(limit).select("team.name", "team.id", "team.category", "team.user_id", "user_accounts.organization", "user_accounts.full_name as user_name");
            if (groups.length > 0) {
                for(let i = 0; i < groups.length; i++){
                    const members = await _utils_knex__WEBPACK_IMPORTED_MODULE_0___default()("user_accounts").where("team_id", groups[i].id).select("full_name", "sex", "team_id");
                    groups[i].members = members;
                }
            }
            return _utils_response__WEBPACK_IMPORTED_MODULE_1__.ok("Successfully fetch group", {
                total: groups.length,
                data: groups,
                currentPage: page + 1,
                nextPage: page + 2,
                previousPage: page + 1 < 1 ? 1 : page
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
var __webpack_exports__ = __webpack_require__.X(0, [956], () => (__webpack_exec__(2)));
module.exports = __webpack_exports__;

})();