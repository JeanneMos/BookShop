"use strict";
(self["webpackChunkespace_souvenir"] = self["webpackChunkespace_souvenir"] || []).push([["BiographyForm"],{

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Forms/BiographyForm.js":
/*!**********************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Forms/BiographyForm.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BiographyForm; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./docroot/themes/custom/souvenirs/src/js/constants/index.js");
/* harmony import */ var _context_biographySlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/biographySlice */ "./docroot/themes/custom/souvenirs/src/js/context/biographySlice.js");
/* harmony import */ var _layouts_ButtonsWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layouts/ButtonsWrapper */ "./docroot/themes/custom/souvenirs/src/js/layouts/ButtonsWrapper.js");
/* harmony import */ var _services_formatting__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/formatting */ "./docroot/themes/custom/souvenirs/src/js/services/formatting.js");
/* harmony import */ var _services_scrollSmoothToElement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/scrollSmoothToElement */ "./docroot/themes/custom/souvenirs/src/js/services/scrollSmoothToElement.js");
/* harmony import */ var _services_useForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/useForm */ "./docroot/themes/custom/souvenirs/src/js/services/useForm.js");
/* harmony import */ var _services_usePostQuery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/usePostQuery */ "./docroot/themes/custom/souvenirs/src/js/services/usePostQuery.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Button/Button */ "./docroot/themes/custom/souvenirs/src/js/components/Button/Button.js");
/* harmony import */ var _Icons_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Icons/Icon */ "./docroot/themes/custom/souvenirs/src/js/components/Icons/Icon.js");
/* harmony import */ var _FormTextarea__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FormTextarea */ "./docroot/themes/custom/souvenirs/src/js/components/Forms/FormTextarea.js");













/* import BiographyPhotosFieldset from "./BiographyPhotosFieldset"; */


