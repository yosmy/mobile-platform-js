"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactNative = require("react-native");

var vibration = {
  start: function start(pattern, repeat) {
    _reactNative.Vibration.vibrate(pattern, repeat);
  }
};
var _default = vibration;
exports["default"] = _default;