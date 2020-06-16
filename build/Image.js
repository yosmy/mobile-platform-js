"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var ImagePicker = _interopRequireWildcard(require("expo-image-picker"));

var ImageManipulator = _interopRequireWildcard(require("expo-image-manipulator"));

var _Permission = _interopRequireDefault(require("./Permission"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var image = {
  pick: function pick() {
    var pick = function pick() {
      return new Promise(function (resolve, reject) {
        ImagePicker.launchImageLibraryAsync({
          mediaTypes: 'Images',
          allowsEditing: true,
          // aspect: [1, 1],
          base64: true
        }).then(function (_ref) {
          var uri = _ref.uri,
              base64 = _ref.base64,
              width = _ref.width,
              height = _ref.height,
              cancelled = _ref.cancelled;

          if (cancelled === true) {
            resolve({
              uri: null,
              base64: null,
              width: null,
              height: null
            });
            return;
          }

          resolve({
            uri: uri,
            base64: "data:image/jpeg;base64,".concat(base64),
            width: width,
            height: height
          });
        })["catch"](reject);
      });
    };

    return new Promise(function (resolve, reject) {
      _Permission["default"].get(_Permission["default"].CAMERA_ROLL).then(function (_ref2) {
        var status = _ref2.status;

        // No permission?
        if (status !== 'granted') {
          // Need to ask for permissions
          _Permission["default"].ask(_Permission["default"].CAMERA_ROLL).then(function (_ref3) {
            var status = _ref3.status;

            // User denied permissions
            if (status !== 'granted') {
              reject();
              return;
            }

            pick().then(function (image) {
              resolve(image);
            })["catch"](reject);
          });

          return;
        }

        pick().then(function (image) {
          resolve(image);
        })["catch"](reject);
      })["catch"](reject);
    });
  },
  take: function take() {
    var take = function take() {
      return new Promise(function (resolve, reject) {
        ImagePicker.launchCameraAsync({
          allowsEditing: true,
          // aspect: [1, 1],
          base64: true
        }).then(function (_ref4) {
          var uri = _ref4.uri,
              base64 = _ref4.base64,
              width = _ref4.width,
              height = _ref4.height,
              cancelled = _ref4.cancelled;

          if (cancelled === true) {
            resolve({
              uri: null,
              base64: uri,
              width: null,
              height: null
            });
            return;
          }

          resolve({
            uri: uri,
            base64: "data:image/jpeg;base64,".concat(base64),
            width: width,
            height: height
          });
        })["catch"](reject);
      });
    };

    return new Promise(function (resolve, reject) {
      _Permission["default"].get(_Permission["default"].CAMERA, _Permission["default"].CAMERA_ROLL).then(function (_ref5) {
        var status = _ref5.status;

        // No permission?
        if (status !== 'granted') {
          // Need to ask for permissions
          _Permission["default"].ask(_Permission["default"].CAMERA, _Permission["default"].CAMERA_ROLL).then(function (_ref6) {
            var status = _ref6.status;

            // User denied permissions
            if (status !== 'granted') {
              reject();
              return;
            }

            take().then(resolve)["catch"](reject);
          });

          return;
        }

        take().then(resolve)["catch"](reject);
      })["catch"](reject);
    });
  },
  resize: function resize(uri, width, height, compress) {
    return new Promise(function (resolve, reject) {
      ImageManipulator.manipulateAsync(uri, [{
        resize: {
          width: width,
          height: height
        }
      }], {
        compress: compress,
        base64: true
      }).then(function (_ref7) {
        var uri = _ref7.uri,
            base64 = _ref7.base64;
        resolve({
          uri: uri,
          base64: "data:image/jpeg;base64,".concat(base64)
        });
      })["catch"](reject);
    });
  }
};
var _default = image;
exports["default"] = _default;