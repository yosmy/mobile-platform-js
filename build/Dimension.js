"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Props = exports.dimension = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var dimension = {
  /* https://ricostacruz.com/til/css-media-query-breakpoints */
  is0Up: function is0Up() {
    return true;
  },
  is4Up: function is4Up() {
    return _reactNative.Dimensions.get('window').width >= 480;
  },
  is7Up: function is7Up() {
    return _reactNative.Dimensions.get('window').width >= 768;
  },
  is9Up: function is9Up() {
    return _reactNative.Dimensions.get('window').width >= 992;
  },
  is12Up: function is12Up() {
    return _reactNative.Dimensions.get('window').width >= 1200;
  },
  is4Down: function is4Down() {
    return _reactNative.Dimensions.get('window').width < 480;
  },
  is7Down: function is7Down() {
    return _reactNative.Dimensions.get('window').width < 768;
  },
  is9Down: function is9Down() {
    return _reactNative.Dimensions.get('window').width < 992;
  },
  is12Down: function is12Down() {
    return true;
  },
  get: function get(dim) {
    return _reactNative.Dimensions.get(dim);
  },
  withWidth: function withWidth() {
    return function (Component) {
      return function (props) {
        return /*#__PURE__*/React.createElement(Component, _extends({
          width: _reactNative.Dimensions.get('window').width
        }, props));
      };
    };
  }
};
exports.dimension = dimension;

var Props = _propTypes["default"].shape({
  get: _propTypes["default"].func.isRequired
});

exports.Props = Props;