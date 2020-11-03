/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/canvas.js":
/*!***********************!*\
  !*** ./src/canvas.js ***!
  \***********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
class Canvas {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.clear = document.getElementById("clear")      //clear button
    this.color = document.getElementById('stylus-color')  // drawing color
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    
    this.ctx = this.canvas.getContext("2d");

    this.colorChoice = this.color.jscolor;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    [this.startX, this.startY] = [0, 0]; //initializing coordinates
    [this.endX, this.endY] = [0, 0];
    this.draw = false;

    this.canvas.onpointermove = this.handleMove.bind(this);  //handles pointer clicking and dragging
    this.canvas.onpointerdown = this.handleDown.bind(this);
    this.canvas.onpointerup = this.stopDrawing.bind(this);   // stops drawing when no click/drag
    this.canvas.onpointerout = this.stopDrawing.bind(this);
    this.clear.onclick = this.handleClear.bind(this);   //clear the screen

    this.color.onclick = this.colorSelect.bind(this);
  }

  drawLine(startX = this.startX, startY = this.startY, endX= this.endX, endY = this.endY){
    this.ctx.beginPath();
    // this.ctx.lineWidth = widthPicker();
    this.ctx.lineWidth = 3;
    this.ctx.strokeStyle = this.colorChoice;
    this.ctx.lineCap = "round";
    
    this.ctx.moveTo(startX , startY );  
    this.ctx.lineTo(endX, endY);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.restore();  
}

  handleMove(e) { 
    if (this.draw) {
      this.getCoordinates(e);
      this.drawLine();
    }
  }

  handleDown(e) {
    this.getCoordinates(e);
    this.draw = true;
    console.log(e)
  }

  handleClear() {
    this.ctx.clearRect(0,0,this.width, this.height)
  }

  stopDrawing() {
    this.draw = false;
  }

  getCoordinates(e){
    [this.startX, this.startY] = [this.endX , this.endY];
    this.endX = e.clientX - this.canvas.offsetLeft;
    this.endY = e.clientY - this.canvas.offsetTop;
}

colorSelect() {
  this.colorChoice = this.color.jscolor
}

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Canvas);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas */ "./src/canvas.js");




document.addEventListener("DOMContentLoaded", function(){
  
  const canvas = new _canvas__WEBPACK_IMPORTED_MODULE_1__.default();

  
});

/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/*! namespace exports */
/*! export SidebarMenu [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarMenu": () => /* binding */ SidebarMenu
/* harmony export */ });
const SidebarMenu = () => {
  let openButton = document.getElementById("close-sidebar");

  openButton.onclick = () =>{
    document.getElementById("hideable-inputs").classList.toggle("show");
    openButton.classList.toggle("show");
    console.log('ive been clicked');
  }
};

// export const inputMenu = () => {
//   let openButton = document.getElementById("open-inputs")
//   openButton.onclick = () =>{
//       document.getElementById("hideable-inputs").classList.toggle("show");
//       openButton.classList.toggle("show");
//   }
//  let closeButton = document.getElementById("close-inputs");
//  closeButton.onclick = () => {
//   document.getElementById("hideable-inputs").classList.toggle("show");
//   openButton.classList.toggle("show");
//  }

// }




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map