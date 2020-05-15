webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _lib_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/apollo */ "./lib/apollo.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _data_homepage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/homepage */ "./data/homepage.js");
/* harmony import */ var _components_CategoryList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CategoryList */ "./components/CategoryList.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\icube\\Documents\\Yuda Folder\\react\\next\\next-js-apollo-redux\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var index = function index() {
  var pageConfig = {
    title: "Homepage"
  };

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(_data_homepage__WEBPACK_IMPORTED_MODULE_4__["HOMEPAGE_CATEGORY_LIST"]),
      loading = _useQuery.loading,
      data = _useQuery.data;

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    pageConfig: pageConfig,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, loading ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["CircularProgress"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 18
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_CategoryList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    categoryData: data.categoryList[0].children,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_apollo__WEBPACK_IMPORTED_MODULE_2__["withApollo"])(index));

/***/ })

})
//# sourceMappingURL=index.js.ef0fa64aaeec8ec60abb.hot-update.js.map