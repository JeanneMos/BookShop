"use strict";
(self["webpackChunkespace_souvenir"] = self["webpackChunkespace_souvenir"] || []).push([["Modal"],{

/***/ "./docroot/themes/custom/souvenirs/src/js/components/DefuntInfo/ShareDirectLink.js":
/*!*****************************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/DefuntInfo/ShareDirectLink.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ShareDirectLink; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./docroot/themes/custom/souvenirs/src/js/constants/index.js");
/* harmony import */ var _layouts_ButtonsWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layouts/ButtonsWrapper */ "./docroot/themes/custom/souvenirs/src/js/layouts/ButtonsWrapper.js");
/* harmony import */ var _services_useViewport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/useViewport */ "./docroot/themes/custom/souvenirs/src/js/services/useViewport.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button/Button */ "./docroot/themes/custom/souvenirs/src/js/components/Button/Button.js");
/* harmony import */ var _Icons_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Icons/Icon */ "./docroot/themes/custom/souvenirs/src/js/components/Icons/Icon.js");






var directLink = window.location.href;
function ShareDirectLink() {
  var _useViewport = (0,_services_useViewport__WEBPACK_IMPORTED_MODULE_3__["default"])(),
      width = _useViewport.width;

  var linkText = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  var hanleCopyLink = function hanleCopyLink() {
    if (navigator.clipboard) return navigator.clipboard.writeText(directLink);
    if (linkText.current) linkText.current.select();
    var copied = document.execCommand("copy");
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "share-direct-link-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "share-direct-link-text"
  }, "Partager les informations de votre espace en copiant ce lien :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "share-direct-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    readOnly: true,
    className: "share-direct-link-input",
    ref: linkText,
    value: directLink
  }), width > _constants__WEBPACK_IMPORTED_MODULE_1__.mobileBreakpoint && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    btnClass: "bg-transparent copy-link-btn",
    type: "button",
    onClickAction: hanleCopyLink
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "link",
    iconClass: "current-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "separator"
  }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "button-text"
  }, "copier le lien"))), width <= _constants__WEBPACK_IMPORTED_MODULE_1__.mobileBreakpoint && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_ButtonsWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    position: "center",
    btnWrapperClass: "mt-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    btnClass: "bg-transparent copy-link-btn",
    type: "button",
    onClickAction: hanleCopyLink
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "link",
    iconClass: "current-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "separator"
  }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "button-text"
  }, "copier le lien"))));
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/DefuntInfo/ShareSocialMedias.js":
/*!*******************************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/DefuntInfo/ShareSocialMedias.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ShareSocialMedias; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-share */ "./node_modules/react-share/es/WhatsappShareButton.js");
/* harmony import */ var _services_formatting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/formatting */ "./docroot/themes/custom/souvenirs/src/js/services/formatting.js");
/* harmony import */ var _Icons_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icons/Icon */ "./docroot/themes/custom/souvenirs/src/js/components/Icons/Icon.js");





var directLink = window.location.href;
function ShareSocialMedias() {
  var globalInfoState = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.globalInfo;
  });
  var _globalInfoState$defu = globalInfoState.defunt,
      firstName = _globalInfoState$defu.firstName,
      lastName = _globalInfoState$defu.lastName;
  var bodyEmail = "Vous \xEAtes invit\xE9 \xE0 rejoindre l'Espace Souvenirs en l'hommage de ".concat((0,_services_formatting__WEBPACK_IMPORTED_MODULE_2__.capitalisedName)(firstName) || "", " ").concat(lastName, ".\n  %0D%0A %0D%0A ").concat(directLink, "\n  %0D%0A %0D%0A Cet espace priv\xE9 est destin\xE9 \xE0 recueillir vos t\xE9moignages : un message, un souvenir, une anecdote ou une photo, illustrant un moment de vie.\n  %0D%0A %0D%0A Merci pour votre pr\xE9cieux soutien.");
  var subjectWithUser = "Partage de l'Espace Souvenirs de ".concat((0,_services_formatting__WEBPACK_IMPORTED_MODULE_2__.capitalisedName)(firstName) || "", " ").concat(lastName);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "share-social-media-intro"
  }, "Ou directement :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "social-media-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "social-media-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_share__WEBPACK_IMPORTED_MODULE_4__["default"], {
    url: directLink
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "whatsapp",
    iconClass: "share-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "social-media-text"
  }, "Whatsapp"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "social-media-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "mailto:?subject=".concat(subjectWithUser, "&body=").concat(bodyEmail)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "share-email",
    iconClass: "share-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "social-media-text"
  }, "Mail")))));
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Forms/ForgotPasswordForm.js":
/*!***************************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Forms/ForgotPasswordForm.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ForgotPasswordForm; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./docroot/themes/custom/souvenirs/src/js/constants/index.js");
/* harmony import */ var _services_useForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/useForm */ "./docroot/themes/custom/souvenirs/src/js/services/useForm.js");
/* harmony import */ var _services_usePostQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/usePostQuery */ "./docroot/themes/custom/souvenirs/src/js/services/usePostQuery.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Button/Button */ "./docroot/themes/custom/souvenirs/src/js/components/Button/Button.js");
/* harmony import */ var _Icons_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Icons/Icon */ "./docroot/themes/custom/souvenirs/src/js/components/Icons/Icon.js");
/* harmony import */ var _Loader_Loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Loader/Loader */ "./docroot/themes/custom/souvenirs/src/js/components/Loader/Loader.js");
/* harmony import */ var _FormInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FormInput */ "./docroot/themes/custom/souvenirs/src/js/components/Forms/FormInput.js");











