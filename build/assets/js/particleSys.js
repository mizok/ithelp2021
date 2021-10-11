/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/mersenne-twister/src/mersenne-twister.js":
/*!***************************************************************!*\
  !*** ./node_modules/mersenne-twister/src/mersenne-twister.js ***!
  \***************************************************************/
/***/ ((module) => {

/*
  https://github.com/banksean wrapped Makoto Matsumoto and Takuji Nishimura's code in a namespace
  so it's better encapsulated. Now you can have multiple random number generators
  and they won't stomp all over eachother's state.

  If you want to use this as a substitute for Math.random(), use the random()
  method like so:

  var m = new MersenneTwister();
  var randomNumber = m.random();

  You can also call the other genrand_{foo}() methods on the instance.

  If you want to use a specific seed in order to get a repeatable random
  sequence, pass an integer into the constructor:

  var m = new MersenneTwister(123);

  and that will always produce the same random sequence.

  Sean McCullough (banksean@gmail.com)
*/

/*
   A C-program for MT19937, with initialization improved 2002/1/26.
   Coded by Takuji Nishimura and Makoto Matsumoto.

   Before using, initialize the state by using init_seed(seed)
   or init_by_array(init_key, key_length).

   Copyright (C) 1997 - 2002, Makoto Matsumoto and Takuji Nishimura,
   All rights reserved.

   Redistribution and use in source and binary forms, with or without
   modification, are permitted provided that the following conditions
   are met:

     1. Redistributions of source code must retain the above copyright
        notice, this list of conditions and the following disclaimer.

     2. Redistributions in binary form must reproduce the above copyright
        notice, this list of conditions and the following disclaimer in the
        documentation and/or other materials provided with the distribution.

     3. The names of its contributors may not be used to endorse or promote
        products derived from this software without specific prior written
        permission.

   THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
   "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
   LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
   A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
   CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
   EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
   PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
   PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
   LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
   SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


   Any feedback is very welcome.
   http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/emt.html
   email: m-mat @ math.sci.hiroshima-u.ac.jp (remove space)
*/
var MersenneTwister = function MersenneTwister(seed) {
  if (seed == undefined) {
    seed = new Date().getTime();
  }
  /* Period parameters */


  this.N = 624;
  this.M = 397;
  this.MATRIX_A = 0x9908b0df;
  /* constant vector a */

  this.UPPER_MASK = 0x80000000;
  /* most significant w-r bits */

  this.LOWER_MASK = 0x7fffffff;
  /* least significant r bits */

  this.mt = new Array(this.N);
  /* the array for the state vector */

  this.mti = this.N + 1;
  /* mti==N+1 means mt[N] is not initialized */

  if (seed.constructor == Array) {
    this.init_by_array(seed, seed.length);
  } else {
    this.init_seed(seed);
  }
};
/* initializes mt[N] with a seed */

/* origin name init_genrand */


MersenneTwister.prototype.init_seed = function (s) {
  this.mt[0] = s >>> 0;

  for (this.mti = 1; this.mti < this.N; this.mti++) {
    var s = this.mt[this.mti - 1] ^ this.mt[this.mti - 1] >>> 30;
    this.mt[this.mti] = (((s & 0xffff0000) >>> 16) * 1812433253 << 16) + (s & 0x0000ffff) * 1812433253 + this.mti;
    /* See Knuth TAOCP Vol2. 3rd Ed. P.106 for multiplier. */

    /* In the previous versions, MSBs of the seed affect   */

    /* only MSBs of the array mt[].                        */

    /* 2002/01/09 modified by Makoto Matsumoto             */

    this.mt[this.mti] >>>= 0;
    /* for >32 bit machines */
  }
};
/* initialize by an array with array-length */

/* init_key is the array for initializing keys */

/* key_length is its length */

/* slight change for C++, 2004/2/26 */


MersenneTwister.prototype.init_by_array = function (init_key, key_length) {
  var i, j, k;
  this.init_seed(19650218);
  i = 1;
  j = 0;
  k = this.N > key_length ? this.N : key_length;

  for (; k; k--) {
    var s = this.mt[i - 1] ^ this.mt[i - 1] >>> 30;
    this.mt[i] = (this.mt[i] ^ (((s & 0xffff0000) >>> 16) * 1664525 << 16) + (s & 0x0000ffff) * 1664525) + init_key[j] + j;
    /* non linear */

    this.mt[i] >>>= 0;
    /* for WORDSIZE > 32 machines */

    i++;
    j++;

    if (i >= this.N) {
      this.mt[0] = this.mt[this.N - 1];
      i = 1;
    }

    if (j >= key_length) j = 0;
  }

  for (k = this.N - 1; k; k--) {
    var s = this.mt[i - 1] ^ this.mt[i - 1] >>> 30;
    this.mt[i] = (this.mt[i] ^ (((s & 0xffff0000) >>> 16) * 1566083941 << 16) + (s & 0x0000ffff) * 1566083941) - i;
    /* non linear */

    this.mt[i] >>>= 0;
    /* for WORDSIZE > 32 machines */

    i++;

    if (i >= this.N) {
      this.mt[0] = this.mt[this.N - 1];
      i = 1;
    }
  }

  this.mt[0] = 0x80000000;
  /* MSB is 1; assuring non-zero initial array */
};
/* generates a random number on [0,0xffffffff]-interval */

/* origin name genrand_int32 */


MersenneTwister.prototype.random_int = function () {
  var y;
  var mag01 = new Array(0x0, this.MATRIX_A);
  /* mag01[x] = x * MATRIX_A  for x=0,1 */

  if (this.mti >= this.N) {
    /* generate N words at one time */
    var kk;
    if (this.mti == this.N + 1)
      /* if init_seed() has not been called, */
      this.init_seed(5489);
    /* a default initial seed is used */

    for (kk = 0; kk < this.N - this.M; kk++) {
      y = this.mt[kk] & this.UPPER_MASK | this.mt[kk + 1] & this.LOWER_MASK;
      this.mt[kk] = this.mt[kk + this.M] ^ y >>> 1 ^ mag01[y & 0x1];
    }

    for (; kk < this.N - 1; kk++) {
      y = this.mt[kk] & this.UPPER_MASK | this.mt[kk + 1] & this.LOWER_MASK;
      this.mt[kk] = this.mt[kk + (this.M - this.N)] ^ y >>> 1 ^ mag01[y & 0x1];
    }

    y = this.mt[this.N - 1] & this.UPPER_MASK | this.mt[0] & this.LOWER_MASK;
    this.mt[this.N - 1] = this.mt[this.M - 1] ^ y >>> 1 ^ mag01[y & 0x1];
    this.mti = 0;
  }

  y = this.mt[this.mti++];
  /* Tempering */

  y ^= y >>> 11;
  y ^= y << 7 & 0x9d2c5680;
  y ^= y << 15 & 0xefc60000;
  y ^= y >>> 18;
  return y >>> 0;
};
/* generates a random number on [0,0x7fffffff]-interval */

/* origin name genrand_int31 */


MersenneTwister.prototype.random_int31 = function () {
  return this.random_int() >>> 1;
};
/* generates a random number on [0,1]-real-interval */

/* origin name genrand_real1 */


MersenneTwister.prototype.random_incl = function () {
  return this.random_int() * (1.0 / 4294967295.0);
  /* divided by 2^32-1 */
};
/* generates a random number on [0,1)-real-interval */


MersenneTwister.prototype.random = function () {
  return this.random_int() * (1.0 / 4294967296.0);
  /* divided by 2^32 */
};
/* generates a random number on (0,1)-real-interval */

/* origin name genrand_real3 */


MersenneTwister.prototype.random_excl = function () {
  return (this.random_int() + 0.5) * (1.0 / 4294967296.0);
  /* divided by 2^32 */
};
/* generates a random number on [0,1) with 53-bit resolution*/

/* origin name genrand_res53 */


MersenneTwister.prototype.random_long = function () {
  var a = this.random_int() >>> 5,
      b = this.random_int() >>> 6;
  return (a * 67108864.0 + b) * (1.0 / 9007199254740992.0);
};
/* These real versions are due to Isaku Wada, 2002/01/09 added */


module.exports = MersenneTwister;

/***/ }),

