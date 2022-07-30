"use strict";
(() => {
var exports = {};
exports.id = 388;
exports.ids = [388];
exports.modules = {

/***/ 454:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExchangeToken),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_FrLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(548);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);







function ExchangeToken(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        axios__WEBPACK_IMPORTED_MODULE_3___default().post("https://www.strava.com/oauth/token", null, {
            params: {
                client_id: 90543,
                client_secret: "d97aefd34f169bb8be5fc2c9efcb1413e74378a0",
                code: props.data.code,
                grant_type: "authorization_code"
            }
        }).then((res)=>{
            const { refresh_token , access_token  } = res.data;
            localStorage.setItem("refresh_token_strava", refresh_token);
            localStorage.setItem("access_token_strava", access_token);
            getAthlete();
        }).catch((err)=>{
            console.log(err);
        });
    }, []);
    function getAthlete() {
        axios__WEBPACK_IMPORTED_MODULE_3___default()({
            url: "https://www.strava.com/api/v3/athlete",
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("access_token_strava")}`
            }
        }).then((res)=>{
            linkToStrava(res.data.id);
        }).catch((err)=>{
            console.log(err);
        });
    }
    function linkToStrava(athleteId) {
        axios__WEBPACK_IMPORTED_MODULE_3___default().post("https://vrunride.dhmdev.xyz" + "/api/link-to-strava", {
            userId: JSON.parse(localStorage.getItem(_utils_constants__WEBPACK_IMPORTED_MODULE_5__/* .STORAGE_DRAFT_REGISTER */ .ng)).userId,
            athleteId: athleteId
        }).then((res)=>{
            router.push("/profile");
        }).catch((e)=>{
            console.log(e);
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_FrLayout__WEBPACK_IMPORTED_MODULE_4__/* .FrLayout2 */ .n, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                            children: "RunRide | Redirecting"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "description",
                            content: "Run ride description"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "icon",
                            href: "/favicon.ico"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex text-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Redirecting..."
                    })
                })
            ]
        })
    });
};
async function getServerSideProps(params) {
    const data = params.query;
    return {
        props: {
            data
        }
    };
}


/***/ }),

/***/ 167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [548,76], () => (__webpack_exec__(454)));
module.exports = __webpack_exports__;

})();