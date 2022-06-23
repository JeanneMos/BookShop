"use strict";
(self["webpackChunkespace_souvenir"] = self["webpackChunkespace_souvenir"] || []).push([["MainPage"],{

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

/***/ "./docroot/themes/custom/souvenirs/src/js/components/ContentPages/ContentPage.js":
/*!***************************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/ContentPages/ContentPage.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ContentPage; }
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./docroot/themes/custom/souvenirs/src/js/constants/index.js");
/* harmony import */ var _Loader_MessagesLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Loader/MessagesLoader */ "./docroot/themes/custom/souvenirs/src/js/components/Loader/MessagesLoader.js");
/* harmony import */ var _TabPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TabPanel */ "./docroot/themes/custom/souvenirs/src/js/components/ContentPages/TabPanel.js");





var Accueil = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return Promise.all(/*! import() | Accueil */[__webpack_require__.e("docroot_themes_custom_souvenirs_src_js_components_Messages_MessagesList_js"), __webpack_require__.e("Accueil")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Accueil */ "./docroot/themes/custom/souvenirs/src/js/components/ContentPages/Accueil.js"));
});
var Biography = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() | Biography */ "Biography").then(__webpack_require__.bind(__webpack_require__, /*! ./Biography */ "./docroot/themes/custom/souvenirs/src/js/components/ContentPages/Biography.js"));
});
var Messages = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return Promise.all(/*! import() | Messages */[__webpack_require__.e("docroot_themes_custom_souvenirs_src_js_components_Messages_MessagesList_js"), __webpack_require__.e("Messages")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Messages */ "./docroot/themes/custom/souvenirs/src/js/components/ContentPages/Messages.js"));
});
function ContentPage(_ref) {
  var name = _ref.name,
      handleActiveTab = _ref.handleActiveTab;

  if (name === _constants__WEBPACK_IMPORTED_MODULE_1__.accueil) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Loader_MessagesLoader__WEBPACK_IMPORTED_MODULE_2__["default"], null)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Accueil, {
      name: name,
      handleActiveTab: handleActiveTab
    }));
  }

  if (name === _constants__WEBPACK_IMPORTED_MODULE_1__.biographie) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Loader_MessagesLoader__WEBPACK_IMPORTED_MODULE_2__["default"], null)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Biography, {
      name: name
    }));
  }

  if (name === _constants__WEBPACK_IMPORTED_MODULE_1__.messages) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Loader_MessagesLoader__WEBPACK_IMPORTED_MODULE_2__["default"], null)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Messages, {
      name: name
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TabPanel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: name
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, name));
}
ContentPage.defaultProps = {
  contentBlock: null
};
ContentPage.propTypes = {
  name: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired),
  handleActiveTab: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)
};

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/ContentPages/TabPanel.js":
/*!************************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/ContentPages/TabPanel.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TabPanel; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/* import './tabpanel.scss'; */

function TabPanel(_ref) {
  var name = _ref.name,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    tabIndex: "0",
    role: "tabpanel",
    className: "tab-panel",
    id: "".concat(name.toLowerCase(), "-tab"),
    "aria-labelledby": name.toLowerCase()
  }, children);
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/ContentWrapper/ContentWrapper.js":
/*!********************************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/ContentWrapper/ContentWrapper.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ContentWrapper; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./docroot/themes/custom/souvenirs/src/js/constants/index.js");
/* harmony import */ var _services_useViewport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/useViewport */ "./docroot/themes/custom/souvenirs/src/js/services/useViewport.js");
/* harmony import */ var _ContentPages_ContentPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ContentPages/ContentPage */ "./docroot/themes/custom/souvenirs/src/js/components/ContentPages/ContentPage.js");
/* harmony import */ var _Loader_FullPageLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Loader/FullPageLoader */ "./docroot/themes/custom/souvenirs/src/js/components/Loader/FullPageLoader.js");
/* harmony import */ var _Tabs_DesktopTabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Tabs/DesktopTabs */ "./docroot/themes/custom/souvenirs/src/js/components/Tabs/DesktopTabs.js");
/* harmony import */ var _Tabs_MobileTabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Tabs/MobileTabs */ "./docroot/themes/custom/souvenirs/src/js/components/Tabs/MobileTabs.js");
/* harmony import */ var _Tabs_TabItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Tabs/TabItem */ "./docroot/themes/custom/souvenirs/src/js/components/Tabs/TabItem.js");










/* import './contentWrapper.scss'; */

