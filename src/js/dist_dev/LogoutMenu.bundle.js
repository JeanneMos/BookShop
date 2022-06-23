"use strict";
(self["webpackChunkespace_souvenir"] = self["webpackChunkespace_souvenir"] || []).push([["LogoutMenu"],{

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Header/LogoutMenu.js":
/*!********************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Header/LogoutMenu.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LogoutMenu; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./docroot/themes/custom/souvenirs/src/js/constants/index.js");
/* harmony import */ var _context_administratorSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/administratorSlice */ "./docroot/themes/custom/souvenirs/src/js/context/administratorSlice.js");
/* harmony import */ var _services_useGetQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/useGetQuery */ "./docroot/themes/custom/souvenirs/src/js/services/useGetQuery.js");
/* harmony import */ var _Icons_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Icons/Icon */ "./docroot/themes/custom/souvenirs/src/js/components/Icons/Icon.js");
/* harmony import */ var _Link_StyledLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Link/StyledLink */ "./docroot/themes/custom/souvenirs/src/js/components/Link/StyledLink.js");
/* harmony import */ var _Loader_Loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Loader/Loader */ "./docroot/themes/custom/souvenirs/src/js/components/Loader/Loader.js");











function LogoutMenu() {
  var administratorState = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.administrator;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isDropdownOpen = _useState2[0],
      setDropdownOpen = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      isLoader = _useState4[0],
      setIsLoader = _useState4[1];
  /*   const { data, error, isFetching } = useGetQuery({
    key: "main-menu",
    API: mainMenu,
    staleTime: 300000,
    cacheTime: Infinity,
  }); */


  var handleLogOut = function handleLogOut() {
    var currentWindow = window.location.pathname;
    var options = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      withCredentials: true
    };
    setIsLoader(true);
    axios__WEBPACK_IMPORTED_MODULE_1___default().post("/user/logout", null, options).then(function () {
      dispatch((0,_context_administratorSlice__WEBPACK_IMPORTED_MODULE_6__.userLoggedOut)());
      window.location.reload();
    });
  };

  var handleDropdownMenu = function handleDropdownMenu(e) {
    var button = e.currentTarget;
    setDropdownOpen(!isDropdownOpen);

    if (button.nodeName === "BUTTON") {
      button.setAttribute("aria-expanded", !isDropdownOpen);
    }
  };

  var getUserName = function getUserName() {
    var _administratorState$c;

    var lastName = (administratorState === null || administratorState === void 0 ? void 0 : (_administratorState$c = administratorState.currentUser) === null || _administratorState$c === void 0 ? void 0 : _administratorState$c.lastName) || null;
    return lastName;
  };

  var getCivility = function getCivility() {
    var _administratorState$c2;

    var civility = (administratorState === null || administratorState === void 0 ? void 0 : (_administratorState$c2 = administratorState.currentUser) === null || _administratorState$c2 === void 0 ? void 0 : _administratorState$c2.civility) || null;
    return civility;
  };
  /*   const getFetchedItems = (items) => {
    return items.map((item) => {
      return (
        <li key={item.title}>
          <StyledLink linkTo={item.url} linkClass="bg-transparent">
            {item.title}
          </StyledLink>
        </li>
      );
    });
  }; */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("dropdown", {
      open: isDropdownOpen
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("button", {
    className: "dropdown-toggle loggedIn-button",
    onClick: handleDropdownMenu,
    type: "button",
    id: "dropdownMenu1",
    "data-toggle": "dropdown",
    "aria-expanded": "false",
    "data-testid": "logoutButton"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: "userfill",
    iconClass: "user-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "user-login-username"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "user-login-welcome"
  }, "Bonjour \xA0"), getCivility(), " ", getUserName()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: "chevron",
    iconClass: classnames__WEBPACK_IMPORTED_MODULE_2___default()("toggle-menu-icon", {
      open: isDropdownOpen
    })
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("ul", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("dropdown-menu", {
      active: isDropdownOpen
    }),
    "data-testid": "dropdownMainMenu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "button-loader-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("button", {
    "data-testid": "logoutLink",
    type: "button",
    className: "dropdown-item",
    onClick: handleLogOut
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: "logout",
    iconClass: "logout-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "dropdown-item-text"
  }, "Se d\xE9connecter")), isLoader && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Loader_Loader__WEBPACK_IMPORTED_MODULE_10__["default"], null)))));
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

/***/ })

}]);
//# sourceMappingURL=LogoutMenu.bundle.js.map