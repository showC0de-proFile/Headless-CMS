"use strict";
exports.id = 89;
exports.ids = [89];
exports.modules = {

/***/ 933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _infra_cms_CMSProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3761);
/* harmony import */ var _theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1908);



function Footer() {
    const description = (0,_infra_cms_CMSProvider__WEBPACK_IMPORTED_MODULE_1__/* .getCMSContent */ .b)("globalContent.globalFooter.description");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme_components__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .xu, {
        tag: "footer",
        styleSheet: {
            backgroundColor: _theme_components__WEBPACK_IMPORTED_MODULE_2__/* .theme.colors.neutral.x800 */ .rS.colors.neutral.x800
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_components__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .xu, {
            styleSheet: {
                overflow: "hidden",
                maxWidth: _theme_components__WEBPACK_IMPORTED_MODULE_2__/* .theme.space.xcontainer_xl */ .rS.space.xcontainer_xl,
                marginLeft: "auto",
                marginRight: "auto",
                paddingVertical: _theme_components__WEBPACK_IMPORTED_MODULE_2__/* .theme.space.x8 */ .rS.space.x8,
                paddingHorizontal: _theme_components__WEBPACK_IMPORTED_MODULE_2__/* .theme.space.x4 */ .rS.space.x4
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_components__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .xv, {
                    styleSheet: {
                        justifyContent: "center",
                        color: _theme_components__WEBPACK_IMPORTED_MODULE_2__/* .theme.colors.neutral.x000 */ .rS.colors.neutral.x000
                    },
                    children: [
                        "\xa9 ",
                        new Date().getFullYear(),
                        " ",
                        description
                    ]
                }),
                 false && /*#__PURE__*/ 0
            ]
        })
    });
}


/***/ }),

/***/ 95:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1908);


function Menu() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme_components__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .xu, {
        tag: "header",
        styleSheet: {
            position: "fixed",
            width: "100%",
            padding: _theme_components__WEBPACK_IMPORTED_MODULE_1__/* .theme.space.x4 */ .rS.space.x4,
            backgroundImage: "linear-gradient(180deg,rgb(0 0 0 / 60%) 0%,rgba(0,212,255,0) 100%)",
            backdropFilter: "blur(5px)",
            zIndex: 1
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme_components__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .xu, {
            styleSheet: {
                maxWidth: _theme_components__WEBPACK_IMPORTED_MODULE_1__/* .theme.space.xcontainer_xl */ .rS.space.xcontainer_xl,
                marginHorizontal: "auto"
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme_components__WEBPACK_IMPORTED_MODULE_1__/* .Link */ .rU, {
                href: "/",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme_components__WEBPACK_IMPORTED_MODULE_1__/* .Image */ .Ee, {
                    src: "https://raw.githubusercontent.com/showC0de-proFile/logos/main/logo.svg",
                    width: "100"
                })
            })
        })
    });
}


/***/ }),

/***/ 9324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ pageHOC)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _infra_cms_CMSProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3761);


function pageHOC(Component) {
    return function Wrapper(props) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_infra_cms_CMSProvider__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            cmsContent: props.cmsContent,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...props
            })
        });
    };
}


/***/ }),

/***/ 3761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CMSProvider),
/* harmony export */   "b": () => (/* binding */ getCMSContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);



const CMSContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({
    cmsContent: {}
});
const getCMSContent = (path = "")=>{
    const cmsContent = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(CMSContext).cmsContent;
    if (path === "") return cmsContent;
    const output = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(cmsContent, path);
    if (!output) throw new Error(`The key could not be found: "${path}". Review your query and try again.`);
    return output;
};
function CMSProvider({ cmsContent , children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CMSContext.Provider, {
        value: {
            cmsContent
        },
        children: children
    });
}


/***/ }),

