"use strict";
exports.id = 548;
exports.ids = [548];
exports.modules = {

/***/ 548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "o": () => (/* reexport */ FrLayout1),
  "n": () => (/* reexport */ FrLayout2)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/FrLayout/_FrLayout-1.js

function FrLayout1({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "absolute -z-10 min-h-screen w-full bg-hero pb-[100px]",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                className: "fixed top-0 right-0 -z-10 mobile:w-[123px] mobile:h-[130px]",
                src: "/images/bg_1.svg"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                className: "fixed bottom-0 left-0 -z-10 mobile:w-[123px] mobile:h-[130px]",
                src: "/images/bg_2.svg"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                className: "absolute top-0 mobile:mx-auto mobile:right-0 mobile:left-0 mt-10 ml-14 -z-10",
                src: "/icons/fr_icon.svg"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container mt-44 bg-transparent mx-auto pb-44",
                children: children
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/FrToast/index.js
var FrToast = __webpack_require__(485);
;// CONCATENATED MODULE: ./components/FrLayout/_FrLayout-2.js


function FrLayout2({ children , error , success  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "absolute -z-10 min-h-screen w-full bg-white",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                className: "w-[252px] h-[265px] mobile:w-[123px] mobile:h-[130px] fixed top-0 right-0 -z-10 ",
                src: "/images/bg_1.svg"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                className: "w-[252px] h-[265px] mobile:w-[123px] mobile:h-[130px] fixed bottom-0 left-0 -z-10",
                src: "/images/bg_2.svg"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                className: "absolute top-0 mobile:mx-auto mobile:right-0 mobile:left-0 left-0 mt-10 ml-14 -z-10",
                src: "/icons/fr_icon.svg"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container bg-transparent pt-40 mobile:pt-[130px] mx-auto pb-[100px]",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FrToast/* FrToast */.u4, {
                error: error,
                success: success
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/FrLayout/index.js





/***/ }),

/***/ 485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bW": () => (/* binding */ ToastError),
/* harmony export */   "u4": () => (/* binding */ FrToast)
/* harmony export */ });
/* unused harmony export ToastSuccess */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



const ToastError = (msg)=>{
    return {
        id: Math.random(),
        value: msg
    };
};
const ToastSuccess = (msg)=>{
    return {
        id: Math.random(),
        value: msg
    };
};
const FrToast = (props)=>{
    const { error ={
        id: 0,
        value: ""
    } , success ={
        id: 0,
        value: ""
    }  } = props;
    const { 0: message , 1: setMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: isSuccess , 1: setIsSuccess  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: isError , 1: setIsError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const alertTimeout = 5000;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setMessage(error.value);
        setIsError(true);
        setIsSuccess(false);
        setTimeout(()=>{
            setIsError(false);
            setIsSuccess(false);
            setMessage("");
        }, alertTimeout);
        return ()=>{
            clearTimeout();
        };
    }, [
        error.id
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setMessage(success.value);
        setIsSuccess(true);
        setIsError(false);
        setTimeout(()=>{
            setIsError(false);
            setIsSuccess(false);
            setMessage("");
        }, alertTimeout);
        return ()=>{
            clearTimeout();
        };
    }, [
        success.id
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: message && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("fixed top-0 right-0 rounded-[5px] m-5 w-auto alert text-white", isSuccess ? "alert-success" : "", isError ? "alert-error" : ""),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    isSuccess && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "stroke-current flex-shrink-0 h-6 w-6",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        })
                    }),
                    isError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "stroke-current flex-shrink-0 h-6 w-6",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: message
                    })
                ]
            })
        })
    });
};



/***/ })

};
;