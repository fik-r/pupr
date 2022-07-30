"use strict";
exports.id = 938;
exports.ids = [938];
exports.modules = {

/***/ 938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "e": () => (/* reexport */ _CardCategory),
  "X": () => (/* reexport */ _CardGroup)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(3);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./components/FrButton/index.js
var FrButton = __webpack_require__(309);
;// CONCATENATED MODULE: ./components/FrCard/_Card.js



const FrCard = (props)=>{
    const { onClickAction , className , title , category , labelAction , children , selected , disabled  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()("card w-96 bg-base-100 border border-lightgrey rounded-[5px] divide-y divide-lightgrey mt-5", className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-between m-[15px]",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-muted font-semibold fr-text-body",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-accent fr-text-body font-semibold",
                        children: category
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "px-[18px] py-[15px]",
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "px-[18px] py-[15px]",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(FrButton/* default */.Z, {
                            block: true,
                            color: "secondary",
                            selected: selected,
                            disabled: disabled,
                            onClick: ()=>{
                                onClickAction();
                            },
                            label: labelAction
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const _Card = (FrCard);

;// CONCATENATED MODULE: ./components/FrCard/_CardCategory.js


const FrCardCategory = (props)=>{
    const { rules  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(_Card, {
        className: "w-[236px]",
        labelAction: "Pilih Kategori",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            className: "px-[18px] list-disc list-outside",
            children: rules.map((rule, index)=>{
                return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "fr-text-caption text-black",
                    children: rule
                }, index);
            })
        })
    });
};
/* harmony default export */ const _CardCategory = (FrCardCategory);

;// CONCATENATED MODULE: ./components/FrCard/_CardGroup.js


const FrCardGroup = (props)=>{
    const { captainName  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(_Card, {
        className: "w-[236px]",
        labelAction: "Masuk Group",
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text-muted fr-text-caption font-medium",
                    children: "Ketua Group"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text-black fr-text-body font-medium",
                    children: captainName
                })
            ]
        })
    });
};
/* harmony default export */ const _CardGroup = (FrCardGroup);

;// CONCATENATED MODULE: ./components/FrCard/index.js





/***/ })

};
;