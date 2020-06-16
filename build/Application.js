"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var Application = _interopRequireWildcard(require("expo-application"));

var _expoConstants = _interopRequireDefault(require("expo-constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var application = {
  revision: _expoConstants["default"].manifest.revisionId,
  raw: function raw() {
    return new Promise(function (resolve) {
      Promise.all([new Promise(function (resolve) {
        resolve(Application.applicationName);
      }), new Promise(function (resolve) {
        resolve(Application.applicationId);
      }), new Promise(function (resolve) {
        resolve(Application.nativeApplicationVersion);
      }), new Promise(function (resolve) {
        resolve(Application.nativeBuildVersion);
      }), new Promise(function (resolve) {
        resolve(Application.androidId);
      }), new Promise(function (resolve) {
        if (Platform.OS !== 'ios') {
          resolve(null);
          return;
        }

        Application.getIosIdForVendorAsync().then(resolve)["catch"](function () {
          resolve(null);
        });
      }), new Promise(function (resolve) {
        if (Platform.OS !== 'android') {
          resolve(null);
          return;
        }

        Application.getInstallReferrerAsync().then(resolve)["catch"](function () {
          resolve(null);
        });
      })]).then(function (result) {
        resolve({
          applicationName: result[0],
          applicationId: result[1],
          nativeApplicationVersion: result[2],
          nativeBuildVersion: result[3],
          androidId: result[4],
          iosIdForVendor: result[5],
          installReferrer: result[6]
        });
      });
    });
  }
};
var _default = application;
exports["default"] = _default;