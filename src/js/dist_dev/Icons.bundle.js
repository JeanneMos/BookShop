"use strict";
(self["webpackChunkespace_souvenir"] = self["webpackChunkespace_souvenir"] || []).push([["Icons"],{

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Icons/Icon.js":
/*!*************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Icons/Icon.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Icon; }
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _assets_svg_anneau_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/svg/anneau.svg */ "./docroot/themes/custom/souvenirs/src/assets/svg/anneau.svg");
/* harmony import */ var _assets_svg_book_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/svg/book.svg */ "./docroot/themes/custom/souvenirs/src/assets/svg/book.svg");
/* harmony import */ var _assets_svg_check_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/svg/check.svg */ "./docroot/themes/custom/souvenirs/src/assets/svg/check.svg");
/* harmony import */ var _assets_svg_chevron_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/svg/chevron.svg */ "./docroot/themes/custom/souvenirs/src/assets/svg/chevron.svg");
/* harmony import */ var _assets_svg_corbeille_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/svg/corbeille.svg */ "./docroot/themes/custom/souvenirs/src/assets/svg/corbeille.svg");
/* harmony import */ var _assets_svg_cross_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/svg/cross.svg */ "./docroot/themes/custom/souvenirs/src/assets/svg/cross.svg");
/* harmony import */ var _assets_svg_cross_red_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/svg/cross-red.svg */ "./docroot/themes/custom/souvenirs/src/assets/svg/cross-red.svg");
/* harmony import */ var _assets_svg_delete_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../assets/svg/delete.svg */ "./docroot/themes/custom/souvenirs/src/assets/svg/delete.svg");
/* harmony import */ var _assets_svg_devis_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../assets/svg/devis.svg */ "./docroot/themes/custom/souvenirs/src/assets/svg/devis.svg");
/* harmony import */ var _assets_svg_edit_picture_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../assets/svg/edit-picture.svg */ "./docroot/themes/custom/souvenirs/src/assets/svg/edit-picture.svg");
/* harmony import */ var _assets_svg_envelope_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../assets/svg/envelope.svg */ "./docroot/themes/custom/souvenirs/src/assets/svg/envelope.svg");
/* harmony import */ var _assets_svg_geoloc_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../assets/svg/geoloc.svg */ "./docroot/themes/custom/souvenirs/src/assets/svg/geoloc.svg");
/* harmony import */ var _assets_svg_itinerary_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../assets/svg/itinerary.svg */ "./docroot/themes/custom/souvenirs/src/assets/svg/itinerary.svg");
/* harmony import */ var _assets_svg_link_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../assets/svg/link.svg */ "./docroot/themes/custom/souvenirs/src/assets/svg/link.svg");
/* harmony import */ var _assets_svg_loader_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../assets/svg/loader.svg */ "./docroot/themes/custom/souvenirs/src/assets/svg/loader.svg");
/* harmony import */ var _assets_svg_logout_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../assets/svg/logout.svg */ "./docroot/themes/custom/souvenirs/src/assets/svg/logout.svg");
/* harmony import */ var _assets_svg_medaille_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../assets/svg/medaille.svg */ "./docroot/themes/custom/souvenirs/src/assets/svg/medaille.svg");
/* harmony import */ var _assets_svg_next_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../assets/svg/next.svg */ "./docroot/themes/custom/souvenirs/src/assets/svg/next.svg");
/* harmony import */ var _assets_svg_pencil_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../assets/svg/pencil.svg */ "./docroot/themes/custom/souvenirs/src/assets/svg/pencil.svg");
/* harmony import */ var _assets_svg_photo_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../assets/svg/photo.svg */ "./docroot/themes/custom/souvenirs/src/assets/svg/photo.svg");
/* harmony import */ var _assets_svg_picture_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../assets/svg/picture.svg */ "./docroot/themes/custom/souvenirs/src/assets/svg/picture.svg");
/* harmony import */ var _assets_svg_picture_placeholder_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../assets/svg/picture-placeholder.svg */ "./docroot/themes/custom/souvenirs/src/assets/svg/picture-placeholder.svg");
/* harmony import */ var _assets_svg_profile_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../assets/svg/profile.svg */ "./docroot/themes/custom/souvenirs/src/assets/svg/profile.svg");
/* harmony import */ var _assets_svg_save_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../assets/svg/save.svg */ "./docroot/themes/custom/souvenirs/src/assets/svg/save.svg");
/* harmony import */ var _assets_svg_search_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../assets/svg/search.svg */ "./docroot/themes/custom/souvenirs/src/assets/svg/search.svg");
/* harmony import */ var _assets_svg_share_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../assets/svg/share.svg */ "./docroot/themes/custom/souvenirs/src/assets/svg/share.svg");
/* harmony import */ var _assets_svg_shareEmail_svg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../assets/svg/shareEmail.svg */ "./docroot/themes/custom/souvenirs/src/assets/svg/shareEmail.svg");
/* harmony import */ var _assets_svg_upload_svg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../assets/svg/upload.svg */ "./docroot/themes/custom/souvenirs/src/assets/svg/upload.svg");
/* harmony import */ var _assets_svg_user_svg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../assets/svg/user.svg */ "./docroot/themes/custom/souvenirs/src/assets/svg/user.svg");
/* harmony import */ var _assets_svg_user_fill_svg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../assets/svg/user-fill.svg */ "./docroot/themes/custom/souvenirs/src/assets/svg/user-fill.svg");
/* harmony import */ var _assets_svg_whatsapp_svg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../assets/svg/whatsapp.svg */ "./docroot/themes/custom/souvenirs/src/assets/svg/whatsapp.svg");

































/* import './icon.scss'; */