/***/ "./src/js/base.js":
/*!************************!*\
  !*** ./src/js/base.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Canvas2DFxBase": () => (/* binding */ Canvas2DFxBase)
/* harmony export */ });
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function */ "./src/js/function.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Canvas2DFxBase = /*#__PURE__*/function () {
  function Canvas2DFxBase(ele, config, defaultConfig) {
    _classCallCheck(this, Canvas2DFxBase);

    config = _function__WEBPACK_IMPORTED_MODULE_0__.is.obj(config) ? config : {};
    defaultConfig = _function__WEBPACK_IMPORTED_MODULE_0__.is.obj(defaultConfig) ? defaultConfig : {};
    this.config = Object.assign(defaultConfig, config);
    this.ele = ele;
    this.frameCount = 0;
    this.mouse = {
      x: 0,
      y: 0
    };
    this.ctx = null;
    this.frameIsPaused = false;
    this.isClick = false;
    this.canvasSizefixed = false;
    this.previousFrameTime = performance.now();
    this.initBase();
  }

  _createClass(Canvas2DFxBase, [{
    key: "initBase",
    value: function initBase() {
      var _this = this;

      if (this.ele.tagName !== 'CANVAS') {
        var cvs = document.createElement('canvas');
        this.ele.appendChild(cvs);
        this.cvs = this.ele.querySelectorAll('canvas')[0];
        this.canvasWidth = this.ele.getBoundingClientRect().width;
        this.canvasHeight = this.ele.getBoundingClientRect().height;
      } else {
        this.cvs = this.ele;
        this.canvasWidth = this.ele.parentElement.getBoundingClientRect().width;
        this.canvasHeight = this.ele.parentElement.getBoundingClientRect().height;
      }

      this.ctx = this.cvs.getContext('2d');
      this.triggerResizingMechanism();
      window.addEventListener('resize', (0,_function__WEBPACK_IMPORTED_MODULE_0__.debounce)(function () {
        _this.triggerResizingMechanism();
      }, 500));
      window.addEventListener('visibilitychange', function () {
        if (document.visibilityState !== "visible") {
          _this.frameIsPaused = true;
        }
      });
      this.addEventHandler();
      this.refreshBaseFrameCounter();
    }
  }, {
    key: "refreshBaseFrameCounter",
    value: function refreshBaseFrameCounter() {
      var _this2 = this;

      var thisFrameTime = performance.now();
      this.timeElapsed = (thisFrameTime - this.previousFrameTime) / 1000;

      if (this.frameIsPaused) {
        this.timeElapsed = 0;
        this.frameIsPaused = false;
      }

      this.frameCount += 1;
      this.previousFrameTime = thisFrameTime;
      requestAnimationFrame(function () {
        _this2.refreshBaseFrameCounter();
      });
    }
  }, {
    key: "triggerResizingMechanism",
    value: function triggerResizingMechanism() {
      if (this.canvasSizefixed) return;

      if (this.ele.tagName !== 'CANVAS') {
        var canvasWidth = this.ele.getBoundingClientRect().width;
        var canvasHeight = this.ele.getBoundingClientRect().height;
        this.cvs.width = canvasWidth;
        this.cvs.height = canvasHeight;
      } else {
        var _canvasWidth = this.cvs.parentElement.getBoundingClientRect().width;
        var _canvasHeight = this.cvs.parentElement.getBoundingClientRect().height;
        this.cvs.width = _canvasWidth;
        this.cvs.height = _canvasHeight;
      }
    }
  }, {
    key: "setCanvasSize",
    value: function setCanvasSize(width, height) {
      this.canvasSizefixed = true;
      this.cvs.width = width;
      this.cvs.height = height;
    }
  }, {
    key: "background",
    value: function background(color) {
      this.ctx.save();
      this.ctx.fillStyle = color;
      this.ctx.fillRect(0, 0, this.cvs.width, this.cvs.height);
      this.ctx.restore();
    }
  }, {
    key: "addEventHandler",
    value: function addEventHandler() {
      var _this3 = this;

      this.cvs.addEventListener('mousedown', function () {
        _this3.isClick = true;
      });
      this.cvs.addEventListener('touchstart', function () {
        _this3.isClick = true;
      });
      this.cvs.addEventListener('mousemove', function (e) {
        var pos = (0,_function__WEBPACK_IMPORTED_MODULE_0__.pointerEventToXY)(e);
        _this3.mouse = {
          x: pos.x,
          y: pos.y
        };
      });
      this.cvs.addEventListener('touchmove', function (e) {
        var pos = (0,_function__WEBPACK_IMPORTED_MODULE_0__.pointerEventToXY)(e);
        _this3.mouse = {
          x: pos.x,
          y: pos.y
        };
      });
    }
  }]);

  return Canvas2DFxBase;
}();

