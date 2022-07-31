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

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("jsonwebtoken");

/***/ }),

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_knex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/knex */ \"(api)/./utils/knex.js\");\n/* harmony import */ var _utils_knex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils_knex__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/response */ \"(api)/./utils/response.js\");\n/* harmony import */ var uuidv4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuidv4 */ \"uuidv4\");\n/* harmony import */ var uuidv4__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuidv4__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\n\n\n\nasync function handler(req, res) {\n    if (req.method == \"POST\") {\n        const { athleteId , profile , accessToken , refreshToken  } = req.body;\n        try {\n            if (!athleteId) return _utils_response__WEBPACK_IMPORTED_MODULE_1__.badRequest(\"field athleteId required\", res);\n            if (req.headers[\"authorization\"]) {\n                const [, token] = req.headers[\"authorization\"].split(\" \");\n                jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default().verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, {\n                    algorithms: [\n                        \"HS512\"\n                    ]\n                }, async (err, decoded)=>{\n                    try {\n                        if (err) return _utils_response__WEBPACK_IMPORTED_MODULE_1__.unauthorized(\"Token invalid or expired\", res);\n                        await _utils_knex__WEBPACK_IMPORTED_MODULE_0___default()(\"user_athlete_strava\").insert({\n                            id: (0,uuidv4__WEBPACK_IMPORTED_MODULE_2__.uuid)(),\n                            user_id: decoded.user_id,\n                            athlete_id: athleteId,\n                            profile: profile,\n                            access_token: accessToken,\n                            refresh_token: refreshToken,\n                            created_date: moment__WEBPACK_IMPORTED_MODULE_3___default()().utc().format(\"YYYY-MM-DD HH:mm:ss\")\n                        });\n                        return _utils_response__WEBPACK_IMPORTED_MODULE_1__.ok(\"Successfully link to strava\", {\n                            userId: decoded.user_id\n                        }, res);\n                    } catch (e) {\n                        console.log(e);\n                        return _utils_response__WEBPACK_IMPORTED_MODULE_1__.error(500, \"Internal server error\", res);\n                    }\n                });\n            } else {\n                return _utils_response__WEBPACK_IMPORTED_MODULE_1__.unauthorized(\"Missing token\", res);\n            }\n        } catch (e) {\n            console.log(e);\n            return _utils_response__WEBPACK_IMPORTED_MODULE_1__.error(500, \"Internal server error\", res);\n        }\n    } else {\n        return _utils_response__WEBPACK_IMPORTED_MODULE_1__.notFound(\"wrong route api\", res);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbGluay10by1zdHJhdmEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLDZFQUE2RTtBQUN6QztBQUNRO0FBQ2Q7QUFDRjtBQUNHO0FBRWhCLGVBQWVLLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLElBQUksTUFBTSxFQUFFO1FBQ3hCLE1BQU0sRUFBRUMsU0FBUyxHQUFFQyxPQUFPLEdBQUVDLFdBQVcsR0FBRUMsWUFBWSxHQUFFLEdBQUdOLEdBQUcsQ0FBQ08sSUFBSTtRQUNsRSxJQUFJO1lBQ0YsSUFBSSxDQUFDSixTQUFTLEVBQ1osT0FBT1IsdURBQW1CLENBQUMsMEJBQTBCLEVBQUVNLEdBQUcsQ0FBQyxDQUFDO1lBRTlELElBQUlELEdBQUcsQ0FBQ1MsT0FBTyxDQUFDLGVBQWUsQ0FBQyxFQUFFO2dCQUNoQyxNQUFNLEdBQUdDLEtBQUssQ0FBQyxHQUFHVixHQUFHLENBQUNTLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQ0UsS0FBSyxDQUFDLEdBQUcsQ0FBQztnQkFDekRiLDBEQUFVLENBQ1JZLEtBQUssRUFDTEcsT0FBTyxDQUFDQyxHQUFHLENBQUNDLHVCQUF1QixFQUNuQztvQkFDRUMsVUFBVSxFQUFFO3dCQUFDLE9BQU87cUJBQUM7aUJBQ3RCLEVBQ0QsT0FBT0MsR0FBRyxFQUFFQyxPQUFPLEdBQUs7b0JBQ3RCLElBQUk7d0JBQ0YsSUFBSUQsR0FBRyxFQUNMLE9BQU90Qix5REFBcUIsQ0FBQywwQkFBMEIsRUFBRU0sR0FBRyxDQUFDLENBQUM7d0JBQ2hFLE1BQU1QLGtEQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQzBCLE1BQU0sQ0FBQzs0QkFDdkNDLEVBQUUsRUFBRXpCLDRDQUFJLEVBQUU7NEJBQ1YwQixPQUFPLEVBQUVKLE9BQU8sQ0FBQ0ksT0FBTzs0QkFDeEJDLFVBQVUsRUFBRXBCLFNBQVM7NEJBQ3JCQyxPQUFPLEVBQUVBLE9BQU87NEJBQ2hCb0IsWUFBWSxFQUFFbkIsV0FBVzs0QkFDekJvQixhQUFhLEVBQUVuQixZQUFZOzRCQUMzQm9CLFlBQVksRUFBRTdCLDZDQUFNLEVBQUUsQ0FBQzhCLEdBQUcsRUFBRSxDQUFDQyxNQUFNLENBQUMscUJBQXFCLENBQUM7eUJBQzNELENBQUMsQ0FBQzt3QkFFSCxPQUFPakMsK0NBQVcsQ0FDaEIsNkJBQTZCLEVBQzdCOzRCQUNFbUMsTUFBTSxFQUFFWixPQUFPLENBQUNJLE9BQU87eUJBQ3hCLEVBQ0RyQixHQUFHLENBQ0osQ0FBQztxQkFDSCxDQUFDLE9BQU84QixDQUFDLEVBQUU7d0JBQ1ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixDQUFDLENBQUMsQ0FBQzt3QkFDZixPQUFPcEMsa0RBQWMsQ0FBQyxHQUFHLEVBQUUsdUJBQXVCLEVBQUVNLEdBQUcsQ0FBQyxDQUFDO3FCQUMxRDtpQkFDRixDQUNGLENBQUM7YUFDSCxNQUFNO2dCQUNMLE9BQU9OLHlEQUFxQixDQUFDLGVBQWUsRUFBRU0sR0FBRyxDQUFDLENBQUM7YUFDcEQ7U0FDRixDQUFDLE9BQU84QixDQUFDLEVBQUU7WUFDVkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLENBQUMsQ0FBQyxDQUFDO1lBQ2YsT0FBT3BDLGtEQUFjLENBQUMsR0FBRyxFQUFFLHVCQUF1QixFQUFFTSxHQUFHLENBQUMsQ0FBQztTQUMxRDtLQUNGLE1BQU07UUFDTCxPQUFPTixxREFBaUIsQ0FBQyxpQkFBaUIsRUFBRU0sR0FBRyxDQUFDLENBQUM7S0FDbEQ7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3J1bnJpZGUvLi9wYWdlcy9hcGkvbGluay10by1zdHJhdmEuanM/ZTVmZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuaW1wb3J0IGtuZXggZnJvbSBcIi4uLy4uL3V0aWxzL2tuZXhcIjtcbmltcG9ydCByZXNwb25zZSBmcm9tIFwiLi4vLi4vdXRpbHMvcmVzcG9uc2VcIjtcbmltcG9ydCB7IHV1aWQgfSBmcm9tIFwidXVpZHY0XCI7XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09IFwiUE9TVFwiKSB7XG4gICAgY29uc3QgeyBhdGhsZXRlSWQsIHByb2ZpbGUsIGFjY2Vzc1Rva2VuLCByZWZyZXNoVG9rZW4gfSA9IHJlcS5ib2R5O1xuICAgIHRyeSB7XG4gICAgICBpZiAoIWF0aGxldGVJZClcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmJhZFJlcXVlc3QoXCJmaWVsZCBhdGhsZXRlSWQgcmVxdWlyZWRcIiwgcmVzKTtcblxuICAgICAgaWYgKHJlcS5oZWFkZXJzW1wiYXV0aG9yaXphdGlvblwiXSkge1xuICAgICAgICBjb25zdCBbLCB0b2tlbl0gPSByZXEuaGVhZGVyc1tcImF1dGhvcml6YXRpb25cIl0uc3BsaXQoXCIgXCIpO1xuICAgICAgICBqd3QudmVyaWZ5KFxuICAgICAgICAgIHRva2VuLFxuICAgICAgICAgIHByb2Nlc3MuZW52LkFDQ0VTU19UT0tFTl9TRUNSRVRfS0VZLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGFsZ29yaXRobXM6IFtcIkhTNTEyXCJdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXN5bmMgKGVyciwgZGVjb2RlZCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgaWYgKGVycilcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UudW5hdXRob3JpemVkKFwiVG9rZW4gaW52YWxpZCBvciBleHBpcmVkXCIsIHJlcyk7XG4gICAgICAgICAgICAgIGF3YWl0IGtuZXgoXCJ1c2VyX2F0aGxldGVfc3RyYXZhXCIpLmluc2VydCh7XG4gICAgICAgICAgICAgICAgaWQ6IHV1aWQoKSxcbiAgICAgICAgICAgICAgICB1c2VyX2lkOiBkZWNvZGVkLnVzZXJfaWQsXG4gICAgICAgICAgICAgICAgYXRobGV0ZV9pZDogYXRobGV0ZUlkLFxuICAgICAgICAgICAgICAgIHByb2ZpbGU6IHByb2ZpbGUsXG4gICAgICAgICAgICAgICAgYWNjZXNzX3Rva2VuOiBhY2Nlc3NUb2tlbixcbiAgICAgICAgICAgICAgICByZWZyZXNoX3Rva2VuOiByZWZyZXNoVG9rZW4sXG4gICAgICAgICAgICAgICAgY3JlYXRlZF9kYXRlOiBtb21lbnQoKS51dGMoKS5mb3JtYXQoXCJZWVlZLU1NLUREIEhIOm1tOnNzXCIpLFxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2Uub2soXG4gICAgICAgICAgICAgICAgXCJTdWNjZXNzZnVsbHkgbGluayB0byBzdHJhdmFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB1c2VySWQ6IGRlY29kZWQudXNlcl9pZCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlc1xuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmVycm9yKDUwMCwgXCJJbnRlcm5hbCBzZXJ2ZXIgZXJyb3JcIiwgcmVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UudW5hdXRob3JpemVkKFwiTWlzc2luZyB0b2tlblwiLCByZXMpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmVycm9yKDUwMCwgXCJJbnRlcm5hbCBzZXJ2ZXIgZXJyb3JcIiwgcmVzKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLm5vdEZvdW5kKFwid3Jvbmcgcm91dGUgYXBpXCIsIHJlcyk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJrbmV4IiwicmVzcG9uc2UiLCJ1dWlkIiwibW9tZW50Iiwiand0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImF0aGxldGVJZCIsInByb2ZpbGUiLCJhY2Nlc3NUb2tlbiIsInJlZnJlc2hUb2tlbiIsImJvZHkiLCJiYWRSZXF1ZXN0IiwiaGVhZGVycyIsInRva2VuIiwic3BsaXQiLCJ2ZXJpZnkiLCJwcm9jZXNzIiwiZW52IiwiQUNDRVNTX1RPS0VOX1NFQ1JFVF9LRVkiLCJhbGdvcml0aG1zIiwiZXJyIiwiZGVjb2RlZCIsInVuYXV0aG9yaXplZCIsImluc2VydCIsImlkIiwidXNlcl9pZCIsImF0aGxldGVfaWQiLCJhY2Nlc3NfdG9rZW4iLCJyZWZyZXNoX3Rva2VuIiwiY3JlYXRlZF9kYXRlIiwidXRjIiwiZm9ybWF0Iiwib2siLCJ1c2VySWQiLCJlIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwibm90Rm91bmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/link-to-strava.js\n");

