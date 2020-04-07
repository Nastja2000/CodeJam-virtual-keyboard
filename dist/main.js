/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/index */ "./src/js/index.js");


/***/ }),

/***/ "./src/js/buttonsLayout.js":
/*!*********************************!*\
  !*** ./src/js/buttonsLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var buttonsLayout = [[['Backquote', 'ё', 'Ё', '`', '~'], ['Digit1', '1', '!', '1', '!'], ['Digit2', '2', '"', '2', '@'], ['Digit3', '3', '№', '3', '#'], ['Digit4', '4', ';', '4', '$'], ['Digit5', '5', '%', '5', '%'], ['Digit6', '6', ':', '6', '^'], ['Digit7', '7', '?', '7', '&'], ['Digit8', '8', '*', '8', '*'], ['Digit9', '9', '(', '9', '('], ['Digit0', '0', ')', '0', ')'], ['Digit-', '-', '_', '-', '_'], ['Equal=', '=', '+', '=', '+'], ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace']], [['Tab', 'Tab', 'Tab', 'Tab', 'Tab'], ['KeyQ', 'й', 'Й', 'q', 'Q'], ['KeyW', 'ц', 'Ц', 'w', 'W'], ['KeyE', 'у', 'У', 'e', 'E'], ['KeyR', 'к', 'К', 'r', 'R'], ['KeyT', 'е', 'Е', 't', 'T'], ['KeyY', 'н', 'Н', 'y', 'Y'], ['KeyU', 'г', 'Г', 'u', 'U'], ['KeyI', 'ш', 'Ш', 'i', 'I'], ['KeyO', 'щ', 'Щ', 'o', 'O'], ['KeyP', 'з', 'З', 'p', 'P'], ['BracketLeft', 'х', 'Х', '[', '{'], ['BracketRight', 'ъ', 'Ъ', ']', '}'], ['Backslash', '\\', '/', '\\', '|']], [['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'], ['KeyA', 'ф', 'Ф', 'a', 'A'], ['KeyS', 'ы', 'Ы', 's', 'S'], ['KeyD', 'в', 'В', 'd', 'D'], ['KeyF', 'а', 'А', 'f', 'F'], ['KeyG', 'п', 'П', 'g', 'G'], ['KeyH', 'р', 'Р', 'h', 'H'], ['KeyJ', 'о', 'О', 'j', 'J'], ['KeyK', 'л', 'Л', 'k', 'K'], ['KeyL', 'д', 'Д', 'l', 'L'], ['Semicolon', 'ж', 'Ж', ';', ':'], ['Quote', 'э', 'Э', '\'', '"'], ['Enter', 'Enter', 'Enter', 'Enter', 'Enter']], [['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'], ['KeyZ', 'я', 'Я', 'z', 'Z'], ['KeyX', 'ч', 'Ч', 'x', 'X'], ['KeyC', 'с', 'С', 'c', 'C'], ['KeyV', 'м', 'М', 'v', 'V'], ['KeyB', 'и', 'И', 'b', 'B'], ['KeyN', 'т', 'Т', 'n', 'N'], ['KeyM', 'ь', 'Ь', 'm', 'M'], ['Comma', 'б', 'Б', ',', '<'], ['Period', 'ю', 'Ю', '.', '>'], ['Slash', '.', ',', '/', '?'], ['ArrowUp', String.fromCharCode(8593), String.fromCharCode(8593), String.fromCharCode(8593), String.fromCharCode(8593)], ['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift']], [['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'], ['OSLeft', 'Win', 'Win', 'Win', 'Win'], ['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'], ['Space', 'Space', 'Space', 'Space', 'Space'], ['AltRight', 'Alt', 'Alt', 'Alt', 'Alt'], ['ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'], ['ArrowLeft', String.fromCharCode(8592), String.fromCharCode(8592), String.fromCharCode(8592), String.fromCharCode(8592)], ['ArrowDown', String.fromCharCode(8595), String.fromCharCode(8595), String.fromCharCode(8595), String.fromCharCode(8595)], ['ArrowRight', String.fromCharCode(8594), String.fromCharCode(8594), String.fromCharCode(8594), String.fromCharCode(8594)]]];
/* harmony default export */ __webpack_exports__["default"] = (buttonsLayout);

