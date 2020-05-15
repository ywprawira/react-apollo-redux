webpackHotUpdate("static\\development\\pages\\cart.js",{

/***/ "./pages/cart.js":
/*!***********************!*\
  !*** ./pages/cart.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/redux */ "./lib/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_action_actionCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/action/actionCart */ "./redux/action/actionCart.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\icube\\Documents\\Yuda Folder\\react\\next\\next-js-apollo-redux\\pages\\cart.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var cart = function cart() {
  var pageConfig = {
    title: "My Cart"
  };
  var cartData = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.cart;
  });
  var qtyInitial = [];

  if (cartData.cart.length) {
    cartData.cart.map(function (item) {
      qtyInitial[item.id] = {
        qty: item.qty,
        product: item.product
      };
    });
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(qtyInitial),
      qty = _useState[0],
      setQty = _useState[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  console.log(qty);

  var handleUpdateQty = function handleUpdateQty(e, id) {
    dispatch(Object(_redux_action_actionCart__WEBPACK_IMPORTED_MODULE_3__["updateCart"])(id, e.target.value));
  };

  var handleChangeQty = function handleChangeQty(e, id) {
    qty[id].qty = parseInt(e.target.value);
    setQty(qty);
  };

  var handleRemove = function handleRemove(e, id) {
    e.preventDefault();
    dispatch(Object(_redux_action_actionCart__WEBPACK_IMPORTED_MODULE_3__["removeCart"])(id));
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    pageConfig: pageConfig,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "cart-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "cart-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, "My Cart ", __jsx("span", {
    className: "counter",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 23
    }
  }, cartData.nt))), __jsx("div", {
    className: "cart-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "cart-items",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, cartData.cart.length ? cartData.cart.map(function (item) {
    return __jsx("div", {
      key: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
      container: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 19
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
      item: true,
      sm: 3,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }
    }, item.product.image), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
      item: true,
      sm: 9,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 21
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 23
      }
    }, item.product.name), __jsx("small", {
      className: "sku",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 23
      }
    }, "SKU: ", item.product.sku), __jsx("strong", {
      className: "price",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 23
      }
    }, item.product.price), __jsx("div", {
      className: "cart-actions",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 23
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TextField"], {
      name: "qty",
      id: "qty",
      label: "Qty",
      variant: "filled",
      value: parseInt(qty[item.id].qty),
      onBlur: function onBlur(e) {
        return handleUpdateQty(e, item.id);
      },
      onChange: function onChange(e) {
        return handleChangeQty(e, item.id);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 25
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      color: "primary",
      className: "action remove",
      onClick: function onClick(e) {
        return handleRemove(e, item.id);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 27
      }
    }, __jsx(Icon, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 33
      }
    }, "delete")))))));
  }) : __jsx("div", {
    className: "empty",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, "Noting")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_redux__WEBPACK_IMPORTED_MODULE_1__["withRedux"])(cart));

/***/ })

})
//# sourceMappingURL=cart.js.b8530a720e0bba07d630.hot-update.js.map