var AdministratorsEdit = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.lazy(function () {
  return __webpack_require__.e(/*! import() | AdministratorsEdit */ "AdministratorsEdit").then(__webpack_require__.bind(__webpack_require__, /*! ../ContentPages/AdministratorsEdit */ "./docroot/themes/custom/souvenirs/src/js/components/ContentPages/AdministratorsEdit.js"));
});
function ContentWrapper() {
  var biographyState = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.biography;
  });
  var administratorState = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.administrator;
  });
  var tabs = [{
    name: "Accueil",
    id: _constants__WEBPACK_IMPORTED_MODULE_3__.accueil,
    hasContent: true
  }, {
    name: "Messages",
    id: _constants__WEBPACK_IMPORTED_MODULE_3__.messages,
    hasContent: true
  }, {
    name: "Biographie",
    id: _constants__WEBPACK_IMPORTED_MODULE_3__.biographie,
    hasContent: administratorState !== null && administratorState !== void 0 && administratorState.isAdmin ? true : biographyState === null || biographyState === void 0 ? void 0 : biographyState.isBiographyEdited
  }
  /*   { name: 'Vidéo Cérémonie', id: 'video_ceremonie', hasContent: true }, */
  ];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_constants__WEBPACK_IMPORTED_MODULE_3__.accueil),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      hasUserClicked = _useState4[0],
      setUserClicked = _useState4[1];

  var contentBlock = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  var _useViewport = (0,_services_useViewport__WEBPACK_IMPORTED_MODULE_4__["default"])(),
      width = _useViewport.width;

  var getTabsWithContent = function getTabsWithContent() {
    return tabs.filter(function (tab) {
      return tab.hasContent;
    });
  };

  var handleActiveTab = function handleActiveTab(tabName) {
    setActiveTab(tabName);
    setUserClicked(true);
  };

  var getTabs = function getTabs() {
    var arrayOfTabs = getTabsWithContent().map(function (tab) {
      var tabInfos = {
        id: tab.id,
        activeLink: activeTab,
        handleActiveTab: handleActiveTab
      };
      var activeMobileTab = width < _constants__WEBPACK_IMPORTED_MODULE_3__.mobileBreakpoint ? activeTab : null;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Tabs_TabItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        tabInfos: tabInfos,
        key: "tab_".concat(tab.id),
        activeMobileTab: activeMobileTab
      });
    });
    return arrayOfTabs;
  };

  var handleDisplayedView = function handleDisplayedView() {
    if ((administratorState !== null && administratorState !== void 0 && administratorState.isEditingAdministator || administratorState !== null && administratorState !== void 0 && administratorState.isEditingPersonalInfo) && administratorState.isAdmin) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
        fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Loader_FullPageLoader__WEBPACK_IMPORTED_MODULE_6__["default"], null)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(AdministratorsEdit, null));
    }

    if (!(administratorState !== null && administratorState !== void 0 && administratorState.isEditingAdministator) && !(administratorState !== null && administratorState !== void 0 && administratorState.isEditingPersonalInfo)) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ContentPages_ContentPage__WEBPACK_IMPORTED_MODULE_5__["default"], {
        name: activeTab,
        handleActiveTab: handleActiveTab,
        contentBlock: hasUserClicked ? contentBlock : null
      });
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, width <= _constants__WEBPACK_IMPORTED_MODULE_3__.mobileBreakpoint ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Tabs_MobileTabs__WEBPACK_IMPORTED_MODULE_8__["default"], {
    activeTab: activeTab,
    hasUserClicked: hasUserClicked
  }, getTabs()) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Tabs_DesktopTabs__WEBPACK_IMPORTED_MODULE_7__["default"], {
    activeTab: activeTab
  }, getTabs()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "layout-content"
  }, handleDisplayedView()));
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/DefuntInfo/DefuntImg.js":
/*!***********************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/DefuntInfo/DefuntImg.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DefuntImg; }
/* harmony export */ });
/* harmony import */ var Images_profile_grey_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Images/profile-grey.jpg */ "./docroot/themes/custom/souvenirs/src/assets/images/profile-grey.jpg");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button/Button */ "./docroot/themes/custom/souvenirs/src/js/components/Button/Button.js");
/* harmony import */ var _Icons_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Icons/Icon */ "./docroot/themes/custom/souvenirs/src/js/components/Icons/Icon.js");





function DefuntImg(_ref) {
  var _globalInfoState$defu;

  var handleModifyPicture = _ref.handleModifyPicture;
  var globalInfoState = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.globalInfo;
  });
  var administratorState = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.administrator;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "defunt-img"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "defunt-img-background"
  }, (_globalInfoState$defu = globalInfoState.defuntImage) !== null && _globalInfoState$defu !== void 0 && _globalInfoState$defu.url ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    "data-testid": "defunt-image",
    alt: "",
    src: globalInfoState.defuntImage.url,
    width: "120",
    height: "120"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    "data-testid": "placeholder-defunt-image",
    alt: "",
    src: Images_profile_grey_jpg__WEBPACK_IMPORTED_MODULE_0__["default"],
    width: "120",
    height: "120"
  }), administratorState.isAdmin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    dataTestid: "defuntImageEdit",
    btnClass: "edit-picture-button",
    type: "button",
    onClickAction: handleModifyPicture
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "edit-picture",
    iconClass: "edit-picture-icon"
  }))));
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/DefuntInfo/DefuntInfos.js":
/*!*************************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/DefuntInfo/DefuntInfos.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DefuntInfos; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _services_formatting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/formatting */ "./docroot/themes/custom/souvenirs/src/js/services/formatting.js");