var initialFormState = {
  email: ""
};
var validationValues = {
  email: {
    pattern: {
      value: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/,
      message: "Merci de renseigner une adresse email valide (p.e. email@domain.com)"
    },
    isRequired: true,
    required: "Merci de renseigner votre adresse email"
  }
};
function ForgotPasswordForm(_ref) {
  var handleConfirmationMessage = _ref.handleConfirmationMessage;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      isLoader = _useState2[0],
      setIsLoader = _useState2[1];

  var form = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      wrongCredentialsMessage = _useState4[0],
      setWrongCredentialsMessage = _useState4[1];

  var postResetPassword = (0,_services_usePostQuery__WEBPACK_IMPORTED_MODULE_6__["default"])();

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

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(e) {
      var arrayOfErrors, emptyFields, user_obj;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              arrayOfErrors = Object.keys(errors);

              if (arrayOfErrors.length === 0) {
                emptyFields = Object.entries(inputValues).filter(function (_ref3) {
                  var _ref4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, 2),
                      key = _ref4[0],
                      value = _ref4[1];

                  return validationValues[key].isRequired && value === "";
                }).map(function (_ref5) {
                  var _ref6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref5, 1),
                      key = _ref6[0];

                  return key;
                });

                if (emptyFields.length) {
                  submitErrorsHandler(emptyFields);
                } else {
                  user_obj = {
                    email: inputValues.email
                  };

                  try {
                    setIsLoader(true);
                    postResetPassword.mutate({
                      data: user_obj,
                      apiUrl: _constants__WEBPACK_IMPORTED_MODULE_4__.postResetPasswordUrl
                    }, {
                      onSuccess: function () {
                        var _onSuccess = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(_ref7) {
                          var data;
                          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  data = _ref7.data;

                                  if ((data === null || data === void 0 ? void 0 : data.status) === 200) {
                                    // check if data is not object.
                                    if (typeof data === "string") {
                                      setWrongCredentialsMessage("Merci de vérifier votre email");
                                      setIsLoader(false);
                                    } else {
                                      setWrongCredentialsMessage(null);
                                      setIsLoader(false);
                                      handleConfirmationMessage();
                                    }
                                  } else if ((data === null || data === void 0 ? void 0 : data.status) === 500) {
                                    setWrongCredentialsMessage("Merci de vérifier votre email");
                                    setIsLoader(false);
                                  } else {
                                    setIsLoader(false);
                                    setWrongCredentialsMessage("Nous avons rencontré un problème de connexion, merci de réessayer plus tard.");
                                  }

                                case 2:
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
                        setWrongCredentialsMessage("Nous avons rencontré un problème de connexion, merci de réessayer plus tard.");
                      }
                    });
                  } catch (err) {
                    setIsLoader(false);
                    setWrongCredentialsMessage("Nous avons rencontré un problème de connexion, merci de réessayer plus tard.");
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
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, wrongCredentialsMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", {
    className: "wrong-credentials-message"
  }, wrongCredentialsMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("form", {
    ref: form,
    noValidate: true,
    id: "user-login-form",
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_FormInput__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "email",
    name: "email",
    labelText: "E-mail",
    type: "text",
    autocomplete: "email",
    value: inputValues.email,
    onInputChange: changeHandler,
    onInputBlur: errorHandler,
    error: errors.email,
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "submit",
    btnClass: "bg-current center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "button-text"
  }, "Envoyer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "separator"
  }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: "next",
    iconClass: "white-icon"
  })), isLoader && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Loader_Loader__WEBPACK_IMPORTED_MODULE_9__["default"], null))));
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

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Modal/DefuntPictureModal.js":
/*!***************************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Modal/DefuntPictureModal.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DefuntPictureModal; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./docroot/themes/custom/souvenirs/src/js/constants/index.js");
/* harmony import */ var _context_globalInfoSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/globalInfoSlice */ "./docroot/themes/custom/souvenirs/src/js/context/globalInfoSlice.js");
/* harmony import */ var _context_modalSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/modalSlice */ "./docroot/themes/custom/souvenirs/src/js/context/modalSlice.js");
/* harmony import */ var _services_usePostQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/usePostQuery */ "./docroot/themes/custom/souvenirs/src/js/services/usePostQuery.js");
/* harmony import */ var _Upload_Upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Upload/Upload */ "./docroot/themes/custom/souvenirs/src/js/components/Upload/Upload.js");
/* harmony import */ var _ModalTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ModalTitle */ "./docroot/themes/custom/souvenirs/src/js/components/Modal/ModalTitle.js");