/***/ 9999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ cmsService)
/* harmony export */ });
const TOKEN = process.env.TOKEN_CMS;
const BASE_ENDPOINT = process.env.DATA_CMS;
const PREVIEW_ENDPOINT = process.env.PREVIEW_CMS;
const globalQuery = `
  query {
    globalFooter {
      description
    }
  }
`;
async function cmsService({ query , variables , preview  }) {
    const ENDPOINT = preview ? PREVIEW_ENDPOINT : BASE_ENDPOINT;
    try {
        const pageContentResponse = await fetch(ENDPOINT, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Authorization: "Bearer " + TOKEN
            },
            body: JSON.stringify({
                query,
                variables
            })
        }).then(async (respostaDoServer)=>{
            const body = await respostaDoServer.json();
            if (!body.errors) return body;
            throw new Error(JSON.stringify(body));
        });
        const globalContentResponse = await fetch(ENDPOINT, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Authorization: "Bearer " + TOKEN
            },
            body: JSON.stringify({
                query: globalQuery
            })
        }).then(async (respostaDoServer)=>{
            const body = await respostaDoServer.json();
            if (!body.errors) return body;
            throw new Error(JSON.stringify(body));
        });
        return {
            data: {
                ...pageContentResponse.data,
                globalContent: {
                    ...globalContentResponse.data
                }
            }
        };
    } catch (err) {
        throw new Error(err.message);
    }
}


/***/ }),

/***/ 1908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "xu": () => (/* binding */ Box),
  "zx": () => (/* binding */ Button),
  "Ee": () => (/* binding */ Image),
  "rU": () => (/* binding */ Link),
  "xv": () => (/* binding */ Text),
  "rS": () => (/* reexport */ theme)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/theme/theme.js
const theme = {
    colors: {
        primary: {
            x050: "#D6C985",
            x100: "#CBB960",
            x200: "#D0BA4D",
            x300: "#CBB33E",
            x400: "#CCB43A",
            x500: "#B39B21",
            x600: "#AC920C",
            x700: "#85710C",
            x800: "#71600A",
            x900: "#645405"
        },
        secundary: {
            x050: "#66A4FE",
            x100: "#3885F5",
            x200: "#0065F7",
            x300: "#0B5ACC",
            x400: "#194E9A",
            x500: "#1D4681",
            x600: "#0C3063",
            x700: "#132C50",
            x800: "#0E1F38",
            x900: "#091526"
        },
        neutral: {
            x000: "#FFFFFF",
            x050: "#F7F7F7",
            x100: "#E1E1E1",
            x200: "#CFCFCF",
            x300: "#B1B1B1",
            x400: "#9E9E9E",
            x500: "#7E7E7E",
            x600: "#626262",
            x700: "#515151",
            x800: "#3B3B3B",
            x900: "#222222",
            x999: "#111111"
        }
    },
    breakpoints: {
        xs: 0,
        sm: 480,
        md: 768,
        lg: 992,
        xl: 1200
    },
    borderRadius: {
        none: "0",
        default: "4px",
        sm: "2px",
        md: "6px",
        lg: "8px",
        xl: "12px",
        full: "9999px"
    },
    typography: {
        variants: {
            display1: {
                fontSize: {
                    xs: "48px",
                    md: "60px"
                },
                letterSpacing: {
                    xs: "-0.04px"
                },
                fontWeight: {
                    xs: "900"
                }
            },
            heading1: {
                fontSize: {
                    xs: "36px",
                    md: "48px"
                },
                letterSpacing: {
                    xs: "-0.04px"
                },
                fontWeight: {
                    xs: "900"
                }
            },
            heading2: {
                fontSize: {
                    xs: "24px",
                    md: "36px"
                },
                letterSpacing: {
                    xs: "-0.04px"
                },
                fontWeight: {
                    xs: "900"
                }
            },
            heading3: {
                fontSize: {
                    xs: "20px",
                    md: "30px"
                },
                letterSpacing: {
                    xs: "-0.04px"
                },
                fontWeight: {
                    xs: "bold"
                }
            },
            heading4: {
                fontSize: {
                    xs: "16px",
                    md: "20px"
                },
                letterSpacing: {
                    xs: "-0.04px"
                },
                fontWeight: {
                    xs: "bold"
                }
            },
            heading5: {
                fontSize: {
                    xs: "14px",
                    md: "16px"
                },
                letterSpacing: {
                    xs: "-0.04px"
                },
                fontWeight: {
                    xs: "bold"
                }
            },
            body1: {
                fontSize: {
                    xs: "18px"
                },
                fontWeight: {
                    xs: "400"
                }
            },
            body2: {
                fontSize: {
                    xs: "16px"
                },
                fontWeight: {
                    xs: "400"
                }
            },
            body3: {
                fontSize: {
                    xs: "14px"
                },
                fontWeight: {
                    xs: "400"
                }
            },
            body4: {
                fontSize: {
                    xs: "12px"
                },
                fontWeight: {
                    xs: "400"
                }
            },
            body5: {
                fontSize: {
                    xs: "8px"
                },
                fontWeight: {
                    xs: "400"
                }
            }
        }
    },
    space: {
        x0: "0",
        xpx: "1px",
        "x0.5": "2px",
        x1: "4px",
        "x1.5": "6px",
        x2: "8px",
        "x2.5": "10px",
        x3: "12px",
        "x3.5": "14px",
        x4: "16px",
        x5: "20px",
        x6: "24px",
        x7: "1.75rem",
        x8: "32px",
        x9: "36px",
        x10: "40px",
        x11: "44px",
        x12: "48px",
        x14: "56px",
        x16: "64px",
        x20: "80px",
        x24: "96px",
        x28: "112px",
        x32: "128px",
        x36: "144px",
        x40: "160px",
        x44: "176px",
        x48: "192px",
        x52: "208px",
        x56: "224px",
        x60: "240px",
        x64: "256px",
        x72: "288px",
        x80: "320px",
        x96: "384px",
        xcontainer_xs: "0",
        xcontainer_sm: "640px" /* 40rem */ ,
        xcontainer_md: "768px" /* 48rem */ ,
        xcontainer_lg: "1024px" /* 64rem */ ,
        xcontainer_xl: "1280px" /* 80rem */ ,
        x1_1: "100%",
        x1_2: "50%",
        x1_3: "33.333333%",
        x2_3: "66.666667%",
        x1_4: "25%",
        x2_4: "50%",
        x3_4: "75%",
        x1_5: "20%",
        x2_5: "40%",
        x3_5: "60%",
        x4_5: "80%",
        x1_6: "16.666667%",
        x2_6: "33.333333%",
        x3_6: "50%",
        x4_6: "66.666667%",
        x5_6: "83.333333%",
        x1_1: "8.333333%",
        x2_1: "16.666667%",
        x3_1: "25%",
        x4_1: "33.333333%",
        x5_1: "41.666667%",
        x6_1: "50%",
        x7_1: "58.333333%",
        x8_1: "66.666667%",
        x9_1: "75%",
        x10_1: "83.333333%",
        x11_1: "91.666667%"
    }
};

