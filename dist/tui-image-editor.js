/*!
 * tui-image-editor.js
 * @version 3.14.3
 * @author NHN. FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("fabric")["fabric"], require("tui-code-snippet"));
	else if(typeof define === 'function' && define.amd)
		define(["fabric", "tui-code-snippet"], factory);
	else if(typeof exports === 'object')
		exports["ImageEditor"] = factory(require("fabric")["fabric"], require("tui-code-snippet"));
	else
		root["tui"] = root["tui"] || {}, root["tui"]["ImageEditor"] = factory(root["fabric"], root["tui"]["util"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_fabric__, __WEBPACK_EXTERNAL_MODULE_tui_code_snippet__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/core-js-pure/es/promise/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/es/promise/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.aggregate-error */ "./node_modules/core-js-pure/modules/es.aggregate-error.js");
__webpack_require__(/*! ../../modules/es.object.to-string */ "./node_modules/core-js-pure/modules/es.object.to-string.js");
__webpack_require__(/*! ../../modules/es.promise */ "./node_modules/core-js-pure/modules/es.promise.js");
__webpack_require__(/*! ../../modules/es.promise.all-settled */ "./node_modules/core-js-pure/modules/es.promise.all-settled.js");
__webpack_require__(/*! ../../modules/es.promise.any */ "./node_modules/core-js-pure/modules/es.promise.any.js");
__webpack_require__(/*! ../../modules/es.promise.finally */ "./node_modules/core-js-pure/modules/es.promise.finally.js");
__webpack_require__(/*! ../../modules/es.string.iterator */ "./node_modules/core-js-pure/modules/es.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom-collections.iterator */ "./node_modules/core-js-pure/modules/web.dom-collections.iterator.js");
var path = __webpack_require__(/*! ../../internals/path */ "./node_modules/core-js-pure/internals/path.js");

module.exports = path.Promise;


/***/ }),

/***/ "./node_modules/core-js-pure/features/promise/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/features/promise/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/promise */ "./node_modules/core-js-pure/es/promise/index.js");
__webpack_require__(/*! ../../modules/esnext.aggregate-error */ "./node_modules/core-js-pure/modules/esnext.aggregate-error.js");
// TODO: Remove from `core-js@4`
__webpack_require__(/*! ../../modules/esnext.promise.all-settled */ "./node_modules/core-js-pure/modules/esnext.promise.all-settled.js");
__webpack_require__(/*! ../../modules/esnext.promise.try */ "./node_modules/core-js-pure/modules/esnext.promise.try.js");
__webpack_require__(/*! ../../modules/esnext.promise.any */ "./node_modules/core-js-pure/modules/esnext.promise.any.js");

module.exports = parent;


/***/ }),

/***/ "./node_modules/core-js-pure/internals/a-function.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/a-function.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/a-possible-prototype.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/a-possible-prototype.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js-pure/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/add-to-unscopables.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/add-to-unscopables.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js-pure/internals/an-instance.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/an-instance.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/an-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/an-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js-pure/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-includes.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-includes.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js-pure/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js-pure/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js-pure/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/check-correctness-of-iteration.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/check-correctness-of-iteration.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js-pure/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/classof-raw.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/classof-raw.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/classof.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/classof.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js-pure/internals/to-string-tag-support.js");
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js-pure/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js-pure/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/correct-prototype-getter.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/correct-prototype-getter.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js-pure/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "./node_modules/core-js-pure/internals/create-iterator-constructor.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-iterator-constructor.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js-pure/internals/iterators-core.js").IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js-pure/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js-pure/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js-pure/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js-pure/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/create-non-enumerable-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-non-enumerable-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js-pure/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js-pure/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js-pure/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/create-property-descriptor.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-property-descriptor.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/define-iterator.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/define-iterator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js-pure/internals/export.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js-pure/internals/create-iterator-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js-pure/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js-pure/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js-pure/internals/set-to-string-tag.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js-pure/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js-pure/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js-pure/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js-pure/internals/is-pure.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js-pure/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js-pure/internals/iterators-core.js");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/descriptors.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/descriptors.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js-pure/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "./node_modules/core-js-pure/internals/document-create-element.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/document-create-element.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js-pure/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/dom-iterables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/dom-iterables.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/engine-is-browser.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/engine-is-browser.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = typeof window == 'object';


/***/ }),

/***/ "./node_modules/core-js-pure/internals/engine-is-ios.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/engine-is-ios.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js-pure/internals/engine-user-agent.js");

module.exports = /(?:iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),

/***/ "./node_modules/core-js-pure/internals/engine-is-node.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/engine-is-node.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js-pure/internals/classof-raw.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ "./node_modules/core-js-pure/internals/engine-is-webos-webkit.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/engine-is-webos-webkit.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js-pure/internals/engine-user-agent.js");

module.exports = /web0s(?!.*chrome)/i.test(userAgent);


/***/ }),

/***/ "./node_modules/core-js-pure/internals/engine-user-agent.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/engine-user-agent.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js-pure/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/core-js-pure/internals/engine-v8-version.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/engine-v8-version.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js-pure/internals/engine-user-agent.js");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "./node_modules/core-js-pure/internals/enum-bug-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/enum-bug-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js-pure/internals/export.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/export.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js").f;
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js-pure/internals/is-forced.js");
var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js-pure/internals/path.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js-pure/internals/function-bind-context.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js-pure/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js-pure/internals/has.js");

var wrapConstructor = function (NativeConstructor) {
  var Wrapper = function (a, b, c) {
    if (this instanceof NativeConstructor) {
      switch (arguments.length) {
        case 0: return new NativeConstructor();
        case 1: return new NativeConstructor(a);
        case 2: return new NativeConstructor(a, b);
      } return new NativeConstructor(a, b, c);
    } return NativeConstructor.apply(this, arguments);
  };
  Wrapper.prototype = NativeConstructor.prototype;
  return Wrapper;
};

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var PROTO = options.proto;

  var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : (global[TARGET] || {}).prototype;

  var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {});
  var targetPrototype = target.prototype;

  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

  for (key in source) {
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contains in native
    USE_NATIVE = !FORCED && nativeSource && has(nativeSource, key);

    targetProperty = target[key];

    if (USE_NATIVE) if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(nativeSource, key);
      nativeProperty = descriptor && descriptor.value;
    } else nativeProperty = nativeSource[key];

    // export native or implementation
    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

    if (USE_NATIVE && typeof targetProperty === typeof sourceProperty) continue;

    // bind timers to global for call from export context
    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global);
    // wrap global constructors for prevent changs in this version
    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
    // make static versions for prototype methods
    else if (PROTO && typeof sourceProperty == 'function') resultProperty = bind(Function.call, sourceProperty);
    // default case
    else resultProperty = sourceProperty;

    // add a flag to not completely full polyfills
    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(resultProperty, 'sham', true);
    }

    target[key] = resultProperty;

    if (PROTO) {
      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
      if (!has(path, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
      }
      // export virtual prototype methods
      path[VIRTUAL_PROTOTYPE][key] = sourceProperty;
      // export real prototype methods
      if (options.real && targetPrototype && !targetPrototype[key]) {
        createNonEnumerableProperty(targetPrototype, key, sourceProperty);
      }
    }
  }
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/fails.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/fails.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/function-bind-context.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/function-bind-context.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js-pure/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/get-built-in.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/get-built-in.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js-pure/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/get-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/get-iterator-method.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js-pure/internals/classof.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js-pure/internals/iterators.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js-pure/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/global.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/global.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js-pure/internals/has.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/has.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js-pure/internals/to-object.js");

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/hidden-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/hidden-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/host-report-errors.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/host-report-errors.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/html.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/html.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js-pure/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/core-js-pure/internals/ie8-dom-define.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/ie8-dom-define.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js-pure/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js-pure/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js-pure/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js-pure/internals/indexed-object.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/indexed-object.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js-pure/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js-pure/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js-pure/internals/inspect-source.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/inspect-source.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js-pure/internals/shared-store.js");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "./node_modules/core-js-pure/internals/internal-state.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/internal-state.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js-pure/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js-pure/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js-pure/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js-pure/internals/has.js");
var shared = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js-pure/internals/shared-store.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js-pure/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js-pure/internals/hidden-keys.js");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-array-iterator-method.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-array-iterator-method.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js-pure/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js-pure/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-forced.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-forced.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js-pure/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-pure.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-pure.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js-pure/internals/iterate.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/iterate.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js-pure/internals/an-object.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js-pure/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js-pure/internals/to-length.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js-pure/internals/function-bind-context.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js-pure/internals/get-iterator-method.js");
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "./node_modules/core-js-pure/internals/iterator-close.js");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/iterator-close.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/iterator-close.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js-pure/internals/an-object.js");

module.exports = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/iterators-core.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/iterators-core.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js-pure/internals/fails.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js-pure/internals/object-get-prototype-of.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js-pure/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js-pure/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js-pure/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js-pure/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/iterators.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/iterators.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/microtask.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/microtask.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js").f;
var macrotask = __webpack_require__(/*! ../internals/task */ "./node_modules/core-js-pure/internals/task.js").set;
var IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ "./node_modules/core-js-pure/internals/engine-is-ios.js");
var IS_WEBOS_WEBKIT = __webpack_require__(/*! ../internals/engine-is-webos-webkit */ "./node_modules/core-js-pure/internals/engine-is-webos-webkit.js");
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "./node_modules/core-js-pure/internals/engine-is-node.js");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise;
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/native-promise-constructor.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/native-promise-constructor.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");

module.exports = global.Promise;


/***/ }),

/***/ "./node_modules/core-js-pure/internals/native-symbol.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/native-symbol.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js-pure/internals/engine-v8-version.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js-pure/internals/fails.js");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  return !String(Symbol()) ||
    // Chrome 38 Symbol has incorrect toString conversion
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "./node_modules/core-js-pure/internals/native-weak-map.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/native-weak-map.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js-pure/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "./node_modules/core-js-pure/internals/new-promise-capability.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/new-promise-capability.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js-pure/internals/a-function.js");

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js-pure/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js-pure/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js-pure/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js-pure/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js-pure/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js-pure/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js-pure/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-define-properties.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-define-properties.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js-pure/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js-pure/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js-pure/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js-pure/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-define-property.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-define-property.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js-pure/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js-pure/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js-pure/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js-pure/internals/to-primitive.js");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js-pure/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js-pure/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js-pure/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js-pure/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js-pure/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js-pure/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js-pure/internals/ie8-dom-define.js");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-get-prototype-of.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-get-prototype-of.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js-pure/internals/has.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js-pure/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js-pure/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js-pure/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-keys-internal.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-keys-internal.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js-pure/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js-pure/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js-pure/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js-pure/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js-pure/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js-pure/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-property-is-enumerable.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-property-is-enumerable.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-set-prototype-of.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-set-prototype-of.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js-pure/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "./node_modules/core-js-pure/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-to-string.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-to-string.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js-pure/internals/to-string-tag-support.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js-pure/internals/classof.js");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/path.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/path.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/perform.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/perform.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/promise-resolve.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/promise-resolve.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js-pure/internals/an-object.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js-pure/internals/is-object.js");
var newPromiseCapability = __webpack_require__(/*! ../internals/new-promise-capability */ "./node_modules/core-js-pure/internals/new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/redefine-all.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/redefine-all.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js-pure/internals/redefine.js");

module.exports = function (target, src, options) {
  for (var key in src) {
    if (options && options.unsafe && target[key]) target[key] = src[key];
    else redefine(target, key, src[key], options);
  } return target;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/redefine.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/redefine.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js-pure/internals/create-non-enumerable-property.js");

module.exports = function (target, key, value, options) {
  if (options && options.enumerable) target[key] = value;
  else createNonEnumerableProperty(target, key, value);
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/require-object-coercible.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/require-object-coercible.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/set-global.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/set-global.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js-pure/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/set-species.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/set-species.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js-pure/internals/get-built-in.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js-pure/internals/object-define-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js-pure/internals/well-known-symbol.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js-pure/internals/descriptors.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/set-to-string-tag.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/set-to-string-tag.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js-pure/internals/to-string-tag-support.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js-pure/internals/object-define-property.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js-pure/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js-pure/internals/has.js");
var toString = __webpack_require__(/*! ../internals/object-to-string */ "./node_modules/core-js-pure/internals/object-to-string.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js-pure/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC, SET_METHOD) {
  if (it) {
    var target = STATIC ? it : it.prototype;
    if (!has(target, TO_STRING_TAG)) {
      defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
    }
    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
      createNonEnumerableProperty(target, 'toString', toString);
    }
  }
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/shared-key.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/shared-key.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js-pure/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js-pure/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/shared-store.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/shared-store.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js-pure/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js-pure/internals/shared.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/shared.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js-pure/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js-pure/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.13.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js-pure/internals/species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js-pure/internals/an-object.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js-pure/internals/a-function.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js-pure/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/string-multibyte.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/string-multibyte.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js-pure/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js-pure/internals/require-object-coercible.js");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/task.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/task.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js-pure/internals/fails.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js-pure/internals/function-bind-context.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js-pure/internals/html.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js-pure/internals/document-create-element.js");
var IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ "./node_modules/core-js-pure/internals/engine-is-ios.js");
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "./node_modules/core-js-pure/internals/engine-is-node.js");

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins -- safe
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func -- spec requirement
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    typeof postMessage == 'function' &&
    !global.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-absolute-index.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-absolute-index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js-pure/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-indexed-object.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-indexed-object.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js-pure/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js-pure/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-integer.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-integer.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-length.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-length.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js-pure/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js-pure/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-primitive.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-primitive.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js-pure/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-string-tag-support.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-string-tag-support.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js-pure/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "./node_modules/core-js-pure/internals/uid.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/uid.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/use-symbol-as-uid.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/use-symbol-as-uid.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js-pure/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js-pure/internals/well-known-symbol.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/well-known-symbol.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js-pure/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js-pure/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js-pure/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js-pure/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js-pure/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.aggregate-error.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.aggregate-error.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js-pure/internals/export.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js-pure/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js-pure/internals/object-set-prototype-of.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js-pure/internals/object-create.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js-pure/internals/create-non-enumerable-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js-pure/internals/create-property-descriptor.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js-pure/internals/iterate.js");

var $AggregateError = function AggregateError(errors, message) {
  var that = this;
  if (!(that instanceof $AggregateError)) return new $AggregateError(errors, message);
  if (setPrototypeOf) {
    // eslint-disable-next-line unicorn/error-message -- expected
    that = setPrototypeOf(new Error(undefined), getPrototypeOf(that));
  }
  if (message !== undefined) createNonEnumerableProperty(that, 'message', String(message));
  var errorsArray = [];
  iterate(errors, errorsArray.push, { that: errorsArray });
  createNonEnumerableProperty(that, 'errors', errorsArray);
  return that;
};

$AggregateError.prototype = create(Error.prototype, {
  constructor: createPropertyDescriptor(5, $AggregateError),
  message: createPropertyDescriptor(5, ''),
  name: createPropertyDescriptor(5, 'AggregateError')
});

// `AggregateError` constructor
// https://tc39.es/ecma262/#sec-aggregate-error-constructor
$({ global: true }, {
  AggregateError: $AggregateError
});


/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.iterator.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.iterator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js-pure/internals/to-indexed-object.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js-pure/internals/add-to-unscopables.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js-pure/internals/iterators.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js-pure/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js-pure/internals/define-iterator.js");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.object.to-string.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.object.to-string.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty


/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.promise.all-settled.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.promise.all-settled.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js-pure/internals/export.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js-pure/internals/a-function.js");
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ "./node_modules/core-js-pure/internals/new-promise-capability.js");
var perform = __webpack_require__(/*! ../internals/perform */ "./node_modules/core-js-pure/internals/perform.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js-pure/internals/iterate.js");

// `Promise.allSettled` method
// https://tc39.es/ecma262/#sec-promise.allsettled
$({ target: 'Promise', stat: true }, {
  allSettled: function allSettled(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'fulfilled', value: value };
          --remaining || resolve(values);
        }, function (error) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'rejected', reason: error };
          --remaining || resolve(values);
        });
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.promise.any.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.promise.any.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js-pure/internals/export.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js-pure/internals/a-function.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js-pure/internals/get-built-in.js");
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ "./node_modules/core-js-pure/internals/new-promise-capability.js");
var perform = __webpack_require__(/*! ../internals/perform */ "./node_modules/core-js-pure/internals/perform.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js-pure/internals/iterate.js");

var PROMISE_ANY_ERROR = 'No one promise resolved';

// `Promise.any` method
// https://tc39.es/ecma262/#sec-promise.any
$({ target: 'Promise', stat: true }, {
  any: function any(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var promiseResolve = aFunction(C.resolve);
      var errors = [];
      var counter = 0;
      var remaining = 1;
      var alreadyResolved = false;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyRejected = false;
        errors.push(undefined);
        remaining++;
        promiseResolve.call(C, promise).then(function (value) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyResolved = true;
          resolve(value);
        }, function (error) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyRejected = true;
          errors[index] = error;
          --remaining || reject(new (getBuiltIn('AggregateError'))(errors, PROMISE_ANY_ERROR));
        });
      });
      --remaining || reject(new (getBuiltIn('AggregateError'))(errors, PROMISE_ANY_ERROR));
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.promise.finally.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.promise.finally.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js-pure/internals/export.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js-pure/internals/is-pure.js");
var NativePromise = __webpack_require__(/*! ../internals/native-promise-constructor */ "./node_modules/core-js-pure/internals/native-promise-constructor.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js-pure/internals/fails.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js-pure/internals/get-built-in.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js-pure/internals/species-constructor.js");
var promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ "./node_modules/core-js-pure/internals/promise-resolve.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js-pure/internals/redefine.js");

// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
var NON_GENERIC = !!NativePromise && fails(function () {
  NativePromise.prototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
});

// `Promise.prototype.finally` method
// https://tc39.es/ecma262/#sec-promise.prototype.finally
$({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
  'finally': function (onFinally) {
    var C = speciesConstructor(this, getBuiltIn('Promise'));
    var isFunction = typeof onFinally == 'function';
    return this.then(
      isFunction ? function (x) {
        return promiseResolve(C, onFinally()).then(function () { return x; });
      } : onFinally,
      isFunction ? function (e) {
        return promiseResolve(C, onFinally()).then(function () { throw e; });
      } : onFinally
    );
  }
});

// makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`
if (!IS_PURE && typeof NativePromise == 'function') {
  var method = getBuiltIn('Promise').prototype['finally'];
  if (NativePromise.prototype['finally'] !== method) {
    redefine(NativePromise.prototype, 'finally', method, { unsafe: true });
  }
}


/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.promise.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.promise.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js-pure/internals/export.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js-pure/internals/is-pure.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js-pure/internals/get-built-in.js");
var NativePromise = __webpack_require__(/*! ../internals/native-promise-constructor */ "./node_modules/core-js-pure/internals/native-promise-constructor.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js-pure/internals/redefine.js");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "./node_modules/core-js-pure/internals/redefine-all.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js-pure/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js-pure/internals/set-to-string-tag.js");
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "./node_modules/core-js-pure/internals/set-species.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js-pure/internals/is-object.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js-pure/internals/a-function.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js-pure/internals/an-instance.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js-pure/internals/inspect-source.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js-pure/internals/iterate.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js-pure/internals/check-correctness-of-iteration.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js-pure/internals/species-constructor.js");
var task = __webpack_require__(/*! ../internals/task */ "./node_modules/core-js-pure/internals/task.js").set;
var microtask = __webpack_require__(/*! ../internals/microtask */ "./node_modules/core-js-pure/internals/microtask.js");
var promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ "./node_modules/core-js-pure/internals/promise-resolve.js");
var hostReportErrors = __webpack_require__(/*! ../internals/host-report-errors */ "./node_modules/core-js-pure/internals/host-report-errors.js");
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ "./node_modules/core-js-pure/internals/new-promise-capability.js");
var perform = __webpack_require__(/*! ../internals/perform */ "./node_modules/core-js-pure/internals/perform.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js-pure/internals/internal-state.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js-pure/internals/is-forced.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js-pure/internals/well-known-symbol.js");
var IS_BROWSER = __webpack_require__(/*! ../internals/engine-is-browser */ "./node_modules/core-js-pure/internals/engine-is-browser.js");
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "./node_modules/core-js-pure/internals/engine-is-node.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js-pure/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var NativePromisePrototype = NativePromise && NativePromise.prototype;
var PromiseConstructor = NativePromise;
var PromiseConstructorPrototype = NativePromisePrototype;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var SUBCLASSING = false;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructorPrototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = new PromiseConstructor(function (resolve) { resolve(1); });
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
  if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_REJECTION_EVENT;
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  PromiseConstructorPrototype = PromiseConstructor.prototype;
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructorPrototype, {
    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.es/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function' && NativePromisePrototype !== Object.prototype) {
    nativeThen = NativePromisePrototype.then;

    if (!SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      redefine(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          nativeThen.call(that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });

      // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
      redefine(NativePromisePrototype, 'catch', PromiseConstructorPrototype['catch'], { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf) {
      setPrototypeOf(NativePromisePrototype, PromiseConstructorPrototype);
    }
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.es/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.es/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.es/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.es/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.string.iterator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.string.iterator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js-pure/internals/string-multibyte.js").charAt;
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js-pure/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js-pure/internals/define-iterator.js");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js-pure/modules/esnext.aggregate-error.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/esnext.aggregate-error.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
__webpack_require__(/*! ./es.aggregate-error */ "./node_modules/core-js-pure/modules/es.aggregate-error.js");


/***/ }),

/***/ "./node_modules/core-js-pure/modules/esnext.promise.all-settled.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/esnext.promise.all-settled.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
__webpack_require__(/*! ./es.promise.all-settled.js */ "./node_modules/core-js-pure/modules/es.promise.all-settled.js");


/***/ }),

/***/ "./node_modules/core-js-pure/modules/esnext.promise.any.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/esnext.promise.any.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
__webpack_require__(/*! ./es.promise.any */ "./node_modules/core-js-pure/modules/es.promise.any.js");


/***/ }),

/***/ "./node_modules/core-js-pure/modules/esnext.promise.try.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/esnext.promise.try.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js-pure/internals/export.js");
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ "./node_modules/core-js-pure/internals/new-promise-capability.js");
var perform = __webpack_require__(/*! ../internals/perform */ "./node_modules/core-js-pure/internals/perform.js");

// `Promise.try` method
// https://github.com/tc39/proposal-promise-try
$({ target: 'Promise', stat: true }, {
  'try': function (callbackfn) {
    var promiseCapability = newPromiseCapabilityModule.f(this);
    var result = perform(callbackfn);
    (result.error ? promiseCapability.reject : promiseCapability.resolve)(result.value);
    return promiseCapability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js-pure/modules/web.dom-collections.iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/web.dom-collections.iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es.array.iterator */ "./node_modules/core-js-pure/modules/es.array.iterator.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js-pure/internals/dom-iterables.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js-pure/internals/classof.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js-pure/internals/create-non-enumerable-property.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js-pure/internals/iterators.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js-pure/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype && classof(CollectionPrototype) !== TO_STRING_TAG) {
    createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
  }
  Iterators[COLLECTION_NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/css/index.styl":
/*!****************************!*\
  !*** ./src/css/index.styl ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! @/polyfill */ "./src/js/polyfill.js");

var _imageEditor = __webpack_require__(/*! @/imageEditor */ "./src/js/imageEditor.js");

var _imageEditor2 = _interopRequireDefault(_imageEditor);

__webpack_require__(/*! @css/index.styl */ "./src/css/index.styl");

__webpack_require__(/*! @/command/addIcon */ "./src/js/command/addIcon.js");

__webpack_require__(/*! @/command/addImageObject */ "./src/js/command/addImageObject.js");

__webpack_require__(/*! @/command/addObject */ "./src/js/command/addObject.js");

__webpack_require__(/*! @/command/addShape */ "./src/js/command/addShape.js");

__webpack_require__(/*! @/command/addText */ "./src/js/command/addText.js");

__webpack_require__(/*! @/command/applyFilter */ "./src/js/command/applyFilter.js");

__webpack_require__(/*! @/command/changeIconColor */ "./src/js/command/changeIconColor.js");

__webpack_require__(/*! @/command/changeShape */ "./src/js/command/changeShape.js");

__webpack_require__(/*! @/command/changeText */ "./src/js/command/changeText.js");

__webpack_require__(/*! @/command/changeTextStyle */ "./src/js/command/changeTextStyle.js");

__webpack_require__(/*! @/command/clearObjects */ "./src/js/command/clearObjects.js");

__webpack_require__(/*! @/command/flip */ "./src/js/command/flip.js");

__webpack_require__(/*! @/command/loadImage */ "./src/js/command/loadImage.js");

__webpack_require__(/*! @/command/loadJson */ "./src/js/command/loadJson.js");

__webpack_require__(/*! @/command/removeFilter */ "./src/js/command/removeFilter.js");

__webpack_require__(/*! @/command/removeObject */ "./src/js/command/removeObject.js");

__webpack_require__(/*! @/command/resizeCanvasDimension */ "./src/js/command/resizeCanvasDimension.js");

__webpack_require__(/*! @/command/rotate */ "./src/js/command/rotate.js");

__webpack_require__(/*! @/command/setObjectProperties */ "./src/js/command/setObjectProperties.js");

__webpack_require__(/*! @/command/setObjectPosition */ "./src/js/command/setObjectPosition.js");

__webpack_require__(/*! @/command/changeSelection */ "./src/js/command/changeSelection.js");

__webpack_require__(/*! @/command/resize */ "./src/js/command/resize.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// commands
module.exports = _imageEditor2.default;

/***/ }),

/***/ "./src/js/command/addIcon.js":
/*!***********************************!*\
  !*** ./src/js/command/addIcon.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _command = __webpack_require__(/*! @/factory/command */ "./src/js/factory/command.js");

var _command2 = _interopRequireDefault(_command);

var _util = __webpack_require__(/*! @/util */ "./src/js/util.js");

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ICON = _consts.componentNames.ICON; /**
                                         * @author NHN. FE Development Team <dl_javascript@nhn.com>
                                         * @fileoverview Add an icon
                                         */

var command = {
  name: _consts.commandNames.ADD_ICON,

  /**
   * Add an icon
   * @param {Graphics} graphics - Graphics instance
   * @param {string} type - Icon type ('arrow', 'cancel', custom icon name)
   * @param {Object} options - Icon options
   *      @param {string} [options.fill] - Icon foreground color
   *      @param {string} [options.left] - Icon x position
   *      @param {string} [options.top] - Icon y position
   * @returns {Promise}
   */
  execute: function execute(graphics, type, options) {
    var _this = this;

    var iconComp = graphics.getComponent(ICON);

    return iconComp.add(type, options).then(function (objectProps) {
      _this.undoData.object = graphics.getObject(objectProps.objId);

      return objectProps;
    });
  },


  /**
   * @param {Graphics} graphics - Graphics instance
   * @returns {Promise}
   */
  undo: function undo(graphics) {
    graphics.remove(this.undoData.object);

    return _util.Promise.resolve();
  }
};

_command2.default.register(command);

exports.default = command;

/***/ }),

/***/ "./src/js/command/addImageObject.js":
/*!******************************************!*\
  !*** ./src/js/command/addImageObject.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _command = __webpack_require__(/*! @/factory/command */ "./src/js/factory/command.js");

var _command2 = _interopRequireDefault(_command);

var _util = __webpack_require__(/*! @/util */ "./src/js/util.js");

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var command = {
  name: _consts.commandNames.ADD_IMAGE_OBJECT,

  /**
   * Add an image object
   * @param {Graphics} graphics - Graphics instance
   * @param {string} imgUrl - Image url to make object
   * @returns {Promise}
   */
  execute: function execute(graphics, imgUrl) {
    var _this = this;

    return graphics.addImageObject(imgUrl).then(function (objectProps) {
      _this.undoData.object = graphics.getObject(objectProps.objId);

      return objectProps;
    });
  },


  /**
   * @param {Graphics} graphics - Graphics instance
   * @returns {Promise}
   */
  undo: function undo(graphics) {
    graphics.remove(this.undoData.object);

    return _util.Promise.resolve();
  }
}; /**
    * @author NHN. FE Development Team <dl_javascript@nhn.com>
    * @fileoverview Add an image object
    */


_command2.default.register(command);

exports.default = command;

/***/ }),

/***/ "./src/js/command/addObject.js":
/*!*************************************!*\
  !*** ./src/js/command/addObject.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _command = __webpack_require__(/*! @/factory/command */ "./src/js/factory/command.js");

var _command2 = _interopRequireDefault(_command);

var _util = __webpack_require__(/*! @/util */ "./src/js/util.js");

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var command = {
  name: _consts.commandNames.ADD_OBJECT,

  /**
   * Add an object
   * @param {Graphics} graphics - Graphics instance
   * @param {Object} object - Fabric object
   * @returns {Promise}
   */
  execute: function execute(graphics, object) {
    return new _util.Promise(function (resolve, reject) {
      if (!graphics.contains(object)) {
        graphics.add(object);
        resolve(object);
      } else {
        reject(_consts.rejectMessages.addedObject);
      }
    });
  },


  /**
   * @param {Graphics} graphics - Graphics instance
   * @param {Object} object - Fabric object
   * @returns {Promise}
   */
  undo: function undo(graphics, object) {
    return new _util.Promise(function (resolve, reject) {
      if (graphics.contains(object)) {
        graphics.remove(object);
        resolve(object);
      } else {
        reject(_consts.rejectMessages.noObject);
      }
    });
  }
}; /**
    * @author NHN. FE Development Team <dl_javascript@nhn.com>
    * @fileoverview Add an object
    */


_command2.default.register(command);

exports.default = command;

/***/ }),

/***/ "./src/js/command/addShape.js":
/*!************************************!*\
  !*** ./src/js/command/addShape.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _command = __webpack_require__(/*! @/factory/command */ "./src/js/factory/command.js");

var _command2 = _interopRequireDefault(_command);

var _util = __webpack_require__(/*! @/util */ "./src/js/util.js");

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SHAPE = _consts.componentNames.SHAPE; /**
                                           * @author NHN. FE Development Team <dl_javascript@nhn.com>
                                           * @fileoverview Add a shape
                                           */

var command = {
  name: _consts.commandNames.ADD_SHAPE,

  /**
   * Add a shape
   * @param {Graphics} graphics - Graphics instance
   * @param {string} type - Shape type (ex: 'rect', 'circle', 'triangle')
   * @param {Object} options - Shape options
   *      @param {string} [options.fill] - Shape foreground color (ex: '#fff', 'transparent')
   *      @param {string} [options.stroke] - Shape outline color
   *      @param {number} [options.strokeWidth] - Shape outline width
   *      @param {number} [options.width] - Width value (When type option is 'rect', this options can use)
   *      @param {number} [options.height] - Height value (When type option is 'rect', this options can use)
   *      @param {number} [options.rx] - Radius x value (When type option is 'circle', this options can use)
   *      @param {number} [options.ry] - Radius y value (When type option is 'circle', this options can use)
   *      @param {number} [options.left] - Shape x position
   *      @param {number} [options.top] - Shape y position
   *      @param {number} [options.isRegular] - Whether resizing shape has 1:1 ratio or not
   * @returns {Promise}
   */
  execute: function execute(graphics, type, options) {
    var _this = this;

    var shapeComp = graphics.getComponent(SHAPE);

    return shapeComp.add(type, options).then(function (objectProps) {
      var objId = objectProps.objId;


      _this.undoData.object = graphics.getObject(objId);

      return objectProps;
    });
  },


  /**
   * @param {Graphics} graphics - Graphics instance
   * @returns {Promise}
   */
  undo: function undo(graphics) {
    graphics.remove(this.undoData.object);

    return _util.Promise.resolve();
  }
};

_command2.default.register(command);

exports.default = command;

/***/ }),

/***/ "./src/js/command/addText.js":
/*!***********************************!*\
  !*** ./src/js/command/addText.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _command = __webpack_require__(/*! @/factory/command */ "./src/js/factory/command.js");

var _command2 = _interopRequireDefault(_command);

var _util = __webpack_require__(/*! @/util */ "./src/js/util.js");

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

var _selectionModifyHelper = __webpack_require__(/*! @/helper/selectionModifyHelper */ "./src/js/helper/selectionModifyHelper.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author NHN. FE Development Team <dl_javascript@nhn.com>
 * @fileoverview Add a text object
 */
var TEXT = _consts.componentNames.TEXT;


var command = {
  name: _consts.commandNames.ADD_TEXT,

  /**
   * Add a text object
   * @param {Graphics} graphics - Graphics instance
   * @param {string} text - Initial input text
   * @param {Object} [options] Options for text styles
   *     @param {Object} [options.styles] Initial styles
   *         @param {string} [options.styles.fill] Color
   *         @param {string} [options.styles.fontFamily] Font type for text
   *         @param {number} [options.styles.fontSize] Size
   *         @param {string} [options.styles.fontStyle] Type of inclination (normal / italic)
   *         @param {string} [options.styles.fontWeight] Type of thicker or thinner looking (normal / bold)
   *         @param {string} [options.styles.textAlign] Type of text align (left / center / right)
   *         @param {string} [options.styles.textDecoration] Type of line (underline / line-through / overline)
   *     @param {{x: number, y: number}} [options.position] - Initial position
   * @returns {Promise}
   */
  execute: function execute(graphics, text, options) {
    var _this = this;

    var textComp = graphics.getComponent(TEXT);

    if (this.undoData.object) {
      var undoObject = this.undoData.object;

      return new _util.Promise(function (resolve, reject) {
        if (!graphics.contains(undoObject)) {
          graphics.add(undoObject);
          resolve(undoObject);
        } else {
          reject(_consts.rejectMessages.redo);
        }
      });
    }

    return textComp.add(text, options).then(function (objectProps) {
      var objId = objectProps.objId;

      var textObject = graphics.getObject(objId);

      _this.undoData.object = textObject;

      (0, _selectionModifyHelper.setCachedUndoDataForDimension)((0, _selectionModifyHelper.makeSelectionUndoData)(textObject, function () {
        return (0, _selectionModifyHelper.makeSelectionUndoDatum)(objId, textObject, false);
      }));

      return objectProps;
    });
  },


  /**
   * @param {Graphics} graphics - Graphics instance
   * @returns {Promise}
   */
  undo: function undo(graphics) {
    graphics.remove(this.undoData.object);

    return _util.Promise.resolve();
  }
};

_command2.default.register(command);

exports.default = command;

/***/ }),

/***/ "./src/js/command/applyFilter.js":
/*!***************************************!*\
  !*** ./src/js/command/applyFilter.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tuiCodeSnippet = __webpack_require__(/*! tui-code-snippet */ "tui-code-snippet");

var _tuiCodeSnippet2 = _interopRequireDefault(_tuiCodeSnippet);

var _command = __webpack_require__(/*! @/factory/command */ "./src/js/factory/command.js");

var _command2 = _interopRequireDefault(_command);

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FILTER = _consts.componentNames.FILTER;

/**
 * Cached data for undo
 * @type {Object}
 */
/**
 * @author NHN. FE Development Team <dl_javascript@nhn.com>
 * @fileoverview Apply a filter into an image
 */

var cachedUndoDataForSilent = null;

/**
 * Make undoData
 * @param {string} type - Filter type
 * @param {Object} prevfilterOption - prev Filter options
 * @param {Object} options - Filter options
 * @returns {object} - undo data
 */
function makeUndoData(type, prevfilterOption, options) {
  var undoData = {};

  if (type === 'mask') {
    undoData.object = options.mask;
  }

  undoData.options = prevfilterOption;

  return undoData;
}

var command = {
  name: _consts.commandNames.APPLY_FILTER,

  /**
   * Apply a filter into an image
   * @param {Graphics} graphics - Graphics instance
   * @param {string} type - Filter type
   * @param {Object} options - Filter options
   *  @param {number} options.maskObjId - masking image object id
   * @param {boolean} isSilent - is silent execution or not
   * @returns {Promise}
   */
  execute: function execute(graphics, type, options, isSilent) {
    var filterComp = graphics.getComponent(FILTER);

    if (type === 'mask') {
      var maskObj = graphics.getObject(options.maskObjId);

      if (!(maskObj && maskObj.isType('image'))) {
        return Promise.reject(_consts.rejectMessages.invalidParameters);
      }

      _tuiCodeSnippet2.default.extend(options, { mask: maskObj });
      graphics.remove(options.mask);
    }
    if (!this.isRedo) {
      var prevfilterOption = filterComp.getOptions(type);
      var undoData = makeUndoData(type, prevfilterOption, options);

      cachedUndoDataForSilent = this.setUndoData(undoData, cachedUndoDataForSilent, isSilent);
    }

    return filterComp.add(type, options);
  },


  /**
   * @param {Graphics} graphics - Graphics instance
   * @param {string} type - Filter type
   * @returns {Promise}
   */
  undo: function undo(graphics, type) {
    var filterComp = graphics.getComponent(FILTER);

    if (type === 'mask') {
      var mask = this.undoData.object;
      graphics.add(mask);
      graphics.setActiveObject(mask);

      return filterComp.remove(type);
    }

    // options changed case
    if (this.undoData.options) {
      return filterComp.add(type, this.undoData.options);
    }

    // filter added case
    return filterComp.remove(type);
  }
};

_command2.default.register(command);

exports.default = command;

/***/ }),

/***/ "./src/js/command/changeIconColor.js":
/*!*******************************************!*\
  !*** ./src/js/command/changeIconColor.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _command = __webpack_require__(/*! @/factory/command */ "./src/js/factory/command.js");

var _command2 = _interopRequireDefault(_command);

var _util = __webpack_require__(/*! @/util */ "./src/js/util.js");

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ICON = _consts.componentNames.ICON; /**
                                         * @author NHN. FE Development Team <dl_javascript@nhn.com>
                                         * @fileoverview Change icon color
                                         */

var command = {
  name: _consts.commandNames.CHANGE_ICON_COLOR,

  /**
   * Change icon color
   * @param {Graphics} graphics - Graphics instance
   * @param {number} objId -  object id
   * @param {string} color - Color for icon
   * @returns {Promise}
   */
  execute: function execute(graphics, objId, color) {
    var _this = this;

    return new _util.Promise(function (resolve, reject) {
      var iconComp = graphics.getComponent(ICON);
      var targetObj = graphics.getObject(objId);

      if (!targetObj) {
        reject(_consts.rejectMessages.noObject);
      }

      _this.undoData.object = targetObj;
      _this.undoData.color = iconComp.getColor(targetObj);
      iconComp.setColor(color, targetObj);
      resolve();
    });
  },


  /**
   * @param {Graphics} graphics - Graphics instance
   * @returns {Promise}
   */
  undo: function undo(graphics) {
    var iconComp = graphics.getComponent(ICON);
    var _undoData = this.undoData,
        icon = _undoData.object,
        color = _undoData.color;


    iconComp.setColor(color, icon);

    return _util.Promise.resolve();
  }
};

_command2.default.register(command);

exports.default = command;

/***/ }),

/***/ "./src/js/command/changeSelection.js":
/*!*******************************************!*\
  !*** ./src/js/command/changeSelection.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _command = __webpack_require__(/*! @/factory/command */ "./src/js/factory/command.js");

var _command2 = _interopRequireDefault(_command);

var _util = __webpack_require__(/*! @/util */ "./src/js/util.js");

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

var _selectionModifyHelper = __webpack_require__(/*! @/helper/selectionModifyHelper */ "./src/js/helper/selectionModifyHelper.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author NHN. FE Development Team <dl_javascript@nhn.com>
 * @fileoverview change selection
 */
var command = {
  name: _consts.commandNames.CHANGE_SELECTION,

  execute: function execute(graphics, props) {
    if (this.isRedo) {
      props.forEach(function (prop) {
        graphics.setObjectProperties(prop.objId, prop);
      });
    } else {
      this.undoData = (0, _selectionModifyHelper.getCachedUndoDataForDimension)();
    }

    return _util.Promise.resolve();
  },
  undo: function undo(graphics) {
    if (this.undoData.length > 1) {
      graphics.discardSelection();
    }

    var objs = [];

    this.undoData.forEach(function (datum) {
      graphics.setObjectProperties(datum.objId, datum);
      objs.push(graphics.getObject(datum.objId));
    });

    if (this.undoData.length > 1) {
      var activeSelection = new fabric.ActiveSelection(objs, {
        canvas: graphics._canvas
      });
      graphics.setActiveObject(activeSelection);
      graphics._canvas.renderAll();
    }

    return _util.Promise.resolve();
  }
};

_command2.default.register(command);

exports.default = command;

/***/ }),

/***/ "./src/js/command/changeShape.js":
/*!***************************************!*\
  !*** ./src/js/command/changeShape.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tuiCodeSnippet = __webpack_require__(/*! tui-code-snippet */ "tui-code-snippet");

var _tuiCodeSnippet2 = _interopRequireDefault(_tuiCodeSnippet);

var _command = __webpack_require__(/*! @/factory/command */ "./src/js/factory/command.js");

var _command2 = _interopRequireDefault(_command);

var _util = __webpack_require__(/*! @/util */ "./src/js/util.js");

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author NHN. FE Development Team <dl_javascript@nhn.com>
 * @fileoverview change a shape
 */
var SHAPE = _consts.componentNames.SHAPE;

/**
 * Cached data for undo
 * @type {Object}
 */

var cachedUndoDataForSilent = null;

/**
 * Make undoData
 * @param {object} options - shape options
 * @param {Component} targetObj - shape component
 * @returns {object} - undo data
 */
function makeUndoData(options, targetObj) {
  var undoData = {
    object: targetObj,
    options: {}
  };

  _tuiCodeSnippet2.default.forEachOwnProperties(options, function (value, key) {
    undoData.options[key] = targetObj[key];
  });

  return undoData;
}

var command = {
  name: _consts.commandNames.CHANGE_SHAPE,

  /**
   * Change a shape
   * @param {Graphics} graphics - Graphics instance
   * @param {number} objId -  object id
   * @param {Object} options - Shape options
   *      @param {string} [options.fill] - Shape foreground color (ex: '#fff', 'transparent')
   *      @param {string} [options.stroke] - Shape outline color
   *      @param {number} [options.strokeWidth] - Shape outline width
   *      @param {number} [options.width] - Width value (When type option is 'rect', this options can use)
   *      @param {number} [options.height] - Height value (When type option is 'rect', this options can use)
   *      @param {number} [options.rx] - Radius x value (When type option is 'circle', this options can use)
   *      @param {number} [options.ry] - Radius y value (When type option is 'circle', this options can use)
   *      @param {number} [options.left] - Shape x position
   *      @param {number} [options.top] - Shape y position
   *      @param {number} [options.isRegular] - Whether resizing shape has 1:1 ratio or not
   * @param {boolean} isSilent - is silent execution or not
   * @returns {Promise}
   */
  execute: function execute(graphics, objId, options, isSilent) {
    var shapeComp = graphics.getComponent(SHAPE);
    var targetObj = graphics.getObject(objId);

    if (!targetObj) {
      return _util.Promise.reject(_consts.rejectMessages.noObject);
    }

    if (!this.isRedo) {
      var undoData = makeUndoData(options, targetObj);

      cachedUndoDataForSilent = this.setUndoData(undoData, cachedUndoDataForSilent, isSilent);
    }

    return shapeComp.change(targetObj, options);
  },


  /**
   * @param {Graphics} graphics - Graphics instance
   * @returns {Promise}
   */
  undo: function undo(graphics) {
    var shapeComp = graphics.getComponent(SHAPE);
    var _undoData = this.undoData,
        shape = _undoData.object,
        options = _undoData.options;


    return shapeComp.change(shape, options);
  }
};

_command2.default.register(command);

exports.default = command;

/***/ }),

/***/ "./src/js/command/changeText.js":
/*!**************************************!*\
  !*** ./src/js/command/changeText.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _command = __webpack_require__(/*! @/factory/command */ "./src/js/factory/command.js");

var _command2 = _interopRequireDefault(_command);

var _util = __webpack_require__(/*! @/util */ "./src/js/util.js");

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TEXT = _consts.componentNames.TEXT; /**
                                         * @author NHN. FE Development Team <dl_javascript@nhn.com>
                                         * @fileoverview Change a text
                                         */

var command = {
  name: _consts.commandNames.CHANGE_TEXT,

  /**
   * Change a text
   * @param {Graphics} graphics - Graphics instance
   * @param {number} objId -  object id
   * @param {string} text - Changing text
   * @returns {Promise}
   */
  execute: function execute(graphics, objId, text) {
    var textComp = graphics.getComponent(TEXT);
    var targetObj = graphics.getObject(objId);

    if (!targetObj) {
      return _util.Promise.reject(_consts.rejectMessages.noObject);
    }

    this.undoData.object = targetObj;
    this.undoData.text = textComp.getText(targetObj);

    return textComp.change(targetObj, text);
  },


  /**
   * @param {Graphics} graphics - Graphics instance
   * @returns {Promise}
   */
  undo: function undo(graphics) {
    var textComp = graphics.getComponent(TEXT);
    var _undoData = this.undoData,
        textObj = _undoData.object,
        text = _undoData.text;


    return textComp.change(textObj, text);
  }
};

_command2.default.register(command);

exports.default = command;

/***/ }),

/***/ "./src/js/command/changeTextStyle.js":
/*!*******************************************!*\
  !*** ./src/js/command/changeTextStyle.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tuiCodeSnippet = __webpack_require__(/*! tui-code-snippet */ "tui-code-snippet");

var _tuiCodeSnippet2 = _interopRequireDefault(_tuiCodeSnippet);

var _command = __webpack_require__(/*! @/factory/command */ "./src/js/factory/command.js");

var _command2 = _interopRequireDefault(_command);

var _util = __webpack_require__(/*! @/util */ "./src/js/util.js");

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author NHN. FE Development Team <dl_javascript@nhn.com>
 * @fileoverview Change text styles
 */
var TEXT = _consts.componentNames.TEXT;

/**
 * Cached data for undo
 * @type {Object}
 */

var cachedUndoDataForSilent = null;

/**
 * Make undoData
 * @param {object} styles - text styles
 * @param {Component} targetObj - text component
 * @returns {object} - undo data
 */
function makeUndoData(styles, targetObj) {
  var undoData = {
    object: targetObj,
    styles: {}
  };
  _tuiCodeSnippet2.default.forEachOwnProperties(styles, function (value, key) {
    var undoValue = targetObj[key];
    undoData.styles[key] = undoValue;
  });

  return undoData;
}

var command = {
  name: _consts.commandNames.CHANGE_TEXT_STYLE,

  /**
   * Change text styles
   * @param {Graphics} graphics - Graphics instance
   * @param {number} objId -  object id
   * @param {Object} styles - text styles
   *     @param {string} [styles.fill] Color
   *     @param {string} [styles.fontFamily] Font type for text
   *     @param {number} [styles.fontSize] Size
   *     @param {string} [styles.fontStyle] Type of inclination (normal / italic)
   *     @param {string} [styles.fontWeight] Type of thicker or thinner looking (normal / bold)
   *     @param {string} [styles.textAlign] Type of text align (left / center / right)
   *     @param {string} [styles.textDecoration] Type of line (underline / line-through / overline)
   * @param {boolean} isSilent - is silent execution or not
   * @returns {Promise}
   */
  execute: function execute(graphics, objId, styles, isSilent) {
    var textComp = graphics.getComponent(TEXT);
    var targetObj = graphics.getObject(objId);

    if (!targetObj) {
      return _util.Promise.reject(_consts.rejectMessages.noObject);
    }
    if (!this.isRedo) {
      var undoData = makeUndoData(styles, targetObj);

      cachedUndoDataForSilent = this.setUndoData(undoData, cachedUndoDataForSilent, isSilent);
    }

    return textComp.setStyle(targetObj, styles);
  },


  /**
   * @param {Graphics} graphics - Graphics instance
   * @returns {Promise}
   */
  undo: function undo(graphics) {
    var textComp = graphics.getComponent(TEXT);
    var _undoData = this.undoData,
        textObj = _undoData.object,
        styles = _undoData.styles;


    return textComp.setStyle(textObj, styles);
  }
};

_command2.default.register(command);

exports.default = command;

/***/ }),

/***/ "./src/js/command/clearObjects.js":
/*!****************************************!*\
  !*** ./src/js/command/clearObjects.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _command = __webpack_require__(/*! @/factory/command */ "./src/js/factory/command.js");

var _command2 = _interopRequireDefault(_command);

var _util = __webpack_require__(/*! @/util */ "./src/js/util.js");

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var command = {
  name: _consts.commandNames.CLEAR_OBJECTS,

  /**
   * Clear all objects without background (main) image
   * @param {Graphics} graphics - Graphics instance
   * @returns {Promise}
   */
  execute: function execute(graphics) {
    var _this = this;

    return new _util.Promise(function (resolve) {
      _this.undoData.objects = graphics.removeAll();
      resolve();
    });
  },


  /**
   * @param {Graphics} graphics - Graphics instance
   * @returns {Promise}
   * @ignore
   */
  undo: function undo(graphics) {
    graphics.add(this.undoData.objects);

    return _util.Promise.resolve();
  }
}; /**
    * @author NHN. FE Development Team <dl_javascript@nhn.com>
    * @fileoverview Clear all objects
    */


_command2.default.register(command);

exports.default = command;

/***/ }),

/***/ "./src/js/command/flip.js":
/*!********************************!*\
  !*** ./src/js/command/flip.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _command = __webpack_require__(/*! @/factory/command */ "./src/js/factory/command.js");

var _command2 = _interopRequireDefault(_command);

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author NHN. FE Development Team <dl_javascript@nhn.com>
 * @fileoverview Flip an image
 */
var FLIP = _consts.componentNames.FLIP;


var command = {
  name: _consts.commandNames.FLIP_IMAGE,

  /**
   * flip an image
   * @param {Graphics} graphics - Graphics instance
   * @param {string} type - 'flipX' or 'flipY' or 'reset'
   * @returns {Promise}
   */
  execute: function execute(graphics, type) {
    var flipComp = graphics.getComponent(FLIP);

    this.undoData.setting = flipComp.getCurrentSetting();

    return flipComp[type]();
  },


  /**
   * @param {Graphics} graphics - Graphics instance
   * @returns {Promise}
   */
  undo: function undo(graphics) {
    var flipComp = graphics.getComponent(FLIP);

    return flipComp.set(this.undoData.setting);
  }
};

_command2.default.register(command);

exports.default = command;

/***/ }),

/***/ "./src/js/command/loadImage.js":
/*!*************************************!*\
  !*** ./src/js/command/loadImage.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _command = __webpack_require__(/*! @/factory/command */ "./src/js/factory/command.js");

var _command2 = _interopRequireDefault(_command);

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author NHN. FE Development Team <dl_javascript@nhn.com>
 * @fileoverview Load a background (main) image
 */
var IMAGE_LOADER = _consts.componentNames.IMAGE_LOADER;


var command = {
  name: _consts.commandNames.LOAD_IMAGE,

  /**
   * Load a background (main) image
   * @param {Graphics} graphics - Graphics instance
   * @param {string} imageName - Image name
   * @param {string} imgUrl - Image Url
   * @returns {Promise}
   */
  execute: function execute(graphics, imageName, imgUrl) {
    var loader = graphics.getComponent(IMAGE_LOADER);
    var prevImage = loader.getCanvasImage();
    var prevImageWidth = prevImage ? prevImage.width : 0;
    var prevImageHeight = prevImage ? prevImage.height : 0;
    var objects = graphics.removeAll(true).filter(function (objectItem) {
      return objectItem.type !== 'cropzone';
    });

    objects.forEach(function (objectItem) {
      objectItem.evented = true;
    });

    this.undoData = {
      name: loader.getImageName(),
      image: prevImage,
      objects: objects
    };

    return loader.load(imageName, imgUrl).then(function (newImage) {
      return {
        oldWidth: prevImageWidth,
        oldHeight: prevImageHeight,
        newWidth: newImage.width,
        newHeight: newImage.height
      };
    });
  },


  /**
   * @param {Graphics} graphics - Graphics instance
   * @returns {Promise}
   */
  undo: function undo(graphics) {
    var loader = graphics.getComponent(IMAGE_LOADER);
    var _undoData = this.undoData,
        objects = _undoData.objects,
        name = _undoData.name,
        image = _undoData.image;


    graphics.removeAll(true);
    graphics.add(objects);

    return loader.load(name, image);
  }
};

_command2.default.register(command);

exports.default = command;

/***/ }),

/***/ "./src/js/command/loadJson.js":
/*!************************************!*\
  !*** ./src/js/command/loadJson.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

var _command = __webpack_require__(/*! @/factory/command */ "./src/js/factory/command.js");

var _command2 = _interopRequireDefault(_command);

var _tuiCodeSnippet = __webpack_require__(/*! tui-code-snippet */ "tui-code-snippet");

var _tuiCodeSnippet2 = _interopRequireDefault(_tuiCodeSnippet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JSON_LOADER = _consts.componentNames.JSON_LOADER,
    TEXT = _consts.componentNames.TEXT; /**
                                         * @author NHN. FE Development Team <dl_javascript@nhn.com>
                                         * @fileoverview Load a background (main) image
                                         */

var command = {
  name: _consts.commandNames.LOAD_JSON,

  execute: function execute(graphics, json) {
    var loader = graphics.getComponent(JSON_LOADER);
    var texComp = graphics.getComponent(TEXT);

    var objects = graphics.removeAll(true).filter(function (objectItem) {
      return objectItem.type !== 'cropzone';
    });

    objects.forEach(function (objectItem) {
      objectItem.evented = true;
    });

    this.undoData.objects = objects;

    return loader.load(json).then(function (objs) {
      objs.map(function (obj) {
        var selectionStyle = _consts.fObjectOptions.SELECTION_STYLE;
        selectionStyle = _tuiCodeSnippet2.default.extend({}, selectionStyle, {
          originX: 'left',
          originY: 'top'
        });
        obj.set(selectionStyle);
        if (obj.type === 'i-text') {
          texComp.initialize(obj);
        }

        graphics._addFabricObject(obj);

        return obj;
      });

      return objs;
    });
  },

  /**
   * @returns {Promise}
   */
  undo: function undo() {
    return Promise.resolve();
  }
};

_command2.default.register(command);

exports.default = command;

/***/ }),

/***/ "./src/js/command/removeFilter.js":
/*!****************************************!*\
  !*** ./src/js/command/removeFilter.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _command = __webpack_require__(/*! @/factory/command */ "./src/js/factory/command.js");

var _command2 = _interopRequireDefault(_command);

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author NHN. FE Development Team <dl_javascript@nhn.com>
 * @fileoverview Remove a filter from an image
 */
var FILTER = _consts.componentNames.FILTER;


var command = {
  name: _consts.commandNames.REMOVE_FILTER,

  /**
   * Remove a filter from an image
   * @param {Graphics} graphics - Graphics instance
   * @param {string} type - Filter type
   * @returns {Promise}
   */
  execute: function execute(graphics, type) {
    var filterComp = graphics.getComponent(FILTER);

    this.undoData.options = filterComp.getOptions(type);

    return filterComp.remove(type);
  },


  /**
   * @param {Graphics} graphics - Graphics instance
   * @param {string} type - Filter type
   * @returns {Promise}
   */
  undo: function undo(graphics, type) {
    var filterComp = graphics.getComponent(FILTER);
    var options = this.undoData.options;


    return filterComp.add(type, options);
  }
};

_command2.default.register(command);

exports.default = command;

/***/ }),

/***/ "./src/js/command/removeObject.js":
/*!****************************************!*\
  !*** ./src/js/command/removeObject.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _command = __webpack_require__(/*! @/factory/command */ "./src/js/factory/command.js");

var _command2 = _interopRequireDefault(_command);

var _util = __webpack_require__(/*! @/util */ "./src/js/util.js");

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var command = {
  name: _consts.commandNames.REMOVE_OBJECT,

  /**
   * Remove an object
   * @param {Graphics} graphics - Graphics instance
   * @param {number} objId -  object id
   * @returns {Promise}
   */
  execute: function execute(graphics, objId) {
    var _this = this;

    return new _util.Promise(function (resolve, reject) {
      _this.undoData.objects = graphics.removeObjectById(objId);
      if (_this.undoData.objects.length) {
        resolve();
      } else {
        reject(_consts.rejectMessages.noObject);
      }
    });
  },


  /**
   * @param {Graphics} graphics - Graphics instance
   * @returns {Promise}
   */
  undo: function undo(graphics) {
    graphics.add(this.undoData.objects);

    return _util.Promise.resolve();
  }
}; /**
    * @author NHN. FE Development Team <dl_javascript@nhn.com>
    * @fileoverview Remove an object
    */


_command2.default.register(command);

exports.default = command;

/***/ }),

/***/ "./src/js/command/resize.js":
/*!**********************************!*\
  !*** ./src/js/command/resize.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _command = __webpack_require__(/*! @/factory/command */ "./src/js/factory/command.js");

var _command2 = _interopRequireDefault(_command);

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author NHN. FE Development Team <dl_javascript@nhn.com>
 * @fileoverview Resize an image
 */
var RESIZE = _consts.componentNames.RESIZE;


var command = {
  name: _consts.commandNames.RESIZE_IMAGE,

  /**
   * Resize an image
   * @param {Graphics} graphics - Graphics instance
   * @param {object} dimensions - Image Dimensions
   * @returns {Promise}
   */
  execute: function execute(graphics, dimensions) {
    var resizeComp = graphics.getComponent(RESIZE);

    var originalDimensions = resizeComp.getOriginalDimensions();
    if (!originalDimensions) {
      originalDimensions = resizeComp.getCurrentDimensions();
    }

    this.undoData.dimensions = originalDimensions;

    return resizeComp.resize(dimensions);
  },


  /**
   * @param {Graphics} graphics - Graphics instance
   * @returns {Promise}
   */
  undo: function undo(graphics) {
    var resizeComp = graphics.getComponent(RESIZE);

    return resizeComp.resize(this.undoData.dimensions);
  }
};

_command2.default.register(command);

exports.default = command;

/***/ }),

/***/ "./src/js/command/resizeCanvasDimension.js":
/*!*************************************************!*\
  !*** ./src/js/command/resizeCanvasDimension.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _command = __webpack_require__(/*! @/factory/command */ "./src/js/factory/command.js");

var _command2 = _interopRequireDefault(_command);

var _util = __webpack_require__(/*! @/util */ "./src/js/util.js");

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var command = {
  name: _consts.commandNames.RESIZE_CANVAS_DIMENSION,

  /**
   * resize the canvas with given dimension
   * @param {Graphics} graphics - Graphics instance
   * @param {{width: number, height: number}} dimension - Max width & height
   * @returns {Promise}
   */
  execute: function execute(graphics, dimension) {
    var _this = this;

    return new _util.Promise(function (resolve) {
      _this.undoData.size = {
        width: graphics.cssMaxWidth,
        height: graphics.cssMaxHeight
      };

      graphics.setCssMaxDimension(dimension);
      graphics.adjustCanvasDimension();
      resolve();
    });
  },


  /**
   * @param {Graphics} graphics - Graphics instance
   * @returns {Promise}
   */
  undo: function undo(graphics) {
    graphics.setCssMaxDimension(this.undoData.size);
    graphics.adjustCanvasDimension();

    return _util.Promise.resolve();
  }
}; /**
    * @author NHN. FE Development Team <dl_javascript@nhn.com>
    * @fileoverview Resize a canvas
    */


_command2.default.register(command);

exports.default = command;

/***/ }),

/***/ "./src/js/command/rotate.js":
/*!**********************************!*\
  !*** ./src/js/command/rotate.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _command = __webpack_require__(/*! @/factory/command */ "./src/js/factory/command.js");

var _command2 = _interopRequireDefault(_command);

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author NHN. FE Development Team <dl_javascript@nhn.com>
 * @fileoverview Rotate an image
 */
var ROTATION = _consts.componentNames.ROTATION;

/**
 * Cached data for undo
 * @type {Object}
 */

var cachedUndoDataForSilent = null;

/**
 * Make undo data
 * @param {Component} rotationComp - rotation component
 * @returns {object} - undodata
 */
function makeUndoData(rotationComp) {
  return {
    angle: rotationComp.getCurrentAngle()
  };
}

var command = {
  name: _consts.commandNames.ROTATE_IMAGE,

  /**
   * Rotate an image
   * @param {Graphics} graphics - Graphics instance
   * @param {string} type - 'rotate' or 'setAngle'
   * @param {number} angle - angle value (degree)
   * @param {boolean} isSilent - is silent execution or not
   * @returns {Promise}
   */
  execute: function execute(graphics, type, angle, isSilent) {
    var rotationComp = graphics.getComponent(ROTATION);

    if (!this.isRedo) {
      var undoData = makeUndoData(rotationComp);

      cachedUndoDataForSilent = this.setUndoData(undoData, cachedUndoDataForSilent, isSilent);
    }

    return rotationComp[type](angle);
  },


  /**
   * @param {Graphics} graphics - Graphics instance
   * @returns {Promise}
   */
  undo: function undo(graphics) {
    var rotationComp = graphics.getComponent(ROTATION);
    var _args = this.args,
        type = _args[1],
        angle = _args[2];


    if (type === 'setAngle') {
      return rotationComp[type](this.undoData.angle);
    }

    return rotationComp.rotate(-angle);
  }
};

_command2.default.register(command);

exports.default = command;

/***/ }),

/***/ "./src/js/command/setObjectPosition.js":
/*!*********************************************!*\
  !*** ./src/js/command/setObjectPosition.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _command = __webpack_require__(/*! @/factory/command */ "./src/js/factory/command.js");

var _command2 = _interopRequireDefault(_command);

var _util = __webpack_require__(/*! @/util */ "./src/js/util.js");

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var command = {
  name: _consts.commandNames.SET_OBJECT_POSITION,

  /**
   * Set object properties
   * @param {Graphics} graphics - Graphics instance
   * @param {number} objId -  object id
   * @param {Object} posInfo - position object
   *  @param {number} posInfo.x - x position
   *  @param {number} posInfo.y - y position
   *  @param {string} posInfo.originX - can be 'left', 'center', 'right'
   *  @param {string} posInfo.originY - can be 'top', 'center', 'bottom'
   * @returns {Promise}
   */
  execute: function execute(graphics, objId, posInfo) {
    var targetObj = graphics.getObject(objId);

    if (!targetObj) {
      return _util.Promise.reject(_consts.rejectMessages.noObject);
    }

    this.undoData.objectId = objId;
    this.undoData.props = graphics.getObjectProperties(objId, ['left', 'top']);

    graphics.setObjectPosition(objId, posInfo);
    graphics.renderAll();

    return _util.Promise.resolve();
  },


  /**
   * @param {Graphics} graphics - Graphics instance
   * @returns {Promise}
   */
  undo: function undo(graphics) {
    var _undoData = this.undoData,
        objectId = _undoData.objectId,
        props = _undoData.props;


    graphics.setObjectProperties(objectId, props);
    graphics.renderAll();

    return _util.Promise.resolve();
  }
}; /**
    * @author NHN. FE Development Team <dl_javascript@nhn.com>
    * @fileoverview Set object properties
    */


_command2.default.register(command);

exports.default = command;

/***/ }),

/***/ "./src/js/command/setObjectProperties.js":
/*!***********************************************!*\
  !*** ./src/js/command/setObjectProperties.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tuiCodeSnippet = __webpack_require__(/*! tui-code-snippet */ "tui-code-snippet");

var _tuiCodeSnippet2 = _interopRequireDefault(_tuiCodeSnippet);

var _command = __webpack_require__(/*! @/factory/command */ "./src/js/factory/command.js");

var _command2 = _interopRequireDefault(_command);

var _util = __webpack_require__(/*! @/util */ "./src/js/util.js");

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author NHN. FE Development Team <dl_javascript@nhn.com>
 * @fileoverview Set object properties
 */
var command = {
  name: _consts.commandNames.SET_OBJECT_PROPERTIES,

  /**
   * Set object properties
   * @param {Graphics} graphics - Graphics instance
   * @param {number} objId -  object id
   * @param {Object} props - properties
   *     @param {string} [props.fill] Color
   *     @param {string} [props.fontFamily] Font type for text
   *     @param {number} [props.fontSize] Size
   *     @param {string} [props.fontStyle] Type of inclination (normal / italic)
   *     @param {string} [props.fontWeight] Type of thicker or thinner looking (normal / bold)
   *     @param {string} [props.textAlign] Type of text align (left / center / right)
   *     @param {string} [props.textDecoration] Type of line (underline / line-through / overline)
   * @returns {Promise}
   */
  execute: function execute(graphics, objId, props) {
    var _this = this;

    var targetObj = graphics.getObject(objId);

    if (!targetObj) {
      return _util.Promise.reject(_consts.rejectMessages.noObject);
    }

    this.undoData.props = {};
    _tuiCodeSnippet2.default.forEachOwnProperties(props, function (value, key) {
      _this.undoData.props[key] = targetObj[key];
    });

    graphics.setObjectProperties(objId, props);

    return _util.Promise.resolve();
  },


  /**
   * @param {Graphics} graphics - Graphics instance
   * @param {number} objId -  object id
   * @returns {Promise}
   */
  undo: function undo(graphics, objId) {
    var props = this.undoData.props;


    graphics.setObjectProperties(objId, props);

    return _util.Promise.resolve();
  }
};

_command2.default.register(command);

exports.default = command;

/***/ }),

/***/ "./src/js/component/cropper.js":
/*!*************************************!*\
  !*** ./src/js/component/cropper.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tuiCodeSnippet = __webpack_require__(/*! tui-code-snippet */ "tui-code-snippet");

var _tuiCodeSnippet2 = _interopRequireDefault(_tuiCodeSnippet);

var _fabric = __webpack_require__(/*! fabric */ "fabric");

var _fabric2 = _interopRequireDefault(_fabric);

var _component = __webpack_require__(/*! @/interface/component */ "./src/js/interface/component.js");

var _component2 = _interopRequireDefault(_component);

var _cropzone = __webpack_require__(/*! @/extension/cropzone */ "./src/js/extension/cropzone.js");

var _cropzone2 = _interopRequireDefault(_cropzone);

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

var _util = __webpack_require__(/*! @/util */ "./src/js/util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author NHN. FE Development Team <dl_javascript@nhn.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @fileoverview Image crop module (start cropping, end cropping)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var MOUSE_MOVE_THRESHOLD = 10;
var DEFAULT_OPTION = {
  presetRatio: null,
  top: -10,
  left: -10,
  height: 1,
  width: 1
};

/**
 * Cropper components
 * @param {Graphics} graphics - Graphics instance
 * @extends {Component}
 * @class Cropper
 * @ignore
 */

var Cropper = function (_Component) {
  _inherits(Cropper, _Component);

  function Cropper(graphics) {
    _classCallCheck(this, Cropper);

    /**
     * Cropzone
     * @type {Cropzone}
     * @private
     */
    var _this = _possibleConstructorReturn(this, (Cropper.__proto__ || Object.getPrototypeOf(Cropper)).call(this, _consts.componentNames.CROPPER, graphics));

    _this._cropzone = null;

    /**
     * StartX of Cropzone
     * @type {number}
     * @private
     */
    _this._startX = null;

    /**
     * StartY of Cropzone
     * @type {number}
     * @private
     */
    _this._startY = null;

    /**
     * State whether shortcut key is pressed or not
     * @type {boolean}
     * @private
     */
    _this._withShiftKey = false;

    /**
     * Listeners
     * @type {object.<string, function>}
     * @private
     */
    _this._listeners = {
      keydown: _this._onKeyDown.bind(_this),
      keyup: _this._onKeyUp.bind(_this),
      mousedown: _this._onFabricMouseDown.bind(_this),
      mousemove: _this._onFabricMouseMove.bind(_this),
      mouseup: _this._onFabricMouseUp.bind(_this)
    };
    return _this;
  }

  /**
   * Start cropping
   */


  _createClass(Cropper, [{
    key: 'start',
    value: function start() {
      if (this._cropzone) {
        return;
      }
      var canvas = this.getCanvas();

      canvas.forEachObject(function (obj) {
        // {@link http://fabricjs.com/docs/fabric.Object.html#evented}
        obj.evented = false;
      });

      this._cropzone = new _cropzone2.default(canvas, _tuiCodeSnippet2.default.extend({
        left: 0,
        top: 0,
        width: 0.5,
        height: 0.5,
        strokeWidth: 0, // {@link https://github.com/kangax/fabric.js/issues/2860}
        cornerSize: 10,
        cornerColor: 'black',
        fill: 'transparent'
      }, _consts.CROPZONE_DEFAULT_OPTIONS, this.graphics.cropSelectionStyle));

      canvas.discardActiveObject();
      canvas.add(this._cropzone);
      canvas.on('mouse:down', this._listeners.mousedown);
      canvas.selection = false;
      canvas.defaultCursor = 'crosshair';

      _fabric2.default.util.addListener(document, 'keydown', this._listeners.keydown);
      _fabric2.default.util.addListener(document, 'keyup', this._listeners.keyup);
    }

    /**
     * End cropping
     */

  }, {
    key: 'end',
    value: function end() {
      var canvas = this.getCanvas();
      var cropzone = this._cropzone;

      if (!cropzone) {
        return;
      }
      canvas.remove(cropzone);
      canvas.selection = true;
      canvas.defaultCursor = 'default';
      canvas.off('mouse:down', this._listeners.mousedown);
      canvas.forEachObject(function (obj) {
        obj.evented = true;
      });

      this._cropzone = null;

      _fabric2.default.util.removeListener(document, 'keydown', this._listeners.keydown);
      _fabric2.default.util.removeListener(document, 'keyup', this._listeners.keyup);
    }

    /**
     * Change cropzone visible
     * @param {boolean} visible - cropzone visible state
     */

  }, {
    key: 'changeVisibility',
    value: function changeVisibility(visible) {
      if (this._cropzone) {
        this._cropzone.set({ visible: visible });
      }
    }

    /**
     * onMousedown handler in fabric canvas
     * @param {{target: fabric.Object, e: MouseEvent}} fEvent - Fabric event
     * @private
     */

  }, {
    key: '_onFabricMouseDown',
    value: function _onFabricMouseDown(fEvent) {
      var canvas = this.getCanvas();

      if (fEvent.target) {
        return;
      }

      canvas.selection = false;
      var coord = canvas.getPointer(fEvent.e);

      this._startX = coord.x;
      this._startY = coord.y;

      canvas.on({
        'mouse:move': this._listeners.mousemove,
        'mouse:up': this._listeners.mouseup
      });
    }

    /**
     * onMousemove handler in fabric canvas
     * @param {{target: fabric.Object, e: MouseEvent}} fEvent - Fabric event
     * @private
     */

  }, {
    key: '_onFabricMouseMove',
    value: function _onFabricMouseMove(fEvent) {
      var canvas = this.getCanvas();
      var pointer = canvas.getPointer(fEvent.e);
      var x = pointer.x,
          y = pointer.y;

      var cropzone = this._cropzone;

      if (Math.abs(x - this._startX) + Math.abs(y - this._startY) > MOUSE_MOVE_THRESHOLD) {
        canvas.remove(cropzone);
        cropzone.set(this._calcRectDimensionFromPoint(x, y));

        canvas.add(cropzone);
        canvas.setActiveObject(cropzone);
      }
    }

    /**
     * Get rect dimension setting from Canvas-Mouse-Position(x, y)
     * @param {number} x - Canvas-Mouse-Position x
     * @param {number} y - Canvas-Mouse-Position Y
     * @returns {{left: number, top: number, width: number, height: number}}
     * @private
     */

  }, {
    key: '_calcRectDimensionFromPoint',
    value: function _calcRectDimensionFromPoint(x, y) {
      var canvas = this.getCanvas();
      var canvasWidth = canvas.getWidth();
      var canvasHeight = canvas.getHeight();
      var startX = this._startX;
      var startY = this._startY;
      var left = (0, _util.clamp)(x, 0, startX);
      var top = (0, _util.clamp)(y, 0, startY);
      var width = (0, _util.clamp)(x, startX, canvasWidth) - left; // (startX <= x(mouse) <= canvasWidth) - left
      var height = (0, _util.clamp)(y, startY, canvasHeight) - top; // (startY <= y(mouse) <= canvasHeight) - top

      if (this._withShiftKey) {
        // make fixed ratio cropzone
        if (width > height) {
          height = width;
        } else if (height > width) {
          width = height;
        }

        if (startX >= x) {
          left = startX - width;
        }

        if (startY >= y) {
          top = startY - height;
        }
      }

      return {
        left: left,
        top: top,
        width: width,
        height: height
      };
    }

    /**
     * onMouseup handler in fabric canvas
     * @private
     */

  }, {
    key: '_onFabricMouseUp',
    value: function _onFabricMouseUp() {
      var cropzone = this._cropzone;
      var listeners = this._listeners;
      var canvas = this.getCanvas();

      canvas.setActiveObject(cropzone);
      canvas.off({
        'mouse:move': listeners.mousemove,
        'mouse:up': listeners.mouseup
      });
    }

    /**
     * Get cropped image data
     * @param {Object} cropRect cropzone rect
     *  @param {Number} cropRect.left left position
     *  @param {Number} cropRect.top top position
     *  @param {Number} cropRect.width width
     *  @param {Number} cropRect.height height
     * @returns {?{imageName: string, url: string}} cropped Image data
     */

  }, {
    key: 'getCroppedImageData',
    value: function getCroppedImageData(cropRect) {
      var canvas = this.getCanvas();
      var containsCropzone = canvas.contains(this._cropzone);
      if (!cropRect) {
        return null;
      }

      if (containsCropzone) {
        canvas.remove(this._cropzone);
      }

      var imageData = {
        imageName: this.getImageName(),
        url: canvas.toDataURL(cropRect)
      };

      if (containsCropzone) {
        canvas.add(this._cropzone);
      }

      return imageData;
    }

    /**
     * Get cropped rect
     * @returns {Object} rect
     */

  }, {
    key: 'getCropzoneRect',
    value: function getCropzoneRect() {
      var cropzone = this._cropzone;

      if (!cropzone.isValid()) {
        return null;
      }

      return {
        left: cropzone.left,
        top: cropzone.top,
        width: cropzone.width,
        height: cropzone.height
      };
    }

    /**
     * Set a cropzone square
     * @param {number} [presetRatio] - preset ratio
     */

  }, {
    key: 'setCropzoneRect',
    value: function setCropzoneRect(presetRatio) {
      var canvas = this.getCanvas();
      var cropzone = this._cropzone;

      canvas.discardActiveObject();
      canvas.selection = false;
      canvas.remove(cropzone);

      cropzone.set(presetRatio ? this._getPresetPropertiesForCropSize(presetRatio) : DEFAULT_OPTION);

      canvas.add(cropzone);
      canvas.selection = true;

      if (presetRatio) {
        canvas.setActiveObject(cropzone);
      }
    }

    /**
     * get a cropzone square info
     * @param {number} presetRatio - preset ratio
     * @returns {{presetRatio: number, left: number, top: number, width: number, height: number}}
     * @private
     */

  }, {
    key: '_getPresetPropertiesForCropSize',
    value: function _getPresetPropertiesForCropSize(presetRatio) {
      var canvas = this.getCanvas();
      var originalWidth = canvas.getWidth();
      var originalHeight = canvas.getHeight();

      var standardSize = originalWidth >= originalHeight ? originalWidth : originalHeight;
      var getScale = function getScale(value, orignalValue) {
        return value > orignalValue ? orignalValue / value : 1;
      };

      var width = standardSize * presetRatio;
      var height = standardSize;

      var scaleWidth = getScale(width, originalWidth);

      var _snippet$map = _tuiCodeSnippet2.default.map([width, height], function (sizeValue) {
        return sizeValue * scaleWidth;
      });

      width = _snippet$map[0];
      height = _snippet$map[1];


      var scaleHeight = getScale(height, originalHeight);

      var _snippet$map2 = _tuiCodeSnippet2.default.map([width, height], function (sizeValue) {
        return (0, _util.fixFloatingPoint)(sizeValue * scaleHeight);
      });

      width = _snippet$map2[0];
      height = _snippet$map2[1];


      return {
        presetRatio: presetRatio,
        top: (originalHeight - height) / 2,
        left: (originalWidth - width) / 2,
        width: width,
        height: height
      };
    }

    /**
     * Keydown event handler
     * @param {KeyboardEvent} e - Event object
     * @private
     */

  }, {
    key: '_onKeyDown',
    value: function _onKeyDown(e) {
      if (e.keyCode === _consts.keyCodes.SHIFT) {
        this._withShiftKey = true;
      }
    }

    /**
     * Keyup event handler
     * @param {KeyboardEvent} e - Event object
     * @private
     */

  }, {
    key: '_onKeyUp',
    value: function _onKeyUp(e) {
      if (e.keyCode === _consts.keyCodes.SHIFT) {
        this._withShiftKey = false;
      }
    }
  }]);

  return Cropper;
}(_component2.default);

exports.default = Cropper;

/***/ }),

/***/ "./src/js/component/filter.js":
/*!************************************!*\
  !*** ./src/js/component/filter.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tuiCodeSnippet = __webpack_require__(/*! tui-code-snippet */ "tui-code-snippet");

var _fabric = __webpack_require__(/*! fabric */ "fabric");

var _fabric2 = _interopRequireDefault(_fabric);

var _component = __webpack_require__(/*! @/interface/component */ "./src/js/interface/component.js");

var _component2 = _interopRequireDefault(_component);

var _util = __webpack_require__(/*! @/util */ "./src/js/util.js");

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

var _mask = __webpack_require__(/*! @/extension/mask */ "./src/js/extension/mask.js");

var _mask2 = _interopRequireDefault(_mask);

var _sharpen = __webpack_require__(/*! @/extension/sharpen */ "./src/js/extension/sharpen.js");

var _sharpen2 = _interopRequireDefault(_sharpen);

var _emboss = __webpack_require__(/*! @/extension/emboss */ "./src/js/extension/emboss.js");

var _emboss2 = _interopRequireDefault(_emboss);

var _colorFilter = __webpack_require__(/*! @/extension/colorFilter */ "./src/js/extension/colorFilter.js");

var _colorFilter2 = _interopRequireDefault(_colorFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author NHN. FE Development Team <dl_javascript@nhn.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @fileoverview Add filter module
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var filters = _fabric2.default.Image.filters;


filters.Mask = _mask2.default;
filters.Sharpen = _sharpen2.default;
filters.Emboss = _emboss2.default;
filters.ColorFilter = _colorFilter2.default;

/**
 * Filter
 * @class Filter
 * @param {Graphics} graphics - Graphics instance
 * @extends {Component}
 * @ignore
 */

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter(graphics) {
    _classCallCheck(this, Filter);

    return _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this, _consts.componentNames.FILTER, graphics));
  }

  /**
   * Add filter to source image (a specific filter is added on fabric.js)
   * @param {string} type - Filter type
   * @param {Object} [options] - Options of filter
   * @returns {Promise}
   */


  _createClass(Filter, [{
    key: 'add',
    value: function add(type, options) {
      var _this2 = this;

      return new _util.Promise(function (resolve, reject) {
        var sourceImg = _this2._getSourceImage();
        var canvas = _this2.getCanvas();
        var imgFilter = _this2._getFilter(sourceImg, type);
        if (!imgFilter) {
          imgFilter = _this2._createFilter(sourceImg, type, options);
        }

        if (!imgFilter) {
          reject(_consts.rejectMessages.invalidParameters);
        }

        _this2._changeFilterValues(imgFilter, options);

        _this2._apply(sourceImg, function () {
          canvas.renderAll();
          resolve({
            type: type,
            action: 'add',
            options: options
          });
        });
      });
    }

    /**
     * Remove filter to source image
     * @param {string} type - Filter type
     * @returns {Promise}
     */

  }, {
    key: 'remove',
    value: function remove(type) {
      var _this3 = this;

      return new _util.Promise(function (resolve, reject) {
        var sourceImg = _this3._getSourceImage();
        var canvas = _this3.getCanvas();
        var options = _this3.getOptions(type);

        if (!sourceImg.filters.length) {
          reject(_consts.rejectMessages.unsupportedOperation);
        }

        _this3._removeFilter(sourceImg, type);

        _this3._apply(sourceImg, function () {
          canvas.renderAll();
          resolve({
            type: type,
            action: 'remove',
            options: options
          });
        });
      });
    }

    /**
     * Whether this has the filter or not
     * @param {string} type - Filter type
     * @returns {boolean} true if it has the filter
     */

  }, {
    key: 'hasFilter',
    value: function hasFilter(type) {
      return !!this._getFilter(this._getSourceImage(), type);
    }

    /**
     * Get a filter options
     * @param {string} type - Filter type
     * @returns {Object} filter options or null if there is no that filter
     */

  }, {
    key: 'getOptions',
    value: function getOptions(type) {
      var sourceImg = this._getSourceImage();
      var imgFilter = this._getFilter(sourceImg, type);
      if (!imgFilter) {
        return null;
      }

      return (0, _tuiCodeSnippet.extend)({}, imgFilter.options);
    }

    /**
     * Change filter values
     * @param {Object} imgFilter object of filter
     * @param {Object} options object
     * @private
     */

  }, {
    key: '_changeFilterValues',
    value: function _changeFilterValues(imgFilter, options) {
      (0, _tuiCodeSnippet.forEach)(options, function (value, key) {
        if (!(0, _tuiCodeSnippet.isUndefined)(imgFilter[key])) {
          imgFilter[key] = value;
        }
      });
      (0, _tuiCodeSnippet.forEach)(imgFilter.options, function (value, key) {
        if (!(0, _tuiCodeSnippet.isUndefined)(options[key])) {
          imgFilter.options[key] = options[key];
        }
      });
    }

    /**
     * Apply filter
     * @param {fabric.Image} sourceImg - Source image to apply filter
     * @param {function} callback - Executed function after applying filter
     * @private
     */

  }, {
    key: '_apply',
    value: function _apply(sourceImg, callback) {
      sourceImg.filters.push();
      var result = sourceImg.applyFilters();
      if (result) {
        callback();
      }
    }

    /**
     * Get source image on canvas
     * @returns {fabric.Image} Current source image on canvas
     * @private
     */

  }, {
    key: '_getSourceImage',
    value: function _getSourceImage() {
      return this.getCanvasImage();
    }

    /**
     * Create filter instance
     * @param {fabric.Image} sourceImg - Source image to apply filter
     * @param {string} type - Filter type
     * @param {Object} [options] - Options of filter
     * @returns {Object} Fabric object of filter
     * @private
     */

  }, {
    key: '_createFilter',
    value: function _createFilter(sourceImg, type, options) {
      var filterObj = void 0;
      // capitalize first letter for matching with fabric image filter name
      var fabricType = this._getFabricFilterType(type);
      var ImageFilter = _fabric2.default.Image.filters[fabricType];
      if (ImageFilter) {
        filterObj = new ImageFilter(options);
        filterObj.options = options;
        sourceImg.filters.push(filterObj);
      }

      return filterObj;
    }

    /**
     * Get applied filter instance
     * @param {fabric.Image} sourceImg - Source image to apply filter
     * @param {string} type - Filter type
     * @returns {Object} Fabric object of filter
     * @private
     */

  }, {
    key: '_getFilter',
    value: function _getFilter(sourceImg, type) {
      var imgFilter = null;

      if (sourceImg) {
        var fabricType = this._getFabricFilterType(type);
        var length = sourceImg.filters.length;

        var item = void 0,
            i = void 0;

        for (i = 0; i < length; i += 1) {
          item = sourceImg.filters[i];
          if (item.type === fabricType) {
            imgFilter = item;
            break;
          }
        }
      }

      return imgFilter;
    }

    /**
     * Remove applied filter instance
     * @param {fabric.Image} sourceImg - Source image to apply filter
     * @param {string} type - Filter type
     * @private
     */

  }, {
    key: '_removeFilter',
    value: function _removeFilter(sourceImg, type) {
      var fabricType = this._getFabricFilterType(type);
      sourceImg.filters = (0, _tuiCodeSnippet.filter)(sourceImg.filters, function (value) {
        return value.type !== fabricType;
      });
    }

    /**
     * Change filter class name to fabric's, especially capitalizing first letter
     * @param {string} type - Filter type
     * @example
     * 'grayscale' -> 'Grayscale'
     * @returns {string} Fabric filter class name
     */

  }, {
    key: '_getFabricFilterType',
    value: function _getFabricFilterType(type) {
      return type.charAt(0).toUpperCase() + type.slice(1);
    }
  }]);

  return Filter;
}(_component2.default);

exports.default = Filter;

/***/ }),

/***/ "./src/js/component/flip.js":
/*!**********************************!*\
  !*** ./src/js/component/flip.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tuiCodeSnippet = __webpack_require__(/*! tui-code-snippet */ "tui-code-snippet");

var _tuiCodeSnippet2 = _interopRequireDefault(_tuiCodeSnippet);

var _component = __webpack_require__(/*! @/interface/component */ "./src/js/interface/component.js");

var _component2 = _interopRequireDefault(_component);

var _util = __webpack_require__(/*! @/util */ "./src/js/util.js");

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author NHN. FE Development Team <dl_javascript@nhn.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @fileoverview Image flip module
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * Flip
 * @class Flip
 * @param {Graphics} graphics - Graphics instance
 * @extends {Component}
 * @ignore
 */
var Flip = function (_Component) {
  _inherits(Flip, _Component);

  function Flip(graphics) {
    _classCallCheck(this, Flip);

    return _possibleConstructorReturn(this, (Flip.__proto__ || Object.getPrototypeOf(Flip)).call(this, _consts.componentNames.FLIP, graphics));
  }

  /**
   * Get current flip settings
   * @returns {{flipX: Boolean, flipY: Boolean}}
   */


  _createClass(Flip, [{
    key: 'getCurrentSetting',
    value: function getCurrentSetting() {
      var canvasImage = this.getCanvasImage();

      return {
        flipX: canvasImage.flipX,
        flipY: canvasImage.flipY
      };
    }

    /**
     * Set flipX, flipY
     * @param {{flipX: Boolean, flipY: Boolean}} newSetting - Flip setting
     * @returns {Promise}
     */

  }, {
    key: 'set',
    value: function set(newSetting) {
      var setting = this.getCurrentSetting();
      var isChangingFlipX = setting.flipX !== newSetting.flipX;
      var isChangingFlipY = setting.flipY !== newSetting.flipY;

      if (!isChangingFlipX && !isChangingFlipY) {
        return _util.Promise.reject(_consts.rejectMessages.flip);
      }

      _tuiCodeSnippet2.default.extend(setting, newSetting);
      this.setImageProperties(setting, true);
      this._invertAngle(isChangingFlipX, isChangingFlipY);
      this._flipObjects(isChangingFlipX, isChangingFlipY);

      return _util.Promise.resolve({
        flipX: setting.flipX,
        flipY: setting.flipY,
        angle: this.getCanvasImage().angle
      });
    }

    /**
     * Invert image angle for flip
     * @param {boolean} isChangingFlipX - Change flipX
     * @param {boolean} isChangingFlipY - Change flipY
     */

  }, {
    key: '_invertAngle',
    value: function _invertAngle(isChangingFlipX, isChangingFlipY) {
      var canvasImage = this.getCanvasImage();
      var angle = canvasImage.angle;


      if (isChangingFlipX) {
        angle *= -1;
      }
      if (isChangingFlipY) {
        angle *= -1;
      }
      canvasImage.rotate(parseFloat(angle)).setCoords(); // parseFloat for -0 to 0
    }

    /**
     * Flip objects
     * @param {boolean} isChangingFlipX - Change flipX
     * @param {boolean} isChangingFlipY - Change flipY
     * @private
     */

  }, {
    key: '_flipObjects',
    value: function _flipObjects(isChangingFlipX, isChangingFlipY) {
      var canvas = this.getCanvas();

      if (isChangingFlipX) {
        canvas.forEachObject(function (obj) {
          obj.set({
            angle: parseFloat(obj.angle * -1), // parseFloat for -0 to 0
            flipX: !obj.flipX,
            left: canvas.width - obj.left
          }).setCoords();
        });
      }
      if (isChangingFlipY) {
        canvas.forEachObject(function (obj) {
          obj.set({
            angle: parseFloat(obj.angle * -1), // parseFloat for -0 to 0
            flipY: !obj.flipY,
            top: canvas.height - obj.top
          }).setCoords();
        });
      }
      canvas.renderAll();
    }

    /**
     * Reset flip settings
     * @returns {Promise}
     */

  }, {
    key: 'reset',
    value: function reset() {
      return this.set({
        flipX: false,
        flipY: false
      });
    }

    /**
     * Flip x
     * @returns {Promise}
     */

  }, {
    key: 'flipX',
    value: function flipX() {
      var current = this.getCurrentSetting();

      return this.set({
        flipX: !current.flipX,
        flipY: current.flipY
      });
    }

    /**
     * Flip y
     * @returns {Promise}
     */

  }, {
    key: 'flipY',
    value: function flipY() {
      var current = this.getCurrentSetting();

      return this.set({
        flipX: current.flipX,
        flipY: !current.flipY
      });
    }
  }]);

  return Flip;
}(_component2.default);

exports.default = Flip;

/***/ }),

/***/ "./src/js/component/freeDrawing.js":
/*!*****************************************!*\
  !*** ./src/js/component/freeDrawing.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fabric = __webpack_require__(/*! fabric */ "fabric");

var _fabric2 = _interopRequireDefault(_fabric);

var _component = __webpack_require__(/*! @/interface/component */ "./src/js/interface/component.js");

var _component2 = _interopRequireDefault(_component);

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author NHN. FE Development Team <dl_javascript@nhn.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @fileoverview Free drawing module, Set brush
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * FreeDrawing
 * @class FreeDrawing
 * @param {Graphics} graphics - Graphics instance
 * @extends {Component}
 * @ignore
 */
var FreeDrawing = function (_Component) {
  _inherits(FreeDrawing, _Component);

  function FreeDrawing(graphics) {
    _classCallCheck(this, FreeDrawing);

    /**
     * Brush width
     * @type {number}
     */
    var _this = _possibleConstructorReturn(this, (FreeDrawing.__proto__ || Object.getPrototypeOf(FreeDrawing)).call(this, _consts.componentNames.FREE_DRAWING, graphics));

    _this.width = 12;

    /**
     * fabric.Color instance for brush color
     * @type {fabric.Color}
     */
    _this.oColor = new _fabric2.default.Color('rgba(0, 0, 0, 0.5)');
    return _this;
  }

  /**
   * Start free drawing mode
   * @param {{width: ?number, color: ?string}} [setting] - Brush width & color
   */


  _createClass(FreeDrawing, [{
    key: 'start',
    value: function start(setting) {
      var canvas = this.getCanvas();

      canvas.isDrawingMode = true;
      this.setBrush(setting);
    }

    /**
     * Set brush
     * @param {{width: ?number, color: ?string}} [setting] - Brush width & color
     */

  }, {
    key: 'setBrush',
    value: function setBrush(setting) {
      var brush = this.getCanvas().freeDrawingBrush;

      setting = setting || {};
      this.width = setting.width || this.width;
      if (setting.color) {
        this.oColor = new _fabric2.default.Color(setting.color);
      }
      brush.width = this.width;
      brush.color = this.oColor.toRgba();
    }

    /**
     * End free drawing mode
     */

  }, {
    key: 'end',
    value: function end() {
      var canvas = this.getCanvas();

      canvas.isDrawingMode = false;
    }
  }]);

  return FreeDrawing;
}(_component2.default);

exports.default = FreeDrawing;

/***/ }),

/***/ "./src/js/component/icon.js":
/*!**********************************!*\
  !*** ./src/js/component/icon.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tuiCodeSnippet = __webpack_require__(/*! tui-code-snippet */ "tui-code-snippet");

var _tuiCodeSnippet2 = _interopRequireDefault(_tuiCodeSnippet);

var _fabric = __webpack_require__(/*! fabric */ "fabric");

var _fabric2 = _interopRequireDefault(_fabric);

var _component = __webpack_require__(/*! @/interface/component */ "./src/js/interface/component.js");

var _component2 = _interopRequireDefault(_component);

var _util = __webpack_require__(/*! @/util */ "./src/js/util.js");

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author NHN. FE Development Team <dl_javascript@nhn.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @fileoverview Add icon module
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var pathMap = {
  arrow: 'M 0 90 H 105 V 120 L 160 60 L 105 0 V 30 H 0 Z',
  cancel: 'M 0 30 L 30 60 L 0 90 L 30 120 L 60 90 L 90 120 L 120 90 ' + 'L 90 60 L 120 30 L 90 0 L 60 30 L 30 0 Z'
};

/**
 * Icon
 * @class Icon
 * @param {Graphics} graphics - Graphics instance
 * @extends {Component}
 * @ignore
 */

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon(graphics) {
    _classCallCheck(this, Icon);

    /**
     * Default icon color
     * @type {string}
     */
    var _this = _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).call(this, _consts.componentNames.ICON, graphics));

    _this._oColor = '#000000';

    /**
     * Path value of each icon type
     * @type {Object}
     */
    _this._pathMap = pathMap;

    /**
     * Type of the drawing icon
     * @type {string}
     * @private
     */
    _this._type = null;

    /**
     * Color of the drawing icon
     * @type {string}
     * @private
     */
    _this._iconColor = null;

    /**
     * Event handler list
     * @type {Object}
     * @private
     */
    _this._handlers = {
      mousedown: _this._onFabricMouseDown.bind(_this),
      mousemove: _this._onFabricMouseMove.bind(_this),
      mouseup: _this._onFabricMouseUp.bind(_this)
    };
    return _this;
  }

  /**
   * Set states of the current drawing shape
   * @ignore
   * @param {string} type - Icon type ('arrow', 'cancel', custom icon name)
   * @param {string} iconColor - Icon foreground color
   */


  _createClass(Icon, [{
    key: 'setStates',
    value: function setStates(type, iconColor) {
      this._type = type;
      this._iconColor = iconColor;
    }

    /**
     * Start to draw the icon on canvas
     * @ignore
     */

  }, {
    key: 'start',
    value: function start() {
      var canvas = this.getCanvas();
      canvas.selection = false;
      canvas.on('mouse:down', this._handlers.mousedown);
    }

    /**
     * End to draw the icon on canvas
     * @ignore
     */

  }, {
    key: 'end',
    value: function end() {
      var canvas = this.getCanvas();

      canvas.selection = true;
      canvas.off({
        'mouse:down': this._handlers.mousedown
      });
    }

    /**
     * Add icon
     * @param {string} type - Icon type
     * @param {Object} options - Icon options
     *      @param {string} [options.fill] - Icon foreground color
     *      @param {string} [options.left] - Icon x position
     *      @param {string} [options.top] - Icon y position
     * @returns {Promise}
     */

  }, {
    key: 'add',
    value: function add(type, options) {
      var _this2 = this;

      return new _util.Promise(function (resolve, reject) {
        var canvas = _this2.getCanvas();
        var path = _this2._pathMap[type];
        var selectionStyle = _consts.fObjectOptions.SELECTION_STYLE;
        var icon = path ? _this2._createIcon(path) : null;
        _this2._icon = icon;

        if (!icon) {
          reject(_consts.rejectMessages.invalidParameters);
        }

        icon.set(_tuiCodeSnippet2.default.extend({
          type: 'icon',
          fill: _this2._oColor
        }, selectionStyle, options, _this2.graphics.controlStyle));

        canvas.add(icon).setActiveObject(icon);

        resolve(_this2.graphics.createObjectProperties(icon));
      });
    }

    /**
     * Register icon paths
     * @param {{key: string, value: string}} pathInfos - Path infos
     */

  }, {
    key: 'registerPaths',
    value: function registerPaths(pathInfos) {
      var _this3 = this;

      _tuiCodeSnippet2.default.forEach(pathInfos, function (path, type) {
        _this3._pathMap[type] = path;
      }, this);
    }

    /**
     * Set icon object color
     * @param {string} color - Color to set
     * @param {fabric.Path}[obj] - Current activated path object
     */

  }, {
    key: 'setColor',
    value: function setColor(color, obj) {
      this._oColor = color;

      if (obj && obj.get('type') === 'icon') {
        obj.set({ fill: this._oColor });
        this.getCanvas().renderAll();
      }
    }

    /**
     * Get icon color
     * @param {fabric.Path}[obj] - Current activated path object
     * @returns {string} color
     */

  }, {
    key: 'getColor',
    value: function getColor(obj) {
      return obj.fill;
    }

    /**
     * Create icon object
     * @param {string} path - Path value to create icon
     * @returns {fabric.Path} Path object
     */

  }, {
    key: '_createIcon',
    value: function _createIcon(path) {
      return new _fabric2.default.Path(path);
    }

    /**
     * MouseDown event handler on canvas
     * @param {{target: fabric.Object, e: MouseEvent}} fEvent - Fabric event object
     * @private
     */

  }, {
    key: '_onFabricMouseDown',
    value: function _onFabricMouseDown(fEvent) {
      var _this4 = this;

      var canvas = this.getCanvas();

      this._startPoint = canvas.getPointer(fEvent.e);
      var _startPoint = this._startPoint,
          left = _startPoint.x,
          top = _startPoint.y;


      this.add(this._type, {
        left: left,
        top: top,
        fill: this._iconColor
      }).then(function () {
        _this4.fire(_consts.eventNames.ADD_OBJECT, _this4.graphics.createObjectProperties(_this4._icon));
        canvas.on('mouse:move', _this4._handlers.mousemove);
        canvas.on('mouse:up', _this4._handlers.mouseup);
      });
    }

    /**
     * MouseMove event handler on canvas
     * @param {{target: fabric.Object, e: MouseEvent}} fEvent - Fabric event object
     * @private
     */

  }, {
    key: '_onFabricMouseMove',
    value: function _onFabricMouseMove(fEvent) {
      var canvas = this.getCanvas();

      if (!this._icon) {
        return;
      }
      var moveOriginPointer = canvas.getPointer(fEvent.e);

      var scaleX = (moveOriginPointer.x - this._startPoint.x) / this._icon.width;
      var scaleY = (moveOriginPointer.y - this._startPoint.y) / this._icon.height;

      this._icon.set({
        scaleX: Math.abs(scaleX * 2),
        scaleY: Math.abs(scaleY * 2)
      });

      this._icon.setCoords();
      canvas.renderAll();
    }

    /**
     * MouseUp event handler on canvas
     * @private
     */

  }, {
    key: '_onFabricMouseUp',
    value: function _onFabricMouseUp() {
      var canvas = this.getCanvas();

      this.fire(_consts.eventNames.OBJECT_ADDED, this.graphics.createObjectProperties(this._icon));

      this._icon = null;

      canvas.off('mouse:down', this._handlers.mousedown);
      canvas.off('mouse:move', this._handlers.mousemove);
      canvas.off('mouse:up', this._handlers.mouseup);
    }
  }]);

  return Icon;
}(_component2.default);

exports.default = Icon;

/***/ }),

/***/ "./src/js/component/imageLoader.js":
/*!*****************************************!*\
  !*** ./src/js/component/imageLoader.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(/*! @/interface/component */ "./src/js/interface/component.js");

var _component2 = _interopRequireDefault(_component);

var _util = __webpack_require__(/*! @/util */ "./src/js/util.js");

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author NHN. FE Development Team <dl_javascript@nhn.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @fileoverview Image loader
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var imageOption = {
  padding: 0,
  crossOrigin: 'Anonymous'
};

/**
 * ImageLoader components
 * @extends {Component}
 * @class ImageLoader
 * @param {Graphics} graphics - Graphics instance
 * @ignore
 */

var ImageLoader = function (_Component) {
  _inherits(ImageLoader, _Component);

  function ImageLoader(graphics) {
    _classCallCheck(this, ImageLoader);

    return _possibleConstructorReturn(this, (ImageLoader.__proto__ || Object.getPrototypeOf(ImageLoader)).call(this, _consts.componentNames.IMAGE_LOADER, graphics));
  }

  /**
   * Load image from url
   * @param {?string} imageName - File name
   * @param {?(fabric.Image|string)} img - fabric.Image instance or URL of an image
   * @returns {Promise}
   */


  _createClass(ImageLoader, [{
    key: 'load',
    value: function load(imageName, img) {
      var _this2 = this;

      var promise = void 0;

      if (!imageName && !img) {
        // Back to the initial state, not error.
        var canvas = this.getCanvas();

        canvas.backgroundImage = null;
        canvas.renderAll();

        promise = new _util.Promise(function (resolve) {
          _this2.setCanvasImage('', null);
          resolve();
        });
      } else {
        promise = this._setBackgroundImage(img).then(function (oImage) {
          _this2.setCanvasImage(imageName, oImage);
          _this2.adjustCanvasDimension();

          return oImage;
        });
      }

      return promise;
    }

    /**
     * Set background image
     * @param {?(fabric.Image|String)} img fabric.Image instance or URL of an image to set background to
     * @returns {Promise}
     * @private
     */

  }, {
    key: '_setBackgroundImage',
    value: function _setBackgroundImage(img) {
      var _this3 = this;

      if (!img) {
        return _util.Promise.reject(_consts.rejectMessages.loadImage);
      }

      return new _util.Promise(function (resolve, reject) {
        var canvas = _this3.getCanvas();

        canvas.setBackgroundImage(img, function () {
          var oImage = canvas.backgroundImage;

          if (oImage && oImage.getElement()) {
            resolve(oImage);
          } else {
            reject(_consts.rejectMessages.loadingImageFailed);
          }
        }, imageOption);
      });
    }
  }]);

  return ImageLoader;
}(_component2.default);

exports.default = ImageLoader;

/***/ }),

/***/ "./src/js/component/jsonLoader.js":
/*!****************************************!*\
  !*** ./src/js/component/jsonLoader.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(/*! @/interface/component */ "./src/js/interface/component.js");

var _component2 = _interopRequireDefault(_component);

var _util = __webpack_require__(/*! @/util */ "./src/js/util.js");

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author NHN. FE Development Team <dl_javascript@nhn.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @fileoverview JSON loader
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * JsonLoader components
 * @extends {Component}
 * @class JsonLoader
 * @param {Graphics} graphics - Graphics instance
 * @ignore
 */
var JsonLoader = function (_Component) {
  _inherits(JsonLoader, _Component);

  function JsonLoader(graphics) {
    _classCallCheck(this, JsonLoader);

    return _possibleConstructorReturn(this, (JsonLoader.__proto__ || Object.getPrototypeOf(JsonLoader)).call(this, _consts.componentNames.JSON_LOADER, graphics));
  }

  _createClass(JsonLoader, [{
    key: 'load',
    value: function load(json) {
      var promise = void 0;

      if (!json) {
        // Back to the initial state, not error.
        var canvas = this.getCanvas();

        canvas.renderAll();

        promise = new _util.Promise(function (resolve) {
          resolve();
        });
      } else {
        promise = this._loadJson(json).then(function (objs) {
          return objs;
        });
      }

      return promise;
    }
  }, {
    key: '_loadJson',
    value: function _loadJson(json) {
      var _this2 = this;

      if (!json) {
        return _util.Promise.reject(_consts.rejectMessages.loadJson);
      }

      return new _util.Promise(function (resolve, reject) {
        var canvas = _this2.getCanvas();

        canvas.loadFromJSON(json, function () {
          var objs = canvas.getObjects();
          if (objs) {
            resolve(objs);
          } else {
            reject(_consts.rejectMessages.loadingJsonFailed);
          }
        });
      });
    }
  }]);

  return JsonLoader;
}(_component2.default);

exports.default = JsonLoader;

/***/ }),

/***/ "./src/js/component/line.js":
/*!**********************************!*\
  !*** ./src/js/component/line.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tuiCodeSnippet = __webpack_require__(/*! tui-code-snippet */ "tui-code-snippet");

var _tuiCodeSnippet2 = _interopRequireDefault(_tuiCodeSnippet);

var _fabric = __webpack_require__(/*! fabric */ "fabric");

var _fabric2 = _interopRequireDefault(_fabric);

var _component = __webpack_require__(/*! @/interface/component */ "./src/js/interface/component.js");

var _component2 = _interopRequireDefault(_component);

var _arrowLine = __webpack_require__(/*! @/extension/arrowLine */ "./src/js/extension/arrowLine.js");

var _arrowLine2 = _interopRequireDefault(_arrowLine);

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author NHN. FE Development Team <dl_javascript@nhn.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @fileoverview Free drawing module, Set brush
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * Line
 * @class Line
 * @param {Graphics} graphics - Graphics instance
 * @extends {Component}
 * @ignore
 */
var Line = function (_Component) {
  _inherits(Line, _Component);

  function Line(graphics) {
    _classCallCheck(this, Line);

    /**
     * Brush width
     * @type {number}
     * @private
     */
    var _this = _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).call(this, _consts.componentNames.LINE, graphics));

    _this._width = 12;

    /**
     * fabric.Color instance for brush color
     * @type {fabric.Color}
     * @private
     */
    _this._oColor = new _fabric2.default.Color('rgba(0, 0, 0, 0.5)');

    /**
     * Listeners
     * @type {object.<string, function>}
     * @private
     */
    _this._listeners = {
      mousedown: _this._onFabricMouseDown.bind(_this),
      mousemove: _this._onFabricMouseMove.bind(_this),
      mouseup: _this._onFabricMouseUp.bind(_this)
    };
    return _this;
  }

  /**
   * Start drawing line mode
   * @param {{width: ?number, color: ?string}} [setting] - Brush width & color
   */


  _createClass(Line, [{
    key: 'setHeadOption',
    value: function setHeadOption(setting) {
      var _setting$arrowType = setting.arrowType,
          arrowType = _setting$arrowType === undefined ? {
        head: null,
        tail: null
      } : _setting$arrowType;


      this._arrowType = arrowType;
    }

    /**
     * Start drawing line mode
     * @param {{width: ?number, color: ?string}} [setting] - Brush width & color
     */

  }, {
    key: 'start',
    value: function start() {
      var setting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var canvas = this.getCanvas();

      canvas.defaultCursor = 'crosshair';
      canvas.selection = false;

      this.setHeadOption(setting);
      this.setBrush(setting);

      canvas.forEachObject(function (obj) {
        obj.set({
          evented: false
        });
      });

      canvas.on({
        'mouse:down': this._listeners.mousedown
      });
    }

    /**
     * Set brush
     * @param {{width: ?number, color: ?string}} [setting] - Brush width & color
     */

  }, {
    key: 'setBrush',
    value: function setBrush(setting) {
      var brush = this.getCanvas().freeDrawingBrush;

      setting = setting || {};
      this._width = setting.width || this._width;

      if (setting.color) {
        this._oColor = new _fabric2.default.Color(setting.color);
      }
      brush.width = this._width;
      brush.color = this._oColor.toRgba();
    }

    /**
     * End drawing line mode
     */

  }, {
    key: 'end',
    value: function end() {
      var canvas = this.getCanvas();

      canvas.defaultCursor = 'default';
      canvas.selection = true;

      canvas.forEachObject(function (obj) {
        obj.set({
          evented: true
        });
      });

      canvas.off('mouse:down', this._listeners.mousedown);
    }

    /**
     * Mousedown event handler in fabric canvas
     * @param {{target: fabric.Object, e: MouseEvent}} fEvent - Fabric event object
     * @private
     */

  }, {
    key: '_onFabricMouseDown',
    value: function _onFabricMouseDown(fEvent) {
      var canvas = this.getCanvas();

      var _canvas$getPointer = canvas.getPointer(fEvent.e),
          x = _canvas$getPointer.x,
          y = _canvas$getPointer.y;

      var points = [x, y, x, y];

      this._line = new _arrowLine2.default(points, {
        stroke: this._oColor.toRgba(),
        strokeWidth: this._width,
        arrowType: this._arrowType,
        evented: false
      });

      this._line.set(_consts.fObjectOptions.SELECTION_STYLE);

      canvas.add(this._line);

      canvas.on({
        'mouse:move': this._listeners.mousemove,
        'mouse:up': this._listeners.mouseup
      });

      this.fire(_consts.eventNames.ADD_OBJECT, this._createLineEventObjectProperties());
    }

    /**
     * Mousemove event handler in fabric canvas
     * @param {{target: fabric.Object, e: MouseEvent}} fEvent - Fabric event object
     * @private
     */

  }, {
    key: '_onFabricMouseMove',
    value: function _onFabricMouseMove(fEvent) {
      var canvas = this.getCanvas();
      var pointer = canvas.getPointer(fEvent.e);

      this._line.set({
        x2: pointer.x,
        y2: pointer.y
      });

      this._line.setCoords();

      canvas.renderAll();
    }

    /**
     * Mouseup event handler in fabric canvas
     * @private
     */

  }, {
    key: '_onFabricMouseUp',
    value: function _onFabricMouseUp() {
      var canvas = this.getCanvas();

      this.fire(_consts.eventNames.OBJECT_ADDED, this._createLineEventObjectProperties());

      this._line = null;

      canvas.off({
        'mouse:move': this._listeners.mousemove,
        'mouse:up': this._listeners.mouseup
      });
    }

    /**
     * create line event object properties
     * @returns {Object} properties line object
     * @private
     */

  }, {
    key: '_createLineEventObjectProperties',
    value: function _createLineEventObjectProperties() {
      var params = this.graphics.createObjectProperties(this._line);
      var _line = this._line,
          x1 = _line.x1,
          x2 = _line.x2,
          y1 = _line.y1,
          y2 = _line.y2;


      return _tuiCodeSnippet2.default.extend({}, params, {
        startPosition: {
          x: x1,
          y: y1
        },
        endPosition: {
          x: x2,
          y: y2
        }
      });
    }
  }]);

  return Line;
}(_component2.default);

exports.default = Line;

/***/ }),

/***/ "./src/js/component/resize.js":
/*!************************************!*\
  !*** ./src/js/component/resize.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(/*! @/util */ "./src/js/util.js");

var _component = __webpack_require__(/*! @/interface/component */ "./src/js/interface/component.js");

var _component2 = _interopRequireDefault(_component);

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Resize components
 * @param {Graphics} graphics - Graphics instance
 * @extends {Component}
 * @class Resize
 * @ignore
 */
var Resize = function (_Component) {
  _inherits(Resize, _Component);

  function Resize(graphics) {
    _classCallCheck(this, Resize);

    /**
     * Current dimensions
     * @type {Object}
     * @private
     */
    var _this = _possibleConstructorReturn(this, (Resize.__proto__ || Object.getPrototypeOf(Resize)).call(this, _consts.componentNames.RESIZE, graphics));

    _this._dimensions = null;

    /**
     * Original dimensions
     * @type {Object}
     * @private
     */
    _this._originalDimensions = null;
    return _this;
  }

  /**
   * Get current dimensions
   * @returns {object}
   */


  _createClass(Resize, [{
    key: 'getCurrentDimensions',
    value: function getCurrentDimensions() {
      var canvasImage = this.getCanvasImage();
      if (!this._dimensions && canvasImage) {
        var width = canvasImage.width,
            height = canvasImage.height;

        this._dimensions = { width: width, height: height };
      }

      return this._dimensions;
    }

    /**
     * Get original dimensions
     * @returns {object}
     */

  }, {
    key: 'getOriginalDimensions',
    value: function getOriginalDimensions() {
      return this._originalDimensions;
    }

    /**
     * Set original dimensions
     * @param {object} dimensions - Dimensions
     */

  }, {
    key: 'setOriginalDimensions',
    value: function setOriginalDimensions(dimensions) {
      this._originalDimensions = dimensions;
    }

    /**
     * Resize Image
     * @param {Object} dimensions - Resize dimensions
     * @returns {Promise}
     */

  }, {
    key: 'resize',
    value: function resize(dimensions) {
      var canvasImage = this.getCanvasImage();
      var width = canvasImage.width,
          height = canvasImage.height,
          scaleX = canvasImage.scaleX,
          scaleY = canvasImage.scaleY;
      var dimensionsWidth = dimensions.width,
          dimensionsHeight = dimensions.height;


      var scaleValues = {
        scaleX: dimensionsWidth ? dimensionsWidth / width : scaleX,
        scaleY: dimensionsHeight ? dimensionsHeight / height : scaleY
      };

      if (scaleX !== scaleValues.scaleX || scaleY !== scaleValues.scaleY) {
        canvasImage.set(scaleValues).setCoords();

        this._dimensions = {
          width: canvasImage.width * canvasImage.scaleX,
          height: canvasImage.height * canvasImage.scaleY
        };
      }

      this.adjustCanvasDimensionBase();

      return _util.Promise.resolve();
    }

    /**
     * Start resizing
     */

  }, {
    key: 'start',
    value: function start() {
      var dimensions = this.getCurrentDimensions();
      this.setOriginalDimensions(dimensions);
    }

    /**
     * End resizing
     */

  }, {
    key: 'end',
    value: function end() {}
  }]);

  return Resize;
}(_component2.default);

exports.default = Resize;

/***/ }),

/***/ "./src/js/component/rotation.js":
/*!**************************************!*\
  !*** ./src/js/component/rotation.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fabric = __webpack_require__(/*! fabric */ "fabric");

var _fabric2 = _interopRequireDefault(_fabric);

var _component = __webpack_require__(/*! @/interface/component */ "./src/js/interface/component.js");

var _component2 = _interopRequireDefault(_component);

var _util = __webpack_require__(/*! @/util */ "./src/js/util.js");

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author NHN. FE Development Team <dl_javascript@nhn.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @fileoverview Image rotation module
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * Image Rotation component
 * @class Rotation
 * @extends {Component}
 * @param {Graphics} graphics - Graphics instance
 * @ignore
 */
var Rotation = function (_Component) {
  _inherits(Rotation, _Component);

  function Rotation(graphics) {
    _classCallCheck(this, Rotation);

    return _possibleConstructorReturn(this, (Rotation.__proto__ || Object.getPrototypeOf(Rotation)).call(this, _consts.componentNames.ROTATION, graphics));
  }

  /**
   * Get current angle
   * @returns {Number}
   */


  _createClass(Rotation, [{
    key: 'getCurrentAngle',
    value: function getCurrentAngle() {
      return this.getCanvasImage().angle;
    }

    /**
     * Set angle of the image
     *
     *  Do not call "this.setImageProperties" for setting angle directly.
     *  Before setting angle, The originX,Y of image should be set to center.
     *      See "http://fabricjs.com/docs/fabric.Object.html#setAngle"
     *
     * @param {number} angle - Angle value
     * @returns {Promise}
     */

  }, {
    key: 'setAngle',
    value: function setAngle(angle) {
      var oldAngle = this.getCurrentAngle() % 360; // The angle is lower than 2*PI(===360 degrees)

      angle %= 360;

      var canvasImage = this.getCanvasImage();
      var oldImageCenter = canvasImage.getCenterPoint();
      canvasImage.set({ angle: angle }).setCoords();
      this.adjustCanvasDimension();
      var newImageCenter = canvasImage.getCenterPoint();
      this._rotateForEachObject(oldImageCenter, newImageCenter, angle - oldAngle);

      return _util.Promise.resolve(angle);
    }

    /**
     * Rotate for each object
     * @param {fabric.Point} oldImageCenter - Image center point before rotation
     * @param {fabric.Point} newImageCenter - Image center point after rotation
     * @param {number} angleDiff - Image angle difference after rotation
     * @private
     */

  }, {
    key: '_rotateForEachObject',
    value: function _rotateForEachObject(oldImageCenter, newImageCenter, angleDiff) {
      var canvas = this.getCanvas();
      var centerDiff = {
        x: oldImageCenter.x - newImageCenter.x,
        y: oldImageCenter.y - newImageCenter.y
      };

      canvas.forEachObject(function (obj) {
        var objCenter = obj.getCenterPoint();
        var radian = _fabric2.default.util.degreesToRadians(angleDiff);
        var newObjCenter = _fabric2.default.util.rotatePoint(objCenter, oldImageCenter, radian);

        obj.set({
          left: newObjCenter.x - centerDiff.x,
          top: newObjCenter.y - centerDiff.y,
          angle: (obj.angle + angleDiff) % 360
        });
        obj.setCoords();
      });
      canvas.renderAll();
    }

    /**
     * Rotate the image
     * @param {number} additionalAngle - Additional angle
     * @returns {Promise}
     */

  }, {
    key: 'rotate',
    value: function rotate(additionalAngle) {
      var current = this.getCurrentAngle();

      return this.setAngle(current + additionalAngle);
    }
  }]);

  return Rotation;
}(_component2.default);

exports.default = Rotation;

/***/ }),

/***/ "./src/js/component/shape.js":
/*!***********************************!*\
  !*** ./src/js/component/shape.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tuiCodeSnippet = __webpack_require__(/*! tui-code-snippet */ "tui-code-snippet");

var _fabric = __webpack_require__(/*! fabric */ "fabric");

var _fabric2 = _interopRequireDefault(_fabric);

var _component = __webpack_require__(/*! @/interface/component */ "./src/js/interface/component.js");

var _component2 = _interopRequireDefault(_component);

var _shapeResizeHelper = __webpack_require__(/*! @/helper/shapeResizeHelper */ "./src/js/helper/shapeResizeHelper.js");

var _shapeResizeHelper2 = _interopRequireDefault(_shapeResizeHelper);

var _shapeFilterFillHelper = __webpack_require__(/*! @/helper/shapeFilterFillHelper */ "./src/js/helper/shapeFilterFillHelper.js");

var _util = __webpack_require__(/*! @/util */ "./src/js/util.js");

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author NHN. FE Development Team <dl_javascript@nhn.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @fileoverview Shape component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var SHAPE_INIT_OPTIONS = (0, _tuiCodeSnippet.extend)({
  strokeWidth: 1,
  stroke: '#000000',
  fill: '#ffffff',
  width: 1,
  height: 1,
  rx: 0,
  ry: 0
}, _consts.SHAPE_DEFAULT_OPTIONS);
var DEFAULT_TYPE = 'rect';
var DEFAULT_WIDTH = 20;
var DEFAULT_HEIGHT = 20;

/**
 * Make fill option
 * @param {Object} options - Options to create the shape
 * @param {Object.Image} canvasImage - canvas background image
 * @param {Function} createStaticCanvas - static canvas creater
 * @returns {Object} - shape option
 * @private
 */
function makeFabricFillOption(options, canvasImage, createStaticCanvas) {
  var fillOption = options.fill;
  var fillType = (0, _util.getFillTypeFromOption)(options.fill);
  var fill = fillOption;

  if (fillOption.color) {
    fill = fillOption.color;
  }

  var extOption = null;
  if (fillType === 'filter') {
    var newStaticCanvas = createStaticCanvas();
    extOption = (0, _shapeFilterFillHelper.makeFillPatternForFilter)(canvasImage, fillOption.filter, newStaticCanvas);
  } else {
    extOption = { fill: fill };
  }

  return (0, _tuiCodeSnippet.extend)({}, options, extOption);
}

/**
 * Shape
 * @class Shape
 * @param {Graphics} graphics - Graphics instance
 * @extends {Component}
 * @ignore
 */

var Shape = function (_Component) {
  _inherits(Shape, _Component);

  function Shape(graphics) {
    _classCallCheck(this, Shape);

    /**
     * Object of The drawing shape
     * @type {fabric.Object}
     * @private
     */
    var _this = _possibleConstructorReturn(this, (Shape.__proto__ || Object.getPrototypeOf(Shape)).call(this, _consts.componentNames.SHAPE, graphics));

    _this._shapeObj = null;

    /**
     * Type of the drawing shape
     * @type {string}
     * @private
     */
    _this._type = DEFAULT_TYPE;

    /**
     * Options to draw the shape
     * @type {Object}
     * @private
     */
    _this._options = (0, _tuiCodeSnippet.extend)({}, SHAPE_INIT_OPTIONS);

    /**
     * Whether the shape object is selected or not
     * @type {boolean}
     * @private
     */
    _this._isSelected = false;

    /**
     * Pointer for drawing shape (x, y)
     * @type {Object}
     * @private
     */
    _this._startPoint = {};

    /**
     * Using shortcut on drawing shape
     * @type {boolean}
     * @private
     */
    _this._withShiftKey = false;

    /**
     * Event handler list
     * @type {Object}
     * @private
     */
    _this._handlers = {
      mousedown: _this._onFabricMouseDown.bind(_this),
      mousemove: _this._onFabricMouseMove.bind(_this),
      mouseup: _this._onFabricMouseUp.bind(_this),
      keydown: _this._onKeyDown.bind(_this),
      keyup: _this._onKeyUp.bind(_this)
    };
    return _this;
  }

  /**
   * Start to draw the shape on canvas
   * @ignore
   */


  _createClass(Shape, [{
    key: 'start',
    value: function start() {
      var canvas = this.getCanvas();

      this._isSelected = false;

      canvas.defaultCursor = 'crosshair';
      canvas.selection = false;
      canvas.uniformScaling = true;
      canvas.on({
        'mouse:down': this._handlers.mousedown
      });

      _fabric2.default.util.addListener(document, 'keydown', this._handlers.keydown);
      _fabric2.default.util.addListener(document, 'keyup', this._handlers.keyup);
    }

    /**
     * End to draw the shape on canvas
     * @ignore
     */

  }, {
    key: 'end',
    value: function end() {
      var canvas = this.getCanvas();

      this._isSelected = false;

      canvas.defaultCursor = 'default';

      canvas.selection = true;
      canvas.uniformScaling = false;
      canvas.off({
        'mouse:down': this._handlers.mousedown
      });

      _fabric2.default.util.removeListener(document, 'keydown', this._handlers.keydown);
      _fabric2.default.util.removeListener(document, 'keyup', this._handlers.keyup);
    }

    /**
     * Set states of the current drawing shape
     * @ignore
     * @param {string} type - Shape type (ex: 'rect', 'circle')
     * @param {Object} [options] - Shape options
     *      @param {(ShapeFillOption | string)} [options.fill] - {@link ShapeFillOption} or
     *        Shape foreground color (ex: '#fff', 'transparent')
     *      @param {string} [options.stoke] - Shape outline color
     *      @param {number} [options.strokeWidth] - Shape outline width
     *      @param {number} [options.width] - Width value (When type option is 'rect', this options can use)
     *      @param {number} [options.height] - Height value (When type option is 'rect', this options can use)
     *      @param {number} [options.rx] - Radius x value (When type option is 'circle', this options can use)
     *      @param {number} [options.ry] - Radius y value (When type option is 'circle', this options can use)
     */

  }, {
    key: 'setStates',
    value: function setStates(type, options) {
      this._type = type;

      if (options) {
        this._options = (0, _tuiCodeSnippet.extend)(this._options, options);
      }
    }

    /**
     * Add the shape
     * @ignore
     * @param {string} type - Shape type (ex: 'rect', 'circle')
     * @param {Object} options - Shape options
     *      @param {(ShapeFillOption | string)} [options.fill] - ShapeFillOption or Shape foreground color (ex: '#fff', 'transparent') or ShapeFillOption object
     *      @param {string} [options.stroke] - Shape outline color
     *      @param {number} [options.strokeWidth] - Shape outline width
     *      @param {number} [options.width] - Width value (When type option is 'rect', this options can use)
     *      @param {number} [options.height] - Height value (When type option is 'rect', this options can use)
     *      @param {number} [options.rx] - Radius x value (When type option is 'circle', this options can use)
     *      @param {number} [options.ry] - Radius y value (When type option is 'circle', this options can use)
     *      @param {number} [options.isRegular] - Whether scaling shape has 1:1 ratio or not
     * @returns {Promise}
     */

  }, {
    key: 'add',
    value: function add(type, options) {
      var _this2 = this;

      return new _util.Promise(function (resolve) {
        var canvas = _this2.getCanvas();
        var extendOption = _this2._extendOptions(options);

        var shapeObj = _this2._createInstance(type, extendOption);
        var objectProperties = _this2.graphics.createObjectProperties(shapeObj);

        _this2._bindEventOnShape(shapeObj);

        canvas.add(shapeObj).setActiveObject(shapeObj);

        _this2._resetPositionFillFilter(shapeObj);

        resolve(objectProperties);
      });
    }

    /**
     * Change the shape
     * @ignore
     * @param {fabric.Object} shapeObj - Selected shape object on canvas
     * @param {Object} options - Shape options
     *      @param {(ShapeFillOption | string)} [options.fill] - {@link ShapeFillOption} or
     *        Shape foreground color (ex: '#fff', 'transparent')
     *      @param {string} [options.stroke] - Shape outline color
     *      @param {number} [options.strokeWidth] - Shape outline width
     *      @param {number} [options.width] - Width value (When type option is 'rect', this options can use)
     *      @param {number} [options.height] - Height value (When type option is 'rect', this options can use)
     *      @param {number} [options.rx] - Radius x value (When type option is 'circle', this options can use)
     *      @param {number} [options.ry] - Radius y value (When type option is 'circle', this options can use)
     *      @param {number} [options.isRegular] - Whether scaling shape has 1:1 ratio or not
     * @returns {Promise}
     */

  }, {
    key: 'change',
    value: function change(shapeObj, options) {
      var _this3 = this;

      return new _util.Promise(function (resolve, reject) {
        if (!(0, _util.isShape)(shapeObj)) {
          reject(_consts.rejectMessages.unsupportedType);
        }
        var hasFillOption = (0, _util.getFillTypeFromOption)(options.fill) === 'filter';
        var _graphics = _this3.graphics,
            canvasImage = _graphics.canvasImage,
            createStaticCanvas = _graphics.createStaticCanvas;


        shapeObj.set(hasFillOption ? makeFabricFillOption(options, canvasImage, createStaticCanvas) : options);

        if (hasFillOption) {
          _this3._resetPositionFillFilter(shapeObj);
        }

        _this3.getCanvas().renderAll();
        resolve();
      });
    }

    /**
     * make fill property for user event
     * @param {fabric.Object} shapeObj - fabric object
     * @returns {Object}
     */

  }, {
    key: 'makeFillPropertyForUserEvent',
    value: function makeFillPropertyForUserEvent(shapeObj) {
      var fillType = (0, _util.getFillTypeFromObject)(shapeObj);
      var fillProp = {};

      if (fillType === _consts.SHAPE_FILL_TYPE.FILTER) {
        var fillImage = (0, _shapeFilterFillHelper.getFillImageFromShape)(shapeObj);
        var filterOption = (0, _shapeFilterFillHelper.makeFilterOptionFromFabricImage)(fillImage);

        fillProp.type = fillType;
        fillProp.filter = filterOption;
      } else {
        fillProp.type = _consts.SHAPE_FILL_TYPE.COLOR;
        fillProp.color = shapeObj.fill || 'transparent';
      }

      return fillProp;
    }

    /**
     * Copy object handling.
     * @param {fabric.Object} shapeObj - Shape object
     * @param {fabric.Object} originalShapeObj - Shape object
     */

  }, {
    key: 'processForCopiedObject',
    value: function processForCopiedObject(shapeObj, originalShapeObj) {
      this._bindEventOnShape(shapeObj);

      if ((0, _util.getFillTypeFromObject)(shapeObj) === 'filter') {
        var fillImage = (0, _shapeFilterFillHelper.getFillImageFromShape)(originalShapeObj);
        var filterOption = (0, _shapeFilterFillHelper.makeFilterOptionFromFabricImage)(fillImage);
        var newStaticCanvas = this.graphics.createStaticCanvas();

        shapeObj.set((0, _shapeFilterFillHelper.makeFillPatternForFilter)(this.graphics.canvasImage, filterOption, newStaticCanvas));
        this._resetPositionFillFilter(shapeObj);
      }
    }

    /**
     * Create the instance of shape
     * @param {string} type - Shape type
     * @param {Object} options - Options to creat the shape
     * @returns {fabric.Object} Shape instance
     * @private
     */

  }, {
    key: '_createInstance',
    value: function _createInstance(type, options) {
      var instance = void 0;

      switch (type) {
        case 'rect':
          instance = new _fabric2.default.Rect(options);
          break;
        case 'circle':
          instance = new _fabric2.default.Ellipse((0, _tuiCodeSnippet.extend)({
            type: 'circle'
          }, options));
          break;
        case 'triangle':
          instance = new _fabric2.default.Triangle(options);
          break;
        default:
          instance = {};
      }

      return instance;
    }

    /**
     * Get the options to create the shape
     * @param {Object} options - Options to creat the shape
     * @returns {Object} Shape options
     * @private
     */

  }, {
    key: '_extendOptions',
    value: function _extendOptions(options) {
      var selectionStyles = _consts.fObjectOptions.SELECTION_STYLE;
      var _graphics2 = this.graphics,
          canvasImage = _graphics2.canvasImage,
          createStaticCanvas = _graphics2.createStaticCanvas;


      options = (0, _tuiCodeSnippet.extend)({}, SHAPE_INIT_OPTIONS, this._options, selectionStyles, options);

      return makeFabricFillOption(options, canvasImage, createStaticCanvas);
    }

    /**
     * Bind fabric events on the creating shape object
     * @param {fabric.Object} shapeObj - Shape object
     * @private
     */

  }, {
    key: '_bindEventOnShape',
    value: function _bindEventOnShape(shapeObj) {
      var self = this;
      var canvas = this.getCanvas();

      shapeObj.on({
        added: function added() {
          self._shapeObj = this;
          _shapeResizeHelper2.default.setOrigins(self._shapeObj);
        },
        selected: function selected() {
          self._isSelected = true;
          self._shapeObj = this;
          canvas.uniformScaling = true;
          canvas.defaultCursor = 'default';
          _shapeResizeHelper2.default.setOrigins(self._shapeObj);
        },
        deselected: function deselected() {
          self._isSelected = false;
          self._shapeObj = null;
          canvas.defaultCursor = 'crosshair';
          canvas.uniformScaling = false;
        },
        modified: function modified() {
          var currentObj = self._shapeObj;

          _shapeResizeHelper2.default.adjustOriginToCenter(currentObj);
          _shapeResizeHelper2.default.setOrigins(currentObj);
        },
        modifiedInGroup: function modifiedInGroup(activeSelection) {
          self._fillFilterRePositionInGroupSelection(shapeObj, activeSelection);
        },
        moving: function moving() {
          self._resetPositionFillFilter(this);
        },
        rotating: function rotating() {
          self._resetPositionFillFilter(this);
        },
        scaling: function scaling(fEvent) {
          var pointer = canvas.getPointer(fEvent.e);
          var currentObj = self._shapeObj;

          canvas.setCursor('crosshair');
          _shapeResizeHelper2.default.resize(currentObj, pointer, true);

          self._resetPositionFillFilter(this);
        }
      });
    }

    /**
     * MouseDown event handler on canvas
     * @param {{target: fabric.Object, e: MouseEvent}} fEvent - Fabric event object
     * @private
     */

  }, {
    key: '_onFabricMouseDown',
    value: function _onFabricMouseDown(fEvent) {
      if (!fEvent.target) {
        this._isSelected = false;
        this._shapeObj = false;
      }

      if (!this._isSelected && !this._shapeObj) {
        var canvas = this.getCanvas();
        this._startPoint = canvas.getPointer(fEvent.e);

        canvas.on({
          'mouse:move': this._handlers.mousemove,
          'mouse:up': this._handlers.mouseup
        });
      }
    }

    /**
     * MouseDown event handler on canvas
     * @param {{target: fabric.Object, e: MouseEvent}} fEvent - Fabric event object
     * @private
     */

  }, {
    key: '_onFabricMouseMove',
    value: function _onFabricMouseMove(fEvent) {
      var _this4 = this;

      var canvas = this.getCanvas();
      var pointer = canvas.getPointer(fEvent.e);
      var startPointX = this._startPoint.x;
      var startPointY = this._startPoint.y;
      var width = startPointX - pointer.x;
      var height = startPointY - pointer.y;
      var shape = this._shapeObj;

      if (!shape) {
        this.add(this._type, {
          left: startPointX,
          top: startPointY,
          width: width,
          height: height
        }).then(function (objectProps) {
          _this4.fire(_consts.eventNames.ADD_OBJECT, objectProps);
        });
      } else {
        this._shapeObj.set({
          isRegular: this._withShiftKey
        });

        _shapeResizeHelper2.default.resize(shape, pointer);
        canvas.renderAll();

        this._resetPositionFillFilter(shape);
      }
    }

    /**
     * MouseUp event handler on canvas
     * @private
     */

  }, {
    key: '_onFabricMouseUp',
    value: function _onFabricMouseUp() {
      var _this5 = this;

      var canvas = this.getCanvas();
      var startPointX = this._startPoint.x;
      var startPointY = this._startPoint.y;
      var shape = this._shapeObj;

      if (!shape) {
        this.add(this._type, {
          left: startPointX,
          top: startPointY,
          width: DEFAULT_WIDTH,
          height: DEFAULT_HEIGHT
        }).then(function (objectProps) {
          _this5.fire(_consts.eventNames.ADD_OBJECT, objectProps);
        });
      } else if (shape) {
        _shapeResizeHelper2.default.adjustOriginToCenter(shape);
        this.fire(_consts.eventNames.OBJECT_ADDED, this.graphics.createObjectProperties(shape));
      }

      canvas.off({
        'mouse:move': this._handlers.mousemove,
        'mouse:up': this._handlers.mouseup
      });
    }

    /**
     * Keydown event handler on document
     * @param {KeyboardEvent} e - Event object
     * @private
     */

  }, {
    key: '_onKeyDown',
    value: function _onKeyDown(e) {
      if (e.keyCode === _consts.keyCodes.SHIFT) {
        this._withShiftKey = true;

        if (this._shapeObj) {
          this._shapeObj.isRegular = true;
        }
      }
    }

    /**
     * Keyup event handler on document
     * @param {KeyboardEvent} e - Event object
     * @private
     */

  }, {
    key: '_onKeyUp',
    value: function _onKeyUp(e) {
      if (e.keyCode === _consts.keyCodes.SHIFT) {
        this._withShiftKey = false;

        if (this._shapeObj) {
          this._shapeObj.isRegular = false;
        }
      }
    }

    /**
     * Reset shape position and internal proportions in the filter type fill area.
     * @param {fabric.Object} shapeObj - Shape object
     * @private
     */

  }, {
    key: '_resetPositionFillFilter',
    value: function _resetPositionFillFilter(shapeObj) {
      if ((0, _util.getFillTypeFromObject)(shapeObj) !== 'filter') {
        return;
      }

      var _getCustomProperty = (0, _util.getCustomProperty)(shapeObj, 'patternSourceCanvas'),
          patternSourceCanvas = _getCustomProperty.patternSourceCanvas;

      var fillImage = (0, _shapeFilterFillHelper.getFillImageFromShape)(shapeObj);

      var _getCustomProperty2 = (0, _util.getCustomProperty)(fillImage, 'originalAngle'),
          originalAngle = _getCustomProperty2.originalAngle;

      if (this.graphics.canvasImage.angle !== originalAngle) {
        (0, _shapeFilterFillHelper.reMakePatternImageSource)(shapeObj, this.graphics.canvasImage);
      }
      var originX = shapeObj.originX,
          originY = shapeObj.originY;


      _shapeResizeHelper2.default.adjustOriginToCenter(shapeObj);

      shapeObj.width *= shapeObj.scaleX;
      shapeObj.height *= shapeObj.scaleY;
      shapeObj.rx *= shapeObj.scaleX;
      shapeObj.ry *= shapeObj.scaleY;
      shapeObj.scaleX = 1;
      shapeObj.scaleY = 1;

      (0, _shapeFilterFillHelper.rePositionFilterTypeFillImage)(shapeObj);

      (0, _util.changeOrigin)(shapeObj, {
        originX: originX,
        originY: originY
      });

      (0, _shapeFilterFillHelper.resetFillPatternCanvas)(patternSourceCanvas);
    }

    /**
     * Reset filter area position within group selection.
     * @param {fabric.Object} shapeObj - Shape object
     * @param {fabric.ActiveSelection} activeSelection - Shape object
     * @private
     */

  }, {
    key: '_fillFilterRePositionInGroupSelection',
    value: function _fillFilterRePositionInGroupSelection(shapeObj, activeSelection) {
      if (activeSelection.scaleX !== 1 || activeSelection.scaleY !== 1) {
        // This is necessary because the group's scale transition state affects the relative size of the fill area.
        // The only way to reset the object transformation scale state to neutral.
        // {@link https://github.com/fabricjs/fabric.js/issues/5372}
        activeSelection.addWithUpdate();
      }

      var angle = shapeObj.angle,
          left = shapeObj.left,
          top = shapeObj.top;


      _fabric2.default.util.addTransformToObject(shapeObj, activeSelection.calcTransformMatrix());
      this._resetPositionFillFilter(shapeObj);

      shapeObj.set({
        angle: angle,
        left: left,
        top: top
      });
    }
  }]);

  return Shape;
}(_component2.default);

exports.default = Shape;

/***/ }),

/***/ "./src/js/component/text.js":
/*!**********************************!*\
  !*** ./src/js/component/text.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tuiCodeSnippet = __webpack_require__(/*! tui-code-snippet */ "tui-code-snippet");

var _tuiCodeSnippet2 = _interopRequireDefault(_tuiCodeSnippet);

var _fabric = __webpack_require__(/*! fabric */ "fabric");

var _fabric2 = _interopRequireDefault(_fabric);

var _component = __webpack_require__(/*! @/interface/component */ "./src/js/interface/component.js");

var _component2 = _interopRequireDefault(_component);

var _util = __webpack_require__(/*! @/util */ "./src/js/util.js");

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author NHN. FE Development Team <dl_javascript@nhn.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @fileoverview Text module
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var defaultStyles = {
  fill: '#000000',
  left: 0,
  top: 0
};
var resetStyles = {
  fill: '#000000',
  fontStyle: 'normal',
  fontWeight: 'normal',
  textAlign: 'tie-text-align-left',
  underline: false
};
var DBCLICK_TIME = 500;

/**
 * Text
 * @class Text
 * @param {Graphics} graphics - Graphics instance
 * @extends {Component}
 * @ignore
 */

var Text = function (_Component) {
  _inherits(Text, _Component);

  function Text(graphics) {
    _classCallCheck(this, Text);

    /**
     * Default text style
     * @type {Object}
     */
    var _this = _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this, _consts.componentNames.TEXT, graphics));

    _this._defaultStyles = defaultStyles;

    /**
     * Selected state
     * @type {boolean}
     */
    _this._isSelected = false;

    /**
     * Selected text object
     * @type {Object}
     */
    _this._selectedObj = {};

    /**
     * Editing text object
     * @type {Object}
     */
    _this._editingObj = {};

    /**
     * Listeners for fabric event
     * @type {Object}
     */
    _this._listeners = {
      mousedown: _this._onFabricMouseDown.bind(_this),
      select: _this._onFabricSelect.bind(_this),
      selectClear: _this._onFabricSelectClear.bind(_this),
      scaling: _this._onFabricScaling.bind(_this),
      textChanged: _this._onFabricTextChanged.bind(_this)
    };

    /**
     * Textarea element for editing
     * @type {HTMLElement}
     */
    _this._textarea = null;

    /**
     * Ratio of current canvas
     * @type {number}
     */
    _this._ratio = 1;

    /**
     * Last click time
     * @type {Date}
     */
    _this._lastClickTime = new Date().getTime();

    /**
     * Text object infos before editing
     * @type {Object}
     */
    _this._editingObjInfos = {};

    /**
     * Previous state of editing
     * @type {boolean}
     */
    _this.isPrevEditing = false;
    return _this;
  }

  /**
   * Start input text mode
   */


  _createClass(Text, [{
    key: 'start',
    value: function start() {
      var _this2 = this;

      var canvas = this.getCanvas();

      canvas.selection = false;
      canvas.defaultCursor = 'text';
      canvas.on({
        'mouse:down': this._listeners.mousedown,
        'selection:created': this._listeners.select,
        'selection:updated': this._listeners.select,
        'before:selection:cleared': this._listeners.selectClear,
        'object:scaling': this._listeners.scaling,
        'text:changed': this._listeners.textChanged
      });

      canvas.forEachObject(function (obj) {
        if (obj.type === 'i-text') {
          _this2.adjustOriginPosition(obj, 'start');
        }
      });

      this.setCanvasRatio();
    }

    /**
     * End input text mode
     */

  }, {
    key: 'end',
    value: function end() {
      var _this3 = this;

      var canvas = this.getCanvas();

      canvas.selection = true;
      canvas.defaultCursor = 'default';

      canvas.forEachObject(function (obj) {
        if (obj.type === 'i-text') {
          if (obj.text === '') {
            canvas.remove(obj);
          } else {
            _this3.adjustOriginPosition(obj, 'end');
          }
        }
      });

      canvas.off({
        'mouse:down': this._listeners.mousedown,
        'selection:created': this._listeners.select,
        'selection:updated': this._listeners.select,
        'before:selection:cleared': this._listeners.selectClear,
        'object:selected': this._listeners.select,
        'object:scaling': this._listeners.scaling,
        'text:changed': this._listeners.textChanged
      });
    }

    /**
     * Adjust the origin position
     * @param {fabric.Object} text - text object
     * @param {string} editStatus - 'start' or 'end'
     */

  }, {
    key: 'adjustOriginPosition',
    value: function adjustOriginPosition(text, editStatus) {
      var originX = 'center',
          originY = 'center';

      if (editStatus === 'start') {
        originX = 'left';
        originY = 'top';
      }

      var _text$getPointByOrigi = text.getPointByOrigin(originX, originY),
          left = _text$getPointByOrigi.x,
          top = _text$getPointByOrigi.y;

      text.set({
        left: left,
        top: top,
        originX: originX,
        originY: originY
      });
      text.setCoords();
    }

    /**
     * Add new text on canvas image
     * @param {string} text - Initial input text
     * @param {Object} options - Options for generating text
     *     @param {Object} [options.styles] Initial styles
     *         @param {string} [options.styles.fill] Color
     *         @param {string} [options.styles.fontFamily] Font type for text
     *         @param {number} [options.styles.fontSize] Size
     *         @param {string} [options.styles.fontStyle] Type of inclination (normal / italic)
     *         @param {string} [options.styles.fontWeight] Type of thicker or thinner looking (normal / bold)
     *         @param {string} [options.styles.textAlign] Type of text align (left / center / right)
     *         @param {string} [options.styles.textDecoration] Type of line (underline / line-through / overline)
     *     @param {{x: number, y: number}} [options.position] - Initial position
     * @returns {Promise}
     */

  }, {
    key: 'add',
    value: function add(text, options) {
      var _this4 = this;

      return new _util.Promise(function (resolve) {
        var canvas = _this4.getCanvas();
        var newText = null;
        var styles = _this4._defaultStyles;

        _this4._setInitPos(options.position);

        if (options.styles) {
          styles = _tuiCodeSnippet2.default.extend(styles, options.styles);
        }

        if (!_tuiCodeSnippet2.default.isExisty(options.autofocus)) {
          options.autofocus = true;
        }

        newText = new _fabric2.default.IText(text, styles);
        var selectionStyle = _consts.fObjectOptions.SELECTION_STYLE;
        selectionStyle = _tuiCodeSnippet2.default.extend({}, selectionStyle, {
          originX: 'left',
          originY: 'top'
        });

        newText.set(selectionStyle);
        _this4.initialize(newText);

        canvas.add(newText);

        if (options.autofocus) {
          newText.enterEditing();
          newText.selectAll();
        }

        if (!canvas.getActiveObject()) {
          canvas.setActiveObject(newText);
        }

        _this4.isPrevEditing = true;
        resolve(_this4.graphics.createObjectProperties(newText));
      });
    }
  }, {
    key: 'initialize',
    value: function initialize(text) {
      text.on({
        mouseup: this._onFabricMouseUp.bind(this)
      });
    }

    /**
     * Change text of activate object on canvas image
     * @param {Object} activeObj - Current selected text object
     * @param {string} text - Changed text
     * @returns {Promise}
     */

  }, {
    key: 'change',
    value: function change(activeObj, text) {
      var _this5 = this;

      return new _util.Promise(function (resolve) {
        activeObj.set('text', text);

        _this5.getCanvas().renderAll();
        resolve();
      });
    }

    /**
     * Set style
     * @param {Object} activeObj - Current selected text object
     * @param {Object} styleObj - Initial styles
     *     @param {string} [styleObj.fill] Color
     *     @param {string} [styleObj.fontFamily] Font type for text
     *     @param {number} [styleObj.fontSize] Size
     *     @param {string} [styleObj.fontStyle] Type of inclination (normal / italic)
     *     @param {string} [styleObj.fontWeight] Type of thicker or thinner looking (normal / bold)
     *     @param {string} [styleObj.textAlign] Type of text align (left / center / right)
     *     @param {string} [styleObj.textDecoration] Type of line (underline / line-through / overline)
     * @returns {Promise}
     */

  }, {
    key: 'setStyle',
    value: function setStyle(activeObj, styleObj) {
      var _this6 = this;

      return new _util.Promise(function (resolve) {
        _tuiCodeSnippet2.default.forEach(styleObj, function (val, key) {
          if (activeObj[key] === val && key !== 'fontSize') {
            styleObj[key] = resetStyles[key] || '';
          }
        }, _this6);

        if ('textDecoration' in styleObj) {
          _tuiCodeSnippet2.default.extend(styleObj, _this6._getTextDecorationAdaptObject(styleObj.textDecoration));
        }

        activeObj.set(styleObj);

        _this6.getCanvas().renderAll();
        resolve();
      });
    }

    /**
     * Get the text
     * @param {Object} activeObj - Current selected text object
     * @returns {String} text
     */

  }, {
    key: 'getText',
    value: function getText(activeObj) {
      return activeObj.text;
    }

    /**
     * Set infos of the current selected object
     * @param {fabric.Text} obj - Current selected text object
     * @param {boolean} state - State of selecting
     */

  }, {
    key: 'setSelectedInfo',
    value: function setSelectedInfo(obj, state) {
      this._selectedObj = obj;
      this._isSelected = state;
    }

    /**
     * Whether object is selected or not
     * @returns {boolean} State of selecting
     */

  }, {
    key: 'isSelected',
    value: function isSelected() {
      return this._isSelected;
    }

    /**
     * Get current selected text object
     * @returns {fabric.Text} Current selected text object
     */

  }, {
    key: 'getSelectedObj',
    value: function getSelectedObj() {
      return this._selectedObj;
    }

    /**
     * Set ratio value of canvas
     */

  }, {
    key: 'setCanvasRatio',
    value: function setCanvasRatio() {
      var canvasElement = this.getCanvasElement();
      var cssWidth = parseInt(canvasElement.style.maxWidth, 10);
      var originWidth = canvasElement.width;

      this._ratio = originWidth / cssWidth;
    }

    /**
     * Get ratio value of canvas
     * @returns {number} Ratio value
     */

  }, {
    key: 'getCanvasRatio',
    value: function getCanvasRatio() {
      return this._ratio;
    }

    /**
     * Get text decoration adapt object
     * @param {string} textDecoration - text decoration option string
     * @returns {object} adapt object for override
     */

  }, {
    key: '_getTextDecorationAdaptObject',
    value: function _getTextDecorationAdaptObject(textDecoration) {
      return {
        underline: textDecoration === 'underline',
        linethrough: textDecoration === 'line-through',
        overline: textDecoration === 'overline'
      };
    }

    /**
     * Set initial position on canvas image
     * @param {{x: number, y: number}} [position] - Selected position
     * @private
     */

  }, {
    key: '_setInitPos',
    value: function _setInitPos(position) {
      position = position || this.getCanvasImage().getCenterPoint();

      this._defaultStyles.left = position.x;
      this._defaultStyles.top = position.y;
    }

    /**
     * Input event handler
     * @private
     */

  }, {
    key: '_onInput',
    value: function _onInput() {
      var ratio = this.getCanvasRatio();
      var obj = this._editingObj;
      var textareaStyle = this._textarea.style;

      textareaStyle.width = Math.ceil(obj.width / ratio) + 'px';
      textareaStyle.height = Math.ceil(obj.height / ratio) + 'px';
    }

    /**
     * Keydown event handler
     * @private
     */

  }, {
    key: '_onKeyDown',
    value: function _onKeyDown() {
      var _this7 = this;

      var ratio = this.getCanvasRatio();
      var obj = this._editingObj;
      var textareaStyle = this._textarea.style;

      setTimeout(function () {
        obj.text(_this7._textarea.value);

        textareaStyle.width = Math.ceil(obj.width / ratio) + 'px';
        textareaStyle.height = Math.ceil(obj.height / ratio) + 'px';
      }, 0);
    }

    /**
     * Blur event handler
     * @private
     */

  }, {
    key: '_onBlur',
    value: function _onBlur() {
      var ratio = this.getCanvasRatio();
      var editingObj = this._editingObj;
      var editingObjInfos = this._editingObjInfos;
      var textContent = this._textarea.value;
      var transWidth = editingObj.width / ratio - editingObjInfos.width / ratio;
      var transHeight = editingObj.height / ratio - editingObjInfos.height / ratio;

      if (ratio === 1) {
        transWidth /= 2;
        transHeight /= 2;
      }

      this._textarea.style.display = 'none';

      editingObj.set({
        left: editingObjInfos.left + transWidth,
        top: editingObjInfos.top + transHeight
      });

      if (textContent.length) {
        this.getCanvas().add(editingObj);

        var params = {
          objId: _tuiCodeSnippet2.default.stamp(editingObj),
          type: editingObj.type,
          text: textContent
        };

        this.fire(_consts.eventNames.TEXT_CHANGED, params);
      }
    }

    /**
     * Scroll event handler
     * @private
     */

  }, {
    key: '_onScroll',
    value: function _onScroll() {
      this._textarea.scrollLeft = 0;
      this._textarea.scrollTop = 0;
    }

    /**
     * Fabric scaling event handler
     * @param {fabric.Event} fEvent - Current scaling event on selected object
     * @private
     */

  }, {
    key: '_onFabricScaling',
    value: function _onFabricScaling(fEvent) {
      var obj = fEvent.target;

      obj.fontSize = obj.fontSize * obj.scaleY;
      obj.scaleX = 1;
      obj.scaleY = 1;
    }

    /**
     * textChanged event handler
     * @param {{target: fabric.Object}} props - changed text object
     * @private
     */

  }, {
    key: '_onFabricTextChanged',
    value: function _onFabricTextChanged(props) {
      this.fire(_consts.eventNames.TEXT_CHANGED, props.target);
    }

    /**
     * onSelectClear handler in fabric canvas
     * @param {{target: fabric.Object, e: MouseEvent}} fEvent - Fabric event
     * @private
     */

  }, {
    key: '_onFabricSelectClear',
    value: function _onFabricSelectClear(fEvent) {
      var obj = this.getSelectedObj();

      this.isPrevEditing = true;

      this.setSelectedInfo(fEvent.target, false);

      if (obj) {
        // obj is empty object at initial time, will be set fabric object
        if (obj.text === '') {
          this.getCanvas().remove(obj);
        }
      }
    }

    /**
     * onSelect handler in fabric canvas
     * @param {{target: fabric.Object, e: MouseEvent}} fEvent - Fabric event
     * @private
     */

  }, {
    key: '_onFabricSelect',
    value: function _onFabricSelect(fEvent) {
      this.isPrevEditing = true;

      this.setSelectedInfo(fEvent.target, true);
    }

    /**
     * Fabric 'mousedown' event handler
     * @param {fabric.Event} fEvent - Current mousedown event on selected object
     * @private
     */

  }, {
    key: '_onFabricMouseDown',
    value: function _onFabricMouseDown(fEvent) {
      var obj = fEvent.target;

      if (obj && !obj.isType('text')) {
        return;
      }

      if (this.isPrevEditing) {
        this.isPrevEditing = false;

        return;
      }

      this._fireAddText(fEvent);
    }

    /**
     * Fire 'addText' event if object is not selected.
     * @param {fabric.Event} fEvent - Current mousedown event on selected object
     * @private
     */

  }, {
    key: '_fireAddText',
    value: function _fireAddText(fEvent) {
      var obj = fEvent.target;
      var e = fEvent.e || {};
      var originPointer = this.getCanvas().getPointer(e);

      if (!obj) {
        this.fire(_consts.eventNames.ADD_TEXT, {
          originPosition: {
            x: originPointer.x,
            y: originPointer.y
          },
          clientPosition: {
            x: e.clientX || 0,
            y: e.clientY || 0
          }
        });
      }
    }

    /**
     * Fabric mouseup event handler
     * @param {fabric.Event} fEvent - Current mousedown event on selected object
     * @private
     */

  }, {
    key: '_onFabricMouseUp',
    value: function _onFabricMouseUp(fEvent) {
      var target = fEvent.target;

      var newClickTime = new Date().getTime();

      if (this._isDoubleClick(newClickTime) && !target.isEditing) {
        target.enterEditing();
      }

      if (target.isEditing) {
        this.fire(_consts.eventNames.TEXT_EDITING); // fire editing text event
      }

      this._lastClickTime = newClickTime;
    }

    /**
     * Get state of firing double click event
     * @param {Date} newClickTime - Current clicked time
     * @returns {boolean} Whether double clicked or not
     * @private
     */

  }, {
    key: '_isDoubleClick',
    value: function _isDoubleClick(newClickTime) {
      return newClickTime - this._lastClickTime < DBCLICK_TIME;
    }
  }]);

  return Text;
}(_component2.default);

exports.default = Text;

/***/ }),

/***/ "./src/js/component/zoom.js":
/*!**********************************!*\
  !*** ./src/js/component/zoom.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fabric = __webpack_require__(/*! fabric */ "fabric");

var _fabric2 = _interopRequireDefault(_fabric);

var _component = __webpack_require__(/*! @/interface/component */ "./src/js/interface/component.js");

var _component2 = _interopRequireDefault(_component);

var _util = __webpack_require__(/*! @/util */ "./src/js/util.js");

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author NHN. FE Development Team <dl_javascript@nhn.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @fileoverview Image zoom module (start zoom, end zoom)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var MOUSE_MOVE_THRESHOLD = 10;
var DEFAULT_SCROLL_OPTION = {
  left: 0,
  top: 0,
  width: 0,
  height: 0,
  stroke: '#000000',
  strokeWidth: 0,
  fill: '#000000',
  opacity: 0.4,
  evented: false,
  selectable: false,
  hoverCursor: 'auto'
};
var DEFAULT_VERTICAL_SCROLL_RATIO = {
  SIZE: 0.0045,
  MARGIN: 0.003,
  BORDER_RADIUS: 0.003
};
var DEFAULT_HORIZONTAL_SCROLL_RATIO = {
  SIZE: 0.0066,
  MARGIN: 0.0044,
  BORDER_RADIUS: 0.003
};
var DEFAULT_ZOOM_LEVEL = 1.0;
var ZOOM_CHANGED = _consts.eventNames.ZOOM_CHANGED,
    ADD_TEXT = _consts.eventNames.ADD_TEXT,
    TEXT_EDITING = _consts.eventNames.TEXT_EDITING,
    OBJECT_MODIFIED = _consts.eventNames.OBJECT_MODIFIED,
    KEY_DOWN = _consts.eventNames.KEY_DOWN,
    KEY_UP = _consts.eventNames.KEY_UP,
    HAND_STARTED = _consts.eventNames.HAND_STARTED,
    HAND_STOPPED = _consts.eventNames.HAND_STOPPED;

/**
 * Zoom components
 * @param {Graphics} graphics - Graphics instance
 * @extends {Component}
 * @class Zoom
 * @ignore
 */

var Zoom = function (_Component) {
  _inherits(Zoom, _Component);

  function Zoom(graphics) {
    _classCallCheck(this, Zoom);

    /**
     * zoomArea
     * @type {?fabric.Rect}
     * @private
     */
    var _this = _possibleConstructorReturn(this, (Zoom.__proto__ || Object.getPrototypeOf(Zoom)).call(this, _consts.componentNames.ZOOM, graphics));

    _this.zoomArea = null;

    /**
     * Start point of zoom area
     * @type {?{x: number, y: number}}
     */
    _this._startPoint = null;

    /**
     * Center point of every zoom
     * @type {Array.<{prevZoomLevel: number, zoomLevel: number, x: number, y: number}>}
     */
    _this._centerPoints = [];

    /**
     * Zoom level (default: 100%(1.0), max: 400%(4.0))
     * @type {number}
     */
    _this.zoomLevel = DEFAULT_ZOOM_LEVEL;

    /**
     * Zoom mode ('normal', 'zoom', 'hand')
     * @type {string}
     */
    _this.zoomMode = _consts.zoomModes.DEFAULT;

    /**
     * Listeners
     * @type {Object.<string, Function>}
     * @private
     */
    _this._listeners = {
      startZoom: _this._onMouseDownWithZoomMode.bind(_this),
      moveZoom: _this._onMouseMoveWithZoomMode.bind(_this),
      stopZoom: _this._onMouseUpWithZoomMode.bind(_this),
      startHand: _this._onMouseDownWithHandMode.bind(_this),
      moveHand: _this._onMouseMoveWithHandMode.bind(_this),
      stopHand: _this._onMouseUpWithHandMode.bind(_this),
      zoomChanged: _this._changeScrollState.bind(_this),
      keydown: _this._startHandModeWithSpaceBar.bind(_this),
      keyup: _this._endHandModeWithSpaceBar.bind(_this)
    };

    var canvas = _this.getCanvas();

    /**
     * Width:Height ratio (ex. width=1.5, height=1 -> aspectRatio=1.5)
     * @private
     */
    _this.aspectRatio = canvas.width / canvas.height;

    /**
     * vertical scroll bar
     * @type {fabric.Rect}
     * @private
     */
    _this._verticalScroll = new _fabric2.default.Rect(DEFAULT_SCROLL_OPTION);

    /**
     * horizontal scroll bar
     * @type {fabric.Rect}
     * @private
     */
    _this._horizontalScroll = new _fabric2.default.Rect(DEFAULT_SCROLL_OPTION);

    canvas.on(ZOOM_CHANGED, _this._listeners.zoomChanged);

    _this.graphics.on(ADD_TEXT, _this._startTextEditingHandler.bind(_this));
    _this.graphics.on(TEXT_EDITING, _this._startTextEditingHandler.bind(_this));
    _this.graphics.on(OBJECT_MODIFIED, _this._stopTextEditingHandler.bind(_this));
    return _this;
  }

  /**
   * Attach zoom keyboard events
   */


  _createClass(Zoom, [{
    key: 'attachKeyboardZoomEvents',
    value: function attachKeyboardZoomEvents() {
      _fabric2.default.util.addListener(document, KEY_DOWN, this._listeners.keydown);
      _fabric2.default.util.addListener(document, KEY_UP, this._listeners.keyup);
    }

    /**
     * Detach zoom keyboard events
     */

  }, {
    key: 'detachKeyboardZoomEvents',
    value: function detachKeyboardZoomEvents() {
      _fabric2.default.util.removeListener(document, KEY_DOWN, this._listeners.keydown);
      _fabric2.default.util.removeListener(document, KEY_UP, this._listeners.keyup);
    }

    /**
     * Handler when you started editing text
     * @private
     */

  }, {
    key: '_startTextEditingHandler',
    value: function _startTextEditingHandler() {
      this.isTextEditing = true;
    }

    /**
     * Handler when you stopped editing text
     * @private
     */

  }, {
    key: '_stopTextEditingHandler',
    value: function _stopTextEditingHandler() {
      this.isTextEditing = false;
    }

    /**
     * Handler who turns on hand mode when the space bar is down
     * @param {KeyboardEvent} e - Event object
     * @private
     */

  }, {
    key: '_startHandModeWithSpaceBar',
    value: function _startHandModeWithSpaceBar(e) {
      if (this.withSpace || this.isTextEditing) {
        return;
      }

      if (e.keyCode === _consts.keyCodes.SPACE) {
        this.withSpace = true;
        this.startHandMode();
      }
    }

    /**
     * Handler who turns off hand mode when space bar is up
     * @param {KeyboardEvent} e - Event object
     * @private
     */

  }, {
    key: '_endHandModeWithSpaceBar',
    value: function _endHandModeWithSpaceBar(e) {
      if (e.keyCode === _consts.keyCodes.SPACE) {
        this.withSpace = false;
        this.endHandMode();
      }
    }

    /**
     * Start zoom-in mode
     */

  }, {
    key: 'startZoomInMode',
    value: function startZoomInMode() {
      if (this.zoomArea) {
        return;
      }
      this.endHandMode();
      this.zoomMode = _consts.zoomModes.ZOOM;

      var canvas = this.getCanvas();

      this._changeObjectsEventedState(false);

      this.zoomArea = new _fabric2.default.Rect({
        left: 0,
        top: 0,
        width: 0.5,
        height: 0.5,
        stroke: 'black',
        strokeWidth: 1,
        fill: 'transparent',
        hoverCursor: 'zoom-in'
      });

      canvas.discardActiveObject();
      canvas.add(this.zoomArea);
      canvas.on('mouse:down', this._listeners.startZoom);
      canvas.selection = false;
      canvas.defaultCursor = 'zoom-in';
    }

    /**
     * End zoom-in mode
     */

  }, {
    key: 'endZoomInMode',
    value: function endZoomInMode() {
      this.zoomMode = _consts.zoomModes.DEFAULT;

      var canvas = this.getCanvas();
      var _listeners = this._listeners,
          startZoom = _listeners.startZoom,
          moveZoom = _listeners.moveZoom,
          stopZoom = _listeners.stopZoom;


      canvas.selection = true;
      canvas.defaultCursor = 'auto';
      canvas.off({
        'mouse:down': startZoom,
        'mouse:move': moveZoom,
        'mouse:up': stopZoom
      });

      this._changeObjectsEventedState(true);

      canvas.remove(this.zoomArea);
      this.zoomArea = null;
    }

    /**
     * Start zoom drawing mode
     */

  }, {
    key: 'start',
    value: function start() {
      this.zoomArea = null;
      this._startPoint = null;
      this._startHandPoint = null;
    }

    /**
     * Stop zoom drawing mode
     */

  }, {
    key: 'end',
    value: function end() {
      this.endZoomInMode();
      this.endHandMode();
    }

    /**
     * Start hand mode
     */

  }, {
    key: 'startHandMode',
    value: function startHandMode() {
      this.endZoomInMode();
      this.zoomMode = _consts.zoomModes.HAND;

      var canvas = this.getCanvas();

      this._changeObjectsEventedState(false);

      canvas.discardActiveObject();
      canvas.off('mouse:down', this._listeners.startHand);
      canvas.on('mouse:down', this._listeners.startHand);
      canvas.selection = false;
      canvas.defaultCursor = 'grab';

      canvas.fire(HAND_STARTED);
    }

    /**
     * Stop hand mode
     */

  }, {
    key: 'endHandMode',
    value: function endHandMode() {
      this.zoomMode = _consts.zoomModes.DEFAULT;
      var canvas = this.getCanvas();

      this._changeObjectsEventedState(true);

      canvas.off('mouse:down', this._listeners.startHand);
      canvas.selection = true;
      canvas.defaultCursor = 'auto';

      this._startHandPoint = null;

      canvas.fire(HAND_STOPPED);
    }

    /**
     * onMousedown handler in fabric canvas
     * @param {{target: fabric.Object, e: MouseEvent}} fEvent - Fabric event
     * @private
     */

  }, {
    key: '_onMouseDownWithZoomMode',
    value: function _onMouseDownWithZoomMode(_ref) {
      var target = _ref.target,
          e = _ref.e;

      if (target) {
        return;
      }

      var canvas = this.getCanvas();

      canvas.selection = false;

      this._startPoint = canvas.getPointer(e);
      this.zoomArea.set({ width: 0, height: 0 });

      var _listeners2 = this._listeners,
          moveZoom = _listeners2.moveZoom,
          stopZoom = _listeners2.stopZoom;

      canvas.on({
        'mouse:move': moveZoom,
        'mouse:up': stopZoom
      });
    }

    /**
     * onMousemove handler in fabric canvas
     * @param {{e: MouseEvent}} fEvent - Fabric event
     * @private
     */

  }, {
    key: '_onMouseMoveWithZoomMode',
    value: function _onMouseMoveWithZoomMode(_ref2) {
      var e = _ref2.e;

      var canvas = this.getCanvas();
      var pointer = canvas.getPointer(e);
      var x = pointer.x,
          y = pointer.y;
      var zoomArea = this.zoomArea,
          _startPoint = this._startPoint;

      var deltaX = Math.abs(x - _startPoint.x);
      var deltaY = Math.abs(y - _startPoint.y);

      if (deltaX + deltaY > MOUSE_MOVE_THRESHOLD) {
        canvas.remove(zoomArea);
        zoomArea.set(this._calcRectDimensionFromPoint(x, y));
        canvas.add(zoomArea);
      }
    }

    /**
     * Get rect dimension setting from Canvas-Mouse-Position(x, y)
     * @param {number} x - Canvas-Mouse-Position x
     * @param {number} y - Canvas-Mouse-Position Y
     * @returns {{left: number, top: number, width: number, height: number}}
     * @private
     */

  }, {
    key: '_calcRectDimensionFromPoint',
    value: function _calcRectDimensionFromPoint(x, y) {
      var canvas = this.getCanvas();
      var canvasWidth = canvas.getWidth();
      var canvasHeight = canvas.getHeight();
      var _startPoint2 = this._startPoint,
          startX = _startPoint2.x,
          startY = _startPoint2.y;
      var min = Math.min;


      var left = min(startX, x);
      var top = min(startY, y);
      var width = (0, _util.clamp)(x, startX, canvasWidth) - left; // (startX <= x(mouse) <= canvasWidth) - left
      var height = (0, _util.clamp)(y, startY, canvasHeight) - top; // (startY <= y(mouse) <= canvasHeight) - top

      return { left: left, top: top, width: width, height: height };
    }

    /**
     * onMouseup handler in fabric canvas
     * @private
     */

  }, {
    key: '_onMouseUpWithZoomMode',
    value: function _onMouseUpWithZoomMode() {
      var zoomLevel = this.zoomLevel;
      var zoomArea = this.zoomArea;
      var _listeners3 = this._listeners,
          moveZoom = _listeners3.moveZoom,
          stopZoom = _listeners3.stopZoom;

      var canvas = this.getCanvas();
      var center = this._getCenterPoint();
      var x = center.x,
          y = center.y;


      if (!this._isMaxZoomLevel()) {
        this._centerPoints.push({
          x: x,
          y: y,
          prevZoomLevel: zoomLevel,
          zoomLevel: zoomLevel + 1
        });
        zoomLevel += 1;
        canvas.zoomToPoint({ x: x, y: y }, zoomLevel);

        this._fireZoomChanged(canvas, zoomLevel);

        this.zoomLevel = zoomLevel;
      }

      canvas.off({
        'mouse:move': moveZoom,
        'mouse:up': stopZoom
      });

      canvas.remove(zoomArea);
      this._startPoint = null;
    }

    /**
     * Get center point
     * @returns {{x: number, y: number}}
     * @private
     */

  }, {
    key: '_getCenterPoint',
    value: function _getCenterPoint() {
      var _zoomArea = this.zoomArea,
          left = _zoomArea.left,
          top = _zoomArea.top,
          width = _zoomArea.width,
          height = _zoomArea.height;
      var _startPoint3 = this._startPoint,
          x = _startPoint3.x,
          y = _startPoint3.y;
      var aspectRatio = this.aspectRatio;


      if (width < MOUSE_MOVE_THRESHOLD && height < MOUSE_MOVE_THRESHOLD) {
        return { x: x, y: y };
      }

      return width > height ? { x: left + aspectRatio * height / 2, y: top + height / 2 } : { x: left + width / 2, y: top + width / aspectRatio / 2 };
    }

    /**
     * Zoom the canvas
     * @param {{x: number, y: number}} center - center of zoom
     * @param {?number} zoomLevel - zoom level
     */

  }, {
    key: 'zoom',
    value: function zoom(_ref3) {
      var x = _ref3.x,
          y = _ref3.y;
      var zoomLevel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.zoomLevel;

      var canvas = this.getCanvas();
      var centerPoints = this._centerPoints;

      for (var i = centerPoints.length - 1; i >= 0; i -= 1) {
        if (centerPoints[i].zoomLevel < zoomLevel) {
          break;
        }

        var _centerPoints$pop = centerPoints.pop(),
            prevX = _centerPoints$pop.x,
            prevY = _centerPoints$pop.y,
            prevZoomLevel = _centerPoints$pop.prevZoomLevel;

        canvas.zoomToPoint({ x: prevX, y: prevY }, prevZoomLevel);
        this.zoomLevel = prevZoomLevel;
      }

      canvas.zoomToPoint({ x: x, y: y }, zoomLevel);
      if (!this._isDefaultZoomLevel(zoomLevel)) {
        this._centerPoints.push({
          x: x,
          y: y,
          zoomLevel: zoomLevel,
          prevZoomLevel: this.zoomLevel
        });
      }
      this.zoomLevel = zoomLevel;

      this._fireZoomChanged(canvas, zoomLevel);
    }

    /**
     * Zoom out one step
     */

  }, {
    key: 'zoomOut',
    value: function zoomOut() {
      var centerPoints = this._centerPoints;

      if (!centerPoints.length) {
        return;
      }

      var canvas = this.getCanvas();
      var point = centerPoints.pop();
      var x = point.x,
          y = point.y,
          prevZoomLevel = point.prevZoomLevel;


      if (this._isDefaultZoomLevel(prevZoomLevel)) {
        canvas.setViewportTransform([1, 0, 0, 1, 0, 0]);
      } else {
        canvas.zoomToPoint({ x: x, y: y }, prevZoomLevel);
      }

      this.zoomLevel = prevZoomLevel;

      this._fireZoomChanged(canvas, this.zoomLevel);
    }

    /**
     * Zoom reset
     */

  }, {
    key: 'resetZoom',
    value: function resetZoom() {
      var canvas = this.getCanvas();

      canvas.setViewportTransform([1, 0, 0, 1, 0, 0]);

      this.zoomLevel = DEFAULT_ZOOM_LEVEL;
      this._centerPoints = [];

      this._fireZoomChanged(canvas, this.zoomLevel);
    }

    /**
     * Whether zoom level is max (5.0)
     * @returns {boolean}
     * @private
     */

  }, {
    key: '_isMaxZoomLevel',
    value: function _isMaxZoomLevel() {
      return this.zoomLevel >= 5.0;
    }

    /**
     * Move point of zoom
     * @param {{x: number, y: number}} delta - move amount
     * @private
     */

  }, {
    key: '_movePointOfZoom',
    value: function _movePointOfZoom(_ref4) {
      var deltaX = _ref4.x,
          deltaY = _ref4.y;

      var centerPoints = this._centerPoints;

      if (!centerPoints.length) {
        return;
      }

      var canvas = this.getCanvas();
      var zoomLevel = this.zoomLevel;


      var point = centerPoints.pop();
      var originX = point.x,
          originY = point.y,
          prevZoomLevel = point.prevZoomLevel;

      var x = originX - deltaX;
      var y = originY - deltaY;

      canvas.zoomToPoint({ x: originX, y: originY }, prevZoomLevel);
      canvas.zoomToPoint({ x: x, y: y }, zoomLevel);
      centerPoints.push({ x: x, y: y, prevZoomLevel: prevZoomLevel, zoomLevel: zoomLevel });

      this._fireZoomChanged(canvas, zoomLevel);
    }

    /**
     * onMouseDown handler in fabric canvas
     * @param {{target: fabric.Object, e: MouseEvent}} fEvent - Fabric event
     * @private
     */

  }, {
    key: '_onMouseDownWithHandMode',
    value: function _onMouseDownWithHandMode(_ref5) {
      var target = _ref5.target,
          e = _ref5.e;

      if (target) {
        return;
      }

      var canvas = this.getCanvas();

      if (this.zoomLevel <= DEFAULT_ZOOM_LEVEL) {
        return;
      }

      canvas.selection = false;

      this._startHandPoint = canvas.getPointer(e);

      var _listeners4 = this._listeners,
          moveHand = _listeners4.moveHand,
          stopHand = _listeners4.stopHand;

      canvas.on({
        'mouse:move': moveHand,
        'mouse:up': stopHand
      });
    }

    /**
     * onMouseMove handler in fabric canvas
     * @param {{e: MouseEvent}} fEvent - Fabric event
     * @private
     */

  }, {
    key: '_onMouseMoveWithHandMode',
    value: function _onMouseMoveWithHandMode(_ref6) {
      var e = _ref6.e;

      var canvas = this.getCanvas();

      var _canvas$getPointer = canvas.getPointer(e),
          x = _canvas$getPointer.x,
          y = _canvas$getPointer.y;

      var deltaX = x - this._startHandPoint.x;
      var deltaY = y - this._startHandPoint.y;

      this._movePointOfZoom({ x: deltaX, y: deltaY });
    }

    /**
     * onMouseUp handler in fabric canvas
     * @private
     */

  }, {
    key: '_onMouseUpWithHandMode',
    value: function _onMouseUpWithHandMode() {
      var canvas = this.getCanvas();
      var _listeners5 = this._listeners,
          moveHand = _listeners5.moveHand,
          stopHand = _listeners5.stopHand;


      canvas.off({
        'mouse:move': moveHand,
        'mouse:up': stopHand
      });

      this._startHandPoint = null;
    }

    /**
     * onChangeZoom handler in fabric canvas
     * @private
     */

  }, {
    key: '_changeScrollState',
    value: function _changeScrollState(_ref7) {
      var viewport = _ref7.viewport,
          zoomLevel = _ref7.zoomLevel;

      var canvas = this.getCanvas();

      canvas.remove(this._verticalScroll);
      canvas.remove(this._horizontalScroll);

      if (this._isDefaultZoomLevel(zoomLevel)) {
        return;
      }

      var canvasWidth = canvas.width;
      var canvasHeight = canvas.height;

      var tl = viewport.tl,
          tr = viewport.tr,
          bl = viewport.bl;

      var viewportWidth = tr.x - tl.x;
      var viewportHeight = bl.y - tl.y;

      var horizontalScrollWidth = viewportWidth * viewportWidth / canvasWidth;
      var horizontalScrollHeight = viewportHeight * DEFAULT_HORIZONTAL_SCROLL_RATIO.SIZE;
      var horizontalScrollLeft = (0, _util.clamp)(tl.x + tl.x / canvasWidth * viewportWidth, tl.x, tr.x - horizontalScrollWidth);
      var horizontalScrollMargin = viewportHeight * DEFAULT_HORIZONTAL_SCROLL_RATIO.MARGIN;
      var horizontalScrollBorderRadius = viewportHeight * DEFAULT_HORIZONTAL_SCROLL_RATIO.BORDER_RADIUS;

      this._horizontalScroll.set({
        left: horizontalScrollLeft,
        top: bl.y - horizontalScrollHeight - horizontalScrollMargin,
        width: horizontalScrollWidth,
        height: horizontalScrollHeight,
        rx: horizontalScrollBorderRadius,
        ry: horizontalScrollBorderRadius
      });

      var verticalScrollWidth = viewportWidth * DEFAULT_VERTICAL_SCROLL_RATIO.SIZE;
      var verticalScrollHeight = viewportHeight * viewportHeight / canvasHeight;
      var verticalScrollTop = (0, _util.clamp)(tl.y + tl.y / canvasHeight * viewportHeight, tr.y, bl.y - verticalScrollHeight);
      var verticalScrollMargin = viewportWidth * DEFAULT_VERTICAL_SCROLL_RATIO.MARGIN;
      var verticalScrollBorderRadius = viewportWidth * DEFAULT_VERTICAL_SCROLL_RATIO.BORDER_RADIUS;

      this._verticalScroll.set({
        left: tr.x - verticalScrollWidth - verticalScrollMargin,
        top: verticalScrollTop,
        width: verticalScrollWidth,
        height: verticalScrollHeight,
        rx: verticalScrollBorderRadius,
        ry: verticalScrollBorderRadius
      });

      this._addScrollBar();
    }

    /**
     * Change objects 'evented' state
     * @param {boolean} [evented=true] - objects 'evented' state
     */

  }, {
    key: '_changeObjectsEventedState',
    value: function _changeObjectsEventedState() {
      var evented = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var canvas = this.getCanvas();

      canvas.forEachObject(function (obj) {
        // {@link http://fabricjs.com/docs/fabric.Object.html#evented}
        obj.evented = evented;
      });
    }

    /**
     * Add scroll bar and set remove timer
     */

  }, {
    key: '_addScrollBar',
    value: function _addScrollBar() {
      var _this2 = this;

      var canvas = this.getCanvas();

      canvas.add(this._horizontalScroll);
      canvas.add(this._verticalScroll);

      if (this.scrollBarTid) {
        clearTimeout(this.scrollBarTid);
      }

      this.scrollBarTid = setTimeout(function () {
        canvas.remove(_this2._horizontalScroll);
        canvas.remove(_this2._verticalScroll);
      }, 3000);
    }

    /**
     * Check zoom level is default zoom level (1.0)
     * @param {number} zoomLevel - zoom level
     * @returns {boolean} - whether zoom level is 1.0
     */

  }, {
    key: '_isDefaultZoomLevel',
    value: function _isDefaultZoomLevel(zoomLevel) {
      return zoomLevel === DEFAULT_ZOOM_LEVEL;
    }

    /**
     * Fire 'zoomChanged' event
     * @param {fabric.Canvas} canvas - fabric canvas
     * @param {number} zoomLevel - 'zoomChanged' event params
     */

  }, {
    key: '_fireZoomChanged',
    value: function _fireZoomChanged(canvas, zoomLevel) {
      canvas.fire(ZOOM_CHANGED, { viewport: canvas.calcViewportBoundaries(), zoomLevel: zoomLevel });
    }

    /**
     * Get zoom mode
     */

  }, {
    key: 'mode',
    get: function get() {
      return this.zoomMode;
    }
  }]);

  return Zoom;
}(_component2.default);

exports.default = Zoom;

/***/ }),

/***/ "./src/js/consts.js":
/*!**************************!*\
  !*** ./src/js/consts.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultResizePixelValues = exports.emptyCropRectValues = exports.defaultFilterRangeValues = exports.defaultTextRangeValues = exports.defaultShapeStrokeValues = exports.defaultDrawRangeValues = exports.defaultRotateRangeValues = exports.defaultIconPath = exports.rejectMessages = exports.fObjectOptions = exports.keyCodes = exports.zoomModes = exports.drawingMenuNames = exports.drawingModes = exports.historyNames = exports.selectorNames = exports.eventNames = exports.commandNames = exports.CROPZONE_DEFAULT_OPTIONS = exports.SHAPE_DEFAULT_OPTIONS = exports.componentNames = exports.filterType = exports.OBJ_TYPE = exports.SHAPE_TYPE = exports.SHAPE_FILL_TYPE = exports.HELP_MENUS = exports.DELETE_HELP_MENUS = exports.COMMAND_HELP_MENUS = exports.ZOOM_HELP_MENUS = undefined;

var _util = __webpack_require__(/*! @/util */ "./src/js/util.js");

/**
 * Help features for zoom
 * @type {Array.<string>}
 */
var ZOOM_HELP_MENUS = exports.ZOOM_HELP_MENUS = ['zoomIn', 'zoomOut', 'hand'];

/**
 * Help features for command
 * @type {Array.<string>}
 */
/**
 * @author NHN. FE Development Team <dl_javascript@nhn.com>
 * @fileoverview Constants
 */
var COMMAND_HELP_MENUS = exports.COMMAND_HELP_MENUS = ['history', 'undo', 'redo', 'reset'];

/**
 * Help features for delete
 * @type {Array.<string>}
 */
var DELETE_HELP_MENUS = exports.DELETE_HELP_MENUS = ['delete', 'deleteAll'];

/**
 * Editor help features
 * @type {Array.<string>}
 */
var HELP_MENUS = exports.HELP_MENUS = [].concat(ZOOM_HELP_MENUS, COMMAND_HELP_MENUS, DELETE_HELP_MENUS);

/**
 * Fill type for shape
 * @type {Object.<string, string>}
 */
var SHAPE_FILL_TYPE = exports.SHAPE_FILL_TYPE = {
  FILTER: 'filter',
  COLOR: 'color'
};

/**
 * Shape type list
 * @type {Array.<string>}
 */
var SHAPE_TYPE = exports.SHAPE_TYPE = ['rect', 'circle', 'triangle'];

/**
 * Object type
 * @type {Object.<string, string>}
 */
var OBJ_TYPE = exports.OBJ_TYPE = {
  CROPZONE: 'cropzone'
};

/**
 * Filter type map
 * @type {Object.<string, string>}
 */
var filterType = exports.filterType = {
  VINTAGE: 'vintage',
  SEPIA2: 'sepia2',
  REMOVE_COLOR: 'removeColor',
  COLOR_FILTER: 'colorFilter',
  REMOVE_WHITE: 'removeWhite',
  BLEND_COLOR: 'blendColor',
  BLEND: 'blend'
};

/**
 * Component names
 * @type {Object.<string, string>}
 */
var componentNames = exports.componentNames = (0, _util.keyMirror)('IMAGE_LOADER', 'JSON_LOADER', 'CROPPER', 'FLIP', 'ROTATION', 'FREE_DRAWING', 'LINE', 'TEXT', 'ICON', 'FILTER', 'SHAPE', 'ZOOM', 'RESIZE');

/**
 * Shape default option
 * @type {Object}
 */
var SHAPE_DEFAULT_OPTIONS = exports.SHAPE_DEFAULT_OPTIONS = {
  lockSkewingX: true,
  lockSkewingY: true,
  bringForward: true,
  isRegular: false
};

/**
 * Cropzone default option
 * @type {Object}
 */
var CROPZONE_DEFAULT_OPTIONS = exports.CROPZONE_DEFAULT_OPTIONS = {
  hasRotatingPoint: false,
  hasBorders: false,
  lockScalingFlip: true,
  lockRotation: true,
  lockSkewingX: true,
  lockSkewingY: true
};

/**
 * Command names
 * @type {Object.<string, string>}
 */
var commandNames = exports.commandNames = {
  CLEAR_OBJECTS: 'clearObjects',
  LOAD_IMAGE: 'loadImage',
  LOAD_JSON: 'loadJson',
  FLIP_IMAGE: 'flip',
  ROTATE_IMAGE: 'rotate',
  ADD_OBJECT: 'addObject',
  REMOVE_OBJECT: 'removeObject',
  APPLY_FILTER: 'applyFilter',
  REMOVE_FILTER: 'removeFilter',
  ADD_ICON: 'addIcon',
  CHANGE_ICON_COLOR: 'changeIconColor',
  ADD_SHAPE: 'addShape',
  CHANGE_SHAPE: 'changeShape',
  ADD_TEXT: 'addText',
  CHANGE_TEXT: 'changeText',
  CHANGE_TEXT_STYLE: 'changeTextStyle',
  ADD_IMAGE_OBJECT: 'addImageObject',
  RESIZE_CANVAS_DIMENSION: 'resizeCanvasDimension',
  SET_OBJECT_PROPERTIES: 'setObjectProperties',
  SET_OBJECT_POSITION: 'setObjectPosition',
  CHANGE_SELECTION: 'changeSelection',
  RESIZE_IMAGE: 'resize'
};

/**
 * Event names
 * @type {Object.<string, string>}
 */
var eventNames = exports.eventNames = {
  OBJECT_ACTIVATED: 'objectActivated',
  OBJECT_MOVED: 'objectMoved',
  OBJECT_SCALED: 'objectScaled',
  OBJECT_CREATED: 'objectCreated',
  OBJECT_ROTATED: 'objectRotated',
  OBJECT_ADDED: 'objectAdded',
  OBJECT_MODIFIED: 'objectModified',
  TEXT_EDITING: 'textEditing',
  TEXT_CHANGED: 'textChanged',
  ICON_CREATE_RESIZE: 'iconCreateResize',
  ICON_CREATE_END: 'iconCreateEnd',
  ADD_TEXT: 'addText',
  ADD_OBJECT: 'addObject',
  ADD_OBJECT_AFTER: 'addObjectAfter',
  MOUSE_DOWN: 'mousedown',
  MOUSE_UP: 'mouseup',
  MOUSE_MOVE: 'mousemove',
  MOUSE_WHEEL: 'mousewheel',
  // UNDO/REDO Events
  REDO_STACK_CHANGED: 'redoStackChanged',
  UNDO_STACK_CHANGED: 'undoStackChanged',
  SELECTION_CLEARED: 'selectionCleared',
  SELECTION_CREATED: 'selectionCreated',
  EXECUTE_COMMAND: 'executeCommand',
  AFTER_UNDO: 'afterUndo',
  AFTER_REDO: 'afterRedo',
  ZOOM_CHANGED: 'zoomChanged',
  HAND_STARTED: 'handStarted',
  HAND_STOPPED: 'handStopped',
  KEY_DOWN: 'keydown',
  KEY_UP: 'keyup',
  INPUT_BOX_EDITING_STARTED: 'inputBoxEditingStarted',
  INPUT_BOX_EDITING_STOPPED: 'inputBoxEditingStopped',
  FOCUS: 'focus',
  BLUR: 'blur',
  IMAGE_RESIZED: 'imageResized'
};

/**
 * Selector names
 * @type {Object.<string, string>}
 */
var selectorNames = exports.selectorNames = {
  COLOR_PICKER_INPUT_BOX: '.tui-colorpicker-palette-hex'
};

/**
 * History names
 * @type {Object.<string, string>}
 */
var historyNames = exports.historyNames = {
  LOAD_IMAGE: 'Load',
  LOAD_JSON: 'Load Json',
  LOAD_MASK_IMAGE: 'Mask',
  ADD_MASK_IMAGE: 'Mask',
  ADD_IMAGE_OBJECT: 'Mask',
  CROP: 'Crop',
  RESIZE: 'Resize',
  APPLY_FILTER: 'Filter',
  REMOVE_FILTER: 'Filter',
  CHANGE_SHAPE: 'Shape',
  CHANGE_ICON_COLOR: 'Icon',
  ADD_TEXT: 'Text',
  CHANGE_TEXT_STYLE: 'Text',
  REMOVE_OBJECT: 'Delete',
  CLEAR_OBJECTS: 'Delete'
};

/**
 * Editor states
 * @type {Object.<string, string>}
 */
var drawingModes = exports.drawingModes = (0, _util.keyMirror)('NORMAL', 'CROPPER', 'FREE_DRAWING', 'LINE_DRAWING', 'TEXT', 'SHAPE', 'ICON', 'ZOOM', 'RESIZE');

/**
 * Menu names with drawing mode
 * @type {Object.<string, string>}
 */
var drawingMenuNames = exports.drawingMenuNames = {
  TEXT: 'text',
  CROP: 'crop',
  RESIZE: 'resize',
  SHAPE: 'shape',
  ZOOM: 'zoom'
};

/**
 * Zoom modes
 * @type {Object.<string, string>}
 */
var zoomModes = exports.zoomModes = {
  DEFAULT: 'normal',
  ZOOM: 'zoom',
  HAND: 'hand'
};

/**
 * Shortcut key values
 * @type {Object.<string, number>}
 */
var keyCodes = exports.keyCodes = {
  Z: 90,
  Y: 89,
  C: 67,
  V: 86,
  SHIFT: 16,
  BACKSPACE: 8,
  DEL: 46,
  ARROW_DOWN: 40,
  ARROW_UP: 38,
  SPACE: 32,
  ESCAPE: 27
};

/**
 * Fabric object options
 * @type {Object.<string, Object>}
 */
var fObjectOptions = exports.fObjectOptions = {
  SELECTION_STYLE: {
    borderColor: 'red',
    cornerColor: 'green',
    cornerSize: 10,
    originX: 'center',
    originY: 'center',
    transparentCorners: false
  }
};

/**
 * Promise reject messages
 * @type {Object.<string, string>}
 */
var rejectMessages = exports.rejectMessages = {
  addedObject: 'The object is already added.',
  flip: 'The flipX and flipY setting values are not changed.',
  invalidDrawingMode: 'This operation is not supported in the drawing mode.',
  invalidParameters: 'Invalid parameters.',
  isLock: 'The executing command state is locked.',
  loadImage: 'The background image is empty.',
  loadJson: 'The JSON is invalid',
  loadingImageFailed: 'Invalid image loaded.',
  noActiveObject: 'There is no active object.',
  noObject: 'The object is not in canvas.',
  redo: 'The promise of redo command is reject.',
  rotation: 'The current angle is same the old angle.',
  undo: 'The promise of undo command is reject.',
  unsupportedOperation: 'Unsupported operation.',
  unsupportedType: 'Unsupported object type.'
};

/**
 * Default icon menu svg path
 * @type {Object.<string, string>}
 */
var defaultIconPath = exports.defaultIconPath = {
  'icon-arrow': 'M40 12V0l24 24-24 24V36H0V12h40z',
  'icon-arrow-2': 'M49,32 H3 V22 h46 l-18,-18 h12 l23,23 L43,50 h-12 l18,-18  z ',
  'icon-arrow-3': 'M43.349998,27 L17.354,53 H1.949999 l25.996,-26 L1.949999,1 h15.404 L43.349998,27  z ',
  'icon-star': 'M35,54.557999 l-19.912001,10.468 l3.804,-22.172001 l-16.108,-15.7 l22.26,-3.236 L35,3.746 l9.956,20.172001 l22.26,3.236 l-16.108,15.7 l3.804,22.172001  z ',
  'icon-star-2': 'M17,31.212 l-7.194,4.08 l-4.728,-6.83 l-8.234,0.524 l-1.328,-8.226 l-7.644,-3.14 l2.338,-7.992 l-5.54,-6.18 l5.54,-6.176 l-2.338,-7.994 l7.644,-3.138 l1.328,-8.226 l8.234,0.522 l4.728,-6.83 L17,-24.312 l7.194,-4.08 l4.728,6.83 l8.234,-0.522 l1.328,8.226 l7.644,3.14 l-2.338,7.992 l5.54,6.178 l-5.54,6.178 l2.338,7.992 l-7.644,3.14 l-1.328,8.226 l-8.234,-0.524 l-4.728,6.83  z ',
  'icon-polygon': 'M3,31 L19,3 h32 l16,28 l-16,28 H19  z ',
  'icon-location': 'M24 62C8 45.503 0 32.837 0 24 0 10.745 10.745 0 24 0s24 10.745 24 24c0 8.837-8 21.503-24 38zm0-28c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z',
  'icon-heart': 'M49.994999,91.349998 l-6.96,-6.333 C18.324001,62.606995 2.01,47.829002 2.01,29.690998 C2.01,14.912998 13.619999,3.299999 28.401001,3.299999 c8.349,0 16.362,5.859 21.594,12 c5.229,-6.141 13.242001,-12 21.591,-12 c14.778,0 26.390999,11.61 26.390999,26.390999 c0,18.138 -16.314001,32.916 -41.025002,55.374001 l-6.96,6.285  z ',
  'icon-bubble': 'M44 48L34 58V48H12C5.373 48 0 42.627 0 36V12C0 5.373 5.373 0 12 0h40c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12h-8z'
};

var defaultRotateRangeValues = exports.defaultRotateRangeValues = {
  realTimeEvent: true,
  min: -360,
  max: 360,
  value: 0
};

var defaultDrawRangeValues = exports.defaultDrawRangeValues = {
  min: 5,
  max: 30,
  value: 12
};

var defaultShapeStrokeValues = exports.defaultShapeStrokeValues = {
  realTimeEvent: true,
  min: 2,
  max: 300,
  value: 3
};

var defaultTextRangeValues = exports.defaultTextRangeValues = {
  realTimeEvent: true,
  min: 10,
  max: 100,
  value: 50
};

var defaultFilterRangeValues = exports.defaultFilterRangeValues = {
  tintOpacityRange: {
    realTimeEvent: true,
    min: 0,
    max: 1,
    value: 0.7,
    useDecimal: true
  },
  removewhiteDistanceRange: {
    realTimeEvent: true,
    min: 0,
    max: 1,
    value: 0.2,
    useDecimal: true
  },
  brightnessRange: {
    realTimeEvent: true,
    min: -1,
    max: 1,
    value: 0,
    useDecimal: true
  },
  noiseRange: {
    realTimeEvent: true,
    min: 0,
    max: 1000,
    value: 100
  },
  pixelateRange: {
    realTimeEvent: true,
    min: 2,
    max: 20,
    value: 4
  },
  colorfilterThresholdRange: {
    realTimeEvent: true,
    min: 0,
    max: 1,
    value: 0.2,
    useDecimal: true
  },
  blurFilterRange: {
    value: 0.1
  }
};

var emptyCropRectValues = exports.emptyCropRectValues = {
  LEFT: 0,
  TOP: 0,
  WIDTH: 0.5,
  HEIGHT: 0.5
};

var defaultResizePixelValues = exports.defaultResizePixelValues = {
  realTimeEvent: true,
  min: 32,
  max: 4088,
  value: 800
};

/***/ }),

/***/ "./src/js/drawingMode/cropper.js":
/*!***************************************!*\
  !*** ./src/js/drawingMode/cropper.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _drawingMode = __webpack_require__(/*! @/interface/drawingMode */ "./src/js/interface/drawingMode.js");

var _drawingMode2 = _interopRequireDefault(_drawingMode);

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author NHN. FE Development Team <dl_javascript@nhn.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @fileoverview CropperDrawingMode class
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * CropperDrawingMode class
 * @class
 * @ignore
 */
var CropperDrawingMode = function (_DrawingMode) {
  _inherits(CropperDrawingMode, _DrawingMode);

  function CropperDrawingMode() {
    _classCallCheck(this, CropperDrawingMode);

    return _possibleConstructorReturn(this, (CropperDrawingMode.__proto__ || Object.getPrototypeOf(CropperDrawingMode)).call(this, _consts.drawingModes.CROPPER));
  }

  /**
   * start this drawing mode
   * @param {Graphics} graphics - Graphics instance
   * @override
   */


  _createClass(CropperDrawingMode, [{
    key: 'start',
    value: function start(graphics) {
      var cropper = graphics.getComponent(_consts.componentNames.CROPPER);
      cropper.start();
    }

    /**
     * stop this drawing mode
     * @param {Graphics} graphics - Graphics instance
     * @override
     */

  }, {
    key: 'end',
    value: function end(graphics) {
      var cropper = graphics.getComponent(_consts.componentNames.CROPPER);
      cropper.end();
    }
  }]);

  return CropperDrawingMode;
}(_drawingMode2.default);

exports.default = CropperDrawingMode;

/***/ }),

/***/ "./src/js/drawingMode/freeDrawing.js":
/*!*******************************************!*\
  !*** ./src/js/drawingMode/freeDrawing.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _drawingMode = __webpack_require__(/*! @/interface/drawingMode */ "./src/js/interface/drawingMode.js");

var _drawingMode2 = _interopRequireDefault(_drawingMode);

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author NHN. FE Development Team <dl_javascript@nhn.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @fileoverview FreeDrawingMode class
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * FreeDrawingMode class
 * @class
 * @ignore
 */
var FreeDrawingMode = function (_DrawingMode) {
  _inherits(FreeDrawingMode, _DrawingMode);

  function FreeDrawingMode() {
    _classCallCheck(this, FreeDrawingMode);

    return _possibleConstructorReturn(this, (FreeDrawingMode.__proto__ || Object.getPrototypeOf(FreeDrawingMode)).call(this, _consts.drawingModes.FREE_DRAWING));
  }

  /**
   * start this drawing mode
   * @param {Graphics} graphics - Graphics instance
   * @param {{width: ?number, color: ?string}} [options] - Brush width & color
   * @override
   */


  _createClass(FreeDrawingMode, [{
    key: 'start',
    value: function start(graphics, options) {
      var freeDrawing = graphics.getComponent(_consts.componentNames.FREE_DRAWING);
      freeDrawing.start(options);
    }

    /**
     * stop this drawing mode
     * @param {Graphics} graphics - Graphics instance
     * @override
     */

  }, {
    key: 'end',
    value: function end(graphics) {
      var freeDrawing = graphics.getComponent(_consts.componentNames.FREE_DRAWING);
      freeDrawing.end();
    }
  }]);

  return FreeDrawingMode;
}(_drawingMode2.default);

exports.default = FreeDrawingMode;

/***/ }),

/***/ "./src/js/drawingMode/icon.js":
/*!************************************!*\
  !*** ./src/js/drawingMode/icon.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _drawingMode = __webpack_require__(/*! @/interface/drawingMode */ "./src/js/interface/drawingMode.js");

var _drawingMode2 = _interopRequireDefault(_drawingMode);

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author NHN. FE Development Team <dl_javascript@nhn.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @fileoverview IconDrawingMode class
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * IconDrawingMode class
 * @class
 * @ignore
 */
var IconDrawingMode = function (_DrawingMode) {
  _inherits(IconDrawingMode, _DrawingMode);

  function IconDrawingMode() {
    _classCallCheck(this, IconDrawingMode);

    return _possibleConstructorReturn(this, (IconDrawingMode.__proto__ || Object.getPrototypeOf(IconDrawingMode)).call(this, _consts.drawingModes.ICON));
  }

  /**
   * start this drawing mode
   * @param {Graphics} graphics - Graphics instance
   * @override
   */


  _createClass(IconDrawingMode, [{
    key: 'start',
    value: function start(graphics) {
      var icon = graphics.getComponent(_consts.componentNames.ICON);
      icon.start();
    }

    /**
     * stop this drawing mode
     * @param {Graphics} graphics - Graphics instance
     * @override
     */

  }, {
    key: 'end',
    value: function end(graphics) {
      var icon = graphics.getComponent(_consts.componentNames.ICON);
      icon.end();
    }
  }]);

  return IconDrawingMode;
}(_drawingMode2.default);

exports.default = IconDrawingMode;

/***/ }),

/***/ "./src/js/drawingMode/lineDrawing.js":
/*!*******************************************!*\
  !*** ./src/js/drawingMode/lineDrawing.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _drawingMode = __webpack_require__(/*! @/interface/drawingMode */ "./src/js/interface/drawingMode.js");

var _drawingMode2 = _interopRequireDefault(_drawingMode);

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author NHN. FE Development Team <dl_javascript@nhn.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @fileoverview LineDrawingMode class
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * LineDrawingMode class
 * @class
 * @ignore
 */
var LineDrawingMode = function (_DrawingMode) {
  _inherits(LineDrawingMode, _DrawingMode);

  function LineDrawingMode() {
    _classCallCheck(this, LineDrawingMode);

    return _possibleConstructorReturn(this, (LineDrawingMode.__proto__ || Object.getPrototypeOf(LineDrawingMode)).call(this, _consts.drawingModes.LINE_DRAWING));
  }

  /**
   * start this drawing mode
   * @param {Graphics} graphics - Graphics instance
   * @param {{width: ?number, color: ?string}} [options] - Brush width & color
   * @override
   */


  _createClass(LineDrawingMode, [{
    key: 'start',
    value: function start(graphics, options) {
      var lineDrawing = graphics.getComponent(_consts.componentNames.LINE);
      lineDrawing.start(options);
    }

    /**
     * stop this drawing mode
     * @param {Graphics} graphics - Graphics instance
     * @override
     */

  }, {
    key: 'end',
    value: function end(graphics) {
      var lineDrawing = graphics.getComponent(_consts.componentNames.LINE);
      lineDrawing.end();
    }
  }]);

  return LineDrawingMode;
}(_drawingMode2.default);

exports.default = LineDrawingMode;

/***/ }),

/***/ "./src/js/drawingMode/resize.js":
/*!**************************************!*\
  !*** ./src/js/drawingMode/resize.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _drawingMode = __webpack_require__(/*! @/interface/drawingMode */ "./src/js/interface/drawingMode.js");

var _drawingMode2 = _interopRequireDefault(_drawingMode);

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * ResizeDrawingMode class
 * @class
 * @ignore
 */
var ResizeDrawingMode = function (_DrawingMode) {
  _inherits(ResizeDrawingMode, _DrawingMode);

  function ResizeDrawingMode() {
    _classCallCheck(this, ResizeDrawingMode);

    return _possibleConstructorReturn(this, (ResizeDrawingMode.__proto__ || Object.getPrototypeOf(ResizeDrawingMode)).call(this, _consts.drawingModes.RESIZE));
  }

  /**
   * start this drawing mode
   * @param {Graphics} graphics - Graphics instance
   * @override
   */


  _createClass(ResizeDrawingMode, [{
    key: 'start',
    value: function start(graphics) {
      var resize = graphics.getComponent(_consts.componentNames.RESIZE);
      resize.start();
    }

    /**
     * stop this drawing mode
     * @param {Graphics} graphics - Graphics instance
     * @override
     */

  }, {
    key: 'end',
    value: function end(graphics) {
      var resize = graphics.getComponent(_consts.componentNames.RESIZE);
      resize.end();
    }
  }]);

  return ResizeDrawingMode;
}(_drawingMode2.default);

exports.default = ResizeDrawingMode;

/***/ }),

/***/ "./src/js/drawingMode/shape.js":
/*!*************************************!*\
  !*** ./src/js/drawingMode/shape.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _drawingMode = __webpack_require__(/*! @/interface/drawingMode */ "./src/js/interface/drawingMode.js");

var _drawingMode2 = _interopRequireDefault(_drawingMode);

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author NHN. FE Development Team <dl_javascript@nhn.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @fileoverview ShapeDrawingMode class
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * ShapeDrawingMode class
 * @class
 * @ignore
 */
var ShapeDrawingMode = function (_DrawingMode) {
  _inherits(ShapeDrawingMode, _DrawingMode);

  function ShapeDrawingMode() {
    _classCallCheck(this, ShapeDrawingMode);

    return _possibleConstructorReturn(this, (ShapeDrawingMode.__proto__ || Object.getPrototypeOf(ShapeDrawingMode)).call(this, _consts.drawingModes.SHAPE));
  }

  /**
   * start this drawing mode
   * @param {Graphics} graphics - Graphics instance
   * @override
   */


  _createClass(ShapeDrawingMode, [{
    key: 'start',
    value: function start(graphics) {
      var shape = graphics.getComponent(_consts.componentNames.SHAPE);
      shape.start();
    }

    /**
     * stop this drawing mode
     * @param {Graphics} graphics - Graphics instance
     * @override
     */

  }, {
    key: 'end',
    value: function end(graphics) {
      var shape = graphics.getComponent(_consts.componentNames.SHAPE);
      shape.end();
    }
  }]);

  return ShapeDrawingMode;
}(_drawingMode2.default);

exports.default = ShapeDrawingMode;

/***/ }),

/***/ "./src/js/drawingMode/text.js":
/*!************************************!*\
  !*** ./src/js/drawingMode/text.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _drawingMode = __webpack_require__(/*! @/interface/drawingMode */ "./src/js/interface/drawingMode.js");

var _drawingMode2 = _interopRequireDefault(_drawingMode);

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author NHN. FE Development Team <dl_javascript@nhn.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @fileoverview TextDrawingMode class
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * TextDrawingMode class
 * @class
 * @ignore
 */
var TextDrawingMode = function (_DrawingMode) {
  _inherits(TextDrawingMode, _DrawingMode);

  function TextDrawingMode() {
    _classCallCheck(this, TextDrawingMode);

    return _possibleConstructorReturn(this, (TextDrawingMode.__proto__ || Object.getPrototypeOf(TextDrawingMode)).call(this, _consts.drawingModes.TEXT));
  }

  /**
   * start this drawing mode
   * @param {Graphics} graphics - Graphics instance
   * @override
   */


  _createClass(TextDrawingMode, [{
    key: 'start',
    value: function start(graphics) {
      var text = graphics.getComponent(_consts.componentNames.TEXT);
      text.start();
    }

    /**
     * stop this drawing mode
     * @param {Graphics} graphics - Graphics instance
     * @override
     */

  }, {
    key: 'end',
    value: function end(graphics) {
      var text = graphics.getComponent(_consts.componentNames.TEXT);
      text.end();
    }
  }]);

  return TextDrawingMode;
}(_drawingMode2.default);

exports.default = TextDrawingMode;

/***/ }),

/***/ "./src/js/drawingMode/zoom.js":
/*!************************************!*\
  !*** ./src/js/drawingMode/zoom.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _drawingMode = __webpack_require__(/*! @/interface/drawingMode */ "./src/js/interface/drawingMode.js");

var _drawingMode2 = _interopRequireDefault(_drawingMode);

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author NHN. FE Development Team <dl_javascript@nhn.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @fileoverview ZoomDrawingMode class
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * ZoomDrawingMode class
 * @class
 * @ignore
 */
var ZoomDrawingMode = function (_DrawingMode) {
  _inherits(ZoomDrawingMode, _DrawingMode);

  function ZoomDrawingMode() {
    _classCallCheck(this, ZoomDrawingMode);

    return _possibleConstructorReturn(this, (ZoomDrawingMode.__proto__ || Object.getPrototypeOf(ZoomDrawingMode)).call(this, _consts.drawingModes.ZOOM));
  }

  /**
   * start this drawing mode
   * @param {Graphics} graphics - Graphics instance
   * @override
   */


  _createClass(ZoomDrawingMode, [{
    key: 'start',
    value: function start(graphics) {
      var zoom = graphics.getComponent(_consts.componentNames.ZOOM);

      zoom.start();
    }

    /**
     * stop this drawing mode
     * @param {Graphics} graphics - Graphics instance
     * @override
     */

  }, {
    key: 'end',
    value: function end(graphics) {
      var zoom = graphics.getComponent(_consts.componentNames.ZOOM);

      zoom.end();
    }
  }]);

  return ZoomDrawingMode;
}(_drawingMode2.default);

exports.default = ZoomDrawingMode;

/***/ }),

/***/ "./src/js/extension/arrowLine.js":
/*!***************************************!*\
  !*** ./src/js/extension/arrowLine.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fabric = __webpack_require__(/*! fabric */ "fabric");

var _fabric2 = _interopRequireDefault(_fabric);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ARROW_ANGLE = 30; /**
                       * @author NHN. FE Development Team <dl_javascript@nhn.com>
                       * @fileoverview Blur extending fabric.Image.filters.Convolute
                       */

var CHEVRON_SIZE_RATIO = 2.7;
var TRIANGLE_SIZE_RATIO = 1.7;
var RADIAN_CONVERSION_VALUE = 180;

var ArrowLine = _fabric2.default.util.createClass(_fabric2.default.Line,
/** @lends Convolute.prototype */{
  /**
   * Line type
   * @param {String} type
   * @default
   */
  type: 'line',

  /**
   * Constructor
   * @param {Array} [points] Array of points
   * @param {Object} [options] Options object
   * @override
   */
  initialize: function initialize(points) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    this.callSuper('initialize', points, options);

    this.arrowType = options.arrowType;
  },


  /**
   * Render ArrowLine
   * @private
   * @override
   */
  _render: function _render(ctx) {
    var _calcLinePoints = this.calcLinePoints(),
        fromX = _calcLinePoints.x1,
        fromY = _calcLinePoints.y1,
        toX = _calcLinePoints.x2,
        toY = _calcLinePoints.y2;

    var linePosition = {
      fromX: fromX,
      fromY: fromY,
      toX: toX,
      toY: toY
    };
    this.ctx = ctx;
    ctx.lineWidth = this.strokeWidth;

    this._renderBasicLinePath(linePosition);
    this._drawDecoratorPath(linePosition);

    this._renderStroke(ctx);
  },


  /**
   * Render Basic line path
   * @param {Object} linePosition - line position
   *  @param {number} option.fromX - line start position x
   *  @param {number} option.fromY - line start position y
   *  @param {number} option.toX - line end position x
   *  @param {number} option.toY - line end position y
   * @private
   */
  _renderBasicLinePath: function _renderBasicLinePath(_ref) {
    var fromX = _ref.fromX,
        fromY = _ref.fromY,
        toX = _ref.toX,
        toY = _ref.toY;

    this.ctx.beginPath();
    this.ctx.moveTo(fromX, fromY);
    this.ctx.lineTo(toX, toY);
  },


  /**
   * Render Arrow Head
   * @param {Object} linePosition - line position
   *  @param {number} option.fromX - line start position x
   *  @param {number} option.fromY - line start position y
   *  @param {number} option.toX - line end position x
   *  @param {number} option.toY - line end position y
   * @private
   */
  _drawDecoratorPath: function _drawDecoratorPath(linePosition) {
    this._drawDecoratorPathType('head', linePosition);
    this._drawDecoratorPathType('tail', linePosition);
  },


  /**
   * Render Arrow Head
   * @param {string} type - 'head' or 'tail'
   * @param {Object} linePosition - line position
   *  @param {number} option.fromX - line start position x
   *  @param {number} option.fromY - line start position y
   *  @param {number} option.toX - line end position x
   *  @param {number} option.toY - line end position y
   * @private
   */
  _drawDecoratorPathType: function _drawDecoratorPathType(type, linePosition) {
    switch (this.arrowType[type]) {
      case 'triangle':
        this._drawTrianglePath(type, linePosition);
        break;
      case 'chevron':
        this._drawChevronPath(type, linePosition);
        break;
      default:
        break;
    }
  },


  /**
   * Render Triangle Head
   * @param {string} type - 'head' or 'tail'
   * @param {Object} linePosition - line position
   *  @param {number} option.fromX - line start position x
   *  @param {number} option.fromY - line start position y
   *  @param {number} option.toX - line end position x
   *  @param {number} option.toY - line end position y
   * @private
   */
  _drawTrianglePath: function _drawTrianglePath(type, linePosition) {
    var decorateSize = this.ctx.lineWidth * TRIANGLE_SIZE_RATIO;

    this._drawChevronPath(type, linePosition, decorateSize);
    this.ctx.closePath();
  },


  /**
   * Render Chevron Head
   * @param {string} type - 'head' or 'tail'
   * @param {Object} linePosition - line position
   *  @param {number} option.fromX - line start position x
   *  @param {number} option.fromY - line start position y
   *  @param {number} option.toX - line end position x
   *  @param {number} option.toY - line end position y
   * @param {number} decorateSize - decorate size
   * @private
   */
  _drawChevronPath: function _drawChevronPath(type, _ref2, decorateSize) {
    var _this = this;

    var fromX = _ref2.fromX,
        fromY = _ref2.fromY,
        toX = _ref2.toX,
        toY = _ref2.toY;
    var ctx = this.ctx;

    if (!decorateSize) {
      decorateSize = this.ctx.lineWidth * CHEVRON_SIZE_RATIO;
    }

    var _ref3 = type === 'head' ? [fromX, fromY] : [toX, toY],
        standardX = _ref3[0],
        standardY = _ref3[1];

    var _ref4 = type === 'head' ? [toX, toY] : [fromX, fromY],
        compareX = _ref4[0],
        compareY = _ref4[1];

    var angle = Math.atan2(compareY - standardY, compareX - standardX) * RADIAN_CONVERSION_VALUE / Math.PI;
    var rotatedPosition = function rotatedPosition(changeAngle) {
      return _this.getRotatePosition(decorateSize, changeAngle, {
        x: standardX,
        y: standardY
      });
    };

    ctx.moveTo.apply(ctx, rotatedPosition(angle + ARROW_ANGLE));
    ctx.lineTo(standardX, standardY);
    ctx.lineTo.apply(ctx, rotatedPosition(angle - ARROW_ANGLE));
  },


  /**
   * return position from change angle.
   * @param {number} distance - change distance
   * @param {number} angle - change angle
   * @param {Object} referencePosition - reference position
   * @returns {Array}
   * @private
   */
  getRotatePosition: function getRotatePosition(distance, angle, referencePosition) {
    var radian = angle * Math.PI / RADIAN_CONVERSION_VALUE;
    var x = referencePosition.x,
        y = referencePosition.y;


    return [distance * Math.cos(radian) + x, distance * Math.sin(radian) + y];
  }
});

exports.default = ArrowLine;

/***/ }),

/***/ "./src/js/extension/colorFilter.js":
/*!*****************************************!*\
  !*** ./src/js/extension/colorFilter.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fabric = __webpack_require__(/*! fabric */ "fabric");

var _fabric2 = _interopRequireDefault(_fabric);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ColorFilter object
 * @class ColorFilter
 * @extends {fabric.Image.filters.BaseFilter}
 * @ignore
 */
var ColorFilter = _fabric2.default.util.createClass(_fabric2.default.Image.filters.BaseFilter,
/** @lends BaseFilter.prototype */{
  /**
   * Filter type
   * @param {String} type
   * @default
   */
  type: 'ColorFilter',

  /**
   * Constructor
   * @member fabric.Image.filters.ColorFilter.prototype
   * @param {Object} [options] Options object
   * @param {Number} [options.color='#FFFFFF'] Value of color (0...255)
   * @param {Number} [options.threshold=45] Value of threshold (0...255)
   * @override
   */
  initialize: function initialize(options) {
    if (!options) {
      options = {};
    }
    this.color = options.color || '#FFFFFF';
    this.threshold = options.threshold || 45;
    this.x = options.x || null;
    this.y = options.y || null;
  },


  /**
   * Applies filter to canvas element
   * @param {Object} canvas Canvas object passed by fabric
   */
  // eslint-disable-next-line complexity
  applyTo: function applyTo(canvas) {
    var canvasEl = canvas.canvasEl;

    var context = canvasEl.getContext('2d');
    var imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height);
    var data = imageData.data;
    var threshold = this.threshold;

    var filterColor = _fabric2.default.Color.sourceFromHex(this.color);
    var i = void 0,
        len = void 0;

    if (this.x && this.y) {
      filterColor = this._getColor(imageData, this.x, this.y);
    }

    for (i = 0, len = data.length; i < len; i += 4) {
      if (this._isOutsideThreshold(data[i], filterColor[0], threshold) || this._isOutsideThreshold(data[i + 1], filterColor[1], threshold) || this._isOutsideThreshold(data[i + 2], filterColor[2], threshold)) {
        continue;
      }
      data[i] = data[i + 1] = data[i + 2] = data[i + 3] = 0;
    }
    context.putImageData(imageData, 0, 0);
  },


  /**
   * Check color if it is within threshold
   * @param {Number} color1 source color
   * @param {Number} color2 filtering color
   * @param {Number} threshold threshold
   * @returns {boolean} true if within threshold or false
   */
  _isOutsideThreshold: function _isOutsideThreshold(color1, color2, threshold) {
    var diff = color1 - color2;

    return Math.abs(diff) > threshold;
  },


  /**
   * Get color at (x, y)
   * @param {Object} imageData of canvas
   * @param {Number} x left position
   * @param {Number} y top position
   * @returns {Array} color array
   */
  _getColor: function _getColor(imageData, x, y) {
    var color = [0, 0, 0, 0];
    var data = imageData.data,
        width = imageData.width;

    var bytes = 4;
    var position = (width * y + x) * bytes;

    color[0] = data[position];
    color[1] = data[position + 1];
    color[2] = data[position + 2];
    color[3] = data[position + 3];

    return color;
  }
}); /**
     * @author NHN. FE Development Team <dl_javascript@nhn.com>
     * @fileoverview ColorFilter extending fabric.Image.filters.BaseFilter
     */
exports.default = ColorFilter;

/***/ }),

/***/ "./src/js/extension/cropzone.js":
/*!**************************************!*\
  !*** ./src/js/extension/cropzone.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tuiCodeSnippet = __webpack_require__(/*! tui-code-snippet */ "tui-code-snippet");

var _tuiCodeSnippet2 = _interopRequireDefault(_tuiCodeSnippet);

var _fabric = __webpack_require__(/*! fabric */ "fabric");

var _fabric2 = _interopRequireDefault(_fabric);

var _util = __webpack_require__(/*! @/util */ "./src/js/util.js");

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * @author NHN. FE Development Team <dl_javascript@nhn.com>
                                                                                                                                                                                                                   * @fileoverview Cropzone extending fabric.Rect
                                                                                                                                                                                                                   */


var CORNER_TYPE_TOP_LEFT = 'tl';
var CORNER_TYPE_TOP_RIGHT = 'tr';
var CORNER_TYPE_MIDDLE_TOP = 'mt';
var CORNER_TYPE_MIDDLE_LEFT = 'ml';
var CORNER_TYPE_MIDDLE_RIGHT = 'mr';
var CORNER_TYPE_MIDDLE_BOTTOM = 'mb';
var CORNER_TYPE_BOTTOM_LEFT = 'bl';
var CORNER_TYPE_BOTTOM_RIGHT = 'br';
var CORNER_TYPE_LIST = [CORNER_TYPE_TOP_LEFT, CORNER_TYPE_TOP_RIGHT, CORNER_TYPE_MIDDLE_TOP, CORNER_TYPE_MIDDLE_LEFT, CORNER_TYPE_MIDDLE_RIGHT, CORNER_TYPE_MIDDLE_BOTTOM, CORNER_TYPE_BOTTOM_LEFT, CORNER_TYPE_BOTTOM_RIGHT];
var NOOP_FUNCTION = function NOOP_FUNCTION() {};

/**
 * Align with cropzone ratio
 * @param {string} selectedCorner - selected corner type
 * @returns {{width: number, height: number}}
 * @private
 */
function cornerTypeValid(selectedCorner) {
  return CORNER_TYPE_LIST.indexOf(selectedCorner) >= 0;
}

/**
 * return scale basis type
 * @param {number} diffX - X distance of the cursor and corner.
 * @param {number} diffY - Y distance of the cursor and corner.
 * @returns {string}
 * @private
 */
function getScaleBasis(diffX, diffY) {
  return diffX > diffY ? 'width' : 'height';
}

/**
 * Cropzone object
 * Issue: IE7, 8(with excanvas)
 *  - Cropzone is a black zone without transparency.
 * @class Cropzone
 * @extends {fabric.Rect}
 * @ignore
 */
var Cropzone = _fabric2.default.util.createClass(_fabric2.default.Rect,
/** @lends Cropzone.prototype */{
  /**
   * Constructor
   * @param {Object} canvas canvas
   * @param {Object} options Options object
   * @param {Object} extendsOptions object for extends "options"
   * @override
   */
  initialize: function initialize(canvas, options, extendsOptions) {
    options = _tuiCodeSnippet2.default.extend(options, extendsOptions);
    options.type = 'cropzone';

    this.callSuper('initialize', options);
    this._addEventHandler();

    this.canvas = canvas;
    this.options = options;
  },
  canvasEventDelegation: function canvasEventDelegation(eventName) {
    var delegationState = 'unregistered';
    var isRegistered = this.canvasEventTrigger[eventName] !== NOOP_FUNCTION;
    if (isRegistered) {
      delegationState = 'registered';
    } else if ([_consts.eventNames.OBJECT_MOVED, _consts.eventNames.OBJECT_SCALED].indexOf(eventName) < 0) {
      delegationState = 'none';
    }

    return delegationState;
  },
  canvasEventRegister: function canvasEventRegister(eventName, eventTrigger) {
    this.canvasEventTrigger[eventName] = eventTrigger;
  },
  _addEventHandler: function _addEventHandler() {
    var _canvasEventTrigger;

    this.canvasEventTrigger = (_canvasEventTrigger = {}, _defineProperty(_canvasEventTrigger, _consts.eventNames.OBJECT_MOVED, NOOP_FUNCTION), _defineProperty(_canvasEventTrigger, _consts.eventNames.OBJECT_SCALED, NOOP_FUNCTION), _canvasEventTrigger);
    this.on({
      moving: this._onMoving.bind(this),
      scaling: this._onScaling.bind(this)
    });
    _fabric2.default.util.addListener(document, 'keydown', this._onKeyDown.bind(this));
    _fabric2.default.util.addListener(document, 'keyup', this._onKeyUp.bind(this));
  },
  _renderCropzone: function _renderCropzone(ctx) {
    var cropzoneDashLineWidth = 7;
    var cropzoneDashLineOffset = 7;

    // Calc original scale
    var originalFlipX = this.flipX ? -1 : 1;
    var originalFlipY = this.flipY ? -1 : 1;
    var originalScaleX = originalFlipX / this.scaleX;
    var originalScaleY = originalFlipY / this.scaleY;

    // Set original scale
    ctx.scale(originalScaleX, originalScaleY);

    // Render outer rect
    this._fillOuterRect(ctx, 'rgba(0, 0, 0, 0.5)');

    if (this.options.lineWidth) {
      this._fillInnerRect(ctx);
      this._strokeBorder(ctx, 'rgb(255, 255, 255)', {
        lineWidth: this.options.lineWidth
      });
    } else {
      // Black dash line
      this._strokeBorder(ctx, 'rgb(0, 0, 0)', {
        lineDashWidth: cropzoneDashLineWidth
      });

      // White dash line
      this._strokeBorder(ctx, 'rgb(255, 255, 255)', {
        lineDashWidth: cropzoneDashLineWidth,
        lineDashOffset: cropzoneDashLineOffset
      });
    }

    // Reset scale
    ctx.scale(1 / originalScaleX, 1 / originalScaleY);
  },


  /**
   * Render Crop-zone
   * @private
   * @override
   */
  _render: function _render(ctx) {
    this.callSuper('_render', ctx);

    this._renderCropzone(ctx);
  },


  /**
   * Cropzone-coordinates with outer rectangle
   *
   *     x0     x1         x2      x3
   *  y0 +--------------------------+
   *     |///////|//////////|///////|    // <--- "Outer-rectangle"
   *     |///////|//////////|///////|
   *  y1 +-------+----------+-------+
   *     |///////| Cropzone |///////|    Cropzone is the "Inner-rectangle"
   *     |///////|  (0, 0)  |///////|    Center point (0, 0)
   *  y2 +-------+----------+-------+
   *     |///////|//////////|///////|
   *     |///////|//////////|///////|
   *  y3 +--------------------------+
   *
   * @typedef {{x: Array<number>, y: Array<number>}} cropzoneCoordinates
   * @ignore
   */

  /**
   * Fill outer rectangle
   * @param {CanvasRenderingContext2D} ctx - Context
   * @param {string|CanvasGradient|CanvasPattern} fillStyle - Fill-style
   * @private
   */
  _fillOuterRect: function _fillOuterRect(ctx, fillStyle) {
    var _getCoordinates = this._getCoordinates(),
        x = _getCoordinates.x,
        y = _getCoordinates.y;

    ctx.save();
    ctx.fillStyle = fillStyle;
    ctx.beginPath();

    // Outer rectangle
    // Numbers are +/-1 so that overlay edges don't get blurry.
    ctx.moveTo(x[0] - 1, y[0] - 1);
    ctx.lineTo(x[3] + 1, y[0] - 1);
    ctx.lineTo(x[3] + 1, y[3] + 1);
    ctx.lineTo(x[0] - 1, y[3] + 1);
    ctx.lineTo(x[0] - 1, y[0] - 1);
    ctx.closePath();

    // Inner rectangle
    ctx.moveTo(x[1], y[1]);
    ctx.lineTo(x[1], y[2]);
    ctx.lineTo(x[2], y[2]);
    ctx.lineTo(x[2], y[1]);
    ctx.lineTo(x[1], y[1]);
    ctx.closePath();

    ctx.fill();
    ctx.restore();
  },


  /**
   * Draw Inner grid line
   * @param {CanvasRenderingContext2D} ctx - Context
   * @private
   */
  _fillInnerRect: function _fillInnerRect(ctx) {
    var _getCoordinates2 = this._getCoordinates(),
        outerX = _getCoordinates2.x,
        outerY = _getCoordinates2.y;

    var x = this._caculateInnerPosition(outerX, (outerX[2] - outerX[1]) / 3);
    var y = this._caculateInnerPosition(outerY, (outerY[2] - outerY[1]) / 3);

    ctx.save();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.lineWidth = this.options.lineWidth;
    ctx.beginPath();

    ctx.moveTo(x[0], y[1]);
    ctx.lineTo(x[3], y[1]);

    ctx.moveTo(x[0], y[2]);
    ctx.lineTo(x[3], y[2]);

    ctx.moveTo(x[1], y[0]);
    ctx.lineTo(x[1], y[3]);

    ctx.moveTo(x[2], y[0]);
    ctx.lineTo(x[2], y[3]);
    ctx.stroke();
    ctx.closePath();

    ctx.restore();
  },


  /**
   * Calculate Inner Position
   * @param {Array} outer - outer position
   * @param {number} size - interval for calculate
   * @returns {Array} - inner position
   * @private
   */
  _caculateInnerPosition: function _caculateInnerPosition(outer, size) {
    var position = [];
    position[0] = outer[1];
    position[1] = outer[1] + size;
    position[2] = outer[1] + size * 2;
    position[3] = outer[2];

    return position;
  },


  /**
   * Get coordinates
   * @returns {cropzoneCoordinates} - {@link cropzoneCoordinates}
   * @private
   */
  _getCoordinates: function _getCoordinates() {
    var canvas = this.canvas,
        width = this.width,
        height = this.height,
        left = this.left,
        top = this.top;

    var halfWidth = width / 2;
    var halfHeight = height / 2;
    var canvasHeight = canvas.getHeight(); // fabric object
    var canvasWidth = canvas.getWidth(); // fabric object

    return {
      x: _tuiCodeSnippet2.default.map([-(halfWidth + left), // x0
      -halfWidth, // x1
      halfWidth, // x2
      halfWidth + (canvasWidth - left - width)], Math.ceil),
      y: _tuiCodeSnippet2.default.map([-(halfHeight + top), // y0
      -halfHeight, // y1
      halfHeight, // y2
      halfHeight + (canvasHeight - top - height)], Math.ceil)
    };
  },


  /**
   * Stroke border
   * @param {CanvasRenderingContext2D} ctx - Context
   * @param {string|CanvasGradient|CanvasPattern} strokeStyle - Stroke-style
   * @param {number} lineDashWidth - Dash width
   * @param {number} [lineDashOffset] - Dash offset
   * @param {number} [lineWidth] - line width
   * @private
   */
  _strokeBorder: function _strokeBorder(ctx, strokeStyle, _ref) {
    var lineDashWidth = _ref.lineDashWidth,
        lineDashOffset = _ref.lineDashOffset,
        lineWidth = _ref.lineWidth;

    var halfWidth = this.width / 2;
    var halfHeight = this.height / 2;

    ctx.save();
    ctx.strokeStyle = strokeStyle;

    if (ctx.setLineDash) {
      ctx.setLineDash([lineDashWidth, lineDashWidth]);
    }
    if (lineDashOffset) {
      ctx.lineDashOffset = lineDashOffset;
    }
    if (lineWidth) {
      ctx.lineWidth = lineWidth;
    }

    ctx.beginPath();
    ctx.moveTo(-halfWidth, -halfHeight);
    ctx.lineTo(halfWidth, -halfHeight);
    ctx.lineTo(halfWidth, halfHeight);
    ctx.lineTo(-halfWidth, halfHeight);
    ctx.lineTo(-halfWidth, -halfHeight);
    ctx.stroke();

    ctx.restore();
  },


  /**
   * onMoving event listener
   * @private
   */
  _onMoving: function _onMoving() {
    var height = this.height,
        width = this.width,
        left = this.left,
        top = this.top;

    var maxLeft = this.canvas.getWidth() - width;
    var maxTop = this.canvas.getHeight() - height;

    this.left = (0, _util.clamp)(left, 0, maxLeft);
    this.top = (0, _util.clamp)(top, 0, maxTop);

    this.canvasEventTrigger[_consts.eventNames.OBJECT_MOVED](this);
  },


  /**
   * onScaling event listener
   * @param {{e: MouseEvent}} fEvent - Fabric event
   * @private
   */
  _onScaling: function _onScaling(fEvent) {
    var selectedCorner = fEvent.transform.corner;
    var pointer = this.canvas.getPointer(fEvent.e);
    var settings = this._calcScalingSizeFromPointer(pointer, selectedCorner);

    // On scaling cropzone,
    // change real width and height and fix scaleFactor to 1
    this.scale(1).set(settings);

    this.canvasEventTrigger[_consts.eventNames.OBJECT_SCALED](this);
  },


  /**
   * Calc scaled size from mouse pointer with selected corner
   * @param {{x: number, y: number}} pointer - Mouse position
   * @param {string} selectedCorner - selected corner type
   * @returns {Object} Having left or(and) top or(and) width or(and) height.
   * @private
   */
  _calcScalingSizeFromPointer: function _calcScalingSizeFromPointer(pointer, selectedCorner) {
    var isCornerTypeValid = cornerTypeValid(selectedCorner);

    return isCornerTypeValid && this._resizeCropZone(pointer, selectedCorner);
  },


  /**
   * Align with cropzone ratio
   * @param {number} width - cropzone width
   * @param {number} height - cropzone height
   * @param {number} maxWidth - limit max width
   * @param {number} maxHeight - limit max height
   * @param {number} scaleTo - cropzone ratio
   * @returns {{width: number, height: number}}
   * @private
   */
  adjustRatioCropzoneSize: function adjustRatioCropzoneSize(_ref2) {
    var width = _ref2.width,
        height = _ref2.height,
        leftMaker = _ref2.leftMaker,
        topMaker = _ref2.topMaker,
        maxWidth = _ref2.maxWidth,
        maxHeight = _ref2.maxHeight,
        scaleTo = _ref2.scaleTo;

    width = maxWidth ? (0, _util.clamp)(width, 1, maxWidth) : width;
    height = maxHeight ? (0, _util.clamp)(height, 1, maxHeight) : height;

    if (!this.presetRatio) {
      if (this._withShiftKey) {
        // make fixed ratio cropzone
        if (width > height) {
          height = width;
        } else if (height > width) {
          width = height;
        }
      }

      return {
        width: width,
        height: height,
        left: leftMaker(width),
        top: topMaker(height)
      };
    }

    if (scaleTo === 'width') {
      height = width / this.presetRatio;
    } else {
      width = height * this.presetRatio;
    }

    var maxScaleFactor = Math.min(maxWidth / width, maxHeight / height);
    if (maxScaleFactor <= 1) {
      var _map = [width, height].map(function (v) {
        return v * maxScaleFactor;
      });

      width = _map[0];
      height = _map[1];
    }

    return {
      width: width,
      height: height,
      left: leftMaker(width),
      top: topMaker(height)
    };
  },


  /**
   * Get dimension last state cropzone
   * @returns {{rectTop: number, rectLeft: number, rectWidth: number, rectHeight: number}}
   * @private
   */
  _getCropzoneRectInfo: function _getCropzoneRectInfo() {
    var _canvas = this.canvas,
        canvasWidth = _canvas.width,
        canvasHeight = _canvas.height;

    var _getBoundingRect = this.getBoundingRect(false, true),
        rectTop = _getBoundingRect.top,
        rectLeft = _getBoundingRect.left,
        rectWidth = _getBoundingRect.width,
        rectHeight = _getBoundingRect.height;

    return {
      rectTop: rectTop,
      rectLeft: rectLeft,
      rectWidth: rectWidth,
      rectHeight: rectHeight,
      rectRight: rectLeft + rectWidth,
      rectBottom: rectTop + rectHeight,
      canvasWidth: canvasWidth,
      canvasHeight: canvasHeight
    };
  },


  /**
   * Calc scaling dimension
   * @param {Object} position - Mouse position
   * @param {string} corner - corner type
   * @returns {{left: number, top: number, width: number, height: number}}
   * @private
   */
  _resizeCropZone: function _resizeCropZone(_ref3, corner) {
    var x = _ref3.x,
        y = _ref3.y;

    var _getCropzoneRectInfo2 = this._getCropzoneRectInfo(),
        rectWidth = _getCropzoneRectInfo2.rectWidth,
        rectHeight = _getCropzoneRectInfo2.rectHeight,
        rectTop = _getCropzoneRectInfo2.rectTop,
        rectLeft = _getCropzoneRectInfo2.rectLeft,
        rectBottom = _getCropzoneRectInfo2.rectBottom,
        rectRight = _getCropzoneRectInfo2.rectRight,
        canvasWidth = _getCropzoneRectInfo2.canvasWidth,
        canvasHeight = _getCropzoneRectInfo2.canvasHeight;

    var resizeInfoMap = {
      tl: {
        width: rectRight - x,
        height: rectBottom - y,
        leftMaker: function leftMaker(newWidth) {
          return rectRight - newWidth;
        },
        topMaker: function topMaker(newHeight) {
          return rectBottom - newHeight;
        },
        maxWidth: rectRight,
        maxHeight: rectBottom,
        scaleTo: getScaleBasis(rectLeft - x, rectTop - y)
      },
      tr: {
        width: x - rectLeft,
        height: rectBottom - y,
        leftMaker: function leftMaker() {
          return rectLeft;
        },
        topMaker: function topMaker(newHeight) {
          return rectBottom - newHeight;
        },
        maxWidth: canvasWidth - rectLeft,
        maxHeight: rectBottom,
        scaleTo: getScaleBasis(x - rectRight, rectTop - y)
      },
      mt: {
        width: rectWidth,
        height: rectBottom - y,
        leftMaker: function leftMaker() {
          return rectLeft;
        },
        topMaker: function topMaker(newHeight) {
          return rectBottom - newHeight;
        },
        maxWidth: canvasWidth - rectLeft,
        maxHeight: rectBottom,
        scaleTo: 'height'
      },
      ml: {
        width: rectRight - x,
        height: rectHeight,
        leftMaker: function leftMaker(newWidth) {
          return rectRight - newWidth;
        },
        topMaker: function topMaker() {
          return rectTop;
        },
        maxWidth: rectRight,
        maxHeight: canvasHeight - rectTop,
        scaleTo: 'width'
      },
      mr: {
        width: x - rectLeft,
        height: rectHeight,
        leftMaker: function leftMaker() {
          return rectLeft;
        },
        topMaker: function topMaker() {
          return rectTop;
        },
        maxWidth: canvasWidth - rectLeft,
        maxHeight: canvasHeight - rectTop,
        scaleTo: 'width'
      },
      mb: {
        width: rectWidth,
        height: y - rectTop,
        leftMaker: function leftMaker() {
          return rectLeft;
        },
        topMaker: function topMaker() {
          return rectTop;
        },
        maxWidth: canvasWidth - rectLeft,
        maxHeight: canvasHeight - rectTop,
        scaleTo: 'height'
      },
      bl: {
        width: rectRight - x,
        height: y - rectTop,
        leftMaker: function leftMaker(newWidth) {
          return rectRight - newWidth;
        },
        topMaker: function topMaker() {
          return rectTop;
        },
        maxWidth: rectRight,
        maxHeight: canvasHeight - rectTop,
        scaleTo: getScaleBasis(rectLeft - x, y - rectBottom)
      },
      br: {
        width: x - rectLeft,
        height: y - rectTop,
        leftMaker: function leftMaker() {
          return rectLeft;
        },
        topMaker: function topMaker() {
          return rectTop;
        },
        maxWidth: canvasWidth - rectLeft,
        maxHeight: canvasHeight - rectTop,
        scaleTo: getScaleBasis(x - rectRight, y - rectBottom)
      }
    };

    return this.adjustRatioCropzoneSize(resizeInfoMap[corner]);
  },


  /**
   * Return the whether this cropzone is valid
   * @returns {boolean}
   */
  isValid: function isValid() {
    return this.left >= 0 && this.top >= 0 && this.width > 0 && this.height > 0;
  },


  /**
   * Keydown event handler
   * @param {{number}} keyCode - Event keyCode
   * @private
   */
  _onKeyDown: function _onKeyDown(_ref4) {
    var keyCode = _ref4.keyCode;

    if (keyCode === _consts.keyCodes.SHIFT) {
      this._withShiftKey = true;
    }
  },


  /**
   * Keyup event handler
   * @param {{number}} keyCode - Event keyCode
   * @private
   */
  _onKeyUp: function _onKeyUp(_ref5) {
    var keyCode = _ref5.keyCode;

    if (keyCode === _consts.keyCodes.SHIFT) {
      this._withShiftKey = false;
    }
  }
});

exports.default = Cropzone;

/***/ }),

/***/ "./src/js/extension/emboss.js":
/*!************************************!*\
  !*** ./src/js/extension/emboss.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fabric = __webpack_require__(/*! fabric */ "fabric");

var _fabric2 = _interopRequireDefault(_fabric);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Emboss object
 * @class Emboss
 * @extends {fabric.Image.filters.Convolute}
 * @ignore
 */
var Emboss = _fabric2.default.util.createClass(_fabric2.default.Image.filters.Convolute,
/** @lends Convolute.prototype */{
  /**
   * Filter type
   * @param {String} type
   * @default
   */
  type: 'Emboss',

  /**
   * constructor
   * @override
   */
  initialize: function initialize() {
    this.matrix = [1, 1, 1, 1, 0.7, -1, -1, -1, -1];
  }
}); /**
     * @author NHN. FE Development Team <dl_javascript@nhn.com>
     * @fileoverview Emboss extending fabric.Image.filters.Convolute
     */
exports.default = Emboss;

/***/ }),

/***/ "./src/js/extension/mask.js":
/*!**********************************!*\
  !*** ./src/js/extension/mask.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fabric = __webpack_require__(/*! fabric */ "fabric");

var _fabric2 = _interopRequireDefault(_fabric);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Mask object
 * @class Mask
 * @extends {fabric.Image.filters.BlendImage}
 * @ignore
 */
var Mask = _fabric2.default.util.createClass(_fabric2.default.Image.filters.BlendImage,
/** @lends Mask.prototype */{
  /**
   * Apply filter to canvas element
   * @param {Object} pipelineState - Canvas element to apply filter
   * @override
   */
  applyTo: function applyTo(pipelineState) {
    if (!this.mask) {
      return;
    }

    var canvas = pipelineState.canvasEl;
    var width = canvas.width,
        height = canvas.height;

    var maskCanvasEl = this._createCanvasOfMask(width, height);
    var ctx = canvas.getContext('2d');
    var maskCtx = maskCanvasEl.getContext('2d');
    var imageData = ctx.getImageData(0, 0, width, height);

    this._drawMask(maskCtx, canvas, ctx);
    this._mapData(maskCtx, imageData, width, height);

    pipelineState.imageData = imageData;
  },


  /**
   * Create canvas of mask image
   * @param {number} width - Width of main canvas
   * @param {number} height - Height of main canvas
   * @returns {HTMLElement} Canvas element
   * @private
   */
  _createCanvasOfMask: function _createCanvasOfMask(width, height) {
    var maskCanvasEl = _fabric2.default.util.createCanvasElement();

    maskCanvasEl.width = width;
    maskCanvasEl.height = height;

    return maskCanvasEl;
  },


  /**
   * Draw mask image on canvas element
   * @param {Object} maskCtx - Context of mask canvas
   * @private
   */
  _drawMask: function _drawMask(maskCtx) {
    var mask = this.mask;

    var maskImg = mask.getElement();
    var angle = mask.angle,
        left = mask.left,
        scaleX = mask.scaleX,
        scaleY = mask.scaleY,
        top = mask.top;


    maskCtx.save();
    maskCtx.translate(left, top);
    maskCtx.rotate(angle * Math.PI / 180);
    maskCtx.scale(scaleX, scaleY);
    maskCtx.drawImage(maskImg, -maskImg.width / 2, -maskImg.height / 2);
    maskCtx.restore();
  },


  /**
   * Map mask image data to source image data
   * @param {Object} maskCtx - Context of mask canvas
   * @param {Object} imageData - Data of source image
   * @param {number} width - Width of main canvas
   * @param {number} height - Height of main canvas
   * @private
   */
  _mapData: function _mapData(maskCtx, imageData, width, height) {
    var data = imageData.data,
        imgHeight = imageData.height,
        imgWidth = imageData.width;

    var sourceData = data;
    var len = imgWidth * imgHeight * 4;
    var maskData = maskCtx.getImageData(0, 0, width, height).data;

    for (var i = 0; i < len; i += 4) {
      sourceData[i + 3] = maskData[i]; // adjust value of alpha data
    }
  }
}); /**
     * @author NHN. FE Development Team <dl_javascript@nhn.com>
     * @fileoverview Mask extending fabric.Image.filters.Mask
     */
exports.default = Mask;

/***/ }),

/***/ "./src/js/extension/sharpen.js":
/*!*************************************!*\
  !*** ./src/js/extension/sharpen.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fabric = __webpack_require__(/*! fabric */ "fabric");

var _fabric2 = _interopRequireDefault(_fabric);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sharpen object
 * @class Sharpen
 * @extends {fabric.Image.filters.Convolute}
 * @ignore
 */
var Sharpen = _fabric2.default.util.createClass(_fabric2.default.Image.filters.Convolute,
/** @lends Convolute.prototype */{
  /**
   * Filter type
   * @param {String} type
   * @default
   */
  type: 'Sharpen',

  /**
   * constructor
   * @override
   */
  initialize: function initialize() {
    this.matrix = [0, -1, 0, -1, 5, -1, 0, -1, 0];
  }
}); /**
     * @author NHN. FE Development Team <dl_javascript@nhn.com>
     * @fileoverview Sharpen extending fabric.Image.filters.Convolute
     */
exports.default = Sharpen;

/***/ }),

/***/ "./src/js/factory/command.js":
/*!***********************************!*\
  !*** ./src/js/factory/command.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _command = __webpack_require__(/*! @/interface/command */ "./src/js/interface/command.js");

var _command2 = _interopRequireDefault(_command);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var commands = {};

/**
 * Create a command
 * @param {string} name - Command name
 * @param {...*} args - Arguments for creating command
 * @returns {Command}
 * @ignore
 */
/**
 * @author NHN. FE Development Team <dl_javascript@nhn.com>
 * @fileoverview Command factory
 */
function create(name) {
  var actions = commands[name];
  if (actions) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return new _command2.default(actions, args);
  }

  return null;
}

/**
 * Register a command with name as a key
 * @param {Object} command - {name:{string}, execute: {function}, undo: {function}}
 * @param {string} command.name - command name
 * @param {function} command.execute - executable function
 * @param {function} command.undo - undo function
 * @ignore
 */
function register(command) {
  commands[command.name] = command;
}

exports.default = {
  create: create,
  register: register
};

/***/ }),

/***/ "./src/js/factory/errorMessage.js":
/*!****************************************!*\
  !*** ./src/js/factory/errorMessage.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tuiCodeSnippet = __webpack_require__(/*! tui-code-snippet */ "tui-code-snippet");

var _tuiCodeSnippet2 = _interopRequireDefault(_tuiCodeSnippet);

var _util = __webpack_require__(/*! @/util */ "./src/js/util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author NHN. FE Development Team <dl_javascript@nhn.com>
 * @fileoverview Error-message factory
 */
var types = (0, _util.keyMirror)('UN_IMPLEMENTATION', 'NO_COMPONENT_NAME');
var messages = {
  UN_IMPLEMENTATION: 'Should implement a method: ',
  NO_COMPONENT_NAME: 'Should set a component name'
};
var map = {
  UN_IMPLEMENTATION: function UN_IMPLEMENTATION(methodName) {
    return messages.UN_IMPLEMENTATION + methodName;
  },
  NO_COMPONENT_NAME: function NO_COMPONENT_NAME() {
    return messages.NO_COMPONENT_NAME;
  }
};

exports.default = {
  types: _tuiCodeSnippet2.default.extend({}, types),

  create: function create(type) {
    type = type.toLowerCase();
    var func = map[type];

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return func.apply(undefined, args);
  }
};

/***/ }),

/***/ "./src/js/graphics.js":
/*!****************************!*\
  !*** ./src/js/graphics.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author NHN. FE Development Team <dl_javascript@nhn.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @fileoverview Graphics module
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _tuiCodeSnippet = __webpack_require__(/*! tui-code-snippet */ "tui-code-snippet");

var _tuiCodeSnippet2 = _interopRequireDefault(_tuiCodeSnippet);

var _fabric = __webpack_require__(/*! fabric */ "fabric");

var _fabric2 = _interopRequireDefault(_fabric);

var _imageLoader = __webpack_require__(/*! @/component/imageLoader */ "./src/js/component/imageLoader.js");

var _imageLoader2 = _interopRequireDefault(_imageLoader);

var _cropper = __webpack_require__(/*! @/component/cropper */ "./src/js/component/cropper.js");

var _cropper2 = _interopRequireDefault(_cropper);

var _flip = __webpack_require__(/*! @/component/flip */ "./src/js/component/flip.js");

var _flip2 = _interopRequireDefault(_flip);

var _rotation = __webpack_require__(/*! @/component/rotation */ "./src/js/component/rotation.js");

var _rotation2 = _interopRequireDefault(_rotation);

var _freeDrawing = __webpack_require__(/*! @/component/freeDrawing */ "./src/js/component/freeDrawing.js");

var _freeDrawing2 = _interopRequireDefault(_freeDrawing);

var _line = __webpack_require__(/*! @/component/line */ "./src/js/component/line.js");

var _line2 = _interopRequireDefault(_line);

var _text = __webpack_require__(/*! @/component/text */ "./src/js/component/text.js");

var _text2 = _interopRequireDefault(_text);

var _icon = __webpack_require__(/*! @/component/icon */ "./src/js/component/icon.js");

var _icon2 = _interopRequireDefault(_icon);

var _filter = __webpack_require__(/*! @/component/filter */ "./src/js/component/filter.js");

var _filter2 = _interopRequireDefault(_filter);

var _shape = __webpack_require__(/*! @/component/shape */ "./src/js/component/shape.js");

var _shape2 = _interopRequireDefault(_shape);

var _zoom = __webpack_require__(/*! @/component/zoom */ "./src/js/component/zoom.js");

var _zoom2 = _interopRequireDefault(_zoom);

var _cropper3 = __webpack_require__(/*! @/drawingMode/cropper */ "./src/js/drawingMode/cropper.js");

var _cropper4 = _interopRequireDefault(_cropper3);

var _freeDrawing3 = __webpack_require__(/*! @/drawingMode/freeDrawing */ "./src/js/drawingMode/freeDrawing.js");

var _freeDrawing4 = _interopRequireDefault(_freeDrawing3);

var _lineDrawing = __webpack_require__(/*! @/drawingMode/lineDrawing */ "./src/js/drawingMode/lineDrawing.js");

var _lineDrawing2 = _interopRequireDefault(_lineDrawing);

var _shape3 = __webpack_require__(/*! @/drawingMode/shape */ "./src/js/drawingMode/shape.js");

var _shape4 = _interopRequireDefault(_shape3);

var _text3 = __webpack_require__(/*! @/drawingMode/text */ "./src/js/drawingMode/text.js");

var _text4 = _interopRequireDefault(_text3);

var _icon3 = __webpack_require__(/*! @/drawingMode/icon */ "./src/js/drawingMode/icon.js");

var _icon4 = _interopRequireDefault(_icon3);

var _zoom3 = __webpack_require__(/*! @/drawingMode/zoom */ "./src/js/drawingMode/zoom.js");

var _zoom4 = _interopRequireDefault(_zoom3);

var _selectionModifyHelper = __webpack_require__(/*! @/helper/selectionModifyHelper */ "./src/js/helper/selectionModifyHelper.js");

var _util = __webpack_require__(/*! @/util */ "./src/js/util.js");

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

var _resize = __webpack_require__(/*! @/component/resize */ "./src/js/component/resize.js");

var _resize2 = _interopRequireDefault(_resize);

var _resize3 = __webpack_require__(/*! @/drawingMode/resize */ "./src/js/drawingMode/resize.js");

var _resize4 = _interopRequireDefault(_resize3);

var _jsonLoader = __webpack_require__(/*! @/component/jsonLoader */ "./src/js/component/jsonLoader.js");

var _jsonLoader2 = _interopRequireDefault(_jsonLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var extend = _tuiCodeSnippet2.default.extend,
    stamp = _tuiCodeSnippet2.default.stamp,
    isArray = _tuiCodeSnippet2.default.isArray,
    isString = _tuiCodeSnippet2.default.isString,
    forEachArray = _tuiCodeSnippet2.default.forEachArray,
    forEachOwnProperties = _tuiCodeSnippet2.default.forEachOwnProperties,
    CustomEvents = _tuiCodeSnippet2.default.CustomEvents;

var DEFAULT_CSS_MAX_WIDTH = 1000;
var DEFAULT_CSS_MAX_HEIGHT = 800;
var EXTRA_PX_FOR_PASTE = 10;

var cssOnly = {
  cssOnly: true
};
var backstoreOnly = {
  backstoreOnly: true
};

/**
 * Graphics class
 * @class
 * @param {string|HTMLElement} wrapper - Wrapper's element or selector
 * @param {Object} [option] - Canvas max width & height of css
 *  @param {number} option.cssMaxWidth - Canvas css-max-width
 *  @param {number} option.cssMaxHeight - Canvas css-max-height
 *  @param {String} option.backgroundColor - Canvas background color hex code
 * @ignore
 */

var Graphics = function () {
  function Graphics(element) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        cssMaxWidth = _ref.cssMaxWidth,
        cssMaxHeight = _ref.cssMaxHeight,
        preserveObjectStacking = _ref.preserveObjectStacking,
        backgroundColor = _ref.backgroundColor;

    _classCallCheck(this, Graphics);

    /**
     * Fabric image instance
     * @type {fabric.Image}
     */
    this.canvasImage = null;

    /**
     * Max width of canvas elements
     * @type {number}
     */
    this.cssMaxWidth = cssMaxWidth || DEFAULT_CSS_MAX_WIDTH;

    /**
     * Max height of canvas elements
     * @type {number}
     */
    this.cssMaxHeight = cssMaxHeight || DEFAULT_CSS_MAX_HEIGHT;

    /**
     * cropper Selection Style
     * @type {Object}
     */
    this.cropSelectionStyle = {};

    /**
     * target fabric object for copy paste feature
     * @type {fabric.Object}
     * @private
     */
    this.targetObjectForCopyPaste = null;

    /**
     * Image name
     * @type {string}
     */
    this.imageName = '';

    /**
     * Object Map
     * @type {Object}
     * @private
     */
    this._objects = {};

    /**
     * Fabric-Canvas instance
     * @type {fabric.Canvas}
     * @private
     */
    this._canvas = null;

    /**
     * Drawing mode
     * @type {string}
     * @private
     */
    this._drawingMode = _consts.drawingModes.NORMAL;

    /**
     * DrawingMode map
     * @type {Object.<string, DrawingMode>}
     * @private
     */
    this._drawingModeMap = {};

    /**
     * Component map
     * @type {Object.<string, Component>}
     * @private
     */
    this._componentMap = {};

    /**
     * fabric event handlers
     * @type {Object.<string, function>}
     * @private
     */
    this._handler = {
      onMouseDown: this._onMouseDown.bind(this),
      onMouseUp: this._onMouseUp.bind(this),
      onMouseMove: this._onMouseMove.bind(this),
      onMouseWheel: this._onMouseWheel.bind(this),
      onObjectAdded: this._onObjectAdded.bind(this),
      onObjectRemoved: this._onObjectRemoved.bind(this),
      onObjectMoved: this._onObjectMoved.bind(this),
      onObjectScaled: this._onObjectScaled.bind(this),
      onObjectModified: this._onObjectModified.bind(this),
      onObjectRotated: this._onObjectRotated.bind(this),
      onObjectSelected: this._onObjectSelected.bind(this),
      onPathCreated: this._onPathCreated.bind(this),
      onSelectionCleared: this._onSelectionCleared.bind(this),
      onSelectionCreated: this._onSelectionCreated.bind(this)
    };

    this._setObjectCachingToFalse();
    this._setCanvasElement(element, preserveObjectStacking, backgroundColor);
    this._createDrawingModeInstances();
    this._createComponents();
    this._attachCanvasEvents();
    this._attachZoomEvents();
  }

  /**
   * Destroy canvas element
   */


  _createClass(Graphics, [{
    key: 'destroy',
    value: function destroy() {
      var wrapperEl = this._canvas.wrapperEl;


      this._canvas.clear();

      wrapperEl.parentNode.removeChild(wrapperEl);

      this._detachZoomEvents();
    }

    /**
     * Attach zoom events
     */

  }, {
    key: '_attachZoomEvents',
    value: function _attachZoomEvents() {
      var zoom = this.getComponent(_consts.componentNames.ZOOM);

      zoom.attachKeyboardZoomEvents();
    }

    /**
     * Detach zoom events
     */

  }, {
    key: '_detachZoomEvents',
    value: function _detachZoomEvents() {
      var zoom = this.getComponent(_consts.componentNames.ZOOM);

      zoom.detachKeyboardZoomEvents();
    }

    /**
     * Deactivates all objects on canvas
     * @returns {Graphics} this
     */

  }, {
    key: 'deactivateAll',
    value: function deactivateAll() {
      this._canvas.discardActiveObject();

      return this;
    }

    /**
     * Renders all objects on canvas
     * @returns {Graphics} this
     */

  }, {
    key: 'renderAll',
    value: function renderAll() {
      this._canvas.renderAll();

      return this;
    }

    /**
     * Adds objects on canvas
     * @param {Object|Array} objects - objects
     */

  }, {
    key: 'add',
    value: function add(objects) {
      var _canvas;

      var theArgs = [];
      if (isArray(objects)) {
        theArgs = objects;
      } else {
        theArgs.push(objects);
      }

      (_canvas = this._canvas).add.apply(_canvas, theArgs);
    }

    /**
     * Removes the object or group
     * @param {Object} target - graphics object or group
     * @returns {boolean} true if contains or false
     */

  }, {
    key: 'contains',
    value: function contains(target) {
      return this._canvas.contains(target);
    }

    /**
     * Gets all objects or group
     * @returns {Array} all objects, shallow copy
     */

  }, {
    key: 'getObjects',
    value: function getObjects() {
      return this._canvas.getObjects().slice();
    }

    /**
     * Get an object by id
     * @param {number} objId -  object id
     * @returns {fabric.Object} object corresponding id
     */

  }, {
    key: 'getObject',
    value: function getObject(objId) {
      return this._objects[objId];
    }

    /**
     * Removes the object or group
     * @param {Object} target - graphics object or group
     */

  }, {
    key: 'remove',
    value: function remove(target) {
      this._canvas.remove(target);
    }

    /**
     * Removes all object or group
     * @param {boolean} includesBackground - remove the background image or not
     * @returns {Array} all objects array which is removed
     */

  }, {
    key: 'removeAll',
    value: function removeAll(includesBackground) {
      var canvas = this._canvas;
      var objects = canvas.getObjects().slice();
      canvas.remove.apply(canvas, this._canvas.getObjects());

      if (includesBackground) {
        canvas.clear();
      }

      return objects;
    }

    /**
     * Removes an object or group by id
     * @param {number} objId -  object id
     * @returns {Array} removed objects
     */

  }, {
    key: 'removeObjectById',
    value: function removeObjectById(objId) {
      var objects = [];
      var canvas = this._canvas;
      var target = this.getObject(objId);
      var isValidGroup = target && target.isType('group') && !target.isEmpty();

      if (isValidGroup) {
        canvas.discardActiveObject(); // restore states for each objects
        target.forEachObject(function (obj) {
          objects.push(obj);
          canvas.remove(obj);
        });
      } else if (canvas.contains(target)) {
        objects.push(target);
        canvas.remove(target);
      }

      return objects;
    }

    /**
     * Get an id by object instance
     * @param {fabric.Object} object object
     * @returns {number} object id if it exists or null
     */

  }, {
    key: 'getObjectId',
    value: function getObjectId(object) {
      var key = null;
      for (key in this._objects) {
        if (this._objects.hasOwnProperty(key)) {
          if (object === this._objects[key]) {
            return key;
          }
        }
      }

      return null;
    }

    /**
     * Gets an active object or group
     * @returns {Object} active object or group instance
     */

  }, {
    key: 'getActiveObject',
    value: function getActiveObject() {
      return this._canvas._activeObject;
    }

    /**
     * Returns the object ID to delete the object.
     * @returns {number} object id for remove
     */

  }, {
    key: 'getActiveObjectIdForRemove',
    value: function getActiveObjectIdForRemove() {
      var activeObject = this.getActiveObject();
      var type = activeObject.type,
          left = activeObject.left,
          top = activeObject.top;

      var isSelection = type === 'activeSelection';

      if (isSelection) {
        var group = new _fabric2.default.Group([].concat(activeObject.getObjects()), {
          left: left,
          top: top
        });

        return this._addFabricObject(group);
      }

      return this.getObjectId(activeObject);
    }

    /**
     * Verify that you are ready to erase the object.
     * @returns {boolean} ready for object remove
     */

  }, {
    key: 'isReadyRemoveObject',
    value: function isReadyRemoveObject() {
      var activeObject = this.getActiveObject();

      return activeObject && !activeObject.isEditing;
    }

    /**
     * Gets an active group object
     * @returns {Object} active group object instance
     */

  }, {
    key: 'getActiveObjects',
    value: function getActiveObjects() {
      var activeObject = this._canvas._activeObject;

      return activeObject && activeObject.type === 'activeSelection' ? activeObject : null;
    }

    /**
     * Get Active object Selection from object ids
     * @param {Array.<Object>} objects - fabric objects
     * @returns {Object} target - target object group
     */

  }, {
    key: 'getActiveSelectionFromObjects',
    value: function getActiveSelectionFromObjects(objects) {
      var canvas = this.getCanvas();

      return new _fabric2.default.ActiveSelection(objects, { canvas: canvas });
    }

    /**
     * Activates an object or group
     * @param {Object} target - target object or group
     */

  }, {
    key: 'setActiveObject',
    value: function setActiveObject(target) {
      this._canvas.setActiveObject(target);
    }

    /**
     * Set Crop selection style
     * @param {Object} style - Selection styles
     */

  }, {
    key: 'setCropSelectionStyle',
    value: function setCropSelectionStyle(style) {
      this.cropSelectionStyle = style;
    }

    /**
     * Get component
     * @param {string} name - Component name
     * @returns {Component}
     */

  }, {
    key: 'getComponent',
    value: function getComponent(name) {
      return this._componentMap[name];
    }

    /**
     * Get current drawing mode
     * @returns {string}
     */

  }, {
    key: 'getDrawingMode',
    value: function getDrawingMode() {
      return this._drawingMode;
    }

    /**
     * Start a drawing mode. If the current mode is not 'NORMAL', 'stopDrawingMode()' will be called first.
     * @param {String} mode Can be one of <I>'CROPPER', 'FREE_DRAWING', 'LINE', 'TEXT', 'SHAPE'</I>
     * @param {Object} [option] parameters of drawing mode, it's available with 'FREE_DRAWING', 'LINE_DRAWING'
     *  @param {Number} [option.width] brush width
     *  @param {String} [option.color] brush color
     * @returns {boolean} true if success or false
     */

  }, {
    key: 'startDrawingMode',
    value: function startDrawingMode(mode, option) {
      if (this._isSameDrawingMode(mode)) {
        return true;
      }

      // If the current mode is not 'NORMAL', 'stopDrawingMode()' will be called first.
      this.stopDrawingMode();

      var drawingModeInstance = this._getDrawingModeInstance(mode);
      if (drawingModeInstance && drawingModeInstance.start) {
        drawingModeInstance.start(this, option);

        this._drawingMode = mode;
      }

      return !!drawingModeInstance;
    }

    /**
     * Stop the current drawing mode and back to the 'NORMAL' mode
     */

  }, {
    key: 'stopDrawingMode',
    value: function stopDrawingMode() {
      if (this._isSameDrawingMode(_consts.drawingModes.NORMAL)) {
        return;
      }

      var drawingModeInstance = this._getDrawingModeInstance(this.getDrawingMode());
      if (drawingModeInstance && drawingModeInstance.end) {
        drawingModeInstance.end(this);
      }
      this._drawingMode = _consts.drawingModes.NORMAL;
    }
  }, {
    key: 'canvasZoom',
    value: function canvasZoom(_ref2, zoomLevel) {
      var x = _ref2.x,
          y = _ref2.y;

      var canvas = this.getCanvas();
      canvas.zoomToPoint({ x: x, y: y }, zoomLevel);
    }
  }, {
    key: 'getCanvasZoom',
    value: function getCanvasZoom() {
      return this.getCanvas().getZoom();
    }

    /**
     * Change zoom of canvas
     * @param {{x: number, y: number}} center - center of zoom
     * @param {number} zoomLevel - zoom level
     */

  }, {
    key: 'zoom',
    value: function zoom(_ref3, zoomLevel) {
      var x = _ref3.x,
          y = _ref3.y;

      var zoom = this.getComponent(_consts.componentNames.ZOOM);

      zoom.zoom({ x: x, y: y }, zoomLevel);
    }

    /**
     * Get zoom mode
     * @returns {string}
     */

  }, {
    key: 'getZoomMode',
    value: function getZoomMode() {
      var zoom = this.getComponent(_consts.componentNames.ZOOM);

      return zoom.mode;
    }

    /**
     * Start zoom-in mode
     */

  }, {
    key: 'startZoomInMode',
    value: function startZoomInMode() {
      var zoom = this.getComponent(_consts.componentNames.ZOOM);

      zoom.startZoomInMode();
    }

    /**
     * Stop zoom-in mode
     */

  }, {
    key: 'endZoomInMode',
    value: function endZoomInMode() {
      var zoom = this.getComponent(_consts.componentNames.ZOOM);

      zoom.endZoomInMode();
    }

    /**
     * Zoom out one step
     */

  }, {
    key: 'zoomOut',
    value: function zoomOut() {
      var zoom = this.getComponent(_consts.componentNames.ZOOM);

      zoom.zoomOut();
    }

    /**
     * Start hand mode
     */

  }, {
    key: 'startHandMode',
    value: function startHandMode() {
      var zoom = this.getComponent(_consts.componentNames.ZOOM);

      zoom.startHandMode();
    }

    /**
     * Stop hand mode
     */

  }, {
    key: 'endHandMode',
    value: function endHandMode() {
      var zoom = this.getComponent(_consts.componentNames.ZOOM);

      zoom.endHandMode();
    }

    /**
     * Zoom reset
     */

  }, {
    key: 'resetZoom',
    value: function resetZoom() {
      var zoom = this.getComponent(_consts.componentNames.ZOOM);

      zoom.resetZoom();
    }

    /**
     * To data url from canvas
     * @param {Object} options - options for toDataURL
     *   @param {String} [options.format=png] The format of the output image. Either "jpeg" or "png"
     *   @param {Number} [options.quality=1] Quality level (0..1). Only used for jpeg.
     *   @param {Number} [options.multiplier=1] Multiplier to scale by
     *   @param {Number} [options.left] Cropping left offset. Introduced in fabric v1.2.14
     *   @param {Number} [options.top] Cropping top offset. Introduced in fabric v1.2.14
     *   @param {Number} [options.width] Cropping width. Introduced in fabric v1.2.14
     *   @param {Number} [options.height] Cropping height. Introduced in fabric v1.2.14
     * @returns {string} A DOMString containing the requested data URI.
     */

  }, {
    key: 'toDataURL',
    value: function toDataURL(options) {
      var cropper = this.getComponent(_consts.componentNames.CROPPER);
      cropper.changeVisibility(false);

      var dataUrl = this._canvas && this._canvas.toDataURL(options);
      cropper.changeVisibility(true);

      return dataUrl;
    }

    /**
     * Save image(background) of canvas
     * @param {string} name - Name of image
     * @param {?fabric.Image} canvasImage - Fabric image instance
     */

  }, {
    key: 'setCanvasImage',
    value: function setCanvasImage(name, canvasImage) {
      if (canvasImage) {
        stamp(canvasImage);
      }
      this.imageName = name;
      this.canvasImage = canvasImage;
    }

    /**
     * Set css max dimension
     * @param {{width: number, height: number}} maxDimension - Max width & Max height
     */

  }, {
    key: 'setCssMaxDimension',
    value: function setCssMaxDimension(maxDimension) {
      this.cssMaxWidth = maxDimension.width || this.cssMaxWidth;
      this.cssMaxHeight = maxDimension.height || this.cssMaxHeight;
    }

    /**
     * Adjust canvas dimension with scaling image
     */

  }, {
    key: 'adjustCanvasDimension',
    value: function adjustCanvasDimension() {
      this.adjustCanvasDimensionBase(this.canvasImage.scale(1));
    }
  }, {
    key: 'adjustCanvasDimensionBase',
    value: function adjustCanvasDimensionBase() {
      var canvasImage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (!canvasImage) {
        canvasImage = this.canvasImage;
      }

      var _canvasImage$getBound = canvasImage.getBoundingRect(),
          width = _canvasImage$getBound.width,
          height = _canvasImage$getBound.height;

      var maxDimension = this._calcMaxDimension(width, height);

      this.setCanvasCssDimension({
        width: '100%',
        height: '100%', // Set height '' for IE9
        'max-width': maxDimension.width + 'px',
        'max-height': maxDimension.height + 'px'
      });

      this.setCanvasBackstoreDimension({
        width: width,
        height: height
      });
      this._canvas.centerObject(canvasImage);
    }

    /**
     * Set canvas dimension - css only
     *  {@link http://fabricjs.com/docs/fabric.Canvas.html#setDimensions}
     * @param {Object} dimension - Canvas css dimension
     */

  }, {
    key: 'setCanvasCssDimension',
    value: function setCanvasCssDimension(dimension) {
      this._canvas.setDimensions(dimension, cssOnly);
    }

    /**
     * Set canvas dimension - backstore only
     *  {@link http://fabricjs.com/docs/fabric.Canvas.html#setDimensions}
     * @param {Object} dimension - Canvas backstore dimension
     */

  }, {
    key: 'setCanvasBackstoreDimension',
    value: function setCanvasBackstoreDimension(dimension) {
      this._canvas.setDimensions(dimension, backstoreOnly);
    }

    /**
     * Set image properties
     * {@link http://fabricjs.com/docs/fabric.Image.html#set}
     * @param {Object} setting - Image properties
     * @param {boolean} [withRendering] - If true, The changed image will be reflected in the canvas
     */

  }, {
    key: 'setImageProperties',
    value: function setImageProperties(setting, withRendering) {
      var canvasImage = this.canvasImage;


      if (!canvasImage) {
        return;
      }

      canvasImage.set(setting).setCoords();
      if (withRendering) {
        this._canvas.renderAll();
      }
    }

    /**
     * Returns canvas element of fabric.Canvas[[lower-canvas]]
     * @returns {HTMLCanvasElement}
     */

  }, {
    key: 'getCanvasElement',
    value: function getCanvasElement() {
      return this._canvas.getElement();
    }

    /**
     * Get fabric.Canvas instance
     * @returns {fabric.Canvas}
     */

  }, {
    key: 'getCanvas',
    value: function getCanvas() {
      return this._canvas;
    }

    /**
     * Get canvasImage (fabric.Image instance)
     * @returns {fabric.Image}
     */

  }, {
    key: 'getCanvasImage',
    value: function getCanvasImage() {
      return this.canvasImage;
    }

    /**
     * Get image name
     * @returns {string}
     */

  }, {
    key: 'getImageName',
    value: function getImageName() {
      return this.imageName;
    }

    /**
     * Add image object on canvas
     * @param {string} imgUrl - Image url to make object
     * @returns {Promise}
     */

  }, {
    key: 'addImageObject',
    value: function addImageObject(imgUrl) {
      var _this = this;

      var callback = this._callbackAfterLoadingImageObject.bind(this);

      return new _util.Promise(function (resolve) {
        _fabric2.default.Image.fromURL(imgUrl, function (image) {
          callback(image);
          resolve(_this.createObjectProperties(image));
        }, {
          crossOrigin: 'Anonymous'
        });
      });
    }

    /**
     * Get center position of canvas
     * @returns {Object} {left, top}
     */

  }, {
    key: 'getCenter',
    value: function getCenter() {
      return this._canvas.getCenter();
    }

    /**
     * Get cropped rect
     * @returns {Object} rect
     */

  }, {
    key: 'getCropzoneRect',
    value: function getCropzoneRect() {
      return this.getComponent(_consts.componentNames.CROPPER).getCropzoneRect();
    }

    /**
     * Get cropped rect
     * @param {number} [mode] cropzone rect mode
     */

  }, {
    key: 'setCropzoneRect',
    value: function setCropzoneRect(mode) {
      this.getComponent(_consts.componentNames.CROPPER).setCropzoneRect(mode);
    }

    /**
     * Get cropped image data
     * @param {Object} cropRect cropzone rect
     *  @param {Number} cropRect.left left position
     *  @param {Number} cropRect.top top position
     *  @param {Number} cropRect.width width
     *  @param {Number} cropRect.height height
     * @returns {?{imageName: string, url: string}} cropped Image data
     */

  }, {
    key: 'getCroppedImageData',
    value: function getCroppedImageData(cropRect) {
      return this.getComponent(_consts.componentNames.CROPPER).getCroppedImageData(cropRect);
    }

    /**
     * Set brush option
     * @param {Object} option brush option
     *  @param {Number} option.width width
     *  @param {String} option.color color like 'FFFFFF', 'rgba(0, 0, 0, 0.5)'
     */

  }, {
    key: 'setBrush',
    value: function setBrush(option) {
      var drawingMode = this._drawingMode;
      var compName = _consts.componentNames.FREE_DRAWING;

      if (drawingMode === _consts.drawingModes.LINE_DRAWING) {
        compName = _consts.componentNames.LINE;
      }

      this.getComponent(compName).setBrush(option);
    }

    /**
     * Set states of current drawing shape
     * @param {string} type - Shape type (ex: 'rect', 'circle', 'triangle')
     * @param {Object} [options] - Shape options
     *      @param {(ShapeFillOption | string)} [options.fill] - {@link ShapeFillOption} or
     *        Shape foreground color (ex: '#fff', 'transparent')
     *      @param {string} [options.stoke] - Shape outline color
     *      @param {number} [options.strokeWidth] - Shape outline width
     *      @param {number} [options.width] - Width value (When type option is 'rect', this options can use)
     *      @param {number} [options.height] - Height value (When type option is 'rect', this options can use)
     *      @param {number} [options.rx] - Radius x value (When type option is 'circle', this options can use)
     *      @param {number} [options.ry] - Radius y value (When type option is 'circle', this options can use)
     *      @param {number} [options.isRegular] - Whether resizing shape has 1:1 ratio or not
     */

  }, {
    key: 'setDrawingShape',
    value: function setDrawingShape(type, options) {
      this.getComponent(_consts.componentNames.SHAPE).setStates(type, options);
    }

    /**
     * Set style of current drawing icon
     * @param {string} type - icon type (ex: 'icon-arrow', 'icon-star')
     * @param {Object} [iconColor] - Icon color
     */

  }, {
    key: 'setIconStyle',
    value: function setIconStyle(type, iconColor) {
      this.getComponent(_consts.componentNames.ICON).setStates(type, iconColor);
    }

    /**
     * Register icon paths
     * @param {Object} pathInfos - Path infos
     *  @param {string} pathInfos.key - key
     *  @param {string} pathInfos.value - value
     */

  }, {
    key: 'registerPaths',
    value: function registerPaths(pathInfos) {
      this.getComponent(_consts.componentNames.ICON).registerPaths(pathInfos);
    }

    /**
     * Change cursor style
     * @param {string} cursorType - cursor type
     */

  }, {
    key: 'changeCursor',
    value: function changeCursor(cursorType) {
      var canvas = this.getCanvas();
      canvas.defaultCursor = cursorType;
      canvas.renderAll();
    }

    /**
     * Whether it has the filter or not
     * @param {string} type - Filter type
     * @returns {boolean} true if it has the filter
     */

  }, {
    key: 'hasFilter',
    value: function hasFilter(type) {
      return this.getComponent(_consts.componentNames.FILTER).hasFilter(type);
    }

    /**
     * Set selection style of fabric object by init option
     * @param {Object} styles - Selection styles
     */

  }, {
    key: 'setSelectionStyle',
    value: function setSelectionStyle(styles) {
      extend(_consts.fObjectOptions.SELECTION_STYLE, styles);
    }

    /**
     * Set object properties
     * @param {number} objId -  object id
     * @param {Object} props - props
     *     @param {string} [props.fill] Color
     *     @param {string} [props.fontFamily] Font type for text
     *     @param {number} [props.fontSize] Size
     *     @param {string} [props.fontStyle] Type of inclination (normal / italic)
     *     @param {string} [props.fontWeight] Type of thicker or thinner looking (normal / bold)
     *     @param {string} [props.textAlign] Type of text align (left / center / right)
     *     @param {string} [props.textDecoration] Type of line (underline / line-through / overline)
     * @returns {Object} applied properties
     */

  }, {
    key: 'setObjectProperties',
    value: function setObjectProperties(objId, props) {
      var object = this.getObject(objId);
      var clone = extend({}, props);

      object.set(clone);

      object.setCoords();

      this.getCanvas().renderAll();

      return clone;
    }

    /**
     * Get object properties corresponding key
     * @param {number} objId -  object id
     * @param {Array<string>|ObjectProps|string} keys - property's key
     * @returns {Object} properties
     */

  }, {
    key: 'getObjectProperties',
    value: function getObjectProperties(objId, keys) {
      var object = this.getObject(objId);
      var props = {};

      if (isString(keys)) {
        props[keys] = object[keys];
      } else if (isArray(keys)) {
        forEachArray(keys, function (value) {
          props[value] = object[value];
        });
      } else {
        forEachOwnProperties(keys, function (value, key) {
          props[key] = object[key];
        });
      }

      return props;
    }

    /**
     * Get object position by originX, originY
     * @param {number} objId -  object id
     * @param {string} originX - can be 'left', 'center', 'right'
     * @param {string} originY - can be 'top', 'center', 'bottom'
     * @returns {Object} {{x:number, y: number}} position by origin if id is valobjId, or null
     */

  }, {
    key: 'getObjectPosition',
    value: function getObjectPosition(objId, originX, originY) {
      var targetObj = this.getObject(objId);
      if (!targetObj) {
        return null;
      }

      return targetObj.getPointByOrigin(originX, originY);
    }

    /**
     * Set object position  by originX, originY
     * @param {number} objId -  object id
     * @param {Object} posInfo - position object
     *  @param {number} posInfo.x - x position
     *  @param {number} posInfo.y - y position
     *  @param {string} posInfo.originX - can be 'left', 'center', 'right'
     *  @param {string} posInfo.originY - can be 'top', 'center', 'bottom'
     * @returns {boolean} true if target id is valid or false
     */

  }, {
    key: 'setObjectPosition',
    value: function setObjectPosition(objId, posInfo) {
      var targetObj = this.getObject(objId);
      var x = posInfo.x,
          y = posInfo.y,
          originX = posInfo.originX,
          originY = posInfo.originY;

      if (!targetObj) {
        return false;
      }

      var targetOrigin = targetObj.getPointByOrigin(originX, originY);
      var centerOrigin = targetObj.getPointByOrigin('center', 'center');
      var diffX = centerOrigin.x - targetOrigin.x;
      var diffY = centerOrigin.y - targetOrigin.y;

      targetObj.set({
        left: x + diffX,
        top: y + diffY
      });

      targetObj.setCoords();

      return true;
    }

    /**
     * Get the canvas size
     * @returns {Object} {{width: number, height: number}} image size
     */

  }, {
    key: 'getCanvasSize',
    value: function getCanvasSize() {
      var image = this.getCanvasImage();

      return {
        width: image ? image.width : 0,
        height: image ? image.height : 0
      };
    }

    /**
     * Create fabric static canvas
     * @returns {Object} {{width: number, height: number}} image size
     */

  }, {
    key: 'createStaticCanvas',
    value: function createStaticCanvas() {
      var staticCanvas = new _fabric2.default.StaticCanvas();

      staticCanvas.set({
        enableRetinaScaling: false
      });

      return staticCanvas;
    }

    /**
     * Get a DrawingMode instance
     * @param {string} modeName - DrawingMode Class Name
     * @returns {DrawingMode} DrawingMode instance
     * @private
     */

  }, {
    key: '_getDrawingModeInstance',
    value: function _getDrawingModeInstance(modeName) {
      return this._drawingModeMap[modeName];
    }

    /**
     * Set object caching to false. This brought many bugs when draw Shape & cropzone
     * @see http://fabricjs.com/fabric-object-caching
     * @private
     */

  }, {
    key: '_setObjectCachingToFalse',
    value: function _setObjectCachingToFalse() {
      _fabric2.default.Object.prototype.objectCaching = false;
    }

    /**
     * Set canvas element to fabric.Canvas
     * @param {Element|string} element - Wrapper or canvas element or selector
     * @param {Boolean} preserveObjectStacking - preserve object stacking or not
     * @param {String} backgroundColor - hex code for canvas background color
     * @private
     */

  }, {
    key: '_setCanvasElement',
    value: function _setCanvasElement(element, preserveObjectStacking, backgroundColor) {
      var selectedElement = void 0;
      var canvasElement = void 0;

      if (element.nodeType) {
        selectedElement = element;
      } else {
        selectedElement = document.querySelector(element);
      }

      if (selectedElement.nodeName.toUpperCase() !== 'CANVAS') {
        canvasElement = document.createElement('canvas');
        selectedElement.appendChild(canvasElement);
      }

      this._canvas = new _fabric2.default.Canvas(canvasElement, {
        backgroundColor: backgroundColor,
        containerClass: 'tui-image-editor-canvas-container',
        enableRetinaScaling: false,
        preserveObjectStacking: preserveObjectStacking
      });
    }

    /**
     * Creates DrawingMode instances
     * @private
     */

  }, {
    key: '_createDrawingModeInstances',
    value: function _createDrawingModeInstances() {
      this._register(this._drawingModeMap, new _cropper4.default());
      this._register(this._drawingModeMap, new _freeDrawing4.default());
      this._register(this._drawingModeMap, new _lineDrawing2.default());
      this._register(this._drawingModeMap, new _shape4.default());
      this._register(this._drawingModeMap, new _text4.default());
      this._register(this._drawingModeMap, new _icon4.default());
      this._register(this._drawingModeMap, new _zoom4.default());
      this._register(this._drawingModeMap, new _resize4.default());
    }

    /**
     * Create components
     * @private
     */

  }, {
    key: '_createComponents',
    value: function _createComponents() {
      this._register(this._componentMap, new _imageLoader2.default(this));
      this._register(this._componentMap, new _jsonLoader2.default(this));
      this._register(this._componentMap, new _cropper2.default(this));
      this._register(this._componentMap, new _flip2.default(this));
      this._register(this._componentMap, new _rotation2.default(this));
      this._register(this._componentMap, new _freeDrawing2.default(this));
      this._register(this._componentMap, new _line2.default(this));
      this._register(this._componentMap, new _text2.default(this));
      this._register(this._componentMap, new _icon2.default(this));
      this._register(this._componentMap, new _filter2.default(this));
      this._register(this._componentMap, new _shape2.default(this));
      this._register(this._componentMap, new _zoom2.default(this));
      this._register(this._componentMap, new _resize2.default(this));
    }

    /**
     * Register component
     * @param {Object} map - map object
     * @param {Object} module - module which has getName method
     * @private
     */

  }, {
    key: '_register',
    value: function _register(map, module) {
      map[module.getName()] = module;
    }

    /**
     * Get the current drawing mode is same with given mode
     * @param {string} mode drawing mode
     * @returns {boolean} true if same or false
     */

  }, {
    key: '_isSameDrawingMode',
    value: function _isSameDrawingMode(mode) {
      return this.getDrawingMode() === mode;
    }

    /**
     * Calculate max dimension of canvas
     * The css-max dimension is dynamically decided with maintaining image ratio
     * The css-max dimension is lower than canvas dimension (attribute of canvas, not css)
     * @param {number} width - Canvas width
     * @param {number} height - Canvas height
     * @returns {{width: number, height: number}} - Max width & Max height
     * @private
     */

  }, {
    key: '_calcMaxDimension',
    value: function _calcMaxDimension(width, height) {
      var wScaleFactor = this.cssMaxWidth / width;
      var hScaleFactor = this.cssMaxHeight / height;
      var cssMaxWidth = Math.min(width, this.cssMaxWidth);
      var cssMaxHeight = Math.min(height, this.cssMaxHeight);

      if (wScaleFactor < 1 && wScaleFactor < hScaleFactor) {
        cssMaxWidth = width * wScaleFactor;
        cssMaxHeight = height * wScaleFactor;
      } else if (hScaleFactor < 1 && hScaleFactor < wScaleFactor) {
        cssMaxWidth = width * hScaleFactor;
        cssMaxHeight = height * hScaleFactor;
      }

      return {
        width: Math.floor(cssMaxWidth),
        height: Math.floor(cssMaxHeight)
      };
    }

    /**
     * Callback function after loading image
     * @param {fabric.Image} obj - Fabric image object
     * @private
     */

  }, {
    key: '_callbackAfterLoadingImageObject',
    value: function _callbackAfterLoadingImageObject(obj) {
      var centerPos = this.getCanvasImage().getCenterPoint();

      obj.set(_consts.fObjectOptions.SELECTION_STYLE);
      obj.set({
        left: centerPos.x,
        top: centerPos.y,
        crossOrigin: 'Anonymous'
      });

      this.getCanvas().add(obj).setActiveObject(obj);
    }

    /**
     * Attach canvas's events
     */

  }, {
    key: '_attachCanvasEvents',
    value: function _attachCanvasEvents() {
      var canvas = this._canvas;
      var handler = this._handler;
      canvas.on({
        'mouse:down': handler.onMouseDown,
        'mouse:up': handler.onMouseUp,
        'mouse:move': handler.onMouseMove,
        'mouse:wheel': handler.onMouseWheel,
        'object:added': handler.onObjectAdded,
        'object:removed': handler.onObjectRemoved,
        'object:moving': handler.onObjectMoved,
        'object:scaling': handler.onObjectScaled,
        'object:modified': handler.onObjectModified,
        'object:rotating': handler.onObjectRotated,
        'path:created': handler.onPathCreated,
        'selection:cleared': handler.onSelectionCleared,
        'selection:created': handler.onSelectionCreated,
        'selection:updated': handler.onObjectSelected
      });
    }

    /**
     * "mouse:down" canvas event handler
     * @param {{target: fabric.Object, e: MouseEvent}} fEvent - Fabric event
     * @private
     */

  }, {
    key: '_onMouseDown',
    value: function _onMouseDown(fEvent) {
      var _this2 = this;

      var event = fEvent.e,
          target = fEvent.target;

      var originPointer = this._canvas.getPointer(event);

      if (target) {
        var type = target.type;

        var undoData = (0, _selectionModifyHelper.makeSelectionUndoData)(target, function (item) {
          return (0, _selectionModifyHelper.makeSelectionUndoDatum)(_this2.getObjectId(item), item, type === 'activeSelection');
        });

        (0, _selectionModifyHelper.setCachedUndoDataForDimension)(undoData);
      }

      this.fire(_consts.eventNames.MOUSE_DOWN, event, originPointer);
    }
  }, {
    key: '_onMouseUp',
    value: function _onMouseUp(fEvent) {
      var event = fEvent.e;

      var originPointer = this._canvas.getPointer(event);

      this.fire(_consts.eventNames.MOUSE_UP, event, originPointer);
    }
  }, {
    key: '_onMouseMove',
    value: function _onMouseMove(fEvent) {
      var event = fEvent.e;

      var originPointer = this._canvas.getPointer(event);

      this.fire(_consts.eventNames.MOUSE_MOVE, event, originPointer);
    }
  }, {
    key: '_onMouseWheel',
    value: function _onMouseWheel(fEvent) {
      var event = fEvent.e;

      var originPointer = this._canvas.getPointer(event);

      this.fire(_consts.eventNames.MOUSE_WHEEL, event, originPointer);
    }

    /**
     * "object:added" canvas event handler
     * @param {{target: fabric.Object, e: MouseEvent}} fEvent - Fabric event
     * @private
     */

  }, {
    key: '_onObjectAdded',
    value: function _onObjectAdded(fEvent) {
      var obj = fEvent.target;
      if (obj.isType('cropzone')) {
        return;
      }

      this._addFabricObject(obj);
    }

    /**
     * "object:removed" canvas event handler
     * @param {{target: fabric.Object, e: MouseEvent}} fEvent - Fabric event
     * @private
     */

  }, {
    key: '_onObjectRemoved',
    value: function _onObjectRemoved(fEvent) {
      var obj = fEvent.target;

      this._removeFabricObject(stamp(obj));
    }

    /**
     * "object:moving" canvas event handler
     * @param {{target: fabric.Object, e: MouseEvent}} fEvent - Fabric event
     * @private
     */

  }, {
    key: '_onObjectMoved',
    value: function _onObjectMoved(fEvent) {
      var _this3 = this;

      this._lazyFire(_consts.eventNames.OBJECT_MOVED, function (object) {
        return _this3.createObjectProperties(object);
      }, fEvent.target);
    }

    /**
     * "object:scaling" canvas event handler
     * @param {{target: fabric.Object, e: MouseEvent}} fEvent - Fabric event
     * @private
     */

  }, {
    key: '_onObjectScaled',
    value: function _onObjectScaled(fEvent) {
      var _this4 = this;

      this._lazyFire(_consts.eventNames.OBJECT_SCALED, function (object) {
        return _this4.createObjectProperties(object);
      }, fEvent.target);
    }

    /**
     * "object:modified" canvas event handler
     * @param {{target: fabric.Object, e: MouseEvent}} fEvent - Fabric event
     * @private
     */

  }, {
    key: '_onObjectModified',
    value: function _onObjectModified(fEvent) {
      var target = fEvent.target;

      if (target.type === 'activeSelection') {
        var items = target.getObjects();

        items.forEach(function (item) {
          return item.fire('modifiedInGroup', target);
        });
      }

      this.fire(_consts.eventNames.OBJECT_MODIFIED, target, this.getObjectId(target));
    }

    /**
     * "object:rotating" canvas event handler
     * @param {{target: fabric.Object, e: MouseEvent}} fEvent - Fabric event
     * @private
     */

  }, {
    key: '_onObjectRotated',
    value: function _onObjectRotated(fEvent) {
      var _this5 = this;

      this._lazyFire(_consts.eventNames.OBJECT_ROTATED, function (object) {
        return _this5.createObjectProperties(object);
      }, fEvent.target);
    }

    /**
     * Lazy event emitter
     * @param {string} eventName - event name
     * @param {Function} paramsMaker - make param function
     * @param {Object} [target] - Object of the event owner.
     * @private
     */

  }, {
    key: '_lazyFire',
    value: function _lazyFire(eventName, paramsMaker, target) {
      var _this6 = this;

      var existEventDelegation = target && target.canvasEventDelegation;
      var delegationState = existEventDelegation ? target.canvasEventDelegation(eventName) : 'none';

      if (delegationState === 'unregistered') {
        target.canvasEventRegister(eventName, function (object) {
          _this6.fire(eventName, paramsMaker(object));
        });
      }

      if (delegationState === 'none') {
        this.fire(eventName, paramsMaker(target));
      }
    }

    /**
     * "object:selected" canvas event handler
     * @param {{target: fabric.Object, e: MouseEvent}} fEvent - Fabric event
     * @private
     */

  }, {
    key: '_onObjectSelected',
    value: function _onObjectSelected(fEvent) {
      var target = fEvent.target;

      var params = this.createObjectProperties(target);

      this.fire(_consts.eventNames.OBJECT_ACTIVATED, params);
    }

    /**
     * "path:created" canvas event handler
     * @param {{path: fabric.Path}} obj - Path object
     * @private
     */

  }, {
    key: '_onPathCreated',
    value: function _onPathCreated(obj) {
      var _obj$path$getCenterPo = obj.path.getCenterPoint(),
          left = _obj$path$getCenterPo.x,
          top = _obj$path$getCenterPo.y;

      obj.path.set(extend({
        left: left,
        top: top
      }, _consts.fObjectOptions.SELECTION_STYLE));

      var params = this.createObjectProperties(obj.path);

      this.fire(_consts.eventNames.ADD_OBJECT, params);
    }

    /**
     * "selction:cleared" canvas event handler
     * @private
     */

  }, {
    key: '_onSelectionCleared',
    value: function _onSelectionCleared() {
      this.fire(_consts.eventNames.SELECTION_CLEARED);
    }

    /**
     * "selction:created" canvas event handler
     * @param {{target: fabric.Object, e: MouseEvent}} fEvent - Fabric event
     * @private
     */

  }, {
    key: '_onSelectionCreated',
    value: function _onSelectionCreated(fEvent) {
      var target = fEvent.target;

      var params = this.createObjectProperties(target);

      this.fire(_consts.eventNames.OBJECT_ACTIVATED, params);
      this.fire(_consts.eventNames.SELECTION_CREATED, fEvent.target);
    }

    /**
     * Canvas discard selection all
     */

  }, {
    key: 'discardSelection',
    value: function discardSelection() {
      this._canvas.discardActiveObject();
      this._canvas.renderAll();
    }

    /**
     * Canvas Selectable status change
     * @param {boolean} selectable - expect status
     */

  }, {
    key: 'changeSelectableAll',
    value: function changeSelectableAll(selectable) {
      this._canvas.forEachObject(function (obj) {
        obj.selectable = selectable;
        obj.hoverCursor = selectable ? 'move' : 'crosshair';
      });
    }

    /**
     * Return object's properties
     * @param {fabric.Object} obj - fabric object
     * @returns {Object} properties object
     */

  }, {
    key: 'createObjectProperties',
    value: function createObjectProperties(obj) {
      var predefinedKeys = ['left', 'top', 'width', 'height', 'fill', 'stroke', 'strokeWidth', 'opacity', 'angle'];
      var props = {
        objId: stamp(obj),
        type: obj.type
      };

      extend(props, (0, _util.getProperties)(obj, predefinedKeys));

      if ((0, _util.includes)(['i-text', 'text'], obj.type)) {
        extend(props, this._createTextProperties(obj, props));
      } else if ((0, _util.includes)(['rect', 'triangle', 'circle'], obj.type)) {
        var shapeComp = this.getComponent(_consts.componentNames.SHAPE);
        extend(props, {
          fill: shapeComp.makeFillPropertyForUserEvent(obj)
        });
      }

      return props;
    }

    /**
     * Get text object's properties
     * @param {fabric.Object} obj - fabric text object
     * @param {Object} props - properties
     * @returns {Object} properties object
     */

  }, {
    key: '_createTextProperties',
    value: function _createTextProperties(obj) {
      var predefinedKeys = ['text', 'fontFamily', 'fontSize', 'fontStyle', 'textAlign', 'textDecoration', 'fontWeight'];
      var props = {};
      extend(props, (0, _util.getProperties)(obj, predefinedKeys));

      return props;
    }

    /**
     * Add object array by id
     * @param {fabric.Object} obj - fabric object
     * @returns {number} object id
     */

  }, {
    key: '_addFabricObject',
    value: function _addFabricObject(obj) {
      var objId = stamp(obj);
      this._objects[objId] = obj;

      return objId;
    }

    /**
     * Remove an object in array yb id
     * @param {number} objId -  object id
     */

  }, {
    key: '_removeFabricObject',
    value: function _removeFabricObject(objId) {
      delete this._objects[objId];
    }

    /**
     * Reset targetObjectForCopyPaste value from activeObject
     */

  }, {
    key: 'resetTargetObjectForCopyPaste',
    value: function resetTargetObjectForCopyPaste() {
      var activeObject = this.getActiveObject();

      if (activeObject) {
        this.targetObjectForCopyPaste = activeObject;
      }
    }

    /**
     * Paste fabric object
     * @returns {Promise}
     */

  }, {
    key: 'pasteObject',
    value: function pasteObject() {
      var _this7 = this;

      if (!this.targetObjectForCopyPaste) {
        return _util.Promise.resolve([]);
      }

      var targetObject = this.targetObjectForCopyPaste;
      var isGroupSelect = targetObject.type === 'activeSelection';
      var targetObjects = isGroupSelect ? targetObject.getObjects() : [targetObject];
      var newTargetObject = null;

      this.discardSelection();

      return this._cloneObject(targetObjects).then(function (addedObjects) {
        if (addedObjects.length > 1) {
          newTargetObject = _this7.getActiveSelectionFromObjects(addedObjects);
        } else {
          newTargetObject = addedObjects[0];
        }
        _this7.targetObjectForCopyPaste = newTargetObject;
        _this7.setActiveObject(newTargetObject);
      });
    }

    /**
     * Clone object
     * @param {fabric.Object} targetObjects - fabric object
     * @returns {Promise}
     * @private
     */

  }, {
    key: '_cloneObject',
    value: function _cloneObject(targetObjects) {
      var _this8 = this;

      var addedObjects = _tuiCodeSnippet2.default.map(targetObjects, function (targetObject) {
        return _this8._cloneObjectItem(targetObject);
      });

      return _util.Promise.all(addedObjects);
    }

    /**
     * Clone object one item
     * @param {fabric.Object} targetObject - fabric object
     * @returns {Promise}
     * @private
     */

  }, {
    key: '_cloneObjectItem',
    value: function _cloneObjectItem(targetObject) {
      var _this9 = this;

      return this._copyFabricObjectForPaste(targetObject).then(function (clonedObject) {
        var objectProperties = _this9.createObjectProperties(clonedObject);
        _this9.add(clonedObject);

        _this9.fire(_consts.eventNames.ADD_OBJECT, objectProperties);

        return clonedObject;
      });
    }

    /**
     * Copy fabric object with Changed position for copy and paste
     * @param {fabric.Object} targetObject - fabric object
     * @returns {Promise}
     * @private
     */

  }, {
    key: '_copyFabricObjectForPaste',
    value: function _copyFabricObjectForPaste(targetObject) {
      var _this10 = this;

      var addExtraPx = function addExtraPx(value, isReverse) {
        return isReverse ? value - EXTRA_PX_FOR_PASTE : value + EXTRA_PX_FOR_PASTE;
      };

      return this._copyFabricObject(targetObject).then(function (clonedObject) {
        var left = clonedObject.left,
            top = clonedObject.top,
            width = clonedObject.width,
            height = clonedObject.height;

        var _getCanvasSize = _this10.getCanvasSize(),
            canvasWidth = _getCanvasSize.width,
            canvasHeight = _getCanvasSize.height;

        var rightEdge = left + width / 2;
        var bottomEdge = top + height / 2;

        clonedObject.set(_tuiCodeSnippet2.default.extend({
          left: addExtraPx(left, rightEdge + EXTRA_PX_FOR_PASTE > canvasWidth),
          top: addExtraPx(top, bottomEdge + EXTRA_PX_FOR_PASTE > canvasHeight)
        }, _consts.fObjectOptions.SELECTION_STYLE));

        return clonedObject;
      });
    }

    /**
     * Copy fabric object
     * @param {fabric.Object} targetObject - fabric object
     * @returns {Promise}
     * @private
     */

  }, {
    key: '_copyFabricObject',
    value: function _copyFabricObject(targetObject) {
      var _this11 = this;

      return new _util.Promise(function (resolve) {
        targetObject.clone(function (cloned) {
          var shapeComp = _this11.getComponent(_consts.componentNames.SHAPE);
          if ((0, _util.isShape)(cloned)) {
            shapeComp.processForCopiedObject(cloned, targetObject);
          }

          resolve(cloned);
        });
      });
    }

    /**
     * Get current dimensions
     * @returns {object}
     */

  }, {
    key: 'getCurrentDimensions',
    value: function getCurrentDimensions() {
      var resize = this.getComponent(_consts.componentNames.RESIZE);

      return resize.getCurrentDimensions();
    }

    /**
     * Get original dimensions
     * @returns {object}
     */

  }, {
    key: 'getOriginalDimensions',
    value: function getOriginalDimensions() {
      var resize = this.getComponent(_consts.componentNames.RESIZE);

      return resize.getOriginalDimensions();
    }

    /**
     * Set original dimensions
     * @param {object} dimensions - Dimensions
     */

  }, {
    key: 'setOriginalDimensions',
    value: function setOriginalDimensions(dimensions) {
      var resize = this.getComponent(_consts.componentNames.RESIZE);
      resize.setOriginalDimensions(dimensions);
    }

    /**
     * Resize Image
     * @param {Object} dimensions - Resize dimensions
     * @returns {Promise}
     */

  }, {
    key: 'resize',
    value: function resize(dimensions) {
      var resize = this.getComponent(_consts.componentNames.RESIZE);

      return resize.resize(dimensions);
    }

    /**
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @returns {Object} Object representation of an instance
     */

  }, {
    key: 'toJSON',
    value: function toJSON(propertiesToInclude) {
      return this._canvas.toJSON(propertiesToInclude);
    }
  }, {
    key: 'loadFromJSON',
    value: function loadFromJSON(json) {
      var _this12 = this;

      return new _util.Promise(function (resolve) {
        _this12._canvas.loadFromJSON(json, function () {
          _this12._canvas.renderAll();
          resolve();
        });
      });
    }
  }, {
    key: 'setBackgroundColor',
    value: function setBackgroundColor(color) {
      var _this13 = this;

      return new _util.Promise(function (resolve) {
        _this13._canvas.setBackgroundColor(color, function () {
          _this13._canvas.renderAll();
          resolve();
        });
      });
    }
  }]);

  return Graphics;
}();

CustomEvents.mixin(Graphics);

exports.default = Graphics;

/***/ }),

/***/ "./src/js/helper/selectionModifyHelper.js":
/*!************************************************!*\
  !*** ./src/js/helper/selectionModifyHelper.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setCachedUndoDataForDimension = setCachedUndoDataForDimension;
exports.getCachedUndoDataForDimension = getCachedUndoDataForDimension;
exports.makeSelectionUndoData = makeSelectionUndoData;
exports.makeSelectionUndoDatum = makeSelectionUndoDatum;

var _tuiCodeSnippet = __webpack_require__(/*! tui-code-snippet */ "tui-code-snippet");

var _fabric = __webpack_require__(/*! fabric */ "fabric");

var _fabric2 = _interopRequireDefault(_fabric);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Cached selection's info
 * @type {Array}
 * @private
 */
/**
 * @author NHN. FE Development Team <dl_javascript@nhn.com>
 * @fileoverview Selection modification helper
 */

var cachedUndoDataForChangeDimension = null;

/**
 * Set cached undo data
 * @param {Array} undoData - selection object
 * @private
 */
function setCachedUndoDataForDimension(undoData) {
  cachedUndoDataForChangeDimension = undoData;
}

/**
 * Get cached undo data
 * @returns {Object} cached undo data
 * @private
 */
function getCachedUndoDataForDimension() {
  return cachedUndoDataForChangeDimension;
}

/**
 * Make undo data
 * @param {fabric.Object} obj - selection object
 * @param {Function} undoDatumMaker - make undo datum
 * @returns {Array} undoData
 * @private
 */
function makeSelectionUndoData(obj, undoDatumMaker) {
  var undoData = void 0;

  if (obj.type === 'activeSelection') {
    undoData = obj.getObjects().map(function (item) {
      var angle = item.angle,
          left = item.left,
          top = item.top,
          scaleX = item.scaleX,
          scaleY = item.scaleY,
          width = item.width,
          height = item.height;


      _fabric2.default.util.addTransformToObject(item, obj.calcTransformMatrix());
      var result = undoDatumMaker(item);

      item.set({
        angle: angle,
        left: left,
        top: top,
        width: width,
        height: height,
        scaleX: scaleX,
        scaleY: scaleY
      });

      return result;
    });
  } else {
    undoData = [undoDatumMaker(obj)];
  }

  return undoData;
}

/**
 * Make undo datum
 * @param {number} objId - object id
 * @param {fabric.Object} obj - selection object
 * @param {boolean} isSelection - whether or not object is selection
 * @returns {Object} undo datum
 * @private
 */
function makeSelectionUndoDatum(objId, obj, isSelection) {
  return isSelection ? {
    objId: objId,
    width: obj.width,
    height: obj.height,
    top: obj.top,
    left: obj.left,
    angle: obj.angle,
    scaleX: obj.scaleX,
    scaleY: obj.scaleY
  } : (0, _tuiCodeSnippet.extend)({ objId: objId }, obj);
}

/***/ }),

/***/ "./src/js/helper/shapeFilterFillHelper.js":
/*!************************************************!*\
  !*** ./src/js/helper/shapeFilterFillHelper.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFillImageFromShape = getFillImageFromShape;
exports.rePositionFilterTypeFillImage = rePositionFilterTypeFillImage;
exports.makeFilterOptionFromFabricImage = makeFilterOptionFromFabricImage;
exports.makeFillPatternForFilter = makeFillPatternForFilter;
exports.resetFillPatternCanvas = resetFillPatternCanvas;
exports.reMakePatternImageSource = reMakePatternImageSource;
exports.getCachedCanvasImageElement = getCachedCanvasImageElement;

var _tuiCodeSnippet = __webpack_require__(/*! tui-code-snippet */ "tui-code-snippet");

var _shapeResizeHelper = __webpack_require__(/*! @/helper/shapeResizeHelper */ "./src/js/helper/shapeResizeHelper.js");

var _shapeResizeHelper2 = _interopRequireDefault(_shapeResizeHelper);

var _util = __webpack_require__(/*! @/util */ "./src/js/util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * @author NHN. FE Development Team <dl_javascript@nhn.com>
                                                                                                                                                                                                                   * @fileoverview Shape resize helper
                                                                                                                                                                                                                   */


var FILTER_OPTION_MAP = {
  pixelate: 'blocksize',
  blur: 'blur'
};
var POSITION_DIMENSION_MAP = {
  x: 'width',
  y: 'height'
};

var FILTER_NAME_VALUE_MAP = (0, _util.flipObject)(FILTER_OPTION_MAP);

/**
 * Cached canvas image element for fill image
 * @type {boolean}
 * @private
 */
var cachedCanvasImageElement = null;

/**
 * Get background image of fill
 * @param {fabric.Object} shapeObj - Shape object
 * @returns {fabric.Image}
 * @private
 */
function getFillImageFromShape(shapeObj) {
  var _getCustomProperty = (0, _util.getCustomProperty)(shapeObj, 'patternSourceCanvas'),
      patternSourceCanvas = _getCustomProperty.patternSourceCanvas;

  var _patternSourceCanvas$ = patternSourceCanvas.getObjects(),
      fillImage = _patternSourceCanvas$[0];

  return fillImage;
}

/**
 * Reset the image position in the filter type fill area.
 * @param {fabric.Object} shapeObj - Shape object
 * @private
 */
function rePositionFilterTypeFillImage(shapeObj) {
  var angle = shapeObj.angle,
      flipX = shapeObj.flipX,
      flipY = shapeObj.flipY;

  var fillImage = getFillImageFromShape(shapeObj);
  var rotatedShapeCornerDimension = getRotatedDimension(shapeObj);
  var right = rotatedShapeCornerDimension.right,
      bottom = rotatedShapeCornerDimension.bottom;
  var width = rotatedShapeCornerDimension.width,
      height = rotatedShapeCornerDimension.height;

  var diffLeft = (width - shapeObj.width) / 2;
  var diffTop = (height - shapeObj.height) / 2;
  var cropX = shapeObj.left - shapeObj.width / 2 - diffLeft;
  var cropY = shapeObj.top - shapeObj.height / 2 - diffTop;
  var left = width / 2 - diffLeft;
  var top = height / 2 - diffTop;
  var fillImageMaxSize = Math.max(width, height) + Math.max(diffLeft, diffTop);

  var _calculateFillImageDi = calculateFillImageDimensionOutsideCanvas({
    shapeObj: shapeObj,
    left: left,
    top: top,
    width: width,
    height: height,
    cropX: cropX,
    cropY: cropY,
    flipX: flipX,
    flipY: flipY,
    right: right,
    bottom: bottom
  });

  left = _calculateFillImageDi[0];
  top = _calculateFillImageDi[1];
  width = _calculateFillImageDi[2];
  height = _calculateFillImageDi[3];


  fillImage.set({
    angle: flipX === flipY ? -angle : angle,
    left: left,
    top: top,
    width: width,
    height: height,
    cropX: cropX,
    cropY: cropY,
    flipX: flipX,
    flipY: flipY
  });

  (0, _util.setCustomProperty)(fillImage, { fillImageMaxSize: fillImageMaxSize });
}

/**
 * Make filter option from fabric image
 * @param {fabric.Image} imageObject - fabric image object
 * @returns {object}
 */
function makeFilterOptionFromFabricImage(imageObject) {
  return (0, _tuiCodeSnippet.map)(imageObject.filters, function (filter) {
    var _Object$keys = Object.keys(filter),
        key = _Object$keys[0];

    return _defineProperty({}, FILTER_NAME_VALUE_MAP[key], filter[key]);
  });
}

/**
 * Calculate fill image position and size for out of Canvas
 * @param {Object} options - options for position dimension calculate
 *   @param {fabric.Object} shapeObj - shape object
 *   @param {number} left - original left position
 *   @param {number} top - original top position
 *   @param {number} width - image width
 *   @param {number} height - image height
 *   @param {number} cropX - image cropX
 *   @param {number} cropY - image cropY
 *   @param {boolean} flipX - shape flipX
 *   @param {boolean} flipY - shape flipY
 * @returns {Object}
 */
function calculateFillImageDimensionOutsideCanvas(_ref2) {
  var shapeObj = _ref2.shapeObj,
      left = _ref2.left,
      top = _ref2.top,
      width = _ref2.width,
      height = _ref2.height,
      cropX = _ref2.cropX,
      cropY = _ref2.cropY,
      flipX = _ref2.flipX,
      flipY = _ref2.flipY,
      right = _ref2.right,
      bottom = _ref2.bottom;

  var overflowAreaPositionFixer = function overflowAreaPositionFixer(type, outDistance, imageLeft, imageTop) {
    return calculateDistanceOverflowPart({
      type: type,
      outDistance: outDistance,
      shapeObj: shapeObj,
      flipX: flipX,
      flipY: flipY,
      left: imageLeft,
      top: imageTop
    });
  };
  var originalWidth = width,
      originalHeight = height;

  var _calculateDimensionLe = calculateDimensionLeftTopEdge(overflowAreaPositionFixer, {
    left: left,
    top: top,
    width: width,
    height: height,
    cropX: cropX,
    cropY: cropY
  });

  left = _calculateDimensionLe[0];
  top = _calculateDimensionLe[1];
  width = _calculateDimensionLe[2];
  height = _calculateDimensionLe[3];

  var _calculateDimensionRi = calculateDimensionRightBottomEdge(overflowAreaPositionFixer, {
    left: left,
    top: top,
    insideCanvasRealImageWidth: width,
    insideCanvasRealImageHeight: height,
    right: right,
    bottom: bottom,
    cropX: cropX,
    cropY: cropY,
    originalWidth: originalWidth,
    originalHeight: originalHeight
  });

  left = _calculateDimensionRi[0];
  top = _calculateDimensionRi[1];
  width = _calculateDimensionRi[2];
  height = _calculateDimensionRi[3];


  return [left, top, width, height];
}

/**
 * Calculate fill image position and size for for right bottom edge
 * @param {Function} overflowAreaPositionFixer - position fixer
 * @param {Object} options - options for position dimension calculate
 *   @param {fabric.Object} shapeObj - shape object
 *   @param {number} left - original left position
 *   @param {number} top - original top position
 *   @param {number} width - image width
 *   @param {number} height - image height
 *   @param {number} right - image right
 *   @param {number} bottom - image bottom
 *   @param {number} cropX - image cropX
 *   @param {number} cropY - image cropY
 *   @param {boolean} originalWidth - image original width
 *   @param {boolean} originalHeight - image original height
 * @returns {Object}
 */
function calculateDimensionRightBottomEdge(overflowAreaPositionFixer, _ref3) {
  var left = _ref3.left,
      top = _ref3.top,
      insideCanvasRealImageWidth = _ref3.insideCanvasRealImageWidth,
      insideCanvasRealImageHeight = _ref3.insideCanvasRealImageHeight,
      right = _ref3.right,
      bottom = _ref3.bottom,
      cropX = _ref3.cropX,
      cropY = _ref3.cropY,
      originalWidth = _ref3.originalWidth,
      originalHeight = _ref3.originalHeight;
  var width = insideCanvasRealImageWidth,
      height = insideCanvasRealImageHeight;
  var _cachedCanvasImageEle = cachedCanvasImageElement,
      canvasWidth = _cachedCanvasImageEle.width,
      canvasHeight = _cachedCanvasImageEle.height;


  if (right > canvasWidth && cropX > 0) {
    width = originalWidth - Math.abs(right - canvasWidth);
  }
  if (bottom > canvasHeight && cropY > 0) {
    height = originalHeight - Math.abs(bottom - canvasHeight);
  }

  var diff = {
    x: (insideCanvasRealImageWidth - width) / 2,
    y: (insideCanvasRealImageHeight - height) / 2
  };

  (0, _tuiCodeSnippet.forEach)(['x', 'y'], function (type) {
    var cropDistance2 = diff[type];
    if (cropDistance2 > 0) {
      var _overflowAreaPosition = overflowAreaPositionFixer(type, cropDistance2, left, top);

      left = _overflowAreaPosition[0];
      top = _overflowAreaPosition[1];
    }
  });

  return [left, top, width, height];
}

/**
 * Calculate fill image position and size for for left top
 * @param {Function} overflowAreaPositionFixer - position fixer
 * @param {Object} options - options for position dimension calculate
 *   @param {fabric.Object} shapeObj - shape object
 *   @param {number} left - original left position
 *   @param {number} top - original top position
 *   @param {number} width - image width
 *   @param {number} height - image height
 *   @param {number} cropX - image cropX
 *   @param {number} cropY - image cropY
 * @returns {Object}
 */
function calculateDimensionLeftTopEdge(overflowAreaPositionFixer, _ref4) {
  var left = _ref4.left,
      top = _ref4.top,
      width = _ref4.width,
      height = _ref4.height,
      cropX = _ref4.cropX,
      cropY = _ref4.cropY;

  var dimension = {
    width: width,
    height: height
  };

  (0, _tuiCodeSnippet.forEach)(['x', 'y'], function (type) {
    var cropDistance = type === 'x' ? cropX : cropY;
    var compareSize = dimension[POSITION_DIMENSION_MAP[type]];
    var standardSize = cachedCanvasImageElement[POSITION_DIMENSION_MAP[type]];

    if (compareSize > standardSize) {
      var outDistance = (compareSize - standardSize) / 2;

      dimension[POSITION_DIMENSION_MAP[type]] = standardSize;

      var _overflowAreaPosition2 = overflowAreaPositionFixer(type, outDistance, left, top);

      left = _overflowAreaPosition2[0];
      top = _overflowAreaPosition2[1];
    }
    if (cropDistance < 0) {
      var _overflowAreaPosition3 = overflowAreaPositionFixer(type, cropDistance, left, top);

      left = _overflowAreaPosition3[0];
      top = _overflowAreaPosition3[1];
    }
  });

  return [left, top, dimension.width, dimension.height];
}

/**
 * Make fill property of dynamic pattern type
 * @param {fabric.Image} canvasImage - canvas background image
 * @param {Array} filterOption - filter option
 * @param {fabric.StaticCanvas} patternSourceCanvas - fabric static canvas
 * @returns {Object}
 */
function makeFillPatternForFilter(canvasImage, filterOption, patternSourceCanvas) {
  var copiedCanvasElement = getCachedCanvasImageElement(canvasImage);
  var fillImage = makeFillImage(copiedCanvasElement, canvasImage.angle, filterOption);
  patternSourceCanvas.add(fillImage);

  var fabricProperty = {
    fill: new fabric.Pattern({
      source: patternSourceCanvas.getElement(),
      repeat: 'no-repeat'
    })
  };

  (0, _util.setCustomProperty)(fabricProperty, { patternSourceCanvas: patternSourceCanvas });

  return fabricProperty;
}

/**
 * Reset fill pattern canvas
 * @param {fabric.StaticCanvas} patternSourceCanvas - fabric static canvas
 */
function resetFillPatternCanvas(patternSourceCanvas) {
  var _patternSourceCanvas$2 = patternSourceCanvas.getObjects(),
      innerImage = _patternSourceCanvas$2[0];

  var _getCustomProperty2 = (0, _util.getCustomProperty)(innerImage, 'fillImageMaxSize'),
      fillImageMaxSize = _getCustomProperty2.fillImageMaxSize;

  fillImageMaxSize = Math.max(1, fillImageMaxSize);

  patternSourceCanvas.setDimensions({
    width: fillImageMaxSize,
    height: fillImageMaxSize
  });
  patternSourceCanvas.renderAll();
}

/**
 * Remake filter pattern image source
 * @param {fabric.Object} shapeObj - Shape object
 * @param {fabric.Image} canvasImage - canvas background image
 */
function reMakePatternImageSource(shapeObj, canvasImage) {
  var _getCustomProperty3 = (0, _util.getCustomProperty)(shapeObj, 'patternSourceCanvas'),
      patternSourceCanvas = _getCustomProperty3.patternSourceCanvas;

  var _patternSourceCanvas$3 = patternSourceCanvas.getObjects(),
      fillImage = _patternSourceCanvas$3[0];

  var filterOption = makeFilterOptionFromFabricImage(fillImage);

  patternSourceCanvas.remove(fillImage);

  var copiedCanvasElement = getCachedCanvasImageElement(canvasImage, true);
  var newFillImage = makeFillImage(copiedCanvasElement, canvasImage.angle, filterOption);

  patternSourceCanvas.add(newFillImage);
}

/**
 * Calculate a point line outside the canvas.
 * @param {fabric.Image} canvasImage - canvas background image
 * @param {boolean} reset - default is false
 * @returns {HTMLImageElement}
 */
function getCachedCanvasImageElement(canvasImage) {
  var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (!cachedCanvasImageElement || reset) {
    cachedCanvasImageElement = canvasImage.toCanvasElement();
  }

  return cachedCanvasImageElement;
}

/**
 * Calculate fill image position for out of Canvas
 * @param {string} type - 'x' or 'y'
 * @param {fabric.Object} shapeObj - shape object
 * @param {number} outDistance - distance away
 * @param {number} left - original left position
 * @param {number} top - original top position
 * @returns {Array}
 */
function calculateDistanceOverflowPart(_ref5) {
  var type = _ref5.type,
      shapeObj = _ref5.shapeObj,
      outDistance = _ref5.outDistance,
      left = _ref5.left,
      top = _ref5.top,
      flipX = _ref5.flipX,
      flipY = _ref5.flipY;

  var shapePointNavigation = getShapeEdgePoint(shapeObj);
  var shapeNeighborPointNavigation = [[1, 2], [0, 3], [0, 3], [1, 2]];
  var linePointsOutsideCanvas = calculateLinePointsOutsideCanvas(type, shapePointNavigation, shapeNeighborPointNavigation);
  var reatAngles = calculateLineAngleOfOutsideCanvas(type, shapePointNavigation, linePointsOutsideCanvas);
  var startPointIndex = linePointsOutsideCanvas.startPointIndex;

  var diffPosition = getReversePositionForFlip({
    outDistance: outDistance,
    startPointIndex: startPointIndex,
    flipX: flipX,
    flipY: flipY,
    reatAngles: reatAngles
  });

  return [left + diffPosition.left, top + diffPosition.top];
}

/**
 * Calculate fill image position for out of Canvas
 * @param {number} outDistance - distance away
 * @param {boolean} flipX - flip x statux
 * @param {boolean} flipY - flip y statux
 * @param {Array} reatAngles - Line angle of the rectangle vertex.
 * @returns {Object} diffPosition
 */
function getReversePositionForFlip(_ref6) {
  var outDistance = _ref6.outDistance,
      startPointIndex = _ref6.startPointIndex,
      flipX = _ref6.flipX,
      flipY = _ref6.flipY,
      reatAngles = _ref6.reatAngles;

  var rotationChangePoint1 = outDistance * Math.cos(reatAngles[0] * Math.PI / 180);
  var rotationChangePoint2 = outDistance * Math.cos(reatAngles[1] * Math.PI / 180);
  var isForward = startPointIndex === 2 || startPointIndex === 3;
  var diffPosition = {
    top: isForward ? rotationChangePoint1 : rotationChangePoint2,
    left: isForward ? rotationChangePoint2 : rotationChangePoint1
  };

  if (isReverseLeftPositionForFlip(startPointIndex, flipX, flipY)) {
    diffPosition.left = diffPosition.left * -1;
  }
  if (isReverseTopPositionForFlip(startPointIndex, flipX, flipY)) {
    diffPosition.top = diffPosition.top * -1;
  }

  return diffPosition;
}

/**
 * Calculate a point line outside the canvas.
 * @param {string} type - 'x' or 'y'
 * @param {Array} shapePointNavigation - shape edge positions
 *   @param {Object} shapePointNavigation.lefttop - left top position
 *   @param {Object} shapePointNavigation.righttop - right top position
 *   @param {Object} shapePointNavigation.leftbottom - lefttop position
 *   @param {Object} shapePointNavigation.rightbottom - rightbottom position
 * @param {Array} shapeNeighborPointNavigation - Array to find adjacent edges.
 * @returns {Object}
 */
function calculateLinePointsOutsideCanvas(type, shapePointNavigation, shapeNeighborPointNavigation) {
  var minimumPoint = 0;
  var minimumPointIndex = 0;
  (0, _tuiCodeSnippet.forEach)(shapePointNavigation, function (point, index) {
    if (point[type] < minimumPoint) {
      minimumPoint = point[type];
      minimumPointIndex = index;
    }
  });

  var _shapeNeighborPointNa = shapeNeighborPointNavigation[minimumPointIndex],
      endPointIndex1 = _shapeNeighborPointNa[0],
      endPointIndex2 = _shapeNeighborPointNa[1];


  return {
    startPointIndex: minimumPointIndex,
    endPointIndex1: endPointIndex1,
    endPointIndex2: endPointIndex2
  };
}

/**
 * Calculate a point line outside the canvas.
 * @param {string} type - 'x' or 'y'
 * @param {Array} shapePointNavigation - shape edge positions
 *   @param {object} shapePointNavigation.lefttop - left top position
 *   @param {object} shapePointNavigation.righttop - right top position
 *   @param {object} shapePointNavigation.leftbottom - lefttop position
 *   @param {object} shapePointNavigation.rightbottom - rightbottom position
 * @param {Object} linePointsOfOneVertexIndex - Line point of one vertex
 *   @param {Object} linePointsOfOneVertexIndex.startPoint - start point index
 *   @param {Object} linePointsOfOneVertexIndex.endPointIndex1 - end point index
 *   @param {Object} linePointsOfOneVertexIndex.endPointIndex2 - end point index
 * @returns {Object}
 */
function calculateLineAngleOfOutsideCanvas(type, shapePointNavigation, linePointsOfOneVertexIndex) {
  var startPointIndex = linePointsOfOneVertexIndex.startPointIndex,
      endPointIndex1 = linePointsOfOneVertexIndex.endPointIndex1,
      endPointIndex2 = linePointsOfOneVertexIndex.endPointIndex2;

  var horizontalVerticalAngle = type === 'x' ? 180 : 270;

  return (0, _tuiCodeSnippet.map)([endPointIndex1, endPointIndex2], function (pointIndex) {
    var startPoint = shapePointNavigation[startPointIndex];
    var endPoint = shapePointNavigation[pointIndex];
    var diffY = startPoint.y - endPoint.y;
    var diffX = startPoint.x - endPoint.x;

    return Math.atan2(diffY, diffX) * 180 / Math.PI - horizontalVerticalAngle;
  });
}

/* eslint-disable complexity */
/**
 * Calculate a point line outside the canvas for horizontal.
 * @param {number} startPointIndex - start point index
 * @param {boolean} flipX - flip x statux
 * @param {boolean} flipY - flip y statux
 * @returns {boolean} flipY - flip y statux
 */
function isReverseLeftPositionForFlip(startPointIndex, flipX, flipY) {
  return (!flipX && flipY || !flipX && !flipY) && startPointIndex === 0 || (flipX && flipY || flipX && !flipY) && startPointIndex === 1 || (!flipX && !flipY || !flipX && flipY) && startPointIndex === 2 || (flipX && !flipY || flipX && flipY) && startPointIndex === 3;
}
/* eslint-enable complexity */

/* eslint-disable complexity */
/**
 * Calculate a point line outside the canvas for vertical.
 * @param {number} startPointIndex - start point index
 * @param {boolean} flipX - flip x statux
 * @param {boolean} flipY - flip y statux
 * @returns {boolean} flipY - flip y statux
 */
function isReverseTopPositionForFlip(startPointIndex, flipX, flipY) {
  return (flipX && !flipY || !flipX && !flipY) && startPointIndex === 0 || (!flipX && !flipY || flipX && !flipY) && startPointIndex === 1 || (flipX && flipY || !flipX && flipY) && startPointIndex === 2 || (!flipX && flipY || flipX && flipY) && startPointIndex === 3;
}
/* eslint-enable complexity */

/**
 * Shape edge points
 * @param {fabric.Object} shapeObj - Selected shape object on canvas
 * @returns {Array} shapeEdgePoint - shape edge positions
 */
function getShapeEdgePoint(shapeObj) {
  return [shapeObj.getPointByOrigin('left', 'top'), shapeObj.getPointByOrigin('right', 'top'), shapeObj.getPointByOrigin('left', 'bottom'), shapeObj.getPointByOrigin('right', 'bottom')];
}

/**
 * Rotated shape dimension
 * @param {fabric.Object} shapeObj - Shape object
 * @returns {Object} Rotated shape dimension
 */
function getRotatedDimension(shapeObj) {
  var _getShapeEdgePoint = getShapeEdgePoint(shapeObj),
      _getShapeEdgePoint$ = _getShapeEdgePoint[0],
      ax = _getShapeEdgePoint$.x,
      ay = _getShapeEdgePoint$.y,
      _getShapeEdgePoint$2 = _getShapeEdgePoint[1],
      bx = _getShapeEdgePoint$2.x,
      by = _getShapeEdgePoint$2.y,
      _getShapeEdgePoint$3 = _getShapeEdgePoint[2],
      cx = _getShapeEdgePoint$3.x,
      cy = _getShapeEdgePoint$3.y,
      _getShapeEdgePoint$4 = _getShapeEdgePoint[3],
      dx = _getShapeEdgePoint$4.x,
      dy = _getShapeEdgePoint$4.y;

  var left = Math.min(ax, bx, cx, dx);
  var top = Math.min(ay, by, cy, dy);
  var right = Math.max(ax, bx, cx, dx);
  var bottom = Math.max(ay, by, cy, dy);

  return {
    left: left,
    top: top,
    right: right,
    bottom: bottom,
    width: right - left,
    height: bottom - top
  };
}

/**
 * Make fill image
 * @param {HTMLImageElement} copiedCanvasElement - html image element
 * @param {number} currentCanvasImageAngle - current canvas angle
 * @param {Array} filterOption - filter option
 * @returns {fabric.Image}
 * @private
 */
function makeFillImage(copiedCanvasElement, currentCanvasImageAngle, filterOption) {
  var fillImage = new fabric.Image(copiedCanvasElement);

  (0, _tuiCodeSnippet.forEach)(_tuiCodeSnippet.extend.apply(undefined, [{}].concat(filterOption)), function (value, key) {
    var fabricFilterClassName = (0, _util.capitalizeString)(key);
    var filter = new fabric.Image.filters[fabricFilterClassName](_defineProperty({}, FILTER_OPTION_MAP[key], value));
    fillImage.filters.push(filter);
  });
  fillImage.applyFilters();

  (0, _util.setCustomProperty)(fillImage, {
    originalAngle: currentCanvasImageAngle,
    fillImageMaxSize: Math.max(fillImage.width, fillImage.height)
  });
  _shapeResizeHelper2.default.adjustOriginToCenter(fillImage);

  return fillImage;
}

/***/ }),

/***/ "./src/js/helper/shapeResizeHelper.js":
/*!********************************************!*\
  !*** ./src/js/helper/shapeResizeHelper.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @author NHN. FE Development Team <dl_javascript@nhn.com>
 * @fileoverview Shape resize helper
 */
var DIVISOR = {
  rect: 1,
  circle: 2,
  triangle: 1
};
var DIMENSION_KEYS = {
  rect: {
    w: 'width',
    h: 'height'
  },
  circle: {
    w: 'rx',
    h: 'ry'
  },
  triangle: {
    w: 'width',
    h: 'height'
  }
};

/**
 * Set the start point value to the shape object
 * @param {fabric.Object} shape - Shape object
 * @ignore
 */
function setStartPoint(shape) {
  var originX = shape.originX,
      originY = shape.originY;

  var originKey = originX.substring(0, 1) + originY.substring(0, 1);

  shape.startPoint = shape.origins[originKey];
}

/**
 * Get the positions of ratated origin by the pointer value
 * @param {{x: number, y: number}} origin - Origin value
 * @param {{x: number, y: number}} pointer - Pointer value
 * @param {number} angle - Rotating angle
 * @returns {Object} Postions of origin
 * @ignore
 */
function getPositionsOfRotatedOrigin(origin, pointer, angle) {
  var sx = origin.x;
  var sy = origin.y;
  var px = pointer.x;
  var py = pointer.y;
  var r = angle * Math.PI / 180;
  var rx = (px - sx) * Math.cos(r) - (py - sy) * Math.sin(r) + sx;
  var ry = (px - sx) * Math.sin(r) + (py - sy) * Math.cos(r) + sy;

  return {
    originX: sx > rx ? 'right' : 'left',
    originY: sy > ry ? 'bottom' : 'top'
  };
}

/**
 * Whether the shape has the center origin or not
 * @param {fabric.Object} shape - Shape object
 * @returns {boolean} State
 * @ignore
 */
function hasCenterOrigin(shape) {
  return shape.originX === 'center' && shape.originY === 'center';
}

/**
 * Adjust the origin of shape by the start point
 * @param {{x: number, y: number}} pointer - Pointer value
 * @param {fabric.Object} shape - Shape object
 * @ignore
 */
function adjustOriginByStartPoint(pointer, shape) {
  var centerPoint = shape.getPointByOrigin('center', 'center');
  var angle = -shape.angle;
  var originPositions = getPositionsOfRotatedOrigin(centerPoint, pointer, angle);
  var originX = originPositions.originX,
      originY = originPositions.originY;

  var origin = shape.getPointByOrigin(originX, originY);
  var left = shape.left - (centerPoint.x - origin.x);
  var top = shape.top - (centerPoint.y - origin.y);

  shape.set({
    originX: originX,
    originY: originY,
    left: left,
    top: top
  });

  shape.setCoords();
}

/**
 * Adjust the origin of shape by the moving pointer value
 * @param {{x: number, y: number}} pointer - Pointer value
 * @param {fabric.Object} shape - Shape object
 * @ignore
 */
function adjustOriginByMovingPointer(pointer, shape) {
  var origin = shape.startPoint;
  var angle = -shape.angle;
  var originPositions = getPositionsOfRotatedOrigin(origin, pointer, angle);
  var originX = originPositions.originX,
      originY = originPositions.originY;


  shape.setPositionByOrigin(origin, originX, originY);
  shape.setCoords();
}

/**
 * Adjust the dimension of shape on firing scaling event
 * @param {fabric.Object} shape - Shape object
 * @ignore
 */
function adjustDimensionOnScaling(shape) {
  var type = shape.type,
      scaleX = shape.scaleX,
      scaleY = shape.scaleY;

  var dimensionKeys = DIMENSION_KEYS[type];
  var width = shape[dimensionKeys.w] * scaleX;
  var height = shape[dimensionKeys.h] * scaleY;

  if (shape.isRegular) {
    var maxScale = Math.max(scaleX, scaleY);

    width = shape[dimensionKeys.w] * maxScale;
    height = shape[dimensionKeys.h] * maxScale;
  }

  var options = {
    hasControls: false,
    hasBorders: false,
    scaleX: 1,
    scaleY: 1
  };

  options[dimensionKeys.w] = width;
  options[dimensionKeys.h] = height;

  shape.set(options);
}

/**
 * Adjust the dimension of shape on firing mouse move event
 * @param {{x: number, y: number}} pointer - Pointer value
 * @param {fabric.Object} shape - Shape object
 * @ignore
 */
function adjustDimensionOnMouseMove(pointer, shape) {
  var type = shape.type,
      strokeWidth = shape.strokeWidth,
      origin = shape.startPoint;

  var divisor = DIVISOR[type];
  var dimensionKeys = DIMENSION_KEYS[type];
  var isTriangle = !!(shape.type === 'triangle');
  var options = {};
  var width = Math.abs(origin.x - pointer.x) / divisor;
  var height = Math.abs(origin.y - pointer.y) / divisor;

  if (width > strokeWidth) {
    width -= strokeWidth / divisor;
  }

  if (height > strokeWidth) {
    height -= strokeWidth / divisor;
  }

  if (shape.isRegular) {
    width = height = Math.max(width, height);

    if (isTriangle) {
      height = Math.sqrt(3) / 2 * width;
    }
  }

  options[dimensionKeys.w] = width;
  options[dimensionKeys.h] = height;

  shape.set(options);
}

module.exports = {
  /**
   * Set each origin value to shape
   * @param {fabric.Object} shape - Shape object
   */
  setOrigins: function setOrigins(shape) {
    var leftTopPoint = shape.getPointByOrigin('left', 'top');
    var rightTopPoint = shape.getPointByOrigin('right', 'top');
    var rightBottomPoint = shape.getPointByOrigin('right', 'bottom');
    var leftBottomPoint = shape.getPointByOrigin('left', 'bottom');

    shape.origins = {
      lt: leftTopPoint,
      rt: rightTopPoint,
      rb: rightBottomPoint,
      lb: leftBottomPoint
    };
  },


  /**
   * Resize the shape
   * @param {fabric.Object} shape - Shape object
   * @param {{x: number, y: number}} pointer - Mouse pointer values on canvas
   * @param {boolean} isScaling - Whether the resizing action is scaling or not
   */
  resize: function resize(shape, pointer, isScaling) {
    if (hasCenterOrigin(shape)) {
      adjustOriginByStartPoint(pointer, shape);
      setStartPoint(shape);
    }

    if (isScaling) {
      adjustDimensionOnScaling(shape, pointer);
    } else {
      adjustDimensionOnMouseMove(pointer, shape);
    }

    adjustOriginByMovingPointer(pointer, shape);
  },


  /**
   * Adjust the origin position of shape to center
   * @param {fabric.Object} shape - Shape object
   */
  adjustOriginToCenter: function adjustOriginToCenter(shape) {
    var centerPoint = shape.getPointByOrigin('center', 'center');
    var originX = shape.originX,
        originY = shape.originY;

    var origin = shape.getPointByOrigin(originX, originY);
    var left = shape.left + (centerPoint.x - origin.x);
    var top = shape.top + (centerPoint.y - origin.y);

    shape.set({
      hasControls: true,
      hasBorders: true,
      originX: 'center',
      originY: 'center',
      left: left,
      top: top
    });

    shape.setCoords(); // For left, top properties
  }
};

/***/ }),

/***/ "./src/js/imageEditor.js":
/*!*******************************!*\
  !*** ./src/js/imageEditor.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author NHN. FE Development Team <dl_javascript@nhn.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @fileoverview Image-editor application class
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _tuiCodeSnippet = __webpack_require__(/*! tui-code-snippet */ "tui-code-snippet");

var _tuiCodeSnippet2 = _interopRequireDefault(_tuiCodeSnippet);

var _invoker3 = __webpack_require__(/*! @/invoker */ "./src/js/invoker.js");

var _invoker4 = _interopRequireDefault(_invoker3);

var _command = __webpack_require__(/*! @/factory/command */ "./src/js/factory/command.js");

var _command2 = _interopRequireDefault(_command);

var _graphics = __webpack_require__(/*! @/graphics */ "./src/js/graphics.js");

var _graphics2 = _interopRequireDefault(_graphics);

var _selectionModifyHelper = __webpack_require__(/*! @/helper/selectionModifyHelper */ "./src/js/helper/selectionModifyHelper.js");

var _util = __webpack_require__(/*! @/util */ "./src/js/util.js");

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var isUndefined = _tuiCodeSnippet2.default.isUndefined,
    forEach = _tuiCodeSnippet2.default.forEach,
    CustomEvents = _tuiCodeSnippet2.default.CustomEvents;
var MOUSE_DOWN = _consts.eventNames.MOUSE_DOWN,
    MOUSE_UP = _consts.eventNames.MOUSE_UP,
    MOUSE_MOVE = _consts.eventNames.MOUSE_MOVE,
    MOUSE_WHEEL = _consts.eventNames.MOUSE_WHEEL,
    OBJECT_MOVED = _consts.eventNames.OBJECT_MOVED,
    OBJECT_SCALED = _consts.eventNames.OBJECT_SCALED,
    OBJECT_ACTIVATED = _consts.eventNames.OBJECT_ACTIVATED,
    OBJECT_ROTATED = _consts.eventNames.OBJECT_ROTATED,
    OBJECT_ADDED = _consts.eventNames.OBJECT_ADDED,
    OBJECT_MODIFIED = _consts.eventNames.OBJECT_MODIFIED,
    ADD_TEXT = _consts.eventNames.ADD_TEXT,
    ADD_OBJECT = _consts.eventNames.ADD_OBJECT,
    TEXT_EDITING = _consts.eventNames.TEXT_EDITING,
    TEXT_CHANGED = _consts.eventNames.TEXT_CHANGED,
    ICON_CREATE_RESIZE = _consts.eventNames.ICON_CREATE_RESIZE,
    ICON_CREATE_END = _consts.eventNames.ICON_CREATE_END,
    SELECTION_CLEARED = _consts.eventNames.SELECTION_CLEARED,
    SELECTION_CREATED = _consts.eventNames.SELECTION_CREATED,
    ADD_OBJECT_AFTER = _consts.eventNames.ADD_OBJECT_AFTER;

/**
 * Image filter result
 * @typedef {object} FilterResult
 * @property {string} type - filter type like 'mask', 'Grayscale' and so on
 * @property {string} action - action type like 'add', 'remove'
 */

/**
 * Flip status
 * @typedef {object} FlipStatus
 * @property {boolean} flipX - x axis
 * @property {boolean} flipY - y axis
 * @property {Number} angle - angle
 */
/**
 * Rotation status
 * @typedef {Number} RotateStatus
 * @property {Number} angle - angle
 */

/**
 * Old and new Size
 * @typedef {object} SizeChange
 * @property {Number} oldWidth - old width
 * @property {Number} oldHeight - old height
 * @property {Number} newWidth - new width
 * @property {Number} newHeight - new height
 */

/**
 * @typedef {string} ErrorMsg - {string} error message
 */

/**
 * @typedef {object} ObjectProps - graphics object properties
 * @property {number} objId -  object id
 * @property {string} type - object type
 * @property {string} text - text content
 * @property {(string | number)} left - Left
 * @property {(string | number)} top - Top
 * @property {(string | number)} width - Width
 * @property {(string | number)} height - Height
 * @property {string} fill - Color
 * @property {string} stroke - Stroke
 * @property {(string | number)} strokeWidth - StrokeWidth
 * @property {string} fontFamily - Font type for text
 * @property {number} fontSize - Font Size
 * @property {string} fontStyle - Type of inclination (normal / italic)
 * @property {string} fontWeight - Type of thicker or thinner looking (normal / bold)
 * @property {string} textAlign - Type of text align (left / center / right)
 * @property {string} textDecoration - Type of line (underline / line-through / overline)
 */

/**
 * Shape filter option
 * @typedef {object.<string, number>} ShapeFilterOption
 */

/**
 * Shape filter option
 * @typedef {object} ShapeFillOption - fill option of shape
 * @property {string} type - fill type ('color' or 'filter')
 * @property {Array.<ShapeFillFilterOption>} [filter] - {@link ShapeFilterOption} List.
 *  only applies to filter types
 *  (ex: \[\{pixelate: 20\}, \{blur: 0.3\}\])
 * @property {string} [color] - Shape foreground color (ex: '#fff', 'transparent')
 */

/**
 * Image editor
 * @class
 * @param {string|HTMLElement} wrapper - Wrapper's element or selector
 * @param {Object} [options] - Canvas max width & height of css
 *  @param {number} [options.includeUI] - Use the provided UI
 *    @param {Object} [options.includeUI.loadImage] - Basic editing image
 *      @param {string} options.includeUI.loadImage.path - image path
 *      @param {string} options.includeUI.loadImage.name - image name
 *    @param {Object} [options.includeUI.theme] - Theme object
 *    @param {Array} [options.includeUI.menu] - It can be selected when only specific menu is used, Default values are \['crop', 'flip', 'rotate', 'draw', 'shape', 'icon', 'text', 'mask', 'filter'\].
 *    @param {string} [options.includeUI.initMenu] - The first menu to be selected and started.
 *    @param {Object} [options.includeUI.uiSize] - ui size of editor
 *      @param {string} options.includeUI.uiSize.width - width of ui
 *      @param {string} options.includeUI.uiSize.height - height of ui
 *    @param {string} [options.includeUI.menuBarPosition=bottom] - Menu bar position('top', 'bottom', 'left', 'right')
 *  @param {number} options.cssMaxWidth - Canvas css-max-width
 *  @param {number} options.cssMaxHeight - Canvas css-max-height
 *  @param {Object} [options.selectionStyle] - selection style
 *  @param {string} [options.selectionStyle.cornerStyle] - selection corner style
 *  @param {number} [options.selectionStyle.cornerSize] - selection corner size
 *  @param {string} [options.selectionStyle.cornerColor] - selection corner color
 *  @param {string} [options.selectionStyle.cornerStrokeColor] = selection corner stroke color
 *  @param {boolean} [options.selectionStyle.transparentCorners] - selection corner transparent
 *  @param {number} [options.selectionStyle.lineWidth] - selection line width
 *  @param {string} [options.selectionStyle.borderColor] - selection border color
 *  @param {number} [options.selectionStyle.rotatingPointOffset] - selection rotating point length
 *  @param {Boolean} [options.usageStatistics=true] - Let us know the hostname. If you don't want to send the hostname, please set to false.
 * @example
 * var ImageEditor = require('tui-image-editor');
 * var blackTheme = require('./js/theme/black-theme.js');
 * var instance = new ImageEditor(document.querySelector('#tui-image-editor'), {
 *   includeUI: {
 *     loadImage: {
 *       path: 'img/sampleImage.jpg',
 *       name: 'SampleImage'
 *     },
 *     theme: blackTheme, // or whiteTheme
 *     menu: ['shape', 'filter'],
 *     initMenu: 'filter',
 *     uiSize: {
 *         width: '1000px',
 *         height: '700px'
 *     },
 *     menuBarPosition: 'bottom'
 *   },
 *   cssMaxWidth: 700,
 *   cssMaxHeight: 500,
 *   selectionStyle: {
 *     cornerSize: 20,
 *     rotatingPointOffset: 70
 *   }
 * });
 */

var ImageEditor = function () {
  function ImageEditor(wrapper, options) {
    _classCallCheck(this, ImageEditor);

    options = _tuiCodeSnippet2.default.extend({
      includeUI: false,
      usageStatistics: true
    }, options);

    this.mode = null;

    this.activeObjectId = null;

    /**
     * Invoker
     * @type {Invoker}
     * @private
     */
    this._invoker = new _invoker4.default();

    /**
     * Graphics instance
     * @type {Graphics}
     * @private
     */
    this._graphics = new _graphics2.default(wrapper, {
      backgroundColor: options.backgroundColor ? options.backgroundColor : 'transparent',
      cssMaxWidth: options.cssMaxWidth,
      cssMaxHeight: options.cssMaxHeight,
      preserveObjectStacking: options.preserveObjectStacking ? options.preserveObjectStacking : false
    });

    /**
     * Event handler list
     * @type {Object}
     * @private
     */
    this._handlers = {
      keydown: this._onKeyDown.bind(this),
      mousedown: this._onMouseDown.bind(this),
      mouseup: this._onMouseUp.bind(this),
      mousemove: this._onMouseMove.bind(this),
      mousewheel: this._onMouseWheel.bind(this),
      objectActivated: this._onObjectActivated.bind(this),
      objectMoved: this._onObjectMoved.bind(this),
      objectScaled: this._onObjectScaled.bind(this),
      objectRotated: this._onObjectRotated.bind(this),
      objectAdded: this._onObjectAdded.bind(this),
      objectModified: this._onObjectModified.bind(this),
      createdPath: this._onCreatedPath,
      addText: this._onAddText.bind(this),
      addObject: this._onAddObject.bind(this),
      textEditing: this._onTextEditing.bind(this),
      textChanged: this._onTextChanged.bind(this),
      iconCreateResize: this._onIconCreateResize.bind(this),
      iconCreateEnd: this._onIconCreateEnd.bind(this),
      selectionCleared: this._selectionCleared.bind(this),
      selectionCreated: this._selectionCreated.bind(this)
    };

    this._attachInvokerEvents();
    this._attachGraphicsEvents();
    this._attachDomEvents();
    this._setSelectionStyle(options.selectionStyle, {
      applyCropSelectionStyle: options.applyCropSelectionStyle,
      applyGroupSelectionStyle: options.applyGroupSelectionStyle
    });

    if (options.usageStatistics) {
      (0, _util.sendHostName)();
    }
    fabric.enableGLFiltering = false;
  }

  /**
   * Set selection style by init option
   * @param {Object} selectionStyle - Selection styles
   * @param {Object} applyTargets - Selection apply targets
   *   @param {boolean} applyCropSelectionStyle - whether apply with crop selection style or not
   *   @param {boolean} applyGroupSelectionStyle - whether apply with group selection style or not
   * @private
   */


  _createClass(ImageEditor, [{
    key: '_setSelectionStyle',
    value: function _setSelectionStyle(selectionStyle, _ref) {
      var applyCropSelectionStyle = _ref.applyCropSelectionStyle,
          applyGroupSelectionStyle = _ref.applyGroupSelectionStyle;

      if (selectionStyle) {
        this._graphics.setSelectionStyle(selectionStyle);
      }

      if (applyCropSelectionStyle) {
        this._graphics.setCropSelectionStyle(selectionStyle);
      }

      if (applyGroupSelectionStyle) {
        this.on('selectionCreated', function (eventTarget) {
          if (eventTarget.type === 'activeSelection') {
            eventTarget.set(selectionStyle);
          }
        });
      }
    }

    /**
     * Attach invoker events
     * @private
     */

  }, {
    key: '_attachInvokerEvents',
    value: function _attachInvokerEvents() {
      var UNDO_STACK_CHANGED = _consts.eventNames.UNDO_STACK_CHANGED,
          REDO_STACK_CHANGED = _consts.eventNames.REDO_STACK_CHANGED;

      /**
       * Undo stack changed event
       * @event ImageEditor#undoStackChanged
       * @param {Number} length - undo stack length
       * @example
       * imageEditor.on('undoStackChanged', function(length) {
       *     console.log(length);
       * });
       */

      this._invoker.on(UNDO_STACK_CHANGED, this.fire.bind(this, UNDO_STACK_CHANGED));
      /**
       * Redo stack changed event
       * @event ImageEditor#redoStackChanged
       * @param {Number} length - redo stack length
       * @example
       * imageEditor.on('redoStackChanged', function(length) {
       *     console.log(length);
       * });
       */
      this._invoker.on(REDO_STACK_CHANGED, this.fire.bind(this, REDO_STACK_CHANGED));
    }

    /**
     * Attach canvas events
     * @private
     */

  }, {
    key: '_attachGraphicsEvents',
    value: function _attachGraphicsEvents() {
      var _graphics$on;

      this._graphics.on((_graphics$on = {}, _defineProperty(_graphics$on, MOUSE_DOWN, this._handlers.mousedown), _defineProperty(_graphics$on, MOUSE_UP, this._handlers.mouseup), _defineProperty(_graphics$on, MOUSE_MOVE, this._handlers.mousemove), _defineProperty(_graphics$on, MOUSE_WHEEL, this._handlers.mousewheel), _defineProperty(_graphics$on, OBJECT_MOVED, this._handlers.objectMoved), _defineProperty(_graphics$on, OBJECT_SCALED, this._handlers.objectScaled), _defineProperty(_graphics$on, OBJECT_ROTATED, this._handlers.objectRotated), _defineProperty(_graphics$on, OBJECT_ACTIVATED, this._handlers.objectActivated), _defineProperty(_graphics$on, OBJECT_ADDED, this._handlers.objectAdded), _defineProperty(_graphics$on, OBJECT_MODIFIED, this._handlers.objectModified), _defineProperty(_graphics$on, ADD_TEXT, this._handlers.addText), _defineProperty(_graphics$on, ADD_OBJECT, this._handlers.addObject), _defineProperty(_graphics$on, TEXT_EDITING, this._handlers.textEditing), _defineProperty(_graphics$on, TEXT_CHANGED, this._handlers.textChanged), _defineProperty(_graphics$on, ICON_CREATE_RESIZE, this._handlers.iconCreateResize), _defineProperty(_graphics$on, ICON_CREATE_END, this._handlers.iconCreateEnd), _defineProperty(_graphics$on, SELECTION_CLEARED, this._handlers.selectionCleared), _defineProperty(_graphics$on, SELECTION_CREATED, this._handlers.selectionCreated), _graphics$on));
    }

    /**
     * Attach dom events
     * @private
     */

  }, {
    key: '_attachDomEvents',
    value: function _attachDomEvents() {
      // ImageEditor supports IE 9 higher
      document.addEventListener('keydown', this._handlers.keydown);
    }

    /**
     * Detach dom events
     * @private
     */

  }, {
    key: '_detachDomEvents',
    value: function _detachDomEvents() {
      // ImageEditor supports IE 9 higher
      document.removeEventListener('keydown', this._handlers.keydown);
    }

    /**
     * Keydown event handler
     * @param {KeyboardEvent} e - Event object
     * @private
     */
    /* eslint-disable complexity */

  }, {
    key: '_onKeyDown',
    value: function _onKeyDown(e) {
      var ctrlKey = e.ctrlKey,
          keyCode = e.keyCode,
          metaKey = e.metaKey;

      var isModifierKey = ctrlKey || metaKey;

      if (isModifierKey) {
        if (keyCode === _consts.keyCodes.C) {
          this._graphics.resetTargetObjectForCopyPaste();
        } else if (keyCode === _consts.keyCodes.V) {
          this._graphics.pasteObject();
          this.clearRedoStack();
        } else if (keyCode === _consts.keyCodes.Z) {
          // There is no error message on shortcut when it's empty
          this.undo()['catch'](function () {});
        } else if (keyCode === _consts.keyCodes.Y) {
          // There is no error message on shortcut when it's empty
          this.redo()['catch'](function () {});
        }
      }

      var isDeleteKey = keyCode === _consts.keyCodes.BACKSPACE || keyCode === _consts.keyCodes.DEL;
      var isRemoveReady = this._graphics.isReadyRemoveObject();

      if (!this.isColorPickerInputBoxEditing && isRemoveReady && isDeleteKey) {
        e.preventDefault();
        this.removeActiveObject();
      }

      this.fire(_consts.eventNames.KEY_DOWN, e);
    }

    /**
     * Remove Active Object
     */

  }, {
    key: 'removeActiveObject',
    value: function removeActiveObject() {
      var activeObjectId = this._graphics.getActiveObjectIdForRemove();

      this.removeObject(activeObjectId);
    }

    /**
     * mouse down event handler
     * @param {Event} event - mouse down event
     * @param {Object} originPointer - origin pointer
     *  @param {Number} originPointer.x x position
     *  @param {Number} originPointer.y y position
     * @private
     */

  }, {
    key: '_onMouseDown',
    value: function _onMouseDown(event, originPointer) {
      /**
       * The mouse down event with position x, y on canvas
       * @event ImageEditor#mousedown
       * @param {Object} event - browser mouse event object
       * @param {Object} originPointer origin pointer
       *  @param {Number} originPointer.x x position
       *  @param {Number} originPointer.y y position
       * @example
       * imageEditor.on('mousedown', function(event, originPointer) {
       *     console.log(event);
       *     console.log(originPointer);
       *     if (imageEditor.hasFilter('colorFilter')) {
       *         imageEditor.applyFilter('colorFilter', {
       *             x: parseInt(originPointer.x, 10),
       *             y: parseInt(originPointer.y, 10)
       *         });
       *     }
       * });
       */

      this.fire(_consts.eventNames.MOUSE_DOWN, event, originPointer);
    }
  }, {
    key: '_onMouseUp',
    value: function _onMouseUp(event, originPointer) {
      this.fire(_consts.eventNames.MOUSE_UP, event, originPointer);
    }
  }, {
    key: '_onMouseMove',
    value: function _onMouseMove(event, originPointer) {
      this.fire(_consts.eventNames.MOUSE_MOVE, event, originPointer);
    }
  }, {
    key: '_onMouseWheel',
    value: function _onMouseWheel(event, originPointer) {
      this.fire(_consts.eventNames.MOUSE_WHEEL, event, originPointer);
    }

    /**
     * Add a 'addObject' command
     * @param {Object} obj - Fabric object
     * @private
     */

  }, {
    key: '_pushAddObjectCommand',
    value: function _pushAddObjectCommand(obj) {
      var command = _command2.default.create(_consts.commandNames.ADD_OBJECT, this._graphics, obj);
      this._invoker.pushUndoStack(command);
    }

    /**
     * Add a 'changeSelection' command
     * @param {fabric.Object} obj - selection object
     * @private
     */

  }, {
    key: '_pushModifyObjectCommand',
    value: function _pushModifyObjectCommand(obj) {
      var _this = this;

      var type = obj.type;

      var props = (0, _selectionModifyHelper.makeSelectionUndoData)(obj, function (item) {
        return (0, _selectionModifyHelper.makeSelectionUndoDatum)(_this._graphics.getObjectId(item), item, type === 'activeSelection');
      });
      var command = _command2.default.create(_consts.commandNames.CHANGE_SELECTION, this._graphics, props);
      command.execute(this._graphics, props);

      this._invoker.pushUndoStack(command);
    }

    /**
     * 'objectActivated' event handler
     * @param {ObjectProps} props - object properties
     * @private
     */

  }, {
    key: '_onObjectActivated',
    value: function _onObjectActivated(props) {
      /**
       * The event when object is selected(aka activated).
       * @event ImageEditor#objectActivated
       * @param {ObjectProps} objectProps - object properties
       * @example
       * imageEditor.on('objectActivated', function(props) {
       *     console.log(props);
       *     console.log(props.type);
       *     console.log(props.objId);
       * });
       */
      this.fire(_consts.eventNames.OBJECT_ACTIVATED, props);
    }

    /**
     * 'objectMoved' event handler
     * @param {ObjectProps} props - object properties
     * @private
     */

  }, {
    key: '_onObjectMoved',
    value: function _onObjectMoved(props) {
      /**
       * The event when object is moved
       * @event ImageEditor#objectMoved
       * @param {ObjectProps} props - object properties
       * @example
       * imageEditor.on('objectMoved', function(props) {
       *     console.log(props);
       *     console.log(props.type);
       * });
       */
      this.fire(_consts.eventNames.OBJECT_MOVED, props);
    }

    /**
     * 'objectScaled' event handler
     * @param {ObjectProps} props - object properties
     * @private
     */

  }, {
    key: '_onObjectScaled',
    value: function _onObjectScaled(props) {
      /**
       * The event when scale factor is changed
       * @event ImageEditor#objectScaled
       * @param {ObjectProps} props - object properties
       * @example
       * imageEditor.on('objectScaled', function(props) {
       *     console.log(props);
       *     console.log(props.type);
       * });
       */
      this.fire(_consts.eventNames.OBJECT_SCALED, props);
    }

    /**
     * 'objectRotated' event handler
     * @param {ObjectProps} props - object properties
     * @private
     */

  }, {
    key: '_onObjectRotated',
    value: function _onObjectRotated(props) {
      /**
       * The event when object angle is changed
       * @event ImageEditor#objectRotated
       * @param {ObjectProps} props - object properties
       * @example
       * imageEditor.on('objectRotated', function(props) {
       *     console.log(props);
       *     console.log(props.type);
       * });
       */
      this.fire(_consts.eventNames.OBJECT_ROTATED, props);
    }

    /**
     * Get current drawing mode
     * @returns {string}
     * @example
     * // Image editor drawing mode
     * //
     * //    NORMAL: 'NORMAL'
     * //    CROPPER: 'CROPPER'
     * //    FREE_DRAWING: 'FREE_DRAWING'
     * //    LINE_DRAWING: 'LINE_DRAWING'
     * //    TEXT: 'TEXT'
     * //
     * if (imageEditor.getDrawingMode() === 'FREE_DRAWING') {
     *     imageEditor.stopDrawingMode();
     * }
     */

  }, {
    key: 'getDrawingMode',
    value: function getDrawingMode() {
      return this._graphics.getDrawingMode();
    }

    /**
     * Clear all objects
     * @returns {Promise}
     * @example
     * imageEditor.clearObjects();
     */

  }, {
    key: 'clearObjects',
    value: function clearObjects() {
      return this.execute(_consts.commandNames.CLEAR_OBJECTS);
    }

    /**
     * Deactivate all objects
     * @example
     * imageEditor.deactivateAll();
     */

  }, {
    key: 'deactivateAll',
    value: function deactivateAll() {
      this._graphics.deactivateAll();
      this._graphics.renderAll();
    }

    /**
     * discard selction
     * @example
     * imageEditor.discardSelection();
     */

  }, {
    key: 'discardSelection',
    value: function discardSelection() {
      this._graphics.discardSelection();
    }

    /**
     * selectable status change
     * @param {boolean} selectable - selectable status
     * @example
     * imageEditor.changeSelectableAll(false); // or true
     */

  }, {
    key: 'changeSelectableAll',
    value: function changeSelectableAll(selectable) {
      this._graphics.changeSelectableAll(selectable);
    }

    /**
     * Clear history
     */

  }, {
    key: 'clearHistory',
    value: function clearHistory() {
      this._invoker.clearUndoStack();
      this._invoker.clearRedoStack();
      this._invoker.unlock();
    }

    /**
     * Invoke command
     * @param {String} commandName - Command name
     * @param {...*} args - Arguments for creating command
     * @returns {Promise}
     * @private
     */

  }, {
    key: 'execute',
    value: function execute(commandName) {
      var _invoker;

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // Inject an Graphics instance as first parameter
      var theArgs = [this._graphics].concat(args);

      return (_invoker = this._invoker).execute.apply(_invoker, [commandName].concat(theArgs));
    }

    /**
     * Invoke command
     * @param {String} commandName - Command name
     * @param {...*} args - Arguments for creating command
     * @returns {Promise}
     * @private
     */

  }, {
    key: 'executeSilent',
    value: function executeSilent(commandName) {
      var _invoker2;

      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      // Inject an Graphics instance as first parameter
      var theArgs = [this._graphics].concat(args);

      return (_invoker2 = this._invoker).executeSilent.apply(_invoker2, [commandName].concat(theArgs));
    }

    /**
     * Undo
     * @param {number} [iterationCount=1] - Iteration count of undo
     * @returns {Promise}
     * @example
     * imageEditor.undo();
     */

  }, {
    key: 'undo',
    value: function undo() {
      var _this2 = this;

      var iterationCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      var promise = _util.Promise.resolve();

      for (var i = 0; i < iterationCount; i += 1) {
        promise = promise.then(function () {
          return _this2._invoker.undo();
        });
      }

      return promise;
    }

    /**
     * Redo
     * @param {number} [iterationCount=1] - Iteration count of redo
     * @returns {Promise}
     * @example
     * imageEditor.redo();
     */

  }, {
    key: 'redo',
    value: function redo() {
      var _this3 = this;

      var iterationCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      var promise = _util.Promise.resolve();

      for (var i = 0; i < iterationCount; i += 1) {
        promise = promise.then(function () {
          return _this3._invoker.redo();
        });
      }

      return promise;
    }

    /**
     * Zoom
     * @param {number} x - x axis of center point for zoom
     * @param {number} y - y axis of center point for zoom
     * @param {number} zoomLevel - level of zoom(1.0 ~ 5.0)
     */

  }, {
    key: 'zoom',
    value: function zoom(_ref2) {
      var x = _ref2.x,
          y = _ref2.y,
          zoomLevel = _ref2.zoomLevel;

      this._graphics.zoom({ x: x, y: y }, zoomLevel);
    }

    /**
     * Reset zoom. Change zoom level to 1.0
     */

  }, {
    key: 'resetZoom',
    value: function resetZoom() {
      this._graphics.resetZoom();
    }
  }, {
    key: 'canvasZoom',
    value: function canvasZoom(_ref3) {
      var x = _ref3.x,
          y = _ref3.y,
          zoomLevel = _ref3.zoomLevel;

      this._graphics.canvasZoom({ x: x, y: y, zoomLevel: zoomLevel });
    }
  }, {
    key: 'getCanvasZoom',
    value: function getCanvasZoom() {
      return this._graphics.getCanvasZoom();
    }
  }, {
    key: 'resetCanvasZoom',
    value: function resetCanvasZoom() {
      return this._graphics.canvasZoom(1.0);
    }

    /**
     * Load image from file
     * @param {File} imgFile - Image file
     * @param {string} [imageName] - imageName
     * @returns {Promise<SizeChange, ErrorMsg>}
     * @example
     * imageEditor.loadImageFromFile(file).then(result => {
     *      console.log('old : ' + result.oldWidth + ', ' + result.oldHeight);
     *      console.log('new : ' + result.newWidth + ', ' + result.newHeight);
     * });
     */

  }, {
    key: 'loadImageFromFile',
    value: function loadImageFromFile(imgFile, imageName) {
      if (!imgFile) {
        return _util.Promise.reject(_consts.rejectMessages.invalidParameters);
      }

      var imgUrl = URL.createObjectURL(imgFile);
      imageName = imageName || imgFile.name;

      return this.loadImageFromURL(imgUrl, imageName).then(function (value) {
        URL.revokeObjectURL(imgFile);

        return value;
      });
    }

    /**
     * Load image from url
     * @param {string} url - File url
     * @param {string} imageName - imageName
     * @returns {Promise<SizeChange, ErrorMsg>}
     * @example
     * imageEditor.loadImageFromURL('http://url/testImage.png', 'lena').then(result => {
     *      console.log('old : ' + result.oldWidth + ', ' + result.oldHeight);
     *      console.log('new : ' + result.newWidth + ', ' + result.newHeight);
     * });
     */

  }, {
    key: 'loadImageFromURL',
    value: function loadImageFromURL(url, imageName) {
      if (!imageName || !url) {
        return _util.Promise.reject(_consts.rejectMessages.invalidParameters);
      }

      return this.execute(_consts.commandNames.LOAD_IMAGE, imageName, url);
    }

    /**
     * Add image object on canvas
     * @param {string} imgUrl - Image url to make object
     * @returns {Promise<ObjectProps, ErrorMsg>}
     * @example
     * imageEditor.addImageObject('path/fileName.jpg').then(objectProps => {
     *     console.log(ojectProps.objId);
     * });
     */

  }, {
    key: 'addImageObject',
    value: function addImageObject(imgUrl) {
      if (!imgUrl) {
        return _util.Promise.reject(_consts.rejectMessages.invalidParameters);
      }

      return this.execute(_consts.commandNames.ADD_IMAGE_OBJECT, imgUrl);
    }

    /**
     * Start a drawing mode. If the current mode is not 'NORMAL', 'stopDrawingMode()' will be called first.
     * @param {String} mode Can be one of <I>'CROPPER', 'FREE_DRAWING', 'LINE_DRAWING', 'TEXT', 'SHAPE'</I>
     * @param {Object} [option] parameters of drawing mode, it's available with 'FREE_DRAWING', 'LINE_DRAWING'
     *  @param {Number} [option.width] brush width
     *  @param {String} [option.color] brush color
     *  @param {Object} [option.arrowType] arrow decorate
     *    @param {string} [option.arrowType.tail] arrow decorate for tail. 'chevron' or 'triangle'
     *    @param {string} [option.arrowType.head] arrow decorate for head. 'chevron' or 'triangle'
     * @returns {boolean} true if success or false
     * @example
     * imageEditor.startDrawingMode('FREE_DRAWING', {
     *      width: 10,
     *      color: 'rgba(255,0,0,0.5)'
     * });
     * imageEditor.startDrawingMode('LINE_DRAWING', {
     *      width: 10,
     *      color: 'rgba(255,0,0,0.5)',
     *      arrowType: {
     *          tail: 'chevron' // triangle
     *      }
     * });
     *
     */

  }, {
    key: 'startDrawingMode',
    value: function startDrawingMode(mode, option) {
      return this._graphics.startDrawingMode(mode, option);
    }

    /**
     * Stop the current drawing mode and back to the 'NORMAL' mode
     * @example
     * imageEditor.stopDrawingMode();
     */

  }, {
    key: 'stopDrawingMode',
    value: function stopDrawingMode() {
      this._graphics.stopDrawingMode();
    }

    /**
     * Crop this image with rect
     * @param {Object} rect crop rect
     *  @param {Number} rect.left left position
     *  @param {Number} rect.top top position
     *  @param {Number} rect.width width
     *  @param {Number} rect.height height
     * @returns {Promise}
     * @example
     * imageEditor.crop(imageEditor.getCropzoneRect());
     */

  }, {
    key: 'crop',
    value: function crop(rect) {
      var data = this._graphics.getCroppedImageData(rect);
      if (!data) {
        return _util.Promise.reject(_consts.rejectMessages.invalidParameters);
      }

      return this.loadImageFromURL(data.url, data.imageName);
    }

    /**
     * Get the cropping rect
     * @returns {Object}  {{left: number, top: number, width: number, height: number}} rect
     */

  }, {
    key: 'getCropzoneRect',
    value: function getCropzoneRect() {
      return this._graphics.getCropzoneRect();
    }

    /**
     * Set the cropping rect
     * @param {number} [mode] crop rect mode [1, 1.5, 1.3333333333333333, 1.25, 1.7777777777777777]
     */

  }, {
    key: 'setCropzoneRect',
    value: function setCropzoneRect(mode) {
      this._graphics.setCropzoneRect(mode);
    }

    /**
     * Flip
     * @returns {Promise}
     * @param {string} type - 'flipX' or 'flipY' or 'reset'
     * @returns {Promise<FlipStatus, ErrorMsg>}
     * @private
     */

  }, {
    key: '_flip',
    value: function _flip(type) {
      return this.execute(_consts.commandNames.FLIP_IMAGE, type);
    }

    /**
     * Flip x
     * @returns {Promise<FlipStatus, ErrorMsg>}
     * @example
     * imageEditor.flipX().then((status => {
     *     console.log('flipX: ', status.flipX);
     *     console.log('flipY: ', status.flipY);
     *     console.log('angle: ', status.angle);
     * }).catch(message => {
     *     console.log('error: ', message);
     * });
     */

  }, {
    key: 'flipX',
    value: function flipX() {
      return this._flip('flipX');
    }

    /**
     * Flip y
     * @returns {Promise<FlipStatus, ErrorMsg>}
     * @example
     * imageEditor.flipY().then(status => {
     *     console.log('flipX: ', status.flipX);
     *     console.log('flipY: ', status.flipY);
     *     console.log('angle: ', status.angle);
     * }).catch(message => {
     *     console.log('error: ', message);
     * });
     */

  }, {
    key: 'flipY',
    value: function flipY() {
      return this._flip('flipY');
    }

    /**
     * Reset flip
     * @returns {Promise<FlipStatus, ErrorMsg>}
     * @example
     * imageEditor.resetFlip().then(status => {
     *     console.log('flipX: ', status.flipX);
     *     console.log('flipY: ', status.flipY);
     *     console.log('angle: ', status.angle);
     * }).catch(message => {
     *     console.log('error: ', message);
     * });;
     */

  }, {
    key: 'resetFlip',
    value: function resetFlip() {
      return this._flip('reset');
    }

    /**
     * @param {string} type - 'rotate' or 'setAngle'
     * @param {number} angle - angle value (degree)
     * @param {boolean} isSilent - is silent execution or not
     * @returns {Promise<RotateStatus, ErrorMsg>}
     * @private
     */

  }, {
    key: '_rotate',
    value: function _rotate(type, angle, isSilent) {
      var result = null;

      if (isSilent) {
        result = this.executeSilent(_consts.commandNames.ROTATE_IMAGE, type, angle);
      } else {
        result = this.execute(_consts.commandNames.ROTATE_IMAGE, type, angle);
      }

      return result;
    }

    /**
     * Rotate image
     * @returns {Promise}
     * @param {number} angle - Additional angle to rotate image
     * @param {boolean} isSilent - is silent execution or not
     * @returns {Promise<RotateStatus, ErrorMsg>}
     * @example
     * imageEditor.rotate(10); // angle = 10
     * imageEditor.rotate(10); // angle = 20
     * imageEditor.rotate(5); // angle = 5
     * imageEditor.rotate(-95); // angle = -90
     * imageEditor.rotate(10).then(status => {
     *     console.log('angle: ', status.angle);
     * })).catch(message => {
     *     console.log('error: ', message);
     * });
     */

  }, {
    key: 'rotate',
    value: function rotate(angle, isSilent) {
      return this._rotate('rotate', angle, isSilent);
    }

    /**
     * Set angle
     * @param {number} angle - Angle of image
     * @param {boolean} isSilent - is silent execution or not
     * @returns {Promise<RotateStatus, ErrorMsg>}
     * @example
     * imageEditor.setAngle(10); // angle = 10
     * imageEditor.rotate(10); // angle = 20
     * imageEditor.setAngle(5); // angle = 5
     * imageEditor.rotate(50); // angle = 55
     * imageEditor.setAngle(-40); // angle = -40
     * imageEditor.setAngle(10).then(status => {
     *     console.log('angle: ', status.angle);
     * })).catch(message => {
     *     console.log('error: ', message);
     * });
     */

  }, {
    key: 'setAngle',
    value: function setAngle(angle, isSilent) {
      return this._rotate('setAngle', angle, isSilent);
    }

    /**
     * Set drawing brush
     * @param {Object} option brush option
     *  @param {Number} option.width width
     *  @param {String} option.color color like 'FFFFFF', 'rgba(0, 0, 0, 0.5)'
     * @example
     * imageEditor.startDrawingMode('FREE_DRAWING');
     * imageEditor.setBrush({
     *     width: 12,
     *     color: 'rgba(0, 0, 0, 0.5)'
     * });
     * imageEditor.setBrush({
     *     width: 8,
     *     color: 'FFFFFF'
     * });
     */

  }, {
    key: 'setBrush',
    value: function setBrush(option) {
      this._graphics.setBrush(option);
    }

    /**
     * Set states of current drawing shape
     * @param {string} type - Shape type (ex: 'rect', 'circle', 'triangle')
     * @param {Object} [options] - Shape options
     *      @param {(ShapeFillOption | string)} [options.fill] - {@link ShapeFillOption} or
     *        Shape foreground color (ex: '#fff', 'transparent')
     *      @param {string} [options.stoke] - Shape outline color
     *      @param {number} [options.strokeWidth] - Shape outline width
     *      @param {number} [options.width] - Width value (When type option is 'rect', this options can use)
     *      @param {number} [options.height] - Height value (When type option is 'rect', this options can use)
     *      @param {number} [options.rx] - Radius x value (When type option is 'circle', this options can use)
     *      @param {number} [options.ry] - Radius y value (When type option is 'circle', this options can use)
     *      @param {number} [options.isRegular] - Whether resizing shape has 1:1 ratio or not
     * @example
     * imageEditor.setDrawingShape('rect', {
     *     fill: 'red',
     *     width: 100,
     *     height: 200
     * });
     * @example
     * imageEditor.setDrawingShape('rect', {
     *     fill: {
     *         type: 'filter',
     *         filter: [{blur: 0.3}, {pixelate: 20}]
     *     },
     *     width: 100,
     *     height: 200
     * });
     * @example
     * imageEditor.setDrawingShape('circle', {
     *     fill: 'transparent',
     *     stroke: 'blue',
     *     strokeWidth: 3,
     *     rx: 10,
     *     ry: 100
     * });
     * @example
     * imageEditor.setDrawingShape('triangle', { // When resizing, the shape keep the 1:1 ratio
     *     width: 1,
     *     height: 1,
     *     isRegular: true
     * });
     * @example
     * imageEditor.setDrawingShape('circle', { // When resizing, the shape keep the 1:1 ratio
     *     rx: 10,
     *     ry: 10,
     *     isRegular: true
     * });
     */

  }, {
    key: 'setDrawingShape',
    value: function setDrawingShape(type, options) {
      this._graphics.setDrawingShape(type, options);
    }
  }, {
    key: 'setDrawingIcon',
    value: function setDrawingIcon(type, iconColor) {
      this._graphics.setIconStyle(type, iconColor);
    }

    /**
     * Add shape
     * @param {string} type - Shape type (ex: 'rect', 'circle', 'triangle')
     * @param {Object} options - Shape options
     *      @param {(ShapeFillOption | string)} [options.fill] - {@link ShapeFillOption} or
     *        Shape foreground color (ex: '#fff', 'transparent')
     *      @param {string} [options.stroke] - Shape outline color
     *      @param {number} [options.strokeWidth] - Shape outline width
     *      @param {number} [options.width] - Width value (When type option is 'rect', this options can use)
     *      @param {number} [options.height] - Height value (When type option is 'rect', this options can use)
     *      @param {number} [options.rx] - Radius x value (When type option is 'circle', this options can use)
     *      @param {number} [options.ry] - Radius y value (When type option is 'circle', this options can use)
     *      @param {number} [options.left] - Shape x position
     *      @param {number} [options.top] - Shape y position
     *      @param {boolean} [options.isRegular] - Whether resizing shape has 1:1 ratio or not
     * @returns {Promise<ObjectProps, ErrorMsg>}
     * @example
     * imageEditor.addShape('rect', {
     *     fill: 'red',
     *     stroke: 'blue',
     *     strokeWidth: 3,
     *     width: 100,
     *     height: 200,
     *     left: 10,
     *     top: 10,
     *     isRegular: true
     * });
     * @example
     * imageEditor.addShape('circle', {
     *     fill: 'red',
     *     stroke: 'blue',
     *     strokeWidth: 3,
     *     rx: 10,
     *     ry: 100,
     *     isRegular: false
     * }).then(objectProps => {
     *     console.log(objectProps.objId);
     * });
     * @example
     * imageEditor.addShape('rect', {
     *     fill: {
     *         type: 'filter',
     *         filter: [{blur: 0.3}, {pixelate: 20}]
     *     },
     *     stroke: 'blue',
     *     strokeWidth: 3,
     *     rx: 10,
     *     ry: 100,
     *     isRegular: false
     * }).then(objectProps => {
     *     console.log(objectProps.objId);
     * });
     */

  }, {
    key: 'addShape',
    value: function addShape(type, options) {
      options = options || {};

      this._setPositions(options);

      return this.execute(_consts.commandNames.ADD_SHAPE, type, options);
    }

    /**
     * Change shape
     * @param {number} objId -  object id
     * @param {Object} options - Shape options
     *      @param {(ShapeFillOption | string)} [options.fill] - {@link ShapeFillOption} or
     *        Shape foreground color (ex: '#fff', 'transparent')
     *      @param {string} [options.stroke] - Shape outline color
     *      @param {number} [options.strokeWidth] - Shape outline width
     *      @param {number} [options.width] - Width value (When type option is 'rect', this options can use)
     *      @param {number} [options.height] - Height value (When type option is 'rect', this options can use)
     *      @param {number} [options.rx] - Radius x value (When type option is 'circle', this options can use)
     *      @param {number} [options.ry] - Radius y value (When type option is 'circle', this options can use)
     *      @param {boolean} [options.isRegular] - Whether resizing shape has 1:1 ratio or not
     * @param {boolean} isSilent - is silent execution or not
     * @returns {Promise}
     * @example
     * // call after selecting shape object on canvas
     * imageEditor.changeShape(objId, { // change rectagle or triangle
     *     fill: 'red',
     *     stroke: 'blue',
     *     strokeWidth: 3,
     *     width: 100,
     *     height: 200
     * });
     * @example
     * // call after selecting shape object on canvas
     * imageEditor.changeShape(objId, { // change circle
     *     fill: 'red',
     *     stroke: 'blue',
     *     strokeWidth: 3,
     *     rx: 10,
     *     ry: 100
     * });
     */

  }, {
    key: 'changeShape',
    value: function changeShape(objId, options, isSilent) {
      var executeMethodName = isSilent ? 'executeSilent' : 'execute';

      return this[executeMethodName](_consts.commandNames.CHANGE_SHAPE, objId, options);
    }

    /**
     * Add text on image
     * @param {string} text - Initial input text
     * @param {Object} [options] Options for generating text
     *     @param {Object} [options.styles] Initial styles
     *         @param {string} [options.styles.fill] Color
     *         @param {string} [options.styles.fontFamily] Font type for text
     *         @param {number} [options.styles.fontSize] Size
     *         @param {string} [options.styles.fontStyle] Type of inclination (normal / italic)
     *         @param {string} [options.styles.fontWeight] Type of thicker or thinner looking (normal / bold)
     *         @param {string} [options.styles.textAlign] Type of text align (left / center / right)
     *         @param {string} [options.styles.textDecoration] Type of line (underline / line-through / overline)
     *     @param {{x: number, y: number}} [options.position] - Initial position
     *     @param {boolean} [options.autofocus] - text autofocus, default is true
     * @returns {Promise}
     * @example
     * imageEditor.addText('init text');
     * @example
     * imageEditor.addText('init text', {
     *     styles: {
     *         fill: '#000',
     *         fontSize: 20,
     *         fontWeight: 'bold'
     *     },
     *     position: {
     *         x: 10,
     *         y: 10
     *     }
     * }).then(objectProps => {
     *     console.log(objectProps.objId);
     * });
     */

  }, {
    key: 'addText',
    value: function addText(text, options) {
      text = text || '';
      options = options || {};

      return this.execute(_consts.commandNames.ADD_TEXT, text, options);
    }

    /**
     * Change contents of selected text object on image
     * @param {number} objId -  object id
     * @param {string} text - Changing text
     * @returns {Promise<ObjectProps, ErrorMsg>}
     * @example
     * imageEditor.changeText(objId, 'change text');
     */

  }, {
    key: 'changeText',
    value: function changeText(objId, text) {
      text = text || '';

      return this.execute(_consts.commandNames.CHANGE_TEXT, objId, text);
    }

    /**
     * Set style
     * @param {number} objId -  object id
     * @param {Object} styleObj - text styles
     *     @param {string} [styleObj.fill] Color
     *     @param {string} [styleObj.fontFamily] Font type for text
     *     @param {number} [styleObj.fontSize] Size
     *     @param {string} [styleObj.fontStyle] Type of inclination (normal / italic)
     *     @param {string} [styleObj.fontWeight] Type of thicker or thinner looking (normal / bold)
     *     @param {string} [styleObj.textAlign] Type of text align (left / center / right)
     *     @param {string} [styleObj.textDecoration] Type of line (underline / line-through / overline)
     * @param {boolean} isSilent - is silent execution or not
     * @returns {Promise}
     * @example
     * imageEditor.changeTextStyle(objId, {
     *     fontStyle: 'italic'
     * });
     */

  }, {
    key: 'changeTextStyle',
    value: function changeTextStyle(objId, styleObj, isSilent) {
      var executeMethodName = isSilent ? 'executeSilent' : 'execute';

      return this[executeMethodName](_consts.commandNames.CHANGE_TEXT_STYLE, objId, styleObj);
    }

    /**
     * change text mode
     * @param {string} type - change type
     * @private
     */

  }, {
    key: '_changeActivateMode',
    value: function _changeActivateMode(type) {
      if (type !== 'ICON' && this.getDrawingMode() !== type) {
        this.startDrawingMode(type);
      }
    }

    /**
     * 'textChanged' event handler
     * @param {Object} target - changed text object
     * @private
     */

  }, {
    key: '_onTextChanged',
    value: function _onTextChanged(target) {
      this.fire(_consts.eventNames.TEXT_CHANGED, target);
    }

    /**
     * 'iconCreateResize' event handler
     * @param {Object} originPointer origin pointer
     *  @param {Number} originPointer.x x position
     *  @param {Number} originPointer.y y position
     * @private
     */

  }, {
    key: '_onIconCreateResize',
    value: function _onIconCreateResize(originPointer) {
      this.fire(_consts.eventNames.ICON_CREATE_RESIZE, originPointer);
    }

    /**
     * 'iconCreateEnd' event handler
     * @param {Object} originPointer origin pointer
     *  @param {Number} originPointer.x x position
     *  @param {Number} originPointer.y y position
     * @private
     */

  }, {
    key: '_onIconCreateEnd',
    value: function _onIconCreateEnd(originPointer) {
      this.fire(_consts.eventNames.ICON_CREATE_END, originPointer);
    }

    /**
     * 'textEditing' event handler
     * @private
     */

  }, {
    key: '_onTextEditing',
    value: function _onTextEditing() {
      /**
       * The event which starts to edit text object
       * @event ImageEditor#textEditing
       * @example
       * imageEditor.on('textEditing', function() {
       *     console.log('text editing');
       * });
       */

      this.fire(_consts.eventNames.TEXT_EDITING);
    }

    /**
     * Mousedown event handler in case of 'TEXT' drawing mode
     * @param {fabric.Event} event - Current mousedown event object
     * @private
     */

  }, {
    key: '_onAddText',
    value: function _onAddText(event) {
      /**
       * The event when 'TEXT' drawing mode is enabled and click non-object area.
       * @event ImageEditor#addText
       * @param {Object} pos
       *  @param {Object} pos.originPosition - Current position on origin canvas
       *      @param {Number} pos.originPosition.x - x
       *      @param {Number} pos.originPosition.y - y
       *  @param {Object} pos.clientPosition - Current position on client area
       *      @param {Number} pos.clientPosition.x - x
       *      @param {Number} pos.clientPosition.y - y
       * @example
       * imageEditor.on('addText', function(pos) {
       *     console.log('text position on canvas: ' + pos.originPosition);
       *     console.log('text position on brwoser: ' + pos.clientPosition);
       * });
       */

      this.fire(_consts.eventNames.ADD_TEXT, {
        originPosition: event.originPosition,
        clientPosition: event.clientPosition
      });
    }

    /**
     * 'addObject' event handler
     * @param {Object} objectProps added object properties
     * @private
     */

  }, {
    key: '_onAddObject',
    value: function _onAddObject(objectProps) {
      var obj = this._graphics.getObject(objectProps.objId);
      this._invoker.fire(_consts.eventNames.EXECUTE_COMMAND, (0, _util.getObjectType)(obj.type));
      this._pushAddObjectCommand(obj);
    }

    /**
     * 'objectAdded' event handler
     * @param {Object} objectProps added object properties
     * @private
     */

  }, {
    key: '_onObjectAdded',
    value: function _onObjectAdded(objectProps) {
      /**
       * The event when object added
       * @event ImageEditor#objectAdded
       * @param {ObjectProps} props - object properties
       * @example
       * imageEditor.on('objectAdded', function(props) {
       *     console.log(props);
       * });
       */
      this.fire(OBJECT_ADDED, objectProps);

      /**
       * The event when object added (deprecated)
       * @event ImageEditor#addObjectAfter
       * @param {ObjectProps} props - object properties
       * @deprecated
       */
      this.fire(ADD_OBJECT_AFTER, objectProps);
    }

    /**
     * 'objectModified' event handler
     * @param {fabric.Object} obj - selection object
     * @private
     */

  }, {
    key: '_onObjectModified',
    value: function _onObjectModified(obj) {
      if (obj.type !== _consts.OBJ_TYPE.CROPZONE) {
        this._invoker.fire(_consts.eventNames.EXECUTE_COMMAND, (0, _util.getObjectType)(obj.type));
        this._pushModifyObjectCommand(obj);
      }
    }

    /**
     * 'selectionCleared' event handler
     * @private
     */

  }, {
    key: '_selectionCleared',
    value: function _selectionCleared() {
      this.fire(SELECTION_CLEARED);
    }

    /**
     * 'selectionCreated' event handler
     * @param {Object} eventTarget - Fabric object
     * @private
     */

  }, {
    key: '_selectionCreated',
    value: function _selectionCreated(eventTarget) {
      this.fire(SELECTION_CREATED, eventTarget);
    }

    /**
     * Register custom icons
     * @param {{iconType: string, pathValue: string}} infos - Infos to register icons
     * @example
     * imageEditor.registerIcons({
     *     customIcon: 'M 0 0 L 20 20 L 10 10 Z',
     *     customArrow: 'M 60 0 L 120 60 H 90 L 75 45 V 180 H 45 V 45 L 30 60 H 0 Z'
     * });
     */

  }, {
    key: 'registerIcons',
    value: function registerIcons(infos) {
      this._graphics.registerPaths(infos);
    }

    /**
     * Change canvas cursor type
     * @param {string} cursorType - cursor type
     * @example
     * imageEditor.changeCursor('crosshair');
     */

  }, {
    key: 'changeCursor',
    value: function changeCursor(cursorType) {
      this._graphics.changeCursor(cursorType);
    }

    /**
     * Add icon on canvas
     * @param {string} type - Icon type ('arrow', 'cancel', custom icon name)
     * @param {Object} options - Icon options
     *      @param {string} [options.fill] - Icon foreground color
     *      @param {number} [options.left] - Icon x position
     *      @param {number} [options.top] - Icon y position
     * @returns {Promise<ObjectProps, ErrorMsg>}
     * @example
     * imageEditor.addIcon('arrow'); // The position is center on canvas
     * @example
     * imageEditor.addIcon('arrow', {
     *     left: 100,
     *     top: 100
     * }).then(objectProps => {
     *     console.log(objectProps.objId);
     * });
     */

  }, {
    key: 'addIcon',
    value: function addIcon(type, options) {
      options = options || {};

      this._setPositions(options);

      return this.execute(_consts.commandNames.ADD_ICON, type, options);
    }

    /**
     * Change icon color
     * @param {number} objId -  object id
     * @param {string} color - Color for icon
     * @returns {Promise}
     * @example
     * imageEditor.changeIconColor(objId, '#000000');
     */

  }, {
    key: 'changeIconColor',
    value: function changeIconColor(objId, color) {
      return this.execute(_consts.commandNames.CHANGE_ICON_COLOR, objId, color);
    }

    /**
     * Remove an object or group by id
     * @param {number} objId -  object id
     * @returns {Promise}
     * @example
     * imageEditor.removeObject(objId);
     */

  }, {
    key: 'removeObject',
    value: function removeObject(objId) {
      var _graphics$getObject = this._graphics.getObject(objId),
          type = _graphics$getObject.type;

      return this.execute(_consts.commandNames.REMOVE_OBJECT, objId, (0, _util.getObjectType)(type));
    }

    /**
     * Whether it has the filter or not
     * @param {string} type - Filter type
     * @returns {boolean} true if it has the filter
     */

  }, {
    key: 'hasFilter',
    value: function hasFilter(type) {
      return this._graphics.hasFilter(type);
    }

    /**
     * Remove filter on canvas image
     * @param {string} type - Filter type
     * @returns {Promise<FilterResult, ErrorMsg>}
     * @example
     * imageEditor.removeFilter('Grayscale').then(obj => {
     *     console.log('filterType: ', obj.type);
     *     console.log('actType: ', obj.action);
     * }).catch(message => {
     *     console.log('error: ', message);
     * });
     */

  }, {
    key: 'removeFilter',
    value: function removeFilter(type) {
      return this.execute(_consts.commandNames.REMOVE_FILTER, type);
    }

    /**
     * Apply filter on canvas image
     * @param {string} type - Filter type
     * @param {object} options - Options to apply filter
     * @param {boolean} isSilent - is silent execution or not
     * @returns {Promise<FilterResult, ErrorMsg>}
     * @example
     * imageEditor.applyFilter('Grayscale');
     * @example
     * imageEditor.applyFilter('mask', {maskObjId: id}).then(obj => {
     *     console.log('filterType: ', obj.type);
     *     console.log('actType: ', obj.action);
     * }).catch(message => {
     *     console.log('error: ', message);
     * });;
     */

  }, {
    key: 'applyFilter',
    value: function applyFilter(type, options, isSilent) {
      var executeMethodName = isSilent ? 'executeSilent' : 'execute';

      return this[executeMethodName](_consts.commandNames.APPLY_FILTER, type, options);
    }

    /**
     * Get data url
     * @param {Object} options - options for toDataURL
     *   @param {String} [options.format=png] The format of the output image. Either "jpeg" or "png"
     *   @param {Number} [options.quality=1] Quality level (0..1). Only used for jpeg.
     *   @param {Number} [options.multiplier=1] Multiplier to scale by
     *   @param {Number} [options.left] Cropping left offset. Introduced in fabric v1.2.14
     *   @param {Number} [options.top] Cropping top offset. Introduced in fabric v1.2.14
     *   @param {Number} [options.width] Cropping width. Introduced in fabric v1.2.14
     *   @param {Number} [options.height] Cropping height. Introduced in fabric v1.2.14
     * @returns {string} A DOMString containing the requested data URI
     * @example
     * imgEl.src = imageEditor.toDataURL();
     *
     * imageEditor.loadImageFromURL(imageEditor.toDataURL(), 'FilterImage').then(() => {
     *      imageEditor.addImageObject(imgUrl);
     * });
     */

  }, {
    key: 'toDataURL',
    value: function toDataURL(options) {
      return this._graphics.toDataURL(options);
    }

    /**
     * Get image name
     * @returns {string} image name
     * @example
     * console.log(imageEditor.getImageName());
     */

  }, {
    key: 'getImageName',
    value: function getImageName() {
      return this._graphics.getImageName();
    }

    /**
     * Clear undoStack
     * @example
     * imageEditor.clearUndoStack();
     */

  }, {
    key: 'clearUndoStack',
    value: function clearUndoStack() {
      this._invoker.clearUndoStack();
    }

    /**
     * Clear redoStack
     * @example
     * imageEditor.clearRedoStack();
     */

  }, {
    key: 'clearRedoStack',
    value: function clearRedoStack() {
      this._invoker.clearRedoStack();
    }

    /**
     * Whehter the undo stack is empty or not
     * @returns {boolean}
     * imageEditor.isEmptyUndoStack();
     */

  }, {
    key: 'isEmptyUndoStack',
    value: function isEmptyUndoStack() {
      return this._invoker.isEmptyUndoStack();
    }

    /**
     * Whehter the redo stack is empty or not
     * @returns {boolean}
     * imageEditor.isEmptyRedoStack();
     */

  }, {
    key: 'isEmptyRedoStack',
    value: function isEmptyRedoStack() {
      return this._invoker.isEmptyRedoStack();
    }

    /**
     * Resize canvas dimension
     * @param {{width: number, height: number}} dimension - Max width & height
     * @returns {Promise}
     */

  }, {
    key: 'resizeCanvasDimension',
    value: function resizeCanvasDimension(dimension) {
      if (!dimension) {
        return _util.Promise.reject(_consts.rejectMessages.invalidParameters);
      }

      return this.execute(_consts.commandNames.RESIZE_CANVAS_DIMENSION, dimension);
    }

    /**
     * Destroy
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      var _this4 = this;

      this.stopDrawingMode();
      this._detachDomEvents();
      this._graphics.destroy();
      this._graphics = null;

      forEach(this, function (value, key) {
        _this4[key] = null;
      }, this);
    }

    /**
     * Set position
     * @param {Object} options - Position options (left or top)
     * @private
     */

  }, {
    key: '_setPositions',
    value: function _setPositions(options) {
      var centerPosition = this._graphics.getCenter();

      if (isUndefined(options.left)) {
        options.left = centerPosition.left;
      }

      if (isUndefined(options.top)) {
        options.top = centerPosition.top;
      }
    }

    /**
     * Set properties of active object
     * @param {number} objId -  object id
     * @param {Object} keyValue - key & value
     * @returns {Promise}
     * @example
     * imageEditor.setObjectProperties(objId, {
     *     left:100,
     *     top:100,
     *     width: 200,
     *     height: 200,
     *     opacity: 0.5
     * });
     */

  }, {
    key: 'setObjectProperties',
    value: function setObjectProperties(objId, keyValue) {
      return this.execute(_consts.commandNames.SET_OBJECT_PROPERTIES, objId, keyValue);
    }

    /**
     * Set properties of active object, Do not leave an invoke history.
     * @param {number} objId -  object id
     * @param {Object} keyValue - key & value
     * @example
     * imageEditor.setObjectPropertiesQuietly(objId, {
     *     left:100,
     *     top:100,
     *     width: 200,
     *     height: 200,
     *     opacity: 0.5
     * });
     */

  }, {
    key: 'setObjectPropertiesQuietly',
    value: function setObjectPropertiesQuietly(objId, keyValue) {
      this._graphics.setObjectProperties(objId, keyValue);
    }

    /**
     * Get properties of active object corresponding key
     * @param {number} objId -  object id
     * @param {Array<string>|ObjectProps|string} keys - property's key
     * @returns {ObjectProps} properties if id is valid or null
     * @example
     * var props = imageEditor.getObjectProperties(objId, 'left');
     * console.log(props);
     * @example
     * var props = imageEditor.getObjectProperties(objId, ['left', 'top', 'width', 'height']);
     * console.log(props);
     * @example
     * var props = imageEditor.getObjectProperties(objId, {
     *     left: null,
     *     top: null,
     *     width: null,
     *     height: null,
     *     opacity: null
     * });
     * console.log(props);
     */

  }, {
    key: 'getObjectProperties',
    value: function getObjectProperties(objId, keys) {
      var object = this._graphics.getObject(objId);
      if (!object) {
        return null;
      }

      return this._graphics.getObjectProperties(objId, keys);
    }

    /**
     * Get the canvas size
     * @returns {Object} {{width: number, height: number}} canvas size
     * @example
     * var canvasSize = imageEditor.getCanvasSize();
     * console.log(canvasSize.width);
     * console.height(canvasSize.height);
     */

  }, {
    key: 'getCanvasSize',
    value: function getCanvasSize() {
      return this._graphics.getCanvasSize();
    }

    /**
     * Get object position by originX, originY
     * @param {number} objId -  object id
     * @param {string} originX - can be 'left', 'center', 'right'
     * @param {string} originY - can be 'top', 'center', 'bottom'
     * @returns {Object} {{x:number, y: number}} position by origin if id is valid, or null
     * @example
     * var position = imageEditor.getObjectPosition(objId, 'left', 'top');
     * console.log(position);
     */

  }, {
    key: 'getObjectPosition',
    value: function getObjectPosition(objId, originX, originY) {
      return this._graphics.getObjectPosition(objId, originX, originY);
    }

    /**
     * Set object position  by originX, originY
     * @param {number} objId -  object id
     * @param {Object} posInfo - position object
     *  @param {number} posInfo.x - x position
     *  @param {number} posInfo.y - y position
     *  @param {string} posInfo.originX - can be 'left', 'center', 'right'
     *  @param {string} posInfo.originY - can be 'top', 'center', 'bottom'
     * @returns {Promise}
     * @example
     * // align the object to 'left', 'top'
     * imageEditor.setObjectPosition(objId, {
     *     x: 0,
     *     y: 0,
     *     originX: 'left',
     *     originY: 'top'
     * });
     * @example
     * // align the object to 'right', 'top'
     * var canvasSize = imageEditor.getCanvasSize();
     * imageEditor.setObjectPosition(objId, {
     *     x: canvasSize.width,
     *     y: 0,
     *     originX: 'right',
     *     originY: 'top'
     * });
     * @example
     * // align the object to 'left', 'bottom'
     * var canvasSize = imageEditor.getCanvasSize();
     * imageEditor.setObjectPosition(objId, {
     *     x: 0,
     *     y: canvasSize.height,
     *     originX: 'left',
     *     originY: 'bottom'
     * });
     * @example
     * // align the object to 'right', 'bottom'
     * var canvasSize = imageEditor.getCanvasSize();
     * imageEditor.setObjectPosition(objId, {
     *     x: canvasSize.width,
     *     y: canvasSize.height,
     *     originX: 'right',
     *     originY: 'bottom'
     * });
     */

  }, {
    key: 'setObjectPosition',
    value: function setObjectPosition(objId, posInfo) {
      return this.execute(_consts.commandNames.SET_OBJECT_POSITION, objId, posInfo);
    }

    /**
     * @param {object} dimensions - Image Dimensions
     * @returns {Promise<ErrorMsg>}
     */

  }, {
    key: 'resize',
    value: function resize(dimensions) {
      return this.execute(_consts.commandNames.RESIZE_IMAGE, dimensions);
    }

    /**
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @returns {Object} Object representation of an instance
     */

  }, {
    key: 'toJSON',
    value: function toJSON(propertiesToInclude) {
      return this._graphics.toJSON(propertiesToInclude);
    }
  }, {
    key: 'loadFromJSON',
    value: function loadFromJSON(json) {
      if (!json) {
        return _util.Promise.reject(_consts.rejectMessages.invalidParameters);
      }

      return this.execute(_consts.commandNames.LOAD_JSON, json);
    }
  }, {
    key: 'setBackgroundColor',
    value: function setBackgroundColor(color) {
      return this._graphics.setBackgroundColor(color);
    }
  }]);

  return ImageEditor;
}();

CustomEvents.mixin(ImageEditor);

exports.default = ImageEditor;

/***/ }),

/***/ "./src/js/interface/command.js":
/*!*************************************!*\
  !*** ./src/js/interface/command.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author NHN. FE Development Team <dl_javascript@nhn.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @fileoverview Command interface
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _tuiCodeSnippet = __webpack_require__(/*! tui-code-snippet */ "tui-code-snippet");

var _tuiCodeSnippet2 = _interopRequireDefault(_tuiCodeSnippet);

var _errorMessage = __webpack_require__(/*! @/factory/errorMessage */ "./src/js/factory/errorMessage.js");

var _errorMessage2 = _interopRequireDefault(_errorMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var createMessage = _errorMessage2.default.create;
var errorTypes = _errorMessage2.default.types;

/**
 * Command class
 * @class
 * @param {{name:function, execute: function, undo: function,
 *          executeCallback: function, undoCallback: function}} actions - Command actions
 * @param {Array} args - passing arguments on execute, undo
 * @ignore
 */

var Command = function () {
  function Command(actions, args) {
    _classCallCheck(this, Command);

    /**
     * command name
     * @type {string}
     */
    this.name = actions.name;

    /**
     * arguments
     * @type {Array}
     */
    this.args = args;

    /**
     * Execute function
     * @type {function}
     */
    this.execute = actions.execute;

    /**
     * Undo function
     * @type {function}
     */
    this.undo = actions.undo;

    /**
     * executeCallback
     * @type {function}
     */
    this.executeCallback = actions.executeCallback || null;

    /**
     * undoCallback
     * @type {function}
     */
    this.undoCallback = actions.undoCallback || null;

    /**
     * data for undo
     * @type {Object}
     */
    this.undoData = {};
  }

  /**
   * Execute action
   * @param {Object.<string, Component>} compMap - Components injection
   * @abstract
   */


  _createClass(Command, [{
    key: 'execute',
    value: function execute() {
      throw new Error(createMessage(errorTypes.UN_IMPLEMENTATION, 'execute'));
    }

    /**
     * Undo action
     * @param {Object.<string, Component>} compMap - Components injection
     * @abstract
     */

  }, {
    key: 'undo',
    value: function undo() {
      throw new Error(createMessage(errorTypes.UN_IMPLEMENTATION, 'undo'));
    }

    /**
     * command for redo if undoData exists
     * @returns {boolean} isRedo
     */

  }, {
    key: 'setUndoData',


    /**
     * Set undoData action
     * @param {Object} undoData - maked undo data
     * @param {Object} cachedUndoDataForSilent - cached undo data
     * @param {boolean} isSilent - is silent execution or not
     * @returns {Object} cachedUndoDataForSilent
     */
    value: function setUndoData(undoData, cachedUndoDataForSilent, isSilent) {
      if (cachedUndoDataForSilent) {
        undoData = cachedUndoDataForSilent;
      }

      if (!isSilent) {
        _tuiCodeSnippet2.default.extend(this.undoData, undoData);
        cachedUndoDataForSilent = null;
      } else if (!cachedUndoDataForSilent) {
        cachedUndoDataForSilent = undoData;
      }

      return cachedUndoDataForSilent;
    }

    /**
     * Attach execute callabck
     * @param {function} callback - Callback after execution
     * @returns {Command} this
     */

  }, {
    key: 'setExecuteCallback',
    value: function setExecuteCallback(callback) {
      this.executeCallback = callback;

      return this;
    }

    /**
     * Attach undo callback
     * @param {function} callback - Callback after undo
     * @returns {Command} this
     */

  }, {
    key: 'setUndoCallback',
    value: function setUndoCallback(callback) {
      this.undoCallback = callback;

      return this;
    }
  }, {
    key: 'isRedo',
    get: function get() {
      return Object.keys(this.undoData).length > 0;
    }
  }]);

  return Command;
}();

exports.default = Command;

/***/ }),

/***/ "./src/js/interface/component.js":
/*!***************************************!*\
  !*** ./src/js/interface/component.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @author NHN. FE Development Team <dl_javascript@nhn.com>
 * @fileoverview Component interface
 */

/**
 * Component interface
 * @class
 * @param {string} name - component name
 * @param {Graphics} graphics - Graphics instance
 * @ignore
 */
var Component = function () {
  function Component(name, graphics) {
    _classCallCheck(this, Component);

    /**
     * Component name
     * @type {string}
     */
    this.name = name;

    /**
     * Graphics instance
     * @type {Graphics}
     */
    this.graphics = graphics;
  }

  /**
   * Fire Graphics event
   * @returns {Object} return value
   */


  _createClass(Component, [{
    key: "fire",
    value: function fire() {
      var context = this.graphics;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.graphics.fire.apply(context, args);
    }

    /**
     * Save image(background) of canvas
     * @param {string} name - Name of image
     * @param {fabric.Image} oImage - Fabric image instance
     */

  }, {
    key: "setCanvasImage",
    value: function setCanvasImage(name, oImage) {
      this.graphics.setCanvasImage(name, oImage);
    }

    /**
     * Returns canvas element of fabric.Canvas[[lower-canvas]]
     * @returns {HTMLCanvasElement}
     */

  }, {
    key: "getCanvasElement",
    value: function getCanvasElement() {
      return this.graphics.getCanvasElement();
    }

    /**
     * Get fabric.Canvas instance
     * @returns {fabric.Canvas}
     */

  }, {
    key: "getCanvas",
    value: function getCanvas() {
      return this.graphics.getCanvas();
    }

    /**
     * Get canvasImage (fabric.Image instance)
     * @returns {fabric.Image}
     */

  }, {
    key: "getCanvasImage",
    value: function getCanvasImage() {
      return this.graphics.getCanvasImage();
    }

    /**
     * Get image name
     * @returns {string}
     */

  }, {
    key: "getImageName",
    value: function getImageName() {
      return this.graphics.getImageName();
    }

    /**
     * Get image editor
     * @returns {ImageEditor}
     */

  }, {
    key: "getEditor",
    value: function getEditor() {
      return this.graphics.getEditor();
    }

    /**
     * Return component name
     * @returns {string}
     */

  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }

    /**
     * Set image properties
     * @param {Object} setting - Image properties
     * @param {boolean} [withRendering] - If true, The changed image will be reflected in the canvas
     */

  }, {
    key: "setImageProperties",
    value: function setImageProperties(setting, withRendering) {
      this.graphics.setImageProperties(setting, withRendering);
    }

    /**
     * Set canvas dimension - css only
     * @param {Object} dimension - Canvas css dimension
     */

  }, {
    key: "setCanvasCssDimension",
    value: function setCanvasCssDimension(dimension) {
      this.graphics.setCanvasCssDimension(dimension);
    }

    /**
     * Set canvas dimension - css only
     * @param {Object} dimension - Canvas backstore dimension
     */

  }, {
    key: "setCanvasBackstoreDimension",
    value: function setCanvasBackstoreDimension(dimension) {
      this.graphics.setCanvasBackstoreDimension(dimension);
    }

    /**
     * Adjust canvas dimension with scaling image
     */

  }, {
    key: "adjustCanvasDimension",
    value: function adjustCanvasDimension() {
      this.graphics.adjustCanvasDimension();
    }
  }, {
    key: "adjustCanvasDimensionBase",
    value: function adjustCanvasDimensionBase() {
      this.graphics.adjustCanvasDimensionBase();
    }
  }]);

  return Component;
}();

exports.default = Component;

/***/ }),

/***/ "./src/js/interface/drawingMode.js":
/*!*****************************************!*\
  !*** ./src/js/interface/drawingMode.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author NHN. FE Development Team <dl_javascript@nhn.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @fileoverview DrawingMode interface
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _errorMessage = __webpack_require__(/*! @/factory/errorMessage */ "./src/js/factory/errorMessage.js");

var _errorMessage2 = _interopRequireDefault(_errorMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var createMessage = _errorMessage2.default.create;
var errorTypes = _errorMessage2.default.types;

/**
 * DrawingMode interface
 * @class
 * @param {string} name - drawing mode name
 * @ignore
 */

var DrawingMode = function () {
  function DrawingMode(name) {
    _classCallCheck(this, DrawingMode);

    /**
     * the name of drawing mode
     * @type {string}
     */
    this.name = name;
  }

  /**
   * Get this drawing mode name;
   * @returns {string} drawing mode name
   */


  _createClass(DrawingMode, [{
    key: 'getName',
    value: function getName() {
      return this.name;
    }

    /**
     * start this drawing mode
     * @param {Object} options - drawing mode options
     * @abstract
     */

  }, {
    key: 'start',
    value: function start() {
      throw new Error(createMessage(errorTypes.UN_IMPLEMENTATION, 'start'));
    }

    /**
     * stop this drawing mode
     * @abstract
     */

  }, {
    key: 'end',
    value: function end() {
      throw new Error(createMessage(errorTypes.UN_IMPLEMENTATION, 'stop'));
    }
  }]);

  return DrawingMode;
}();

exports.default = DrawingMode;

/***/ }),

/***/ "./src/js/invoker.js":
/*!***************************!*\
  !*** ./src/js/invoker.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author NHN. FE Development Team <dl_javascript@nhn.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @fileoverview Invoker - invoke commands
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _tuiCodeSnippet = __webpack_require__(/*! tui-code-snippet */ "tui-code-snippet");

var _tuiCodeSnippet2 = _interopRequireDefault(_tuiCodeSnippet);

var _command = __webpack_require__(/*! @/factory/command */ "./src/js/factory/command.js");

var _command2 = _interopRequireDefault(_command);

var _util = __webpack_require__(/*! @/util */ "./src/js/util.js");

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var isFunction = _tuiCodeSnippet2.default.isFunction,
    isString = _tuiCodeSnippet2.default.isString,
    CustomEvents = _tuiCodeSnippet2.default.CustomEvents;

/**
 * Invoker
 * @class
 * @ignore
 */

var Invoker = function () {
  function Invoker() {
    _classCallCheck(this, Invoker);

    /**
     * Undo stack
     * @type {Array.<Command>}
     * @private
     */
    this._undoStack = [];

    /**
     * Redo stack
     * @type {Array.<Command>}
     * @private
     */
    this._redoStack = [];

    /**
     * Lock-flag for executing command
     * @type {boolean}
     * @private
     */
    this._isLocked = false;

    this._isSilent = false;
  }

  /**
   * Invoke command execution
   * @param {Command} command - Command
   * @param {boolean} [isRedo=false] - check if command is redo
   * @returns {Promise}
   * @private
   */


  _createClass(Invoker, [{
    key: '_invokeExecution',
    value: function _invokeExecution(command) {
      var _this = this;

      var isRedo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      this.lock();

      var args = command.args;

      if (!args) {
        args = [];
      }

      return command.execute.apply(command, args).then(function (value) {
        if (!_this._isSilent) {
          _this.pushUndoStack(command);

          _this.fire(isRedo ? _consts.eventNames.AFTER_REDO : _consts.eventNames.EXECUTE_COMMAND, command);
        }
        _this.unlock();
        if (isFunction(command.executeCallback)) {
          command.executeCallback(value);
        }

        return value;
      })['catch'](function (message) {
        _this.unlock();

        return _util.Promise.reject(message);
      });
    }

    /**
     * Invoke command undo
     * @param {Command} command - Command
     * @returns {Promise}
     * @private
     */

  }, {
    key: '_invokeUndo',
    value: function _invokeUndo(command) {
      var _this2 = this;

      this.lock();

      var args = command.args;

      if (!args) {
        args = [];
      }

      return command.undo.apply(command, args).then(function (value) {
        _this2.pushRedoStack(command);
        _this2.fire(_consts.eventNames.AFTER_UNDO, command);
        _this2.unlock();
        if (isFunction(command.undoCallback)) {
          command.undoCallback(value);
        }

        return value;
      })['catch'](function (message) {
        _this2.unlock();

        return _util.Promise.reject(message);
      });
    }

    /**
     * fire REDO_STACK_CHANGED event
     * @private
     */

  }, {
    key: '_fireRedoStackChanged',
    value: function _fireRedoStackChanged() {
      this.fire(_consts.eventNames.REDO_STACK_CHANGED, this._redoStack.length);
    }

    /**
     * fire UNDO_STACK_CHANGED event
     * @private
     */

  }, {
    key: '_fireUndoStackChanged',
    value: function _fireUndoStackChanged() {
      this.fire(_consts.eventNames.UNDO_STACK_CHANGED, this._undoStack.length);
    }

    /**
     * Lock this invoker
     */

  }, {
    key: 'lock',
    value: function lock() {
      this._isLocked = true;
    }

    /**
     * Unlock this invoker
     */

  }, {
    key: 'unlock',
    value: function unlock() {
      this._isLocked = false;
    }
  }, {
    key: 'executeSilent',
    value: function executeSilent() {
      var _this3 = this;

      this._isSilent = true;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.execute.apply(this, args.concat([this._isSilent])).then(function () {
        _this3._isSilent = false;
      });
    }

    /**
     * Invoke command
     * Store the command to the undoStack
     * Clear the redoStack
     * @param {String} commandName - Command name
     * @param {...*} args - Arguments for creating command
     * @returns {Promise}
     */

  }, {
    key: 'execute',
    value: function execute() {
      var _this4 = this;

      if (this._isLocked) {
        return _util.Promise.reject(_consts.rejectMessages.isLock);
      }

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var command = args[0];

      if (isString(command)) {
        command = _command2.default.create.apply(_command2.default, args);
      }

      return this._invokeExecution(command).then(function (value) {
        _this4.clearRedoStack();

        return value;
      });
    }

    /**
     * Undo command
     * @returns {Promise}
     */

  }, {
    key: 'undo',
    value: function undo() {
      var command = this._undoStack.pop();
      var promise = void 0;
      var message = '';

      if (command && this._isLocked) {
        this.pushUndoStack(command, true);
        command = null;
      }
      if (command) {
        if (this.isEmptyUndoStack()) {
          this._fireUndoStackChanged();
        }
        promise = this._invokeUndo(command);
      } else {
        message = _consts.rejectMessages.undo;
        if (this._isLocked) {
          message = message + ' Because ' + _consts.rejectMessages.isLock;
        }
        promise = _util.Promise.reject(message);
      }

      return promise;
    }

    /**
     * Redo command
     * @returns {Promise}
     */

  }, {
    key: 'redo',
    value: function redo() {
      var command = this._redoStack.pop();
      var promise = void 0;
      var message = '';

      if (command && this._isLocked) {
        this.pushRedoStack(command, true);
        command = null;
      }
      if (command) {
        if (this.isEmptyRedoStack()) {
          this._fireRedoStackChanged();
        }
        promise = this._invokeExecution(command, true);
      } else {
        message = _consts.rejectMessages.redo;
        if (this._isLocked) {
          message = message + ' Because ' + _consts.rejectMessages.isLock;
        }
        promise = _util.Promise.reject(message);
      }

      return promise;
    }

    /**
     * Push undo stack
     * @param {Command} command - command
     * @param {boolean} [isSilent] - Fire event or not
     */

  }, {
    key: 'pushUndoStack',
    value: function pushUndoStack(command, isSilent) {
      this._undoStack.push(command);
      if (!isSilent) {
        this._fireUndoStackChanged();
      }
    }

    /**
     * Push redo stack
     * @param {Command} command - command
     * @param {boolean} [isSilent] - Fire event or not
     */

  }, {
    key: 'pushRedoStack',
    value: function pushRedoStack(command, isSilent) {
      this._redoStack.push(command);
      if (!isSilent) {
        this._fireRedoStackChanged();
      }
    }

    /**
     * Return whether the redoStack is empty
     * @returns {boolean}
     */

  }, {
    key: 'isEmptyRedoStack',
    value: function isEmptyRedoStack() {
      return this._redoStack.length === 0;
    }

    /**
     * Return whether the undoStack is empty
     * @returns {boolean}
     */

  }, {
    key: 'isEmptyUndoStack',
    value: function isEmptyUndoStack() {
      return this._undoStack.length === 0;
    }

    /**
     * Clear undoStack
     */

  }, {
    key: 'clearUndoStack',
    value: function clearUndoStack() {
      if (!this.isEmptyUndoStack()) {
        this._undoStack = [];
        this._fireUndoStackChanged();
      }
    }

    /**
     * Clear redoStack
     */

  }, {
    key: 'clearRedoStack',
    value: function clearRedoStack() {
      if (!this.isEmptyRedoStack()) {
        this._redoStack = [];
        this._fireRedoStackChanged();
      }
    }
  }]);

  return Invoker;
}();

CustomEvents.mixin(Invoker);

exports.default = Invoker;

/***/ }),

/***/ "./src/js/polyfill.js":
/*!****************************!*\
  !*** ./src/js/polyfill.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
// Any copyright is dedicated to the Public Domain. http://creativecommons.org/publicdomain/zero/1.0/if (!Element.prototype.matches)
Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

if (!Element.prototype.closest) Element.prototype.closest = function (s) {
  var el = this;
  if (!document.documentElement.contains(el)) return null;
  do {
    if (el.matches(s)) return el;
    el = el.parentElement || el.parentNode;
  } while (el !== null && el.nodeType === 1);
  return null;
};

/*
 * classList.js: Cross-browser full element.classList implementation.
 * 1.1.20170427
 *
 * By Eli Grey, http://eligrey.com
 * License: Dedicated to the public domain.
 *   See https://github.com/eligrey/classList.js/blob/master/LICENSE.md
 */

/*global self, document, DOMException */

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */

if ('document' in window.self) {
  // Full polyfill for browsers with no classList support
  // Including IE < Edge missing SVGElement.classList
  if (!('classList' in document.createElement('_')) || document.createElementNS && !('classList' in document.createElementNS('http://www.w3.org/2000/svg', 'g'))) {
    (function (view) {
      'use strict';

      if (!('Element' in view)) return;

      var classListProp = 'classList',
          protoProp = 'prototype',
          elemCtrProto = view.Element[protoProp],
          objCtr = Object,
          strTrim = String[protoProp].trim || function () {
        return this.replace(/^\s+|\s+$/g, '');
      },
          arrIndexOf = Array[protoProp].indexOf || function (item) {
        var i = 0,
            len = this.length;
        for (; i < len; i++) {
          if (i in this && this[i] === item) {
            return i;
          }
        }
        return -1;
      },

      // Vendors: please allow content code to instantiate DOMExceptions
      DOMEx = function DOMEx(type, message) {
        this.name = type;
        this.code = DOMException[type];
        this.message = message;
      },
          checkTokenAndGetIndex = function checkTokenAndGetIndex(classList, token) {
        if (token === '') {
          throw new DOMEx('SYNTAX_ERR', 'An invalid or illegal string was specified');
        }
        if (/\s/.test(token)) {
          throw new DOMEx('INVALID_CHARACTER_ERR', 'String contains an invalid character');
        }
        return arrIndexOf.call(classList, token);
      },
          ClassList = function ClassList(elem) {
        var trimmedClasses = strTrim.call(elem.getAttribute('class') || ''),
            classes = trimmedClasses ? trimmedClasses.split(/\s+/) : [],
            i = 0,
            len = classes.length;
        for (; i < len; i++) {
          this.push(classes[i]);
        }
        this._updateClassName = function () {
          elem.setAttribute('class', this.toString());
        };
      },
          classListProto = ClassList[protoProp] = [],
          classListGetter = function classListGetter() {
        return new ClassList(this);
      };
      // Most DOMException implementations don't allow calling DOMException's toString()
      // on non-DOMExceptions. Error's toString() is sufficient here.
      DOMEx[protoProp] = Error[protoProp];
      classListProto.item = function (i) {
        return this[i] || null;
      };
      classListProto.contains = function (token) {
        token += '';
        return checkTokenAndGetIndex(this, token) !== -1;
      };
      classListProto.add = function () {
        var tokens = arguments,
            i = 0,
            l = tokens.length,
            token,
            updated = false;
        do {
          token = tokens[i] + '';
          if (checkTokenAndGetIndex(this, token) === -1) {
            this.push(token);
            updated = true;
          }
        } while (++i < l);

        if (updated) {
          this._updateClassName();
        }
      };
      classListProto.remove = function () {
        var tokens = arguments,
            i = 0,
            l = tokens.length,
            token,
            updated = false,
            index;
        do {
          token = tokens[i] + '';
          index = checkTokenAndGetIndex(this, token);
          while (index !== -1) {
            this.splice(index, 1);
            updated = true;
            index = checkTokenAndGetIndex(this, token);
          }
        } while (++i < l);

        if (updated) {
          this._updateClassName();
        }
      };
      classListProto.toggle = function (token, force) {
        token += '';

        var result = this.contains(token),
            method = result ? force !== true && 'remove' : force !== false && 'add';
        if (method) {
          this[method](token);
        }

        if (force === true || force === false) {
          return force;
        } else {
          return !result;
        }
      };
      classListProto.toString = function () {
        return this.join(' ');
      };

      if (objCtr.defineProperty) {
        var classListPropDesc = {
          get: classListGetter,
          enumerable: true,
          configurable: true
        };
        try {
          objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
        } catch (ex) {
          // IE 8 doesn't support enumerable:true
          // adding undefined to fight this issue https://github.com/eligrey/classList.js/issues/36
          // modernie IE8-MSW7 machine has IE8 8.0.6001.18702 and is affected
          if (ex.number === undefined || ex.number === -0x7ff5ec54) {
            classListPropDesc.enumerable = false;
            objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
          }
        }
      } else if (objCtr[protoProp].__defineGetter__) {
        elemCtrProto.__defineGetter__(classListProp, classListGetter);
      }
    })(window.self);
  }

  // There is full or partial native classList support, so just check if we need
  // to normalize the add/remove and toggle APIs.

  (function () {
    'use strict';

    var testElement = document.createElement('_');

    testElement.classList.add('c1', 'c2');

    // Polyfill for IE 10/11 and Firefox <26, where classList.add and
    // classList.remove exist but support only one argument at a time.
    if (!testElement.classList.contains('c2')) {
      var createMethod = function createMethod(method) {
        var original = DOMTokenList.prototype[method];

        DOMTokenList.prototype[method] = function (token) {
          var i,
              len = arguments.length;

          for (i = 0; i < len; i++) {
            token = arguments[i];
            original.call(this, token);
          }
        };
      };
      createMethod('add');
      createMethod('remove');
    }

    testElement.classList.toggle('c3', false);

    // Polyfill for IE 10 and Firefox <24, where classList.toggle does not
    // support the second argument.
    if (testElement.classList.contains('c3')) {
      var _toggle = DOMTokenList.prototype.toggle;

      DOMTokenList.prototype.toggle = function (token, force) {
        if (1 in arguments && !this.contains(token) === !force) {
          return force;
        } else {
          return _toggle.call(this, token);
        }
      };
    }

    testElement = null;
  })();
}

/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.6
 */
/*jslint browser: true */
/*global XDomainRequest, MutationObserver, window */
(function () {
  'use strict';

  if (typeof window !== 'undefined' && window.addEventListener) {
    var cache = Object.create(null); // holds xhr objects to prevent multiple requests
    var checkUseElems;
    var tid; // timeout id
    var debouncedCheck = function debouncedCheck() {
      clearTimeout(tid);
      tid = setTimeout(checkUseElems, 100);
    };
    var unobserveChanges = function unobserveChanges() {
      return;
    };
    var observeChanges = function observeChanges() {
      var observer;
      window.addEventListener('resize', debouncedCheck, false);
      window.addEventListener('orientationchange', debouncedCheck, false);
      if (window.MutationObserver) {
        observer = new MutationObserver(debouncedCheck);
        observer.observe(document.documentElement, {
          childList: true,
          subtree: true,
          attributes: true
        });
        unobserveChanges = function unobserveChanges() {
          try {
            observer.disconnect();
            window.removeEventListener('resize', debouncedCheck, false);
            window.removeEventListener('orientationchange', debouncedCheck, false);
          } catch (ignore) {}
        };
      } else {
        document.documentElement.addEventListener('DOMSubtreeModified', debouncedCheck, false);
        unobserveChanges = function unobserveChanges() {
          document.documentElement.removeEventListener('DOMSubtreeModified', debouncedCheck, false);
          window.removeEventListener('resize', debouncedCheck, false);
          window.removeEventListener('orientationchange', debouncedCheck, false);
        };
      }
    };
    var createRequest = function createRequest(url) {
      // In IE 9, cross origin requests can only be sent using XDomainRequest.
      // XDomainRequest would fail if CORS headers are not set.
      // Therefore, XDomainRequest should only be used with cross origin requests.
      function getOrigin(loc) {
        var a;
        if (loc.protocol !== undefined) {
          a = loc;
        } else {
          a = document.createElement('a');
          a.href = loc;
        }
        return a.protocol.replace(/:/g, '') + a.host;
      }
      var Request;
      var origin;
      var origin2;
      if (window.XMLHttpRequest) {
        Request = new XMLHttpRequest();
        origin = getOrigin(location);
        origin2 = getOrigin(url);
        if (Request.withCredentials === undefined && origin2 !== '' && origin2 !== origin) {
          Request = XDomainRequest || undefined;
        } else {
          Request = XMLHttpRequest;
        }
      }
      return Request;
    };
    var xlinkNS = 'http://www.w3.org/1999/xlink';
    checkUseElems = function checkUseElems() {
      var base;
      var bcr;
      var fallback = ''; // optional fallback URL in case no base path to SVG file was given and no symbol definition was found.
      var hash;
      var href;
      var i;
      var inProgressCount = 0;
      var isHidden;
      var Request;
      var url;
      var uses;
      var xhr;
      function observeIfDone() {
        // If done with making changes, start watching for chagnes in DOM again
        inProgressCount -= 1;
        if (inProgressCount === 0) {
          // if all xhrs were resolved
          unobserveChanges(); // make sure to remove old handlers
          observeChanges(); // watch for changes to DOM
        }
      }
      function attrUpdateFunc(spec) {
        return function () {
          if (cache[spec.base] !== true) {
            spec.useEl.setAttributeNS(xlinkNS, 'xlink:href', '#' + spec.hash);
            if (spec.useEl.hasAttribute('href')) {
              spec.useEl.setAttribute('href', '#' + spec.hash);
            }
          }
        };
      }
      function onloadFunc(xhr) {
        return function () {
          var body = document.body;
          var x = document.createElement('x');
          var svg;
          xhr.onload = null;
          x.innerHTML = xhr.responseText;
          svg = x.getElementsByTagName('svg')[0];
          if (svg) {
            svg.setAttribute('aria-hidden', 'true');
            svg.style.position = 'absolute';
            svg.style.width = 0;
            svg.style.height = 0;
            svg.style.overflow = 'hidden';
            body.insertBefore(svg, body.firstChild);
          }
          observeIfDone();
        };
      }
      function onErrorTimeout(xhr) {
        return function () {
          xhr.onerror = null;
          xhr.ontimeout = null;
          observeIfDone();
        };
      }
      unobserveChanges(); // stop watching for changes to DOM
      // find all use elements
      uses = document.getElementsByTagName('use');
      for (i = 0; i < uses.length; i += 1) {
        try {
          bcr = uses[i].getBoundingClientRect();
        } catch (ignore) {
          // failed to get bounding rectangle of the use element
          bcr = false;
        }
        href = uses[i].getAttribute('href') || uses[i].getAttributeNS(xlinkNS, 'href') || uses[i].getAttribute('xlink:href');
        if (href && href.split) {
          url = href.split('#');
        } else {
          url = ['', ''];
        }
        base = url[0];
        hash = url[1];
        isHidden = bcr && bcr.left === 0 && bcr.right === 0 && bcr.top === 0 && bcr.bottom === 0;
        if (bcr && bcr.width === 0 && bcr.height === 0 && !isHidden) {
          // the use element is empty
          // if there is a reference to an external SVG, try to fetch it
          // use the optional fallback URL if there is no reference to an external SVG
          if (fallback && !base.length && hash && !document.getElementById(hash)) {
            base = fallback;
          }
          if (uses[i].hasAttribute('href')) {
            uses[i].setAttributeNS(xlinkNS, 'xlink:href', href);
          }
          if (base.length) {
            // schedule updating xlink:href
            xhr = cache[base];
            if (xhr !== true) {
              // true signifies that prepending the SVG was not required
              setTimeout(attrUpdateFunc({
                useEl: uses[i],
                base: base,
                hash: hash
              }), 0);
            }
            if (xhr === undefined) {
              Request = createRequest(base);
              if (Request !== undefined) {
                xhr = new Request();
                cache[base] = xhr;
                xhr.onload = onloadFunc(xhr);
                xhr.onerror = onErrorTimeout(xhr);
                xhr.ontimeout = onErrorTimeout(xhr);
                xhr.open('GET', base);
                xhr.send();
                inProgressCount += 1;
              }
            }
          }
        } else {
          if (!isHidden) {
            if (cache[base] === undefined) {
              // remember this URL if the use element was not empty and no request was sent
              cache[base] = true;
            } else if (cache[base].onload) {
              // if it turns out that prepending the SVG is not necessary,
              // abort the in-progress xhr.
              cache[base].abort();
              delete cache[base].onload;
              cache[base] = true;
            }
          } else if (base.length && cache[base]) {
            setTimeout(attrUpdateFunc({
              useEl: uses[i],
              base: base,
              hash: hash
            }), 0);
          }
        }
      }
      uses = '';
      inProgressCount += 1;
      observeIfDone();
    };
    var _winLoad;
    _winLoad = function winLoad() {
      window.removeEventListener('load', _winLoad, false); // to prevent memory leaks
      tid = setTimeout(checkUseElems, 0);
    };
    if (document.readyState !== 'complete') {
      // The load event fires when all resources have finished loading, which allows detecting whether SVG use elements are empty.
      window.addEventListener('load', _winLoad, false);
    } else {
      // No need to add a listener if the document is already loaded, initialize immediately.
      _winLoad();
    }
  }
})();

/***/ }),

/***/ "./src/js/util.js":
/*!************************!*\
  !*** ./src/js/util.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Promise = undefined;
exports.clamp = clamp;
exports.keyMirror = keyMirror;
exports.makeStyleText = makeStyleText;
exports.getProperties = getProperties;
exports.toInteger = toInteger;
exports.toCamelCase = toCamelCase;
exports.isSupportFileApi = isSupportFileApi;
exports.getRgb = getRgb;
exports.sendHostName = sendHostName;
exports.styleLoad = styleLoad;
exports.getSelector = getSelector;
exports.base64ToBlob = base64ToBlob;
exports.fixFloatingPoint = fixFloatingPoint;
exports.assignmentForDestroy = assignmentForDestroy;
exports.cls = cls;
exports.changeOrigin = changeOrigin;
exports.flipObject = flipObject;
exports.setCustomProperty = setCustomProperty;
exports.getCustomProperty = getCustomProperty;
exports.capitalizeString = capitalizeString;
exports.includes = includes;
exports.getFillTypeFromOption = getFillTypeFromOption;
exports.getFillTypeFromObject = getFillTypeFromObject;
exports.isShape = isShape;
exports.getObjectType = getObjectType;
exports.isSilentCommand = isSilentCommand;
exports.getHistoryTitle = getHistoryTitle;
exports.getHelpMenuBarPosition = getHelpMenuBarPosition;
exports.isEmptyCropzone = isEmptyCropzone;

var _tuiCodeSnippet = __webpack_require__(/*! tui-code-snippet */ "tui-code-snippet");

var _promise = __webpack_require__(/*! core-js-pure/features/promise */ "./node_modules/core-js-pure/features/promise/index.js");

var _promise2 = _interopRequireDefault(_promise);

var _consts = __webpack_require__(/*! @/consts */ "./src/js/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FLOATING_POINT_DIGIT = 2; /**
                               * @author NHN. FE Development Team <dl_javascript@nhn.com>
                               * @fileoverview Util
                               */

var CSS_PREFIX = 'tui-image-editor-';
var min = Math.min,
    max = Math.max;

var hostnameSent = false;

/**
 * Export Promise Class (for simplified module path)
 * @returns {Promise} promise class
 */
exports.Promise = _promise2.default;

/**
 * Clamp value
 * @param {number} value - Value
 * @param {number} minValue - Minimum value
 * @param {number} maxValue - Maximum value
 * @returns {number} clamped value
 */

function clamp(value, minValue, maxValue) {
  if (minValue > maxValue) {
    var _ref = [maxValue, minValue];
    minValue = _ref[0];
    maxValue = _ref[1];
  }

  return max(minValue, min(value, maxValue));
}

/**
 * Make key-value object from arguments
 * @returns {object.<string, string>}
 */
function keyMirror() {
  var obj = {};

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  (0, _tuiCodeSnippet.forEach)(args, function (key) {
    obj[key] = key;
  });

  return obj;
}

/**
 * Make CSSText
 * @param {Object} styleObj - Style info object
 * @returns {string} Connected string of style
 */
function makeStyleText(styleObj) {
  var styleStr = '';

  (0, _tuiCodeSnippet.forEach)(styleObj, function (value, prop) {
    styleStr += prop + ': ' + value + ';';
  });

  return styleStr;
}

/**
 * Get object's properties
 * @param {Object} obj - object
 * @param {Array} keys - keys
 * @returns {Object} properties object
 */
function getProperties(obj, keys) {
  var props = {};
  var length = keys.length;

  var i = 0;
  var key = void 0;

  for (i = 0; i < length; i += 1) {
    key = keys[i];
    props[key] = obj[key];
  }

  return props;
}

/**
 * ParseInt simpliment
 * @param {number} value - Value
 * @returns {number}
 */
function toInteger(value) {
  return parseInt(value, 10);
}

/**
 * String to camelcase string
 * @param {string} targetString - change target
 * @returns {string}
 * @private
 */
function toCamelCase(targetString) {
  return targetString.replace(/-([a-z])/g, function ($0, $1) {
    return $1.toUpperCase();
  });
}

/**
 * Check browser file api support
 * @returns {boolean}
 * @private
 */
function isSupportFileApi() {
  return !!(window.File && window.FileList && window.FileReader);
}

/**
 * hex to rgb
 * @param {string} color - hex color
 * @param {string} alpha - color alpha value
 * @returns {string} rgb expression
 */
function getRgb(color, alpha) {
  if (color.length === 4) {
    color = '' + color + color.slice(1, 4);
  }
  var r = parseInt(color.slice(1, 3), 16);
  var g = parseInt(color.slice(3, 5), 16);
  var b = parseInt(color.slice(5, 7), 16);
  var a = alpha || 1;

  return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
}

/**
 * send hostname
 */
function sendHostName() {
  if (hostnameSent) {
    return;
  }
  hostnameSent = true;

  (0, _tuiCodeSnippet.sendHostname)('image-editor', 'UA-129999381-1');
}

/**
 * Apply css resource
 * @param {string} styleBuffer - serialized css text
 * @param {string} tagId - style tag id
 */
function styleLoad(styleBuffer, tagId) {
  var _document$getElements = document.getElementsByTagName('head'),
      head = _document$getElements[0];

  var linkElement = document.createElement('link');
  var styleData = encodeURIComponent(styleBuffer);
  if (tagId) {
    linkElement.id = tagId;
    // linkElement.id = 'tui-image-editor-theme-style';
  }
  linkElement.setAttribute('rel', 'stylesheet');
  linkElement.setAttribute('type', 'text/css');
  linkElement.setAttribute('href', 'data:text/css;charset=UTF-8,' + styleData);
  head.appendChild(linkElement);
}

/**
 * Get selector
 * @param {HTMLElement} targetElement - target element
 * @returns {Function} selector
 */
function getSelector(targetElement) {
  return function (str) {
    return targetElement.querySelector(str);
  };
}

/**
 * Change base64 to blob
 * @param {String} data - base64 string data
 * @returns {Blob} Blob Data
 */
function base64ToBlob(data) {
  var rImageType = /data:(image\/.+);base64,/;
  var mimeString = '';
  var raw = void 0,
      uInt8Array = void 0,
      i = void 0;

  raw = data.replace(rImageType, function (header, imageType) {
    mimeString = imageType;

    return '';
  });

  raw = atob(raw);
  var rawLength = raw.length;
  uInt8Array = new Uint8Array(rawLength); // eslint-disable-line

  for (i = 0; i < rawLength; i += 1) {
    uInt8Array[i] = raw.charCodeAt(i);
  }

  return new Blob([uInt8Array], { type: mimeString });
}

/**
 * Fix floating point diff.
 * @param {number} value - original value
 * @returns {number} fixed value
 */
function fixFloatingPoint(value) {
  return Number(value.toFixed(FLOATING_POINT_DIGIT));
}

/**
 * Assignment for destroying objects.
 * @param {Object} targetObject - object to be removed.
 */
function assignmentForDestroy(targetObject) {
  (0, _tuiCodeSnippet.forEach)(targetObject, function (value, key) {
    targetObject[key] = null;
  });
}

/**
 * Make class name for ui
 * @param {String} str  - main string of className
 * @param {String} prefix - prefix string of className
 * @returns {String} class name
 */
function cls() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (str.charAt(0) === '.') {
    return '.' + CSS_PREFIX + prefix + str.slice(1);
  }

  return '' + CSS_PREFIX + prefix + str;
}

/**
 * Change object origin
 * @param {fabric.Object} fObject - fabric object
 * @param {Object} origin - origin of fabric object
 *   @param {string} originX - horizontal basis.
 *   @param {string} originY - vertical basis.
 */
function changeOrigin(fObject, origin) {
  var originX = origin.originX,
      originY = origin.originY;

  var _fObject$getPointByOr = fObject.getPointByOrigin(originX, originY),
      left = _fObject$getPointByOr.x,
      top = _fObject$getPointByOr.y;

  fObject.set({
    left: left,
    top: top,
    originX: originX,
    originY: originY
  });

  fObject.setCoords();
}

/**
 * Object key value flip
 * @param {Object} targetObject - The data object of the key value.
 * @returns {Object}
 */
function flipObject(targetObject) {
  var result = {};

  Object.keys(targetObject).forEach(function (key) {
    result[targetObject[key]] = key;
  });

  return result;
}

/**
 * Set custom properties
 * @param {Object} targetObject - target object
 * @param {Object} props - custom props object
 */
function setCustomProperty(targetObject, props) {
  targetObject.customProps = targetObject.customProps || {};
  (0, _tuiCodeSnippet.extend)(targetObject.customProps, props);
}

/**
 * Get custom property
 * @param {fabric.Object} fObject - fabric object
 * @param {Array|string} propNames - prop name array
 * @returns {object | number | string}
 */
function getCustomProperty(fObject, propNames) {
  var resultObject = {};
  if ((0, _tuiCodeSnippet.isString)(propNames)) {
    propNames = [propNames];
  }
  (0, _tuiCodeSnippet.forEach)(propNames, function (propName) {
    resultObject[propName] = fObject.customProps[propName];
  });

  return resultObject;
}

/**
 * Capitalize string
 * @param {string} targetString - target string
 * @returns {string}
 */
function capitalizeString(targetString) {
  return targetString.charAt(0).toUpperCase() + targetString.slice(1);
}

/**
 * Array includes check
 * @param {Array} targetArray - target array
 * @param {string|number} compareValue - compare value
 * @returns {boolean}
 */
function includes(targetArray, compareValue) {
  return targetArray.indexOf(compareValue) >= 0;
}

/**
 * Get fill type
 * @param {Object | string} fillOption - shape fill option
 * @returns {string} 'color' or 'filter'
 */
function getFillTypeFromOption() {
  var fillOption = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return (0, _tuiCodeSnippet.pick)(fillOption, 'type') || _consts.SHAPE_FILL_TYPE.COLOR;
}

/**
 * Get fill type of shape type object
 * @param {fabric.Object} shapeObj - fabric object
 * @returns {string} 'transparent' or 'color' or 'filter'
 */
function getFillTypeFromObject(shapeObj) {
  var _shapeObj$fill = shapeObj.fill,
      fill = _shapeObj$fill === undefined ? {} : _shapeObj$fill;

  if (fill.source) {
    return _consts.SHAPE_FILL_TYPE.FILTER;
  }

  return _consts.SHAPE_FILL_TYPE.COLOR;
}

/**
 * Check if the object is a shape object.
 * @param {fabric.Object} obj - fabric object
 * @returns {boolean}
 */
function isShape(obj) {
  return (0, _tuiCodeSnippet.inArray)(obj.get('type'), _consts.SHAPE_TYPE) >= 0;
}

/**
 * Get object type
 * @param {string} type - fabric object type
 * @returns {string} type of object (ex: shape, icon, ...)
 */
function getObjectType(type) {
  if (includes(_consts.SHAPE_TYPE, type)) {
    return 'Shape';
  }

  switch (type) {
    case 'i-text':
      return 'Text';
    case 'path':
    case 'line':
      return 'Draw';
    case 'activeSelection':
      return 'Group';
    default:
      return toStartOfCapital(type);
  }
}

/**
 * Get filter type
 * @param {string} type - fabric filter type
 * @param {object} [options] - filter type options
 *   @param {boolean} [options.useAlpha=true] - usage of alpha(true is 'color filter', false is 'remove white')
 *   @param {string} [options.mode] - mode of blendColor
 * @returns {string} type of filter (ex: sepia, blur, ...)
 */
function getFilterType(type) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$useAlpha = _ref2.useAlpha,
      useAlpha = _ref2$useAlpha === undefined ? true : _ref2$useAlpha,
      mode = _ref2.mode;

  var VINTAGE = _consts.filterType.VINTAGE,
      REMOVE_COLOR = _consts.filterType.REMOVE_COLOR,
      BLEND_COLOR = _consts.filterType.BLEND_COLOR,
      SEPIA2 = _consts.filterType.SEPIA2,
      COLOR_FILTER = _consts.filterType.COLOR_FILTER,
      REMOVE_WHITE = _consts.filterType.REMOVE_WHITE,
      BLEND = _consts.filterType.BLEND;


  var filterName = void 0;

  switch (type) {
    case VINTAGE:
      filterName = SEPIA2;
      break;
    case REMOVE_COLOR:
      filterName = useAlpha ? COLOR_FILTER : REMOVE_WHITE;
      break;
    case BLEND_COLOR:
      filterName = mode === 'add' ? BLEND : mode;
      break;
    default:
      filterName = type;
  }

  return toStartOfCapital(filterName);
}

/**
 * Check if command is silent command
 * @param {Command|string} command - command or command name
 * @returns {boolean}
 */
function isSilentCommand(command) {
  var LOAD_IMAGE = _consts.commandNames.LOAD_IMAGE;


  return typeof command === 'string' ? LOAD_IMAGE === command : LOAD_IMAGE === command.name;
}

/**
 * Get command name
 * @param {Command|string} command - command or command name
 * @returns {{name: string, ?detail: string}}
 */
// eslint-disable-next-line complexity, require-jsdoc
function getHistoryTitle(command) {
  var FLIP_IMAGE = _consts.commandNames.FLIP_IMAGE,
      ROTATE_IMAGE = _consts.commandNames.ROTATE_IMAGE,
      ADD_TEXT = _consts.commandNames.ADD_TEXT,
      APPLY_FILTER = _consts.commandNames.APPLY_FILTER,
      REMOVE_FILTER = _consts.commandNames.REMOVE_FILTER,
      CHANGE_SHAPE = _consts.commandNames.CHANGE_SHAPE,
      CHANGE_ICON_COLOR = _consts.commandNames.CHANGE_ICON_COLOR,
      CHANGE_TEXT_STYLE = _consts.commandNames.CHANGE_TEXT_STYLE,
      CLEAR_OBJECTS = _consts.commandNames.CLEAR_OBJECTS,
      ADD_IMAGE_OBJECT = _consts.commandNames.ADD_IMAGE_OBJECT,
      REMOVE_OBJECT = _consts.commandNames.REMOVE_OBJECT,
      RESIZE_IMAGE = _consts.commandNames.RESIZE_IMAGE;
  var name = command.name,
      args = command.args;

  var historyInfo = void 0;

  switch (name) {
    case FLIP_IMAGE:
      historyInfo = { name: name, detail: args[1] === 'reset' ? args[1] : args[1].slice(4) };
      break;
    case ROTATE_IMAGE:
      historyInfo = { name: name, detail: args[2] };
      break;
    case APPLY_FILTER:
      historyInfo = { name: _consts.historyNames.APPLY_FILTER, detail: getFilterType(args[1], args[2]) };
      break;
    case REMOVE_FILTER:
      historyInfo = { name: _consts.historyNames.REMOVE_FILTER, detail: 'Remove' };
      break;
    case CHANGE_SHAPE:
      historyInfo = { name: _consts.historyNames.CHANGE_SHAPE, detail: 'Change' };
      break;
    case CHANGE_ICON_COLOR:
      historyInfo = { name: _consts.historyNames.CHANGE_ICON_COLOR, detail: 'Change' };
      break;
    case CHANGE_TEXT_STYLE:
      historyInfo = { name: _consts.historyNames.CHANGE_TEXT_STYLE, detail: 'Change' };
      break;
    case REMOVE_OBJECT:
      historyInfo = { name: _consts.historyNames.REMOVE_OBJECT, detail: args[2] };
      break;
    case CLEAR_OBJECTS:
      historyInfo = { name: _consts.historyNames.CLEAR_OBJECTS, detail: 'All' };
      break;
    case ADD_IMAGE_OBJECT:
      historyInfo = { name: _consts.historyNames.ADD_IMAGE_OBJECT, detail: 'Add' };
      break;
    case ADD_TEXT:
      historyInfo = { name: _consts.historyNames.ADD_TEXT };
      break;
    case RESIZE_IMAGE:
      historyInfo = { name: _consts.historyNames.RESIZE, detail: ~~args[1].width + 'x' + ~~args[1].height };
      break;

    default:
      historyInfo = { name: name };
      break;
  }

  if (args[1] === 'mask') {
    historyInfo = { name: _consts.historyNames.LOAD_MASK_IMAGE, detail: 'Apply' };
  }

  return historyInfo;
}

/**
 * Get help menubar position(opposite of menubar)
 * @param {string} position - position of menubar
 * @returns {string} position of help menubar
 */
function getHelpMenuBarPosition(position) {
  if (position === 'top') {
    return 'bottom';
  }
  if (position === 'left') {
    return 'right';
  }
  if (position === 'right') {
    return 'left';
  }

  return 'top';
}

/**
 * Change to capital start letter
 * @param {string} str - string to change
 * @returns {string}
 */
function toStartOfCapital(str) {
  return str.replace(/[a-z]/, function (first) {
    return first.toUpperCase();
  });
}

/**
 * Check if cropRect is Empty.
 * @param {Object} cropRect - cropRect object
 *  @param {Number} cropRect.left - cropRect left position value
 *  @param {Number} cropRect.top - cropRect top position value
 *  @param {Number} cropRect.width - cropRect width value
 *  @param {Number} cropRect.height - cropRect height value
 * @returns {boolean}
 */
function isEmptyCropzone(cropRect) {
  var left = cropRect.left,
      top = cropRect.top,
      width = cropRect.width,
      height = cropRect.height;
  var LEFT = _consts.emptyCropRectValues.LEFT,
      TOP = _consts.emptyCropRectValues.TOP,
      WIDTH = _consts.emptyCropRectValues.WIDTH,
      HEIGHT = _consts.emptyCropRectValues.HEIGHT;


  return left === LEFT && top === TOP && width === WIDTH && height === HEIGHT;
}

/***/ }),

/***/ "fabric":
/*!****************************************************************************************************************!*\
  !*** external {"commonjs":["fabric","fabric"],"commonjs2":["fabric","fabric"],"amd":"fabric","root":"fabric"} ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_fabric__;

/***/ }),

/***/ "tui-code-snippet":
/*!******************************************************************************************************************************!*\
  !*** external {"commonjs":"tui-code-snippet","commonjs2":"tui-code-snippet","amd":"tui-code-snippet","root":["tui","util"]} ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_tui_code_snippet__;

/***/ })

/******/ });
});
//# sourceMappingURL=tui-image-editor.js.map