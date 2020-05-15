webpackHotUpdate("static\\development\\pages\\category\\[url_key].js",{

/***/ "./pages/category/[url_key].js":
/*!*************************************!*\
  !*** ./pages/category/[url_key].js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/apollo */ "./lib/apollo.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _data_category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/category */ "./data/category.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_ContainerCategoryList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ContainerCategoryList */ "./components/ContainerCategoryList.js");
/* harmony import */ var _components_Price__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Price */ "./components/Price.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_CategoryList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/CategoryList */ "./components/CategoryList.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\icube\\Documents\\Yuda Folder\\react\\next\\next-js-apollo-redux\\pages\\category\\[url_key].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var Category = function Category() {
  var pageConfig = {
    title: 'Category'
  };
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var url_key = router.query.url_key;

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(_data_category__WEBPACK_IMPORTED_MODULE_5__["CATEGORY_BY_KEY"], {
    variables: {
      url_key: url_key
    }
  }),
      loading = _useQuery.loading,
      data = _useQuery.data;

  if (loading) return __jsx("div", {
    className: "loading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 16
    }
  }, "Loading ...");
  var category = data.categoryList[0];
  var products = category.products.items ? category.products.items : null;
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    pageConfig: pageConfig,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("section", {
    className: "banner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, category.image_path ? "<img src=".concat(category.image_path, " />") : ''), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
    variant: "h1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, category.name), category.description), __jsx("section", {
    className: "child-category",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx(_components_CategoryList__WEBPACK_IMPORTED_MODULE_10__["default"], {
    categoryData: category.children,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  })), __jsx("section", {
    className: "product-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, "Products"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    container: true,
    className: "product-items",
    spacing: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, products ? products.map(function (product) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
      item: true,
      key: product.id,
      xs: 6,
      sm: 6,
      md: 4,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 25
      }
    }, __jsx(_components_ContainerCategoryList__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: product.id,
      cardClass: "product-item",
      title: product.name,
      image: product.small_image.url,
      content: __jsx(_components_Price__WEBPACK_IMPORTED_MODULE_8__["default"], {
        price: product.price_range.minimum_price,
        showDiscount: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 38
        }
      }),
      link: {
        label: "Detail",
        href: "/product/[url_key]",
        as: "/product/".concat(product.url_key)
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 25
      }
    }));
  }) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    item: true,
    xs: 6,
    sm: 6,
    md: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 24
    }
  }, __jsx(_components_ContainerCategoryList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    cardClass: "no-products",
    content: "Produk nya noting",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 56
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_apollo__WEBPACK_IMPORTED_MODULE_2__["withApollo"])(Category));

/***/ })

})
//# sourceMappingURL=[url_key].js.9d1349f4db47dad8cfda.hot-update.js.map