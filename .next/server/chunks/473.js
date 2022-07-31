"use strict";
exports.id = 473;
exports.ids = [473];
exports.modules = {

/***/ 9473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6076);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);



const API = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: "https://vrunride.dhmdev.xyz"
});
API.interceptors.request.use((config)=>{
    if (localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_1__/* .ACCESS_TOKEN */ .LA)) {
        config.headers["Authorization"] = "Bearer " + localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_1__/* .ACCESS_TOKEN */ .LA);
    }
    return config;
}, (err)=>{
    return Promise.reject(err);
});
API.interceptors.response.use((res)=>{
    return res;
}, (err)=>{
    const originalRequest = err.config;
    if (err.config.url !== "api/refresh-token" && err.response.status === 401 && !originalRequest._retry && localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_1__/* .REFRESH_TOKEN */ .z6)) {
        originalRequest._retry = true;
        return API.post("api/refresh-token", {
            refreshToken: localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_1__/* .REFRESH_TOKEN */ .z6)
        }).then((res)=>{
            const payload = res.data.payload;
            localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_1__/* .ACCESS_TOKEN */ .LA, payload.accessToken);
            localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_1__/* .REFRESH_TOKEN */ .z6, payload.refreshToken);
            return API(originalRequest);
        }).catch((error)=>{
            localStorage.clear();
            next_router__WEBPACK_IMPORTED_MODULE_2___default().push("/login");
            return Promise.reject(error);
        });
    }
    return Promise.reject(err);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API);


/***/ })

};
;