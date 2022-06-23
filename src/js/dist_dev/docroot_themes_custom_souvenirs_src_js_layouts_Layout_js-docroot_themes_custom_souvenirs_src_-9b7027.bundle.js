"use strict";
(self["webpackChunkespace_souvenir"] = self["webpackChunkespace_souvenir"] || []).push([["docroot_themes_custom_souvenirs_src_js_layouts_Layout_js-docroot_themes_custom_souvenirs_src_-9b7027"],{

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Footer/Footer.js":
/*!****************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Footer/Footer.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");


/* import './footer.scss'; */

function Footer(_ref) {
  var data = _ref.data,
      isFetching = _ref.isFetching,
      error = _ref.error;

  var displayMenu = function displayMenu(items) {
    return items.map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        key: item.title
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
        to: item.url
      }, item.title));
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("footer", null, isFetching ? "Fetching" : null, isNaN(data) || error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "fetch-error-message"
  }, "Nous avons rencontr\xE9 une erreur, merci de r\xE9essayer plus tard"), data && data.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "footer-nav",
    "data-testid": "footerFetchedLinks"
  }, displayMenu(data)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/main-page/1",
    style: {
      marginLeft: "15px"
    }
  }, "Contenu du ES"));
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Header/Banner.js":
/*!****************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Header/Banner.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Banner; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");


function Banner() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/",
    className: "banner-link",
    "data-testid": "bannerLink"
  }, "Espace Souvenirs");
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Header/Header.js":
/*!****************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Header/Header.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./docroot/themes/custom/souvenirs/src/js/constants/index.js");
/* harmony import */ var _context_administratorSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/administratorSlice */ "./docroot/themes/custom/souvenirs/src/js/context/administratorSlice.js");
/* harmony import */ var _context_modalSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/modalSlice */ "./docroot/themes/custom/souvenirs/src/js/context/modalSlice.js");
/* harmony import */ var _services_getGestionnairePrincipalES__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/getGestionnairePrincipalES */ "./docroot/themes/custom/souvenirs/src/js/services/getGestionnairePrincipalES.js");
/* harmony import */ var _services_useGetQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/useGetQuery */ "./docroot/themes/custom/souvenirs/src/js/services/useGetQuery.js");
/* harmony import */ var _Loader_LoginLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Loader/LoginLoader */ "./docroot/themes/custom/souvenirs/src/js/components/Loader/LoginLoader.js");
/* harmony import */ var _Banner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Banner */ "./docroot/themes/custom/souvenirs/src/js/components/Header/Banner.js");