function DefuntPictureModal() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  var params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useParams)();

  var handleCloseModal = function handleCloseModal() {
    dispatch((0,_context_modalSlice__WEBPACK_IMPORTED_MODULE_5__.modalClosed)());
  };

  var updateDefuntPhoto = (0,_services_usePostQuery__WEBPACK_IMPORTED_MODULE_6__["default"])({
    parameters: {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      withCredentials: true,
      credentials: "include"
    }
  });

  var saveDefuntPhoto = function saveDefuntPhoto(files) {
    var formData = new FormData();

    try {
      if (files.length > 0) {
        var _files$;

        formData.append("file", files[0], (_files$ = files[0]) === null || _files$ === void 0 ? void 0 : _files$.name);
      } else {
        formData.append("file", false);
      }

      formData.append("field_machine_name", _constants__WEBPACK_IMPORTED_MODULE_3__.defuntPhotoMachineName);
      formData.append("entity_hash", params.espaceId);
      updateDefuntPhoto.mutate({
        data: formData,
        apiUrl: _constants__WEBPACK_IMPORTED_MODULE_3__.postSaveFieldApiUrl
      }, {
        onSuccess: function onSuccess(_ref) {
          var data = _ref.data;

          if (data.status === 200) {
            var _data$field_value, _data$field_value2;

            var defuntImgObject = {
              url: data === null || data === void 0 ? void 0 : (_data$field_value = data.field_value) === null || _data$field_value === void 0 ? void 0 : _data$field_value.url,
              name: data === null || data === void 0 ? void 0 : (_data$field_value2 = data.field_value) === null || _data$field_value2 === void 0 ? void 0 : _data$field_value2.title
            };
            dispatch((0,_context_globalInfoSlice__WEBPACK_IMPORTED_MODULE_4__.defuntImageUpdated)({
              defuntImage: data !== null && data !== void 0 && data.field_value ? defuntImgObject : null
            }));
            dispatch((0,_context_modalSlice__WEBPACK_IMPORTED_MODULE_5__.modalClosed)());
            setError(null);
          } else {
            console.log("erreur ");
            setError("Une erreur s'est produite. Merci de réessayer plus tard");
          }
        },
        onError: function onError(err) {
          dispatch((0,_context_globalInfoSlice__WEBPACK_IMPORTED_MODULE_4__.defuntImageUpdated)({
            defuntImage: null
          }));
          dispatch((0,_context_modalSlice__WEBPACK_IMPORTED_MODULE_5__.modalClosed)());
        }
      });
    } catch (_unused) {// Something went wrong
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ModalTitle__WEBPACK_IMPORTED_MODULE_8__["default"], null, "S\xE9lectionner une photo"), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: "upload-error-message"
  }, error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Upload_Upload__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: "defunt-image",
    numberOfPhotos: 1,
    isLoading: updateDefuntPhoto === null || updateDefuntPhoto === void 0 ? void 0 : updateDefuntPhoto.isLoading,
    closeModal: handleCloseModal,
    saveFile: saveDefuntPhoto
  }));
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Modal/ForgotPasswordModal.js":
/*!****************************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Modal/ForgotPasswordModal.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ForgotPasswordModal; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _context_modalSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/modalSlice */ "./docroot/themes/custom/souvenirs/src/js/context/modalSlice.js");
/* harmony import */ var _layouts_ButtonsWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layouts/ButtonsWrapper */ "./docroot/themes/custom/souvenirs/src/js/layouts/ButtonsWrapper.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Button/Button */ "./docroot/themes/custom/souvenirs/src/js/components/Button/Button.js");
/* harmony import */ var _Forms_ForgotPasswordForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Forms/ForgotPasswordForm */ "./docroot/themes/custom/souvenirs/src/js/components/Forms/ForgotPasswordForm.js");
/* harmony import */ var _ModalSubTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ModalSubTitle */ "./docroot/themes/custom/souvenirs/src/js/components/Modal/ModalSubTitle.js");
/* harmony import */ var _ModalTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ModalTitle */ "./docroot/themes/custom/souvenirs/src/js/components/Modal/ModalTitle.js");









function ForgotPasswordModal() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isEmailSent = _useState2[0],
      setEmailSent = _useState2[1];

  var handleCloseModal = function handleCloseModal() {
    dispatch((0,_context_modalSlice__WEBPACK_IMPORTED_MODULE_3__.modalClosed)());
  };

  var handleConfirmationMessage = function handleConfirmationMessage() {
    setEmailSent(true);
  };

  if (isEmailSent) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ModalTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
      titleModalClass: "login-modal-title"
    }, "MOT DE PASSE oubli\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ModalSubTitle__WEBPACK_IMPORTED_MODULE_7__["default"], null, "Un e-mail a \xE9t\xE9 envoy\xE9 \xE0 l'adresse indiqu\xE9e. Merci de v\xE9rifier votre bo\xEEte e-mail."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_layouts_ButtonsWrapper__WEBPACK_IMPORTED_MODULE_4__["default"], {
      btnWrapperClass: "width-auto mb-30 mt-30"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      type: "button",
      onClickAction: handleCloseModal,
      btnClass: "bg-current center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
      className: "button-text"
    }, "Fermer la fen\xEAtre"))));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ModalTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
    titleModalClass: "login-modal-title"
  }, "MOT DE PASSE oubli\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ModalSubTitle__WEBPACK_IMPORTED_MODULE_7__["default"], null, "Renseigner votre email, un lien de connexion vous sera envoy\xE9."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Forms_ForgotPasswordForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    handleCloseModal: handleCloseModal,
    handleConfirmationMessage: handleConfirmationMessage
  }));
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Modal/HeroBannerModal.js":
/*!************************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Modal/HeroBannerModal.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HeroBannerModal; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _context_globalInfoSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/globalInfoSlice */ "./docroot/themes/custom/souvenirs/src/js/context/globalInfoSlice.js");
/* harmony import */ var _context_modalSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/modalSlice */ "./docroot/themes/custom/souvenirs/src/js/context/modalSlice.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Button/Button */ "./docroot/themes/custom/souvenirs/src/js/components/Button/Button.js");
/* harmony import */ var _Forms_FormInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Forms/FormInput */ "./docroot/themes/custom/souvenirs/src/js/components/Forms/FormInput.js");
/* harmony import */ var _Icons_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Icons/Icon */ "./docroot/themes/custom/souvenirs/src/js/components/Icons/Icon.js");
/* harmony import */ var _ModalSubTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ModalSubTitle */ "./docroot/themes/custom/souvenirs/src/js/components/Modal/ModalSubTitle.js");
/* harmony import */ var _ModalTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ModalTitle */ "./docroot/themes/custom/souvenirs/src/js/components/Modal/ModalTitle.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }











var imagesArr = [{
  name: "sky.jpg"
}, {
  name: "sunset.jpg"
}, {
  name: "sky-with-birds.jpg"
}, {
  name: "water-lily.jpg"
}, {
  name: "mountains.jpg"
}, {
  name: "tree.jpg"
}];
var imagesWithId = imagesArr.map(function (img) {
  return {
    name: img.name,
    imgId: (0,nanoid__WEBPACK_IMPORTED_MODULE_11__.nanoid)()
  };
});
function HeroBannerModal() {
  var globalInfoState = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.globalInfo;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(globalInfoState.heroBannerImage),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  var handleImageChange = function handleImageChange(e) {
    setInputValue(e.target);
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var heroImgObject = {
      // url: inputValue.value,
      name: inputValue.dataset.imagename
    };
    dispatch((0,_context_globalInfoSlice__WEBPACK_IMPORTED_MODULE_4__.heroImageUpdated)({
      heroBannerImage: _objectSpread({}, heroImgObject)
    }));
    dispatch((0,_context_modalSlice__WEBPACK_IMPORTED_MODULE_5__.modalClosed)());
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_ModalTitle__WEBPACK_IMPORTED_MODULE_10__["default"], null, "S\xE9lectionner une photo d\u2019arri\xE8re plan"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_ModalSubTitle__WEBPACK_IMPORTED_MODULE_9__["default"], null, "Personnalisez votre espace souvenirs avec la photo d\u2019arri\xE8re plan de votre choix parmi une s\xE9lection :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("form", {
    noValidate: true,
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "image-radios-wrapper"
  }, imagesWithId.map(function (_ref) {
    var imgId = _ref.imgId,
        name = _ref.name;
    var localSrc = "".concat(window.location.origin, "/themes/custom/souvenirs/src/assets/images/bg-images/").concat(name);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Forms_FormInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: imgId,
      id: imgId,
      wrapperClass: "input-wrapper--radio",
      name: "hero_banner_image",
      imageName: name,
      labelImage: localSrc,
      value: localSrc,
      checked: inputValue === localSrc,
      onInputChange: handleImageChange,
      type: "radio"
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "submit",
    onClickAction: handleSubmit,
    btnClass: "bg-current mt-30"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    className: "button-text"
  }, "Valider cette photo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    className: "separator"
  }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: "next",
    iconClass: "white-icon"
  }))));
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Modal/HomageModal.js":
/*!********************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Modal/HomageModal.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HomageModal; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./docroot/themes/custom/souvenirs/src/js/constants/index.js");
/* harmony import */ var _context_globalInfoSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/globalInfoSlice */ "./docroot/themes/custom/souvenirs/src/js/context/globalInfoSlice.js");
/* harmony import */ var _context_modalSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/modalSlice */ "./docroot/themes/custom/souvenirs/src/js/context/modalSlice.js");
/* harmony import */ var _layouts_ButtonsWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../layouts/ButtonsWrapper */ "./docroot/themes/custom/souvenirs/src/js/layouts/ButtonsWrapper.js");
/* harmony import */ var _services_formatting__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/formatting */ "./docroot/themes/custom/souvenirs/src/js/services/formatting.js");
/* harmony import */ var _services_useForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/useForm */ "./docroot/themes/custom/souvenirs/src/js/services/useForm.js");
/* harmony import */ var _services_usePostQuery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/usePostQuery */ "./docroot/themes/custom/souvenirs/src/js/services/usePostQuery.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Button/Button */ "./docroot/themes/custom/souvenirs/src/js/components/Button/Button.js");
/* harmony import */ var _Forms_FormTextarea__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Forms/FormTextarea */ "./docroot/themes/custom/souvenirs/src/js/components/Forms/FormTextarea.js");
/* harmony import */ var _Icons_Icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Icons/Icon */ "./docroot/themes/custom/souvenirs/src/js/components/Icons/Icon.js");
/* harmony import */ var _ModalTitle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ModalTitle */ "./docroot/themes/custom/souvenirs/src/js/components/Modal/ModalTitle.js");
















function HomageModal() {
  var params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_15__.useParams)();
  var globalInfoState = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.globalInfo;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  var updateTextHommage = (0,_services_usePostQuery__WEBPACK_IMPORTED_MODULE_10__["default"])();
  var form = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  var initialFormState = {
    homage_text: (0,_services_formatting__WEBPACK_IMPORTED_MODULE_8__.decoded)(globalInfoState === null || globalInfoState === void 0 ? void 0 : globalInfoState.homageText) || ""
  };
  var validationValues = {
    homage_text: {
      isRequired: false
    }
  };

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

  var closeModal = function closeModal() {
    dispatch((0,_context_modalSlice__WEBPACK_IMPORTED_MODULE_6__.modalClosed)());
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
      var hommage_obj;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              hommage_obj = {
                field_value: inputValues.homage_text,
                field_machine_name: _constants__WEBPACK_IMPORTED_MODULE_4__.homageMachineName,
                entity_hash: params.espaceId
              };

              try {
                updateTextHommage.mutate({
                  data: hommage_obj,
                  apiUrl: _constants__WEBPACK_IMPORTED_MODULE_4__.postSaveFieldApiUrl
                }, {
                  onSuccess: function onSuccess(data) {
                    var _data$data;

                    dispatch((0,_context_globalInfoSlice__WEBPACK_IMPORTED_MODULE_5__.homageTextUpdated)({
                      homageText: data === null || data === void 0 ? void 0 : (_data$data = data.data) === null || _data$data === void 0 ? void 0 : _data$data.field_value
                    }));
                    dispatch((0,_context_modalSlice__WEBPACK_IMPORTED_MODULE_6__.modalClosed)());
                  }
                });
              } catch (_unused) {// Something went wrong
              }

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_ModalTitle__WEBPACK_IMPORTED_MODULE_14__["default"], null, "Rendre hommage"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("form", {
    noValidate: true,
    onSubmit: handleSubmit,
    ref: form
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Forms_FormTextarea__WEBPACK_IMPORTED_MODULE_12__["default"], {
    labelText: "Texte d'introduction",
    id: "homage_text",
    name: "homage_text",
    value: inputValues.homage_text,
    onInputChange: changeHandler
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_layouts_ButtonsWrapper__WEBPACK_IMPORTED_MODULE_7__["default"], {
    position: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    type: "button",
    btnClass: "bg-transparent",
    onClickAction: closeModal
  }, "Annuler"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    type: "submit",
    btnClass: "bg-current"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_13__["default"], {
    name: "save",
    iconClass: "white-icon book-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    className: "separator"
  }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    className: "button-text"
  }, "enregistrer")))));
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Modal/LoginModal.js":
/*!*******************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Modal/LoginModal.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LoginModal; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Forms_LoginUserForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Forms/LoginUserForm */ "./docroot/themes/custom/souvenirs/src/js/components/Forms/LoginUserForm.js");
/* harmony import */ var _ModalTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModalTitle */ "./docroot/themes/custom/souvenirs/src/js/components/Modal/ModalTitle.js");



