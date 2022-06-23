"use strict";
(self["webpackChunkespace_souvenir"] = self["webpackChunkespace_souvenir"] || []).push([["Accueil"],{

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Agency/Agency.js":
/*!****************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Agency/Agency.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Agency; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _services_formatting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/formatting */ "./docroot/themes/custom/souvenirs/src/js/services/formatting.js");
/* harmony import */ var _Icons_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icons/Icon */ "./docroot/themes/custom/souvenirs/src/js/components/Icons/Icon.js");
/* harmony import */ var _Link_StyledLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Link/StyledLink */ "./docroot/themes/custom/souvenirs/src/js/components/Link/StyledLink.js");





function Agency() {
  var globalInfoState = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.globalInfo;
  });
  if (!(globalInfoState !== null && globalInfoState !== void 0 && globalInfoState.agency) || (0,_services_formatting__WEBPACK_IMPORTED_MODULE_2__.isEmptyArray)(globalInfoState === null || globalInfoState === void 0 ? void 0 : globalInfoState.agency)) return null;
  var _globalInfoState$agen = globalInfoState.agency,
      agency_name = _globalInfoState$agen.agency_name,
      agency_address = _globalInfoState$agen.agency_address,
      agency_postal_code = _globalInfoState$agen.agency_postal_code,
      agency_town = _globalInfoState$agen.agency_town,
      agency_phone = _globalInfoState$agen.agency_phone,
      agency_url = _globalInfoState$agen.agency_url;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "accueil-agency-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "agency-wrapper",
    "data-testid": "agencyWrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "content-heading-2"
  }, "L'agence organisatrice"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "agency-infos"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "agency-title"
  }, agency_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "agency-address"
  }, agency_address), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "agency-zipcode"
  }, agency_postal_code, " ", agency_town), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "agency-contact"
  }, agency_phone && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "agency-phone",
    "data-testid": "agencyPhone"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Tel:\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "sr-only"
  }, "t\xE9l\xE9phone"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Link_StyledLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    as: "ahref",
    linkTo: "tel:".concat(agency_phone),
    linkClass: "bg-transparent agency-phone-link"
  }, agency_phone)), agency_url && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Link_StyledLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    as: "ahref",
    linkTo: agency_url,
    linkClass: "link bg-current",
    dataTestid: "agencyCta",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "link-text"
  }, "Fiche agence"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "separator"
  }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "next",
    iconClass: "white-icon"
  }))))));
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Ceremonies/Ceremonies.js":
/*!************************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Ceremonies/Ceremonies.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Ceremonies; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _CeremonyItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CeremonyItem */ "./docroot/themes/custom/souvenirs/src/js/components/Ceremonies/CeremonyItem.js");



