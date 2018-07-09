webpackHotUpdate(5,{

/***/ "./components/RequestRow.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ethereum_web3__ = __webpack_require__("./ethereum/web3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ethereum_campaign__ = __webpack_require__("./ethereum/campaign.js");

var _jsxFileName = "/home/praveen/Ethereum_Projects/Kickstart/components/RequestRow.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var RequestRow =
/*#__PURE__*/
function (_Component) {
  _inherits(RequestRow, _Component);

  function RequestRow() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, RequestRow);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = RequestRow.__proto__ || Object.getPrototypeOf(RequestRow)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        loading: false,
        inActive: false,
        loading1: false,
        inActive1: false,
        error: ''
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onApprove", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
          var campaign, accounts;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this.setState({
                    loading: true,
                    inActive: true,
                    error: ''
                  });

                  campaign = Object(__WEBPACK_IMPORTED_MODULE_4__ethereum_campaign__["a" /* default */])(_this.props.address);
                  _context.next = 4;
                  return __WEBPACK_IMPORTED_MODULE_3__ethereum_web3__["a" /* default */].eth.getAccounts();

                case 4:
                  accounts = _context.sent;
                  _context.prev = 5;
                  _context.next = 8;
                  return campaign.methods.approveRequest(_this.props.id).send({
                    from: accounts[0]
                  });

                case 8:
                  _context.next = 13;
                  break;

                case 10:
                  _context.prev = 10;
                  _context.t0 = _context["catch"](5);

                  _this.setState({
                    error: _context.t0.message
                  });

                case 13:
                  _this.setState({
                    loading: false,
                    inActive: false
                  });

                case 14:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[5, 10]]);
        }));

        return function value() {
          return _value.apply(this, arguments);
        };
      }()
    }), Object.defineProperty(_assertThisInitialized(_this), "onFinalize", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value2 = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2() {
          var campaign, accounts;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _this.setState({
                    loading1: true,
                    inActive1: true,
                    error: ''
                  });

                  campaign = Object(__WEBPACK_IMPORTED_MODULE_4__ethereum_campaign__["a" /* default */])(_this.props.address);
                  _context2.next = 4;
                  return __WEBPACK_IMPORTED_MODULE_3__ethereum_web3__["a" /* default */].eth.getAccounts();

                case 4:
                  accounts = _context2.sent;
                  _context2.prev = 5;
                  _context2.next = 8;
                  return campaign.methods.finalizeRequest(_this.props.id).send({
                    from: accounts[0]
                  });

                case 8:
                  _context2.next = 13;
                  break;

                case 10:
                  _context2.prev = 10;
                  _context2.t0 = _context2["catch"](5);

                  _this.setState({
                    error: _context2.t0.message
                  });

                case 13:
                  _this.setState({
                    loading1: false,
                    inActive1: false
                  });

                case 14:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this, [[5, 10]]);
        }));

        return function value() {
          return _value2.apply(this, arguments);
        };
      }()
    }), _temp));
  }

  _createClass(RequestRow, [{
    key: "render",
    value: function render() {
      var Row = __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["i" /* Table */].Row,
          Cell = __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["i" /* Table */].Cell;
      var _props = this.props,
          id = _props.id,
          request = _props.request,
          approversCount = _props.approversCount;
      var readyToFinalize = request.approvalCount > approversCount / 2;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Row, {
        disabled: request.complete,
        positive: readyToFinalize && !request.complete,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, id), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, request.description), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, __WEBPACK_IMPORTED_MODULE_3__ethereum_web3__["a" /* default */].utils.fromWei(request.value, 'ether')), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, request.recipient), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, request.approvalCount, "/", approversCount), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, request.complete ? null : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["a" /* Button */], {
        color: "green",
        basic: true,
        onClick: this.onApprove,
        loading: this.state.loading,
        disabled: this.state.inActive,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, "Approve")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, request.complete ? null : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["a" /* Button */], {
        color: "teal",
        basic: true,
        onClick: this.onFinalize,
        loading: this.state.loading1,
        disabled: this.state.inActive1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, "Finalize")));
    }
  }]);

  return RequestRow;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (RequestRow);

/***/ })

})
//# sourceMappingURL=5.5a31970db321ef63ea02.hot-update.js.map