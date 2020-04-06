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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _keyboardView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboardView */ "./src/js/keyboardView.js");
// main actions  with keyboard will be there

Object(_keyboardView__WEBPACK_IMPORTED_MODULE_0__["default"])();

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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var buttonsLayout = [[['Backquote', 'ё', 'Ё', '`', '~'], ['Digit1', '1', '!', '1', '!'], ['Digit2', '2', '"', '2', '@'], ['Digit3', '3', '№', '3', '#'], ['Digit4', '4', ';', '4', '$'], ['Digit5', '5', '%', '5', '%'], ['Digit6', '6', ':', '6', '^'], ['Digit7', '7', '?', '7', '&'], ['Digit8', '8', '*', '8', '*'], ['Digit9', '9', '(', '9', '('], ['Digit0', '0', ')', '0', ')'], ['Digit-', '-', '_', '-', '_'], ['Equal=', '=', '+', '=', '+'], ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace']], [['Tab', 'Tab', 'Tab', 'Tab', 'Tab'], ['KeyQ', 'й', 'Й', 'q', 'Q'], ['KeyW', 'ц', 'Ц', 'w', 'W'], ['KeyE', 'у', 'У', 'e', 'E'], ['KeyR', 'к', 'К', 'r', 'R'], ['KeyT', 'е', 'Е', 't', 'T'], ['KeyY', 'н', 'Н', 'y', 'Y'], ['KeyU', 'г', 'Г', 'u', 'U'], ['KeyI', 'ш', 'Ш', 'i', 'I'], ['KeyO', 'щ', 'Щ', 'o', 'O'], ['KeyP', 'з', 'З', 'p', 'P'], ['BracketLeft', 'х', 'Х', '[', '{'], ['BracketRight', 'ъ', 'Ъ', ']', '}'], ['Backslash', '\\', '/', '\\', '|']], [['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'], ['KeyA', 'ф', 'Ф', 'a', 'A'], ['KeyS', 'ы', 'Ы', 's', 'S'], ['KeyD', 'в', 'В', 'd', 'D'], ['KeyF', 'а', 'А', 'f', 'F'], ['KeyG', 'п', 'П', 'g', 'G'], ['KeyH', 'р', 'Р', 'h', 'H'], ['KeyJ', 'о', 'О', 'j', 'J'], ['KeyK', 'л', 'Л', 'k', 'K'], ['KeyL', 'д', 'Д', 'l', 'L'], ['Semicolon', 'ж', 'Ж', ';', ':'], ['Quote', 'э', 'Э', '\'', '"'], ['Enter', 'Enter', 'Enter', 'Enter', 'Enter']], [['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'], ['KeyZ', 'я', 'Я', 'z', 'Z'], ['KeyX', 'ч', 'Ч', 'x', 'X'], ['KeyC', 'с', 'С', 'c', 'C'], ['KeyV', 'м', 'М', 'v', 'V'], ['KeyB', 'и', 'И', 'b', 'B'], ['KeyN', 'т', 'Т', 'n', 'N'], ['KeyM', 'ь', 'Ь', 'm', 'M'], ['Comma', 'б', 'Б', ',', '<'], ['Period', 'ю', 'Ю', '.', '>'], ['Slash', '.', ',', '/', '?'], ['ArrowUp', String.fromCharCode(8593), String.fromCharCode(8593), String.fromCharCode(8593), String.fromCharCode(8593)], ['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift']], [['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'], ['OSLeft', 'Win', 'Win', 'Win', 'Win'], ['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'], ['Space', 'Space', 'Space', 'Space', 'Space'], ['AltRight', 'Alt', 'Alt', 'Alt', 'Alt'], ['ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'], ['ArrowLeft', String.fromCharCode(8592), String.fromCharCode(8592), String.fromCharCode(8592), String.fromCharCode(8592)], ['ArrowDown', String.fromCharCode(8595), String.fromCharCode(8595), String.fromCharCode(8595), String.fromCharCode(8595)], ['ArrowRight', String.fromCharCode(8594), String.fromCharCode(8594), String.fromCharCode(8594), String.fromCharCode(8594)]]];

var getLocalLanguage = function getLocalLanguage() {
  return localStorage.getItem('language') || 'en';
};

var createKeyboardView = function createKeyboardView() {
  var wrapper = Object(_generalFunctions__WEBPACK_IMPORTED_MODULE_0__["default"])(wrapper, 'div', 'wrapper');
  document.body.append(wrapper);
  var textarea = Object(_generalFunctions__WEBPACK_IMPORTED_MODULE_0__["default"])(textarea, 'textarea', 'textarea');
  textarea.setAttribute('autofocus', 'autofocus');
  textarea.setAttribute('cols', 100);
  textarea.setAttribute('rows', 15);
  var keyboardContainer = Object(_generalFunctions__WEBPACK_IMPORTED_MODULE_0__["default"])(keyboardContainer, 'div', 'keyboard-container');
  buttonsLayout.forEach(function (row) {
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
      var language = getLocalLanguage();
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
};

/* harmony default export */ __webpack_exports__["default"] = (createKeyboardView);

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