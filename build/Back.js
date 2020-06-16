"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Props = exports.back = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var back = {
  add: function add(func) {
    _reactNative.BackHandler.addEventListener('hardwareBackPress', func);
  },
  remove: function remove(func) {
    _reactNative.BackHandler.removeEventListener('hardwareBackPress', func);
  }
};
exports.back = back;

var Props = _propTypes["default"].shape({
  add: _propTypes["default"].func.isRequired,
  remove: _propTypes["default"].func.isRequired
});

exports.Props = Props;