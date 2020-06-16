"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _expo = require("expo");

var notification = {
  getToken: function getToken() {
    return _expo.Notifications.getExpoPushTokenAsync();
  },
  getRawToken: function getRawToken(config) {
    return new Promise(function (resolve, reject) {
      _expo.Notifications.getDevicePushTokenAsync(config).then(function (_ref) {
        var data = _ref.data;
        resolve(data);
      })["catch"](reject);
    });
  },
  createGroup: function createGroup(id, options) {
    if (Platform.OS !== 'android') {
      return new Promise(function (resolve) {
        resolve();
      });
    }

    return _expo.Notifications.createChannelAndroidAsync(id, options);
  },
  listen: function listen(listener) {
    return _expo.Notifications.addListener(listener);
  },
  clear: function clear() {
    return _expo.Notifications.setBadgeNumberAsync(0);
  }
};
var _default = notification;
exports["default"] = _default;