/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/buttons.js":
/*!************************!*\
  !*** ./src/buttons.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var buttons = {
  mainButtons: {
    Backquote: '`',
    Digit1: '1',
    Digit2: '2',
    Digit3: '3',
    Digit4: '4',
    Digit5: '5',
    Digit6: '6',
    Digit7: '7',
    Digit8: '8',
    Digit9: '9',
    Digit0: '0',
    Minus: '-',
    Equal: '=',
    Backspace: 'Backspace',
    Tab: 'Tab',
    KeyQ: 'q',
    KeyW: 'w',
    KeyE: 'e',
    KeyR: 'r',
    KeyT: 't',
    KeyY: 'y',
    KeyU: 'u',
    KeyI: 'i',
    KeyO: 'o',
    KeyP: 'p',
    BracketLeft: '[',
    BracketRight: ']',
    Backslash: '\\',
    Delete: 'DEL',
    CapsLock: 'Caps Lock',
    KeyA: 'a',
    KeyS: 's',
    KeyD: 'd',
    KeyF: 'f',
    KeyG: 'g',
    KeyH: 'h',
    KeyJ: 'j',
    KeyK: 'k',
    KeyL: 'l',
    Semicolon: ';',
    Quote: "'",
    Enter: 'ENTER',
    ShiftLeft: 'Shift',
    KeyZ: 'z',
    KeyX: 'x',
    KeyC: 'c',
    KeyV: 'v',
    KeyB: 'b',
    KeyN: 'n',
    KeyM: 'm',
    Period: '.',
    Comma: ',',
    Slash: '/',
    ArrowUp: '▲',
    ShiftRight: 'Shift ',
    ControlLeft: 'Ctrl',
    MetaLeft: 'Win',
    AltLeft: 'Alt',
    Space: ' ',
    AltRight: 'Alt',
    ArrowLeft: '◄',
    ArrowDown: '▼',
    ArrowRight: '►',
    ControlRight: 'Ctrl'
  },
  extendedSymbols: ['~', '!', '@', '#', '$', '%', ':', '?', '*', '(', ')', '_', '+', '/'],
  specialButtons: ['Tab', 'CapsLock', 'ShiftLeft', 'ShiftRight', 'MetaLeft', 'AltLeft', 'AltRight', 'ControlLeft', 'ControlRight', 'Enter', 'Delete', 'Backspace', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buttons);

/***/ }),

