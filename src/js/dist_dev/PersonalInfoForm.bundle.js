"use strict";
(self["webpackChunkespace_souvenir"] = self["webpackChunkespace_souvenir"] || []).push([["PersonalInfoForm"],{

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Forms/AdministratorPersonalInfoForm.js":
/*!**************************************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Forms/AdministratorPersonalInfoForm.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AdministratorPersonalInfoForm; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./docroot/themes/custom/souvenirs/src/js/constants/index.js");
/* harmony import */ var _context_administratorSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/administratorSlice */ "./docroot/themes/custom/souvenirs/src/js/context/administratorSlice.js");
/* harmony import */ var _context_globalInfoSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context/globalInfoSlice */ "./docroot/themes/custom/souvenirs/src/js/context/globalInfoSlice.js");
/* harmony import */ var _layouts_ButtonsWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../layouts/ButtonsWrapper */ "./docroot/themes/custom/souvenirs/src/js/layouts/ButtonsWrapper.js");
/* harmony import */ var _services_scrollSmoothToElement__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/scrollSmoothToElement */ "./docroot/themes/custom/souvenirs/src/js/services/scrollSmoothToElement.js");
/* harmony import */ var _services_useForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/useForm */ "./docroot/themes/custom/souvenirs/src/js/services/useForm.js");
/* harmony import */ var _services_usePostQuery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/usePostQuery */ "./docroot/themes/custom/souvenirs/src/js/services/usePostQuery.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Button/Button */ "./docroot/themes/custom/souvenirs/src/js/components/Button/Button.js");
/* harmony import */ var _Icons_Icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Icons/Icon */ "./docroot/themes/custom/souvenirs/src/js/components/Icons/Icon.js");
/* harmony import */ var _Loader_Loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Loader/Loader */ "./docroot/themes/custom/souvenirs/src/js/components/Loader/Loader.js");
/* harmony import */ var _FormInput__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./FormInput */ "./docroot/themes/custom/souvenirs/src/js/components/Forms/FormInput.js");
/* harmony import */ var _NewPasswordFieldset__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./NewPasswordFieldset */ "./docroot/themes/custom/souvenirs/src/js/components/Forms/NewPasswordFieldset.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }















