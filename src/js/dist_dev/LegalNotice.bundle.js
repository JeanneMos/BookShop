"use strict";
(self["webpackChunkespace_souvenir"] = self["webpackChunkespace_souvenir"] || []).push([["LegalNotice"],{

/***/ "./docroot/themes/custom/souvenirs/src/js/pages/LegalNotice.js":
/*!*********************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/pages/LegalNotice.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LegalNotice; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./docroot/themes/custom/souvenirs/src/js/constants/index.js");
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/Layout */ "./docroot/themes/custom/souvenirs/src/js/layouts/Layout.js");
/* harmony import */ var _services_scrollSmoothToElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/scrollSmoothToElement */ "./docroot/themes/custom/souvenirs/src/js/services/scrollSmoothToElement.js");
/* harmony import */ var _services_useGetQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/useGetQuery */ "./docroot/themes/custom/souvenirs/src/js/services/useGetQuery.js");





function LegalNotice() {
  var _useGetQuery = (0,_services_useGetQuery__WEBPACK_IMPORTED_MODULE_4__["default"])({
    key: "posts",
    API: _constants__WEBPACK_IMPORTED_MODULE_1__.APIJsonPlaceholder,
    staleTime: 10000,
    cacheTime: 300000
  }),
      data = _useGetQuery.data,
      isFetching = _useGetQuery.isFetching,
      error = _useGetQuery.error;

  var displayPosts = function displayPosts(postsArray) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, postsArray.map(function (post) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        key: post.id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, post.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, post.body));
    }));
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.title = "Mentions légales";
    (0,_services_scrollSmoothToElement__WEBPACK_IMPORTED_MODULE_3__["default"])();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "layout-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Mentions l\xE9gales"), isFetching ? "Fetching" : null, Number.isNaN(data) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "fetch-error-message"
  }, "Nous avons rencontr\xE9 une erreur, merci de r\xE9essayer plus tard"), data && data.length && displayPosts(data)));
}

/***/ })

}]);
//# sourceMappingURL=LegalNotice.bundle.js.map