function LoginModal() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ModalTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    titleModalClass: "login-modal-title"
  }, "MON ESPACE SOUVENIRS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Forms_LoginUserForm__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Modal/MessagePictureHeroModal.js":
/*!********************************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Modal/MessagePictureHeroModal.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MessagePictureHeroModal; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _context_messageSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/messageSlice */ "./docroot/themes/custom/souvenirs/src/js/context/messageSlice.js");
/* harmony import */ var _context_modalSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/modalSlice */ "./docroot/themes/custom/souvenirs/src/js/context/modalSlice.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Button/Button */ "./docroot/themes/custom/souvenirs/src/js/components/Button/Button.js");
/* harmony import */ var _Forms_FormInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Forms/FormInput */ "./docroot/themes/custom/souvenirs/src/js/components/Forms/FormInput.js");
/* harmony import */ var _Icons_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Icons/Icon */ "./docroot/themes/custom/souvenirs/src/js/components/Icons/Icon.js");
/* harmony import */ var _ModalSubTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ModalSubTitle */ "./docroot/themes/custom/souvenirs/src/js/components/Modal/ModalSubTitle.js");
/* harmony import */ var _ModalTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ModalTitle */ "./docroot/themes/custom/souvenirs/src/js/components/Modal/ModalTitle.js");










var imagesArr = [{
  name: "sky.jpg"
}, {
  name: "sunset.jpg"
}, {
  name: "sky-with-birds.jpg"
}, {
  name: "water-lily.jpg"
}, {
  name: "mountains.jpg"
}, {
  name: "tree.jpg"
}];
var imagesWithId = imagesArr.map(function (img) {
  return {
    name: img.name
  };
});
function MessagePictureHeroModal() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  var handleImageChange = function handleImageChange(e) {
    var imageName = e.target.dataset.imagename;
    setInputValue({
      url: e.target.value,
      name: imageName
    });
  };

  var handleSubmit = function handleSubmit() {
    dispatch((0,_context_messageSlice__WEBPACK_IMPORTED_MODULE_3__.messagePictureUpdated)({
      messagePictures: [inputValue],
      customMessagePicture: false
    }));
    dispatch((0,_context_modalSlice__WEBPACK_IMPORTED_MODULE_4__.modalClosed)());
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ModalTitle__WEBPACK_IMPORTED_MODULE_9__["default"], null, "S\xE9lectionner une photo d\u2019arri\xE8re plan"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ModalSubTitle__WEBPACK_IMPORTED_MODULE_8__["default"], null, "Personnalisez votre espace souvenirs avec la photo d\u2019arri\xE8re plan de votre choix parmi une s\xE9lection :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("form", {
    noValidate: true,
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "image-radios-wrapper"
  }, imagesWithId.map(function (_ref) {
    var name = _ref.name;
    var localSrc = "".concat(window.location.origin, "/themes/custom/souvenirs/src/assets/images/bg-images/").concat(name);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Forms_FormInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: name,
      id: name,
      wrapperClass: "input-wrapper--radio",
      name: "hero_banner_image",
      imageName: name,
      labelImage: localSrc,
      value: localSrc,
      checked: inputValue === localSrc,
      onInputChange: handleImageChange,
      type: "radio"
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "submit",
    onClickAction: handleSubmit,
    btnClass: "bg-current mt-30"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "button-text"
  }, "Valider cette photo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "separator"
  }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: "next",
    iconClass: "white-icon"
  }))));
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Modal/Modal.js":
/*!**************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Modal/Modal.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Modal; }
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var focus_trap_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! focus-trap-react */ "./node_modules/focus-trap-react/dist/focus-trap-react.js");
/* harmony import */ var focus_trap_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(focus_trap_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _context_modalSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/modalSlice */ "./docroot/themes/custom/souvenirs/src/js/context/modalSlice.js");
/* harmony import */ var _Icons_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Icons/Icon */ "./docroot/themes/custom/souvenirs/src/js/components/Icons/Icon.js");
/* harmony import */ var _DefuntPictureModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DefuntPictureModal */ "./docroot/themes/custom/souvenirs/src/js/components/Modal/DefuntPictureModal.js");
/* harmony import */ var _ForgotPasswordModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ForgotPasswordModal */ "./docroot/themes/custom/souvenirs/src/js/components/Modal/ForgotPasswordModal.js");
/* harmony import */ var _HeroBannerModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HeroBannerModal */ "./docroot/themes/custom/souvenirs/src/js/components/Modal/HeroBannerModal.js");
/* harmony import */ var _HomageModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./HomageModal */ "./docroot/themes/custom/souvenirs/src/js/components/Modal/HomageModal.js");
/* harmony import */ var _LoginModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LoginModal */ "./docroot/themes/custom/souvenirs/src/js/components/Modal/LoginModal.js");
/* harmony import */ var _MessagePictureHeroModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./MessagePictureHeroModal */ "./docroot/themes/custom/souvenirs/src/js/components/Modal/MessagePictureHeroModal.js");
/* harmony import */ var _ShareModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ShareModal */ "./docroot/themes/custom/souvenirs/src/js/components/Modal/ShareModal.js");