function DefuntInfos() {
  var globalInfoState = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.globalInfo;
  });
  if (!globalInfoState.defunt) return null;
  var _globalInfoState$defu = globalInfoState.defunt,
      civility = _globalInfoState$defu.civility,
      lastName = _globalInfoState$defu.lastName,
      firstName = _globalInfoState$defu.firstName,
      birthDate = _globalInfoState$defu.birthDate,
      deathDate = _globalInfoState$defu.deathDate,
      birthName = _globalInfoState$defu.birthName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "defunt-infos-wrapper",
    "data-testid": "defuntInfosWrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "defunt-name",
    "data-testid": "defuntName"
  }, civility, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "info-firstname"
  }, firstName), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "info-lastname"
  }, lastName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "defunt-infos"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, birthName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "N\xE9(e)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "defunt-birth-name"
  }, "\xA0", birthName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "defunt-infos-separator"
  }, "|")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "sr-only"
  }, "Date de naissance"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "defunt-date",
    "data-testid": "defuntBirthdate"
  }, (0,_services_formatting__WEBPACK_IMPORTED_MODULE_2__.getFullYear)(birthDate)), " - ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "sr-only"
  }, "Date de mort"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "defunt-date",
    "data-testid": "defuntDeathdate"
  }, (0,_services_formatting__WEBPACK_IMPORTED_MODULE_2__.getFullYear)(deathDate)))));
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/DefuntInfo/DefuntWithAdministrator.js":
/*!*************************************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/DefuntInfo/DefuntWithAdministrator.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DefuntWithAdministrator; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _DefuntInfos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefuntInfos */ "./docroot/themes/custom/souvenirs/src/js/components/DefuntInfo/DefuntInfos.js");
/* harmony import */ var _SectionAdministators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SectionAdministators */ "./docroot/themes/custom/souvenirs/src/js/components/DefuntInfo/SectionAdministators.js");



function DefuntWithAdministrator() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "defunt-administrator-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DefuntInfos__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SectionAdministators__WEBPACK_IMPORTED_MODULE_2__["default"], null));
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/DefuntInfo/HeroBanner.js":
/*!************************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/DefuntInfo/HeroBanner.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HeroBanner; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");


var pathToHeroBanners = "".concat(window.location.origin, "/themes/custom/souvenirs/src/assets/images/bg-images/");
var pathToHeroBannersMobile = "".concat(window.location.origin, "/themes/custom/souvenirs/src/assets/images/bg-images/mobile/");
function HeroBanner(_ref) {
  var source = _ref.source,
      handleModifyHero = _ref.handleModifyHero;

  if (!window.location.origin) {
    window.location.origin = window.location.protocol + "//" + window.location.hostname;
  }

  var globalInfoState = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.globalInfo;
  });
  var getHeroBannerImage = globalInfoState.heroBannerImage.name ? "".concat(pathToHeroBanners).concat(globalInfoState.heroBannerImage.name) : source;
  var getHeroBannerImageMobile = globalInfoState.heroBannerImage.name ? "".concat(pathToHeroBannersMobile).concat(globalInfoState.heroBannerImage.name) : source;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "hero-banner-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("picture", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("source", {
    media: "(min-width: 650px)",
    srcSet: getHeroBannerImage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("source", {
    media: "(max-width: 649px)",
    srcSet: getHeroBannerImageMobile
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: getHeroBannerImage,
    alt: ""
  })));
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/DefuntInfo/InfoWrapper.js":
/*!*************************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/DefuntInfo/InfoWrapper.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ InfoWrapper; }
/* harmony export */ });
/* harmony import */ var Images_bg_images_hero_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Images/bg-images/hero.jpg */ "./docroot/themes/custom/souvenirs/src/assets/images/bg-images/hero.jpg");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./docroot/themes/custom/souvenirs/src/js/constants/index.js");
/* harmony import */ var _context_modalSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/modalSlice */ "./docroot/themes/custom/souvenirs/src/js/context/modalSlice.js");
/* harmony import */ var _services_useViewport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/useViewport */ "./docroot/themes/custom/souvenirs/src/js/services/useViewport.js");
/* harmony import */ var _DefuntImg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DefuntImg */ "./docroot/themes/custom/souvenirs/src/js/components/DefuntInfo/DefuntImg.js");
/* harmony import */ var _DefuntWithAdministrator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DefuntWithAdministrator */ "./docroot/themes/custom/souvenirs/src/js/components/DefuntInfo/DefuntWithAdministrator.js");
/* harmony import */ var _HeroBanner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./HeroBanner */ "./docroot/themes/custom/souvenirs/src/js/components/DefuntInfo/HeroBanner.js");
/* harmony import */ var _ShareButtons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ShareButtons */ "./docroot/themes/custom/souvenirs/src/js/components/DefuntInfo/ShareButtons.js");










