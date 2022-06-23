"use strict";
(self["webpackChunkespace_souvenir"] = self["webpackChunkespace_souvenir"] || []).push([["ResetPassword"],{

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Button/Button.js":
/*!****************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Button/Button.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Button; }
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


/* import './button.scss';
 */

function Button(_ref) {
  var children = _ref.children,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "button" : _ref$type,
      disabled = _ref.disabled,
      btnClass = _ref.btnClass,
      onClickAction = _ref.onClickAction,
      dataTestid = _ref.dataTestid,
      ariaLabel = _ref.ariaLabel;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    "data-testid": dataTestid,
    disabled: disabled,
    type: type === "submit" ? "submit" : "button",
    className: btnClass,
    onClick: onClickAction,
    "aria-label": ariaLabel ? ariaLabel : null
  }, children);
}
Button.defaultProps = {
  type: "button",
  btnClass: null
};
Button.propTypes = {
  type: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired),
  btnClass: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Forms/ResetPasswordForm.js":
/*!**************************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Forms/ResetPasswordForm.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ResetPasswordForm; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _layouts_ButtonsWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layouts/ButtonsWrapper */ "./docroot/themes/custom/souvenirs/src/js/layouts/ButtonsWrapper.js");
/* harmony import */ var _services_scrollSmoothToElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/scrollSmoothToElement */ "./docroot/themes/custom/souvenirs/src/js/services/scrollSmoothToElement.js");
/* harmony import */ var _services_useForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/useForm */ "./docroot/themes/custom/souvenirs/src/js/services/useForm.js");
/* harmony import */ var _services_usePostQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/usePostQuery */ "./docroot/themes/custom/souvenirs/src/js/services/usePostQuery.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Button/Button */ "./docroot/themes/custom/souvenirs/src/js/components/Button/Button.js");
/* harmony import */ var _Icons_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Icons/Icon */ "./docroot/themes/custom/souvenirs/src/js/components/Icons/Icon.js");
/* harmony import */ var _NewPasswordFieldset__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NewPasswordFieldset */ "./docroot/themes/custom/souvenirs/src/js/components/Forms/NewPasswordFieldset.js");










