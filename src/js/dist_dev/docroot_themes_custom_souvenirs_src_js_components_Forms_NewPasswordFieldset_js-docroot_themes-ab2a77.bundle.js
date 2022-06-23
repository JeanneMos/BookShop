"use strict";
(self["webpackChunkespace_souvenir"] = self["webpackChunkespace_souvenir"] || []).push([["docroot_themes_custom_souvenirs_src_js_components_Forms_NewPasswordFieldset_js-docroot_themes-ab2a77"],{

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Forms/FormInput.js":
/*!******************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Forms/FormInput.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.browser.js");
/* harmony import */ var _Icons_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icons/Icon */ "./docroot/themes/custom/souvenirs/src/js/components/Icons/Icon.js");




var FormInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.memo(function FormInput(_ref) {
  var id = _ref.id,
      name = _ref.name,
      imageName = _ref.imageName,
      labelText = _ref.labelText,
      labelImage = _ref.labelImage,
      type = _ref.type,
      value = _ref.value,
      autocomplete = _ref.autocomplete,
      min = _ref.min,
      max = _ref.max,
      checked = _ref.checked,
      inputClass = _ref.inputClass,
      wrapperClass = _ref.wrapperClass,
      onInputChange = _ref.onInputChange,
      onInputBlur = _ref.onInputBlur,
      inputPlaceholder = _ref.inputPlaceholder,
      error = _ref.error,
      _ref$displayErrorMess = _ref.displayErrorMessage,
      displayErrorMessage = _ref$displayErrorMess === void 0 ? true : _ref$displayErrorMess,
      isRequired = _ref.isRequired,
      disabled = _ref.disabled,
      _ref$readOnly = _ref.readOnly,
      readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
      ariaDescription = _ref.ariaDescription;
  var svgString = encodeURIComponent((0,react_dom_server__WEBPACK_IMPORTED_MODULE_2__.renderToStaticMarkup)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "cross-red",
    iconClass: "input-error-icon"
  })));
  var dataUri = "url(\"data:image/svg+xml,".concat(svgString, "\")");
  var optionalInput = !isRequired && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "optional-label"
  }, "\xA0(facultatif)");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()("input-wrapper", wrapperClass)
  }, !labelImage && type !== "checkbox" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", {
    htmlFor: id,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()("label", {
      "label-error": error
    })
  }, labelText, optionalInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
    id: id,
    type: type,
    name: name,
    readOnly: readOnly,
    "data-imagename": imageName,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()("input", {
      "input-error": error,
      inputClass: inputClass
    }),
    style: {
      backgroundImage: error ? dataUri : "none"
    },
    value: value,
    min: min,
    autoComplete: autocomplete ? autocomplete : null,
    maxLength: max ? max : null,
    disabled: disabled,
    required: isRequired,
    "aria-required": isRequired,
    "aria-describedby": error ? "error-".concat(id, " ").concat(ariaDescription) : ariaDescription,
    "aria-invalid": error ? "true" : false,
    onChange: onInputChange,
    onBlur: onInputBlur,
    checked: type === "radio" ? checked : null,
    placeholder: inputPlaceholder || ""
  }), labelImage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", {
    htmlFor: id,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()("label", {
      "label-error": error
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    src: labelImage,
    className: "label-image",
    alt: "",
    width: "150"
  })), type === "checkbox" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", {
    htmlFor: id,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()("label", {
      "label-error": error
    })
  }, labelText), error && displayErrorMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: "error-message",
    id: "error-".concat(id),
    "aria-live": "polite"
  }, error));
});
/* harmony default export */ __webpack_exports__["default"] = (FormInput);

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Forms/NewPasswordFieldset.js":
/*!****************************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Forms/NewPasswordFieldset.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NewPasswordFieldset; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Icons_PasswordCheckIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icons/PasswordCheckIcon */ "./docroot/themes/custom/souvenirs/src/js/components/Icons/PasswordCheckIcon.js");
/* harmony import */ var _FormInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormInput */ "./docroot/themes/custom/souvenirs/src/js/components/Forms/FormInput.js");