/***/ }),

/***/ "./src/js/function.js":
/*!****************************!*\
  !*** ./src/js/function.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounce": () => (/* binding */ debounce),
/* harmony export */   "is": () => (/* binding */ is),
/* harmony export */   "randomWithinRange": () => (/* binding */ randomWithinRange),
/* harmony export */   "getDistance": () => (/* binding */ getDistance),
/* harmony export */   "degreeToRadian": () => (/* binding */ degreeToRadian),
/* harmony export */   "pointerEventToXY": () => (/* binding */ pointerEventToXY),
/* harmony export */   "targetHasProp": () => (/* binding */ targetHasProp),
/* harmony export */   "isEmpty": () => (/* binding */ isEmpty),
/* harmony export */   "colorToRgba": () => (/* binding */ colorToRgba),
/* harmony export */   "getChannelValuesFromRgba": () => (/* binding */ getChannelValuesFromRgba),
/* harmony export */   "randomID": () => (/* binding */ randomID)
/* harmony export */ });
var MersenneTwister = __webpack_require__(/*! mersenne-twister */ "./node_modules/mersenne-twister/src/mersenne-twister.js");

var MT = new MersenneTwister();
function debounce(func, delay) {
  var _arguments = arguments;
  var timer = null;
  var $this = this;
  return function () {
    var context = $this;
    var args = _arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      func.apply(context, args);
    }, delay);
  };
}
var is = {
  arr: function arr(a) {
    return Array.isArray(a);
  },
  obj: function obj(a) {
    return Object.prototype.toString.call(a).indexOf('Object') > -1;
  },
  pth: function pth(a) {
    return is.obj(a) && a.hasOwnProperty('totalLength');
  },
  svg: function svg(a) {
    return a instanceof SVGElement;
  },
  inp: function inp(a) {
    return a instanceof HTMLInputElement;
  },
  dom: function dom(a) {
    return a.nodeType || is.svg(a);
  },
  str: function str(a) {
    return typeof a === 'string';
  },
  fnc: function fnc(a) {
    return typeof a === 'function';
  },
  und: function und(a) {
    return typeof a === 'undefined';
  },
  nil: function nil(a) {
    return is.und(a) || a === null;
  },
  hex: function hex(a) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);
  },
  rgba: function rgba(a) {
    return /^rgba/.test(a);
  },
  rgb: function rgb(a) {
    return /^rgb/.test(a);
  },
  hsl: function hsl(a) {
    return /^hsl/.test(a);
  },
  col: function col(a) {
    return is.hex(a) || is.rgb(a) || is.hsl(a);
  },
  key: function key(a) {
    return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== 'targets' && a !== 'keyframes';
  }
};
function randomWithinRange(min, max, seed) {
  return MT.random(seed) * (max - min) + min;
}
function getDistance(x0, y0, x1, y1) {
  return Math.sqrt((x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0));
}
function degreeToRadian(degree) {
  return degree / 180 * Math.PI;
}
/**
 * 統一 touchEvent/mouseEvent 的事件觸發座標取得方式
 * @export
 * @param {object}  傳入的event 物件
 * @returns {Object} 一個物件, 內含事件觸發座標的X/Y 座標值
 */