function Modal() {
  var modalState = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.modal;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  var closeButton = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  var handleUserKeyPress = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (event) {
    var key = event.key,
        keyCode = event.keyCode;

    if (keyCode === 27 || key === "Escape") {
      dispatch((0,_context_modalSlice__WEBPACK_IMPORTED_MODULE_5__.modalClosed)());
    }
  }, []);

  var closeModal = function closeModal() {
    dispatch((0,_context_modalSlice__WEBPACK_IMPORTED_MODULE_5__.modalClosed)());
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (closeButton.current) closeButton.current.focus();
    window.addEventListener("keydown", handleUserKeyPress);
    return function () {
      dispatch((0,_context_modalSlice__WEBPACK_IMPORTED_MODULE_5__.modalClosed)());
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, []);
  var MODAL_COMPONENTS = {
    HomageModal: _HomageModal__WEBPACK_IMPORTED_MODULE_10__["default"],
    LoginModal: _LoginModal__WEBPACK_IMPORTED_MODULE_11__["default"],
    MessagePictureHeroModal: _MessagePictureHeroModal__WEBPACK_IMPORTED_MODULE_12__["default"],
    HeroBannerModal: _HeroBannerModal__WEBPACK_IMPORTED_MODULE_9__["default"],
    DefuntPictureModal: _DefuntPictureModal__WEBPACK_IMPORTED_MODULE_7__["default"],
    ShareModal: _ShareModal__WEBPACK_IMPORTED_MODULE_13__["default"],
    ForgotPasswordModal: _ForgotPasswordModal__WEBPACK_IMPORTED_MODULE_8__["default"]
  };

  var modalContent = function modalContent() {
    if (!modalState.modalType) return null;
    var SpecificModal = MODAL_COMPONENTS[modalState.modalType];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(SpecificModal, null);
  };

  if (!modalState.isOpen) return null;
  return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_3__.createPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((focus_trap_react__WEBPACK_IMPORTED_MODULE_1___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "modal-overlay",
    onClick: closeModal
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "modal-wrapper",
    role: "dialog",
    "data-testid": "modalTest"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()("modal", modalState.theme)
  }, (modalState.hasCloseButton || !modalState.modalType) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("button", {
    type: "button",
    className: "modal-close",
    ref: closeButton,
    onClick: closeModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "cross",
    iconClass: "close-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    className: "sr-only"
  }, "Fermer la popin")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    role: "document"
  }, modalContent()))))), document.getElementById("react-portal"));
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Modal/ModalSubTitle.js":
/*!**********************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Modal/ModalSubTitle.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ModalSubTitle; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function ModalSubTitle(_ref) {
  var children = _ref.children,
      _ref$subtitleClass = _ref.subtitleClass,
      subtitleClass = _ref$subtitleClass === void 0 ? "modal-subtitle" : _ref$subtitleClass;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: subtitleClass
  }, children);
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Modal/ModalTitle.js":
/*!*******************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Modal/ModalTitle.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ModalTitle; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function ModalTitle(_ref) {
  var _ref$titleModalClass = _ref.titleModalClass,
      titleModalClass = _ref$titleModalClass === void 0 ? "modal-title" : _ref$titleModalClass,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: titleModalClass
  }, children);
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Modal/ShareModal.js":
/*!*******************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Modal/ShareModal.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ShareModal; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _DefuntInfo_ShareDirectLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DefuntInfo/ShareDirectLink */ "./docroot/themes/custom/souvenirs/src/js/components/DefuntInfo/ShareDirectLink.js");
/* harmony import */ var _DefuntInfo_ShareSocialMedias__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DefuntInfo/ShareSocialMedias */ "./docroot/themes/custom/souvenirs/src/js/components/DefuntInfo/ShareSocialMedias.js");
/* harmony import */ var _ModalTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ModalTitle */ "./docroot/themes/custom/souvenirs/src/js/components/Modal/ModalTitle.js");




function ShareModal() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ModalTitle__WEBPACK_IMPORTED_MODULE_3__["default"], null, "Partager l\u2019espace \xE0 vos proches"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DefuntInfo_ShareDirectLink__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DefuntInfo_ShareSocialMedias__WEBPACK_IMPORTED_MODULE_2__["default"], null));
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Upload/DefuntModalImagePlaceholder.js":
/*!*************************************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Upload/DefuntModalImagePlaceholder.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DefuntModalImagePlaceholder; }
/* harmony export */ });
/* harmony import */ var Images_profile_grey_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Images/profile-grey.jpg */ "./docroot/themes/custom/souvenirs/src/assets/images/profile-grey.jpg");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function DefuntModalImagePlaceholder() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "image-preview-placeholder"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Photo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "image-preview"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    alt: "",
    className: "image-preview-image",
    width: "200",
    height: "200",
    src: Images_profile_grey_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]
  })));
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Upload/ImagePreview.js":
/*!**********************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Upload/ImagePreview.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ImagePreview; }
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button/Button */ "./docroot/themes/custom/souvenirs/src/js/components/Button/Button.js");
/* harmony import */ var _Icons_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icons/Icon */ "./docroot/themes/custom/souvenirs/src/js/components/Icons/Icon.js");