/***/ }),

/***/ "./src/js/changeToPressed.js":
/*!***********************************!*\
  !*** ./src/js/changeToPressed.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function changeToPressed(button) {
  var forceShiftToggle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  /*  const shiftLeft = document.querySelector('.ShiftLeft');
   const shiftRight = document.querySelector('.ShiftRight'); */
  if (button.classList.contains('ShiftLeft') || button.classList.contains('ShiftRight') || forceShiftToggle) {
    document.querySelector('.ShiftLeft').classList.toggle('keyboard__button_activate');
    document.querySelector('.ShiftRight').classList.toggle('keyboard__button_activate');
  } else if (button.classList.contains('CapsLock')) {
    button.classList.toggle('keyboard__button_activate');
  } else {
    button.classList.add('active');
  }

  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (changeToPressed);

/***/ }),

/***/ "./src/js/changeToUnpressed.js":
/*!*************************************!*\
  !*** ./src/js/changeToUnpressed.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function changeToUnpressed(button) {
  var forceShiftToggle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  /*  const shiftLeft = document.querySelector('.ShiftLeft');
   const shiftRight = document.querySelector('.ShiftRight'); */
  if (button.classList.contains('ShiftLeft') || button.classList.contains('ShiftRight') || forceShiftToggle) {
    document.querySelector('.ShiftLeft').classList.toggle('keyboard__button_activate');
    document.querySelector('.ShiftRight').classList.toggle('keyboard__button_activate');
  } else if (button.classList.contains('CapsLock')) {
    button.classList.toggle('keyboard__button_activate');
  } else {
    setTimeout(function () {
      button.classList.remove('active');
    }, 250);
  }

  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (changeToUnpressed);

/***/ }),

/***/ "./src/js/generalFunctions.js":
/*!************************************!*\
  !*** ./src/js/generalFunctions.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function generateDomElement(currentNode, element) {
  var _currentNode$classLis;

  currentNode = document.createElement(element);

  for (var _len = arguments.length, classes = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    classes[_key - 2] = arguments[_key];
  }

  (_currentNode$classLis = currentNode.classList).add.apply(_currentNode$classLis, classes);

  return currentNode;
}

/* harmony default export */ __webpack_exports__["default"] = (generateDomElement);

/***/ }),

/***/ "./src/js/getLocalLanguage.js":
/*!************************************!*\
  !*** ./src/js/getLocalLanguage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function getLocalLanguage() {
  return localStorage.getItem('language') || 'en';
}

/* harmony default export */ __webpack_exports__["default"] = (getLocalLanguage);

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _keyboardView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboardView */ "./src/js/keyboardView.js");
/* harmony import */ var _getLocalLanguage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLocalLanguage */ "./src/js/getLocalLanguage.js");
/* harmony import */ var _keyboardPressedEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keyboardPressedEvents */ "./src/js/keyboardPressedEvents.js");
/* harmony import */ var _changeToPressed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changeToPressed */ "./src/js/changeToPressed.js");
/* harmony import */ var _changeToUnpressed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./changeToUnpressed */ "./src/js/changeToUnpressed.js");
/* harmony import */ var _keyboardUnpressedEvents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./keyboardUnpressedEvents */ "./src/js/keyboardUnpressedEvents.js");
/* harmony import */ var _writeSymbol__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./writeSymbol */ "./src/js/writeSymbol.js");
/* harmony import */ var _mouseEvents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mouseEvents */ "./src/js/mouseEvents.js");
/* harmony import */ var _moveCursor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./moveCursor */ "./src/js/moveCursor.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// main actions  with keyboard will be there









Object(_keyboardView__WEBPACK_IMPORTED_MODULE_0__["default"])();

var changeRegister = function changeRegister() {
  document.querySelectorAll('.keyboard__button').forEach(function (button) {
    button.childNodes.forEach(function (element) {
      console.log(element);
      element.childNodes.forEach(function (item) {
        return item.classList.toggle('on');
      });
    });
  });
};

