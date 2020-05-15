webpackHotUpdate("static\\development\\pages\\product\\[url_key].js",{

/***/ "./pages/product/[url_key].js":
/*!************************************!*\
  !*** ./pages/product/[url_key].js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _lib_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/apollo */ "./lib/apollo.js");
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/redux */ "./lib/redux.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _data_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data/product */ "./data/product.js");
/* harmony import */ var _components_Price__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Price */ "./components/Price.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_action_actionCart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../redux/action/actionCart */ "./redux/action/actionCart.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\icube\\Documents\\Yuda Folder\\react\\next\\next-js-apollo-redux\\pages\\product\\[url_key].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













var Product = function Product() {
  var pageConfig = {
    title: "PDP"
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState$ = _useState[0],
      qty = _useState$ === void 0 ? 1 : _useState$,
      setQty = _useState[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var url_key = router.query.url_key;

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__["useQuery"])(_data_product__WEBPACK_IMPORTED_MODULE_6__["PRODUCT_BY_KEY"], {
    variables: {
      url_key: url_key
    }
  }),
      loading = _useQuery.loading,
      data = _useQuery.data;

  if (loading) {
    return __jsx("div", {
      className: "loading",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 7
      }
    }, "Wait ...");
  }

  var handleQty = function handleQty(e) {
    setQty(e.target.value);
  };

  var handleAddtoCart = function handleAddtoCart(e) {
    e.preventDefault();
    var item = {
      id: product.id,
      qty: parseInt(qty),
      product: {
        name: product.name,
        image: __jsx("img", {
          src: product.image.url,
          alt: product.image.label,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 20
          }
        }),
        price: __jsx(_components_Price__WEBPACK_IMPORTED_MODULE_7__["default"], {
          price: product.price_range.minimum_price,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 20
          }
        }),
        sku: product.sku
      }
    };
    dispatch(Object(_redux_action_actionCart__WEBPACK_IMPORTED_MODULE_9__["addToCart"])(item));
  };

  var product = data.products.items[0];
  pageConfig.title = product.name;
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    pageConfig: pageConfig,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, loading ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["CircularProgress"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 18
    }
  }) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
    container: true,
    spacing: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
    item: true,
    sm: 5,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, __jsx("img", {
    className: "image-product",
    src: product.image.url,
    alt: product.image.label,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
    item: true,
    sm: 7,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, __jsx("section", {
    className: "section product-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, product.name), __jsx(_components_Price__WEBPACK_IMPORTED_MODULE_7__["default"], {
    price: product.price_range.minimum_price,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 15
    }
  })), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx("form", {
    id: "add-to-cart-".concat(product.id),
    onSubmit: handleAddtoCart,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TextField"], {
    required: true,
    label: "Quantity",
    defaultValue: qty,
    id: "qty",
    onChange: handleQty,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Button"], {
    variant: "contained",
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    }
  }, " Add to Cart"))), __jsx("section", {
    className: "section product-description",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }, "Description"), __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: product.description.html
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_10__["compose"])(_lib_apollo__WEBPACK_IMPORTED_MODULE_2__["withApollo"], _lib_redux__WEBPACK_IMPORTED_MODULE_3__["withRedux"])(Product));

/***/ })

})
//# sourceMappingURL=[url_key].js.d1eda55b27cf7dce9172.hot-update.js.map