function Ceremonies() {
  var _globalInfoState$obit, _globalInfoState$obit2;

  var globalInfoState = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.globalInfo;
  });

  if (globalInfoState !== null && globalInfoState !== void 0 && (_globalInfoState$obit = globalInfoState.obituary) !== null && _globalInfoState$obit !== void 0 && _globalInfoState$obit.ceremonies && (globalInfoState === null || globalInfoState === void 0 ? void 0 : (_globalInfoState$obit2 = globalInfoState.obituary) === null || _globalInfoState$obit2 === void 0 ? void 0 : _globalInfoState$obit2.ceremonies.length) > 0) {
    var _globalInfoState$agen, _globalInfoState$agen2, _globalInfoState$marq, _globalInfoState$marq2, _globalInfoState$marq3, _globalInfoState$marq4, _globalInfoState$obit3;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "accueil-ceremonies-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
      className: "content-heading-2",
      "data-testid": "ceremonies"
    }, "C\xE9r\xE9monie"), (globalInfoState === null || globalInfoState === void 0 ? void 0 : (_globalInfoState$agen = globalInfoState.agency) === null || _globalInfoState$agen === void 0 ? void 0 : _globalInfoState$agen.agency_name) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "ceremonies-agency"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Cet hommage est organis\xE9 par l\u2019agence", " ", globalInfoState === null || globalInfoState === void 0 ? void 0 : (_globalInfoState$agen2 = globalInfoState.agency) === null || _globalInfoState$agen2 === void 0 ? void 0 : _globalInfoState$agen2.agency_name), (globalInfoState === null || globalInfoState === void 0 ? void 0 : (_globalInfoState$marq = globalInfoState.marque) === null || _globalInfoState$marq === void 0 ? void 0 : (_globalInfoState$marq2 = _globalInfoState$marq.logo) === null || _globalInfoState$marq2 === void 0 ? void 0 : _globalInfoState$marq2.url) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "ceremony-agency-separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      className: "ceremony-agency-logo",
      src: globalInfoState === null || globalInfoState === void 0 ? void 0 : (_globalInfoState$marq3 = globalInfoState.marque) === null || _globalInfoState$marq3 === void 0 ? void 0 : (_globalInfoState$marq4 = _globalInfoState$marq3.logo) === null || _globalInfoState$marq4 === void 0 ? void 0 : _globalInfoState$marq4.url
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "ceremonies-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
      className: "ceremonies-list",
      "data-testid": "ceremonies-list"
    }, globalInfoState === null || globalInfoState === void 0 ? void 0 : (_globalInfoState$obit3 = globalInfoState.obituary) === null || _globalInfoState$obit3 === void 0 ? void 0 : _globalInfoState$obit3.ceremonies.map(function (ceremony) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CeremonyItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: ceremony.datelieu,
        ceremony: ceremony
      });
    }))));
  }

  return null;
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Ceremonies/CeremonyItem.js":
/*!**************************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Ceremonies/CeremonyItem.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _services_formatting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/formatting */ "./docroot/themes/custom/souvenirs/src/js/services/formatting.js");
/* harmony import */ var _Icons_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icons/Icon */ "./docroot/themes/custom/souvenirs/src/js/components/Icons/Icon.js");
/* harmony import */ var _Link_StyledLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Link/StyledLink */ "./docroot/themes/custom/souvenirs/src/js/components/Link/StyledLink.js");





var CeremonyItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(function CeremonyItem(_ref) {
  var _globalInfoState$marq, _globalInfoState$obit, _globalInfoState$marq2;

  var ceremony = _ref.ceremony;
  var adresse = ceremony.adresse,
      codepostal = ceremony.codepostal,
      commune = ceremony.commune,
      adresse2 = ceremony.adresse2,
      datelieu = ceremony.datelieu,
      nom = ceremony.nom,
      pays = ceremony.pays,
      type = ceremony.type,
      availability = ceremony.availability;
  var globalInfoState = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.globalInfo;
  });
  var memoizedHour = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    if (datelieu) return (0,_services_formatting__WEBPACK_IMPORTED_MODULE_2__.hoursFormat)((0,_services_formatting__WEBPACK_IMPORTED_MODULE_2__.timeStampToDate)(datelieu));
  }, [datelieu]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "ceremony-place-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "anneau",
    iconClass: "anneau-icon"
  })), datelieu && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "ceremony-date"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "ceremony-hour"
  }, memoizedHour), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, (0,_services_formatting__WEBPACK_IMPORTED_MODULE_2__.timeStampToDate)(datelieu).toLocaleDateString("fr"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "ceremony-place"
  }, type && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "ceremony-type"
  }, type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "ceremony-description-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "ceremony-description"
  }, memoizedHour && "Aura lieu \xE0 ".concat(memoizedHour), nom && " \xE0 ".concat(nom)), (globalInfoState === null || globalInfoState === void 0 ? void 0 : (_globalInfoState$marq = globalInfoState.marque) === null || _globalInfoState$marq === void 0 ? void 0 : _globalInfoState$marq.urlBoutique) && (globalInfoState === null || globalInfoState === void 0 ? void 0 : (_globalInfoState$obit = globalInfoState.obituary) === null || _globalInfoState$obit === void 0 ? void 0 : _globalInfoState$obit.fleursAutorise) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Link_StyledLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    as: "ahref",
    linkTo: globalInfoState === null || globalInfoState === void 0 ? void 0 : (_globalInfoState$marq2 = globalInfoState.marque) === null || _globalInfoState$marq2 === void 0 ? void 0 : _globalInfoState$marq2.urlBoutique,
    linkClass: "link bg-white boutique-link",
    dataTestid: "boutiqueCta",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "link-text"
  }, "offrir des fleurs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "separator"
  }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "next",
    iconClass: "current-icon"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "ceremony-name-address"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "geoloc",
    iconClass: "geoloc-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "ceremony-name"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, nom)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "ceremony-address"
  }, adresse && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, adresse), adresse2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, adresse2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), codepostal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "mr-5"
  }, codepostal), commune && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, commune))))));
});
/* harmony default export */ __webpack_exports__["default"] = (CeremonyItem);

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/ContentPages/Accueil.js":
/*!***********************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/ContentPages/Accueil.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Accueil; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Agency_Agency__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Agency/Agency */ "./docroot/themes/custom/souvenirs/src/js/components/Agency/Agency.js");
/* harmony import */ var _Ceremonies_Ceremonies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Ceremonies/Ceremonies */ "./docroot/themes/custom/souvenirs/src/js/components/Ceremonies/Ceremonies.js");
/* harmony import */ var _FlowersAndTreesTransversal_TransversalWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FlowersAndTreesTransversal/TransversalWrapper */ "./docroot/themes/custom/souvenirs/src/js/components/FlowersAndTreesTransversal/TransversalWrapper.js");
/* harmony import */ var _Homage_Homage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Homage/Homage */ "./docroot/themes/custom/souvenirs/src/js/components/Homage/Homage.js");
/* harmony import */ var _Messages_AccueilMessages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Messages/AccueilMessages */ "./docroot/themes/custom/souvenirs/src/js/components/Messages/AccueilMessages.js");
/* harmony import */ var _Obituary_Obituary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Obituary/Obituary */ "./docroot/themes/custom/souvenirs/src/js/components/Obituary/Obituary.js");
/* harmony import */ var _TabPanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TabPanel */ "./docroot/themes/custom/souvenirs/src/js/components/ContentPages/TabPanel.js");








