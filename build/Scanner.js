"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _expoBarcodeScanner = require("expo-barcode-scanner");

var _reactNativeQrcodeSvg = _interopRequireDefault(require("react-native-qrcode-svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var scanner = {
  scan: function scan() {
    return new Promise(function (resolve, reject) {
      _expoBarcodeScanner.BarCodeScanner.requestPermissionsAsync().then(function (_ref) {
        var status = _ref.status;

        if (status !== 'granted') {
          reject();
        }

        resolve(function (_ref2) {
          var size = _ref2.size,
              border = _ref2.border,
              onScan = _ref2.onScan,
              props = _objectWithoutProperties(_ref2, ["size", "border", "onScan"]);

          var style = _reactNative.StyleSheet.absoluteFillObject;

          if (size) {
            style = _objectSpread(_objectSpread({}, style), {}, {
              width: size,
              height: size
            });
          }

          if (border) {
            style = _objectSpread(_objectSpread({}, style), {}, {
              borderRadius: 8,
              overflow: 'hidden'
            });
          }

          return /*#__PURE__*/_react["default"].createElement(_expoBarcodeScanner.BarCodeScanner, _extends({
            barCodeTypes: [_expoBarcodeScanner.BarCodeScanner.Constants.BarCodeType.qr],
            onBarCodeScanned: function onBarCodeScanned(_ref3) {
              var data = _ref3.data;

              try {
                data = JSON.parse(data);
              } catch (e) {// Can't parse data, ignore and return as it
              }

              onScan(data);
            },
            style: style
          }, props));
        });
      })["catch"](reject);
    });
  },
  code: function code() {
    return new Promise(function (resolve) {
      resolve(function (_ref4) {
        var size = _ref4.size,
            value = _ref4.value;
        return /*#__PURE__*/_react["default"].createElement(_reactNativeQrcodeSvg["default"], {
          value: JSON.stringify(value),
          size: size
        });
      });
    });
  }
};
var _default = scanner;
exports["default"] = _default;