"use strict";
(self["webpackChunkespace_souvenir"] = self["webpackChunkespace_souvenir"] || []).push([["docroot_themes_custom_souvenirs_src_js_components_Messages_MessagesList_js"],{

/***/ "./docroot/themes/custom/souvenirs/src/js/components/MailTo/MailTo.js":
/*!****************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/MailTo/MailTo.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MailTo; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Icons_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icons/Icon */ "./docroot/themes/custom/souvenirs/src/js/components/Icons/Icon.js");
/* harmony import */ var _Link_StyledLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Link/StyledLink */ "./docroot/themes/custom/souvenirs/src/js/components/Link/StyledLink.js");



function MailTo(_ref) {
  var email = _ref.email,
      subject = _ref.subject;
  var customSubject = subject ? "?subject=".concat(subject) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Link_StyledLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    as: "ahref",
    linkTo: "mailto:".concat(email).concat(customSubject),
    linkClass: "link bg-transparent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "envelope",
    iconClass: "current-icon envelope-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "separator"
  }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "link-text"
  }, "R\xE9pondre"));
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Messages/EmptyMessagesList.js":
/*!*****************************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Messages/EmptyMessagesList.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EmptyMessagesList; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function EmptyMessagesList() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "messages-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "messages-empty-text",
    "data-testid": "emptyMessageList"
  }, "Il n'y a pas encore de messages sur cet Espace Souvenirs"));
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Messages/MessageItem.js":
/*!***********************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Messages/MessageItem.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./docroot/themes/custom/souvenirs/src/js/constants/index.js");
/* harmony import */ var _layouts_ButtonsWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layouts/ButtonsWrapper */ "./docroot/themes/custom/souvenirs/src/js/layouts/ButtonsWrapper.js");
/* harmony import */ var _services_formatting__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/formatting */ "./docroot/themes/custom/souvenirs/src/js/services/formatting.js");
/* harmony import */ var _services_usePostQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/usePostQuery */ "./docroot/themes/custom/souvenirs/src/js/services/usePostQuery.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Button/Button */ "./docroot/themes/custom/souvenirs/src/js/components/Button/Button.js");
/* harmony import */ var _MailTo_MailTo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../MailTo/MailTo */ "./docroot/themes/custom/souvenirs/src/js/components/MailTo/MailTo.js");
/* harmony import */ var _Switch_Switch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Switch/Switch */ "./docroot/themes/custom/souvenirs/src/js/components/Switch/Switch.js");
/* harmony import */ var _NewMessageTag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./NewMessageTag */ "./docroot/themes/custom/souvenirs/src/js/components/Messages/NewMessageTag.js");












var MessageItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.memo(function MessageItem(_ref) {
  var _globalInfoState$defu, _globalInfoState$defu2;

  var message = _ref.message;
  var lastName = message.field_message_surname,
      firstName = message.field_message_name,
      dateTime = message.field_message_date_created,
      body = message.field_message_texte,
      email = message.field_message_email,
      picture = message.field_message_photo,
      published = message.field_message_status,
      banner = message.field_message_banner,
      isNew = message.isNew,
      id = message.message_id;
  var globalInfoState = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.globalInfo;
  });
  var administratorState = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.administrator;
  });
  var updateStatus = (0,_services_usePostQuery__WEBPACK_IMPORTED_MODULE_7__["default"])();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      showFullMessage = _useState2[0],
      setShowFullMessage = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(published),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      isPublished = _useState4[0],
      setIsPublished = _useState4[1];

  var messageBody = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  var messageWrapper = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  var formattedDate = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    if (dateTime) return (0,_services_formatting__WEBPACK_IMPORTED_MODULE_6__.dateHoursFormat)((0,_services_formatting__WEBPACK_IMPORTED_MODULE_6__.timeStampToDate)(dateTime));
  }, [dateTime]);

  var formattedPicture = function formattedPicture(picture) {
    if (typeof picture === "string") {
      return picture[0];
    }

    return picture[0].url;
  };

  var formatterBanner = function formatterBanner(banner) {
    return "".concat(window.location.origin, "/themes/custom/souvenirs/src/assets/images/bg-images/").concat(banner);
  };

  var showText = function showText() {
    setShowFullMessage(true);
  };

  var subject = "Merci pour votre message en hommage \xE0 ".concat((0,_services_formatting__WEBPACK_IMPORTED_MODULE_6__.capitalisedName)(globalInfoState === null || globalInfoState === void 0 ? void 0 : (_globalInfoState$defu = globalInfoState.defunt) === null || _globalInfoState$defu === void 0 ? void 0 : _globalInfoState$defu.firstName) || "", " ").concat(globalInfoState === null || globalInfoState === void 0 ? void 0 : (_globalInfoState$defu2 = globalInfoState.defunt) === null || _globalInfoState$defu2 === void 0 ? void 0 : _globalInfoState$defu2.lastName);

  var handleSwitch = function handleSwitch() {
    var statusObj = {
      field_value: !isPublished,
      field_machine_name: _constants__WEBPACK_IMPORTED_MODULE_4__.messageStatusMachineName,
      message_id: id
    };

    try {
      updateStatus.mutate({
        data: statusObj,
        apiUrl: _constants__WEBPACK_IMPORTED_MODULE_4__.postStatusMessageApiUrl
      }, {
        onSuccess: function onSuccess(_ref2) {
          var data = _ref2.data;
          setIsPublished(data === null || data === void 0 ? void 0 : data.field_value);
        }
      });
    } catch (_unused) {
      setIsPublished(published);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (messageBody.current && messageWrapper.current) {
      if (messageBody.current.clientHeight > messageWrapper.current.clientHeight) {
        setShowFullMessage(false);
      } else {
        setShowFullMessage(true);
      }
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("message-item", {
      "message-item-long": picture || banner
    })
  }, isNew && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_NewMessageTag__WEBPACK_IMPORTED_MODULE_11__["default"], null), picture && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "message-item-image-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("img", {
    alt: "",
    className: "message-item-image",
    loading: "lazy",
    src: formattedPicture(picture)
  })), banner && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "message-item-image-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("img", {
    alt: "",
    className: "message-item-image",
    loading: "lazy",
    src: formatterBanner(banner)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("message-author", {
      "mt-50": !picture,
      "mt-20": picture
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", {
    "data-testid": "writtenby-message"
  }, "Ecrit par ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    className: "info-firstname"
  }, firstName), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    className: "info-lastname"
  }, lastName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, formattedDate)), body && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    ref: messageWrapper,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("message-body", {
      open: showFullMessage
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", {
    ref: messageBody
  }, (0,_services_formatting__WEBPACK_IMPORTED_MODULE_6__.textWithBreaks)(body))), !showFullMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_layouts_ButtonsWrapper__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: "button",
    onClickAction: showText,
    btnClass: "bg-transparent"
  }, "Lire la suite", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    className: "sr-only"
  }, "du message envoy\xE9 par ", firstName, " ", lastName))), (administratorState === null || administratorState === void 0 ? void 0 : administratorState.isAdmin) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_layouts_ButtonsWrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    position: "space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Switch_Switch__WEBPACK_IMPORTED_MODULE_10__["default"], {
    isLoading: updateStatus.isLoading,
    handleSwitch: handleSwitch,
    messageId: dateTime,
    isChecked: isPublished
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_MailTo_MailTo__WEBPACK_IMPORTED_MODULE_9__["default"], {
    email: email,
    subject: subject
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (MessageItem);

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Messages/MessagesList.js":
/*!************************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Messages/MessagesList.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MessagesList; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./docroot/themes/custom/souvenirs/src/js/constants/index.js");
/* harmony import */ var _context_messageSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/messageSlice */ "./docroot/themes/custom/souvenirs/src/js/context/messageSlice.js");
/* harmony import */ var _services_scrollSmoothToElement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/scrollSmoothToElement */ "./docroot/themes/custom/souvenirs/src/js/services/scrollSmoothToElement.js");
/* harmony import */ var _services_useGetQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/useGetQuery */ "./docroot/themes/custom/souvenirs/src/js/services/useGetQuery.js");
/* harmony import */ var _Icons_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Icons/Icon */ "./docroot/themes/custom/souvenirs/src/js/components/Icons/Icon.js");
/* harmony import */ var _Loader_MessagesLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Loader/MessagesLoader */ "./docroot/themes/custom/souvenirs/src/js/components/Loader/MessagesLoader.js");
/* harmony import */ var _EmptyMessagesList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./EmptyMessagesList */ "./docroot/themes/custom/souvenirs/src/js/components/Messages/EmptyMessagesList.js");
/* harmony import */ var _MessageItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MessageItem */ "./docroot/themes/custom/souvenirs/src/js/components/Messages/MessageItem.js");
/* harmony import */ var _MessagesWithPagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./MessagesWithPagination */ "./docroot/themes/custom/souvenirs/src/js/components/Messages/MessagesWithPagination.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }














function MessagesList(_ref) {
  var page = _ref.page;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      hasError = _useState2[0],
      setHasError = _useState2[1];

  var administratorState = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.administrator;
  });

  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useParams)(),
      espaceId = _useParams.espaceId;

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  var messagesApi = page === _constants__WEBPACK_IMPORTED_MODULE_4__.accueil ? "".concat(_constants__WEBPACK_IMPORTED_MODULE_4__.getMessagesApi, "?entity_hash=").concat(espaceId, "&msg_number=2") : "".concat(_constants__WEBPACK_IMPORTED_MODULE_4__.getMessagesApi, "?entity_hash=").concat(espaceId);
  var messagesApiKey = page === _constants__WEBPACK_IMPORTED_MODULE_4__.accueil ? _constants__WEBPACK_IMPORTED_MODULE_4__.messagesAccueilKey : _constants__WEBPACK_IMPORTED_MODULE_4__.messagesListKey;

  var _useGetQuery = (0,_services_useGetQuery__WEBPACK_IMPORTED_MODULE_7__["default"])({
    key: messagesApiKey,
    API: messagesApi,
    staleTime: administratorState.isAdmin ? 500 : 50000,
    cacheTime: administratorState.isAdmin ? 0 : _constants__WEBPACK_IMPORTED_MODULE_4__.cachetimeForSearchQuery,
    refetchOnMount: administratorState.isAdmin
  }),
      messagesData = _useGetQuery.data,
      messagesError = _useGetQuery.error,
      messagesIsFetching = _useGetQuery.isFetching;

  var _useGetQuery2 = (0,_services_useGetQuery__WEBPACK_IMPORTED_MODULE_7__["default"])({
    key: _constants__WEBPACK_IMPORTED_MODULE_4__.numberMessagesKey,
    API: "".concat(_constants__WEBPACK_IMPORTED_MODULE_4__.getNumberMessagesUrl, "?entity_hash=").concat(espaceId),
    staleTime: 0,
    cacheTime: 0,
    enabled: administratorState.isAdmin
  }),
      numberMessagesData = _useGetQuery2.data;

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (administratorState.isAdmin) {
      dispatch((0,_context_messageSlice__WEBPACK_IMPORTED_MODULE_5__.messagesNumberReceived)({
        messagesNumber: +(numberMessagesData === null || numberMessagesData === void 0 ? void 0 : numberMessagesData.new_message_number)
      }));
    }

    if (messagesData !== null && messagesData !== void 0 && messagesData.error) {
      setHasError(true);
    }

    return function () {
      if (page !== _constants__WEBPACK_IMPORTED_MODULE_4__.accueil && administratorState.isAdmin) {
        dispatch((0,_context_messageSlice__WEBPACK_IMPORTED_MODULE_5__.messagesNumberReceived)({
          messagesNumber: 0
        }));
      }
    };
  }, [numberMessagesData]);
  if (messagesIsFetching) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Loader_MessagesLoader__WEBPACK_IMPORTED_MODULE_9__["default"], null);

  if (messagesError || hasError) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "messages-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", {
      className: "message-status"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
      name: "cross",
      iconClass: "message-status-icon error-icon"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, "Une erreur s'est produite. Nous vous invitons \xE0 r\xE9essayer plus tard.")));
  }

  if (messagesData && messagesData !== null && messagesData !== void 0 && messagesData.result) {
    var _messagesData$result;

    var arrayOfMessages = messagesData.result;
    var newMessagesArray = administratorState !== null && administratorState !== void 0 && administratorState.isAdmin ? arrayOfMessages.map(function (message) {
      return _objectSpread(_objectSpread({}, message), {}, {
        isNew: (messagesData === null || messagesData === void 0 ? void 0 : messagesData.msg_date_last_consult) * 1000 < +message.field_message_date_created * 1000
      });
    }) : arrayOfMessages;

    if (newMessagesArray && newMessagesArray.length > 8) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_MessagesWithPagination__WEBPACK_IMPORTED_MODULE_12__["default"], {
        messages: newMessagesArray
      });
    }

    if ((messagesData === null || messagesData === void 0 ? void 0 : (_messagesData$result = messagesData.result) === null || _messagesData$result === void 0 ? void 0 : _messagesData$result.length) === 0 || (newMessagesArray === null || newMessagesArray === void 0 ? void 0 : newMessagesArray.length) === 0) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_EmptyMessagesList__WEBPACK_IMPORTED_MODULE_10__["default"], null);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "messages-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("ul", {
      className: "messages-list",
      "data-testid": "messagesList"
    }, newMessagesArray.map(function (message) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_MessageItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        key: message === null || message === void 0 ? void 0 : message.message_id,
        message: message
      });
    })));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "messages-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Loader_MessagesLoader__WEBPACK_IMPORTED_MODULE_9__["default"], null));
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Messages/MessagesWithPagination.js":
/*!**********************************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Messages/MessagesWithPagination.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MessagesWithPagination; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./docroot/themes/custom/souvenirs/src/js/constants/index.js");
/* harmony import */ var _context_messageSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/messageSlice */ "./docroot/themes/custom/souvenirs/src/js/context/messageSlice.js");
/* harmony import */ var _layouts_ButtonsWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../layouts/ButtonsWrapper */ "./docroot/themes/custom/souvenirs/src/js/layouts/ButtonsWrapper.js");
/* harmony import */ var _services_formatting__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/formatting */ "./docroot/themes/custom/souvenirs/src/js/services/formatting.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Button/Button */ "./docroot/themes/custom/souvenirs/src/js/components/Button/Button.js");
/* harmony import */ var _Icons_Icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Icons/Icon */ "./docroot/themes/custom/souvenirs/src/js/components/Icons/Icon.js");
/* harmony import */ var _MessageItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MessageItem */ "./docroot/themes/custom/souvenirs/src/js/components/Messages/MessageItem.js");