function ImagePreview(_ref) {
  var source = _ref.source,
      imgName = _ref.imgName,
      imgSize = _ref.imgSize,
      deletePhoto = _ref.deletePhoto,
      modal = _ref.modal;
  var imageSize = imgSize ? Math.ceil(imgSize / 1000) : null;

  var handleDeletePhoto = function handleDeletePhoto() {
    deletePhoto(imgName);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()("image-preview-wrapper", modal && "image-preview-wrapper--modal")
  }, modal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Photo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "image-preview"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    alt: "",
    className: "image-preview-image",
    width: "200",
    height: "200",
    src: source
  })), imgName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "preview-description--bold"
  }, imgName), imageSize && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "preview-description"
  }, imageSize, "Kb"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ariaLabel: "supprimer ".concat(imgName),
    type: "button",
    btnClass: "delete-image-button",
    onClickAction: handleDeletePhoto
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "delete",
    iconClass: "delete-image-icon"
  })));
}
ImagePreview.propTypes = {
  source: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired),
  imgName: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  deletePhoto: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func.isRequired),
  imgSize: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
  modal: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool)
};

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Upload/InputWithDescription.js":
/*!******************************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Upload/InputWithDescription.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ InputWithDescription; }
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Icons_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icons/Icon */ "./docroot/themes/custom/souvenirs/src/js/components/Icons/Icon.js");



function InputWithDescription(_ref) {
  var inputName = _ref.inputName,
      handleCompressedUpload = _ref.handleCompressedUpload,
      hasImageRequirement = _ref.hasImageRequirement,
      btnClass = _ref.btnClass,
      _ref$inputDisabled = _ref.inputDisabled,
      inputDisabled = _ref$inputDisabled === void 0 ? false : _ref$inputDisabled,
      describedBy = _ref.describedBy,
      inputFile = _ref.inputFile;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "input-file-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
    accept: "image/png, image/jpeg, image/jpg",
    type: "file",
    id: inputName,
    ref: inputFile,
    name: inputName,
    onChange: handleCompressedUpload,
    disabled: inputDisabled,
    "aria-describedby": "input-file-description ".concat(describedBy)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", {
    htmlFor: inputName,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()("file-input-label", btnClass)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "upload",
    iconClass: btnClass && btnClass === "bg-current" ? "white-icon" : "current-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "separator"
  }, "\xA0"), "D\xE9poser votre photo"), hasImageRequirement && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    id: "input-file-description",
    className: "input-file-description"
  }, "Les formats support\xE9s : PNG/JPG/JPEG/BMP - 2 Mo maximum"));
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Upload/Upload.js":
/*!****************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Upload/Upload.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Upload; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var compressorjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! compressorjs */ "./node_modules/compressorjs/dist/compressor.js");
/* harmony import */ var compressorjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(compressorjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _layouts_ButtonsWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layouts/ButtonsWrapper */ "./docroot/themes/custom/souvenirs/src/js/layouts/ButtonsWrapper.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Button/Button */ "./docroot/themes/custom/souvenirs/src/js/components/Button/Button.js");
/* harmony import */ var _Icons_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Icons/Icon */ "./docroot/themes/custom/souvenirs/src/js/components/Icons/Icon.js");
/* harmony import */ var _Loader_Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Loader/Loader */ "./docroot/themes/custom/souvenirs/src/js/components/Loader/Loader.js");
/* harmony import */ var _DefuntModalImagePlaceholder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DefuntModalImagePlaceholder */ "./docroot/themes/custom/souvenirs/src/js/components/Upload/DefuntModalImagePlaceholder.js");
/* harmony import */ var _ImagePreview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ImagePreview */ "./docroot/themes/custom/souvenirs/src/js/components/Upload/ImagePreview.js");
/* harmony import */ var _InputWithDescription__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./InputWithDescription */ "./docroot/themes/custom/souvenirs/src/js/components/Upload/InputWithDescription.js");



/* eslint-disable no-new */











function Upload(_ref) {
  var name = _ref.name,
      numberOfPhotos = _ref.numberOfPhotos,
      closeModal = _ref.closeModal,
      saveFile = _ref.saveFile,
      _ref$isLoading = _ref.isLoading,
      isLoading = _ref$isLoading === void 0 ? false : _ref$isLoading,
      _ref$hasImageRequirem = _ref.hasImageRequirement,
      hasImageRequirement = _ref$hasImageRequirem === void 0 ? true : _ref$hasImageRequirem,
      dispatchCbAction = _ref.dispatchCbAction,
      btnClass = _ref.btnClass;
  var globalInfoState = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.globalInfo;
  });

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(globalInfoState !== null && globalInfoState !== void 0 && globalInfoState.defuntImage ? [globalInfoState === null || globalInfoState === void 0 ? void 0 : globalInfoState.defuntImage] : []),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      compressedFiles = _useState2[0],
      setcompressedFiles = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      errorMessage = _useState4[0],
      setErrorMessage = _useState4[1];

  var inputFile = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();

  var handleCompressedUpload = function handleCompressedUpload(e) {
    var image = e.target.files[0];
    var fileNames = compressedFiles.map(function (file) {
      return file.name;
    });

    if (fileNames.length >= numberOfPhotos) {
      setErrorMessage("Vous ne pouvez pas ajouter plus de ".concat(numberOfPhotos, " ").concat(numberOfPhotos === 1 ? "photo" : "photos"));
      return;
    }

    if (image.size >= 2097152) {
      setErrorMessage("Votre photo ne peut pas dépasser 2 Mo");
      return;
    }

    if (image.type !== "image/jpeg" && image.type !== "image/png" && image.type !== "image/bmp") {
      setErrorMessage("Vous pouvez télécharge des photo au format PNG/JPG/JPEG/BMP uniquement");
      return;
    }

    if (fileNames.length === 0 || fileNames.length > 0 && !fileNames.includes(image.name)) {
      setErrorMessage(null);
      new (compressorjs__WEBPACK_IMPORTED_MODULE_2___default())(image, {
        quality: 0.8,
        success: function success(compressedResult) {
          setcompressedFiles([].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(compressedFiles), [compressedResult]));
          dispatchCbAction && dispatchCbAction([].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(compressedFiles), [compressedResult]));
        }
      });
    }
  };

  var handleDeletePhoto = function handleDeletePhoto() {
    if (inputFile.current) {
      inputFile.current.value = "";
    }

    setcompressedFiles([]);
    setErrorMessage(null);
  };

  var handleSaveFile = function handleSaveFile() {
    saveFile(compressedFiles);
  };

  var handleImagePreview = function handleImagePreview(files) {
    if (files && files.length > 0) {
      return files.map(function (file) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_ImagePreview__WEBPACK_IMPORTED_MODULE_10__["default"], {
          key: file.name,
          source: file.url || window.URL.createObjectURL(file),
          imgName: file.name,
          imgSize: file.size,
          deletePhoto: handleDeletePhoto,
          modal: true
        });
      });
    }

    if (files && files.length === 0) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_DefuntModalImagePlaceholder__WEBPACK_IMPORTED_MODULE_9__["default"], null);
    }

    return null;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, errorMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", {
    className: "upload-error-message"
  }, errorMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "upload-defunt-image-wrapper"
  }, handleImagePreview(compressedFiles), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "modal-image-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", {
    className: "modal-photo-subtitle"
  }, "Personnaliser l\u2019Espace Souvenirs en y ajoutant une photo du d\xE9funt"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", {
    className: "input-file-description"
  }, "Pour un affichage optimum, privil\xE9gier des photos au format portrait"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_InputWithDescription__WEBPACK_IMPORTED_MODULE_11__["default"], {
    inputName: name,
    handleCompressedUpload: handleCompressedUpload,
    btnClass: "bg-current",
    inputFile: inputFile,
    hasImageRequirement: hasImageRequirement
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_layouts_ButtonsWrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    position: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "button",
    btnClass: "bg-transparent cancel-button",
    onClickAction: closeModal
  }, "Annuler"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "button-loader-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "button",
    btnClass: "bg-current",
    disabled: isLoading,
    onClickAction: handleSaveFile
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: "save",
    iconClass: "white-icon book-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "separator"
  }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "button-text"
  }, "enregistrer")), isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Loader_Loader__WEBPACK_IMPORTED_MODULE_8__["default"], {
    position: "relative"
  })))));
}
Upload.defaultProps = {
  numberOfPhotos: 1
};
Upload.propTypes = {
  name: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string.isRequired),
  numberOfPhotos: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number)
};

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

