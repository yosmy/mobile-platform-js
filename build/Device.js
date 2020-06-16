"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _expoConstants = _interopRequireDefault(require("expo-constants"));

var Device = _interopRequireWildcard(require("expo-device"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var device = {
  expo: _expoConstants["default"].appOwnership === 'expo',
  installation: _expoConstants["default"].installationId,
  experience: _expoConstants["default"].manifest.id,
  "package": function _package() {
    return Platform.OS === 'android' ? _expoConstants["default"].manifest.android["package"] : _expoConstants["default"].manifest.ios.bundleIdentifier;
  },
  raw: function raw() {
    return new Promise(function (resolve) {
      Promise.all([new Promise(function (resolve) {
        resolve(Device.isDevice);
      }), new Promise(function (resolve) {
        resolve(Device.brand);
      }), new Promise(function (resolve) {
        resolve(Device.manufacturer);
      }), new Promise(function (resolve) {
        resolve(Device.modelName);
      }), new Promise(function (resolve) {
        resolve(Device.modelId);
      }), new Promise(function (resolve) {
        resolve(Device.designName);
      }), new Promise(function (resolve) {
        resolve(Device.productName);
      }), new Promise(function (resolve) {
        resolve(Device.deviceYearClass);
      }), new Promise(function (resolve) {
        resolve(Device.totalMemory);
      }), new Promise(function (resolve) {
        resolve(Device.supportedCpuArchitectures);
      }), new Promise(function (resolve) {
        resolve(Device.osName);
      }), new Promise(function (resolve) {
        resolve(Device.osVersion);
      }), new Promise(function (resolve) {
        resolve(Device.osBuildId);
      }), new Promise(function (resolve) {
        resolve(Device.osInternalBuildId);
      }), new Promise(function (resolve) {
        resolve(Device.osBuildFingerprint);
      }), new Promise(function (resolve) {
        resolve(Device.platformApiLevel);
      }), new Promise(function (resolve) {
        resolve(Device.deviceName);
      }), new Promise(function (resolve) {
        Device.getDeviceTypeAsync().then(resolve)["catch"](function () {
          resolve(null);
        });
      }), new Promise(function (resolve) {
        Device.getUptimeAsync().then(resolve)["catch"](function () {
          resolve(null);
        });
      }), new Promise(function (resolve) {
        if (Platform.OS !== 'android') {
          resolve(null);
          return;
        }

        Device.getMaxMemoryAsync().then(resolve)["catch"](function () {
          resolve(null);
        });
      }), new Promise(function (resolve) {
        Device.isRootedExperimentalAsync().then(resolve)["catch"](function () {
          resolve(null);
        });
      }), new Promise(function (resolve) {
        if (Platform.OS !== 'android') {
          resolve(null);
          return;
        }

        Device.isSideLoadingEnabledAsync().then(resolve)["catch"](function () {
          resolve(null);
        });
      }), new Promise(function (resolve) {
        resolve(_expoConstants["default"].installationId);
      })]).then(function (result) {
        resolve({
          isDevice: result[0],
          brand: result[1],
          manufacturer: result[2],
          modelName: result[3],
          modelId: result[4],
          designName: result[5],
          productName: result[6],
          deviceYearClass: result[7],
          totalMemory: result[8],
          supportedCpuArchitectures: result[9],
          osName: result[10],
          osVersion: result[11],
          osBuildId: result[12],
          osInternalBuildId: result[13],
          osBuildFingerprint: result[14],
          platformApiLevel: result[15],
          deviceName: result[16],
          deviceType: result[17],
          uptime: result[18],
          maxMemory: result[19],
          isRooted: result[20],
          isSideLoadingEnabled: result[21],
          installationId: result[22]
        });
      });
    });
  }
};
var _default = device;
exports["default"] = _default;