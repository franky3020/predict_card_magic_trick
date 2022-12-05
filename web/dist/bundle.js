/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/InitSetting.js":
/*!****************************!*\
  !*** ./src/InitSetting.js ***!
  \****************************/
/***/ ((module) => {

eval("\n\n\n\n\n\nlet width = window.innerWidth;\nlet height = window.innerHeight;\n\n\nmodule.exports = {\n    width,\n    height\n}\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://web/./src/InitSetting.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const InitSetting = __webpack_require__(/*! ./InitSetting */ \"./src/InitSetting.js\");\n\nlet canStartDraw = false;\n\nconst s = (sketch) => {\n\n    sketch.setup = () => {\n\n        let width = InitSetting.width;\n        let height = InitSetting.height;\n\n        let myCanvas = sketch.createCanvas(width, height);\n        myCanvas.parent('myContainer');\n\n        sketch.background(0);\n\n    };\n\n    sketch.draw = () => {\n        if (canStartDraw && sketch.mouseIsPressed) {\n            sketch.erase();\n            sketch.ellipse(sketch.mouseX, sketch.mouseY, 80, 80);\n        }\n    };\n};\nlet myp5 = new p5(s);\n\ndocument.addEventListener(\"click\", (event) => {\n\n    if (canStartDraw) {\n        return;\n    }\n    let imgEl = document.getElementById(\"card\");\n    let width = InitSetting.width;\n    let halfWidth = width / 2;\n    if (event.clientX < halfWidth) {\n        imgEl.src = \"./img/card.jpg\";\n    } else {\n        imgEl.src = \"./img/dog.jpg\";\n    }\n    canStartDraw = true;\n})\n\n\n\n//# sourceURL=webpack://web/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;