/* import './infos.scss'; */

function InfoWrapper() {
  var _useViewport = (0,_services_useViewport__WEBPACK_IMPORTED_MODULE_5__["default"])(),
      width = _useViewport.width;

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();

  var handleModifyHero = function handleModifyHero() {
    dispatch((0,_context_modalSlice__WEBPACK_IMPORTED_MODULE_4__.modalOpened)({
      theme: "dark",
      hasCloseButton: true,
      modalType: "HeroBannerModal"
    }));
  };

  var handleModifyPicture = function handleModifyPicture() {
    dispatch((0,_context_modalSlice__WEBPACK_IMPORTED_MODULE_4__.modalOpened)({
      theme: "dark",
      hasCloseButton: true,
      modalType: "DefuntPictureModal"
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_HeroBanner__WEBPACK_IMPORTED_MODULE_8__["default"], {
    source: Images_bg_images_hero_jpg__WEBPACK_IMPORTED_MODULE_0__["default"],
    handleModifyHero: handleModifyHero
  }), width < _constants__WEBPACK_IMPORTED_MODULE_3__.mobileBreakpoint ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_DefuntImg__WEBPACK_IMPORTED_MODULE_6__["default"], {
    handleModifyPicture: handleModifyPicture
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_DefuntWithAdministrator__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ShareButtons__WEBPACK_IMPORTED_MODULE_9__["default"], null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_DefuntImg__WEBPACK_IMPORTED_MODULE_6__["default"], {
    handleModifyPicture: handleModifyPicture
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ShareButtons__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_DefuntWithAdministrator__WEBPACK_IMPORTED_MODULE_7__["default"], null)));
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/DefuntInfo/SectionAdministators.js":
/*!**********************************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/DefuntInfo/SectionAdministators.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SectionAdministators; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _context_administratorSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/administratorSlice */ "./docroot/themes/custom/souvenirs/src/js/context/administratorSlice.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button/Button */ "./docroot/themes/custom/souvenirs/src/js/components/Button/Button.js");
/* harmony import */ var _Icons_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Icons/Icon */ "./docroot/themes/custom/souvenirs/src/js/components/Icons/Icon.js");






function SectionAdministators() {
  var globalInfoState = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.globalInfo;
  });
  var administratorState = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.administrator;
  });

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      civility = _useState2[0],
      setCivility = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      firstName = _useState4[0],
      setFirstName = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      lastName = _useState6[0],
      setLastName = _useState6[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var _globalInfoState$mana, _globalInfoState$mana2, _globalInfoState$mana3;

    setCivility(globalInfoState === null || globalInfoState === void 0 ? void 0 : (_globalInfoState$mana = globalInfoState.manager) === null || _globalInfoState$mana === void 0 ? void 0 : _globalInfoState$mana.field_user_civility);
    setFirstName(globalInfoState === null || globalInfoState === void 0 ? void 0 : (_globalInfoState$mana2 = globalInfoState.manager) === null || _globalInfoState$mana2 === void 0 ? void 0 : _globalInfoState$mana2.field_user_name);
    setLastName(globalInfoState === null || globalInfoState === void 0 ? void 0 : (_globalInfoState$mana3 = globalInfoState.manager) === null || _globalInfoState$mana3 === void 0 ? void 0 : _globalInfoState$mana3.field_user_surname);
  }, [globalInfoState]);

  var handleModifyAdministrators = function handleModifyAdministrators() {
    dispatch((0,_context_administratorSlice__WEBPACK_IMPORTED_MODULE_3__.administratorEdited)({
      isEditingAdministator: true
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: "defunt-adiministator"
  }, "Espace g\xE9r\xE9 par"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: "defunt-adiministator-name"
  }, civility, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "info-firstname"
  }, firstName), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "info-lastname"
  }, lastName)), administratorState.isAdmin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    btnClass: "edit-administators-button",
    type: "button",
    dataTestid: "administratorsEdit",
    onClickAction: handleModifyAdministrators
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Liste des gestionnaires"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "edit-picture",
    iconClass: "edit-administators-icon"
  })));
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/DefuntInfo/ShareButtons.js":
/*!**************************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/DefuntInfo/ShareButtons.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ShareButtons; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _context_modalSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/modalSlice */ "./docroot/themes/custom/souvenirs/src/js/context/modalSlice.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button/Button */ "./docroot/themes/custom/souvenirs/src/js/components/Button/Button.js");
/* harmony import */ var _Icons_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Icons/Icon */ "./docroot/themes/custom/souvenirs/src/js/components/Icons/Icon.js");





function ShareButtons() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var handleModalOpen = function handleModalOpen() {
    dispatch((0,_context_modalSlice__WEBPACK_IMPORTED_MODULE_2__.modalOpened)({
      theme: "dark",
      hasCloseButton: true,
      modalType: "ShareModal"
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "share-buttons-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "button",
    btnClass: "bg-current share-button",
    onClickAction: handleModalOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "share",
    iconClass: "white-icon book-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "separator"
  }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "button-text"
  }, "Partager l'espace")));
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Link/StyledLink.js":
/*!******************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Link/StyledLink.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ StyledLink; }
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");



/* import './link.scss'; */

