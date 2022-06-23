"use strict";
(self["webpackChunkespace_souvenir"] = self["webpackChunkespace_souvenir"] || []).push([["AdministratorsEdit"],{

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Administrators/Administrator.js":
/*!*******************************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Administrators/Administrator.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Administrator; }
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _context_administratorSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/administratorSlice */ "./docroot/themes/custom/souvenirs/src/js/context/administratorSlice.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button/Button */ "./docroot/themes/custom/souvenirs/src/js/components/Button/Button.js");
/* harmony import */ var _Icons_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Icons/Icon */ "./docroot/themes/custom/souvenirs/src/js/components/Icons/Icon.js");






function Administrator(_ref) {
  var admin = _ref.admin,
      current = _ref.current;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();

  var editingPersonalInfo = function editingPersonalInfo() {
    dispatch((0,_context_administratorSlice__WEBPACK_IMPORTED_MODULE_3__.administratorPersonalInfoModified)({
      isEditingPersonalInfo: true,
      isEditingAdministator: false
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()("administrator-item", current && "administrator-item-active")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: "administrator-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "administrator-name"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "info-firstname"
  }, admin.firstName), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "info-firstname"
  }, admin.lastName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "administrator-email"
  }, admin.email)), current && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    btnClass: "bg-current",
    onClickAction: editingPersonalInfo
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "pencil",
    iconClass: "white-icon book-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "separator"
  }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "button-text"
  }, "modifier")));
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Administrators/AdministratorsList.js":
/*!************************************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Administrators/AdministratorsList.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AdministratorsList; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Administrator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Administrator */ "./docroot/themes/custom/souvenirs/src/js/components/Administrators/Administrator.js");



function AdministratorsList() {
  var administratorState = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.administrator;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "administrators-list"
  }, administratorState.currentUser && administratorState.isAdmin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Administrator__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: administratorState.currentUser.email,
    current: true,
    admin: administratorState.currentUser
  }));
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/ContentPages/AdministratorsEdit.js":
/*!**********************************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/ContentPages/AdministratorsEdit.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AdministratorsEdit; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Administrators_AdministratorsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Administrators/AdministratorsList */ "./docroot/themes/custom/souvenirs/src/js/components/Administrators/AdministratorsList.js");
/* harmony import */ var _Icons_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Icons/Icon */ "./docroot/themes/custom/souvenirs/src/js/components/Icons/Icon.js");





var AdministratorPersonalInfoForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.lazy(function () {
  return Promise.all(/*! import() | PersonalInfoForm */[__webpack_require__.e("vendors-node_modules_react-dom_server_browser_js-node_modules_babel_runtime_helpers_esm_objec-d199b2"), __webpack_require__.e("docroot_themes_custom_souvenirs_src_js_components_Forms_NewPasswordFieldset_js-docroot_themes-ab2a77"), __webpack_require__.e("PersonalInfoForm")]).then(__webpack_require__.bind(__webpack_require__, /*! ../Forms/AdministratorPersonalInfoForm */ "./docroot/themes/custom/souvenirs/src/js/components/Forms/AdministratorPersonalInfoForm.js"));
});
function AdministratorsEdit() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      messageSuccess = _useState2[0],
      setMessageSuccess = _useState2[1];

  var administratorState = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.administrator;
  });

  var handleCloseForm = function handleCloseForm(_ref) {
    var userUpdated = _ref.userUpdated;
    setMessageSuccess(userUpdated);
  };

  if (administratorState.isEditingPersonalInfo) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(AdministratorPersonalInfoForm, {
    closeForm: handleCloseForm
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, messageSuccess && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: "message-status mb-40"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "check",
    iconClass: "message-status-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Vos modifications ont bien \xE9t\xE9 enregistr\xE9es.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2", {
    className: "content-heading-2"
  }, "Liste des gestionnaires"), (administratorState === null || administratorState === void 0 ? void 0 : administratorState.currentUser) && (administratorState === null || administratorState === void 0 ? void 0 : administratorState.isAdmin) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Administrators_AdministratorsList__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null));
}

/***/ })

}]);
//# sourceMappingURL=AdministratorsEdit.bundle.js.map