var LogoutMenu = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return Promise.all(/*! import() | LogoutMenu */[__webpack_require__.e("Icons"), __webpack_require__.e("LogoutMenu")]).then(__webpack_require__.bind(__webpack_require__, /*! ./LogoutMenu */ "./docroot/themes/custom/souvenirs/src/js/components/Header/LogoutMenu.js"));
});
var LoginMenu = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return Promise.all(/*! import() | LoginMenu */[__webpack_require__.e("Icons"), __webpack_require__.e("LoginMenu")]).then(__webpack_require__.bind(__webpack_require__, /*! ./LoginMenu */ "./docroot/themes/custom/souvenirs/src/js/components/Header/LoginMenu.js"));
});
function Header() {
  var administratorState = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.administrator;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useParams)(),
      espaceId = _useParams.espaceId;

  var handleLogIn = function handleLogIn() {
    dispatch((0,_context_modalSlice__WEBPACK_IMPORTED_MODULE_4__.modalOpened)({
      theme: "dark",
      hasCloseButton: true,
      modalType: "LoginModal"
    }));
  };

  var _useGetQuery = (0,_services_useGetQuery__WEBPACK_IMPORTED_MODULE_6__["default"])({
    key: "current-user",
    API: _constants__WEBPACK_IMPORTED_MODULE_2__.getCurrentUser,
    staleTime: 10000,
    cacheTime: Infinity
  }),
      data = _useGetQuery.data,
      isFetching = _useGetQuery.isFetching,
      error = _useGetQuery.error;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!data || !(data !== null && data !== void 0 && data.field_user_email)) {
      dispatch((0,_context_administratorSlice__WEBPACK_IMPORTED_MODULE_3__.currentUserSet)({
        user: null
      }));
      dispatch((0,_context_administratorSlice__WEBPACK_IMPORTED_MODULE_3__.isAdminSet)({
        isAdmin: false
      }));
      dispatch((0,_context_administratorSlice__WEBPACK_IMPORTED_MODULE_3__.userLoggedOut)());
    } else {
      dispatch((0,_context_administratorSlice__WEBPACK_IMPORTED_MODULE_3__.userLoggedIn)());
      var lastName = data.field_user_surname,
          firstName = data.field_user_name,
          phone = data.field_user_phone,
          email = data.field_user_email,
          civility = data.field_user_civility,
          gp_entities = data.user_gp_entity;
      var user = {
        lastName: lastName,
        firstName: firstName,
        phone: phone,
        email: email,
        civility: civility,
        gp_entities: gp_entities
      };
      var isCurrentUserAdmin = (0,_services_getGestionnairePrincipalES__WEBPACK_IMPORTED_MODULE_5__.getMainAdminESEntities)(gp_entities).includes(espaceId);

      if ((0,_services_getGestionnairePrincipalES__WEBPACK_IMPORTED_MODULE_5__.getMainAdminESEntities)(gp_entities).length) {
        dispatch((0,_context_administratorSlice__WEBPACK_IMPORTED_MODULE_3__.isAdminSet)({
          isAdmin: isCurrentUserAdmin
        }));
      }

      dispatch((0,_context_administratorSlice__WEBPACK_IMPORTED_MODULE_3__.currentUserSet)({
        user: user
      }));
    }
  }, [data]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Banner__WEBPACK_IMPORTED_MODULE_8__["default"], null), isFetching && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Loader_LoginLoader__WEBPACK_IMPORTED_MODULE_7__["default"], null), !isFetching && administratorState.isLogged && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "attendez...")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LogoutMenu, null)), !isFetching && !administratorState.isLogged && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "attendez...")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LoginMenu, {
    handleLogIn: handleLogIn
  })));
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Loader/LoginLoader.js":
/*!*********************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Loader/LoginLoader.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LoginLoader; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function LoginLoader() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "loader-login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    "aria-hidden": "true",
    width: "26",
    height: "30",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 27 32"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m5.495 17.895 2.161-.999a7.773 7.773 0 0 0 1.81-1.116l.21-.176.227.152a6.203 6.203 0 0 0 6.962 0l.218-.147.209.162a9.29 9.29 0 0 0 1.817 1.125l2.166 1c2.593 1.193 4.27 3.825 4.27 6.705v4.195h-.096c-.177 1.09-1.11 1.925-2.232 1.925H3.484c-1.247 0-2.261-1.032-2.261-2.301v-3.819c0-2.88 1.677-5.512 4.272-6.706m1.912-9.498c0-3.944 2.666-7.152 5.944-7.152 3.277 0 5.945 3.208 5.945 7.152s-2.668 7.154-5.945 7.154c-3.278 0-5.944-3.21-5.944-7.154M0 24.601v3.854C0 30.409 1.563 32 3.484 32h19.733c1.902 0 3.45-1.59 3.45-3.545V24.6c.032-3.369-1.912-6.448-4.952-7.845l-2.164-.999a5.23 5.23 0 0 1-1.227-.736l-.307-.25.266-.296c1.42-1.584 2.234-3.799 2.234-6.078C20.517 3.768 17.301 0 13.351 0 9.4.033 6.184 3.815 6.184 8.432c0 2.315.793 4.473 2.233 6.076l.28.31-.334.247c-.412.306-.82.527-1.2.72L4.988 16.79C1.958 18.15 0 21.216 0 24.601",
    fill: "#696969",
    fillRule: "evenodd"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    "aria-hidden": true,
    className: "user-login-connexion"
  }, "Se connecter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "sr-only"
  }, "Patientez"));
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/constants/index.js":
/*!*******************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/constants/index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APIJsonPlaceholder": function() { return /* binding */ APIJsonPlaceholder; },
/* harmony export */   "accueil": function() { return /* binding */ accueil; },
/* harmony export */   "bioMachineName": function() { return /* binding */ bioMachineName; },
/* harmony export */   "biographie": function() { return /* binding */ biographie; },
/* harmony export */   "cachetimeForSearchQuery": function() { return /* binding */ cachetimeForSearchQuery; },
/* harmony export */   "defuntPhotoMachineName": function() { return /* binding */ defuntPhotoMachineName; },
/* harmony export */   "footerMenu": function() { return /* binding */ footerMenu; },
/* harmony export */   "getCurrentUser": function() { return /* binding */ getCurrentUser; },
/* harmony export */   "getEspaceSouvenirsApi": function() { return /* binding */ getEspaceSouvenirsApi; },
/* harmony export */   "getMessagesApi": function() { return /* binding */ getMessagesApi; },
/* harmony export */   "getNumberMessagesUrl": function() { return /* binding */ getNumberMessagesUrl; },
/* harmony export */   "homageMachineName": function() { return /* binding */ homageMachineName; },
/* harmony export */   "lineBreak": function() { return /* binding */ lineBreak; },
/* harmony export */   "messageStatusMachineName": function() { return /* binding */ messageStatusMachineName; },
/* harmony export */   "messages": function() { return /* binding */ messages; },
/* harmony export */   "messagesAccueilKey": function() { return /* binding */ messagesAccueilKey; },
/* harmony export */   "messagesListKey": function() { return /* binding */ messagesListKey; },
/* harmony export */   "messagesPerPage": function() { return /* binding */ messagesPerPage; },
/* harmony export */   "mobileBreakpoint": function() { return /* binding */ mobileBreakpoint; },
/* harmony export */   "numberMessagesKey": function() { return /* binding */ numberMessagesKey; },
/* harmony export */   "postMessageSendUrl": function() { return /* binding */ postMessageSendUrl; },
/* harmony export */   "postResetPasswordUrl": function() { return /* binding */ postResetPasswordUrl; },
/* harmony export */   "postSaveFieldApiUrl": function() { return /* binding */ postSaveFieldApiUrl; },
/* harmony export */   "postStatusMessageApiUrl": function() { return /* binding */ postStatusMessageApiUrl; },
/* harmony export */   "postUserUpdateUrl": function() { return /* binding */ postUserUpdateUrl; },
/* harmony export */   "postUserUrl": function() { return /* binding */ postUserUrl; }
/* harmony export */ });
/* unused harmony export mainMenu */
// Magic numbers
var mobileBreakpoint = 649;
var cachetimeForSearchQuery = 60 * 1000 * 10; // 10minutes