function StyledLink(_ref) {
  var children = _ref.children,
      linkClass = _ref.linkClass,
      _ref$as = _ref.as,
      as = _ref$as === void 0 ? "link" : _ref$as,
      linkTo = _ref.linkTo,
      target = _ref.target,
      dataTestid = _ref.dataTestid;

  if (as === "ahref") {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: linkTo,
      target: target,
      "data-testid": dataTestid,
      className: linkClass
    }, children);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: linkTo,
    className: linkClass
  }, children);
}
StyledLink.defaultProps = {
  linkClass: null
};
StyledLink.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired),
  linkClass: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Loader/MessagesLoader.js":
/*!************************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Loader/MessagesLoader.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MessagesLoader; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loader */ "./docroot/themes/custom/souvenirs/src/js/components/Loader/Loader.js");


function MessagesLoader() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "messages-loader-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "loader-messages"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Loader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    position: "center"
  })));
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Messages/NewMessagesNumber.js":
/*!*****************************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Messages/NewMessagesNumber.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NewMessagesNumber; }
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function NewMessagesNumber(_ref) {
  var number = _ref.number,
      numberClass = _ref.numberClass;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()("new-messages-number", numberClass)
  }, number, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "sr-only"
  }, "nouveaux messages"));
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Tabs/DesktopTabs.js":
/*!*******************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Tabs/DesktopTabs.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DesktopTabs; }
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


/* import './navigation.scss'; */

function DesktopTabs(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    role: "tablist",
    className: "tab-list",
    "aria-label": "Navigation principale"
  }, children);
}
DesktopTabs.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired)
};

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Tabs/MobileTabs.js":
/*!******************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Tabs/MobileTabs.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MobileTabs; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Icons_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icons/Icon */ "./docroot/themes/custom/souvenirs/src/js/components/Icons/Icon.js");





function MobileTabs(_ref) {
  var activeTab = _ref.activeTab,
      children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isMenuOpen = _useState2[0],
      setIsMenuOpen = _useState2[1];

  var handleMenuOpen = function handleMenuOpen() {
    setIsMenuOpen(!isMenuOpen);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    setIsMenuOpen(false);
  }, [activeTab]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "tab-list-mobile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("button", {
    type: "button",
    "aria-expanded": isMenuOpen,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("tab-list-mobile__toggle", {
      active: isMenuOpen
    }),
    onClick: handleMenuOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    className: "tab-list-mobile__toggle-text"
  }, activeTab), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "chevron",
    iconClass: classnames__WEBPACK_IMPORTED_MODULE_1___default()("tab-list-mobile__toggle-icon", {
      open: isMenuOpen
    })
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    role: "tablist",
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("tab-list-mobile__list", {
      open: isMenuOpen
    }),
    "aria-label": "Navigation principale"
  }, children));
}
MobileTabs.propTypes = {
  activeTab: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node.isRequired)
};

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Tabs/TabItem.js":
/*!***************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Tabs/TabItem.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TabItem; }
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./docroot/themes/custom/souvenirs/src/js/constants/index.js");
/* harmony import */ var _context_administratorSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/administratorSlice */ "./docroot/themes/custom/souvenirs/src/js/context/administratorSlice.js");
/* harmony import */ var _Messages_NewMessagesNumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Messages/NewMessagesNumber */ "./docroot/themes/custom/souvenirs/src/js/components/Messages/NewMessagesNumber.js");