var changeRegisterByCapsLock = function changeRegisterByCapsLock() {
  document.querySelectorAll('.keyboard__button').forEach(function (button) {
    if (!button.matches('.Digit0') && !button.matches('.Digit1') && !button.matches('.Digit2') && !button.matches('.Digit3') && !button.matches('.Digit4') && !button.matches('.Digit5') && !button.matches('.Digit6') && !button.matches('.Digit7') && !button.matches('.Digit8') && !button.matches('.Digit9') && !button.matches('.Digit-') && !button.classList.contains('Equal=') && !button.matches('.Backslash') && !button.matches('.Slash')) {
      button.childNodes.forEach(function (element) {
        console.log(element);
        element.childNodes.forEach(function (item) {
          return item.classList.toggle('on');
        });
      });
    }
  });
};

var changeLanguage = function changeLanguage() {
  var language = Object(_getLocalLanguage__WEBPACK_IMPORTED_MODULE_1__["default"])();
  if (language === 'en') localStorage.setItem('language', 'ru');else localStorage.setItem('language', 'en');
  document.querySelectorAll('.keyboard__button').forEach(function (button) {
    return _toConsumableArray(button.children).forEach(function (item) {
      return item.classList.toggle('current');
    });
  });
};

var keyboardContainer = document.querySelector('.keyboard-container');
keyboardContainer.shiftPressed = false;
keyboardContainer.capsLockPressed = false;
keyboardContainer.pressedButton = new Set();

keyboardContainer.shiftPressedEvent = function shiftPressedEvent(button) {
  if (this.shiftPressed) return false;
  this.shiftPressed = true;
  changeRegister();
  Object(_changeToPressed__WEBPACK_IMPORTED_MODULE_3__["default"])(button);
  return true;
};

keyboardContainer.shiftUnpressedEvent = function shiftUnpressedEvent(button) {
  if (!this.shiftPressed) return false;
  this.shiftPressed = false;
  changeRegister();
  Object(_changeToUnpressed__WEBPACK_IMPORTED_MODULE_4__["default"])(button);
  return true;
};

keyboardContainer.capsLockEvent = function capsLockEvent() {
  this.capsLockPressed = !this.capsLockPressed;
  changeRegisterByCapsLock();
  return true;
};

keyboardContainer.changeLanguageEvent = function changeLanguageEvent() {
  changeLanguage();
};

var textarea = document.querySelector('.textarea');
textarea.addEventListener('keydown', _keyboardPressedEvents__WEBPACK_IMPORTED_MODULE_2__["default"].bind(keyboardContainer));
textarea.addEventListener('keyup', _keyboardUnpressedEvents__WEBPACK_IMPORTED_MODULE_5__["default"].bind(keyboardContainer));
textarea.addEventListener('blur', function () {
  return textarea.focus();
});
keyboardContainer.addEventListener('mousedown', _mouseEvents__WEBPACK_IMPORTED_MODULE_7__["default"].bind(keyboardContainer));

keyboardContainer.writeSymbolEvent = function writeSymbolEvent(button) {
  Object(_writeSymbol__WEBPACK_IMPORTED_MODULE_6__["default"])(button, textarea);

  if (this.shiftPressedByMouse) {
    this.shiftUnpressedEvent(button, true);
  }

  return true;
};

keyboardContainer.moveCursorEvent = function moveCursorEvent(button) {
  Object(_moveCursor__WEBPACK_IMPORTED_MODULE_8__["default"])(button);
};

/***/ }),

/***/ "./src/js/keyboardPressedEvents.js":
/*!*****************************************!*\
  !*** ./src/js/keyboardPressedEvents.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _changeToPressed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changeToPressed */ "./src/js/changeToPressed.js");


function keyboardPressedEvents(key) {
  var keyCode = ".".concat(key.code);
  var button = document.querySelector(keyCode);

  switch (key.code) {
    case 'CapsLock':
      Object(_changeToPressed__WEBPACK_IMPORTED_MODULE_0__["default"])(button);
      this.capsLockEvent();
      break;

    case 'ShiftLeft':
    case 'ShiftRight':
      this.shiftPressedEvent(button);
      break;

    case 'ArrowUp':
    case 'ArrowRight':
    case 'ArrowDown':
    case 'ArrowLeft':
      this.moveCursorEvent(button);
      break;

    default:
      Object(_changeToPressed__WEBPACK_IMPORTED_MODULE_0__["default"])(button);
      this.writeSymbolEvent(button);
      break;
  }

  this.pressedButton.add(key.code);
  if (this.pressedButton.has('ShiftLeft') && this.pressedButton.has('AltLeft')) this.changeLanguageEvent();
  key.preventDefault();
}