var pickIcon = function pickIcon(name) {
  switch (name) {
    case "anneau":
      return _assets_svg_anneau_svg__WEBPACK_IMPORTED_MODULE_1__["default"];

    case "user":
      return _assets_svg_user_svg__WEBPACK_IMPORTED_MODULE_29__["default"];

    case "userfill":
      return _assets_svg_user_fill_svg__WEBPACK_IMPORTED_MODULE_30__["default"];

    case "chevron":
      return _assets_svg_chevron_svg__WEBPACK_IMPORTED_MODULE_4__["default"];

    case "cross":
      return _assets_svg_cross_svg__WEBPACK_IMPORTED_MODULE_6__["default"];

    case "cross-red":
      return _assets_svg_cross_red_svg__WEBPACK_IMPORTED_MODULE_7__["default"];

    case "geoloc":
      return _assets_svg_geoloc_svg__WEBPACK_IMPORTED_MODULE_12__["default"];

    case "medaille":
      return _assets_svg_medaille_svg__WEBPACK_IMPORTED_MODULE_17__["default"];

    case "recherche":
      return _assets_svg_search_svg__WEBPACK_IMPORTED_MODULE_25__["default"];

    case "logout":
      return _assets_svg_logout_svg__WEBPACK_IMPORTED_MODULE_16__["default"];

    case "save":
      return _assets_svg_save_svg__WEBPACK_IMPORTED_MODULE_24__["default"];

    case "next":
      return _assets_svg_next_svg__WEBPACK_IMPORTED_MODULE_18__["default"];

    case "upload":
      return _assets_svg_upload_svg__WEBPACK_IMPORTED_MODULE_28__["default"];

    case "book":
      return _assets_svg_book_svg__WEBPACK_IMPORTED_MODULE_2__["default"];

    case "share":
      return _assets_svg_share_svg__WEBPACK_IMPORTED_MODULE_26__["default"];

    case "edit-picture":
      return _assets_svg_edit_picture_svg__WEBPACK_IMPORTED_MODULE_10__["default"];

    case "envelope":
      return _assets_svg_envelope_svg__WEBPACK_IMPORTED_MODULE_11__["default"];

    case "photo":
      return _assets_svg_photo_svg__WEBPACK_IMPORTED_MODULE_20__["default"];

    case "itinerary":
      return _assets_svg_itinerary_svg__WEBPACK_IMPORTED_MODULE_13__["default"];

    case "corbeille":
      return _assets_svg_corbeille_svg__WEBPACK_IMPORTED_MODULE_5__["default"];

    case "profile":
      return _assets_svg_profile_svg__WEBPACK_IMPORTED_MODULE_23__["default"];

    case "check":
      return _assets_svg_check_svg__WEBPACK_IMPORTED_MODULE_3__["default"];

    case "pencil":
      return _assets_svg_pencil_svg__WEBPACK_IMPORTED_MODULE_19__["default"];

    case "picture":
      return _assets_svg_picture_svg__WEBPACK_IMPORTED_MODULE_21__["default"];

    case "link":
      return _assets_svg_link_svg__WEBPACK_IMPORTED_MODULE_14__["default"];

    case "loader":
      return _assets_svg_loader_svg__WEBPACK_IMPORTED_MODULE_15__["default"];

    case "devis":
      return _assets_svg_devis_svg__WEBPACK_IMPORTED_MODULE_9__["default"];

    case "delete":
      return _assets_svg_delete_svg__WEBPACK_IMPORTED_MODULE_8__["default"];

    case "picture-placeholder":
      return _assets_svg_picture_placeholder_svg__WEBPACK_IMPORTED_MODULE_22__["default"];

    case "whatsapp":
      return _assets_svg_whatsapp_svg__WEBPACK_IMPORTED_MODULE_31__["default"];

    case "share-email":
      return _assets_svg_shareEmail_svg__WEBPACK_IMPORTED_MODULE_27__["default"];

    default:
      throw new Error("no SVG for: ".concat(name));
  }
};
/* pass the name & class props (that we will specify in our
other components) to Icon to pick the right icon */