function TabItem(_ref) {
  var tabInfos = _ref.tabInfos,
      activeMobileTab = _ref.activeMobileTab;
  var messagesState = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.messages;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();

  var handleTabsClick = function handleTabsClick() {
    tabInfos.handleActiveTab(tabInfos.id);
    dispatch((0,_context_administratorSlice__WEBPACK_IMPORTED_MODULE_4__.administratorEdited)({
      isEditingAdministator: false
    }));
  };

  var getMessageNumber = function getMessageNumber() {
    if (tabInfos.id === _constants__WEBPACK_IMPORTED_MODULE_3__.messages && messagesState.messagesNumber && messagesState.messagesNumber > 0) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Messages_NewMessagesNumber__WEBPACK_IMPORTED_MODULE_5__["default"], {
        number: messagesState.messagesNumber,
        numberClass: "small"
      });
    }

    return null;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    type: "button",
    role: "tab",
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()("tab-item", {
      active: tabInfos.activeLink === tabInfos.id
    }),
    hidden: activeMobileTab === tabInfos.id,
    "aria-selected": tabInfos.activeLink === tabInfos.id,
    "aria-controls": "".concat(tabInfos.id, "-tab"),
    "data-testid": tabInfos.id,
    id: tabInfos.id,
    onClick: handleTabsClick
  }, tabInfos.id, "\xA0", getMessageNumber());
}
TabItem.defaultProps = {
  activeMobileTab: null
};
TabItem.propTypes = {
  tabInfos: prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({
    id: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string.isRequired),
    activeLink: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string.isRequired),
    handleActiveTab: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func.isRequired)
  }).isRequired,
  activeMobileTab: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)
};

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/pages/MainPage.js":
/*!******************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/pages/MainPage.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MainPage; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _components_ContentWrapper_ContentWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ContentWrapper/ContentWrapper */ "./docroot/themes/custom/souvenirs/src/js/components/ContentWrapper/ContentWrapper.js");
/* harmony import */ var _components_DefuntInfo_InfoWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/DefuntInfo/InfoWrapper */ "./docroot/themes/custom/souvenirs/src/js/components/DefuntInfo/InfoWrapper.js");
/* harmony import */ var _components_Loader_FullPageLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Loader/FullPageLoader */ "./docroot/themes/custom/souvenirs/src/js/components/Loader/FullPageLoader.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants */ "./docroot/themes/custom/souvenirs/src/js/constants/index.js");
/* harmony import */ var _context_biographySlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../context/biographySlice */ "./docroot/themes/custom/souvenirs/src/js/context/biographySlice.js");
/* harmony import */ var _context_globalInfoSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../context/globalInfoSlice */ "./docroot/themes/custom/souvenirs/src/js/context/globalInfoSlice.js");
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../layouts/Layout */ "./docroot/themes/custom/souvenirs/src/js/layouts/Layout.js");
/* harmony import */ var _services_formatting__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/formatting */ "./docroot/themes/custom/souvenirs/src/js/services/formatting.js");
/* harmony import */ var _services_scrollSmoothToElement__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/scrollSmoothToElement */ "./docroot/themes/custom/souvenirs/src/js/services/scrollSmoothToElement.js");
/* harmony import */ var _services_useGetQuery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/useGetQuery */ "./docroot/themes/custom/souvenirs/src/js/services/useGetQuery.js");
/* harmony import */ var _NoMatch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./NoMatch */ "./docroot/themes/custom/souvenirs/src/js/pages/NoMatch.js");

