/* harmony default export */ __webpack_exports__["default"] = (keyboardPressedEvents);

/***/ }),

/***/ "./src/js/keyboardUnpressedEvents.js":
/*!*******************************************!*\
  !*** ./src/js/keyboardUnpressedEvents.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _changeToUnpressed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changeToUnpressed */ "./src/js/changeToUnpressed.js");


function keyboardUnpressedEvents(key) {
  var keyCode = ".".concat(key.code);
  var button = document.querySelector(keyCode);

  switch (key.code) {
    case 'ShiftLeft':
    case 'ShiftRight':
      this.shiftUnpressedEvent(button);
      break;

    default:
      Object(_changeToUnpressed__WEBPACK_IMPORTED_MODULE_0__["default"])(button);
      break;
  }

  this.pressedButton["delete"](key.code);
}

/* harmony default export */ __webpack_exports__["default"] = (keyboardUnpressedEvents);

/***/ }),

/***/ "./src/js/keyboardView.js":
/*!********************************!*\
  !*** ./src/js/keyboardView.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generalFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generalFunctions */ "./src/js/generalFunctions.js");
/* harmony import */ var _buttonsLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttonsLayout */ "./src/js/buttonsLayout.js");
/* harmony import */ var _getLocalLanguage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getLocalLanguage */ "./src/js/getLocalLanguage.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function createKeyboardView() {
  var wrapper = Object(_generalFunctions__WEBPACK_IMPORTED_MODULE_0__["default"])(wrapper, 'div', 'wrapper');
  document.body.append(wrapper);
  var textarea = Object(_generalFunctions__WEBPACK_IMPORTED_MODULE_0__["default"])(textarea, 'textarea', 'textarea');
  textarea.setAttribute('autofocus', 'autofocus');
  textarea.setAttribute('cols', 100);
  textarea.setAttribute('rows', 15);
  var keyboardContainer = Object(_generalFunctions__WEBPACK_IMPORTED_MODULE_0__["default"])(keyboardContainer, 'div', 'keyboard-container');
  _buttonsLayout__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(function (row) {
    row.forEach(function (element) {
      var button = Object(_generalFunctions__WEBPACK_IMPORTED_MODULE_0__["default"])(button, 'button');

      var _element = _slicedToArray(element, 5),
          code = _element[0],
          ruLittle = _element[1],
          ruBig = _element[2],
          enLittle = _element[3],
          enBig = _element[4];

      button.classList.add('keyboard__button', code);

      switch (element[0]) {
        case 'Space':
          button.classList.add('keyboard__button_the-widest');
          break;

        case 'Backspace':
        case 'CapsLock':
        case 'ShiftLeft':
        case 'Enter':
          button.classList.add('keyboard__button_wider');
          break;

        case 'ShiftRight':
          button.classList.add('keyboard__key-base-width');
          break;

        default:
          {
            break;
          }
      }

      keyboardContainer.append(button);
      var ruLang = Object(_generalFunctions__WEBPACK_IMPORTED_MODULE_0__["default"])(ruLang, 'span', 'ru');
      var enLang = Object(_generalFunctions__WEBPACK_IMPORTED_MODULE_0__["default"])(ruLang, 'span', 'en');
      var language = Object(_getLocalLanguage__WEBPACK_IMPORTED_MODULE_2__["default"])();
      if (language === 'en') enLang.classList.add('current');else ruLang.classList.add('current');
      button.append(ruLang, enLang);
      var ruLowerCase = Object(_generalFunctions__WEBPACK_IMPORTED_MODULE_0__["default"])(ruLang, 'span', 'small', 'on');
      ruLowerCase.textContent = ruLittle;
      var ruUpperCase = Object(_generalFunctions__WEBPACK_IMPORTED_MODULE_0__["default"])(ruLang, 'span', 'big');
      ruUpperCase.textContent = ruBig;
      ruLang.append(ruLowerCase, ruUpperCase);
      var enLowerCase = Object(_generalFunctions__WEBPACK_IMPORTED_MODULE_0__["default"])(ruLang, 'span', 'small', 'on');
      enLowerCase.textContent = enLittle;
      var enUpperCase = Object(_generalFunctions__WEBPACK_IMPORTED_MODULE_0__["default"])(ruLang, 'span', 'big');
      enUpperCase.textContent = enBig;
      enLang.append(enLowerCase, enUpperCase);
    });
    keyboardContainer.append(document.createElement('br'));
  });
  wrapper.append(textarea, keyboardContainer);
}