function pointerEventToXY(e) {
  var out = {
    x: 0,
    y: 0
  };

  if (e.type === 'touchstart' || e.type === 'touchmove' || e.type === 'touchend' || e.type === 'touchcancel') {
    var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
    out.x = touch.pageX;
    out.y = touch.pageY;
  } else if (e.type === 'mousedown' || e.type === 'mouseup' || e.type === 'mousemove' || e.type === 'mouseover' || e.type === 'mouseout' || e.type === 'mouseenter' || e.type === 'mouseleave') {
    out.x = e.pageX;
    out.y = e.pageY;
  }

  return out;
}
/**
 * 直接呼叫hasOwnProperty的原型方法(用在hasOwnProperty被改動過的狀況)
 *
 * @export
 * @param {object} target 目標物件
 * @param {string} prop 目標prop
 * @returns {boolean} 是/否
 */

function targetHasProp(target, prop) {
  return Object.prototype.hasOwnProperty.call(target, prop);
}
/**
 * 確認一個變數/值是否為空(0不算空值)
 * @export
 * @param {*} val
 * @returns {boolean} 是/否
 */

function isEmpty(val) {
  return typeof val === 'number' ? isNaN(val) : !val;
}

function rgbToRgba(rgbValue) {
  var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
  return rgb ? "rgba(".concat(rgb[1], ",1)") : rgbValue;
}