var validationValues = {
  repeat_new_password: {
    isRequired: true,
    required: "Merci de confirmer le mot de passe"
  },
  new_password: {
    isRequired: true,
    required: "Merci de renseigner le mot de passe",
    patterns: [{
      name: "patternNumber",
      value: /[0-9]/
    }, {
      name: "patternLength",
      value: /^[\s\S]{8,}$/
    }, {
      name: "patternMaj",
      value: /[A-Z]/
    }, {
      name: "patternSpecialChar",
      value: /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/
    }]
  }
};
var initialFormState = {
  new_password: "",
  repeat_new_password: ""
};
function ResetPasswordForm() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      isLoader = _useState2[0],
      setIsLoader = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      networkErrorMessage = _useState4[0],
      setNetworkErrorMessage = _useState4[1];

  var hiddenGlobalError = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var networkError = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var resetPassword = (0,_services_usePostQuery__WEBPACK_IMPORTED_MODULE_6__["default"])();

  var _useForm = (0,_services_useForm__WEBPACK_IMPORTED_MODULE_5__["default"])({
    initialFormState: initialFormState,
    validationValues: validationValues
  }),
      inputValues = _useForm.inputValues,
      changeHandler = _useForm.changeHandler,
      errorHandler = _useForm.errorHandler,
      submitErrorsHandler = _useForm.submitErrorsHandler,
      errors = _useForm.errors,
      isValid = _useForm.isValid;

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var arrayOfErrors = Object.keys(errors);

    if (!isValid && hiddenGlobalError.current) {
      (0,_services_scrollSmoothToElement__WEBPACK_IMPORTED_MODULE_4__["default"])(hiddenGlobalError.current);
    }

    if (arrayOfErrors.length === 0) {
      var emptyFields = Object.entries(inputValues).filter(function (_ref) {
        var _ref2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        return validationValues[key].isRequired && value === "";
      }).map(function (_ref3) {
        var _ref4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, 1),
            key = _ref4[0];

        return key;
      });

      if (emptyFields.length) {
        submitErrorsHandler(emptyFields);
      } else if (inputValues.new_password !== "" && inputValues.repeat_new_password === "") {
        // Check if new password is not empty but confirm new password is empty
        submitErrorsHandler([].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(emptyFields), [{
          name: "repeat_new_password",
          requiredMessage: "Merci de confirmer votre mot de passe"
        }]));
      } else if (inputValues.new_password !== "" && inputValues.repeat_new_password !== inputValues.new_password) {
        // Check the correspondance between new password and confirm new password
        submitErrorsHandler([].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(emptyFields), [{
          name: "repeat_new_password",
          requiredMessage: "Les mots de passes ne sont pas identiques"
        }]));
      } else if (inputValues.new_password !== "" && inputValues.current_password === "") {
        // Check if new password is not empty but current password is empty
        submitErrorsHandler([].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(emptyFields), [{
          name: "current_password",
          requiredMessage: "Merci de confirmer votre mot de passe actuel"
        }]));
      } else {
        var infos_obj = {
          new_password: inputValues.new_password,
          repeat_new_password: inputValues.repeat_new_password
        };

        try {
          setIsLoader(true);
          resetPassword.mutate({
            data: infos_obj,
            apiUrl: "///////"
          }, {
            onSuccess: function onSuccess(_ref5) {
              var data = _ref5.data;
            },
            onError: function onError() {
              setIsLoader(false);
            }
          });
        } catch (_unused) {
          // Something went wrong
          setIsLoader(false);
          setNetworkErrorMessage("Une erreur s'est produite. Veuillez reprendre ultérieurement.");
          (networkErrorMessage === null || networkErrorMessage === void 0 ? void 0 : networkErrorMessage.current) && (0,_services_scrollSmoothToElement__WEBPACK_IMPORTED_MODULE_4__["default"])(networkErrorMessage.current);
        }
      }
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("form", {
    noValidate: true,
    onSubmit: handleSubmit,
    className: "reset-password-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, "Bienvenue,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, "Vous pouvez d\xE9sormais vous connecter \xE0 votre Espace Souvenirs."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, "Personnaliser votre mot de passe pour vos prochaines connexions."), networkErrorMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", {
    ref: networkError,
    className: "message-status mb-40"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: "cross",
    iconClass: "message-status-icon error-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, networkErrorMessage)), !isValid && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", {
    className: "sr-only",
    tabIndex: 0,
    ref: hiddenGlobalError
  }, "Merci de corriger les erreurs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("fieldset", {
    className: "mt-30"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_NewPasswordFieldset__WEBPACK_IMPORTED_MODULE_9__["default"], {
    inputValues: inputValues,
    changeHandler: changeHandler,
    errorHandler: errorHandler,
    requiredNewPassword: true,
    errors: errors
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_layouts_ButtonsWrapper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    position: "mt-30"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "submit",
    btnClass: "bg-current"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    className: "button-text"
  }, "acc\xE9der \xE0 l'espace souvenirs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    className: "separator"
  }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: "next",
    iconClass: "white-icon"
  }))));
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/pages/ResetPassword.js":
/*!***********************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/pages/ResetPassword.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ResetPassword; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Forms_ResetPasswordForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Forms/ResetPasswordForm */ "./docroot/themes/custom/souvenirs/src/js/components/Forms/ResetPasswordForm.js");
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/Layout */ "./docroot/themes/custom/souvenirs/src/js/layouts/Layout.js");
/* harmony import */ var _services_scrollSmoothToElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/scrollSmoothToElement */ "./docroot/themes/custom/souvenirs/src/js/services/scrollSmoothToElement.js");




function ResetPassword() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.title = "Nouveau mot de passe";
    (0,_services_scrollSmoothToElement__WEBPACK_IMPORTED_MODULE_3__["default"])();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "reset-password-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Forms_ResetPasswordForm__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
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
//# sourceMappingURL=ResetPassword.bundle.js.map