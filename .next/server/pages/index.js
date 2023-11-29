"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 1235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ screens_HomeScreen),
  "getStaticProps": () => (/* reexport */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
// EXTERNAL MODULE: ./src/components/commons/Menu/index.js
var Menu = __webpack_require__(95);
// EXTERNAL MODULE: ./src/components/commons/Footer/index.js
var Footer = __webpack_require__(933);
// EXTERNAL MODULE: ./src/theme/components.js + 1 modules
var components = __webpack_require__(1908);
// EXTERNAL MODULE: ./src/components/wrappers/pageHOC.js
var pageHOC = __webpack_require__(9324);
// EXTERNAL MODULE: ./src/infra/cms/cmsService.js
var cmsService = __webpack_require__(9999);
// EXTERNAL MODULE: ./src/infra/cms/CMSSectionRender.js + 8 modules
var CMSSectionRender = __webpack_require__(2100);
;// CONCATENATED MODULE: ./src/screens/HomeScreen/index.js








async function getStaticProps({ preview  }) {
    const { data: cmsContent  } = await (0,cmsService/* cmsService */.Q)({
        query: `
      query {
        pageHome {
          pageContent {
            section {
              componentName: __typename
              ... on CommonSeoBlockRecord {
                id
                title
              }
              ... on CommonMenuRecord {
                id
              }
              ... on CommonFooterRecord {
                id
                visible
              }
              ... on PagehomeHerosectionRecord {
                id
                title
                description
                ctalink
                ctatext
              }
            }
          }
        }
      }
    `,
        preview
    });
    return {
        props: {
            cmsContent
        },
        revalidate: 60
    };
}
function HomeScreen() {
    return /*#__PURE__*/ jsx_runtime_.jsx(CMSSectionRender/* CMSSectionRender */.R, {
        pageName: "pageHome"
    });
}
/* harmony default export */ const screens_HomeScreen = ((0,pageHOC/* pageHOC */.W)(HomeScreen));

;// CONCATENATED MODULE: ./pages/index.js



/***/ }),

/***/ 1712:
/***/ ((module) => {

module.exports = require("lodash/get");

/***/ }),

/***/ 2364:
/***/ ((module) => {

module.exports = require("lottie-web");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,89,859], () => (__webpack_exec__(1235)));
module.exports = __webpack_exports__;

})();