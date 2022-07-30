/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/link-to-strava";
exports.ids = ["pages/api/link-to-strava"];
exports.modules = {

/***/ "knex":
/*!***********************!*\
  !*** external "knex" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("knex");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("moment");

/***/ }),

/***/ "uuidv4":
/*!*************************!*\
  !*** external "uuidv4" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("uuidv4");

/***/ }),

/***/ "(api)/./pages/api/link-to-strava.js":
/*!*************************************!*\
  !*** ./pages/api/link-to-strava.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_knex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/knex */ \"(api)/./utils/knex.js\");\n/* harmony import */ var _utils_knex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils_knex__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/response */ \"(api)/./utils/response.js\");\n/* harmony import */ var uuidv4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuidv4 */ \"uuidv4\");\n/* harmony import */ var uuidv4__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuidv4__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\n\n\nasync function handler(req, res) {\n    if (req.method == \"POST\") {\n        const { userId , athleteId  } = req.body;\n        try {\n            if (!athleteId) return _utils_response__WEBPACK_IMPORTED_MODULE_1__.badRequest(\"field athleteId required\", res);\n            if (!userId) return _utils_response__WEBPACK_IMPORTED_MODULE_1__.badRequest(\"field userId required\", res);\n            await _utils_knex__WEBPACK_IMPORTED_MODULE_0___default()(\"user_athlete_strava\").insert({\n                id: (0,uuidv4__WEBPACK_IMPORTED_MODULE_2__.uuid)(),\n                user_id: userId,\n                athlete_id: athleteId,\n                created_date: moment__WEBPACK_IMPORTED_MODULE_3___default()().utc().format(\"YYYY-MM-DD HH:mm:ss\")\n            }).returning(\"id\");\n            return _utils_response__WEBPACK_IMPORTED_MODULE_1__.ok(\"Successfully link to strava\", {\n                userId: userId\n            }, res);\n        } catch (e) {\n            console.log(e);\n            return _utils_response__WEBPACK_IMPORTED_MODULE_1__.error(500, \"Internal server error\", res);\n        }\n    } else {\n        return _utils_response__WEBPACK_IMPORTED_MODULE_1__.notFound(\"wrong route api\", res);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbGluay10by1zdHJhdmEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSw2RUFBNkU7QUFDekM7QUFDUTtBQUNkO0FBQ0Y7QUFFYixlQUFlSSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxJQUFJLE1BQU0sRUFBRTtRQUN4QixNQUFNLEVBQUVDLE1BQU0sR0FBRUMsU0FBUyxHQUFFLEdBQUdKLEdBQUcsQ0FBQ0ssSUFBSTtRQUN0QyxJQUFJO1lBQ0YsSUFBSSxDQUFDRCxTQUFTLEVBQ1osT0FBT1IsdURBQW1CLENBQUMsMEJBQTBCLEVBQUVLLEdBQUcsQ0FBQyxDQUFDO1lBQzlELElBQUksQ0FBQ0UsTUFBTSxFQUFFLE9BQU9QLHVEQUFtQixDQUFDLHVCQUF1QixFQUFFSyxHQUFHLENBQUMsQ0FBQztZQUV0RSxNQUFNTixrREFBSSxDQUFDLHFCQUFxQixDQUFDLENBQzlCWSxNQUFNLENBQUM7Z0JBQ05DLEVBQUUsRUFBRVgsNENBQUksRUFBRTtnQkFDVlksT0FBTyxFQUFFTixNQUFNO2dCQUNmTyxVQUFVLEVBQUVOLFNBQVM7Z0JBQ3JCTyxZQUFZLEVBQUViLDZDQUFNLEVBQUUsQ0FBQ2MsR0FBRyxFQUFFLENBQUNDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQzthQUMzRCxDQUFDLENBQ0RDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVuQixPQUFPbEIsK0NBQVcsQ0FDaEIsNkJBQTZCLEVBQzdCO2dCQUNFTyxNQUFNLEVBQUVBLE1BQU07YUFDZixFQUNERixHQUFHLENBQ0osQ0FBQztTQUNILENBQUMsT0FBT2UsQ0FBQyxFQUFFO1lBQ1ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixDQUFDLENBQUMsQ0FBQztZQUNmLE9BQU9wQixrREFBYyxDQUFDLEdBQUcsRUFBRSx1QkFBdUIsRUFBRUssR0FBRyxDQUFDLENBQUM7U0FDMUQ7S0FDRixNQUFNO1FBQ0wsT0FBT0wscURBQWlCLENBQUMsaUJBQWlCLEVBQUVLLEdBQUcsQ0FBQyxDQUFDO0tBQ2xEO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ydW5yaWRlLy4vcGFnZXMvYXBpL2xpbmstdG8tc3RyYXZhLmpzP2U1ZmUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCBrbmV4IGZyb20gXCIuLi8uLi91dGlscy9rbmV4XCI7XG5pbXBvcnQgcmVzcG9uc2UgZnJvbSBcIi4uLy4uL3V0aWxzL3Jlc3BvbnNlXCI7XG5pbXBvcnQgeyB1dWlkIH0gZnJvbSBcInV1aWR2NFwiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT0gXCJQT1NUXCIpIHtcbiAgICBjb25zdCB7IHVzZXJJZCwgYXRobGV0ZUlkIH0gPSByZXEuYm9keTtcbiAgICB0cnkge1xuICAgICAgaWYgKCFhdGhsZXRlSWQpXG4gICAgICAgIHJldHVybiByZXNwb25zZS5iYWRSZXF1ZXN0KFwiZmllbGQgYXRobGV0ZUlkIHJlcXVpcmVkXCIsIHJlcyk7XG4gICAgICBpZiAoIXVzZXJJZCkgcmV0dXJuIHJlc3BvbnNlLmJhZFJlcXVlc3QoXCJmaWVsZCB1c2VySWQgcmVxdWlyZWRcIiwgcmVzKTtcblxuICAgICAgYXdhaXQga25leChcInVzZXJfYXRobGV0ZV9zdHJhdmFcIilcbiAgICAgICAgLmluc2VydCh7XG4gICAgICAgICAgaWQ6IHV1aWQoKSxcbiAgICAgICAgICB1c2VyX2lkOiB1c2VySWQsXG4gICAgICAgICAgYXRobGV0ZV9pZDogYXRobGV0ZUlkLFxuICAgICAgICAgIGNyZWF0ZWRfZGF0ZTogbW9tZW50KCkudXRjKCkuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbTpzc1wiKSxcbiAgICAgICAgfSlcbiAgICAgICAgLnJldHVybmluZyhcImlkXCIpO1xuXG4gICAgICByZXR1cm4gcmVzcG9uc2Uub2soXG4gICAgICAgIFwiU3VjY2Vzc2Z1bGx5IGxpbmsgdG8gc3RyYXZhXCIsXG4gICAgICAgIHtcbiAgICAgICAgICB1c2VySWQ6IHVzZXJJZCxcbiAgICAgICAgfSxcbiAgICAgICAgcmVzXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmVycm9yKDUwMCwgXCJJbnRlcm5hbCBzZXJ2ZXIgZXJyb3JcIiwgcmVzKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLm5vdEZvdW5kKFwid3Jvbmcgcm91dGUgYXBpXCIsIHJlcyk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJrbmV4IiwicmVzcG9uc2UiLCJ1dWlkIiwibW9tZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInVzZXJJZCIsImF0aGxldGVJZCIsImJvZHkiLCJiYWRSZXF1ZXN0IiwiaW5zZXJ0IiwiaWQiLCJ1c2VyX2lkIiwiYXRobGV0ZV9pZCIsImNyZWF0ZWRfZGF0ZSIsInV0YyIsImZvcm1hdCIsInJldHVybmluZyIsIm9rIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIm5vdEZvdW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/link-to-strava.js\n");