function NewPasswordFieldset(_ref) {
  var inputValues = _ref.inputValues,
      changeHandler = _ref.changeHandler,
      errorHandler = _ref.errorHandler,
      errors = _ref.errors,
      _ref$includeCurrentPa = _ref.includeCurrentPassword,
      includeCurrentPassword = _ref$includeCurrentPa === void 0 ? false : _ref$includeCurrentPa,
      _ref$requiredNewPassw = _ref.requiredNewPassword,
      requiredNewPassword = _ref$requiredNewPassw === void 0 ? false : _ref$requiredNewPassw;

  var isIncorrectValue = function isIncorrectValue(pattern) {
    var _errors$new_password;

    if (inputValues.new_password === "") {
      return null;
    }

    if (!(errors !== null && errors !== void 0 && errors.new_password) || (errors === null || errors === void 0 ? void 0 : (_errors$new_password = errors.new_password) === null || _errors$new_password === void 0 ? void 0 : _errors$new_password.length) === 0) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons_PasswordCheckIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      isValid: true
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons_PasswordCheckIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      isValid: !errors.new_password.includes(pattern),
      error: errors.new_password.includes(pattern) && pattern
    });
  };

  var handleNewPassword = function handleNewPassword(e) {
    errorHandler(e);
    changeHandler(e);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, includeCurrentPassword && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "current_password",
    name: "current_password",
    labelText: "Mot de passe actuel",
    type: "password",
    autocomplete: "current-password",
    value: inputValues.current_password,
    inputPlaceholder: "Mot de passe actuel",
    onInputChange: changeHandler,
    onInputBlur: errorHandler,
    error: errors.current_password
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "new_password",
    name: "new_password",
    labelText: "Nouveau mot de passe",
    type: "password",
    autocomplete: "new-password",
    value: inputValues.new_password,
    inputPlaceholder: "Nouveau mot de passe",
    onInputChange: handleNewPassword,
    onInputBlur: errorHandler,
    displayErrorMessage: false,
    isRequired: requiredNewPassword,
    error: errors.new_password,
    ariaDescription: "new_password_requirement"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "repeat_new_password",
    name: "repeat_new_password",
    labelText: "Confirmer votre mot de passe",
    type: "password",
    value: inputValues.repeat_new_password,
    inputPlaceholder: "Confirmer votre mot de passe",
    onInputChange: changeHandler,
    onInputBlur: errorHandler,
    isRequired: requiredNewPassword,
    error: errors.repeat_new_password
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "sr-only",
    id: "new_password_requirement"
  }, "l faut un minimum de 8 caract\xE8res avec au moins une majuscule, un chiffre et un caract\xE8re sp\xE9cial."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "password-check",
    "aria-live": "polite",
    id: "error-new_password",
    "aria-relevant": "additions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    "aria-hidden": "true"
  }, "Il faut un minimum de "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "password-check-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    "aria-hidden": "true"
  }, "8 caract\xE8res avec au moins"), " ", isIncorrectValue("patternLength")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "password-check-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    "aria-hidden": "true"
  }, "1 majuscule"), " ", isIncorrectValue("patternMaj")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "password-check-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    "aria-hidden": "true"
  }, "1 chiffre"), " ", isIncorrectValue("patternNumber")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "password-check-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    "aria-hidden": "true"
  }, "1 caract\xE8re sp\xE9cial"), " ", isIncorrectValue("patternSpecialChar"))));
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Icons/PasswordCheckIcon.js":
/*!**************************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Icons/PasswordCheckIcon.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PasswordCheckIcon; }
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon */ "./docroot/themes/custom/souvenirs/src/js/components/Icons/Icon.js");