/***/ "./docroot/themes/custom/souvenirs/src/js/services/formatting.js":
/*!***********************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/services/formatting.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "capitalisedName": function() { return /* binding */ capitalisedName; },
/* harmony export */   "dateFormat": function() { return /* binding */ dateFormat; },
/* harmony export */   "dateHoursFormat": function() { return /* binding */ dateHoursFormat; },
/* harmony export */   "decoded": function() { return /* binding */ decoded; },
/* harmony export */   "getFullYear": function() { return /* binding */ getFullYear; },
/* harmony export */   "hoursFormat": function() { return /* binding */ hoursFormat; },
/* harmony export */   "isEmptyArray": function() { return /* binding */ isEmptyArray; },
/* harmony export */   "slicedArray": function() { return /* binding */ slicedArray; },
/* harmony export */   "textWithBreaks": function() { return /* binding */ textWithBreaks; },
/* harmony export */   "timeStampToDate": function() { return /* binding */ timeStampToDate; }
/* harmony export */ });
/* unused harmony export civilities */
/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-entities */ "./node_modules/html-entities/lib/index.js");
/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html_entities__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./docroot/themes/custom/souvenirs/src/js/constants/index.js");



var dateFormat = function dateFormat(date) {
  return "le ".concat(date.toLocaleString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }));
};
var hoursFormat = function hoursFormat(date) {
  return date.toLocaleString("fr-FR", {
    hour: "numeric",
    minute: "numeric"
  });
};
var dateHoursFormat = function dateHoursFormat(date) {
  var hours = date.toLocaleString("fr-FR", {
    hour: "numeric",
    minute: "numeric"
  });
  var formattedHours = hours.replace(/:/i, "h");
  return "le ".concat(date.toLocaleString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }), " \xE0 ").concat(formattedHours);
};
var timeStampToDate = function timeStampToDate(date) {
  if (date) {
    return new Date(+date * 1000);
  }

  return new Date();
};
var getFullYear = function getFullYear(fullDate) {
  var date = new Date(fullDate);
  if (!Number.isNaN(date.getFullYear())) return date.getFullYear();
  return null;
};
var isEmptyArray = function isEmptyArray(array) {
  return Array.isArray(array) && array.length === 0;
};
var slicedArray = function slicedArray(array, begin, end) {
  return array.slice(begin, end);
};
var civilities = {
  female: "Mme",
  male: "M."
};
var decoded = html_entities__WEBPACK_IMPORTED_MODULE_2__.decode;
var capitalisedName = function capitalisedName(name) {
  return name.replace(/^\w/, function (c) {
    return c.toUpperCase();
  });
};
var textWithBreaks = function textWithBreaks(text) {
  if (typeof text === "string") {
    var separators = /<br \/>|<br\/>|<br>|\n|\r\n/;
    return text.split(separators).map(function (item, index) {
      if (item !== _constants__WEBPACK_IMPORTED_MODULE_1__.lineBreak && item !== "" && item !== "\n" && item !== "\r\n") {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          key: index
        }, item, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null));
      }

      return null;
    });
  }

  return text;
};

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/services/useViewport.js":
/*!************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/services/useViewport.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useViewport; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _context_viewportProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/viewportProvider */ "./docroot/themes/custom/souvenirs/src/js/context/viewportProvider.js");


function useViewport() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_viewportProvider__WEBPACK_IMPORTED_MODULE_1__.ViewportContext),
      width = _useContext.width,
      height = _useContext.height;

  return {
    width: width,
    height: height
  };
}

/***/ })

}]);
//# sourceMappingURL=Modal.bundle.js.map