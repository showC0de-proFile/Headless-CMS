"use strict";
(() => {
var exports = {};
exports.id = 593;
exports.ids = [593];
exports.modules = {

/***/ 364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ screens_FAQQuestionScreen),
  "getStaticPaths": () => (/* reexport */ getStaticPaths),
  "getStaticProps": () => (/* reexport */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/components/commons/Footer/index.js
var Footer = __webpack_require__(933);
// EXTERNAL MODULE: ./src/components/commons/Menu/index.js
var Menu = __webpack_require__(95);
// EXTERNAL MODULE: ./src/theme/components.js + 1 modules
var components = __webpack_require__(1908);
// EXTERNAL MODULE: ./src/infra/cms/cmsService.js
var cmsService = __webpack_require__(9999);
;// CONCATENATED MODULE: external "react-datocms"
const external_react_datocms_namespaceObject = require("react-datocms");
;// CONCATENATED MODULE: external "datocms-structured-text-utils"
const external_datocms_structured_text_utils_namespaceObject = require("datocms-structured-text-utils");
// EXTERNAL MODULE: ./src/components/wrappers/pageHOC.js
var pageHOC = __webpack_require__(9324);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: external "react-icons/ai"
const ai_namespaceObject = require("react-icons/ai");
;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
;// CONCATENATED MODULE: external "react-icons/bs"
const bs_namespaceObject = require("react-icons/bs");
;// CONCATENATED MODULE: external "react-icons/tfi"
const tfi_namespaceObject = require("react-icons/tfi");
;// CONCATENATED MODULE: external "date-fns"
const external_date_fns_namespaceObject = require("date-fns");
;// CONCATENATED MODULE: ./src/screens/FAQQuestionScreen/index.js

















const StyledText = external_styled_components_default().p.withConfig({
    componentId: "sc-e233f3db-0"
})`
  cursor: pointer;
  width: ${components/* theme.space.x10 */.rS.space.x10};
  color: ${components/* theme.colors.neutral.x500 */.rS.colors.neutral.x500};
  text-align: ${components/* theme.typography.variants.display1.letterSpacing.md */.rS.typography.variants.display1.letterSpacing.md};
  font-weight: ${components/* theme.typography.variants.display1.fontWeight.xs */.rS.typography.variants.display1.fontWeight.xs};

  &:hover {
    color: ${components/* theme.colors.neutral.x700 */.rS.colors.neutral.x700};
    transition: 0.3s ease-in-out;
  }
`;
async function getStaticPaths() {
    const pathsQuery = `
    query($first: IntType, $skip: IntType) {
      allContentFaqQuestions(first: $first, skip: $skip) {
        id
        title
      }
    }
  `;
    const { data  } = await (0,cmsService/* cmsService */.Q)({
        query: pathsQuery,
        variables: {
            first: 100,
            skip: 0
        }
    });
    const paths = data.allContentFaqQuestions.map(({ id  })=>{
        return {
            params: {
                id
            }
        };
    });
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params , preview  }) {
    const { id  } = params;
    const contentQuery = `
  query ($id: ItemId) {
    contentFaqQuestion(filter: {id: {eq: $id}}) {
      title
      content {
        value
      }
      coverPostImage {
        url
        alt
      }
    }
    contentFaqCategory {
      datePost
      id
      postNameAuthor
      timePost
    }
    
  }
  
  `;
    const { data  } = await (0,cmsService/* cmsService */.Q)({
        query: contentQuery,
        variables: {
            id: id
        },
        preview
    });
    return {
        props: {
            cmsContent: data,
            id,
            title: data.contentFaqQuestion.title,
            content: data.contentFaqQuestion.content,
            coverPostImage: data.contentFaqQuestion.coverPostImage,
            contentFaqCategory: data.contentFaqCategory,
            postNameAuthor: data.contentFaqCategory.postNameAuthor,
            timePost: data.contentFaqCategory.timePost ? new Date(data.contentFaqCategory.timePost).toISOString() : null
        }
    };
}
function FAQQuestionScreen({ cmsContent , coverPostImage , contentFaqCategory , postNameAuthor , timePost ,  }) {
    const router = (0,router_namespaceObject.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: cmsContent.contentFaqQuestion.title
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Menu/* Menu */.v, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components/* Box */.xu, {
                tag: "main",
                styleSheet: {
                    flex: 1,
                    backgroundColor: components/* theme.colors.neutral.x050 */.rS.colors.neutral.x050,
                    paddingTop: components/* theme.space.x20 */.rS.space.x20,
                    paddingHorizontal: components/* theme.space.x4 */.rS.space.x4
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components/* Box */.xu, {
                    styleSheet: {
                        flexDirection: "column",
                        width: "100%",
                        maxWidth: components/* theme.space.xcontainer_lg */.rS.space.xcontainer_lg,
                        marginHorizontal: "auto"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledText, {
                                onClick: ()=>router.back(),
                                style: {
                                    flex: 1
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(ai_namespaceObject.AiOutlineArrowLeft, {
                                        style: {
                                            position: "relative",
                                            top: "2px"
                                        }
                                    }),
                                    "Back"
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components/* Text */.xv, {
                            tag: "h1",
                            variant: "heading1",
                            children: cmsContent.contentFaqQuestion.title
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: 10
                            },
                            children: [
                                contentFaqCategory && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components/* Text */.xv, {
                                    tag: "h1",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(bs_namespaceObject.BsCalendar3, {
                                            style: {
                                                position: "relative",
                                                top: "1px",
                                                width: "30px"
                                            }
                                        }),
                                        (0,external_date_fns_namespaceObject.format)(new Date(contentFaqCategory.datePost), "dd.MM.yyyy")
                                    ]
                                }),
                                postNameAuthor && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components/* Text */.xv, {
                                    tag: "p",
                                    variant: "body1",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(tfi_namespaceObject.TfiFaceSmile, {
                                            style: {
                                                position: "relative",
                                                top: "1px",
                                                width: "30px"
                                            }
                                        }),
                                        postNameAuthor
                                    ]
                                }),
                                timePost && (0,external_date_fns_namespaceObject.isValid)(new Date(timePost)) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components/* Text */.xv, {
                                    tag: "p",
                                    variant: "body1",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaClock, {
                                            style: {
                                                position: "relative",
                                                top: "1px",
                                                width: "30px"
                                            }
                                        }),
                                        (0,external_date_fns_namespaceObject.format)(new Date(timePost), "HH:mm")
                                    ]
                                })
                            ]
                        }),
                        coverPostImage && coverPostImage.url && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: coverPostImage.url,
                                    alt: cmsContent.contentFaqQuestion.title,
                                    layout: "responsive",
                                    width: 500,
                                    height: 300
                                }),
                                coverPostImage.alt && /*#__PURE__*/ jsx_runtime_.jsx(components/* Text */.xv, {
                                    variant: "body4",
                                    style: {
                                        marginTop: "0px",
                                        backgroundColor: components/* theme.colors.neutral.x200 */.rS.colors.neutral.x200,
                                        padding: 5,
                                        color: components/* theme.colors.neutral.x500 */.rS.colors.neutral.x500
                                    },
                                    children: coverPostImage.alt
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_datocms_namespaceObject.StructuredText, {
                            data: cmsContent.contentFaqQuestion.content,
                            customNodeRules: [
                                (0,external_react_datocms_namespaceObject.renderNodeRule)(external_datocms_structured_text_utils_namespaceObject.isHeading, ({ node , children , key  })=>{
                                    const tag = `h${node.level}`;
                                    const variant = `heading${node.level}`;
                                    return /*#__PURE__*/ jsx_runtime_.jsx(components/* Text */.xv, {
                                        tag: tag,
                                        variant: variant,
                                        children: children
                                    }, key);
                                }), 
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* Footer */.$, {})
        ]
    });
}
/* harmony default export */ const screens_FAQQuestionScreen = ((0,pageHOC/* pageHOC */.W)(FAQQuestionScreen));

;// CONCATENATED MODULE: ./pages/faq/[id].js



/***/ }),

/***/ 1712:
/***/ ((module) => {

module.exports = require("lodash/get");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,675,89], () => (__webpack_exec__(364)));
module.exports = __webpack_exports__;

})();