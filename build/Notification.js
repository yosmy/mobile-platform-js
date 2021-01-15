"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var Notifications = _interopRequireWildcard(require("expo-notifications"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var notification = {
  getExpoToken: function getExpoToken() {
    return Notifications.getExpoPushTokenAsync();
  },
  getRawToken: function getRawToken(config) {
    return new Promise(function (resolve, reject) {
      Notifications.getDevicePushTokenAsync(config).then(function (_ref) {
        var data = _ref.data;
        resolve(data);
      })["catch"](reject);
    });
  },
  prepare: function prepare() {
    return new Promise(function (resolve, reject) {
      Notifications.getPermissionsAsync().then(function (settings) {
        var _settings$ios;

        if (settings.granted || ((_settings$ios = settings.ios) === null || _settings$ios === void 0 ? void 0 : _settings$ios.status) === Notifications.IosAuthorizationStatus.PROVISIONAL) {
          resolve();
          return;
        }

        Notifications.requestPermissionsAsync({
          ios: {
            allowAlert: true,
            allowBadge: true,
            allowSound: true
          }
        }).then(resolve)["catch"](reject);
      })["catch"](reject);
    });
  },
  createGroup: function createGroup(id, name) {
    if (Platform.OS !== 'android') {
      return new Promise(function (resolve) {
        resolve();
      });
    }

    return Notifications.setNotificationChannelAsync(id, {
      name: name,
      sound: "default",
      vibrationPattern: [0, 250, 250, 250]
    });
  },
  listen: function listen(listener) {
    return Notifications.addNotificationReceivedListener(listener);
  }
};
var _default = notification;
exports["default"] = _default;