/***/ }),

/***/ "(api)/./utils/knex.js":
/*!***********************!*\
  !*** ./utils/knex.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nmodule.exports = __webpack_require__(/*! knex */ \"knex\")({\n    client: \"mysql2\",\n    debug: false,\n    connection: {\n        host: process.env.DB_HOST,\n        user: process.env.DB_USER,\n        password: process.env.DB_PASS,\n        database: process.env.DB_NAME,\n        port: process.env.DB_PORT,\n        connectTimeout: 300000,\n        application_name: \"pupr-fun-ride-nextjs\"\n    },\n    pool: {\n        min: 0,\n        max: 10\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9rbmV4LmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBQTtBQUFBQSxNQUFNLENBQUNDLE9BQU8sR0FBR0MsbUJBQU8sQ0FBQyxrQkFBTSxDQUFDLENBQUM7SUFDL0JDLE1BQU0sRUFBRSxRQUFRO0lBQ2hCQyxLQUFLLEVBQUUsS0FBSztJQUNaQyxVQUFVLEVBQUU7UUFDVkMsSUFBSSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsT0FBTztRQUN6QkMsSUFBSSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csT0FBTztRQUN6QkMsUUFBUSxFQUFFTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssT0FBTztRQUM3QkMsUUFBUSxFQUFFUCxPQUFPLENBQUNDLEdBQUcsQ0FBQ08sT0FBTztRQUM3QkMsSUFBSSxFQUFFVCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1MsT0FBTztRQUN6QkMsY0FBYyxFQUFFLE1BQU07UUFDdEJDLGdCQUFnQixFQUFFLHNCQUFzQjtLQUN6QztJQUNEQyxJQUFJLEVBQUU7UUFBRUMsR0FBRyxFQUFFLENBQUM7UUFBRUMsR0FBRyxFQUFFLEVBQUU7S0FBRTtDQUMxQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ydW5yaWRlLy4vdXRpbHMva25leC5qcz8wNjI2Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtuZXhcIikoe1xuICBjbGllbnQ6IFwibXlzcWwyXCIsXG4gIGRlYnVnOiBmYWxzZSxcbiAgY29ubmVjdGlvbjoge1xuICAgIGhvc3Q6IHByb2Nlc3MuZW52LkRCX0hPU1QsXG4gICAgdXNlcjogcHJvY2Vzcy5lbnYuREJfVVNFUixcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuREJfUEFTUyxcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREJfTkFNRSxcbiAgICBwb3J0OiBwcm9jZXNzLmVudi5EQl9QT1JULFxuICAgIGNvbm5lY3RUaW1lb3V0OiAzMDAwMDAsXG4gICAgYXBwbGljYXRpb25fbmFtZTogXCJwdXByLWZ1bi1yaWRlLW5leHRqc1wiLFxuICB9LFxuICBwb29sOiB7IG1pbjogMCwgbWF4OiAxMCB9LFxufSk7XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiLCJjbGllbnQiLCJkZWJ1ZyIsImNvbm5lY3Rpb24iLCJob3N0IiwicHJvY2VzcyIsImVudiIsIkRCX0hPU1QiLCJ1c2VyIiwiREJfVVNFUiIsInBhc3N3b3JkIiwiREJfUEFTUyIsImRhdGFiYXNlIiwiREJfTkFNRSIsInBvcnQiLCJEQl9QT1JUIiwiY29ubmVjdFRpbWVvdXQiLCJhcHBsaWNhdGlvbl9uYW1lIiwicG9vbCIsIm1pbiIsIm1heCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/knex.js\n");

