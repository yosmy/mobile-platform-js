"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var Cellular = _interopRequireWildcard(require("expo-cellular"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var cellular = {
  raw: function raw() {
    return new Promise(function (resolve) {
      Promise.all([new Promise(function (resolve) {
        resolve(Cellular.allowsVoip);
      }), new Promise(function (resolve) {
        resolve(Cellular.carrier);
      }), new Promise(function (resolve) {
        resolve(Cellular.isoCountryCode);
      }), new Promise(function (resolve) {
        resolve(Cellular.mobileCountryCode);
      }), new Promise(function (resolve) {
        resolve(Cellular.mobileNetworkCode);
      }), new Promise(function (resolve) {
        Cellular.getCellularGenerationAsync().then(resolve)["catch"](function () {
          resolve(null);
        });
      })]).then(function (result) {
        resolve({
          allowsVoip: result[0],
          carrier: result[1],
          isoCountryCode: result[2],
          mobileCountryCode: result[3],
          mobileNetworkCode: result[4],
          cellularGeneration: result[5]
        });
      });
    });
  }
};
var _default = cellular;
exports["default"] = _default;