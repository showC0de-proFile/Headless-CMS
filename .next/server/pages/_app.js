"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
;// CONCATENATED MODULE: ./src/theme/GlobalStyle.js

const GlobalStyle = external_styled_components_.createGlobalStyle`
  * {
    box-sizing:  border-box;
  }
  html,
  body {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: sans-serif;
  }


  html {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
  }
  #__next,
  body {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    min-height: 100%;
    flex: 1;
  }

  a,
  button {
    cursor: pointer;
    transition: .3s ease-in-out;
  }
  a:hover,
  button:hover {
    opacity: 0.5;
  }
`;

;// CONCATENATED MODULE: ./pages/_app.js


function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(GlobalStyle, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}


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
var __webpack_exports__ = (__webpack_exec__(1089));
module.exports = __webpack_exports__;

})();