function Accueil(_ref) {
  var name = _ref.name,
      handleActiveTab = _ref.handleActiveTab;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TabPanel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: name
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Homage_Homage__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Ceremonies_Ceremonies__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FlowersAndTreesTransversal_TransversalWrapper__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Messages_AccueilMessages__WEBPACK_IMPORTED_MODULE_5__["default"], {
    handleActiveTab: handleActiveTab
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Obituary_Obituary__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Agency_Agency__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/FlowersAndTreesTransversal/PrestationTransversal.js":
/*!***************************************************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/FlowersAndTreesTransversal/PrestationTransversal.js ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PrestationTransversal; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _services_formatting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/formatting */ "./docroot/themes/custom/souvenirs/src/js/services/formatting.js");
/* harmony import */ var _Icons_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icons/Icon */ "./docroot/themes/custom/souvenirs/src/js/components/Icons/Icon.js");
/* harmony import */ var _Link_StyledLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Link/StyledLink */ "./docroot/themes/custom/souvenirs/src/js/components/Link/StyledLink.js");




function PrestationTransversal(_ref) {
  var _image$field_media_im, _image$field_media_im2, _image$field_media_im3, _cta$attributes;

  var prestation = _ref.prestation;
  var title = prestation.field_prest_titre,
      image = prestation.field_prest_image,
      description = prestation.field_prest_description,
      cta = prestation.field_prest_url;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("article", {
    className: "transversal-item"
  }, (image === null || image === void 0 ? void 0 : (_image$field_media_im = image.field_media_image) === null || _image$field_media_im === void 0 ? void 0 : _image$field_media_im.url) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "transversal-image-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("picture", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("source", {
    srcSet: image === null || image === void 0 ? void 0 : (_image$field_media_im2 = image.field_media_image) === null || _image$field_media_im2 === void 0 ? void 0 : _image$field_media_im2.url,
    media: "(min-width: 650px)"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "transversal-image",
    loading: "lazy",
    src: image === null || image === void 0 ? void 0 : (_image$field_media_im3 = image.field_media_image) === null || _image$field_media_im3 === void 0 ? void 0 : _image$field_media_im3.url,
    alt: "",
    width: "452",
    height: "250"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "transversal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "title-underlined"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, (0,_services_formatting__WEBPACK_IMPORTED_MODULE_1__.textWithBreaks)((0,_services_formatting__WEBPACK_IMPORTED_MODULE_1__.decoded)(description))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Link_StyledLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    as: "ahref",
    linkTo: cta === null || cta === void 0 ? void 0 : cta.url,
    target: cta !== null && cta !== void 0 && (_cta$attributes = cta.attributes) !== null && _cta$attributes !== void 0 && _cta$attributes.external ? "_blank" : null,
    linkClass: "link bg-current"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "link-text"
  }, cta === null || cta === void 0 ? void 0 : cta.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "separator"
  }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "next",
    iconClass: "white-icon"
  }))));
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/FlowersAndTreesTransversal/TransversalWrapper.js":
/*!************************************************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/FlowersAndTreesTransversal/TransversalWrapper.js ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TransversalWrapper; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _PrestationTransversal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrestationTransversal */ "./docroot/themes/custom/souvenirs/src/js/components/FlowersAndTreesTransversal/PrestationTransversal.js");



