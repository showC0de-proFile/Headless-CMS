"use strict";
(() => {
var exports = {};
exports.id = 157;
exports.ids = [157];
exports.modules = {

/***/ 7821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
async function handler(req, res) {
    const previousPage = req.headers.referer;
    // IF YOU HAVE VISUALIZATION ON: TURN OFF
    if (req.preview) {
        res.clearPreviewData();
        res.writeHead(307, {
            Location: previousPage
        });
        return res.end();
    }
    const password = "PASSWORD";
    if (req.query.password !== password) {
        return res.status(401).json({
            message: "Invalid Password"
        });
    }
    // IF YOU HAVE TURNED OFF PREVIEW: TURN ON
    res.setPreviewData({});
    res.writeHead(307, {
        Location: previousPage
    });
    res.end();
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7821));
module.exports = __webpack_exports__;

})();