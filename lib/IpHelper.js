(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("IpHelper", [], factory);
	else if(typeof exports === 'object')
		exports["IpHelper"] = factory();
	else
		root["IpHelper"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IpHelper = IpHelper;

//  class Library {
//   constructor() {
//     this._name = 'Library';
//   }
//   get name() {
//     return this._name;
//   }
// };


function IpHelper() {
  this.ip2int = function (ip) {
    var num = 0;
    var REG = /^[ ]*([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])[ ]*\.[ ]*([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])[ ]*\.[ ]*([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])[ ]*\.[ ]*([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])[ ]*$/;
    var result = REG.exec(ip);
    if (!result) {
      return -1;
    }
    num = +result[1] * 256 * 256 * 256 + Number(+result[2]) * 256 * 256 + Number(+result[3]) * 256 + Number(+result[4]);
    return num;
  };
}

//module.exports = IpHelper;

/***/ })
/******/ ]);
});
//# sourceMappingURL=IpHelper.js.map