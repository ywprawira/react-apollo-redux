webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/CategoryList.js":
/*!************************************!*\
  !*** ./components/CategoryList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ContainerCategoryList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContainerCategoryList */ "./components/ContainerCategoryList.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\icube\\Documents\\Yuda Folder\\react\\next\\next-js-apollo-redux\\components\\CategoryList.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var CategoryList = function CategoryList(_ref) {
  var categoryData = _ref.categoryData;
  if (!categoryData) return __jsx("div", {
    className: "no-items",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 16
    }
  }, "No Items");
  return __jsx("div", {
    className: "category-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    className: "category-items",
    spacing: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, categoryData.map(function (category) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      item: true,
      key: category.id,
      xs: 6,
      sm: 6,
      md: 4,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    }, __jsx(Kotak, {
      key: category.id,
      cardClass: "category-item",
      title: category.name,
      link: {
        label: "Shop Now",
        href: "/category/[url_key]",
        as: "/category/".concat(category.url_key)
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (CategoryList);

/***/ }),

/***/ "./components/ContainerCategoryList.js":
/*!*********************************************!*\
  !*** ./components/ContainerCategoryList.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\icube\\Documents\\Yuda Folder\\react\\next\\next-js-apollo-redux\\components\\ContainerCategoryList.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var style = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    media: {
      flexGrow: 1,
      minHeight: '200px'
    }
  };
});

var ContainerCategoryList = function ContainerCategoryList(_ref) {
  var cardClass = _ref.cardClass,
      image = _ref.image,
      title = _ref.title,
      content = _ref.content,
      link = _ref.link;
  var classes = style();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "card ".concat(cardClass),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, image ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardMedia"], {
    className: "".concat(classes.media, " card-media"),
    image: image,
    title: title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 23
    }
  }) : '', __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardContent"], {
    className: "card-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    gutterBottom: true,
    variant: "h5",
    component: "h2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, title), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, content)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardActions"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: link.href,
    as: link.as,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    size: "small",
    color: "primary",
    className: "action",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, link.label))));
};

/* harmony default export */ __webpack_exports__["default"] = (ContainerCategoryList);

/***/ }),

/***/ "./components/Kotak.js":
false

})
//# sourceMappingURL=index.js.047ddc74474eb9d05649.hot-update.js.map