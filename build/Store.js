"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactNative = require("react-native");

var store = {
  set: function set(key, value) {
    value = JSON.stringify(value);
    return _reactNative.AsyncStorage.setItem(key, value);
  },
  get: function get(key) {
    return new Promise(function (resolve) {
      _reactNative.AsyncStorage.getItem(key).then(function (value) {
        if (value === null) {
          resolve(undefined);
          return;
        }

        value = JSON.parse(value);
        resolve(value);
      });
    });
  },
  "delete": function _delete(key) {
    return _reactNative.AsyncStorage.removeItem(key);
  },
  clear: function clear() {
    return _reactNative.AsyncStorage.clear();
  }
};
var _default = store;
exports["default"] = _default;