/* harmony default export */ __webpack_exports__["default"] = (createKeyboardView);

/***/ }),

/***/ "./src/js/mouseEvents.js":
/*!*******************************!*\
  !*** ./src/js/mouseEvents.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _changeToPressed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changeToPressed */ "./src/js/changeToPressed.js");
/* harmony import */ var _changeToUnpressed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changeToUnpressed */ "./src/js/changeToUnpressed.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function mouseEvents(event) {
  var button = event.target;
  var codeOfButton = '';
  if (event.target.classList.contains('keyboard__button')) button = event.target;else if (event.target.classList.contains('on')) button = event.target.parentNode.parentNode;else return false;

  var _button$classList = _slicedToArray(button.classList, 2);

  codeOfButton = _button$classList[1];

  switch (codeOfButton) {
    case 'ShiftLeft':
    case 'ShiftRight':
      this.shiftPressedByMouse = true;
      if (!this.shiftPressed) this.shiftPressedEvent(button);
      this.shiftUnpressedEvent(button);
      break;

    case 'CapsLock':
      Object(_changeToPressed__WEBPACK_IMPORTED_MODULE_0__["default"])(button);
      this.capsLockEvent(button);
      break;

    case 'ArrowUp':
    case 'ArrowRight':
    case 'ArrowDown':
    case 'ArrowLeft':
      this.moveCursorEvent(button);
      break;

    default:
      Object(_changeToPressed__WEBPACK_IMPORTED_MODULE_0__["default"])(button);
      Object(_changeToUnpressed__WEBPACK_IMPORTED_MODULE_1__["default"])(button);
      this.writeSymbolEvent(button);
      if (!this.shiftPressed) this.shiftUnpressedEvent(button);
      break;
  }

  return true;
}

/* harmony default export */ __webpack_exports__["default"] = (mouseEvents);

/***/ }),