var passwordErrors = {
  patternNumber: "Il manque un chiffre",
  patternLength: "Le mot de passe n'est pas assez long",
  patternMaj: "Il manque une majuscule",
  patternSpecialChar: "Il manque un caractère spécial"
};
function PasswordCheckIcon(_ref) {
  var isValid = _ref.isValid,
      error = _ref.error;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: isValid ? "check" : "cross",
    iconClass: classnames__WEBPACK_IMPORTED_MODULE_0___default()("password-validation-icon", isValid ? "green" : "red")
  }), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "sr-only"
  }, passwordErrors[error]));
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/layouts/ButtonsWrapper.js":
/*!**************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/layouts/ButtonsWrapper.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ButtonsWrapper; }
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ButtonsWrapper(_ref) {
  var position = _ref.position,
      children = _ref.children,
      btnWrapperClass = _ref.btnWrapperClass;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()("buttons-wrapper", position, btnWrapperClass)
  }, children);
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/services/useForm.js":
/*!********************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/services/useForm.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useForm; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");





function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


function useForm(_ref) {
  var initialFormState = _ref.initialFormState,
      validationValues = _ref.validationValues;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(initialFormState),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      inputValues = _useState2[0],
      setValues = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({}),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState3, 2),
      errors = _useState4[0],
      setErrors = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState5, 2),
      isValid = _useState6[0],
      setIsValid = _useState6[1];
  /** on vérifie au onBlur si le pattern correspond à la saisie,
   * si ce n'est pas le cas, retourne le message d'erreur, sinon on retourne null  */


  var getError = function getError(target) {
    if (target.value !== "") {
      var pattern = validationValues[target.name].pattern;
      var patterns = validationValues[target.name].patterns;

      if (pattern !== null && pattern !== void 0 && pattern.value && !RegExp(pattern.value).test(target.value)) {
        return pattern === null || pattern === void 0 ? void 0 : pattern.message;
      }

      if (patterns) {
        var arrayOfPatterns = patterns.map(function (pattern) {
          if (pattern.value && !RegExp(pattern.value).test(target.value)) {
            return pattern.name;
          }
        });
        var noNullValues = arrayOfPatterns.filter(function (value) {
          return !!value;
        });

        if (noNullValues.length) {
          return noNullValues;
        } else {
          return null;
        }
      }

      return null;
    }

    if (target.getAttribute("required") !== null && target.value === "") {
      var required = validationValues[target.name].required;
      return required;
    }

    return null;
  };
  /**
   * Ici on ajoute les valeurs des champs dans le state du formulaire.
   * au onChange on vérifie si la saisie est bonne et retire le message d'erreur
   * @param {event} event target, le champs input
   */


  var changeHandler = function changeHandler(_ref2) {
    var target = _ref2.target;

    var newValues = _objectSpread(_objectSpread({}, inputValues), {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, target.name, target.value));

    if (!getError(target)) {
      if (Object.prototype.hasOwnProperty.call(errors, target.name)) {
        var _target$name = target.name,
            newProp = errors[_target$name],
            rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(errors, [_target$name].map(_toPropertyKey));

        setErrors(rest);
      }
    }

    if (Object.keys(errors).length === 0) setIsValid(true);
    setValues(newValues);
  };
  /**
   * @param {event} event target, le champs input
   */


  var errorHandler = function errorHandler(_ref3) {
    var target = _ref3.target;
    var newErrors = {};

    if (getError(target)) {
      setIsValid(false);
      newErrors = _objectSpread(_objectSpread({}, errors), {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, target.name, getError(target)));
    } else {
      newErrors = _objectSpread({}, errors);
    }

    setErrors(newErrors);
  };

  var submitErrorsHandler = function submitErrorsHandler(fields) {
    var newErrors = {};
    var requiredMessage = null;
    fields.forEach(function (field) {
      if (field.requiredMessage) {
        requiredMessage = field.requiredMessage;
      } else {
        var _validationValues$fie;

        requiredMessage = (_validationValues$fie = validationValues[field]) === null || _validationValues$fie === void 0 ? void 0 : _validationValues$fie.required;
      }

      !field.requiredMessage ? newErrors[field] = requiredMessage : newErrors[field.name] = requiredMessage;
    });
    setIsValid(false);
    setErrors(newErrors);
  };

  return {
    inputValues: inputValues,
    changeHandler: changeHandler,
    errorHandler: errorHandler,
    submitErrorsHandler: submitErrorsHandler,
    errors: errors,
    isValid: isValid
  };
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/services/usePostQuery.js":
/*!*************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/services/usePostQuery.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");



var defaultOptions = {
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: true,
  credentials: "include"
};

var usePostQuery = function usePostQuery(parameters) {
  var _useMutation = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)(function (_ref) {
    var data = _ref.data,
        apiUrl = _ref.apiUrl,
        _ref$options = _ref.options,
        options = _ref$options === void 0 ? parameters || defaultOptions : _ref$options;
    return axios__WEBPACK_IMPORTED_MODULE_0___default().post(apiUrl, data, options);
  }),
      data = _useMutation.data,
      error = _useMutation.error,
      isError = _useMutation.isError,
      isIdle = _useMutation.isIdle,
      isLoading = _useMutation.isLoading,
      isPaused = _useMutation.isPaused,
      isSuccess = _useMutation.isSuccess,
      mutate = _useMutation.mutate,
      mutateAsync = _useMutation.mutateAsync,
      reset = _useMutation.reset,
      status = _useMutation.status;

  return {
    mutate: mutate,
    isSuccess: isSuccess,
    data: data,
    isLoading: isLoading,
    error: error
  };
};

/* harmony default export */ __webpack_exports__["default"] = (usePostQuery);

/***/ })

}]);
//# sourceMappingURL=docroot_themes_custom_souvenirs_src_js_components_Forms_NewPasswordFieldset_js-docroot_themes-ab2a77.bundle.js.map