/***/ }),

/***/ "(api)/./utils/response.js":
/*!***************************!*\
  !*** ./utils/response.js ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("exports.ok = (message, payload, res)=>{\n    return res.status(200).json({\n        status: \"success\",\n        message: message,\n        payload: payload\n    });\n};\nexports.badRequest = (message, res)=>{\n    return res.status(400).json({\n        status: \"bad request\",\n        message: message\n    });\n};\nexports.forbidden = (message, res)=>{\n    if (message === null) {\n        message = \"You have no permission to access\";\n    }\n    return res.status(403).json({\n        status: \"forbidden\",\n        message: message\n    });\n};\nexports.notFound = (message, res)=>{\n    return res.status(404).json({\n        status: \"not found\",\n        message: message\n    });\n};\nexports.conflict = (message, res)=>{\n    return res.status(409).json({\n        status: \"conflict\",\n        message: message\n    });\n};\nexports.unauthorized = (message, res)=>{\n    return res.status(401).json({\n        status: \"unauthorized\",\n        message: message\n    });\n};\nexports.error = (code, message, res)=>{\n    return res.status(code || 400).json({\n        status: \"error\",\n        message: message\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9yZXNwb25zZS5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQUEsVUFBVSxHQUFHLENBQUNFLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxHQUFHLEdBQUs7SUFDdEMsT0FBT0EsR0FBRyxDQUFDQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUMxQkQsTUFBTSxFQUFFLFNBQVM7UUFDakJILE9BQU8sRUFBRUEsT0FBTztRQUNoQkMsT0FBTyxFQUFFQSxPQUFPO0tBQ2pCLENBQUMsQ0FBQztDQUNKLENBQUM7QUFFRkgsa0JBQWtCLEdBQUcsQ0FBQ0UsT0FBTyxFQUFFRSxHQUFHLEdBQUs7SUFDckMsT0FBT0EsR0FBRyxDQUFDQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUMxQkQsTUFBTSxFQUFFLGFBQWE7UUFDckJILE9BQU8sRUFBRUEsT0FBTztLQUNqQixDQUFDLENBQUM7Q0FDSixDQUFDO0FBRUZGLGlCQUFpQixHQUFHLENBQUNFLE9BQU8sRUFBRUUsR0FBRyxHQUFLO0lBQ3BDLElBQUlGLE9BQU8sS0FBSyxJQUFJLEVBQUU7UUFDcEJBLE9BQU8sR0FBRyxrQ0FBa0MsQ0FBQztLQUM5QztJQUNELE9BQU9FLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFDMUJELE1BQU0sRUFBRSxXQUFXO1FBQ25CSCxPQUFPLEVBQUVBLE9BQU87S0FDakIsQ0FBQyxDQUFDO0NBQ0osQ0FBQztBQUVGRixnQkFBZ0IsR0FBRyxDQUFDRSxPQUFPLEVBQUVFLEdBQUcsR0FBSztJQUNuQyxPQUFPQSxHQUFHLENBQUNDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQzFCRCxNQUFNLEVBQUUsV0FBVztRQUNuQkgsT0FBTyxFQUFFQSxPQUFPO0tBQ2pCLENBQUMsQ0FBQztDQUNKLENBQUM7QUFFRkYsZ0JBQWdCLEdBQUcsQ0FBQ0UsT0FBTyxFQUFFRSxHQUFHLEdBQUs7SUFDbkMsT0FBT0EsR0FBRyxDQUFDQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUMxQkQsTUFBTSxFQUFFLFVBQVU7UUFDbEJILE9BQU8sRUFBRUEsT0FBTztLQUNqQixDQUFDLENBQUM7Q0FDSixDQUFDO0FBRUZGLG9CQUFvQixHQUFHLENBQUNFLE9BQU8sRUFBRUUsR0FBRyxHQUFLO0lBQ3ZDLE9BQU9BLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFDMUJELE1BQU0sRUFBRSxjQUFjO1FBQ3RCSCxPQUFPLEVBQUVBLE9BQU87S0FDakIsQ0FBQyxDQUFDO0NBQ0osQ0FBQztBQUVGRixhQUFhLEdBQUcsQ0FBQ2EsSUFBSSxFQUFFWCxPQUFPLEVBQUVFLEdBQUcsR0FBSztJQUN0QyxPQUFPQSxHQUFHLENBQUNDLE1BQU0sQ0FBQ1EsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDUCxJQUFJLENBQUM7UUFDbENELE1BQU0sRUFBRSxPQUFPO1FBQ2ZILE9BQU8sRUFBRUEsT0FBTztLQUNqQixDQUFDLENBQUM7Q0FDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnVucmlkZS8uL3V0aWxzL3Jlc3BvbnNlLmpzPzBhMGUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cy5vayA9IChtZXNzYWdlLCBwYXlsb2FkLCByZXMpID0+IHtcbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICBzdGF0dXM6IFwic3VjY2Vzc1wiLFxuICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgcGF5bG9hZDogcGF5bG9hZCxcbiAgfSk7XG59O1xuXG5leHBvcnRzLmJhZFJlcXVlc3QgPSAobWVzc2FnZSwgcmVzKSA9PiB7XG4gIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7XG4gICAgc3RhdHVzOiBcImJhZCByZXF1ZXN0XCIsXG4gICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgfSk7XG59O1xuXG5leHBvcnRzLmZvcmJpZGRlbiA9IChtZXNzYWdlLCByZXMpID0+IHtcbiAgaWYgKG1lc3NhZ2UgPT09IG51bGwpIHtcbiAgICBtZXNzYWdlID0gXCJZb3UgaGF2ZSBubyBwZXJtaXNzaW9uIHRvIGFjY2Vzc1wiO1xuICB9XG4gIHJldHVybiByZXMuc3RhdHVzKDQwMykuanNvbih7XG4gICAgc3RhdHVzOiBcImZvcmJpZGRlblwiLFxuICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gIH0pO1xufTtcblxuZXhwb3J0cy5ub3RGb3VuZCA9IChtZXNzYWdlLCByZXMpID0+IHtcbiAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtcbiAgICBzdGF0dXM6IFwibm90IGZvdW5kXCIsXG4gICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgfSk7XG59O1xuXG5leHBvcnRzLmNvbmZsaWN0ID0gKG1lc3NhZ2UsIHJlcykgPT4ge1xuICByZXR1cm4gcmVzLnN0YXR1cyg0MDkpLmpzb24oe1xuICAgIHN0YXR1czogXCJjb25mbGljdFwiLFxuICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gIH0pO1xufTtcblxuZXhwb3J0cy51bmF1dGhvcml6ZWQgPSAobWVzc2FnZSwgcmVzKSA9PiB7XG4gIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7XG4gICAgc3RhdHVzOiBcInVuYXV0aG9yaXplZFwiLFxuICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gIH0pO1xufTtcblxuZXhwb3J0cy5lcnJvciA9IChjb2RlLCBtZXNzYWdlLCByZXMpID0+IHtcbiAgcmV0dXJuIHJlcy5zdGF0dXMoY29kZSB8fCA0MDApLmpzb24oe1xuICAgIHN0YXR1czogXCJlcnJvclwiLFxuICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gIH0pO1xufTtcbiJdLCJuYW1lcyI6WyJleHBvcnRzIiwib2siLCJtZXNzYWdlIiwicGF5bG9hZCIsInJlcyIsInN0YXR1cyIsImpzb24iLCJiYWRSZXF1ZXN0IiwiZm9yYmlkZGVuIiwibm90Rm91bmQiLCJjb25mbGljdCIsInVuYXV0aG9yaXplZCIsImVycm9yIiwiY29kZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/response.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/link-to-strava.js"));
module.exports = __webpack_exports__;

})();