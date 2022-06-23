"use strict";
(self["webpackChunkespace_souvenir"] = self["webpackChunkespace_souvenir"] || []).push([["docroot_themes_custom_souvenirs_src_js_components_Forms_LoginUserForm_js"],{

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

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Forms/LoginUserForm.js":
/*!**********************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Forms/LoginUserForm.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LoginUserForm; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./docroot/themes/custom/souvenirs/src/js/constants/index.js");
/* harmony import */ var _context_administratorSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/administratorSlice */ "./docroot/themes/custom/souvenirs/src/js/context/administratorSlice.js");
/* harmony import */ var _context_modalSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context/modalSlice */ "./docroot/themes/custom/souvenirs/src/js/context/modalSlice.js");
/* harmony import */ var _services_getGestionnairePrincipalES__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/getGestionnairePrincipalES */ "./docroot/themes/custom/souvenirs/src/js/services/getGestionnairePrincipalES.js");
/* harmony import */ var _services_useForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/useForm */ "./docroot/themes/custom/souvenirs/src/js/services/useForm.js");
/* harmony import */ var _services_usePostQuery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/usePostQuery */ "./docroot/themes/custom/souvenirs/src/js/services/usePostQuery.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Button/Button */ "./docroot/themes/custom/souvenirs/src/js/components/Button/Button.js");
/* harmony import */ var _Icons_Icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Icons/Icon */ "./docroot/themes/custom/souvenirs/src/js/components/Icons/Icon.js");
/* harmony import */ var _Loader_Loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Loader/Loader */ "./docroot/themes/custom/souvenirs/src/js/components/Loader/Loader.js");
/* harmony import */ var _FormInput__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./FormInput */ "./docroot/themes/custom/souvenirs/src/js/components/Forms/FormInput.js");
















