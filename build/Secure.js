"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var SecureStore = _interopRequireWildcard(require("expo-secure-store"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var secure = {
  set: function set(key, value) {
    value = JSON.stringify(value);
    return SecureStore.setItemAsync(key, value);
  },
  get: function get(key) {
    return new Promise(function (resolve, reject) {
      SecureStore.getItemAsync(key).then(function (value) {
        if (value === null) {
          resolve(undefined);
          return;
        }

        value = JSON.parse(value);
        resolve(value);
      })["catch"](function (e) {
        SecureStore.deleteItemAsync(key).then(function () {})["catch"](function () {});
        reject(e);
      });
    });
  },
  "delete": function _delete(key) {
    return SecureStore.deleteItemAsync(key);
  }
};
var _default = secure;
exports["default"] = _default;