function Icon(_ref) {
  var name = _ref.name,
      _ref$iconClass = _ref.iconClass,
      iconClass = _ref$iconClass === void 0 ? "icon" : _ref$iconClass;
  var SVG = pickIcon(name);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SVG, {
    className: iconClass
  })
  /*     <object type="image/svg+xml"
    height="20"
    width="20"
    data={SVG}
    className={iconClass}
  >
  </object> */
  ;
}
Icon.defaultProps = {
  iconClass: "icon"
};
Icon.propTypes = {
  name: (prop_types__WEBPACK_IMPORTED_MODULE_32___default().string.isRequired),
  iconClass: (prop_types__WEBPACK_IMPORTED_MODULE_32___default().string)
};

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/assets/svg/anneau.svg":
/*!*******************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/assets/svg/anneau.svg ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (({
  styles = {},
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M12 19a7 7 0 100-14 7 7 0 000 14zm0 5C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z",
  id: "dzGypA8S5TRlk3HgE2L7ka"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", {
  fill: "#DE6518",
  xlinkHref: "#dzGypA8S5TRlk3HgE2L7ka",
  fillRule: "evenodd"
})));

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/assets/svg/book.svg":
/*!*****************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/assets/svg/book.svg ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (({
  styles = {},
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 37 24"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M36.183 2.713h-3.268V.753A.768.768 0 0032.137 0a37.01 37.01 0 00-13.696 2.637C14.084.867 9.493 0 4.746 0a.768.768 0 00-.778.753v1.96H.778A.768.768 0 000 3.466v19.78c0 .415.35.754.778.754h35.444a.768.768 0 00.778-.754V3.428a.83.83 0 00-.817-.716zM19.279 22.11V3.988a34.985 34.985 0 0112.073-2.476v18.234c-4.204.075-8.216.9-12.073 2.364zM5.686 1.512a34.77 34.77 0 0112.035 2.476V22.11c-3.858-1.463-7.908-2.289-12.074-2.364V1.512h.039zM1.558 4.157h2.54v16.336c0 .414.35.753.78.753 3.126 0 6.173.451 9.143 1.242H1.558V4.158zm33.884 0v18.331H22.979c2.969-.792 6.016-1.245 9.142-1.245.43 0 .781-.34.781-.754V4.157h2.54zM8.535 15.497l.115.002c2.144.22 4.287.624 6.392 1.211.39.11.623.514.507.918a.78.78 0 01-.741.514c-.078 0-.156 0-.234-.037-1.988-.587-4.053-.955-6.119-1.175-.39-.073-.701-.403-.663-.807a.803.803 0 01.858-.624zm19.807.002c.428-.037.817.26.856.596.078.409-.233.781-.662.818a37.703 37.703 0 00-6.112 1.191c-.078.038-.155.038-.233.038a.793.793 0 01-.74-.521c-.117-.373.117-.782.506-.894a37.126 37.126 0 016.385-1.228zM8.535 11.906l.115.002c2.144.22 4.287.624 6.392 1.212.39.11.623.513.507.917a.78.78 0 01-.741.514c-.078 0-.156 0-.234-.037-1.988-.587-4.053-.954-6.119-1.174-.39-.074-.701-.404-.663-.808a.803.803 0 01.858-.624zm19.807.002c.428-.036.817.257.856.624.078.404-.233.771-.662.808-2.063.22-4.126.624-6.112 1.174-.078.037-.155.037-.233.037a.792.792 0 01-.74-.514c-.117-.367.117-.77.506-.88a37.668 37.668 0 016.385-1.249zM8.535 8.316l.115.002c2.144.22 4.287.624 6.392 1.211.39.11.623.514.507.918a.78.78 0 01-.741.513c-.078 0-.156 0-.234-.036-1.988-.587-4.053-.955-6.119-1.175-.39-.073-.701-.404-.663-.807a.803.803 0 01.858-.624zm19.807.01c.428-.074.817.223.856.594.078.408-.233.78-.662.816a37.894 37.894 0 00-6.112 1.187c-.078.037-.155.037-.233.037a.793.793 0 01-.74-.519c-.117-.371.117-.78.506-.89a37.23 37.23 0 016.385-1.225zm-19.807-3.6l.115.001c2.144.224 4.287.633 6.392 1.229.39.111.623.52.506.893a.832.832 0 01-.74.52c-.078 0-.156 0-.234-.036-1.988-.596-4.053-.968-6.119-1.191-.39-.038-.702-.41-.663-.782a.805.805 0 01.858-.633zm19.807.001c.428-.037.817.26.856.596.078.41-.233.781-.662.819a39.408 39.408 0 00-6.112 1.19c-.078.038-.155.038-.233.038a.793.793 0 01-.74-.521c-.117-.372.117-.782.506-.894a37.88 37.88 0 016.385-1.228z",
  fill: "#fff",
  fillRule: "evenodd"
})));

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/assets/svg/check.svg":
/*!******************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/assets/svg/check.svg ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (({
  styles = {},
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 31 22"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M2.889 10.65a1.692 1.692 0 00-2.393 2.393l8.461 8.461a1.692 1.692 0 002.393 0L29.966 2.89A1.692 1.692 0 1027.573.496l-17.42 17.418L2.89 10.65z",
  fill: "#DE6518",
  fillRule: "evenodd"
})));

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/assets/svg/chevron.svg":
/*!********************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/assets/svg/chevron.svg ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (({
  styles = {},
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 16"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M16.186 15.993a1.975 1.975 0 001.092-.476L31.13 3.625a1.985 1.985 0 00.532-2.752A1.977 1.977 0 0028.573.63L16 11.43 3.427.631A1.976 1.976 0 00.63.532a1.985 1.985 0 00.24 3.093l13.851 11.892c.404.35.932.521 1.464.476",
  fill: "#020303",
  fillRule: "evenodd"
})));

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/assets/svg/corbeille.svg":
/*!**********************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/assets/svg/corbeille.svg ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (({
  styles = {},
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 25"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M14 .207c1.657 0 3 1.466 3 3.273v1.091h4c.513 0 .936.421.993.963l.007.128c0 .602-.448 1.09-1 1.09h-1v14.183c0 1.743-1.249 3.168-2.824 3.267l-.176.005H7c-1.657 0-3-1.465-3-3.272V6.753H3c-.513 0-.936-.421-.993-.963L2 5.662c0-.602.448-1.09 1-1.09h4V3.48C7 1.737 8.25.312 9.824.213L10 .207h4zm4 6.546H6v14.182c0 .56.386 1.02.883 1.083l.117.008h10c.552 0 1-.49 1-1.091V6.753zm-4-4.364h-4c-.552 0-1 .489-1 1.091v1.091h6v-1.09c0-.56-.386-1.022-.883-1.084L14 2.389z",
  fill: "#fff",
  fillRule: "evenodd"
})));

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/assets/svg/cross-red.svg":
/*!**********************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/assets/svg/cross-red.svg ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (({
  styles = {},
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 31 31"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M17.686 15.446L30.215 2.952a1.72 1.72 0 00.507-1.225c0-.463-.18-.897-.507-1.224a1.743 1.743 0 00-2.45 0l-12.528 12.5L2.957.753C2.29.09 1.171.088.508.751A1.708 1.708 0 000 1.975c0 .461.18.896.507 1.223l12.28 12.248L.67 27.53a1.722 1.722 0 00-.504 1.223c0 .46.18.895.509 1.224.66.659 1.78.656 2.442-.002l12.121-12.088 12.37 12.338c.33.33.778.494 1.223.494.446 0 .889-.165 1.22-.494.325-.325.505-.757.507-1.22a1.724 1.724 0 00-.502-1.227l-12.37-12.332z",
  fill: "#e00000",
  fillRule: "evenodd"
})));

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/assets/svg/cross.svg":
/*!******************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/assets/svg/cross.svg ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (({
  styles = {},
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 31 31"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M17.686 15.446L30.215 2.952a1.72 1.72 0 00.507-1.225c0-.463-.18-.897-.507-1.224a1.743 1.743 0 00-2.45 0l-12.528 12.5L2.957.753C2.29.09 1.171.088.508.751A1.708 1.708 0 000 1.975c0 .461.18.896.507 1.223l12.28 12.248L.67 27.53a1.722 1.722 0 00-.504 1.223c0 .46.18.895.509 1.224.66.659 1.78.656 2.442-.002l12.121-12.088 12.37 12.338c.33.33.778.494 1.223.494.446 0 .889-.165 1.22-.494.325-.325.505-.757.507-1.22a1.724 1.724 0 00-.502-1.227l-12.37-12.332z",
  fillRule: "evenodd"
})));

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/assets/svg/delete.svg":
/*!*******************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/assets/svg/delete.svg ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (({
  styles = {},
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  "aria-hidden": "true",
  width: "30",
  height: "30",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M17 3.75a3 3 0 013 3v.999l4 .001a1 1 0 01.993.883L25 8.75a1 1 0 01-1 1h-1v13a3 3 0 01-2.824 2.995L20 25.75H10a3 3 0 01-3-3v-13H6a1 1 0 01-.993-.883L5 8.75a1 1 0 011-1l4-.001V6.75a3 3 0 012.824-2.995L13 3.75zm4 6H9v13a1 1 0 00.883.993l.117.007h10a1 1 0 001-1v-13zm-8 3a1 1 0 011 1v6a1 1 0 01-2 0v-6a1 1 0 011-1zm4 0a1 1 0 011 1v6a1 1 0 01-2 0v-6a1 1 0 011-1zm0-7h-4a1 1 0 00-1 1v.999h6V6.75a1 1 0 00-.883-.993L17 5.75z",
  fill: "#333",
  fillRule: "evenodd"
})));

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/assets/svg/devis.svg":
/*!******************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/assets/svg/devis.svg ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (({
  styles = {},
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 22 24"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M14.668 23.5c0 .275-.208.5-.459.5H.46c-.252 0-.458-.225-.458-.5s.206-.5.458-.5h13.75c.251 0 .459.225.459.5m3.738-18.372l-.03.126-.057.125-2.737 2.994-3.9-4.255.156-.267 2.695-2.843.157-.012.168.051a.782.782 0 01.112.089l3.245 3.54c.033.035.055.057.074.082l.117.279v.091M14.89 9.024l-.153.269-9.14 9.968c-.223.238-.444.476-.662.718l-.083.093-3.937-.005-.004-4.301L10.996 4.774m7.901-.754L15.653.48a1.443 1.443 0 00-.398-.323A1.44 1.44 0 0014.613 0c-.256 0-.5.076-.7.226a3.77 3.77 0 00-.502.495l-1.646 1.793c-.355.386-.71.772-1.063 1.163L.182 15.16a.674.674 0 00-.182.466l.006 4.94c0 .265.213.497.455.497.574 0 1.148 0 1.723.003l2.601.003c.284.002.442-.003.597-.158.032-.033.063-.069.095-.105L18.833 6.22a1.36 1.36 0 00.084-.081 1.61 1.61 0 00-.02-2.119",
  id: "zSw1x8KkU1lLa8HhPSamJa"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  transform: "translate(1.833)",
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("mask", {
  id: "zSw1x8KkU1lLa8HhPSamJb",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", {
  xlinkHref: "#zSw1x8KkU1lLa8HhPSamJa"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", {
  fill: "#020303",
  xlinkHref: "#aa101"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  mask: "url(#zSw1x8KkU1lLa8HhPSamJb)",
  fill: "#FFF",
  fillRule: "nonzero"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M-94.417-90H88.916v200H-94.417z"
})))));

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/assets/svg/edit-picture.svg":
/*!*************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/assets/svg/edit-picture.svg ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (({
  styles = {},
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 35 35"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M16.428 4.196l-.026.103-.051.102-2.443 2.45-3.481-3.482.139-.218L12.971.825l.14-.01.15.042a.69.69 0 01.1.072l2.897 2.897c.03.028.05.046.066.067l.104.228v.075m-3.137 3.187l-.136.22-8.16 8.156c-.197.195-.394.39-.59.587l-.074.077-3.514-.005L.814 12.9l9-8.993m7.053-.617L13.97.393a1.275 1.275 0 00-.355-.265A1.38 1.38 0 0013.043 0c-.229 0-.447.062-.625.185-.16.111-.3.254-.448.405l-1.469 1.467c-.317.316-.635.632-.949.951l-9.39 9.396a.527.527 0 00-.162.38l.005 4.043c0 .217.19.406.407.406.512 0 1.024 0 1.537.003l2.322.002c.254.002.394-.002.533-.129l.085-.086L16.809 5.09c.042-.035.059-.049.076-.066a1.236 1.236 0 00-.018-1.734",
  id: "rcgv4SzawfsguvG6056p7a"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  fill: "#fff",
  cx: "17.5",
  cy: "17.5",
  r: "17.5"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  transform: "translate(9 9)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("mask", {
  id: "rcgv4SzawfsguvG6056p7b",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", {
  xlinkHref: "#rcgv4SzawfsguvG6056p7a"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", {
  fill: "#fff",
  xlinkHref: "#rcgv4SzawfsguvG6056p7a"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  mask: "url(#rcgv4SzawfsguvG6056p7b)",
  fill: "#FFF",
  fillRule: "nonzero"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M-84.273-73.636H79.363V90H-84.273z"
}))))));

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/assets/svg/envelope.svg":
/*!*********************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/assets/svg/envelope.svg ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (({
  styles = {},
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  "aria-hidden": "true",
  width: "24",
  height: "21",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M20.727 0c1.291 0 2.412.799 2.944 1.954a1.2 1.2 0 01.132.177c.176.287.231.63.177.95.013.127.02.255.02.386v13.866c0 1.91-1.47 3.467-3.273 3.467H3.273C1.47 20.8 0 19.243 0 17.333V3.467c0-.13.007-.26.02-.386-.054-.32 0-.663.177-.95.04-.065.084-.124.132-.178C.861.8 1.982 0 3.273 0h17.454zM22.4 4.77l-9.774 7.805c-.376.3-.876.3-1.252 0L1.6 4.77v13.173c0 .688.523 1.257 1.156 1.257h18.488c.633 0 1.156-.569 1.156-1.257V4.77zM21.244 1.6H2.756c-.326 0-.622.15-.833.39L12 10.037 22.077 1.99a1.111 1.111 0 00-.833-.39z",
  id: "bClK067Vi7GxhfyzyL41Pa"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", {
  fill: "#DE6518",
  xlinkHref: "#bClK067Vi7GxhfyzyL41Pa",
  fillRule: "evenodd"
})));

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/assets/svg/geoloc.svg":
/*!*******************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/assets/svg/geoloc.svg ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (({
  styles = {},
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 19 24"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M17.243 9.126c0 3.475-2.01 6.9-3.695 9.163-1.891 2.539-3.896 4.324-4.443 4.667-.603-.309-2.565-2.005-4.49-4.631-1.645-2.243-3.605-5.66-3.605-9.199 0-4.475 3.641-8.116 8.116-8.116 4.476 0 8.117 3.641 8.117 8.116M9.126 0C4.094 0 0 4.094 0 9.126c0 3.959 2.242 7.724 4.123 10.186C5.963 21.722 8.394 24 9.126 24c1.013 0 9.126-7.562 9.126-14.874C18.252 4.094 14.158 0 9.126 0m2.849 9.126a2.851 2.851 0 01-2.85 2.848A2.85 2.85 0 016.28 9.126a2.85 2.85 0 012.847-2.848 2.851 2.851 0 012.849 2.848m-2.85-3.857A3.861 3.861 0 005.27 9.126a3.862 3.862 0 003.857 3.858 3.863 3.863 0 003.859-3.858 3.862 3.862 0 00-3.86-3.857",
  fill: "#999",
  fillRule: "evenodd"
})));

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/assets/svg/itinerary.svg":
/*!**********************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/assets/svg/itinerary.svg ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (({
  styles = {},
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M17.503 10.12L13.87 6.485c-.124-.114-.287-.119-.338-.114a.505.505 0 00-.353.16.52.52 0 00.007.687l2.752 2.753H8.857a.508.508 0 00-.513.49v6.678c0 .28.22.49.513.49.275 0 .49-.216.49-.49v-6.166h6.558l-2.728 2.762c-.217.203-.237.524-.045.728a.515.515 0 00.355.16h.011a.528.528 0 00.38-.172l3.624-3.625a.5.5 0 00.154-.354.5.5 0 00-.153-.354M12 0c-.631 0-1.262.241-1.744.722L.722 10.256a2.467 2.467 0 000 3.488l9.534 9.533A2.459 2.459 0 0012 24c.631 0 1.263-.241 1.744-.723l9.533-9.533a2.465 2.465 0 000-3.488L13.744.722A2.46 2.46 0 0012 0m0 1c.392 0 .76.152 1.037.43l9.533 9.533c.278.277.43.645.43 1.037 0 .392-.152.76-.43 1.037l-9.533 9.533c-.277.278-.645.43-1.037.43-.392 0-.76-.152-1.037-.43L1.43 13.037A1.453 1.453 0 011 12c0-.392.152-.76.43-1.037l9.533-9.533C11.24 1.152 11.608 1 12 1",
  id: "1dXIha8TqgwQlORThFXYpa"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", {
  fill: "#fff",
  xlinkHref: "#1dXIha8TqgwQlORThFXYpa",
  fillRule: "evenodd"
})));

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/assets/svg/link.svg":
/*!*****************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/assets/svg/link.svg ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (({
  styles = {},
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 25"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M9.518 21.967a5.576 5.576 0 01-7.885-7.885l4.15-4.15a5.576 5.576 0 017.884 0 .587.587 0 11-.83.83 4.38 4.38 0 00-6.224 0l-4.15 4.15a4.38 4.38 0 000 6.225 4.38 4.38 0 006.225 0l3.734-3.735a.587.587 0 11.83.83l-3.734 3.735zm8.3-8.3a5.576 5.576 0 01-7.885 0 .587.587 0 11.83-.83 4.38 4.38 0 006.224 0l4.15-4.15a4.38 4.38 0 000-6.224 4.38 4.38 0 00-6.225 0l-3.734 3.735a.587.587 0 11-.83-.83l3.734-3.735a5.576 5.576 0 017.885 7.885l-4.15 4.15z",
  id: "36Rss6Bh5mOplundlceZGa"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  transform: "translate(0 .9)",
  fill: "#fff",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("mask", {
  id: "36Rss6Bh5mOplundlceZGb"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", {
  xlinkHref: "#36Rss6Bh5mOplundlceZGa"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", {
  fillRule: "nonzero",
  xlinkHref: "#36Rss6Bh5mOplundlceZGa"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  mask: "url(#36Rss6Bh5mOplundlceZGb)",
  fillRule: "nonzero"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M-3.6-4h31.2v31.2H-3.6z"
})))));

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/assets/svg/logout.svg":
/*!*******************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/assets/svg/logout.svg ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (({
  styles = {},
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 22 21"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M21.805 10.99l-3.666 3.807a.648.648 0 01-.943 0 .71.71 0 010-.979l2.529-2.625H8.667A.68.68 0 018 10.5a.68.68 0 01.667-.692h11.058l-2.529-2.626a.71.71 0 010-.979.65.65 0 01.943 0l3.666 3.807a.715.715 0 010 .98zm-6.5 1.61a.698.698 0 00-.697.7v6.3H1.392V1.4h13.216v6.3c0 .386.311.7.696.7A.698.698 0 0016 7.7v-7c0-.386-.312-.7-.696-.7H.696A.698.698 0 000 .7v19.6c0 .386.312.7.696.7h14.608a.698.698 0 00.696-.7l-.001-7c0-.387-.311-.7-.695-.7z",
  fill: "#fff",
  fillRule: "evenodd"
})));

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/assets/svg/medaille.svg":
/*!*********************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/assets/svg/medaille.svg ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (({
  styles = {},
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  width: "27",
  height: "32",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M18.266 9.96a.502.502 0 01-.053.635l-1.924 2.022-.026.028.368 2.781a.512.512 0 01-.73.53l-2.568-1.208-2.565 1.207a.508.508 0 01-.247.046.512.512 0 01-.485-.575l.357-2.749.005-.038-1.945-2.045a.502.502 0 01.021-.72.513.513 0 01.257-.13l2.79-.514 1.36-2.47a.518.518 0 01.906.001l1.346 2.436.019.033 2.783.514a.515.515 0 01.33.216zm-2.92 2.155l1.473-1.541-2.106-.387a.51.51 0 01-.356-.26L13.333 8.07 12.31 9.927a.51.51 0 01-.36.26l-2.101.387 1.467 1.541a.506.506 0 01.139.418l-.275 2.098 1.933-.906a.518.518 0 01.443 0l1.933.906-.276-2.099a.506.506 0 01.134-.417zm6.36 15.016l2.776.22-4.258-8.112-.068.265c-.176.687-.357 1.398-.996 1.758-.654.37-1.423.134-2.102-.075a2.9 2.9 0 00-1.08-.218l-.134-.001 4.4 8.463 1.461-2.3zm-7.472-6.317c.418-.441.813-.858 1.403-1.027.508-.145 1.274.067 1.642.169l.163.043.181.047c.435.115.753.189.888.124.175-.085.243-.368.392-.989l.023-.093c.14-.581.285-1.18.693-1.578.283-.276.842-.506 1.662-.685.291-.062.919-.243 1.054-.373.14-.136.047-.425-.138-1l-.023-.07c-.192-.6-.35-1.227-.215-1.755.132-.518.721-1.08 1.06-1.37.528-.449.753-.71.753-.872 0-.198-.214-.39-.64-.772l-.121-.108c-.453-.407-.88-.792-1.053-1.366-.142-.47.046-1.135.158-1.533.025-.09.047-.167.06-.225.02-.084.049-.184.078-.29.117-.401.185-.674.088-.8-.125-.163-.399-.23-1.06-.382l-.045-.01c-.595-.137-1.21-.278-1.618-.676-.283-.275-.52-.82-.703-1.617-.064-.283-.248-.896-.384-1.028-.137-.133-.432-.045-1.02.135l-.074.022c-.616.188-1.26.342-1.804.21-.533-.129-1.11-.703-1.407-1.033-.462-.514-.729-.732-.894-.732-.201 0-.398.208-.79.624l-.11.115c-.418.442-.813.858-1.404 1.028-.506.145-1.274-.068-1.643-.17a5.973 5.973 0 00-.162-.043 8.157 8.157 0 01-.182-.047c-.434-.113-.751-.189-.887-.123-.174.085-.242.367-.391.984l-.025.1c-.14.58-.284 1.18-.692 1.575-.284.277-.843.508-1.662.685-.291.063-.92.243-1.054.374-.139.136-.047.424.137.996l.024.075c.192.598.352 1.225.216 1.754-.133.519-.722 1.08-1.06 1.37-.528.449-.753.71-.753.872 0 .198.214.39.642.774l.118.106c.453.407.88.792 1.054 1.366.141.469-.046 1.135-.159 1.532-.025.09-.047.168-.06.226-.017.074-.04.162-.064.256-.109.414-.174.695-.11.821l.008.013c.126.164.381.235 1.024.382l.045.01c.595.136 1.21.278 1.618.675.284.277.52.82.703 1.617.204.898.346 1.002.392 1.036.133.097.469.048 1.127-.166a4.77 4.77 0 011.336-.278l.464.069c.533.13 1.11.704 1.407 1.034.462.513.73.732.893.732.2 0 .397-.208.788-.621l.113-.119zm-3.473.238l.062-.119h-.134a2.89 2.89 0 00-1.078.217c-.679.21-1.448.446-2.105.077-.667-.376-.87-1.134-1.011-1.816l-.045-.223-4.265 8.162 2.777-.219 1.461 2.3 4.338-8.38zm15.906 7.737l-4.238-.34-.048-.005L20.148 32l-5.186-9.964-.055-.106-.078.091c-.372.437-.92.71-1.49.748a2.161 2.161 0 01-1.501-.748l-.078-.091L6.518 32l-2.233-3.556L0 28.79l5.474-10.56.048-.093-.52-.115c-.678-.164-1.448-.35-1.812-.963-.378-.637-.137-1.383.075-2.038a2.7 2.7 0 00.298-1.018l.002-.027-.014-.023a2.782 2.782 0 00-.702-.757c-.531-.483-1.133-1.03-1.133-1.81 0-.781.602-1.328 1.129-1.807.27-.213.495-.47.671-.763l.011-.019v-.023a2.697 2.697 0 00-.222-1.052c-.215-.66-.458-1.408-.079-2.045.38-.642 1.181-.845 1.897-.985a2.877 2.877 0 001.006-.326l.02-.011.012-.02c.174-.305.288-.636.334-.976.139-.674.31-1.512.975-1.887.655-.37 1.424-.133 2.102.075.344.141.707.215 1.08.218h.022l.02-.01c.3-.172.563-.391.778-.65C11.968.587 12.53 0 13.333 0c.767 0 1.317.538 1.802 1.012l.054.05c.216.277.48.51.782.69l.02.012h.022a2.882 2.882 0 001.08-.218c.68-.208 1.449-.444 2.103-.075.63.355.82 1.104.99 1.765l.02.08c.048.347.16.678.336.982l.012.02.02.012c.312.17.65.28.997.324l.092.023c.679.164 1.449.35 1.813.964.379.636.136 1.385-.077 2.043a2.69 2.69 0 00-.224 1.054v.023l.012.019c.174.293.4.55.667.76.53.481 1.132 1.029 1.132 1.81 0 .78-.601 1.326-1.126 1.804-.283.21-.521.466-.709.763l-.012.02v.024c.003.364.08.718.223 1.053.215.66.457 1.407.079 2.044-.382.641-1.182.845-1.903.986l-.43.092 5.559 10.653z",
  fill: "#020303",
  fillRule: "evenodd"
})));

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/assets/svg/next.svg":
/*!*****************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/assets/svg/next.svg ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (({
  styles = {},
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 24"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M31.751 10.983L21.148.28c-.17-.181-.368-.274-.576-.277C20.555 0 20.54 0 20.526 0c-.21 0-.407.092-.59.276a.79.79 0 00-.238.595c0 .249.08.45.256.638l9.127 9.186H.857a.827.827 0 00-.617.269.784.784 0 00-.24.597c0 .245.08.448.261.643.157.146.356.22.596.22h28.222l-9.143 9.23a.788.788 0 00-.238.595c0 .249.08.451.26.645a.84.84 0 00.577.217c.222 0 .45-.08.612-.24l10.585-10.69a.84.84 0 00.268-.62.757.757 0 00-.249-.578",
  fill: "#1D1D1B",
  fillRule: "evenodd"
})));

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/assets/svg/pencil.svg":
/*!*******************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/assets/svg/pencil.svg ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (({
  styles = {},
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 25 25"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M17.938 23.707c0 .275-.244.5-.539.5H1.23c-.296 0-.539-.225-.539-.5s.243-.5.54-.5h16.168c.295 0 .539.225.539.5m4.396-18.372l-.035.126-.068.125-3.217 2.994-4.587-4.255.183-.267 3.17-2.843.184-.012.198.051a.908.908 0 01.132.09l3.816 3.54c.038.034.064.056.087.081l.137.28v.09M18.2 9.231l-.18.27-10.749 9.967c-.26.238-.52.476-.777.718l-.098.093-4.63-.005-.004-4.3L13.62 4.98m9.29-.754L19.098.687a1.679 1.679 0 00-.468-.323 1.938 1.938 0 00-.756-.157c-.3 0-.588.076-.822.226-.21.136-.396.31-.59.495l-1.936 1.793c-.418.386-.836.772-1.25 1.163L.904 15.367a.622.622 0 00-.214.466l.007 4.94c0 .265.25.497.535.497.675 0 1.35 0 2.026.003l3.059.003c.334.002.52-.003.702-.158.037-.033.074-.069.112-.105L22.836 6.427c.055-.043.077-.06.1-.08.616-.598.606-1.53-.024-2.12",
  fill: "#FFF",
  fillRule: "evenodd"
})));

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/assets/svg/photo.svg":
/*!******************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/assets/svg/photo.svg ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (({
  styles = {},
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 44 44"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  fill: "#FFF",
  cx: "22",
  cy: "22",
  r: "22"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M24.07 14.5c.25 0 .5.125.667.333l1.415 1.917h1.665v-.375c0-.23.083-.438.25-.583a.755.755 0 01.582-.25h1.457c.23 0 .437.083.583.25.166.146.25.354.25.583v.417c.603.104 1.04.604 1.061 1.229v10.625c0 .354-.146.666-.375.896-.25.25-.562.375-.895.375H13.04a.976.976 0 01-.728-.313.978.978 0 01-.312-.729V18.042a1.243 1.243 0 011.249-1.25h4.578l1.395-1.938a.839.839 0 01.686-.354zm0 1.333h-4.162l-1.394 1.938a.839.839 0 01-.687.354H13.75a.41.41 0 00-.292.125c-.083.083-.125.083-.125.292v9.833c0 .063.021.104.063.146a.189.189 0 00.146.062h16.69a.41.41 0 00.29-.125.412.412 0 00.126-.291V18.52a.418.418 0 00-.417-.417l-4.078-.02a.87.87 0 01-.666-.334l-1.415-1.917zM22 19.5c1.92 0 3.5 1.562 3.5 3.5s-1.58 3.5-3.5 3.5-3.5-1.562-3.5-3.5 1.58-3.5 3.5-3.5zm0 1a2.5 2.5 0 10.001 5.001A2.5 2.5 0 0022 20.5zm-5.028-1.417c.245 0 .445.188.445.417 0 .23-.2.417-.445.417h-2.444c-.245 0-.445-.188-.445-.417 0-.23.2-.417.445-.417zm13.134-2.708H28.65v.396h1.457v-.396z",
  fill: "#DE6518"
}))));

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/assets/svg/picture-placeholder.svg":
/*!********************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/assets/svg/picture-placeholder.svg ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (({
  styles = {},
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  "aria-hidden": "true",
  width: "66",
  height: "52",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M2.87.862C1.305.862 0 2.15 0 3.696v45.333c0 1.545 1.305 2.833 2.87 2.833h60.26c1.565 0 2.87-1.288 2.87-2.833V3.696C66 2.15 64.695.862 63.13.862H2.87zm0 2.834h60.26v30.569l-12.083-8.368a1.449 1.449 0 00-.964-.243 1.44 1.44 0 00-.74.288l-11.276 8.544-18.585-12.839a1.449 1.449 0 00-.964-.243 1.44 1.44 0 00-.74.288L2.87 32.98V3.696zm34.434 10.647c-3.548 0-6.456 2.848-6.456 6.353 0 3.504 2.908 6.352 6.456 6.352 3.55 0 6.457-2.848 6.457-6.352 0-3.505-2.908-6.353-6.457-6.353zm0 2.81c1.998 0 3.587 1.57 3.587 3.543 0 1.972-1.589 3.541-3.587 3.541-1.998 0-3.564-1.569-3.564-3.541 0-1.973 1.566-3.542 3.564-3.542zm-18.63 7.416l16.994 11.732L18.92 48.985a1.43 1.43 0 00-.045.044H2.87V36.544L18.675 24.57zm31.566 4.25l12.89 8.899v11.31H23.584L50.24 28.82z",
  fill: "#CCC",
  fillRule: "evenodd"
})));

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/assets/svg/picture.svg":
/*!********************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/assets/svg/picture.svg ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (({
  styles = {},
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 22"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M19 1.833c1.657 0 3 1.232 3 2.75v12.834c0 1.518-1.343 2.75-3 2.75H5c-1.657 0-3-1.232-3-2.75V4.583c0-1.518 1.343-2.75 3-2.75h14zm-3 8.63l-8.587 7.87H19c.552 0 1-.41 1-.916v-3.288l-4-3.666zm3-6.796H5c-.552 0-1 .41-1 .916v12.834c0 .393.27.728.65.858l10.643-9.757a1.065 1.065 0 011.414 0L20 11.536V4.583c0-.506-.448-.916-1-.916zM8.5 5.5c1.38 0 2.5 1.026 2.5 2.292 0 1.265-1.12 2.291-2.5 2.291S6 9.057 6 7.792C6 6.526 7.12 5.5 8.5 5.5zm0 1.833c-.276 0-.5.206-.5.459s.224.458.5.458.5-.205.5-.458-.224-.459-.5-.459z",
  id: "4NEVxeueZoq_gq9nL9HiPa"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("mask", {
  id: "4NEVxeueZoq_gq9nL9HiPb",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", {
  xlinkHref: "#4NEVxeueZoq_gq9nL9HiPa"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", {
  fill: "#000",
  fillRule: "nonzero",
  xlinkHref: "#4NEVxeueZoq_gq9nL9HiPa"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  mask: "url(#4NEVxeueZoq_gq9nL9HiPb)",
  fill: "#fff",
  fillRule: "nonzero"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M0 0h24v22H0z"
})))));

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/assets/svg/profile.svg":
/*!********************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/assets/svg/profile.svg ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (({
  styles = {},
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 18 19"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M14.625 15.238a.348.348 0 01-.35.345H3.726a.349.349 0 01-.35-.345c0-3.045 2.518-5.513 5.625-5.513s5.625 2.468 5.625 5.513zM9 9.035c-1.747 0-3.164-1.388-3.164-3.1C5.836 4.22 7.253 2.832 9 2.832s3.164 1.388 3.164 3.101S10.747 9.035 9 9.035z",
  fill: "#333",
  fillRule: "evenodd"
})));

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/assets/svg/save.svg":
/*!*****************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/assets/svg/save.svg ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (({
  styles = {},
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M16.8 0a.42.42 0 01.296.11c.43.399.848.81 1.27 1.215l2.013 1.927 1.305 1.252c.08.075.13.161.133.27.003.098 0 .198 0 .3v15.67a.23.23 0 01-.04.135l-.046.046.034-.04a.252.252 0 00-.227-.389h-.277l.004.22v.027c0 .217.245.29.409.217l.056-.034a.241.241 0 01-.118.064l-.077.008H21.5c-.276.005-.554 0-.83 0H.279c-.15 0-.277-.116-.277-.252v-.035c-.005-.265 0-.532 0-.796V.252C.002.116.13 0 .28 0zM4.364.506H.562l.001.049L.56.82l-.003.265V20.49h.037c.092 0 .185.001.277.003l.277.003h20.113l-.005-.428c0-.216.002-.431.005-.647l.004-.647-.001-13.939-.208-.199-.288-.276-2.518-2.413L16.746.508l-.127.004-.216-.003-.04-.001v5.25c0 .109-.094.204-.215.23l-.063.006h-.02c-.462.014-.925 0-1.387 0H4.642c-.15 0-.278-.109-.278-.237L4.363.506zm.291 15.51c.508-.035 1.018 0 1.526 0h11.006c.358 0 .358.969 0 .969h-.022c-.508.034-1.018 0-1.526 0H4.632c-.358 0-.358-.97 0-.97zm0-5c.508-.035 1.018 0 1.526 0h11.006c.358 0 .358.969 0 .969h-.022c-.508.034-1.018 0-1.526 0H4.632c-.358 0-.358-.97 0-.97zM15.806.505H4.92v5.012l.19.003h10.696V.506z",
  id: "XzbUNhhyS1cfHc87CMQH_a"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  transform: "translate(1.09 2)",
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("mask", {
  id: "XzbUNhhyS1cfHc87CMQH_b",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", {
  xlinkHref: "#XzbUNhhyS1cfHc87CMQH_a"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", {
  fill: "#FFF",
  fillRule: "nonzero",
  xlinkHref: "#XzbUNhhyS1cfHc87CMQH_a"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  mask: "url(#XzbUNhhyS1cfHc87CMQH_b)",
  fill: "#FFF",
  fillRule: "nonzero"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M-1.09-2h24v24h-24z"
})))));

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/assets/svg/search.svg":
/*!*******************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/assets/svg/search.svg ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (({
  styles = {},
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 31 31"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M13.194 25.123c-6.579 0-11.93-5.352-11.93-11.93 0-6.578 5.351-11.93 11.93-11.93 6.578 0 11.93 5.352 11.93 11.93 0 6.578-5.352 11.93-11.93 11.93m13.194-11.93C26.388 5.919 20.468 0 13.194 0 5.92 0 0 5.919 0 13.193s5.919 13.193 13.194 13.193c3.065 0 6.053-1.08 8.412-3.04l.469-.388 7.565 7.578a.634.634 0 00.896-.898l-7.578-7.563.39-.469a13.203 13.203 0 003.04-8.413",
  fill: "#020303",
  fillRule: "evenodd"
})));

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/assets/svg/share.svg":
/*!******************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/assets/svg/share.svg ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (({
  styles = {},
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M0 20.375C0 21.272.745 22 1.66 22h17.617c.915 0 1.66-.728 1.66-1.625V13.25c0-.276-.23-.5-.511-.5a.507.507 0 00-.511.5v7.125a.632.632 0 01-.638.625H1.66a.633.633 0 01-.639-.625V7.625c0-.344.287-.624.639-.624h3.446a.506.506 0 00.511-.5A.506.506 0 005.106 6H1.66C.745 6 0 6.73 0 7.625v12.75zM18.639 9.793V8.001a.5.5 0 00-.15-.355.519.519 0 00-.345-.147c-4.053.03-6.964.052-9.547 2.66l-.615.62.182-.846C9.034 5.886 12.2 4 18.128 4a.506.506 0 00.51-.5V1.708l4.13 4.042-4.13 4.043zm5.213-4.396L18.49.147a.517.517 0 00-.558-.109.5.5 0 00-.314.462v2.504l-.248.008C10.32 3.214 6.894 6.317 6.894 12.5c0 .222.153.42.37.481a.523.523 0 00.574-.217c2.536-3.995 5.139-4.214 9.522-4.257l.258-.003V11a.513.513 0 00.872.352l5.362-5.249a.495.495 0 000-.707z",
  id: "ihdDu_u1i7h-VLoWk-W3Ma"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  transform: "translate(0 1)",
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("mask", {
  id: "ihdDu_u1i7h-VLoWk-W3Mb",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", {
  xlinkHref: "#ihdDu_u1i7h-VLoWk-W3Ma"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", {
  fill: "#fff",
  xlinkHref: "#ihdDu_u1i7h-VLoWk-W3Ma"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  mask: "url(#ihdDu_u1i7h-VLoWk-W3Mb)",
  fill: "#FFF",
  fillRule: "nonzero"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M-89-98h200v200H-89z"
})))));

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/assets/svg/shareEmail.svg":
/*!***********************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/assets/svg/shareEmail.svg ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (({
  styles = {},
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  width: "60",
  height: "60"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("linearGradient", {
  id: "ylrAVeAUDimerNRtvmX0ja"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
  offset: "0",
  stopColor: "#70efff"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
  offset: "1",
  stopColor: "#5770ff"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("linearGradient", {
  xlinkHref: "#ylrAVeAUDimerNRtvmX0ja",
  id: "ylrAVeAUDimerNRtvmX0jb",
  gradientUnits: "userSpaceOnUse",
  gradientTransform: "matrix(.15 0 0 .15 .85 961.212)",
  x1: "305.201",
  y1: "598.592",
  x2: "305.785",
  y2: "8.244"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  color: "#000"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  style: {
    marker: "none"
  },
  d: "M21.653 961.362h48.694A20.607 20.607 0 0191 982.015v48.695a20.607 20.607 0 01-20.653 20.652H21.653A20.607 20.607 0 011 1030.71v-48.695a20.607 20.607 0 0120.653-20.653z",
  fill: "url(#ylrAVeAUDimerNRtvmX0jb)",
  overflow: "visible",
  transform: "matrix(.66667 0 0 .66667 -.567 -640.808)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M13.246 17.163c-.316 0-.614.054-.896.166l5.646 5.813 5.708 5.917.104.125.167.166.167.167.333.354 4.896 5.02c.081.052.318.27.502.363.238.118.496.228.761.237.287.01.58-.071.838-.197.193-.094.279-.229.503-.402l5.667-5.854 5.729-5.896 5.52-5.688a2.423 2.423 0 00-1.166-.291zm-1.73.708c-.601.57-.979 1.428-.979 2.396V39.35c0 .784.252 1.496.667 2.042l.792-.75 5.896-5.73 5.229-5.062-.104-.125-5.73-5.896-5.729-5.916zm38.126.188l-5.584 5.77-5.708 5.896-.104.104 5.437 5.271 5.896 5.73.354.333c.318-.51.5-1.137.5-1.813V20.267c0-.863-.299-1.645-.791-2.208zM23.787 30.538L18.58 35.6l-5.917 5.73-.75.729c.396.254.846.416 1.334.416h34.479c.587 0 1.119-.226 1.563-.583l-.375-.375-5.917-5.73-5.438-5.25-4.895 5.042c-.265.176-.443.37-.701.49-.417.193-.873.356-1.332.349-.46-.007-.91-.187-1.323-.39-.208-.102-.318-.203-.561-.407z",
  style: {
    marker: "none"
  },
  fill: "#fff",
  overflow: "visible"
}))));

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/assets/svg/upload.svg":
/*!*******************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/assets/svg/upload.svg ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (({
  styles = {},
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M12 18.782c.249 0 .45-.228.45-.508V1.734l4.614 5.207a.434.434 0 00.638 0 .556.556 0 000-.72L12.319.148a.417.417 0 00-.641.004l-5.38 6.07a.557.557 0 000 .72.434.434 0 00.638 0l4.613-5.207v16.54c0 .28.203.508.451.508zm9.524 3.036a.474.474 0 00.476-.471v-4.18a.474.474 0 00-.476-.472.474.474 0 00-.476.472v3.709H2.952v-3.71a.474.474 0 00-.476-.47.474.474 0 00-.476.47v4.18c0 .26.214.472.476.472z",
  fill: "#FFF"
})));

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/assets/svg/user-fill.svg":
/*!**********************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/assets/svg/user-fill.svg ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (({
  styles = {},
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  version: "1.0",
  xmlns: "http://www.w3.org/2000/svg",
  width: "27",
  height: "32",
  "aria-hidden": "true",
  viewBox: "0 0 1280 1516"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M601 1.5C530.4 10.4 465.7 43 412.5 96.4c-65.6 66-106.8 156.2-117.7 258.1-2 18.7-1.7 77.3.5 95.5 7.1 58.5 21.8 107.7 46.6 155.5 15.5 29.9 33.7 56.3 57.2 82.9l12.2 13.9-2.9 2.4c-7.2 5.8-25.8 18.7-35.6 24.7-17.6 10.8-30.6 17.2-88.8 44.1-62.2 28.7-78.4 36.8-97.1 48.8C81.4 889.3 13.4 1001.4 1.5 1128 .1 1142.1 0 1161.2.3 1259l.3 114.5 2.6 11c6.1 25.7 16.6 48.6 30.7 67 6.9 9.1 21.7 24 30.6 31 10.3 8 19.5 13.7 32 19.5 12 5.7 19.4 8.2 34 11.5l11 2.5H1124l9.7-2.1c71.6-15.5 124.1-76.6 130.3-151.6 1.3-15.4 1.3-199.7 0-221.3-3.4-57.2-16.4-107.4-41-157.5-32-65.4-78.9-119-139-159.2-24.4-16.2-33.6-20.9-113.8-57.9-71.1-32.8-80.4-37.9-105.9-58.6-4.8-3.9-9-7.2-9.2-7.4-.1-.1 4.5-5.7 10.4-12.2 62.4-70 99-159 106.5-259.2 6.6-89.2-15.8-185.3-60.6-259.5-27.4-45.3-63.5-84.7-103.4-113-40.1-28.3-83.6-46-133.5-54-14.2-2.4-58.1-2.9-73.5-1z"
})));

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/assets/svg/user.svg":
/*!*****************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/assets/svg/user.svg ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (({
  styles = {},
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 27 32"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M5.495 17.895l2.161-.999a7.773 7.773 0 001.81-1.116l.21-.176.227.152a6.203 6.203 0 006.962 0l.218-.147.209.162a9.29 9.29 0 001.817 1.125l2.166 1c2.593 1.193 4.27 3.825 4.27 6.705v4.195h-.096c-.177 1.09-1.11 1.925-2.232 1.925H3.484c-1.247 0-2.261-1.032-2.261-2.301v-3.819c0-2.88 1.677-5.512 4.272-6.706m1.912-9.498c0-3.944 2.666-7.152 5.944-7.152 3.277 0 5.945 3.208 5.945 7.152s-2.668 7.154-5.945 7.154c-3.278 0-5.944-3.21-5.944-7.154M0 24.601v3.854C0 30.409 1.563 32 3.484 32h19.733c1.902 0 3.45-1.59 3.45-3.545V24.6c.032-3.369-1.912-6.448-4.952-7.845l-2.164-.999a5.23 5.23 0 01-1.227-.736l-.307-.25.266-.296c1.42-1.584 2.234-3.799 2.234-6.078C20.517 3.768 17.301 0 13.351 0 9.4.033 6.184 3.815 6.184 8.432c0 2.315.793 4.473 2.233 6.076l.28.31-.334.247c-.412.306-.82.527-1.2.72L4.988 16.79C1.958 18.15 0 21.216 0 24.601",
  fillRule: "evenodd"
})));

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/assets/svg/whatsapp.svg":
/*!*********************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/assets/svg/whatsapp.svg ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (({
  styles = {},
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 104 104",
  width: "60",
  height: "60"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  id: "1lpTfm1CUTXTNtHjm3uR2a",
  d: "M1023.941 765.153c0 5.606-.171 17.766-.508 27.159-.824 22.982-2.646 52.639-5.401 66.151-4.141 20.306-10.392 39.472-18.542 55.425-9.643 18.871-21.943 35.775-36.559 50.364-14.584 14.56-31.472 26.812-50.315 36.416-16.036 8.172-35.322 14.426-55.744 18.549-13.378 2.701-42.812 4.488-65.648 5.3-9.402.336-21.564.505-27.15.505l-504.226-.081c-5.607 0-17.765-.172-27.158-.509-22.983-.824-52.639-2.646-66.152-5.4-20.306-4.142-39.473-10.392-55.425-18.542-18.872-9.644-35.775-21.944-50.364-36.56-14.56-14.584-26.812-31.471-36.415-50.314-8.174-16.037-14.428-35.323-18.551-55.744-2.7-13.378-4.487-42.812-5.3-65.649-.334-9.401-.503-21.563-.503-27.148l.08-504.228c0-5.607.171-17.766.508-27.159.825-22.983 2.646-52.639 5.401-66.151 4.141-20.306 10.391-39.473 18.542-55.426C34.154 93.24 46.455 76.336 61.07 61.747c14.584-14.559 31.472-26.812 50.315-36.416 16.037-8.172 35.324-14.426 55.745-18.549 13.377-2.701 42.812-4.488 65.648-5.3 9.402-.335 21.565-.504 27.149-.504l504.227.081c5.608 0 17.766.171 27.159.508 22.983.825 52.638 2.646 66.152 5.401 20.305 4.141 39.472 10.391 55.425 18.542 18.871 9.643 35.774 21.944 50.363 36.559 14.559 14.584 26.812 31.471 36.415 50.315 8.174 16.037 14.428 35.323 18.551 55.744 2.7 13.378 4.486 42.812 5.3 65.649.335 9.402.504 21.564.504 27.15l-.082 504.226z",
  transform: "scale(.1)"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("linearGradient", {
  id: "1lpTfm1CUTXTNtHjm3uR2b",
  gradientUnits: "userSpaceOnUse",
  x1: "512.001",
  y1: ".978",
  x2: "512.001",
  y2: "1025.023"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
  offset: "0",
  stopColor: "#61fd7d"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
  offset: "1",
  stopColor: "#2bb826"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", {
  xlinkHref: "#1lpTfm1CUTXTNtHjm3uR2a",
  overflow: "visible",
  fill: "url(#1lpTfm1CUTXTNtHjm3uR2b)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#FFF",
  d: "M78.33 24.325c-6.933-6.94-16.153-10.762-25.976-10.766-20.24 0-36.713 16.467-36.721 36.707a36.636 36.636 0 004.901 18.352l-5.21 19.023 19.467-5.105a36.706 36.706 0 0017.548 4.469h.015c20.239 0 36.713-16.47 36.721-36.71.004-9.808-3.812-19.032-10.745-25.97zm-25.976 56.48h-.012a30.481 30.481 0 01-15.535-4.253l-1.114-.661L24.14 78.92l3.084-11.26-.726-1.154a30.432 30.432 0 01-4.667-16.238c.007-16.822 13.699-30.51 30.534-30.51 8.152.004 15.816 3.182 21.578 8.949s8.934 13.433 8.931 21.586c-.006 16.824-13.698 30.512-30.52 30.512zm16.742-22.852c-.918-.459-5.429-2.678-6.27-2.984-.84-.306-1.452-.46-2.064.46-.612.917-2.37 2.983-2.906 3.596-.535.612-1.07.688-1.988.23-.917-.46-3.874-1.429-7.378-4.553-2.728-2.432-4.57-5.436-5.104-6.355-.536-.918-.057-1.414.402-1.872.413-.41.917-1.071 1.376-1.607.459-.535.612-.918.918-1.53.306-.612.153-1.148-.077-1.607-.229-.46-2.064-4.974-2.829-6.81-.744-1.79-1.501-1.547-2.064-1.575-.535-.027-1.147-.032-1.759-.032s-1.605.23-2.446 1.147-3.212 3.138-3.212 7.653c0 4.514 3.288 8.876 3.747 9.488.459.612 6.47 9.877 15.674 13.85 2.19.945 3.898 1.51 5.23 1.932 2.199.698 4.199.6 5.78.364 1.763-.264 5.428-2.22 6.193-4.362.765-2.142.765-3.979.535-4.361-.229-.383-.84-.613-1.758-1.072z"
})));

/***/ })

}]);
//# sourceMappingURL=Icons.bundle.js.map