function hexToRgba(hexValue) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return "rgba(".concat(r, ",").concat(g, ",").concat(b, ",1)");
}

function hslToRgba(hslValue) {
  var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
  var h = parseInt(hsl[1], 10) / 360;
  var s = parseInt(hsl[2], 10) / 100;
  var l = parseInt(hsl[3], 10) / 100;
  var a = hsl[4] || 1;

  function hue2rgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  }

  var r, g, b;

  if (s == 0) {
    r = g = b = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return "rgba(".concat(r * 255, ",").concat(g * 255, ",").concat(b * 255, ",").concat(a, ")");
}

function colorToRgba(val) {
  if (is.rgb(val)) return rgbToRgba(val);
  if (is.hex(val)) return hexToRgba(val);
  if (is.hsl(val)) return hslToRgba(val);
}
function getChannelValuesFromRgba(rgba) {
  return rgba.replace(/^(rgb|rgba)\(/, '').replace(/\)$/, '').replace(/\s/g, '').split(',').map(function (x) {
    return parseInt(x);
  });
}
function randomID(digits) {
  var codeStr = 'abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVXYZ23456789';
  var str = '';

  for (var i = 0; i < digits; i++) {
    str += codeStr[Math.floor(randomWithinRange(0, codeStr.length))];
  }

  return str;
}

/***/ }),

/***/ "./src/js/interpolation.js":
/*!*********************************!*\
  !*** ./src/js/interpolation.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "linearInterpolation": () => (/* binding */ linearInterpolation),
/* harmony export */   "colorInterpolation": () => (/* binding */ colorInterpolation)
/* harmony export */ });
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function */ "./src/js/function.js");

/**
 * 線性內插函數
 *
 * @export
 * @param {*} x
 * @param {*} min
 * @param {*} max
 * @param {*} virtualMin
 * @param {*} virtualMax
 * @returns
 */

function linearInterpolation(x, x0, x1, v0, v1) {
  if (!(x >= x0 && x <= x1) && !(x <= x0 && x >= x1)) return new TypeError("linearInterpolation: \u53C3\u6578x \u7684\u503C\u5FC5\u9808\u5927\u65BC\u53C3\u6578min \u4E26\u5C0F\u65BC\u53C3\u6578max, \u4F46x\u70BA".concat(x, ",x0\u70BA").concat(x0, ",x1\u70BA").concat(x1));
  return (x - x0) / (x1 - x0) * (v1 - v0) + v0;
}
function colorInterpolation(x, x0, x1, fromColor, toColor) {
  // 先驗證收到的color 是正式規範的色彩格式 (hex/rgb/rgba/hsl)
  var valueIsValidated = _function__WEBPACK_IMPORTED_MODULE_0__.is.col(fromColor) && _function__WEBPACK_IMPORTED_MODULE_0__.is.col(toColor);
  if (!valueIsValidated) return new TypeError("colorInterpolation: 色彩參數非規制");
  var rgba0 = (0,_function__WEBPACK_IMPORTED_MODULE_0__.getChannelValuesFromRgba)((0,_function__WEBPACK_IMPORTED_MODULE_0__.colorToRgba)(fromColor)),
      rgba1 = (0,_function__WEBPACK_IMPORTED_MODULE_0__.getChannelValuesFromRgba)((0,_function__WEBPACK_IMPORTED_MODULE_0__.colorToRgba)(toColor));
  var rgba = [];

  for (var i = 0; i < 4; i++) {
    rgba[i] = linearInterpolation(x, x0, x1, rgba0[i], rgba1[i]);
  }

  return "rgba(".concat(rgba, ")");
}

/***/ }),

/***/ "./src/js/particle-sys/fire.js":
/*!*************************************!*\
  !*** ./src/js/particle-sys/fire.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FIRE": () => (/* binding */ FIRE)