/* import './transversalBlocks.scss';
 */

function TransversalWrapper() {
  var _globalInfoState$pres;

  var globalInfoState = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.globalInfo;
  });
  if (!globalInfoState.prestations || ((_globalInfoState$pres = globalInfoState.prestations) === null || _globalInfoState$pres === void 0 ? void 0 : _globalInfoState$pres.length) === 0) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "transversal-blocks",
    "data-testid": "transversalBlocks"
  }, globalInfoState.prestations.map(function (prestation) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PrestationTransversal__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: prestation.field_prest_titre,
      prestation: prestation
    });
  }));
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Homage/Homage.js":
/*!****************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Homage/Homage.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Homage; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _context_modalSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/modalSlice */ "./docroot/themes/custom/souvenirs/src/js/context/modalSlice.js");
/* harmony import */ var _services_formatting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/formatting */ "./docroot/themes/custom/souvenirs/src/js/services/formatting.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button/Button */ "./docroot/themes/custom/souvenirs/src/js/components/Button/Button.js");
/* harmony import */ var _Icons_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Icons/Icon */ "./docroot/themes/custom/souvenirs/src/js/components/Icons/Icon.js");






/* import './homage.scss'; */

function Homage() {
  var globalInfoState = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.globalInfo;
  });
  var administratorState = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.administrator;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var handleEditModal = function handleEditModal() {
    dispatch((0,_context_modalSlice__WEBPACK_IMPORTED_MODULE_2__.modalOpened)({
      theme: "dark",
      hasCloseButton: true,
      modalType: "HomageModal"
    }));
  };

  if (administratorState.isAdmin) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "homage-wrapper",
      "data-testid": "homage"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "heading-button-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
      className: "content-heading-2"
    }, "Rendre Hommage"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      type: "button",
      btnClass: "edit-text-button bg-current",
      onClickAction: handleEditModal
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      name: "pencil",
      iconClass: "edit-text-icon"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-homage"
    }, (0,_services_formatting__WEBPACK_IMPORTED_MODULE_3__.textWithBreaks)((0,_services_formatting__WEBPACK_IMPORTED_MODULE_3__.decoded)(globalInfoState === null || globalInfoState === void 0 ? void 0 : globalInfoState.homageText))));
  }

  if (!administratorState.isAdmin && globalInfoState !== null && globalInfoState !== void 0 && globalInfoState.homageText) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "homage-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "heading-button-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
      className: "content-heading-2"
    }, "Rendre Hommage")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-homage"
    }, (0,_services_formatting__WEBPACK_IMPORTED_MODULE_3__.textWithBreaks)((0,_services_formatting__WEBPACK_IMPORTED_MODULE_3__.decoded)(globalInfoState === null || globalInfoState === void 0 ? void 0 : globalInfoState.homageText))));
  }

  return null;
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Messages/AccueilMessages.js":
/*!***************************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Messages/AccueilMessages.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AccueilMessages; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./docroot/themes/custom/souvenirs/src/js/constants/index.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button/Button */ "./docroot/themes/custom/souvenirs/src/js/components/Button/Button.js");
/* harmony import */ var _Icons_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icons/Icon */ "./docroot/themes/custom/souvenirs/src/js/components/Icons/Icon.js");
/* harmony import */ var _Messages_MessagesList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Messages/MessagesList */ "./docroot/themes/custom/souvenirs/src/js/components/Messages/MessagesList.js");