var initialFormState = {
  username: "",
  password: ""
};
var validationValues = {
  username: {
    pattern: {
      value: /^([^<>()[\],"])+$/,
      message: "Merci de renseigner votre identifiant"
    },
    isRequired: true,
    required: "Merci de renseigner votre identifiant"
  },
  password: {
    isRequired: true,
    required: "Merci de renseigner votre mot de passe"
  }
};
function LoginUserForm() {
  var params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_15__.useParams)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      isLoader = _useState2[0],
      setIsLoader = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      wrongCredentialsMessage = _useState4[0],
      setWrongCredentialsMessage = _useState4[1];

  var administratorState = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.administrator;
  });
  var modalState = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.modal;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();

  var _useForm = (0,_services_useForm__WEBPACK_IMPORTED_MODULE_9__["default"])({
    initialFormState: initialFormState,
    validationValues: validationValues
  }),
      inputValues = _useForm.inputValues,
      changeHandler = _useForm.changeHandler,
      errorHandler = _useForm.errorHandler,
      submitErrorsHandler = _useForm.submitErrorsHandler,
      errors = _useForm.errors,
      isValid = _useForm.isValid;

  var form = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  var postUser = (0,_services_usePostQuery__WEBPACK_IMPORTED_MODULE_10__["default"])();

  var openForgotPasswordPopin = function openForgotPasswordPopin() {
    dispatch((0,_context_modalSlice__WEBPACK_IMPORTED_MODULE_7__.modalClosed)());
    dispatch((0,_context_modalSlice__WEBPACK_IMPORTED_MODULE_7__.modalOpened)({
      theme: "dark",
      hasCloseButton: true,
      modalType: "ForgotPasswordModal"
    }));
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(e) {
      var arrayOfErrors, emptyFields, user_obj;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              arrayOfErrors = Object.keys(errors);

              if (arrayOfErrors.length === 0) {
                emptyFields = Object.entries(inputValues).filter(function (_ref2) {
                  var _ref3 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, 2),
                      key = _ref3[0],
                      value = _ref3[1];

                  return validationValues[key].isRequired && value === "";
                }).map(function (_ref4) {
                  var _ref5 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref4, 1),
                      key = _ref5[0];

                  return key;
                });

                if (emptyFields.length) {
                  submitErrorsHandler(emptyFields);
                } else {
                  user_obj = {
                    username: inputValues.username,
                    password: inputValues.password
                  };

                  try {
                    setIsLoader(true);
                    postUser.mutate({
                      data: user_obj,
                      apiUrl: _constants__WEBPACK_IMPORTED_MODULE_5__.postUserUrl
                    }, {
                      onSuccess: function () {
                        var _onSuccess = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(data) {
                          var _data$data, field_user_civility, field_user_surname, field_user_name, field_user_email, field_user_phone, user_gp_entity, user;

                          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  // const token = await axios.get('/session/token');
                                  if (!data.data.code) {
                                    // check if data is not object.
                                    if (typeof data.data === "string") {
                                      setWrongCredentialsMessage("Merci de vérifier vos identifiants");
                                      setIsLoader(false);
                                    } else {
                                      setWrongCredentialsMessage(null);
                                      _data$data = data.data, field_user_civility = _data$data.field_user_civility, field_user_surname = _data$data.field_user_surname, field_user_name = _data$data.field_user_name, field_user_email = _data$data.field_user_email, field_user_phone = _data$data.field_user_phone, user_gp_entity = _data$data.user_gp_entity;
                                      user = {
                                        isLogged: true,
                                        lastName: field_user_surname,
                                        firstName: field_user_name,
                                        email: field_user_email,
                                        phone: field_user_phone,
                                        civility: field_user_civility,
                                        gp_entities: user_gp_entity
                                      };
                                      dispatch((0,_context_administratorSlice__WEBPACK_IMPORTED_MODULE_6__.userLoggedIn)());
                                      dispatch((0,_context_administratorSlice__WEBPACK_IMPORTED_MODULE_6__.currentUserSet)({
                                        user: user
                                      }));

                                      if ((0,_services_getGestionnairePrincipalES__WEBPACK_IMPORTED_MODULE_8__.getMainAdminESEntities)(user_gp_entity).length && params) {
                                        dispatch((0,_context_administratorSlice__WEBPACK_IMPORTED_MODULE_6__.isAdminSet)({
                                          isAdmin: (0,_services_getGestionnairePrincipalES__WEBPACK_IMPORTED_MODULE_8__.getMainAdminESEntities)(user_gp_entity).includes(params.espaceId)
                                        }));
                                      }

                                      setIsLoader(false);
                                      if (modalState.isOpen) dispatch((0,_context_modalSlice__WEBPACK_IMPORTED_MODULE_7__.modalClosed)());
                                      if (administratorState.isAdmin) window.location.reload();
                                    }
                                  } else {
                                    setWrongCredentialsMessage("Merci de vérifier vos identifiants");
                                    setIsLoader(false);
                                  }

                                case 1:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee);
                        }));

                        function onSuccess(_x2) {
                          return _onSuccess.apply(this, arguments);
                        }

                        return onSuccess;
                      }(),
                      onError: function onError() {
                        setIsLoader(false);
                        setWrongCredentialsMessage("Merci de vérifier vos identifiants");
                      }
                    });
                  } catch (err) {
                    setIsLoader(false);
                    setWrongCredentialsMessage(null);
                    console.error(err);
                  }
                }
              }

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", {
    className: "wrong-credentials-message"
  }, wrongCredentialsMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("form", {
    ref: form,
    noValidate: true,
    id: "user-login-form",
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_FormInput__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "username",
    name: "username",
    labelText: "E-mail",
    type: "text",
    autocomplete: "username",
    value: inputValues.username,
    onInputChange: changeHandler,
    onInputBlur: errorHandler,
    error: errors.username,
    isRequired: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_FormInput__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "password",
    name: "password",
    labelText: "Mot de passe",
    type: "password",
    autocomplete: "current-password",
    value: inputValues.password,
    onInputChange: changeHandler,
    onInputBlur: errorHandler,
    error: errors.password,
    isRequired: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("input", {
    type: "hidden",
    name: "form_id",
    value: "user_login_form"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("input", {
    type: "hidden",
    name: "op",
    value: "se connecter"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "button-loader-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    type: "submit",
    btnClass: "bg-current center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "button-text"
  }, "Se connecter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "separator"
  }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
    name: "next",
    iconClass: "white-icon"
  })), isLoader && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Loader_Loader__WEBPACK_IMPORTED_MODULE_13__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    btnClass: "forgot-password-link bg-transparent center",
    onClickAction: openForgotPasswordPopin
  }, "Mot de passe oubli\xE9?")));
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
//# sourceMappingURL=docroot_themes_custom_souvenirs_src_js_components_Forms_LoginUserForm_js.bundle.js.map