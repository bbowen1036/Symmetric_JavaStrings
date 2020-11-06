/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, module, __webpack_require__.g, __webpack_exports__, __webpack_require__.* */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d)},e.onerror=function(){console.error("could not download file")},e.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof __webpack_require__.g&&__webpack_require__.g.global===__webpack_require__.g?__webpack_require__.g:void 0,a=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null},j.readAsDataURL(a)}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l)},4E4)}});f.saveAs=a.saveAs=a, true&&(module.exports=a)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ "./src/canvas.js":
/*!***********************!*\
  !*** ./src/canvas.js ***!
  \***********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
class Canvas {
  constructor() {
    this.canvas = document.getElementById("canvas");           // canvas element
    this.clear = document.getElementById("clear");             // clear button
    this.color = document.getElementById('stylus-color');      // drawing color
    this.bgColor = document.getElementById('background-color');// background color
    this.penWidth = document.getElementById('pen-width');      // pen width
    this.spiro = document.getElementById('spiro');             // radial selector
    this.slicer = document.getElementById('divisions');        // radial divisions

    //canvas setting
    this.canvas.width = window.innerWidth - 250;            
    this.canvas.height = window.innerHeight - 100;
    this.ctx = this.canvas.getContext("2d");

    this.colorChoice = 'white' || 0;
    this.bgColorChoice = this.bgColor.jscolor;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    [this.startX, this.startY] = [this.width/ 2, this.height/ 2 ]; //initializing coordinates
    [this.endX, this.endY] = [this.width/ 2, this.height/ 2];
    this.draw = false;

    //mandala test
    this.slices = 24;
    this._angle = 360 / this.slices;
    this._start = 0;
    this.center = {x: this.width / 2 , y: this.height / 2};

    this.canvas.onpointermove = this.handleMove.bind(this);  //handles pointer clicking and dragging
    this.canvas.onpointerdown = this.handleDown.bind(this);
    this.canvas.onpointerup = this.stopDrawing.bind(this);   // stops drawing when no click/drag
    this.canvas.onpointerout = this.stopDrawing.bind(this);
    this.clear.onclick = this.handleClear.bind(this);   //clear the screen
    this.color.onclick = this.colorSelect.bind(this);
    this.bgColor.onclick = this.bgColorSelect.bind(this);
    this.penWidth.onchange = this.widthPicker.bind(this);
  }

  spiralDraw(start, end, width, color) {
    this.ctx.lineWidth = width;
    this.ctx.beginPath();
    this.ctx.strokeStyle = color;
    this.ctx.moveTo(start.x, start.y);
    this.ctx.lineTo(end.x, end.y);
    this.ctx.stroke();
  }

  d2r(deg) {
    return deg * Math.PI/180;
  }

  sliceCount() {
    return this.slicer.value
  }

  rotate(p1, p2, a) {
    a = this.d2r(a);
    let xr = (p1.x - p2.x) * Math.cos(a) - (p1.y - p2.y) * Math.sin(a) + p2.x;
    let yr = (p1.x - p2.x) * Math.sin(a) + (p1.y - p2.y) * Math.cos(a) + p2.y;
    return {x : xr, y : yr};
  }

  drawLine(startX = this.startX, startY = this.startY, endX= this.endX, endY = this.endY) {
    
    let lineWidth = this.widthPicker();
    let strokeStyle = this.colorChoice;
    
    if (this.spiroClick()) {
      let sliced = this.sliceCount()
      for(let i = 2; i <= sliced ; i++) {
        this._start += 360 / sliced;
        let rP = this.rotate({x: startX, y: startY}, this.center, this._start);
        let rC = this.rotate({x: endX, y: endY}, this.center, this._start);
        this.spiralDraw(rP, rC, lineWidth, strokeStyle);

      }
    } else {

    this.ctx.beginPath();
    this.ctx.lineWidth = this.widthPicker();
    this.ctx.strokeStyle = this.colorChoice;
    this.ctx.lineCap = "round";

    this.ctx.moveTo(startX , startY );  
    this.ctx.lineTo(endX, endY);

    // reflect X axis
    let a_ = startX, 
        b_ = this.height - startY, 
        c_ = endX,
        d_ = this.height - endY
    this.ctx.moveTo(a_,b_)
    this.ctx.lineTo(c_,d_);

    // refect Y axis
    a_ = this.width - startX; 
    b_ = startY;
    c_ = this.width - endX; 
    d_ = endY; 
    this.ctx.moveTo(a_, b_);
    this.ctx.lineTo(c_, d_);

    //reflected Y across X axis
    a_ = this.width - startX; b_ = this.height - startY;
    c_ = this.width - endX; d_ = this.height - endY;
    this.ctx.moveTo(a_, b_);
    this.ctx.lineTo(c_, d_);

    //'inverse' X quadrant bottom
    a_ = this.width / 2 + this.height / 2 - startY; 
    b_ = this.width / 2 + this.height / 2 - startX;
    c_ = this.width / 2 + this.height / 2 - endY; 
    d_ = this.width / 2 + this.height / 2 - endX;
    this.ctx.moveTo(a_, b_);
    this.ctx.lineTo(c_, d_);

    //'inverse' X quadrant top
    a_ = this.width / 2 + this.height / 2 - startY; 
    b_ = this.height / 2 - this.width / 2 + startX;
    c_ = this.width / 2 + this.height / 2 - endY; 
    d_ = this.height / 2 - this.width / 2 + endX;
    this.ctx.moveTo(a_, b_);
    this.ctx.lineTo(c_, d_);

    // inverse Y quadrant bottom
    a_ = this.width / 2 - this.height / 2 + startY; 
    b_ = this.width / 2 + this.height / 2 - startX;
    c_ = this.width / 2 - this.height / 2 + endY; 
    d_ = this.width / 2 + this.height / 2 - endX;
    this.ctx.moveTo(a_, b_);
    this.ctx.lineTo(c_, d_);
  
    // inverse Y quadrant top
    a_ = this.width / 2 - this.height / 2 + startY; 
    b_ = this.height / 2 - this.width / 2 + startX;
    c_ = this.width / 2 - this.height / 2 + endY; 
    d_ = this.height / 2 - this.width / 2 + endX;
    this.ctx.moveTo(a_, b_);
    this.ctx.lineTo(c_, d_);
  
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.restore();    

    }
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
    this.canvas.style.backgroundColor = this.bgColor.jscolor

    if(e.shiftKey) {
      this.ctx.shadowColor = '#7fff00';
      this.ctx.shadowBlur = 10;
      this.ctx.shadowOffsetX = 2;
      this.ctx.shadowOffsetY = 2;
    } else {
      this.ctx.shadowColor = "";
      this.ctx.shadowBlur = 0;
      this.ctx.shadowOffsetX = 0;
      this.ctx.shadowOffsetY = 0;
    }
  }

  handleClear() {
    const clearme = confirm('Start over?')
    if (clearme) {
      this.ctx.clearRect(0,0,this.width, this.height)
    }
  }

  stopDrawing() {
    this.draw = false;
  }

  getCoordinates(e){
    [this.startX, this.startY] = [this.endX , this.endY];
    this.endX = e.clientX - this.canvas.offsetLeft;
    this.endY = e.clientY - this.canvas.offsetTop;
  }

  widthPicker(){
    return this.penWidth.value;
  }

  colorSelect() {
    this.colorChoice = this.color.jscolor
  }

  bgColorSelect() {
    return this.bgColorChoice = this.bgColor.jscolor
  }

  spiroClick() {
    return this.spiro.checked
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
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");
/* harmony import */ var _wacky_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wacky_header */ "./src/wacky_header.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./canvas */ "./src/canvas.js");






