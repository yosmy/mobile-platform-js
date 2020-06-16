"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactNative = require("react-native");

var linking = {
  mail: function mail(email) {
    var subject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var url = "mailto:".concat(email);

    if (subject) {
      url = "".concat(url, "?subject=").concat(subject);
    }

    return _reactNative.Linking.openURL(url);
  },
  url: function url(_url) {
    return _reactNative.Linking.openURL(_url);
  }
};
var _default = linking;
exports["default"] = _default;