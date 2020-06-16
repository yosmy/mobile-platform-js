"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactNative = require("react-native");

var share = function share(title, message, url) {
  return new Promise(function (resolve, reject) {
    _reactNative.Share.share({
      title: title,
      message: message,
      url: url
    }, {
      subject: title,
      dialogTitle: title
    }).then(function () {
      resolve();
    })["catch"](reject);
  });
};

var _default = share;
exports["default"] = _default;