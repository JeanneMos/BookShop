"use strict";
(self["webpackChunkespace_souvenir"] = self["webpackChunkespace_souvenir"] || []).push([["MessageForm"],{

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

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Forms/MessageForm.js":
/*!********************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Forms/MessageForm.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MessageForm; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./docroot/themes/custom/souvenirs/src/js/constants/index.js");
/* harmony import */ var _context_messageSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/messageSlice */ "./docroot/themes/custom/souvenirs/src/js/context/messageSlice.js");
/* harmony import */ var _context_modalSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/modalSlice */ "./docroot/themes/custom/souvenirs/src/js/context/modalSlice.js");
/* harmony import */ var _layouts_ButtonsWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../layouts/ButtonsWrapper */ "./docroot/themes/custom/souvenirs/src/js/layouts/ButtonsWrapper.js");
/* harmony import */ var _services_formatting__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/formatting */ "./docroot/themes/custom/souvenirs/src/js/services/formatting.js");
/* harmony import */ var _services_scrollSmoothToElement__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/scrollSmoothToElement */ "./docroot/themes/custom/souvenirs/src/js/services/scrollSmoothToElement.js");
/* harmony import */ var _services_useForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/useForm */ "./docroot/themes/custom/souvenirs/src/js/services/useForm.js");
/* harmony import */ var _services_usePostQuery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/usePostQuery */ "./docroot/themes/custom/souvenirs/src/js/services/usePostQuery.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Button/Button */ "./docroot/themes/custom/souvenirs/src/js/components/Button/Button.js");
/* harmony import */ var _Icons_Icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Icons/Icon */ "./docroot/themes/custom/souvenirs/src/js/components/Icons/Icon.js");
/* harmony import */ var _Loader_Loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Loader/Loader */ "./docroot/themes/custom/souvenirs/src/js/components/Loader/Loader.js");
/* harmony import */ var _Upload_ImagePreview__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Upload/ImagePreview */ "./docroot/themes/custom/souvenirs/src/js/components/Upload/ImagePreview.js");
/* harmony import */ var _Upload_InputWithDescription__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Upload/InputWithDescription */ "./docroot/themes/custom/souvenirs/src/js/components/Upload/InputWithDescription.js");
/* harmony import */ var _Upload_useUpload__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Upload/useUpload */ "./docroot/themes/custom/souvenirs/src/js/components/Upload/useUpload.js");
/* harmony import */ var _FormInput__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./FormInput */ "./docroot/themes/custom/souvenirs/src/js/components/Forms/FormInput.js");
/* harmony import */ var _FormTextarea__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./FormTextarea */ "./docroot/themes/custom/souvenirs/src/js/components/Forms/FormTextarea.js");





















var initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
  photo: "",
  eventsOptin: ""
};
var validationValues = {
  firstName: {
    pattern: {
      value: /^([0-9a-zA-Z\u00C0-\u00FF ',-])+$/,
      message: "Merci de renseigner votre prénom"
    },
    isRequired: true,
    required: "Merci de renseigner votre prénom"
  },
  lastName: {
    pattern: {
      value: /^([0-9a-zA-Z\u00C0-\u00FF ',-])+$/,
      message: "Merci de renseigner votre nom de famille"
    },
    isRequired: true,
    required: "Merci de renseigner votre nom de famille"
  },
  email: {
    pattern: {
      value: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/,
      message: "Merci de renseigner une adresse email valide (p.e. email@domain.com)"
    },
    isRequired: true,
    required: "Merci de renseigner votre adresse email"
  },
  message: {
    isRequired: true,
    required: "Merci de remplir le texte du message"
  },
  photo: {
    isRequired: false
  },
  eventsOptin: {
    isRequired: false
  }
};
function MessageForm(_ref) {
  var reference = _ref.reference,
      closeForm = _ref.closeForm;
  var messagesState = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.messages;
  });

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      userPhoto = _useState4[0],
      setUserPhoto = _useState4[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  var params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_20__.useParams)();
  var sendMessage = (0,_services_usePostQuery__WEBPACK_IMPORTED_MODULE_11__["default"])();
  var queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQueryClient)();
  var hiddenGlobalError = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();

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

  var _useUpload = (0,_Upload_useUpload__WEBPACK_IMPORTED_MODULE_17__["default"])({
    numberOfPhotos: 3,
    dispatchCbAction: saveDefuntPhoto
  }),
      handleCompressedUpload = _useUpload.handleCompressedUpload,
      compressedFiles = _useUpload.compressedFiles,
      handleDeletePhoto = _useUpload.handleDeletePhoto,
      errorMessage = _useUpload.errorMessage;

  function saveDefuntPhoto(files) {
    if (!(0,_services_formatting__WEBPACK_IMPORTED_MODULE_8__.isEmptyArray)(files)) {
      var defuntImgObject = {
        url: window.URL.createObjectURL(files[0]),
        name: files[0].name
      };
      dispatch((0,_context_messageSlice__WEBPACK_IMPORTED_MODULE_5__.messagePictureUpdated)({
        messagePictures: [defuntImgObject],
        customMessagePicture: true
      }));
      setUserPhoto(files[0]);
    } else {
      dispatch((0,_context_messageSlice__WEBPACK_IMPORTED_MODULE_5__.messagePictureDeleted)());
    }
  }

  var openHeroBannerModal = function openHeroBannerModal() {
    dispatch((0,_context_modalSlice__WEBPACK_IMPORTED_MODULE_6__.modalOpened)({
      theme: "dark",
      hasCloseButton: true,
      modalType: "MessagePictureHeroModal"
    }));
  };

  var handleCloseForm = function handleCloseForm() {
    closeForm({
      messageSent: false
    });
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var arrayOfErrors = Object.keys(errors);

    if (!isValid && hiddenGlobalError.current) {
      (0,_services_scrollSmoothToElement__WEBPACK_IMPORTED_MODULE_9__["default"])(hiddenGlobalError.current);
    }

    if (arrayOfErrors.length === 0) {
      var emptyFields = Object.entries(inputValues).filter(function (_ref2) {
        var _ref3 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, 2),
            key = _ref3[0],
            value = _ref3[1];

        return validationValues[key].isRequired && value === "";
      }).map(function (_ref4) {
        var _ref5 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref4, 1),
            key = _ref5[0];

        return key;
      });

      if (emptyFields.length) {
        submitErrorsHandler(emptyFields);
        if (hiddenGlobalError.current) (0,_services_scrollSmoothToElement__WEBPACK_IMPORTED_MODULE_9__["default"])(hiddenGlobalError.current);
      } else {
        var formData = new FormData();

        if (userPhoto !== null && userPhoto !== void 0 && userPhoto.name && messagesState !== null && messagesState !== void 0 && messagesState.customMessagePicture) {
          formData.append("file", userPhoto, userPhoto === null || userPhoto === void 0 ? void 0 : userPhoto.name);
        }

        if (!(messagesState !== null && messagesState !== void 0 && messagesState.customMessagePicture) && messagesState !== null && messagesState !== void 0 && messagesState.messagePictures) {
          var _messagesState$messag;

          formData.append("field_message_banner", messagesState === null || messagesState === void 0 ? void 0 : (_messagesState$messag = messagesState.messagePictures[0]) === null || _messagesState$messag === void 0 ? void 0 : _messagesState$messag.name);
        }

        formData.append("field_message_name", inputValues === null || inputValues === void 0 ? void 0 : inputValues.firstName);
        formData.append("field_message_surname", inputValues === null || inputValues === void 0 ? void 0 : inputValues.lastName);
        formData.append("field_message_email", inputValues === null || inputValues === void 0 ? void 0 : inputValues.email);
        formData.append("field_message_texte", inputValues === null || inputValues === void 0 ? void 0 : inputValues.message);
        formData.append("field_message_status", true);
        formData.append("entity_hash", params.espaceId);
        sendMessage.mutate({
          data: formData,
          apiUrl: _constants__WEBPACK_IMPORTED_MODULE_4__.postMessageSendUrl
        }, {
          onSuccess: function onSuccess(_ref6) {
            var data = _ref6.data;

            if (data.status === 200) {
              setTimeout(function () {
                queryClient.refetchQueries([_constants__WEBPACK_IMPORTED_MODULE_4__.messagesListKey]);
                queryClient.refetchQueries([_constants__WEBPACK_IMPORTED_MODULE_4__.messagesAccueilKey]);
                queryClient.refetchQueries([_constants__WEBPACK_IMPORTED_MODULE_4__.numberMessagesKey]);
                closeForm({
                  messageSent: true
                });
              }, 1000);
            } else {
              setError("Une erreur s'est produite. Merci de réessayer plus tard.");
            }
          },
          onError: function onError(err) {
            setError("Une erreur s'est produite. Merci de réessayer plus tard.");
          }
        });
      }
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    return function () {
      return handleDeletePhoto();
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2", {
    className: "content-heading-2"
  }, "Ecrire un message"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "messages-form-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("form", {
    noValidate: true,
    ref: reference,
    onSubmit: handleSubmit,
    "data-testid": "messagesForm",
    className: "messages-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", {
    className: "messages-form-title"
  }, "Quel message souhaitez-vous transmettre ?"), !isValid && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: "sr-only",
    tabIndex: 0
  }, "Merci de corriger les erreurs"), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: "upload-error-message"
  }, error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_FormInput__WEBPACK_IMPORTED_MODULE_18__["default"], {
    id: "lastName",
    name: "lastName",
    labelText: "Votre nom",
    type: "text",
    isRequired: true,
    value: inputValues.lastName,
    inputPlaceholder: "Nom",
    onInputChange: changeHandler,
    onInputBlur: errorHandler,
    error: errors.lastName
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_FormInput__WEBPACK_IMPORTED_MODULE_18__["default"], {
    id: "firstName",
    name: "firstName",
    labelText: "Votre pr\xE9nom",
    type: "text",
    isRequired: true,
    value: inputValues.firstName,
    inputPlaceholder: "Pr\xE9nom",
    onInputChange: changeHandler,
    onInputBlur: errorHandler,
    error: errors.firstName
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_FormInput__WEBPACK_IMPORTED_MODULE_18__["default"], {
    id: "email",
    name: "email",
    labelText: "Votre email",
    type: "email",
    isRequired: true,
    value: inputValues.email,
    inputPlaceholder: "Email",
    onInputChange: changeHandler,
    onInputBlur: errorHandler,
    error: errors.email
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("fieldset", {
    className: "message-photo-upload"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("legend", null, "Souhaitez-vous ajouter une photo ?", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "optional-label"
  }, "\xA0(facultatif)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "message-photo-requirements"
  }, "\xA0PNG/JPG/JPEG/BMP - 2 Mo maximum")), errorMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: "upload-error-message"
  }, errorMessage), !(messagesState !== null && messagesState !== void 0 && messagesState.messagePictures) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Upload_InputWithDescription__WEBPACK_IMPORTED_MODULE_16__["default"], {
    inputName: "message-photos",
    handleCompressedUpload: handleCompressedUpload,
    btnClass: "bg-current",
    describedBy: "".concat(errorMessage ? "error-message" : "message-photo max-photo-number max-photo-size")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
    type: "button",
    btnClass: "bg-white message-photo-button",
    onClickAction: openHeroBannerModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_13__["default"], {
    name: "picture",
    iconClass: "current-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "separator"
  }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "button-text"
  }, "Choisir une photo"))), (messagesState === null || messagesState === void 0 ? void 0 : messagesState.messagePictures) && messagesState.messagePictures.map(function (file) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Upload_ImagePreview__WEBPACK_IMPORTED_MODULE_15__["default"], {
      key: typeof file === "string" ? file : file.name,
      source: typeof file === "string" ? file : file.url,
      imgName: file.name,
      imgSize: file.size,
      deletePhoto: handleDeletePhoto,
      modal: false
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_FormTextarea__WEBPACK_IMPORTED_MODULE_19__["default"], {
    labelText: "Votre message",
    isRequired: true,
    id: "message",
    name: "message",
    max: 1000,
    value: inputValues.message,
    inputPlaceholder: "Votre message",
    onInputChange: changeHandler,
    onInputBlur: errorHandler,
    error: errors.message
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_FormInput__WEBPACK_IMPORTED_MODULE_18__["default"], {
    type: "checkbox",
    id: "eventsOptin",
    name: "eventsOptin",
    isRequired: false,
    labelText: "Je souhaite \xEAtre alert\xE9 des \xE9v\xE8nements priv\xE9s ajout\xE9s dans cet Espace Souvenirs"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_layouts_ButtonsWrapper__WEBPACK_IMPORTED_MODULE_7__["default"], {
    position: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "button-loader-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
    type: "button",
    btnClass: "bg-transparent",
    onClickAction: handleCloseForm
  }, "Annuler"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
    type: "submit",
    disabled: sendMessage === null || sendMessage === void 0 ? void 0 : sendMessage.isLoading,
    btnClass: "bg-current",
    dataTestid: "submitMessageForm",
    onClickAction: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "button-text"
  }, "Envoyer un message"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "separator"
  }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_13__["default"], {
    name: "next",
    iconClass: "white-icon"
  })), (sendMessage === null || sendMessage === void 0 ? void 0 : sendMessage.isLoading) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Loader_Loader__WEBPACK_IMPORTED_MODULE_14__["default"], {
    position: "relative"
  }))))));
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

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Upload/useUpload.js":
/*!*******************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Upload/useUpload.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useUpload; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var compressorjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! compressorjs */ "./node_modules/compressorjs/dist/compressor.js");
/* harmony import */ var compressorjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(compressorjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");





/* import './upload.scss'; */

function useUpload(_ref) {
  var numberOfPhotos = _ref.numberOfPhotos,
      dispatchCbAction = _ref.dispatchCbAction,
      uploadedPhotos = _ref.uploadedPhotos;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(uploadedPhotos || []),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      compressedFiles = _useState2[0],
      setcompressedFiles = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      errorMessage = _useState4[0],
      setErrorMessage = _useState4[1];

  var handleCompressedUpload = function handleCompressedUpload(e) {
    var image = e.target.files[0];
    var fileNames = compressedFiles.map(function (file) {
      return file.name;
    });

    if (fileNames.length >= numberOfPhotos) {
      setErrorMessage("Vous ne pouvez pas ajouter plus de ".concat(numberOfPhotos, " photos"));
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
        },
        error: function error(e) {
          console.error(e);
        }
      });
    }
  };

  var handleDeletePhoto = function handleDeletePhoto(imageName) {
    var filteredImages = compressedFiles.filter(function (image) {
      return image.name !== imageName;
    });
    setcompressedFiles(filteredImages);
    setErrorMessage(null);
    dispatchCbAction && dispatchCbAction(filteredImages);
  };

  return {
    handleCompressedUpload: handleCompressedUpload,
    compressedFiles: compressedFiles,
    handleDeletePhoto: handleDeletePhoto,
    errorMessage: errorMessage
  };
}
useUpload.defaultProps = {
  numberOfPhotos: 1
};
useUpload.propTypes = {
  name: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired),
  numberOfPhotos: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number)
};

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

/***/ })

}]);
//# sourceMappingURL=MessageForm.bundle.js.map