function MessagesWithPagination(_ref) {
  var messages = _ref.messages;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  var queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQueryClient)();
  var messagesState = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.messages;
  });
  var firstMessagesArray = messagesState.messagesViewed.length ? messagesState.messagesViewed : (0,_services_formatting__WEBPACK_IMPORTED_MODULE_8__.slicedArray)(messages, 0, _constants__WEBPACK_IMPORTED_MODULE_5__.messagesPerPage);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(firstMessagesArray),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      messagesList = _useState2[0],
      setMessagesList = _useState2[1];

  var viewMoreMessages = function viewMoreMessages() {
    var begin = messagesList.length;
    var end = begin + _constants__WEBPACK_IMPORTED_MODULE_5__.messagesPerPage;
    var newMessagesArray = [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(messagesList), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_services_formatting__WEBPACK_IMPORTED_MODULE_8__.slicedArray)(messages, begin, end)));
    setMessagesList(newMessagesArray);
    dispatch((0,_context_messageSlice__WEBPACK_IMPORTED_MODULE_6__.messagesViewed)({
      messagesViewed: newMessagesArray
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "messages-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("ul", {
    className: "messages-list",
    "data-testid": "messagesWithPaginationList"
  }, messagesList.map(function (message) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_MessageItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: message === null || message === void 0 ? void 0 : message.message_id,
      message: message
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", {
    className: "messages-number-view"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("label", {
    htmlFor: "messages-progress"
  }, "Vous avez vu ", messagesList.length, " messages sur ", messages.length), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("progress", {
    id: "messages-progress",
    className: "messages-progress",
    max: messages.length,
    value: messagesList.length
  })), messages.length > messagesList.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_layouts_ButtonsWrapper__WEBPACK_IMPORTED_MODULE_7__["default"], {
    position: "center",
    btnWrapperClass: "mt-30"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    type: "button",
    btnClass: "bg-white",
    onClickAction: viewMoreMessages
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    className: "button-text"
  }, "voir plus de messages"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    className: "separator"
  }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    name: "next",
    iconClass: "current-icon"
  }))));
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Messages/NewMessageTag.js":
/*!*************************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Messages/NewMessageTag.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NewMessageTag; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function NewMessageTag() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "new-message-tag"
  }, "nouveau");
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Switch/Switch.js":
/*!****************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Switch/Switch.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Switch; }
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function Switch(_ref) {
  var isLoading = _ref.isLoading,
      handleSwitch = _ref.handleSwitch,
      messageId = _ref.messageId,
      isChecked = _ref.isChecked;

  var handleswitch = function handleswitch() {
    handleSwitch(messageId);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()("switch-wrapper", isLoading && "loading-status")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, isChecked ? "Publié" : "Dépublié"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", {
    className: "switch",
    "data-testid": "switchCheck"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
    disabled: isLoading,
    type: "checkbox",
    checked: isChecked,
    onChange: handleswitch
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "slider"
  })));
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
//# sourceMappingURL=docroot_themes_custom_souvenirs_src_js_components_Messages_MessagesList_js.bundle.js.map