document.addEventListener("DOMContentLoaded", function(){
  
  let save = document.getElementById('saveing')
  save.addEventListener('click', () => {
    let canvasSave = document.getElementById("canvas");
    canvasSave.toBlob(function(blob) {
      (0,file_saver__WEBPACK_IMPORTED_MODULE_2__.saveAs)(blob, "my_AWESOME_drawing.jpg");
    });
    
  })

  ;(0,_wacky_header__WEBPACK_IMPORTED_MODULE_1__.wackyHeader)()
  ;(0,_sidebar__WEBPACK_IMPORTED_MODULE_0__.SidebarMenu)();
  const canvas = new _canvas__WEBPACK_IMPORTED_MODULE_3__.default();
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarMenu": () => /* binding */ SidebarMenu
/* harmony export */ });

const SidebarMenu = () => {
  let openBtn = document.getElementById('open-sidebar');
  let sunflowerMode = document.getElementById('spiro')
  
  
  sunflowerMode.onclick = () => {
    let options = document.getElementById('sunflower-options')

    if (sunflowerMode.checked) {
      options.style.display = 'block'
    } else {
      options.style.display = 'none'
    }
  }

  openBtn.onclick = () => {
    let canvas = document.getElementById('canvas');
    let sidebar = document.getElementById('hide-me');

    openBtn.classList.toggle("change");
    sidebar.classList.toggle('open')
    
    if ('selector-bar open' === sidebar.classList.value) {
      
      sidebar.style.width = '250px'
      sidebar.style.padding = '23px'
      canvas.style.marginLeft = "250px"

    } else {
      sidebar.style.width = '0'
      sidebar.style.padding = '0'
      canvas.style.marginLeft = "0"
    }
  }
};


/***/ }),

/***/ "./src/wacky_header.js":
/*!*****************************!*\
  !*** ./src/wacky_header.js ***!
  \*****************************/
/*! namespace exports */
/*! export wackyHeader [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wackyHeader": () => /* binding */ wackyHeader
/* harmony export */ });
const wackyHeader = () => {
  const header = document.getElementById('wacky-header');
  const canvas = document.getElementById('canvas');

  canvas.addEventListener('mousemove', (e) => {
    header.style.backgroundColor = `rgb(${e.offsetX % (255 *2 )}, ${e.offsetY % (255 * 2) }, ${e.clientX % 225})`;

  })
}

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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