/* harmony export */ });
var FIRE = {
  bgColor: 'black',
  space: {
    gravity: {
      x: 0,
      y: 20
    },
    wind: {
      x: 0,
      y: 0
    }
  },
  projector: {
    motionTrail: function motionTrail(x) {
      return null;
    },
    //  not valid if mouseControl is enabled.
    enableMouseAndGuestureControl: true,
    dispersionRange: 60,
    directionAngle: 0,
    width: 10,
    height: 10
  },
  particles: {
    density: 50,
    type: "circle",
    width: {
      base: 20,
      floatingThreshold: 15
    },
    lifespan: {
      base: 80,
      floatingThreshold: 10
    },
    color: {
      from: "rgba(245, 192, 59,1)",
      to: "rgba(255,0,0,0.8)"
    },
    opacity: 1,
    speed: {
      base: 100,
      floatingThreshold: {
        x: 30,
        y: 0
      }
    }
  }
};

/***/ }),

/***/ "./src/js/particle-sys/illusion.js":
/*!*****************************************!*\
  !*** ./src/js/particle-sys/illusion.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ILLUSION": () => (/* binding */ ILLUSION)
/* harmony export */ });
var ILLUSION = {
  bgColor: 'black',
  space: {
    gravity: {
      x: 0,
      y: 0
    },
    wind: {
      x: 0,
      y: 0
    }
  },
  projector: {
    motionTrail: function motionTrail(x) {
      return null;
    },
    //  not valid if mouseControl is enabled.
    enableMouseAndGuestureControl: false,
    dispersionRange: 30,
    directionAngle: 0,
    width: window.innerWidth,
    height: window.innerHeight
  },
  particles: {
    density: 5,
    type: "circle",
    width: {
      base: 20,
      floatingThreshold: 8
    },
    lifespan: {
      base: 100,
      floatingThreshold: 30
    },
    color: {
      from: "rgba(130, 155, 155,1)",
      to: "rgba(255, 0, 0,0.75)"
    },
    opacity: 0.75,
    speed: {
      base: 50,
      floatingThreshold: {
        x: 0,
        y: 0
      }
    }
  }
};

/***/ }),

/***/ "./src/js/particle-sys/stardust.js":
/*!*****************************************!*\
  !*** ./src/js/particle-sys/stardust.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STARDUST": () => (/* binding */ STARDUST)
/* harmony export */ });
var STARDUST = {
  bgColor: 'black',
  space: {
    gravity: {
      x: 0,
      y: 0
    },
    wind: {
      x: 0,
      y: 0
    }
  },
  projector: {
    motionTrail: function motionTrail(x) {
      return null;
    },
    //  not valid if mouseControl is enabled.
    enableMouseAndGuestureControl: false,
    dispersionRange: 80,
    directionAngle: 0,
    width: 100,
    height: window.innerHeight
  },
  particles: {
    density: 50,
    type: "circle",
    width: {
      base: 2,
      floatingThreshold: 2
    },
    lifespan: {
      base: 80,
      floatingThreshold: 10
    },
    color: {
      from: "rgba(255,255,255,1)",
      to: "rgba(255,255,255,0.8)"
    },
    opacity: 1,
    speed: {
      base: 100,
      floatingThreshold: {
        x: 1,
        y: 1
      }
    }
  }
};

/***/ }),

/***/ "./src/js/particle-sys/trail.js":
/*!**************************************!*\
  !*** ./src/js/particle-sys/trail.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TRAIL": () => (/* binding */ TRAIL)
/* harmony export */ });
var TRAIL = {
  bgColor: 'black',
  space: {
    gravity: {
      x: 0,
      y: 0
    },
    wind: {
      x: 0,
      y: 0
    }
  },
  projector: {
    motionTrail: function motionTrail(x) {
      return null;
    },
    //  not valid if mouseControl is enabled.
    enableMouseAndGuestureControl: true,
    dispersionRange: 0,
    directionAngle: 0,
    width: 1,
    height: 1
  },
  particles: {
    density: 10,
    type: "circle",
    width: {
      base: 50,
      floatingThreshold: 0
    },
    lifespan: {
      base: 150,
      floatingThreshold: 0
    },
    color: {
      from: "rgba(255, 0, 255,1)",
      to: "rgba(255, 255, 0,1)"
    },
    opacity: 1,
    speed: {
      base: 100,
      floatingThreshold: {
        x: 0,
        y: 0
      }
    }
  }
};

/***/ }),

/***/ "./src/js/shape.js":
/*!*************************!*\
  !*** ./src/js/shape.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawSquare": () => (/* binding */ drawSquare),
