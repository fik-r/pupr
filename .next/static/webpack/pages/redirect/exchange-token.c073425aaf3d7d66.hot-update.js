"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/redirect/exchange-token",{

/***/ "./pages/redirect/exchange-token.js":
/*!******************************************!*\
  !*** ./pages/redirect/exchange-token.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ ExchangeToken; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_FrLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/FrLayout */ \"./components/FrLayout/index.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/constants */ \"./utils/constants.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSP = true;\nfunction ExchangeToken(props) {\n    var getAthlete = function getAthlete() {\n        axios__WEBPACK_IMPORTED_MODULE_3___default()({\n            url: \"https://www.strava.com/api/v3/athlete\",\n            method: \"GET\",\n            headers: {\n                authorization: \"Bearer \".concat(localStorage.getItem(\"access_token_strava\"))\n            }\n        }).then(function(res1) {\n            linkToStrava();\n        }).catch(function(err) {\n            console.log(err);\n        });\n    };\n    var linkToStrava = function linkToStrava() {\n        axios__WEBPACK_IMPORTED_MODULE_3___default().post(\"http://localhost:3000\" + \"/api/link-to-strava\", {\n            userId: localStorage.getItem(_utils_constants__WEBPACK_IMPORTED_MODULE_5__.STORAGE_DRAFT_REGISTER).user_id,\n            athleteId: res.data.athlete.id\n        }).then(function(res1) {\n            router.push(\"/profile\");\n        }).catch(function(e) {\n            console.log(e);\n        });\n    };\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        axios__WEBPACK_IMPORTED_MODULE_3___default().post(\"https://www.strava.com/oauth/token\", null, {\n            params: {\n                client_id: 90543,\n                client_secret: \"d97aefd34f169bb8be5fc2c9efcb1413e74378a0\",\n                code: props.data.code,\n                grant_type: \"authorization_code\"\n            }\n        }).then(function(res1) {\n            var _data = res1.data, refresh_token = _data.refresh_token, access_token = _data.access_token;\n            localStorage.setItem(\"refresh_token_strava\", refresh_token);\n            localStorage.setItem(\"access_token_strava\", access_token);\n            getAthlete();\n        }).catch(function(err) {\n            console.log(err);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FrLayout__WEBPACK_IMPORTED_MODULE_4__.FrLayout2, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"RunRide | Redirecting\"\n                        }, void 0, false, {\n                            fileName: \"/Users/fizus/Projects/Web/runride/pages/redirect/exchange-token.js\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"description\",\n                            content: \"Run ride description\"\n                        }, void 0, false, {\n                            fileName: \"/Users/fizus/Projects/Web/runride/pages/redirect/exchange-token.js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            href: \"/favicon.ico\"\n                        }, void 0, false, {\n                            fileName: \"/Users/fizus/Projects/Web/runride/pages/redirect/exchange-token.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fizus/Projects/Web/runride/pages/redirect/exchange-token.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center flex-col\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Redirecting...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/fizus/Projects/Web/runride/pages/redirect/exchange-token.js\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/fizus/Projects/Web/runride/pages/redirect/exchange-token.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/fizus/Projects/Web/runride/pages/redirect/exchange-token.js\",\n            lineNumber: 62,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/fizus/Projects/Web/runride/pages/redirect/exchange-token.js\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n};\n_s(ExchangeToken, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = ExchangeToken;\nvar _c;\n$RefreshReg$(_c, \"ExchangeToken\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWRpcmVjdC9leGNoYW5nZS10b2tlbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTZCO0FBQ1k7QUFDZjtBQUM0QjtBQUNTO0FBQ3ZCOzs7QUFFekIsU0FBU08sYUFBYSxDQUFDQyxLQUFLLEVBQUU7UUF1QmxDQyxVQUFVLEdBQW5CLFNBQVNBLFVBQVUsR0FBRztRQUNwQk4sNENBQUssQ0FBQztZQUNKTyxHQUFHLEVBQUUsdUNBQXVDO1lBQzVDQyxNQUFNLEVBQUUsS0FBSztZQUNiQyxPQUFPLEVBQUU7Z0JBQ1BDLGFBQWEsRUFBRSxTQUFRLENBQThDLE9BQTVDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFFO2FBQ3ZFO1NBQ0YsQ0FBQyxDQUNDQyxJQUFJLENBQUMsU0FBQ0MsSUFBRyxFQUFLO1lBQ2JDLFlBQVksRUFBRSxDQUFDO1NBQ2hCLENBQUMsQ0FDREMsS0FBSyxDQUFDLFNBQUNDLEdBQUcsRUFBSztZQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDLENBQUM7U0FDbEIsQ0FBQyxDQUFDO0tBQ047UUFFUUYsWUFBWSxHQUFyQixTQUFTQSxZQUFZLEdBQUc7UUFDdEJmLGlEQUNPLENBQUNxQix1QkFBZ0MsR0FBRyxxQkFBcUIsRUFBRTtZQUM5REcsTUFBTSxFQUFFYixZQUFZLENBQUNDLE9BQU8sQ0FBQ1Ysb0VBQXNCLENBQUMsQ0FBQ3VCLE9BQU87WUFDNURDLFNBQVMsRUFBRVosR0FBRyxDQUFDYSxJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsRUFBRTtTQUMvQixDQUFDLENBQ0RoQixJQUFJLENBQUMsU0FBQ0MsSUFBRyxFQUFLO1lBQ2JnQixNQUFNLENBQUNDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN6QixDQUFDLENBQ0RmLEtBQUssQ0FBQyxTQUFDZ0IsQ0FBQyxFQUFLO1lBQ1pkLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYSxDQUFDLENBQUMsQ0FBQztTQUNoQixDQUFDLENBQUM7S0FDTjs7SUFsREQsSUFBTUYsTUFBTSxHQUFHM0Isc0RBQVMsRUFBRTtJQUMxQkosZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RDLGlEQUNPLENBQUMsb0NBQW9DLEVBQUUsSUFBSSxFQUFFO1lBQ2hEaUMsTUFBTSxFQUFFO2dCQUNOQyxTQUFTLEVBQUUsS0FBSztnQkFDaEJDLGFBQWEsRUFBRSwwQ0FBMEM7Z0JBQ3pEQyxJQUFJLEVBQUUvQixLQUFLLENBQUNzQixJQUFJLENBQUNTLElBQUk7Z0JBQ3JCQyxVQUFVLEVBQUUsb0JBQW9CO2FBQ2pDO1NBQ0YsQ0FBQyxDQUNEeEIsSUFBSSxDQUFDLFNBQUNDLElBQUcsRUFBSztZQUNiLElBQXdDQSxLQUFRLEdBQVJBLElBQUcsQ0FBQ2EsSUFBSSxFQUF4Q1csYUFBYSxHQUFtQnhCLEtBQVEsQ0FBeEN3QixhQUFhLEVBQUVDLFlBQVksR0FBS3pCLEtBQVEsQ0FBekJ5QixZQUFZO1lBQ25DNUIsWUFBWSxDQUFDNkIsT0FBTyxDQUFDLHNCQUFzQixFQUFFRixhQUFhLENBQUMsQ0FBQztZQUM1RDNCLFlBQVksQ0FBQzZCLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRUQsWUFBWSxDQUFDLENBQUM7WUFDMURqQyxVQUFVLEVBQUUsQ0FBQztTQUNkLENBQUMsQ0FDRFUsS0FBSyxDQUFDLFNBQUNDLEdBQUcsRUFBSztZQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDLENBQUM7U0FDbEIsQ0FBQyxDQUFDO0tBQ04sRUFBRSxFQUFFLENBQUMsQ0FBQztJQStCUCxxQkFDRSw4REFBQ3dCLEtBQUc7a0JBQ0YsNEVBQUN4QywyREFBUzs7OEJBQ1IsOERBQUNKLGtEQUFJOztzQ0FDSCw4REFBQzZDLE9BQUs7c0NBQUMsdUJBQXFCOzs7OztnQ0FBUTtzQ0FDcEMsOERBQUNDLE1BQUk7NEJBQUNDLElBQUksRUFBQyxhQUFhOzRCQUFDQyxPQUFPLEVBQUMsc0JBQXNCOzs7OztnQ0FBRztzQ0FDMUQsOERBQUNDLE1BQUk7NEJBQUNDLEdBQUcsRUFBQyxNQUFNOzRCQUFDQyxJQUFJLEVBQUMsY0FBYzs7Ozs7Z0NBQUc7Ozs7Ozt3QkFDbEM7OEJBRVAsOERBQUNQLEtBQUc7b0JBQUNRLFNBQVMsRUFBQyw4QkFBOEI7OEJBQzNDLDRFQUFDQyxHQUFDO2tDQUFDLGdCQUFjOzs7Ozs0QkFBSTs7Ozs7d0JBQ2pCOzs7Ozs7Z0JBQ0k7Ozs7O1lBQ1IsQ0FDTjtDQUNIO0dBbkV1QjlDLGFBQWE7O1FBQ3BCRCxrREFBUzs7O0FBREZDLEtBQUFBLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVkaXJlY3QvZXhjaGFuZ2UtdG9rZW4uanM/N2Y3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBGckxheW91dDIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9GckxheW91dFwiO1xuaW1wb3J0IHsgU1RPUkFHRV9EUkFGVF9SRUdJU1RFUiB9IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFeGNoYW5nZVRva2VuKHByb3BzKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAucG9zdChcImh0dHBzOi8vd3d3LnN0cmF2YS5jb20vb2F1dGgvdG9rZW5cIiwgbnVsbCwge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBjbGllbnRfaWQ6IDkwNTQzLFxuICAgICAgICAgIGNsaWVudF9zZWNyZXQ6IFwiZDk3YWVmZDM0ZjE2OWJiOGJlNWZjMmM5ZWZjYjE0MTNlNzQzNzhhMFwiLFxuICAgICAgICAgIGNvZGU6IHByb3BzLmRhdGEuY29kZSxcbiAgICAgICAgICBncmFudF90eXBlOiBcImF1dGhvcml6YXRpb25fY29kZVwiLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc3QgeyByZWZyZXNoX3Rva2VuLCBhY2Nlc3NfdG9rZW4gfSA9IHJlcy5kYXRhO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInJlZnJlc2hfdG9rZW5fc3RyYXZhXCIsIHJlZnJlc2hfdG9rZW4pO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFjY2Vzc190b2tlbl9zdHJhdmFcIiwgYWNjZXNzX3Rva2VuKTtcbiAgICAgICAgZ2V0QXRobGV0ZSgpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGZ1bmN0aW9uIGdldEF0aGxldGUoKSB7XG4gICAgYXhpb3Moe1xuICAgICAgdXJsOiBcImh0dHBzOi8vd3d3LnN0cmF2YS5jb20vYXBpL3YzL2F0aGxldGVcIixcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWNjZXNzX3Rva2VuX3N0cmF2YVwiKX1gLFxuICAgICAgfSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBsaW5rVG9TdHJhdmEoKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBsaW5rVG9TdHJhdmEoKSB7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMICsgXCIvYXBpL2xpbmstdG8tc3RyYXZhXCIsIHtcbiAgICAgICAgdXNlcklkOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTVE9SQUdFX0RSQUZUX1JFR0lTVEVSKS51c2VyX2lkLFxuICAgICAgICBhdGhsZXRlSWQ6IHJlcy5kYXRhLmF0aGxldGUuaWQsXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICByb3V0ZXIucHVzaChcIi9wcm9maWxlXCIpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIH0pO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxGckxheW91dDI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5SdW5SaWRlIHwgUmVkaXJlY3Rpbmc8L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJSdW4gcmlkZSBkZXNjcmlwdGlvblwiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGZsZXgtY29sXCI+XG4gICAgICAgICAgPHA+UmVkaXJlY3RpbmcuLi48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9GckxheW91dDI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMocGFyYW1zKSB7XG4gIGNvbnN0IGRhdGEgPSBwYXJhbXMucXVlcnk7XG4gIHJldHVybiB7IHByb3BzOiB7IGRhdGEgfSB9O1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJSZWFjdCIsInVzZUVmZmVjdCIsImF4aW9zIiwiRnJMYXlvdXQyIiwiU1RPUkFHRV9EUkFGVF9SRUdJU1RFUiIsInVzZVJvdXRlciIsIkV4Y2hhbmdlVG9rZW4iLCJwcm9wcyIsImdldEF0aGxldGUiLCJ1cmwiLCJtZXRob2QiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0aGVuIiwicmVzIiwibGlua1RvU3RyYXZhIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwicG9zdCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19CQVNFX1VSTCIsInVzZXJJZCIsInVzZXJfaWQiLCJhdGhsZXRlSWQiLCJkYXRhIiwiYXRobGV0ZSIsImlkIiwicm91dGVyIiwicHVzaCIsImUiLCJwYXJhbXMiLCJjbGllbnRfaWQiLCJjbGllbnRfc2VjcmV0IiwiY29kZSIsImdyYW50X3R5cGUiLCJyZWZyZXNoX3Rva2VuIiwiYWNjZXNzX3Rva2VuIiwic2V0SXRlbSIsImRpdiIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJjbGFzc05hbWUiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/redirect/exchange-token.js\n"));

/***/ })

});