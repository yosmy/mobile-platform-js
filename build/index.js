"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Application = _interopRequireDefault(require("./Application"));

var _Back = _interopRequireDefault(require("./Back"));

var _Cache = _interopRequireDefault(require("./Cache"));

var _Cellular = _interopRequireDefault(require("./Cellular"));

var _Clipboard = _interopRequireDefault(require("./Clipboard"));

var _Contact = _interopRequireDefault(require("./Contact"));

var _Device = _interopRequireDefault(require("./Device"));

var _Dimension = _interopRequireDefault(require("./Dimension"));

var _Haptics = _interopRequireDefault(require("./Haptics"));

var _Image = _interopRequireDefault(require("./Image"));

var _Linking = _interopRequireDefault(require("./Linking"));

var _Localization = _interopRequireDefault(require("./Localization"));

var _Network = _interopRequireDefault(require("./Network"));

var _Notification = _interopRequireDefault(require("./Notification"));

var _Review = _interopRequireDefault(require("./Review"));

var _Scanner = _interopRequireDefault(require("./Scanner"));

var _Secure = _interopRequireDefault(require("./Secure"));

var _Select = _interopRequireDefault(require("./Select"));

var _Share = _interopRequireDefault(require("./Share"));

var _Store = _interopRequireDefault(require("./Store"));

var _Update = _interopRequireDefault(require("./Update"));

var _Vibration = _interopRequireDefault(require("./Vibration"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  application: _Application["default"],
  cellular: _Cellular["default"],
  device: _Device["default"],
  network: _Network["default"],
  back: _Back["default"],
  cache: _Cache["default"],
  clipboard: _Clipboard["default"],
  contact: _Contact["default"],
  dimension: _Dimension["default"],
  haptics: _Haptics["default"],
  image: _Image["default"],
  linking: _Linking["default"],
  localization: _Localization["default"],
  notification: _Notification["default"],
  review: _Review["default"],
  scanner: _Scanner["default"],
  secure: _Secure["default"],
  select: _Select["default"],
  share: _Share["default"],
  store: _Store["default"],
  update: _Update["default"],
  vibration: _Vibration["default"]
};
exports["default"] = _default;