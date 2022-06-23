"use strict";
(self["webpackChunkespace_souvenir"] = self["webpackChunkespace_souvenir"] || []).push([["Landing"],{

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Search/Search.js":
/*!****************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Search/Search.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Search; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./docroot/themes/custom/souvenirs/src/js/constants/index.js");
/* harmony import */ var _services_useGetQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/useGetQuery */ "./docroot/themes/custom/souvenirs/src/js/services/useGetQuery.js");
/* harmony import */ var _Icons_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Icons/Icon */ "./docroot/themes/custom/souvenirs/src/js/components/Icons/Icon.js");
/* harmony import */ var _Loader_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Loader/Loader */ "./docroot/themes/custom/souvenirs/src/js/components/Loader/Loader.js");
/* harmony import */ var _SearchList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SearchList */ "./docroot/themes/custom/souvenirs/src/js/components/Search/SearchList.js");







function Search() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      profiles = _useState2[0],
      getProfiles = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      userInput = _useState4[0],
      setUserInput = _useState4[1];

  var _useGetQuery = (0,_services_useGetQuery__WEBPACK_IMPORTED_MODULE_3__["default"])({
    key: "posts",
    API: _constants__WEBPACK_IMPORTED_MODULE_2__.APIJsonPlaceholder,
    staleTime: 30000,
    cacheTime: Infinity
  }),
      data = _useGetQuery.data,
      error = _useGetQuery.error,
      isFetching = _useGetQuery.isFetching;

  var handleUserInput = function handleUserInput(_ref) {
    var target = _ref.target;
    setUserInput(target.value);

    if (target.value.length > 3 && data && data.length) {
      var searchedValues = data.filter(function (post) {
        return post.title.includes(target.value.toLowerCase());
      });
      var firstItemsFromValues = searchedValues.length > 5 ? searchedValues.slice(0, 5) : searchedValues;
      getProfiles(firstItemsFromValues);
    } else {
      getProfiles([]);
    }
  };

  var handleSearch = function handleSearch(e) {
    e.preventDefault();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "search-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("form", {
    onSubmit: handleSearch,
    className: "search-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("legend", null, "Recherche d'un espace souvenirs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "search"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
    "data-testid": "searchInput",
    type: "search",
    placeholder: "Rechercher le nom de votre proche disparu",
    value: userInput,
    onChange: handleUserInput
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    type: "submit",
    className: "search-button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "recherche",
    iconClass: "search-icon"
  }))))), isFetching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Loader_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    position: "center"
  }) : null, error ? "Désolé il y a une erreur, merci de réessayer plus tard" : null, Number.isNaN(data) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: "fetch-error-message"
  }, "Nous avons rencontr\xE9 une erreur, merci de r\xE9essayer plus tard"), profiles && profiles.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_SearchList__WEBPACK_IMPORTED_MODULE_6__["default"], {
    profiles: profiles
  }) : null);
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Search/SearchList.js":
/*!********************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Search/SearchList.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SearchList; }
/* harmony export */ });
/* harmony import */ var Images_bg_images_img_bg_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Images/bg-images/img-bg.jpg */ "./docroot/themes/custom/souvenirs/src/assets/images/bg-images/img-bg.jpg");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");



function SearchList(_ref) {
  var profiles = _ref.profiles;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", {
    className: "search-results",
    "data-testid": "searchResults"
  }, profiles.map(function (profile) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
      className: "search-result-item",
      key: "profile_".concat(profile.id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
      width: "110",
      height: "60",
      alt: "",
      src: Images_bg_images_img_bg_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "search-result-description"
    }, profile.title));
  }));
}
SearchList.propTypes = {
  profiles: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().objectOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().any))).isRequired
};

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/pages/Landing.js":
/*!*****************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/pages/Landing.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Landing; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Search_Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Search/Search */ "./docroot/themes/custom/souvenirs/src/js/components/Search/Search.js");
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/Layout */ "./docroot/themes/custom/souvenirs/src/js/layouts/Layout.js");
/* harmony import */ var _services_scrollSmoothToElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/scrollSmoothToElement */ "./docroot/themes/custom/souvenirs/src/js/services/scrollSmoothToElement.js");




function Landing() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.title = "Landing page";
    (0,_services_scrollSmoothToElement__WEBPACK_IMPORTED_MODULE_3__["default"])();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "landing-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Search_Search__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/assets/images/bg-images/img-bg.jpg":
/*!********************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/assets/images/bg-images/img-bg.jpg ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "80c24e06fcdc2d8c4176f98e2a86b2ca.jpg");

/***/ })

}]);
//# sourceMappingURL=Landing.bundle.js.map