function MainPage() {
  var administratorState = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.administrator;
  });

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      hasError = _useState2[0],
      setHasError = _useState2[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  var params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_16__.useParams)();

  var _useGetQuery = (0,_services_useGetQuery__WEBPACK_IMPORTED_MODULE_14__["default"])({
    key: "espace-souvenir-".concat(params.espaceId),
    API: "".concat(_constants__WEBPACK_IMPORTED_MODULE_8__.getEspaceSouvenirsApi, "/").concat(params.espaceId),
    staleTime: 10000,
    cacheTime: Infinity
  }),
      data = _useGetQuery.data,
      error = _useGetQuery.error,
      isFetching = _useGetQuery.isFetching;

  var getDefuntImageName = function getDefuntImageName(retrievedData) {
    var defuntImageUrl = retrievedData ? decodeURIComponent(retrievedData === null || retrievedData === void 0 ? void 0 : retrievedData.url).split("/") : null;
    var defuntImageName = defuntImageUrl ? defuntImageUrl[defuntImageUrl.length - 1] : null;
    return defuntImageName;
  };

  var getDefuntImageUrl = function getDefuntImageUrl(retrievedData) {
    var imageUrl = retrievedData ? retrievedData.url : null;
    return imageUrl;
  };

  var setDefuntImage = function setDefuntImage(retrievedData) {
    return retrievedData ? {
      name: getDefuntImageName(retrievedData),
      url: getDefuntImageUrl(retrievedData)
    } : null;
  };

  var setStructuredData = function setStructuredData(sentData) {
    var _sentData$field_es_ma, _sentData$field_es_av, _sentData$field_es_av2, _sentData$field_es_av3, _sentData$field_es_av4, _sentData$field_es_av5, _sentData$field_es_av6, _sentData$field_es_av7, _sentData$field_es_av8, _sentData$field_es_av9, _sentData$field_es_av10, _sentData$field_es_av11, _sentData$field_es_av12, _sentData$field_es_av13, _sentData$field_es_av14, _sentData$field_es_av15, _sentData$field_es_av16, _sentData$field_es_av17, _sentData$field_es_av18, _sentData$field_es_av19, _sentData$field_es_av20, _sentData$field_es_av21, _sentData$field_es_su, _sentData$field_nom_d, _sentData$field_es_ma2, _sentData$field_es_ma3, _sentData$field_es_ma4;

    var fieldMarque = (sentData === null || sentData === void 0 ? void 0 : (_sentData$field_es_ma = sentData.field_es_marque) === null || _sentData$field_es_ma === void 0 ? void 0 : _sentData$field_es_ma.field_marque_prestation) || "";
    var obituary = Array.isArray(sentData === null || sentData === void 0 ? void 0 : sentData.field_es_avis) && (sentData === null || sentData === void 0 ? void 0 : sentData.field_es_avis.length) > 0 || (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(sentData === null || sentData === void 0 ? void 0 : sentData.field_es_avis) === "object" && Object.keys(sentData === null || sentData === void 0 ? void 0 : sentData.field_es_avis).length > 0 ? {
      civility: sentData === null || sentData === void 0 ? void 0 : (_sentData$field_es_av = sentData.field_es_avis) === null || _sentData$field_es_av === void 0 ? void 0 : (_sentData$field_es_av2 = _sentData$field_es_av.defunt_fk) === null || _sentData$field_es_av2 === void 0 ? void 0 : (_sentData$field_es_av3 = _sentData$field_es_av2.civilite_fk) === null || _sentData$field_es_av3 === void 0 ? void 0 : _sentData$field_es_av3.libelle,
      firstName: sentData === null || sentData === void 0 ? void 0 : (_sentData$field_es_av4 = sentData.field_es_avis) === null || _sentData$field_es_av4 === void 0 ? void 0 : (_sentData$field_es_av5 = _sentData$field_es_av4.defunt_fk) === null || _sentData$field_es_av5 === void 0 ? void 0 : _sentData$field_es_av5.prenom,
      lastName: sentData === null || sentData === void 0 ? void 0 : (_sentData$field_es_av6 = sentData.field_es_avis) === null || _sentData$field_es_av6 === void 0 ? void 0 : (_sentData$field_es_av7 = _sentData$field_es_av6.defunt_fk) === null || _sentData$field_es_av7 === void 0 ? void 0 : _sentData$field_es_av7.nom,
      maidenName: sentData === null || sentData === void 0 ? void 0 : (_sentData$field_es_av8 = sentData.field_es_avis) === null || _sentData$field_es_av8 === void 0 ? void 0 : (_sentData$field_es_av9 = _sentData$field_es_av8.defunt_fk) === null || _sentData$field_es_av9 === void 0 ? void 0 : _sentData$field_es_av9.nomjeunefille,
      zipCode: sentData === null || sentData === void 0 ? void 0 : (_sentData$field_es_av10 = sentData.field_es_avis) === null || _sentData$field_es_av10 === void 0 ? void 0 : (_sentData$field_es_av11 = _sentData$field_es_av10.defunt_fk) === null || _sentData$field_es_av11 === void 0 ? void 0 : _sentData$field_es_av11.codepostal,
      city: sentData === null || sentData === void 0 ? void 0 : (_sentData$field_es_av12 = sentData.field_es_avis) === null || _sentData$field_es_av12 === void 0 ? void 0 : (_sentData$field_es_av13 = _sentData$field_es_av12.defunt_fk) === null || _sentData$field_es_av13 === void 0 ? void 0 : _sentData$field_es_av13.commune,
      photo: sentData === null || sentData === void 0 ? void 0 : (_sentData$field_es_av14 = sentData.field_es_avis) === null || _sentData$field_es_av14 === void 0 ? void 0 : (_sentData$field_es_av15 = _sentData$field_es_av14.defunt_fk) === null || _sentData$field_es_av15 === void 0 ? void 0 : _sentData$field_es_av15.photo,
      publicationDate: sentData === null || sentData === void 0 ? void 0 : (_sentData$field_es_av16 = sentData.field_es_avis) === null || _sentData$field_es_av16 === void 0 ? void 0 : _sentData$field_es_av16.datepublication,
      publicationStatus: sentData === null || sentData === void 0 ? void 0 : (_sentData$field_es_av17 = sentData.field_es_avis) === null || _sentData$field_es_av17 === void 0 ? void 0 : (_sentData$field_es_av18 = _sentData$field_es_av17.statut_fk) === null || _sentData$field_es_av18 === void 0 ? void 0 : _sentData$field_es_av18.libelle,
      fleursAutorise: sentData === null || sentData === void 0 ? void 0 : (_sentData$field_es_av19 = sentData.field_es_avis) === null || _sentData$field_es_av19 === void 0 ? void 0 : _sentData$field_es_av19.fleursautorise,
      urlAvis: sentData === null || sentData === void 0 ? void 0 : (_sentData$field_es_av20 = sentData.field_es_avis) === null || _sentData$field_es_av20 === void 0 ? void 0 : _sentData$field_es_av20.url,
      ceremonies: sentData === null || sentData === void 0 ? void 0 : (_sentData$field_es_av21 = sentData.field_es_avis) === null || _sentData$field_es_av21 === void 0 ? void 0 : _sentData$field_es_av21.lieux
    } : null;
    var infos = {
      defunt: {
        civility: sentData === null || sentData === void 0 ? void 0 : sentData.field_es_civility,
        firstName: sentData === null || sentData === void 0 ? void 0 : sentData.field_es_name,
        lastName: sentData === null || sentData === void 0 ? void 0 : (_sentData$field_es_su = sentData.field_es_surname) === null || _sentData$field_es_su === void 0 ? void 0 : _sentData$field_es_su.toUpperCase(),
        birthDate: sentData === null || sentData === void 0 ? void 0 : sentData.field_es_birthday,
        deathDate: sentData === null || sentData === void 0 ? void 0 : sentData.field_es_death_date,
        birthName: sentData === null || sentData === void 0 ? void 0 : (_sentData$field_nom_d = sentData.field_nom_de_naissance) === null || _sentData$field_nom_d === void 0 ? void 0 : _sentData$field_nom_d.toUpperCase()
      },
      obituary: obituary,
      prestations: (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(fieldMarque),
      marque: {
        name: sentData === null || sentData === void 0 ? void 0 : (_sentData$field_es_ma2 = sentData.field_es_marque) === null || _sentData$field_es_ma2 === void 0 ? void 0 : _sentData$field_es_ma2.field_marque_system_name,
        urlBoutique: sentData === null || sentData === void 0 ? void 0 : (_sentData$field_es_ma3 = sentData.field_es_marque) === null || _sentData$field_es_ma3 === void 0 ? void 0 : _sentData$field_es_ma3.field_marque_boutique,
        logo: sentData === null || sentData === void 0 ? void 0 : (_sentData$field_es_ma4 = sentData.field_es_marque) === null || _sentData$field_es_ma4 === void 0 ? void 0 : _sentData$field_es_ma4.field_marque_logo
      },
      defuntImage: setDefuntImage(sentData === null || sentData === void 0 ? void 0 : sentData.field_es_profile_image),
      homageText: sentData === null || sentData === void 0 ? void 0 : sentData.field_es_homage,
      agency: sentData === null || sentData === void 0 ? void 0 : sentData.field_es_agency,
      manager: sentData === null || sentData === void 0 ? void 0 : sentData.manager
    };
    return infos;
  };

  var setStructuredBiography = function setStructuredBiography(sentData) {
    var _sentData$field_es_bi, _sentData$field_es_bi2;

    var biography = {
      biography: sentData === null || sentData === void 0 ? void 0 : (_sentData$field_es_bi = sentData.field_es_bio) === null || _sentData$field_es_bi === void 0 ? void 0 : _sentData$field_es_bi.field_bio_story,
      isBiographyEdited: (sentData === null || sentData === void 0 ? void 0 : (_sentData$field_es_bi2 = sentData.field_es_bio) === null || _sentData$field_es_bi2 === void 0 ? void 0 : _sentData$field_es_bi2.field_bio_custom) || false
    };
    return biography;
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    document.title = "Espace Souvenirs"; //scrollSmoothToElement();

    if (data !== null && data !== void 0 && data.error || typeof data === "string") {
      setHasError(true);
    }

    if (data && !(data !== null && data !== void 0 && data.error)) {
      setHasError(false);
      dispatch((0,_context_globalInfoSlice__WEBPACK_IMPORTED_MODULE_10__.espaceInfoUpdated)(setStructuredData(data)));
      dispatch((0,_context_biographySlice__WEBPACK_IMPORTED_MODULE_9__.biographyUpdated)(setStructuredBiography(data)));
    }
  }, [data]);
  if (isFetching) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_Loader_FullPageLoader__WEBPACK_IMPORTED_MODULE_7__["default"], null);
  if (error || hasError || data.length === 0) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_NoMatch__WEBPACK_IMPORTED_MODULE_15__["default"], null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_layouts_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_DefuntInfo_InfoWrapper__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_ContentWrapper_ContentWrapper__WEBPACK_IMPORTED_MODULE_5__["default"], null));
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/pages/NoMatch.js":
/*!*****************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/pages/NoMatch.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NoMatch; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Link_StyledLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Link/StyledLink */ "./docroot/themes/custom/souvenirs/src/js/components/Link/StyledLink.js");
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/Layout */ "./docroot/themes/custom/souvenirs/src/js/layouts/Layout.js");
/* harmony import */ var _services_scrollSmoothToElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/scrollSmoothToElement */ "./docroot/themes/custom/souvenirs/src/js/services/scrollSmoothToElement.js");




function NoMatch() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.title = "Espace Souvenirs";
    (0,_services_scrollSmoothToElement__WEBPACK_IMPORTED_MODULE_3__["default"])();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "layout-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Page introuvable (404)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Cette page est introuvable ou a \xE9t\xE9 d\xE9plac\xE9e."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Utilisez le menu pour naviguer dans les diff\xE9rentes rubriques du site."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Link_StyledLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    linkTo: "/",
    linkClass: "bg-current"
  }, "RETOUR \xC0 L'ACCUEIL")));
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

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/assets/images/bg-images/hero.jpg":
/*!******************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/assets/images/bg-images/hero.jpg ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d0a4643f9d705ed45a59ec15ef643546.jpg");

/***/ })

}]);
//# sourceMappingURL=MainPage.bundle.js.map