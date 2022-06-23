"use strict";
(self["webpackChunkespace_souvenir"] = self["webpackChunkespace_souvenir"] || []).push([["UserLogin"],{

/***/ "./docroot/themes/custom/souvenirs/src/js/pages/UserLogin.js":
/*!*******************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/pages/UserLogin.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UserLogin; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Forms_LoginUserForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Forms/LoginUserForm */ "./docroot/themes/custom/souvenirs/src/js/components/Forms/LoginUserForm.js");
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/Layout */ "./docroot/themes/custom/souvenirs/src/js/layouts/Layout.js");
/* harmony import */ var _services_scrollSmoothToElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/scrollSmoothToElement */ "./docroot/themes/custom/souvenirs/src/js/services/scrollSmoothToElement.js");




/* import './landing.scss'; */

function UserLogin() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.title = "Page d'utilisateur";
    (0,_services_scrollSmoothToElement__WEBPACK_IMPORTED_MODULE_3__["default"])();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "user-admin-login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Forms_LoginUserForm__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _typeof; }
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ })

}]);
//# sourceMappingURL=UserLogin.bundle.js.map