"use strict";
(self["webpackChunkespace_souvenir"] = self["webpackChunkespace_souvenir"] || []).push([["LoginMenu"],{

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Header/LoginMenu.js":
/*!*******************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Header/LoginMenu.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LoginMenu; }
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Icons_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icons/Icon */ "./docroot/themes/custom/souvenirs/src/js/components/Icons/Icon.js");



function LoginMenu(_ref) {
  var handleLogIn = _ref.handleLogIn;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    onClick: handleLogIn,
    "data-testid": "loginMenu",
    className: "dropdown-toggle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "user",
    iconClass: "user-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "user-login-connexion"
  }, "Se connecter"));
}
LoginMenu.propTypes = {
  handleLogIn: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired)
};

/***/ })

}]);
//# sourceMappingURL=LoginMenu.bundle.js.map