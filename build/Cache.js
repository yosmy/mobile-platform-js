"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var FileSystem = _interopRequireWildcard(require("expo-file-system"));

var _sha = _interopRequireDefault(require("crypto-js/sha1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var dir = "".concat(FileSystem.cacheDirectory, "cache");

var uri = function uri(key) {
  return "".concat(cache, "/").concat((0, _sha["default"])(key));
};

var memory;
var cache = {
  init: function init() {
    memory = {
      table: [],
      data: []
    };
    return FileSystem.makeDirectoryAsync(dir);
  },
  set: function set(key, value) {
    var found = memory.table.indexOf(key) !== -1;

    if (found) {
      memory.data = memory.data.map(function (item) {
        if (item.key === key) {
          // New item with new value
          return {
            key: item.key,
            value: value
          };
        } // Same item


        return item;
      });
    } else {
      memory.table = memory.table.concat(key);
      memory.data = memory.data.concat({
        key: key,
        value: value
      });
    }

    value = JSON.stringify(value);
    return FileSystem.writeAsStringAsync(uri(key), value);
  },
  get: function get(key) {
    var found = memory.table.indexOf(key) !== -1;

    if (found) {
      return new Promise(function (resolve) {
        var _memory$data$find = memory.data.find(function (item) {
          return item.key === key;
        }),
            value = _memory$data$find.value;

        resolve(value);
      });
    }

    return new Promise(function (resolve) {
      FileSystem.readAsStringAsync(uri(key)).then(function (value) {
        value = JSON.parse(value);
        memory.table.push(key);
        memory.data.push({
          key: key,
          value: value
        });
        resolve(value);
      })["catch"](function () {
        resolve(undefined);
      });
    });
  },
  "delete": function _delete(key) {
    memory = {
      table: memory.table.filter(function (item) {
        return item !== key;
      }),
      data: memory.data.filter(function (item) {
        return item.key !== key;
      })
    };
    return new Promise(function (resolve, reject) {
      FileSystem.deleteAsync(uri(key)).then(resolve)["catch"](function (e) {
        console.log('Error deleting cache with key: ', key);
        reject(e);
      });
    });
  },
  purge: function purge() {
    memory = null;
    return FileSystem.deleteAsync(dir);
  },
  count: function count() {
    return memory.table.length; // return new Promise((resolve, reject) => {
    //     return FileSystem.readDirectoryAsync(dir)
    //         .then((files) => {
    //             resolve(files.length);
    //         })
    //         .catch(reject)
    // });
  }
};
var _default = cache;
exports["default"] = _default;