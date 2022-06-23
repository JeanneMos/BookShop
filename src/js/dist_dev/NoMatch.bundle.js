"use strict";
(self["webpackChunkespace_souvenir"] = self["webpackChunkespace_souvenir"] || []).push([["NoMatch"],{

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Link/StyledLink.js":
/*!******************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Link/StyledLink.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ StyledLink; }
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");



/* import './link.scss'; */

function StyledLink(_ref) {
  var children = _ref.children,
      linkClass = _ref.linkClass,
      _ref$as = _ref.as,
      as = _ref$as === void 0 ? "link" : _ref$as,
      linkTo = _ref.linkTo,
      target = _ref.target,
      dataTestid = _ref.dataTestid;

  if (as === "ahref") {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: linkTo,
      target: target,
      "data-testid": dataTestid,
      className: linkClass
    }, children);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: linkTo,
    className: linkClass
  }, children);
}
StyledLink.defaultProps = {
  linkClass: null
};
StyledLink.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired),
  linkClass: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/pages/NoMatch.js":
/*!*****************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/pages/NoMatch.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NoMatch; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Link_StyledLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Link/StyledLink */ "./docroot/themes/custom/souvenirs/src/js/components/Link/StyledLink.js");
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/Layout */ "./docroot/themes/custom/souvenirs/src/js/layouts/Layout.js");
/* harmony import */ var _services_scrollSmoothToElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/scrollSmoothToElement */ "./docroot/themes/custom/souvenirs/src/js/services/scrollSmoothToElement.js");




function NoMatch() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.title = "Espace Souvenirs";
    (0,_services_scrollSmoothToElement__WEBPACK_IMPORTED_MODULE_3__["default"])();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "layout-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Page introuvable (404)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Cette page est introuvable ou a \xE9t\xE9 d\xE9plac\xE9e."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Utilisez le menu pour naviguer dans les diff\xE9rentes rubriques du site."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Link_StyledLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    linkTo: "/",
    linkClass: "bg-current"
  }, "RETOUR \xC0 L'ACCUEIL")));
}

/***/ })

}]);
//# sourceMappingURL=NoMatch.bundle.js.map