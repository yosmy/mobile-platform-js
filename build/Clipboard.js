"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactNative = require("react-native");

var clipboard = {
  set: function set(value) {
    _reactNative.Clipboard.setString(value);
  }
};
var _default = clipboard;
exports["default"] = _default;