function AccueilMessages(_ref) {
  var handleActiveTab = _ref.handleActiveTab;

  var handleActivetab = function handleActivetab() {
    handleActiveTab(_constants__WEBPACK_IMPORTED_MODULE_1__.messages);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "accueil-messages-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "heading-button-wrapper between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "content-heading-2"
  }, "Derniers messages"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "button",
    btnClass: "bg-current",
    onClickAction: handleActivetab
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "button-text"
  }, "Voir les messages"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "separator"
  }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "next",
    iconClass: "white-icon"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Messages_MessagesList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    page: "accueil"
  }));
}

/***/ }),

/***/ "./docroot/themes/custom/souvenirs/src/js/components/Obituary/Obituary.js":
/*!********************************************************************************!*\
  !*** ./docroot/themes/custom/souvenirs/src/js/components/Obituary/Obituary.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Obituary; }
/* harmony export */ });
/* harmony import */ var Images_profile_grey_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Images/profile-grey.jpg */ "./docroot/themes/custom/souvenirs/src/assets/images/profile-grey.jpg");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _services_formatting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/formatting */ "./docroot/themes/custom/souvenirs/src/js/services/formatting.js");
/* harmony import */ var _Icons_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Icons/Icon */ "./docroot/themes/custom/souvenirs/src/js/components/Icons/Icon.js");
/* harmony import */ var _Link_StyledLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Link/StyledLink */ "./docroot/themes/custom/souvenirs/src/js/components/Link/StyledLink.js");
/* harmony import */ var _Upload_DefuntModalImagePlaceholder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Upload/DefuntModalImagePlaceholder */ "./docroot/themes/custom/souvenirs/src/js/components/Upload/DefuntModalImagePlaceholder.js");








