(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("test-promise", [], factory);
	else if(typeof exports === 'object')
		exports["test-promise"] = factory();
	else
		root["test-promise"] = factory();
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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Promise = __webpack_require__(1);
	
	var _Promise2 = _interopRequireDefault(_Promise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Promise2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _index = __webpack_require__(12);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _constant = __webpack_require__(10);
	
	var _constant2 = _interopRequireDefault(_constant);
	
	var _core = __webpack_require__(11);
	
	var _core2 = _interopRequireDefault(_core);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function ES6Promise(resolver) {
	  var _this = this;
	
	  if (!(this instanceof ES6Promise)) {
	    throw new Error('You must use `new` operator to instance Promise');
	  }
	  if (typeof resolver !== 'function') {
	    throw new Error('You must pass a resolver function as the first argument to \n      the Promise constructor.');
	  }
	
	  this.state = _constant2.default.STATE_PENDING;
	
	  resolver(function (val) {
	    _core2.default.resolve(_this, val);
	  }, function (reason) {
	    _core2.default.reject(_this, reason);
	  });
	}
	
	ES6Promise.all = _index2.default.all;
	ES6Promise.resolve = _index2.default.resolve;
	ES6Promise.reject = _index2.default.reject;
	ES6Promise.race = _index2.default.race;
	
	ES6Promise.prototype.constructor = ES6Promise;
	
	ES6Promise.prototype.then = _index2.default.then;
	
	ES6Promise.prototype.catch = _index2.default.promiseCatch;
	
	exports.default = ES6Promise;

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var STATE_FULFILLED = 'STATE_FULFILLED';
	var STATE_REJECTED = 'STATE_REJECTED';
	var STATE_PENDING = 'STATE_PENDING';
	
	exports.default = {
	  STATE_FULFILLED: STATE_FULFILLED, STATE_PENDING: STATE_PENDING, STATE_REJECTED: STATE_REJECTED
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function resolve(promise, value) {}
	
	function reject(promise, reason) {}
	
	exports.default = {
	  resolve: resolve, reject: reject
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _all = __webpack_require__(13);
	
	var _all2 = _interopRequireDefault(_all);
	
	var _race = __webpack_require__(14);
	
	var _race2 = _interopRequireDefault(_race);
	
	var _resolve = __webpack_require__(15);
	
	var _resolve2 = _interopRequireDefault(_resolve);
	
	var _reject = __webpack_require__(16);
	
	var _reject2 = _interopRequireDefault(_reject);
	
	var _then = __webpack_require__(17);
	
	var _then2 = _interopRequireDefault(_then);
	
	var _catch = __webpack_require__(18);
	
	var _catch2 = _interopRequireDefault(_catch);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  all: _all2.default, race: _race2.default, resolve: _resolve2.default, reject: _reject2.default, then: _then2.default, promiseCatch: _catch2.default
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function all() {}
	
	exports.default = all;

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function race() {}
	
	exports.default = race;

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function resolve() {}
	
	exports.default = resolve;

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function reject() {}
	
	exports.default = reject;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constant = __webpack_require__(10);
	
	var _constant2 = _interopRequireDefault(_constant);
	
	var _core = __webpack_require__(11);
	
	var _core2 = _interopRequireDefault(_core);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function then(onFulfill, onRejected) {
	  var promise = this;
	
	  switch (promise.state) {
	    case _constant2.default.STATE_PENDING:
	      break;
	    case _constant2.default.STATE_FULFILLED:
	      break;
	    case _constant2.default.STATE_REJECTED:
	      break;
	    default:
	      throw new Error('Unexpected Promise state: ' + promise.state + '.');
	  }
	}
	
	exports.default = then;

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function promiseCatch() {}
	
	exports.default = promiseCatch;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=test-promise.js.map