var messagesPerPage = 8; // API configs

var APIJsonPlaceholder = "https://jsonplaceholder.typicode.com/posts";
var footerMenu = "/es/get-menu/footer";
var mainMenu = "/es/get-menu/main";
var getCurrentUser = "/es/get-current-user";
var getEspaceSouvenirsApi = "/es/get-espace-entity";
var getMessagesApi = "/es/get-messages";
var getNumberMessagesUrl = "/es/get-number-message";
var postSaveFieldApiUrl = "/es/entity-save-field";
var postStatusMessageApiUrl = "/es/message-save-field";
var postUserUrl = "/es/get-user";
var postUserUpdateUrl = "/es/user-update";
var postMessageSendUrl = "/es/message/create";
var postResetPasswordUrl = "/es/user/reset-password"; // Keys and Machine Names

var homageMachineName = "field_es_homage";
var bioMachineName = "field_es_bio";
var defuntPhotoMachineName = "field_es_profile_image";
var messageStatusMachineName = "status";
var messagesAccueilKey = "messagesAccueil";
var messagesListKey = "messagesList";
var numberMessagesKey = "numberMessages"; // Other constants

var accueil = "accueil";
var messages = "messages";
var biographie = "biographie";
var lineBreak = "<br />";

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/layouts/Layout.js":
/*!******************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/layouts/Layout.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Layout; }
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer/Footer */ "./docroot/themes/custom/souvenirs/src/js/components/Footer/Footer.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header/Header */ "./docroot/themes/custom/souvenirs/src/js/components/Header/Header.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./docroot/themes/custom/souvenirs/src/js/constants/index.js");
/* harmony import */ var _services_useGetQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/useGetQuery */ "./docroot/themes/custom/souvenirs/src/js/services/useGetQuery.js");