;// CONCATENATED MODULE: ./src/theme/components.js


``;




const StyledBox = external_styled_components_default().div.withConfig({
    componentId: "sc-cf28bb46-0"
})`
  ${parseCSS}
`;
const Box = /*#__PURE__*/ external_react_default().forwardRef(({ tag , ...props }, ref)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(StyledBox, {
        ref: ref,
        as: tag,
        ...props
    });
});
Box.defaultProps = {
    styleSheet: {}
};
function Link({ href , ...props }) {
    const finalProps = {
        ...props,
        styleSheet: {
            textDecoration: "none",
            color: theme.colors.primary.x500,
            hover: {
                color: theme.colors.primary.x200
            },
            ...props.styleSheet
        }
    };
    if (href.startsWith("http")) {
        return /*#__PURE__*/ jsx_runtime_.jsx(Box, {
            as: "a",
            ...finalProps
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        passHref: true,
        href: href,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Box, {
            as: "a",
            ...finalProps
        })
    });
}
function Text({ tag , variant , styleSheet , ...props }) {
    const defaultTag = "p";
    const typographyVariantStyles = theme.typography.variants?.[variant] || theme.typography.variants.body2;
    return /*#__PURE__*/ jsx_runtime_.jsx(Box, {
        as: tag || defaultTag,
        styleSheet: {
            display: "flex",
            ...typographyVariantStyles,
            ...styleSheet
        },
        ...props
    });
}
function Button({ href , size , colorVariant , ...props }) {
    // [Theme] ============================================================
    const buttonSizes = {
        xs: (theme)=>({
                textVariant: "body4",
                paddingHorizontal: theme.space?.x2,
                paddingVertical: theme.space?.x2
            }),
        sm: (theme)=>({
                textVariant: "body3",
                paddingHorizontal: theme.space?.x4,
                paddingVertical: theme.space?.x3
            }),
        md: (theme)=>({
                textVariant: "body3",
                paddingHorizontal: theme.space?.x4,
                paddingVertical: theme.space?.x3
            }),
        lg: (theme)=>({
                textVariant: "body2",
                paddingHorizontal: theme.space?.x5,
                paddingVertical: theme.space?.x3
            }),
        xl: (theme)=>({
                textVariant: "body2",
                paddingHorizontal: theme.space?.x6,
                paddingVertical: theme.space?.x4
            })
    };
    const buttonStyles = {
        filled: ({ mainColor , contrastColor , mainColorStrong  })=>({
                backgroundColor: mainColor,
                borderColor: mainColor,
                color: contrastColor,
                hover: {
                    backgroundColor: mainColorStrong
                },
                focus: {
                    backgroundColor: mainColorStrong
                }
            })
    };
    // ============================================================
    const hasLink = Boolean(href);
    const as = hasLink ? Link : "button";
    const buttonSizeStyles = buttonSizes[size](theme);
    return /*#__PURE__*/ jsx_runtime_.jsx(Box, {
        as: as,
        href,
        styleSheet: {
            display: "inline-flex",
            textDecoration: "none",
            borderRadius: theme.borderRadius.md,
            ...buttonSizeStyles,
            ...buttonStyles.filled({
                mainColor: theme.colors[colorVariant || "primary"].x800,
                mainColorLight: theme.colors[colorVariant || "primary"].x700,
                mainColorStrong: theme.colors[colorVariant || "primary"].x900,
                contrastColor: theme.colors.neutral.x000
            }),
            ...theme.typography.variants[buttonSizeStyles.textVariant],
            ...props.styleSheet
        },
        ...props
    });
}
Button.defaultProps = {
    // TODO; Isos aqui
    textVariant: "body2",
    size: "md"
};
function Image({ ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Box, {
        as: "img",
        styleSheet: {
            maxWidth: "100%",
            ...props.styleSheet
        },
        ...props
    });
}
// ========================================================================================
function parseCSS({ styleSheet  }) {
    const statesSet = new Set([
        "hover",
        "focus",
        "disabled"
    ]);
    function parseRule(styleKeyFormated, styleValue) {
        if (styleKeyFormated.includes("horizontal")) {
            return `
        ${styleKeyFormated.replace("horizontal", "left")}: ${styleValue};
        ${styleKeyFormated.replace("horizontal", "right")}: ${styleValue};
      `;
        }
        if (styleKeyFormated.includes("vertical")) {
            return `
        ${styleKeyFormated.replace("vertical", "top")}: ${styleValue};
        ${styleKeyFormated.replace("vertical", "bottom")}: ${styleValue};
      `;
        }
        return `${styleKeyFormated}: ${styleValue};`;
    }
    function parser(styleSheet) {
        return (acc, styleKey)=>{
            const styleKeyFormated = styleKey.split(/(?=[A-Z])/).join("-").toLowerCase();
            const styleValue = styleSheet[styleKey];
            // [Handle States](:focus, :hover, :disabled )
            if (statesSet.has(styleKey)) {
                const stateValue = styleSheet[styleKey];
                if (!stateValue) return acc;
                return `
          ${acc}
          &:${styleKey},
          &[disabled] {
            ${styleKey === "disabled" ? "cursor: not-allowed;" : ""}
            ${Object.keys(stateValue).reduce(parser(stateValue), "")}
          }
        `;
            }
            // [Handle Responsivity]
            if (typeof styleValue === "object") {
                const styleValueBreakpoints = Object.keys(styleValue);
                return `
          ${acc}
          ${styleValueBreakpoints.map((breakpointName)=>{
                    const themeBreakpoints = theme.breakpoints;
                    const breakpointValue = themeBreakpoints[breakpointName];
                    // const cssRule = `${styleKeyFormated}: ${styleValue[breakpointName]};`;
                    const cssRule = parseRule(styleKeyFormated, styleValue[breakpointName]);
                    if (breakpointValue === 0) return cssRule;
                    return `
              @media (min-width: ${breakpointValue}px) {
                ${cssRule}
              }
            `;
                }).join("")}
          `;
            }
            return `
        ${acc}
        ${parseRule(styleKeyFormated, styleValue)}
      `;
        };
    }
    return Object.keys(styleSheet).reduce(parser(styleSheet), "");
}


/***/ })

};
;