/* harmony export */   "drawCircle": () => (/* binding */ drawCircle),
/* harmony export */   "drawLine": () => (/* binding */ drawLine)
/* harmony export */ });
function drawSquare(ctx, x, y, width, color, alpha) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.globalAlpha = alpha;
  ctx.fillRect(x - width / 2, y - width / 2, width, width);
  ctx.restore();
}
function drawCircle(ctx, x, y, width, color, alpha) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.globalAlpha = alpha;
  ctx.beginPath();
  ctx.arc(x, y, width / 2, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}
function drawLine(ctx, x0, y0, x1, y1, strokeColor, strokeWidth) {
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = strokeWidth;
  ctx.beginPath();
  ctx.moveTo(x0, y0);
  ctx.lineTo(x1, y1);
  ctx.closePath();
  ctx.stroke();
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/js/particle-sys/index.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ "./src/js/base.js");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../function */ "./src/js/function.js");
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shape */ "./src/js/shape.js");
/* harmony import */ var _interpolation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interpolation */ "./src/js/interpolation.js");
/* harmony import */ var _fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fire */ "./src/js/particle-sys/fire.js");
/* harmony import */ var _illusion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./illusion */ "./src/js/particle-sys/illusion.js");
/* harmony import */ var _trail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trail */ "./src/js/particle-sys/trail.js");
/* harmony import */ var _stardust__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stardust */ "./src/js/particle-sys/stardust.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var DEFAULT = {
  bgColor: 'black',
  space: {
    gravity: {
      x: 0,
      y: 0
    },
    wind: {
      x: 0,
      y: 0
    }
  },
  projector: {
    motionTrail: function motionTrail(x) {
      return null;
    },
    //  not valid if mouseControl is enabled.
    enableMouseAndGuestureControl: false,
    dispersionRange: 20,
    directionAngle: 90,
    width: 1,
    height: 1
  },
  particles: {
    density: 10,
    type: "circle",
    width: {
      base: 10,
      floatingThreshold: 0
    },
    lifespan: {
      base: 300,
      floatingThreshold: 0
    },
    color: {
      from: "rgba(255, 255, 255,1)",
      to: "rgba(255, 255, 255,1)"
    },
    opacity: 1,
    speed: {
      base: 100,
      floatingThreshold: {
        x: 0,
        y: 0
      }
    }
  }
};