var validationValues = {
  biography: {
    isRequired: false
  },
  photos: {
    isRequired: false
  }
};
function BiographyForm(_ref) {
  var reference = _ref.reference,
      closeForm = _ref.closeForm;
  var params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useParams)();
  var biographyState = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.biography;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  var initialFormState = {
    biography: biographyState !== null && biographyState !== void 0 && biographyState.isBiographyEdited ? (0,_services_formatting__WEBPACK_IMPORTED_MODULE_6__.decoded)(biographyState === null || biographyState === void 0 ? void 0 : biographyState.biography) : "",
    photos: null
  };

  var _useForm = (0,_services_useForm__WEBPACK_IMPORTED_MODULE_8__["default"])({
    initialFormState: initialFormState,
    validationValues: validationValues
  }),
      inputValues = _useForm.inputValues,
      changeHandler = _useForm.changeHandler,
      errorHandler = _useForm.errorHandler,
      errors = _useForm.errors,
      isValid = _useForm.isValid;

  var updateBiography = (0,_services_usePostQuery__WEBPACK_IMPORTED_MODULE_9__["default"])();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      networkError = _useState2[0],
      setNetworkError = _useState2[1];

  var networkErrorMessage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  var handleCloseForm = function handleCloseForm() {
    closeForm({
      messageSent: false
    });
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var biography_obj = {
      field_value: {
        field_bio_story: inputValues.biography,
        field_bio_photo: null
      },
      field_machine_name: _constants__WEBPACK_IMPORTED_MODULE_3__.bioMachineName,
      entity_hash: params.espaceId
    };

    try {
      updateBiography.mutate({
        data: biography_obj,
        apiUrl: _constants__WEBPACK_IMPORTED_MODULE_3__.postSaveFieldApiUrl
      }, {
        onSuccess: function onSuccess(data) {
          var _data$data;

          /*           const structuredImages = compressedFiles.map(file => {
          const imgObject = {
            url: window.URL.createObjectURL(file),
            name: file.name
          }
          return imgObject
          }) */
          var _JSON$parse = JSON.parse(data === null || data === void 0 ? void 0 : (_data$data = data.data) === null || _data$data === void 0 ? void 0 : _data$data.field_value),
              field_bio_story = _JSON$parse.field_bio_story,
              field_bio_custom = _JSON$parse.field_bio_custom; //dispatch(biographyPhotoAdded({biographyPhotos: structuredImages}))


          dispatch((0,_context_biographySlice__WEBPACK_IMPORTED_MODULE_4__.biographyUpdated)({
            biography: field_bio_story,
            isBiographyEdited: field_bio_custom
          }));
          closeForm({
            messageSent: true
          });
        },
        onError: function onError(err) {
          setNetworkError("Une erreur s'est produite. Veuillez reprendre ultérieurement.");
          (networkErrorMessage === null || networkErrorMessage === void 0 ? void 0 : networkErrorMessage.current) && (0,_services_scrollSmoothToElement__WEBPACK_IMPORTED_MODULE_7__["default"])(networkErrorMessage.current);
        }
      });
    } catch (_unused) {
      setNetworkError("Une erreur s'est produite. Veuillez reprendre ultérieurement.");
      (networkErrorMessage === null || networkErrorMessage === void 0 ? void 0 : networkErrorMessage.current) && (0,_services_scrollSmoothToElement__WEBPACK_IMPORTED_MODULE_7__["default"])(networkErrorMessage.current);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, networkError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    ref: networkErrorMessage,
    className: "message-status mb-40"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
    name: "cross",
    iconClass: "message-status-icon error-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, networkError)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2", {
    className: "content-heading-2"
  }, "\xC9crire la biographie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "biography-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("form", {
    noValidate: true,
    ref: reference,
    onSubmit: handleSubmit,
    "data-testid": "biographyForm",
    className: "biography-form"
  }, !isValid && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: "sr-only",
    tabIndex: 0
  }, "Merci de corriger les erreurs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "biography-textarea"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_FormTextarea__WEBPACK_IMPORTED_MODULE_12__["default"], {
    labelText: "biographie",
    labelHidden: true,
    isRequired: true,
    id: "biography",
    name: "biography",
    max: 1000,
    value: inputValues.biography,
    inputPlaceholder: "Biographie",
    onInputChange: changeHandler,
    onInputBlur: errorHandler,
    error: errors.biography
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_layouts_ButtonsWrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    position: "right",
    btnWrapperClass: "mt-30"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    type: "button",
    btnClass: "bg-transparent",
    onClickAction: handleCloseForm
  }, "Annuler"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    type: "submit",
    btnClass: "bg-current",
    dataTestid: "submitBiographyForm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
    name: "save",
    iconClass: "white-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "separator"
  }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "button-text"
  }, "Enregistrer"))))));
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Forms/FormTextarea.js":
/*!*********************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Forms/FormTextarea.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");



var FormTextarea = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.memo(function FormTextarea(_ref) {
  var id = _ref.id,
      name = _ref.name,
      labelText = _ref.labelText,
      labelHidden = _ref.labelHidden,
      value = _ref.value,
      min = _ref.min,
      max = _ref.max,
      wrapperClass = _ref.wrapperClass,
      onInputChange = _ref.onInputChange,
      onInputBlur = _ref.onInputBlur,
      inputPlaceholder = _ref.inputPlaceholder,
      error = _ref.error,
      _ref$isRequired = _ref.isRequired,
      isRequired = _ref$isRequired === void 0 ? false : _ref$isRequired,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      ariaDescription = _useState2[0],
      setAriaDescription = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(max),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      caracters = _useState4[0],
      setCaracters = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    setAriaDescription("".concat(name, "-requirement"));
    if (error) setAriaDescription("".concat(ariaDescription, " error-").concat(id));
  }, [error]);

  var handleInputChange = function handleInputChange(e) {
    onInputChange(e);

    if (max) {
      var newCaracters = Number(max) - e.target.value.length;
      setCaracters(newCaracters);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("input-wrapper", wrapperClass)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("label", {
    htmlFor: id,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("label", {
      "label-error": error,
      "sr-only": labelHidden
    })
  }, labelText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("textarea", {
    id: id,
    name: name,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("textarea", {
      "input-error": error
    }),
    value: value,
    min: min,
    maxLength: max,
    rows: 10,
    disabled: disabled,
    required: isRequired,
    "aria-required": isRequired,
    "aria-describedby": ariaDescription,
    onChange: handleInputChange,
    onBlur: onInputBlur,
    placeholder: inputPlaceholder || ""
  }), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", {
    className: "error-message",
    id: "error-".concat(id),
    "aria-live": "polite"
  }, error), max && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", {
    className: "message-photo-requirements",
    "data-testid": "caractersCount",
    id: "".concat(name, "-requirement")
  }, caracters, " caract\xE8res restants."));
});
/* harmony default export */ __webpack_exports__["default"] = (FormTextarea);

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

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutProperties; }
/* harmony export */ });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = (0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ })

}]);
//# sourceMappingURL=BiographyForm.bundle.js.map