var validationValues = {
  surname: {
    pattern: {
      value: /^([a-zA-Z\u00C0-\u00FF '-])+$/,
      message: "Merci de renseigner votre nom de famille correct"
    },
    isRequired: true,
    required: "Merci de renseigner votre nom de famille"
  },
  name: {
    pattern: {
      value: /^([a-zA-Z\u00C0-\u00FF '-])+$/,
      message: "Merci de renseigner votre prénom"
    },
    isRequired: true,
    required: "Merci de renseigner votre prénom"
  },
  email: {
    isRequired: true,
    required: "Merci de renseigner votre email"
  },
  phone: {
    pattern: {
      value: /^([0-9])+$/,
      message: "Merci de renseigner le numéro de téléphone au format requis (ex. 0799999999)"
    },
    isRequired: false
  },
  current_password: {
    isRequired: false
  },
  repeat_new_password: {
    isRequired: false
  },
  new_password: {
    isRequired: false,
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
function AdministratorPersonalInfoForm(_ref) {
  var _administratorState$c, _administratorState$c2, _administratorState$c3, _administratorState$c4, _administratorState$c5;

  var closeForm = _ref.closeForm;
  var administratorState = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.administrator;
  });
  var globalInfoState = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.globalInfo;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      networkError = _useState2[0],
      setNetworkError = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      isLoader = _useState4[0],
      setIsLoader = _useState4[1];

  var networkErrorMessage = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  var initialFormState = {
    surname: ((_administratorState$c = administratorState.currentUser) === null || _administratorState$c === void 0 ? void 0 : (_administratorState$c2 = _administratorState$c.lastName) === null || _administratorState$c2 === void 0 ? void 0 : _administratorState$c2.toUpperCase()) || "",
    name: ((_administratorState$c3 = administratorState.currentUser) === null || _administratorState$c3 === void 0 ? void 0 : _administratorState$c3.firstName) || "",
    phone: ((_administratorState$c4 = administratorState.currentUser) === null || _administratorState$c4 === void 0 ? void 0 : _administratorState$c4.phone) || "",
    email: ((_administratorState$c5 = administratorState.currentUser) === null || _administratorState$c5 === void 0 ? void 0 : _administratorState$c5.email) || "",
    current_password: "",
    new_password: "",
    repeat_new_password: ""
  };

  var _useForm = (0,_services_useForm__WEBPACK_IMPORTED_MODULE_10__["default"])({
    initialFormState: initialFormState,
    validationValues: validationValues
  }),
      inputValues = _useForm.inputValues,
      changeHandler = _useForm.changeHandler,
      errorHandler = _useForm.errorHandler,
      submitErrorsHandler = _useForm.submitErrorsHandler,
      errors = _useForm.errors,
      isValid = _useForm.isValid;

  var updatePersonalInfo = (0,_services_usePostQuery__WEBPACK_IMPORTED_MODULE_11__["default"])();
  var hiddenGlobalError = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var arrayOfErrors = Object.keys(errors);

    if (!isValid && hiddenGlobalError.current) {
      (0,_services_scrollSmoothToElement__WEBPACK_IMPORTED_MODULE_9__["default"])(hiddenGlobalError.current);
    }

    if (arrayOfErrors.length === 0) {
      var emptyFields = Object.entries(inputValues).filter(function (_ref2) {
        var _ref3 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, 2),
            key = _ref3[0],
            value = _ref3[1];

        return validationValues[key].isRequired && value === "";
      }).map(function (_ref4) {
        var _ref5 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref4, 1),
            key = _ref5[0];

        return key;
      });

      if (emptyFields.length) {
        submitErrorsHandler(emptyFields);
      } else if (inputValues.new_password !== "" && inputValues.repeat_new_password === "") {
        // Check if new password is not empty but confirm new password is empty
        submitErrorsHandler([].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(emptyFields), [{
          name: "repeat_new_password",
          requiredMessage: "Merci de confirmer votre mot de passe"
        }]));
      } else if (inputValues.new_password !== "" && inputValues.repeat_new_password !== inputValues.new_password) {
        // Check the correspondance between new password and confirm new password
        submitErrorsHandler([].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(emptyFields), [{
          name: "repeat_new_password",
          requiredMessage: "Les mots de passes ne sont pas identiques"
        }]));
      } else if (inputValues.new_password !== "" && inputValues.current_password === "") {
        // Check if new password is not empty but current password is empty
        submitErrorsHandler([].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(emptyFields), [{
          name: "current_password",
          requiredMessage: "Merci de confirmer votre mot de passe actuel"
        }]));
      } else {
        var _administratorState$c6, _globalInfoState$marq;

        var infos_obj = {
          surname: inputValues.surname,
          name: inputValues.name,
          phone: inputValues.phone,
          mail: (_administratorState$c6 = administratorState.currentUser) === null || _administratorState$c6 === void 0 ? void 0 : _administratorState$c6.email,
          brand: (globalInfoState === null || globalInfoState === void 0 ? void 0 : (_globalInfoState$marq = globalInfoState.marque) === null || _globalInfoState$marq === void 0 ? void 0 : _globalInfoState$marq.name) || "pfg",
          current_password: inputValues.current_password,
          new_password: inputValues.new_password,
          repeat_new_password: inputValues.repeat_new_password
        };

        try {
          setIsLoader(true);
          updatePersonalInfo.mutate({
            data: infos_obj,
            apiUrl: _constants__WEBPACK_IMPORTED_MODULE_5__.postUserUpdateUrl
          }, {
            onSuccess: function onSuccess(_ref6) {
              var data = _ref6.data;

              if (data !== null && data !== void 0 && data.status && (data === null || data === void 0 ? void 0 : data.status) === 200) {
                var lastName = data.field_user_surname,
                    firstName = data.field_user_name,
                    phone = data.field_user_phone;

                var updatedUserInfo = _objectSpread(_objectSpread({}, administratorState === null || administratorState === void 0 ? void 0 : administratorState.currentUser), {}, {
                  lastName: lastName,
                  firstName: firstName,
                  phone: phone
                });

                dispatch((0,_context_administratorSlice__WEBPACK_IMPORTED_MODULE_6__.currentUserSet)({
                  user: updatedUserInfo
                }));

                if (administratorState.isAdmin) {
                  dispatch((0,_context_globalInfoSlice__WEBPACK_IMPORTED_MODULE_7__.espaceAdministratorUpdated)({
                    firstName: updatedUserInfo.firstName,
                    lastName: updatedUserInfo.lastName
                  }));
                }

                dispatch((0,_context_administratorSlice__WEBPACK_IMPORTED_MODULE_6__.administratorPersonalInfoModified)({
                  isEditingPersonalInfo: false,
                  isEditingAdministator: true
                }));
                closeForm({
                  userUpdated: true
                });
              } else {
                setIsLoader(false);
                setNetworkError("Une erreur s'est produite. Veuillez reprendre ultérieurement.");
                (networkErrorMessage === null || networkErrorMessage === void 0 ? void 0 : networkErrorMessage.current) && (0,_services_scrollSmoothToElement__WEBPACK_IMPORTED_MODULE_9__["default"])(networkErrorMessage.current);
              }
            },
            onError: function onError() {
              setIsLoader(false);
              setNetworkError("Une erreur s'est produite. Veuillez reprendre ultérieurement.");
              (networkErrorMessage === null || networkErrorMessage === void 0 ? void 0 : networkErrorMessage.current) && (0,_services_scrollSmoothToElement__WEBPACK_IMPORTED_MODULE_9__["default"])(networkErrorMessage.current);
            }
          });
        } catch (_unused) {
          // Something went wrong
          setIsLoader(false);
          setNetworkError("Une erreur s'est produite. Veuillez reprendre ultérieurement.");
          (networkErrorMessage === null || networkErrorMessage === void 0 ? void 0 : networkErrorMessage.current) && (0,_services_scrollSmoothToElement__WEBPACK_IMPORTED_MODULE_9__["default"])(networkErrorMessage.current);
        }
      }
    }
  };

  var handleCloseForm = function handleCloseForm() {
    dispatch((0,_context_administratorSlice__WEBPACK_IMPORTED_MODULE_6__.administratorPersonalInfoModified)({
      isEditingPersonalInfo: false,
      isEditingAdministator: true
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, networkError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", {
    ref: networkErrorMessage,
    className: "message-status mb-40"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_13__["default"], {
    name: "cross",
    iconClass: "message-status-icon error-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, networkError)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h2", {
    className: "content-heading-2"
  }, "Modification des informations personnelles"), !isValid && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", {
    className: "sr-only",
    tabIndex: 0,
    ref: hiddenGlobalError
  }, "Merci de corriger les erreurs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("form", {
    noValidate: true,
    onSubmit: handleSubmit,
    className: "personal-info-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("fieldset", {
    "aria-describedby": "personal-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", {
    className: "fieldset-description",
    id: "personal-info"
  }, "Coordonn\xE9es"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_FormInput__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "surname",
    name: "surname",
    labelText: "Nom",
    type: "text",
    isRequired: true,
    inputClass: "uppercase",
    autocomplete: "family-name",
    value: inputValues.surname,
    inputPlaceholder: "Nom",
    onInputChange: changeHandler,
    onInputBlur: errorHandler,
    error: errors.surname
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_FormInput__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "name",
    name: "name",
    labelText: "Pr\xE9nom",
    type: "text",
    isRequired: true,
    autocomplete: "given-name",
    value: inputValues.name,
    inputPlaceholder: "Pr\xE9nom",
    onInputChange: changeHandler,
    onInputBlur: errorHandler,
    error: errors.name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_FormInput__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "email",
    name: "email",
    labelText: "Email",
    type: "email",
    readOnly: true,
    isRequired: true,
    autocomplete: "email",
    value: inputValues.email,
    inputPlaceholder: "Email",
    onInputChange: changeHandler,
    onInputBlur: errorHandler,
    error: errors.email
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_FormInput__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "phone",
    name: "phone",
    labelText: "T\xE9l\xE9phone",
    type: "tel",
    max: 14,
    autocomplete: "tel",
    value: inputValues.phone,
    inputPlaceholder: "T\xE9l\xE9phone",
    onInputChange: changeHandler,
    onInputBlur: errorHandler,
    error: errors.phone
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_FormInput__WEBPACK_IMPORTED_MODULE_15__["default"], {
    type: "checkbox",
    id: "eventsOptin",
    name: "eventsOptin",
    wrapperClass: "mt-30",
    isRequired: false,
    labelText: "Je souhaite \xEAtre alert\xE9 des \xE9v\xE8nements priv\xE9s ajout\xE9s dans cet Espace Souvenirs"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("fieldset", {
    "aria-describedby": "password-info",
    className: "mt-30"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", {
    className: "fieldset-description",
    id: "password-info"
  }, "Mot de passe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_NewPasswordFieldset__WEBPACK_IMPORTED_MODULE_16__["default"], {
    includeCurrentPassword: true,
    inputValues: inputValues,
    changeHandler: changeHandler,
    errorHandler: errorHandler,
    errors: errors
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_layouts_ButtonsWrapper__WEBPACK_IMPORTED_MODULE_8__["default"], {
    position: "right",
    btnWrapperClass: "mt-30"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
    type: "button",
    btnClass: "bg-transparent",
    onClickAction: handleCloseForm
  }, "Annuler"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "button-loader-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
    type: "submit",
    btnClass: "bg-current",
    dataTestid: "submitInfosForm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "button-text"
  }, "Entregistrer")), isLoader && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Loader_Loader__WEBPACK_IMPORTED_MODULE_14__["default"], {
    position: "relative"
  })))));
}

/***/ })

}]);
//# sourceMappingURL=PersonalInfoForm.bundle.js.map