/***/ }),

/***/ "(api)/./utils/knex.js":
/*!***********************!*\
  !*** ./utils/knex.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nmodule.exports = __webpack_require__(/*! knex */ \"knex\")({\n    client: \"mysql2\",\n    debug: false,\n    connection: {\n        host: process.env.DB_HOST,\n        user: process.env.DB_USER,\n        password: process.env.DB_PASS,\n        database: process.env.DB_NAME,\n        port: process.env.DB_PORT,\n        connectTimeout: 300000\n    },\n    pool: {\n        min: 0,\n        max: 10\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9rbmV4LmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBQTtBQUFBQSxNQUFNLENBQUNDLE9BQU8sR0FBR0MsbUJBQU8sQ0FBQyxrQkFBTSxDQUFDLENBQUM7SUFDL0JDLE1BQU0sRUFBRSxRQUFRO0lBQ2hCQyxLQUFLLEVBQUUsS0FBSztJQUNaQyxVQUFVLEVBQUU7UUFDVkMsSUFBSSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsT0FBTztRQUN6QkMsSUFBSSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csT0FBTztRQUN6QkMsUUFBUSxFQUFFTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssT0FBTztRQUM3QkMsUUFBUSxFQUFFUCxPQUFPLENBQUNDLEdBQUcsQ0FBQ08sT0FBTztRQUM3QkMsSUFBSSxFQUFFVCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1MsT0FBTztRQUN6QkMsY0FBYyxFQUFFLE1BQU07S0FDdkI7SUFDREMsSUFBSSxFQUFFO1FBQUVDLEdBQUcsRUFBRSxDQUFDO1FBQUVDLEdBQUcsRUFBRSxFQUFFO0tBQUU7Q0FDMUIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnVucmlkZS8uL3V0aWxzL2tuZXguanM/MDYyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrbmV4XCIpKHtcbiAgY2xpZW50OiBcIm15c3FsMlwiLFxuICBkZWJ1ZzogZmFsc2UsXG4gIGNvbm5lY3Rpb246IHtcbiAgICBob3N0OiBwcm9jZXNzLmVudi5EQl9IT1NULFxuICAgIHVzZXI6IHByb2Nlc3MuZW52LkRCX1VTRVIsXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRCX1BBU1MsXG4gICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRCX05BTUUsXG4gICAgcG9ydDogcHJvY2Vzcy5lbnYuREJfUE9SVCxcbiAgICBjb25uZWN0VGltZW91dDogMzAwMDAwLFxuICB9LFxuICBwb29sOiB7IG1pbjogMCwgbWF4OiAxMCB9LFxufSk7XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiLCJjbGllbnQiLCJkZWJ1ZyIsImNvbm5lY3Rpb24iLCJob3N0IiwicHJvY2VzcyIsImVudiIsIkRCX0hPU1QiLCJ1c2VyIiwiREJfVVNFUiIsInBhc3N3b3JkIiwiREJfUEFTUyIsImRhdGFiYXNlIiwiREJfTkFNRSIsInBvcnQiLCJEQl9QT1JUIiwiY29ubmVjdFRpbWVvdXQiLCJwb29sIiwibWluIiwibWF4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/knex.js\n");

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