"use strict";
(self["webpackChunkespace_souvenir"] = self["webpackChunkespace_souvenir"] || []).push([["Messages"],{

/***/ "./docroot/themes/custom/souvenirs/src/js/components/ContentPages/Messages.js":
/*!************************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/ContentPages/Messages.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Messages; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button/Button */ "./docroot/themes/custom/souvenirs/src/js/components/Button/Button.js");
/* harmony import */ var _Icons_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Icons/Icon */ "./docroot/themes/custom/souvenirs/src/js/components/Icons/Icon.js");
/* harmony import */ var _Messages_MessagesList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Messages/MessagesList */ "./docroot/themes/custom/souvenirs/src/js/components/Messages/MessagesList.js");
/* harmony import */ var _Messages_NewMessagesNumber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Messages/NewMessagesNumber */ "./docroot/themes/custom/souvenirs/src/js/components/Messages/NewMessagesNumber.js");







var MessageForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.lazy(function () {
  return Promise.all(/*! import() | MessageForm */[__webpack_require__.e("vendors-node_modules_react-dom_server_browser_js-node_modules_babel_runtime_helpers_esm_objec-d199b2"), __webpack_require__.e("vendors-node_modules_compressorjs_dist_compressor_js"), __webpack_require__.e("MessageForm")]).then(__webpack_require__.bind(__webpack_require__, /*! ../Forms/MessageForm */ "./docroot/themes/custom/souvenirs/src/js/components/Forms/MessageForm.js"));
});
function Messages() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isEditing = _useState2[0],
      setIsEditing = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      messageSuccess = _useState4[0],
      setMessageSuccess = _useState4[1];

  var form = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  var messagesTitle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  var messagesState = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.messages;
  });

  var handleOpenForm = function handleOpenForm() {
    setIsEditing(true);
  };

  var handlCloseForm = function handlCloseForm(_ref) {
    var messageSent = _ref.messageSent;
    setMessageSuccess(messageSent);
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(MessageForm, {
      closeForm: handlCloseForm,
      reference: form
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, messageSuccess && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: "message-status mb-40"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "check",
    iconClass: "message-status-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Votre message a bien \xE9t\xE9 ajout\xE9")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "heading-button-wrapper between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2", {
    className: "content-heading-2",
    ref: messagesTitle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Messages"), " ", messagesState !== null && messagesState !== void 0 && messagesState.messagesNumber && (messagesState === null || messagesState === void 0 ? void 0 : messagesState.messagesNumber) > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Messages_NewMessagesNumber__WEBPACK_IMPORTED_MODULE_6__["default"], {
    number: messagesState === null || messagesState === void 0 ? void 0 : messagesState.messagesNumber
  }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "button",
    btnClass: "bg-current",
    onClickAction: handleOpenForm
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "button-text"
  }, "Ecrire un message"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "separator"
  }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "next",
    iconClass: "white-icon"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Messages_MessagesList__WEBPACK_IMPORTED_MODULE_5__["default"], null));
}

/***/ })

}]);
//# sourceMappingURL=Messages.bundle.js.map