function Obituary() {
  var _globalInfoState$obit, _globalInfoState$obit2, _globalInfoState$obit3, _globalInfoState$obit4, _globalInfoState$obit5, _globalInfoState$obit6, _globalInfoState$obit7, _globalInfoState$obit8, _globalInfoState$obit9, _globalInfoState$obit10, _globalInfoState$obit11, _globalInfoState$obit12, _globalInfoState$obit13, _globalInfoState$obit14, _globalInfoState$obit15, _globalInfoState$obit16;

  var globalInfoState = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.globalInfo;
  });

  var displayAgency = function displayAgency() {
    if (!(globalInfoState !== null && globalInfoState !== void 0 && globalInfoState.agency)) return null;

    if (globalInfoState !== null && globalInfoState !== void 0 && globalInfoState.agency) {
      var _globalInfoState$agen = globalInfoState.agency,
          agency_marque = _globalInfoState$agen.agency_marque,
          agency_town = _globalInfoState$agen.agency_town,
          agency_postal_code = _globalInfoState$agen.agency_postal_code;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "obituary-agency",
        "data-testid": "obituary-agency"
      }, agency_marque, " ", agency_town, " (", agency_postal_code === null || agency_postal_code === void 0 ? void 0 : agency_postal_code.slice(0, 2), ")");
    }
  };

  if (!(globalInfoState !== null && globalInfoState !== void 0 && globalInfoState.obituary)) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "accueil-obituary-wrapper",
    "data-testid": "obituary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2", {
    className: "content-heading-2"
  }, "Avis de d\xE9c\xE8s"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "obituary-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "obituary-content-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "obituary-photo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "image-preview"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    alt: "",
    className: "image-preview-image",
    width: "200",
    height: "200",
    "data-testid": "obituary-photo",
    src: globalInfoState !== null && globalInfoState !== void 0 && (_globalInfoState$obit = globalInfoState.obituary) !== null && _globalInfoState$obit !== void 0 && (_globalInfoState$obit2 = _globalInfoState$obit.photo) !== null && _globalInfoState$obit2 !== void 0 && _globalInfoState$obit2.length ? globalInfoState === null || globalInfoState === void 0 ? void 0 : (_globalInfoState$obit3 = globalInfoState.obituary) === null || _globalInfoState$obit3 === void 0 ? void 0 : (_globalInfoState$obit4 = _globalInfoState$obit3.photo) === null || _globalInfoState$obit4 === void 0 ? void 0 : _globalInfoState$obit4.url : Images_profile_grey_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "obituary-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "obituary-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: "obituary-name"
  }, globalInfoState === null || globalInfoState === void 0 ? void 0 : (_globalInfoState$obit5 = globalInfoState.obituary) === null || _globalInfoState$obit5 === void 0 ? void 0 : _globalInfoState$obit5.civility, "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "info-firstname"
  }, globalInfoState === null || globalInfoState === void 0 ? void 0 : (_globalInfoState$obit6 = globalInfoState.obituary) === null || _globalInfoState$obit6 === void 0 ? void 0 : _globalInfoState$obit6.firstName), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "info-lastname"
  }, globalInfoState === null || globalInfoState === void 0 ? void 0 : (_globalInfoState$obit7 = globalInfoState.obituary) === null || _globalInfoState$obit7 === void 0 ? void 0 : _globalInfoState$obit7.lastName), (globalInfoState === null || globalInfoState === void 0 ? void 0 : (_globalInfoState$obit8 = globalInfoState.obituary) === null || _globalInfoState$obit8 === void 0 ? void 0 : _globalInfoState$obit8.maidenName) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "d-block"
  }, "n\xE9(e)\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "info-lastname"
  }, globalInfoState === null || globalInfoState === void 0 ? void 0 : (_globalInfoState$obit9 = globalInfoState.obituary) === null || _globalInfoState$obit9 === void 0 ? void 0 : _globalInfoState$obit9.maidenName))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: "obituary-place"
  }, globalInfoState === null || globalInfoState === void 0 ? void 0 : (_globalInfoState$obit10 = globalInfoState.obituary) === null || _globalInfoState$obit10 === void 0 ? void 0 : _globalInfoState$obit10.city, "\xA0(", globalInfoState === null || globalInfoState === void 0 ? void 0 : (_globalInfoState$obit11 = globalInfoState.obituary) === null || _globalInfoState$obit11 === void 0 ? void 0 : (_globalInfoState$obit12 = _globalInfoState$obit11.zipCode) === null || _globalInfoState$obit12 === void 0 ? void 0 : _globalInfoState$obit12.slice(0, 2), ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: "obituary-publication"
  }, globalInfoState === null || globalInfoState === void 0 ? void 0 : (_globalInfoState$obit13 = globalInfoState.obituary) === null || _globalInfoState$obit13 === void 0 ? void 0 : _globalInfoState$obit13.publicationStatus, "\xA0", (0,_services_formatting__WEBPACK_IMPORTED_MODULE_3__.dateFormat)(new Date(globalInfoState === null || globalInfoState === void 0 ? void 0 : (_globalInfoState$obit14 = globalInfoState.obituary) === null || _globalInfoState$obit14 === void 0 ? void 0 : _globalInfoState$obit14.publicationDate)))), displayAgency(), (globalInfoState === null || globalInfoState === void 0 ? void 0 : (_globalInfoState$obit15 = globalInfoState.obituary) === null || _globalInfoState$obit15 === void 0 ? void 0 : _globalInfoState$obit15.urlAvis) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "obituary-links"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Link_StyledLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
    as: "ahref",
    linkTo: globalInfoState === null || globalInfoState === void 0 ? void 0 : (_globalInfoState$obit16 = globalInfoState.obituary) === null || _globalInfoState$obit16 === void 0 ? void 0 : _globalInfoState$obit16.urlAvis,
    linkClass: "link bg-white",
    dataTestid: "avisCta",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "link-text"
  }, "d\xE9tail"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "separator"
  }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Icons_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "next",
    iconClass: "current-icon"
  })))))));
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

/***/ })

}]);
//# sourceMappingURL=Accueil.bundle.js.map