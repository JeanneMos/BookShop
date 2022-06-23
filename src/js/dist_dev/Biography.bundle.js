"use strict";
(self["webpackChunkespace_souvenir"] = self["webpackChunkespace_souvenir"] || []).push([["Biography"],{

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Biography/BiographyText.js":
/*!**************************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Biography/BiographyText.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BiographyText; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _services_formatting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/formatting */ "./docroot/themes/custom/souvenirs/src/js/services/formatting.js");



function BiographyText() {
  var biographyState = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.biography;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "biography-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "biography-body",
    "data-testid": "biographyText"
  }, (0,_services_formatting__WEBPACK_IMPORTED_MODULE_2__.textWithBreaks)((0,_services_formatting__WEBPACK_IMPORTED_MODULE_2__.decoded)(biographyState === null || biographyState === void 0 ? void 0 : biographyState.biography))));
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/ContentPages/Biography.js":
/*!*************************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/ContentPages/Biography.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Biography; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./docroot/themes/custom/souvenirs/src/js/constants/index.js");
/* harmony import */ var _context_biographySlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/biographySlice */ "./docroot/themes/custom/souvenirs/src/js/context/biographySlice.js");
/* harmony import */ var _layouts_ButtonsWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../layouts/ButtonsWrapper */ "./docroot/themes/custom/souvenirs/src/js/layouts/ButtonsWrapper.js");
/* harmony import */ var _services_scrollSmoothToElement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/scrollSmoothToElement */ "./docroot/themes/custom/souvenirs/src/js/services/scrollSmoothToElement.js");
/* harmony import */ var _services_usePostQuery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/usePostQuery */ "./docroot/themes/custom/souvenirs/src/js/services/usePostQuery.js");
/* harmony import */ var _Biography_BiographyText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Biography/BiographyText */ "./docroot/themes/custom/souvenirs/src/js/components/Biography/BiographyText.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Button/Button */ "./docroot/themes/custom/souvenirs/src/js/components/Button/Button.js");
/* harmony import */ var _Icons_Icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Icons/Icon */ "./docroot/themes/custom/souvenirs/src/js/components/Icons/Icon.js");














var BiographyForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.lazy(function () {
  return __webpack_require__.e(/*! import() | BiographyForm */ "BiographyForm").then(__webpack_require__.bind(__webpack_require__, /*! ../Forms/BiographyForm */ "./docroot/themes/custom/souvenirs/src/js/components/Forms/BiographyForm.js"));
});
function Biography() {
  var administratorState = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.administrator;
  });
  var biographyState = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.biography;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  var params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useParams)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      isEditing = _useState2[0],
      setIsEditing = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      biographySuccess = _useState4[0],
      setBiographySuccess = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      networkError = _useState6[0],
      setNetworkError = _useState6[1];

  var deleteBiography = (0,_services_usePostQuery__WEBPACK_IMPORTED_MODULE_9__["default"])();
  var form = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  var messagesTitle = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  var networkErrorMessage = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);

  var handleOpenForm = function handleOpenForm() {
    setIsEditing(true);
  };

  var handleDeleteBiography = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var biography_obj;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              biography_obj = {
                field_value: {
                  field_bio_story: "",
                  field_bio_photo: null
                },
                field_machine_name: _constants__WEBPACK_IMPORTED_MODULE_5__.bioMachineName,
                entity_hash: params.espaceId
              };

              try {
                deleteBiography.mutate({
                  data: biography_obj,
                  apiUrl: _constants__WEBPACK_IMPORTED_MODULE_5__.postSaveFieldApiUrl
                }, {
                  onSuccess: function onSuccess(data) {
                    var _data$data;

                    var _JSON$parse = JSON.parse(data === null || data === void 0 ? void 0 : (_data$data = data.data) === null || _data$data === void 0 ? void 0 : _data$data.field_value),
                        field_bio_story = _JSON$parse.field_bio_story,
                        field_bio_custom = _JSON$parse.field_bio_custom;

                    dispatch((0,_context_biographySlice__WEBPACK_IMPORTED_MODULE_6__.biographyUpdated)({
                      biography: field_bio_story,
                      isBiographyEdited: field_bio_custom
                    }));
                  },
                  onError: function onError(err) {
                    setNetworkError("Une erreur s'est produite. Merci de réessayer plus tard");
                    (networkErrorMessage === null || networkErrorMessage === void 0 ? void 0 : networkErrorMessage.current) && (0,_services_scrollSmoothToElement__WEBPACK_IMPORTED_MODULE_8__["default"])(networkErrorMessage.current);
                  }
                });
              } catch (_unused) {
                setNetworkError("Une erreur s'est produite. Merci de réessayer plus tard");
                (networkErrorMessage === null || networkErrorMessage === void 0 ? void 0 : networkErrorMessage.current) && (0,_services_scrollSmoothToElement__WEBPACK_IMPORTED_MODULE_8__["default"])(networkErrorMessage.current); // Something went wrong
              }

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleDeleteBiography() {
      return _ref.apply(this, arguments);
    };
  }();

  var getBiographyAction = function getBiographyAction() {
    if (biographyState !== null && biographyState !== void 0 && biographyState.isBiographyEdited && biographyState !== null && biographyState !== void 0 && biographyState.biography && administratorState !== null && administratorState !== void 0 && administratorState.isAdmin) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_layouts_ButtonsWrapper__WEBPACK_IMPORTED_MODULE_7__["default"], {
        btnWrapperClass: "width-auto"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
        type: "button",
        btnClass: "bg-white",
        onClickAction: handleDeleteBiography
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
        name: "corbeille",
        iconClass: "current-icon"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
        className: "separator"
      }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
        className: "button-text"
      }, "Supprimer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
        type: "button",
        btnClass: "bg-current",
        onClickAction: handleOpenForm
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
        name: "pencil",
        iconClass: "white-icon"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
        className: "separator"
      }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
        className: "button-text"
      }, "Modifier la biographie")));
    }

    if (!(biographyState !== null && biographyState !== void 0 && biographyState.isBiographyEdited) && administratorState !== null && administratorState !== void 0 && administratorState.isAdmin) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
        type: "button",
        btnClass: "bg-current",
        onClickAction: handleOpenForm
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
        className: "button-text"
      }, "\xC9crire la biographie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
        className: "separator"
      }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
        name: "next",
        iconClass: "white-icon"
      }));
    }

    return null;
  };

  var handlCloseForm = function handlCloseForm(_ref2) {
    var messageSent = _ref2.messageSent;
    setBiographySuccess(messageSent);
    setIsEditing(false);
  };
  /*   useEffect(() => {
    if (form.current) {
      form.current.scrollIntoView();
    }
    if (messagesTitle.current) {
      messagesTitle.current.scrollIntoView();
    }
  }, [isEditing]); */


  if (isEditing) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(BiographyForm, {
      closeForm: handlCloseForm,
      reference: form
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, biographySuccess && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", {
    className: "message-status mb-40"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
    name: "check",
    iconClass: "message-status-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, "La biographie a bien \xE9t\xE9 mise \xE0 jour.")), networkError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", {
    ref: networkErrorMessage,
    className: "message-status mb-40"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
    name: "cross",
    iconClass: "message-status-icon error-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, networkError)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "heading-button-wrapper between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h2", {
    className: "content-heading-2",
    ref: messagesTitle
  }, "Biographie"), getBiographyAction()), (biographyState === null || biographyState === void 0 ? void 0 : biographyState.biography) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Biography_BiographyText__WEBPACK_IMPORTED_MODULE_10__["default"], null));
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
//# sourceMappingURL=Biography.bundle.js.map