/***/ "./src/js/moveCursor.js":
/*!******************************!*\
  !*** ./src/js/moveCursor.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function moveCursor(button) {
  var textarea = document.querySelector('.textarea');
  var currentPosition = textarea.selectionStart;

  if (button.classList.contains('ArrowLeft')) {
    document.getSelection().removeAllRanges();
    if (currentPosition !== 0) textarea.setSelectionRange(currentPosition - 1, currentPosition - 1);
  }

  if (button.classList.contains('ArrowRight')) {
    if (currentPosition !== 0) textarea.setSelectionRange(currentPosition + 1, currentPosition + 1);
  }

  if (button.classList.contains('ArrowUp')) {
    var maxSize = 100;
    var offsetX = 0;
    var lengthBehindPosition = 0;
    var i = currentPosition;
    if (textarea.value[i] === '\n') i -= 1;

    while (textarea.value[i] !== '\n' && i >= 0) {
      offsetX += 1;
      i -= 1;
    }

    if (textarea.value[i] === '\n') offsetX -= 1;

    if (offsetX >= maxSize) {
      textarea.setSelectionRange(currentPosition - maxSize, currentPosition - maxSize);
      return true;
    }

    i -= 1;

    while (textarea.value[i] !== '\n' && i >= 0) {
      lengthBehindPosition += 1;
      i -= 1;
    }

    lengthBehindPosition %= maxSize;

    if (offsetX >= lengthBehindPosition) {
      if (textarea.value[i] === '\n') offsetX += 1;
      textarea.setSelectionRange(currentPosition - offsetX - 1, currentPosition - offsetX - 1);
      return true;
    }

    if (offsetX < lengthBehindPosition) {
      textarea.setSelectionRange(currentPosition - lengthBehindPosition - 1, currentPosition - lengthBehindPosition - 1);
      return true;
    }
  }

  if (button.classList.contains('ArrowDown')) {
    var _maxSize = 100;
    var offsetLeft = 0;
    var offsetRight = 0;
    var lengthInFrontOfPosition = 0;
    var _i = currentPosition;

    if (textarea.value[_i] === '\n') {
      _i -= 1;
    }

    while (textarea.value[_i] !== '\n' && _i >= 0) {
      offsetLeft += 1;
      _i -= 1;
    }

    if (textarea.value[_i] === '\n' || _i < 0) {
      offsetLeft -= 1;
    }

    _i = currentPosition;

    while (textarea.value[_i] !== '\n' && _i < textarea.value.length) {
      offsetRight += 1;
      _i += 1;
    }

    offsetLeft %= _maxSize;

    if (offsetLeft + offsetRight > _maxSize) {
      if ((offsetLeft + offsetRight) % _maxSize <= offsetLeft) {
        textarea.setSelectionRange(currentPosition + offsetRight, currentPosition + offsetRight);
        return true;
      }

      textarea.setSelectionRange(currentPosition + _maxSize, currentPosition + _maxSize);
      return true;
    }

    if (textarea.value[_i] === '\n') _i += 1;

    while (textarea.value[_i] !== '\n' && _i < textarea.value.length) {
      lengthInFrontOfPosition += 1;
      _i += 1;
    }

    if (offsetLeft <= lengthInFrontOfPosition) {
      textarea.setSelectionRange(currentPosition + offsetLeft + offsetRight + 1, currentPosition + offsetLeft + offsetRight + 1);
      return true;
    }

    if (offsetLeft > lengthInFrontOfPosition) {
      textarea.setSelectionRange(currentPosition + lengthInFrontOfPosition + offsetRight + 1, currentPosition + lengthInFrontOfPosition + offsetRight + 1);
      return true;
    }
  }

  return true;
}

/* harmony default export */ __webpack_exports__["default"] = (moveCursor);

/***/ }),

/***/ "./src/js/writeSymbol.js":
/*!*******************************!*\
  !*** ./src/js/writeSymbol.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function writeSymbol(button, textarea) {
  var inputArea = textarea;
  var currentSymbol = '';
  var codeOfButton = '';
  var valueOfSymbol = '';

  var _filter = _toConsumableArray(button.children).filter(function (element) {
    return element.matches('.current');
  });

  var _filter2 = _slicedToArray(_filter, 1);

  currentSymbol = _filter2[0];

  var _button$classList = _slicedToArray(button.classList, 2);

  codeOfButton = _button$classList[1];
  valueOfSymbol = currentSymbol.innerText;

  switch (codeOfButton) {
    case 'Space':
      inputArea.setRangeText(' ', inputArea.selectionStart, inputArea.selectionEnd, 'end');
      break;

    case 'Tab':
      inputArea.setRangeText('\t', inputArea.selectionStart, inputArea.selectionEnd, 'end');
      break;

    case 'Backspace':
      if (inputArea.value === 0) inputArea.setRangeText('', inputArea.selectionStart, inputArea.selectionEnd, 'end');else if (inputArea.value > 0) inputArea.setRangeText('', inputArea.selectionStart - 1, inputArea.selectionEnd, 'end');
      break;

    case 'Enter':
      inputArea.setRangeText('\n', inputArea.selectionStart, inputArea.selectionEnd, 'end');
      break;

    case 'ShiftLeft':
    case 'ShiftRight':
    case 'ControlLeft':
    case 'ControlRight':
    case 'AltLeft':
    case 'AltRight':
    case 'OSLeft':
    case 'ArrowLeft':
    case 'ArrowRight':
    case 'ArrowUp':
    case 'ArrowDown':
      inputArea.value += '';
      break;

    default:
      inputArea.setRangeText(valueOfSymbol, inputArea.selectionStart, inputArea.selectionEnd, 'end');
      break;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (writeSymbol);

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!************************************************!*\
  !*** multi ./src/app.js ./src/scss/style.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/app.js */"./src/app.js");
module.exports = __webpack_require__(/*! ./src/scss/style.scss */"./src/scss/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map