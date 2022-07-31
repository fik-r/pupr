"use strict";
exports.id = 309;
exports.ids = [309];
exports.modules = {

/***/ 1309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const FrButton = (props)=>{
    const { onClick , label , icon , color , block , className , disabled , selected , loading ,  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(`btn`, `normal-case`, `font-normal`, `${color == "primary" && !selected ? "btn-primary text-secondary" : ""}`, `${color == "secondary" && !selected ? "btn-secondary text-white" : ""}`, `${color == "accent" && !selected ? "btn-accent text-white" : ""}`, `${color == "light" && !selected ? "bg-white border-white text-black" : ""}`, `${selected ? "btn-accent text-white" : ""}`, `rounded-[5px]`, `${block ? "btn-block" : ""}`, `${disabled ? "btn-disabled" : ""}`, `${loading ? "loading" : ""}`, className),
        onClick: onClick,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex gap-x-2 items-center",
            children: [
                icon && !selected && !loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: icon
                }),
                !selected && !loading && label,
                selected && !loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/icons/ic_circle_done_white.svg"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FrButton);


/***/ })

};
;