/***/ "./src/functionality.js":
/*!******************************!*\
  !*** ./src/functionality.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons */ "./src/buttons.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function functionality() {
  var keyboard = document.querySelector('.keyboard');
  var allButtons = document.querySelectorAll('.btn');
  var capsLock = document.querySelector('.CapsLock');
  var textArea = document.querySelector('textarea');
  document.addEventListener('load', function () {
    textArea.focus();
  });

  function getLetters() {
    var alphabetButtonsId = [];
    Object.keys(_buttons__WEBPACK_IMPORTED_MODULE_0__["default"].mainButtons).forEach(function (elem) {
      if (elem.match(/Key/)) {
        alphabetButtonsId.push(elem);
      }
    });
    return alphabetButtonsId;
  }

  function textareaUpdate(elem) {
    textArea.value += elem;
  }

  function specialButtonHandler() {
    allButtons.forEach(function (elem) {
      if (getLetters().includes(elem.classList[1])) {
        // eslint-disable-next-line no-unused-expressions
        elem.innerHTML === elem.innerHTML.toUpperCase() ? elem.innerHTML = elem.innerHTML.toLowerCase() : elem.innerHTML = elem.innerHTML.toUpperCase();
      }
    });
  }

  function extendedSymbolsHandler(flag) {
    for (var i = 0; i < 13; i++) {
      if (flag === 'on') {
        allButtons[i].innerHTML = _buttons__WEBPACK_IMPORTED_MODULE_0__["default"].extendedSymbols[i];
      } else {
        allButtons[i].innerHTML = Object.values(_buttons__WEBPACK_IMPORTED_MODULE_0__["default"].mainButtons)[i];
      }
    }

    if (flag === 'on') {
      allButtons['27'].innerHTML = _buttons__WEBPACK_IMPORTED_MODULE_0__["default"].extendedSymbols[13];
    } else {
      allButtons['27'].innerHTML = Object.values(_buttons__WEBPACK_IMPORTED_MODULE_0__["default"].mainButtons)['27'];
    }
  }

  document.addEventListener('keydown', function (event) {
    if (event.key !== 'CapsLock' && event.key !== 'F12') {
      document.querySelector(".".concat(event.code)).classList.add('active');
    }

    if (event.key === 'CapsLock') {
      capsLock.classList.toggle('active');
      specialButtonHandler();
    }

    if (event.shiftKey) {
      if (!event.repeat) {
        document.querySelector(".".concat(event.code)).classList.add('active');
        specialButtonHandler();
        extendedSymbolsHandler('on');
      }
    }

    if (event.key === 'Tab') {
      event.preventDefault();
      textArea.value += '    ';
      textArea.focus();
    }
  });
  document.addEventListener('keyup', function (event) {
    // console.log(event.key);
    function removeClass() {
      return document.querySelector(".".concat(event.code)).classList.remove('active');
    }

    if (event.key !== 'CapsLock' && event.key !== 'F12') {
      setTimeout(removeClass, 350);
    }

    if (event.key === 'Shift') {
      document.querySelector(".".concat(event.code)).classList.remove('active');
      specialButtonHandler();
      extendedSymbolsHandler('off'); // console.log(event.key);
    }
  });
  keyboard.addEventListener('mousedown', function (event) {
    // console.log(event.target.classList[1]);
    if (event.target.classList[1] !== 'CapsLock' && event.target.classList[1] !== undefined) {
      document.querySelector(".".concat(event.target.classList[1])).classList.add('active');
    } else if (event.target.classList[1] === 'CapsLock') {
      document.querySelector(".".concat(event.target.classList[1])).classList.toggle('active');
      specialButtonHandler();
    }

    if (event.target.classList[1] === 'ShiftLeft' || event.target.classList[1] === 'ShiftRight') {
      document.querySelector(".".concat(event.target.classList[1])).classList.add('active');
      specialButtonHandler();
      extendedSymbolsHandler('on');
    }
  });
  keyboard.addEventListener('mouseup', function (event) {
    function removeClass() {
      return document.querySelector(".".concat(event.target.classList[1])).classList.remove('active');
    }

    if (event.target.classList[1] !== 'CapsLock' && event.target.classList[1] !== undefined) {
      setTimeout(removeClass, 350);
    }

    if (event.target.classList[1] === 'ShiftLeft' || event.target.classList[1] === 'ShiftRight') {
      document.querySelector(".".concat(event.target.classList[1])).classList.remove('active');
      specialButtonHandler();
      extendedSymbolsHandler('off');
    }
  });
  keyboard.addEventListener('click', function (event) {
    if (event.target.classList[1] !== undefined) {
      if (event.target.classList[1] === 'Enter') {
        textArea.value += '\r\n';
      }

      if (event.target.classList[1] === 'Backspace') {
        textArea.value = textArea.value.split('').slice(0, -1).join('');
      }

      if (event.target.classList[1] === 'Tab') {
        event.preventDefault();
        textArea.value += '    ';
        textArea.focus();
      }
    }

    if (!Object.values(_buttons__WEBPACK_IMPORTED_MODULE_0__["default"].specialButtons).includes(event.target.classList[1]) && event.target.classList[1] !== undefined) {
      textareaUpdate(event.target.innerHTML);
    }
  });
})());

/***/ }),

/***/ "./src/layout.js":
/*!***********************!*\
  !*** ./src/layout.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons */ "./src/buttons.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function layout() {
  var APP = document.querySelector('#app');
  var wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  var container = document.createElement('div');
  container.classList.add('container');
  var title = document.createElement('h1');
  title.classList.add('title');
  title.innerHTML = 'RSS Virtual Keyboard';
  container.append(title);
  var textarea = document.createElement('textarea');
  textarea.classList.add('textarea');
  textarea.autofocus = true;
  container.append(textarea);
  var keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  var mainButtonsArrayLength = Array.from(Object.entries(_buttons__WEBPACK_IMPORTED_MODULE_0__["default"].mainButtons)).length;

  for (var i = 0; i < mainButtonsArrayLength; i++) {
    var keyButton = document.createElement('div');
    keyButton.classList.add('btn');
    keyButton.classList.add("".concat(Object.keys(_buttons__WEBPACK_IMPORTED_MODULE_0__["default"].mainButtons)[i]));
    if (_buttons__WEBPACK_IMPORTED_MODULE_0__["default"].specialButtons.includes(Object.keys(_buttons__WEBPACK_IMPORTED_MODULE_0__["default"].mainButtons)[i])) keyButton.classList.add('special');
    keyButton.innerHTML = Object.values(_buttons__WEBPACK_IMPORTED_MODULE_0__["default"].mainButtons)[i];
    keyboard.append(keyButton);
  }

  container.append(keyboard);
  var info = document.createElement('div');
  info.classList.add('info');
  var paragraph1 = document.createElement('p');
  paragraph1.innerHTML = 'Keyboard was created in Windows system';
  info.append(paragraph1);
  var paragraph2 = document.createElement('p');
  paragraph2.innerHTML = 'Language switched by left CTRL + ALT';
  info.append(paragraph2);
  container.append(info);
  wrapper.append(container);
  APP.append(wrapper);
})());

/***/ }),

/***/ "./src/style.sass":
/*!************************!*\
  !*** ./src/style.sass ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.sass */ "./src/style.sass");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout */ "./src/layout.js");
/* harmony import */ var _functionality__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functionality */ "./src/functionality.js");



})();

/******/ })()
;
//# sourceMappingURL=index.js.map