var ParticleSys = /*#__PURE__*/function (_Canvas2DFxBase) {
  _inherits(ParticleSys, _Canvas2DFxBase);

  var _super = _createSuper(ParticleSys);

  function ParticleSys(ele, config, defaultConfig) {
    var _this;

    _classCallCheck(this, ParticleSys);

    _this = _super.call(this, ele, config, defaultConfig);
    _this.pool = [];

    _this.init();

    return _this;
  }

  _createClass(ParticleSys, [{
    key: "init",
    value: function init() {
      this.initProjector();

      if (this.config.projector.enableMouseAndGuestureControl) {
        this.addMouseAndGuestureControl();
      }

      this.drawAll();
    }
  }, {
    key: "initProjector",
    value: function initProjector() {
      this.projector = {
        width: this.config.projector.width,
        height: this.config.projector.height,
        position: {
          x: this.cvs.width / 2,
          y: this.cvs.height / 2
        }
      };
    }
  }, {
    key: "genParticle",
    value: function genParticle(type, width, color, speedX, speedY, positionX, positionY, lifespan, opacity) {
      var $this = this;
      var particle = {
        type: type,
        draw: $this.getParticleDrawingType(type),
        maxWidth: width,
        width: width,
        color: color,
        lifespan: lifespan,
        life: lifespan,
        opacity: opacity,
        speed: {
          x: speedX,
          y: speedY
        },
        position: {
          x: positionX,
          y: positionY
        },
        dead: false
      };
      return particle;
    }
  }, {
    key: "addMouseAndGuestureControl",
    value: function addMouseAndGuestureControl() {
      this.projector.position = {
        x: this.mouse.x,
        y: this.mouse.y
      };
      requestAnimationFrame(this.addMouseAndGuestureControl.bind(this));
    }
  }, {
    key: "getParticleLaunchDirection",
    value: function getParticleLaunchDirection() {
      return (0,_function__WEBPACK_IMPORTED_MODULE_1__.randomWithinRange)((0,_function__WEBPACK_IMPORTED_MODULE_1__.degreeToRadian)(-this.config.projector.directionAngle - 180 - this.config.projector.dispersionRange / 2), (0,_function__WEBPACK_IMPORTED_MODULE_1__.degreeToRadian)(-this.config.projector.directionAngle - 180 + this.config.projector.dispersionRange / 2));
    }
  }, {
    key: "fillPool",
    value: function fillPool() {
      var particles = this.config.particles;
      var projector = this.projector;
      var type = particles.type;
      var color = particles.color.from;
      var opacity = particles.opacity;
      var positionX = projector.position.x + (0,_function__WEBPACK_IMPORTED_MODULE_1__.randomWithinRange)(-projector.width / 2, projector.width / 2);
      var positionY = projector.position.y + (0,_function__WEBPACK_IMPORTED_MODULE_1__.randomWithinRange)(-projector.height / 2, projector.height / 2);

      for (var i = 0; i < this.config.particles.density / 10; i++) {
        var width = particles.width.base + (0,_function__WEBPACK_IMPORTED_MODULE_1__.randomWithinRange)(-particles.width.floatingThreshold, particles.width.floatingThreshold);
        var lifespan = particles.lifespan.base + (0,_function__WEBPACK_IMPORTED_MODULE_1__.randomWithinRange)(-particles.lifespan.floatingThreshold, particles.lifespan.floatingThreshold);
        var speedX = particles.speed.base * Math.sin(this.getParticleLaunchDirection()) + (0,_function__WEBPACK_IMPORTED_MODULE_1__.randomWithinRange)(-particles.speed.floatingThreshold.x, particles.speed.floatingThreshold.x) + this.config.space.gravity.x + this.config.space.wind.x;
        var speedY = particles.speed.base * Math.cos(this.getParticleLaunchDirection()) + (0,_function__WEBPACK_IMPORTED_MODULE_1__.randomWithinRange)(-particles.speed.floatingThreshold.y, particles.speed.floatingThreshold.y) + this.config.space.gravity.y + this.config.space.wind.y;
        var particle = this.genParticle(type, width, color, speedX, speedY, positionX, positionY, lifespan, opacity);
        this.pool.push(particle);
      }
    }
  }, {
    key: "refreshParticlesPosition",
    value: function refreshParticlesPosition() {
      for (var i = 0; i < this.pool.length; i++) {
        this.pool[i].position.x += this.pool[i].speed.x * this.timeElapsed;
        this.pool[i].position.y += this.pool[i].speed.y * this.timeElapsed;
      }
    }
  }, {
    key: "getParticleDrawingType",
    value: function getParticleDrawingType(type) {
      switch (type) {
        case 'square':
          return _shape__WEBPACK_IMPORTED_MODULE_2__.drawSquare;

        case 'circle':
          return _shape__WEBPACK_IMPORTED_MODULE_2__.drawCircle;
      }
    }
  }, {
    key: "drawAll",
    value: function drawAll() {
      this.background(this.config.bgColor);

      for (var i = 0; i < this.pool.length; i++) {
        if (!this.pool[i].dead) {
          this.pool[i].draw(this.ctx, this.pool[i].position.x, this.pool[i].position.y, this.pool[i].width, this.pool[i].color, this.pool[i].opacity);
          this.pool[i].life -= 1;

          if (this.pool[i].life > 0) {
            this.pool[i].width = (0,_interpolation__WEBPACK_IMPORTED_MODULE_3__.linearInterpolation)(this.pool[i].life, this.pool[i].lifespan, 0, this.pool[i].maxWidth, 0);
            this.pool[i].opacity = (0,_interpolation__WEBPACK_IMPORTED_MODULE_3__.linearInterpolation)(this.pool[i].life, this.pool[i].lifespan, 0, this.config.particles.opacity, 0);
            this.pool[i].color = (0,_interpolation__WEBPACK_IMPORTED_MODULE_3__.colorInterpolation)(this.pool[i].life, this.pool[i].lifespan, 0, this.config.particles.color.from, this.config.particles.color.to);
          } else {
            this.pool[i].dead = true;
          }
        } else {
          this.pool.splice(i, 1);
          i--;
        }
      }

      this.refreshParticlesPosition();
      this.fillPool();
      requestAnimationFrame(this.drawAll.bind(this));
    }
  }]);

  return ParticleSys;
}(_base__WEBPACK_IMPORTED_MODULE_0__.Canvas2DFxBase);

(function () {
  var cvs = document.querySelector('canvas');
  var instance = new ParticleSys(cvs, _stardust__WEBPACK_IMPORTED_MODULE_7__.STARDUST, DEFAULT);
})();
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=particleSys.js.map