var Modal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return Promise.all(/*! import() | Modal */[__webpack_require__.e("vendors-node_modules_react-dom_server_browser_js-node_modules_babel_runtime_helpers_esm_objec-d199b2"), __webpack_require__.e("vendors-node_modules_html-entities_lib_index_js-node_modules_babel_runtime_helpers_esm_typeof_js"), __webpack_require__.e("vendors-node_modules_compressorjs_dist_compressor_js"), __webpack_require__.e("vendors-node_modules_focus-trap-react_dist_focus-trap-react_js-node_modules_react-share_es_Wh-b98577"), __webpack_require__.e("Icons"), __webpack_require__.e("docroot_themes_custom_souvenirs_src_js_components_Forms_LoginUserForm_js"), __webpack_require__.e("Modal")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/Modal/Modal */ "./docroot/themes/custom/souvenirs/src/js/components/Modal/Modal.js"));
});
function Layout(_ref) {
  var children = _ref.children;
  var modalState = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.modal;
  });

  var _useGetQuery = (0,_services_useGetQuery__WEBPACK_IMPORTED_MODULE_5__["default"])({
    key: "footer",
    API: _constants__WEBPACK_IMPORTED_MODULE_4__.footerMenu,
    staleTime: 300000,
    cacheTime: Infinity
  }),
      footerData = _useGetQuery.data,
      footerErr = _useGetQuery.error,
      footerFetching = _useGetQuery.isFetching;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", null, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: footerData,
    error: footerErr,
    isFetching: footerFetching
  }), modalState.isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Modal, {
    theme: modalState.theme
  }));
}
Layout.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node.isRequired)
};

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/services/getGestionnairePrincipalES.js":
/*!***************************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/services/getGestionnairePrincipalES.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMainAdminESEntities": function() { return /* binding */ getMainAdminESEntities; }
/* harmony export */ });
var getMainAdminESEntities = function getMainAdminESEntities(gp_entities) {
  return gp_entities || [];
};

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/services/scrollSmoothToElement.js":
/*!**********************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/services/scrollSmoothToElement.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ scrollSmoothToElement; }
/* harmony export */ });
function scrollSmoothToElement(element) {
  if (element) element.focus({
    preventScroll: true
  });
  window.scrollTo({
    top: (element === null || element === void 0 ? void 0 : element.offsetTop) || 0,
    behavior: "smooth"
  });
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/services/useGetQuery.js":
/*!************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/services/useGetQuery.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useGetQuery; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");





function useGetQuery(_ref) {
  var key = _ref.key,
      API = _ref.API,
      _ref$staleTime = _ref.staleTime,
      staleTime = _ref$staleTime === void 0 ? 0 : _ref$staleTime,
      _ref$cacheTime = _ref.cacheTime,
      cacheTime = _ref$cacheTime === void 0 ? 0 : _ref$cacheTime,
      _ref$refetchOnMount = _ref.refetchOnMount,
      refetchOnMount = _ref$refetchOnMount === void 0 ? false : _ref$refetchOnMount,
      _ref$refetchOnWindowF = _ref.refetchOnWindowFocus,
      refetchOnWindowFocus = _ref$refetchOnWindowF === void 0 ? false : _ref$refetchOnWindowF,
      _ref$enabled = _ref.enabled,
      enabled = _ref$enabled === void 0 ? true : _ref$enabled;
  var query = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)(key, /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var result, data, _error$response;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_2___default().get(API);

          case 3:
            result = _context.sent;
            _context.next = 6;
            return result === null || result === void 0 ? void 0 : result.data;

          case 6:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", {
              error: true,
              status: _context.t0 === null || _context.t0 === void 0 ? void 0 : (_error$response = _context.t0.response) === null || _error$response === void 0 ? void 0 : _error$response.status
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  })), {
    staleTime: staleTime,
    cacheTime: cacheTime,
    refetchOnMount: refetchOnMount,
    refetchOnWindowFocus: refetchOnWindowFocus,
    enabled: enabled
  });
  return query;
}

/***/ })

}]);
//# sourceMappingURL=docroot_themes_custom_souvenirs_src_js_layouts_Layout_js-docroot_themes_custom_souvenirs_src_-9b7027.bundle.js.map