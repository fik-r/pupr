"use strict";
exports.id = 815;
exports.ids = [815];
exports.modules = {

/***/ 3815:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "r": () => (/* reexport */ _DropdownField),
  "T": () => (/* reexport */ _TextField)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/FrField/_TextField.js


const FrTextField = ({ label , placeholder , inputType , icon , containerClass , value , onChange , pattern , errorMessage , isError ,  })=>{
    const { 0: showIsError , 1: setShowIsError  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `form-control w-[268px] ${containerClass}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                className: "label",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "fr-text-caption text-black",
                    children: label
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center relative",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: inputType,
                        placeholder: placeholder,
                        className: "input input-bordered w-full fr-text-body placeholder-darkgret border-lightgrey rounded-[5px]",
                        required: true,
                        value: value,
                        pattern: pattern,
                        onChange: (e)=>{
                            setShowIsError(true);
                            onChange(e);
                        }
                    }),
                    icon && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "absolute mr-[1.1rem] right-0",
                        src: icon
                    })
                ]
            }),
            showIsError && isError && /*#__PURE__*/ jsx_runtime_.jsx("label", {
                className: "label",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "fr-text-caption text-accent",
                    children: errorMessage
                })
            })
        ]
    });
};
/* harmony default export */ const _TextField = (FrTextField);

;// CONCATENATED MODULE: ./components/FrField/_DropdownField.js

const FrDropdownField = ({ label , placeholder , items , onChange  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "form-control w-[268px] max-w-xs",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                className: "label",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "fr-text-caption text-black",
                    children: label
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex items-center relative",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                    defaultValue: "",
                    onChange: onChange,
                    required: true,
                    className: "select select-bordered w-full max-w-xs fr-text-body placeholder-darkgrey border-lightgrey rounded-[5px] font-medium",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: "",
                            disabled: true,
                            children: placeholder
                        }),
                        items.map((item, index)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: item.value,
                                children: item.label
                            }, index);
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const _DropdownField = (FrDropdownField);

;// CONCATENATED MODULE: ./components/FrField/index.js





/***/ })

};
;