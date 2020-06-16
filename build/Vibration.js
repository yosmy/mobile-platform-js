"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactNative = require("react-native");

var vibration = {
  start: function start(value) {
    _reactNative.Vibration.vibrate(value);
  }
};
var _default = vibration;
exports["default"] = _default;