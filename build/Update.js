"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var Updates = _interopRequireWildcard(require("expo-updates"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var update = function update(ask) {
  return new Promise(function (resolve, reject) {
    // Check if there is an update
    Updates.checkForUpdateAsync().then(function (_ref) {
      var isAvailable = _ref.isAvailable;

      if (!isAvailable) {
        resolve();
        return;
      } // Just download the new version to the cache


      Updates.fetchUpdateAsync().then(function () {
        ask().then(function (force) {
          if (!force) {
            resolve();
            return;
          }

          Updates.reloadAsync().then(function () {
            resolve();
          })["catch"](reject);
        })["catch"](reject);
      })["catch"](reject);
    })["catch"](reject);
  });
};

var _default = update;
exports["default"] = _default;