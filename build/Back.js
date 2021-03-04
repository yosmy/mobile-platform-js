"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactNative = require("react-native");

var back = {
  add: function add(func) {
    _reactNative.BackHandler.addEventListener('hardwareBackPress', func);
  },
  remove: function remove(func) {
    _reactNative.BackHandler.removeEventListener('hardwareBackPress', func);
  }
};
var _default = back;
exports["default"] = _default;