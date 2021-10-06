/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/class.js":
/*!*************************!*\
  !*** ./src/js/class.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vector2D": () => (/* binding */ Vector2D),
/* harmony export */   "Point2D": () => (/* binding */ Point2D)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Vector2D = /*#__PURE__*/function () {
  function Vector2D(x, y) {
    _classCallCheck(this, Vector2D);

    this.x = x;
    this.y = y;
  }

  _createClass(Vector2D, [{
    key: "lengthSquared",
    value: function lengthSquared() {
      return this.x * this.x + this.y * this.y;
    }
    /**
     * 求純量值
     *
     * @returns
     * @memberof Vector2D
     */

  }, {
    key: "length",
    value: function length() {
      return Math.sqrt(this.lengthSquared());
    }
    /**
     * 複製該向量
     *
     * @returns
     * @memberof Vector2D
     */

  }, {
    key: "clone",
    value: function clone() {
      return new Vector2D(this.x, this.y);
    }
    /**
     *倒轉該向量
     *
     * @memberof Vector2D
     */

  }, {
    key: "negate",
    value: function negate() {
      this.x = -this.x;
      this.y = -this.y;
    }
    /**
     * 把該向量轉變成單位向量
     *
     * @returns
     * @memberof Vector2D
     */

  }, {
    key: "normalize",
    value: function normalize() {
      var length = this.length();

      if (length > 0) {
        this.x /= length;
        this.y /= length;
      }

      return this.length();
    }
    /**
     * 回傳與某向量的向量和
     *
     * @param {*} vec
     * @returns
     * @memberof Vector2D
     */

  }, {
    key: "add",
    value: function add(vec) {
      return new Vector2D(this.x + vec.x, this.y + vec.y);
    }
    /**
     * 加上某向量
     *
     * @param {*} vec
     * @memberof Vector2D
     */

  }, {
    key: "incrementBy",
    value: function incrementBy(vec) {
      this.x += vec.x;
      this.y += vec.y;
    }
    /**
     * 
     * 回傳與某向量的向量差
     * @param {*} vec
     * @returns
     * @memberof Vector2D
     */

  }, {
    key: "subtract",
    value: function subtract(vec) {
      return new Vector2D(this.x - vec.x, this.y - vec.y);
    }
    /**
     * 扣除某向量
     *
     * @param {*} vec
     * @memberof Vector2D
     */

  }, {
    key: "decrementBy",
    value: function decrementBy(vec) {
      this.x -= vec.x;
      this.y -= vec.y;
    }
    /**
       * 回傳擴增k倍後的向量
       *
       * @param {*} k
       * @memberof Vector2D
       */

  }, {
    key: "multiply",
    value: function multiply(k) {
      return new Vector2D(k * this.x, k * this.y);
    }
    /**
     * 擴增該向量
     *
     * @param {*} k
     * @memberof Vector2D
     */

  }, {
    key: "scaleBy",
    value: function scaleBy(k) {
      this.x *= k;
      this.y *= k;
    }
    /**
     * 求取該向量與其他向量的內積
     *
     * @param {*} vec
     * @returns
     * @memberof Vector2D
     */

  }, {
    key: "dotProduct",
    value: function dotProduct(vec) {
      return this.x * vec.x + this.y * vec.y;
    }
    /**
     * 求取此向量映射在某向量上的長度
     *
     * @param {*} vec
     * @returns
     * @memberof Vector2D
     */

  }, {
    key: "projection",
    value: function projection(vec) {
      var length = this.length();
      var lengthVec = vec.length();
      var proj;

      if (length == 0 || lengthVec == 0) {
        proj = 0;
      } else {
        proj = (this.x * vec.x + this.y * vec.y) / lengthVec;
      }

      return proj;
    }
    /**
     * 回傳一個新向量，新向量的方向會跟作為參數向量相同，但是量值上是作為此向量投射在參數向量上的長度
     *
     * @param {*} vec
     * @returns
     * @memberof Vector2D
     */

  }, {
    key: "project",
    value: function project(vec) {
      return vec.para(this.projection(vec));
    }
    /**
       * 根據傳入的u值來回傳一個u倍(或-u倍)的單位向量
       *
       * @param {*} vec
       * @returns
       * @memberof Vector2D
       */

  }, {
    key: "para",
    value: function para(u) {
      var positive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var length = this.length();
      var vec = new Vector2D(this.x, this.y);

      if (positive) {
        vec.scaleBy(u / length);
      } else {
        vec.scaleBy(-u / length);
      }

      return vec;
    }
    /**
     * 回傳垂直與此向量的u倍單位向量
     *
     * @param {*} vec
     * @returns
     * @memberof Vector2D
     */

  }, {
    key: "perp",
    value: function perp(u) {
      var anticlockwise = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (typeof anticlockwise === 'undefined') anticlockwise = true;
      var length = this.length();
      var vec = new Vector2D(this.y, -this.x);

      if (length > 0) {
        if (anticlockwise) {
          vec.scaleBy(u / length);
        } else {
          vec.scaleBy(-u / length);
        }
      } else {
        vec = new Vector2D(0, 0);
      }

      return vec;
    }
  }, {
    key: "addScaled",
    value: function addScaled(vec, k) {
      return new Vector2D(this.x + k * vec.x, this.y + k * vec.y);
    }
    /**
     * 求取該向量與其他向量的夾角
     *
     * @param {*} vec
     * @returns
     * @memberof Vector2D
     */

  }]);

  return Vector2D;
}();

_defineProperty(Vector2D, "angleBetween", function (vec1, vec2) {
  return Math.acos(vec1.dotProduct(vec2) / (vec1.length() * vec2.length()));
});

var Point2D = function Point2D(x, y) {
  _classCallCheck(this, Point2D);

  this.x = x;
  this.y = y;
};

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!******************************************!*\
  !*** ./src/js/magnet-animation/index.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class */ "./src/js/class.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var CANVAS = {
  width: 800,
  height: 600,
  background: 'gray'
};
var BALLS = [{
  x: 300,
  y: 300,
  radius: 25,
  mass: 50
}, {
  x: 380,
  y: 380,
  radius: 25,
  mass: 50
}, {
  x: 375,
  y: 330,
  radius: 25,
  mass: 50
}, {
  x: 200,
  y: 200,
  radius: 55,
  mass: 100
}, {
  x: 250,
  y: 250,
  radius: 15,
  mass: 50
}, {
  x: 450,
  y: 450,
  radius: 10,
  mass: 10
}, {
  x: 600,
  y: 600,
  radius: 75,
  mass: 50
}];

var getDist = function getDist(x0, y0, x1, y1) {
  return Math.sqrt((x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0));
};

var MAGNET_SIZE = 500;
var MAGNET_FORCE_CONST = 7000;

var Circle = /*#__PURE__*/function () {
  function Circle(x, y, radius) {
    var fillColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'transparent';
    var strokeColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'black';
    var lineWidth = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;

    _classCallCheck(this, Circle);

    this.x = x;
    this.y = y;
    this.fillColor = fillColor;
    this.strokeColor = strokeColor;
    this.lineWidth = lineWidth;
    this.radius = radius;
  }

  _createClass(Circle, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.save();
      ctx.fillStyle = this.fillColor;
      ctx.strokeStyle = this.strokeColor;
      ctx.lineWidth = this.lineWidth;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    }
  }]);

  return Circle;
}();

var Ball = /*#__PURE__*/function (_Circle) {
  _inherits(Ball, _Circle);

  var _super = _createSuper(Ball);

  function Ball(x, y, radius, mass) {
    var _this;

    var fillColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'rgba(0,0,0,0.25)';
    var strokeColor = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'transparent';

    _classCallCheck(this, Ball);

    _this = _super.call(this, x, y, radius, fillColor, strokeColor);
    _this.friction = 0.995;
    _this.force = new _class__WEBPACK_IMPORTED_MODULE_0__.Vector2D(0, 0);
    _this.acc = new _class__WEBPACK_IMPORTED_MODULE_0__.Vector2D(0, 0);
    _this.velocity = new _class__WEBPACK_IMPORTED_MODULE_0__.Vector2D(0, 0);
    _this.mass = mass;
    return _this;
  }

  _createClass(Ball, [{
    key: "refreshLocation",
    value: function refreshLocation(dt) {
      this.x += this.velocity.x * dt;
      this.y += this.velocity.y * dt;
    }
  }, {
    key: "refreshSpeed",
    value: function refreshSpeed(dt) {
      this.velocity.scaleBy(this.friction);
      this.velocity.incrementBy(this.acc.multiply(dt));
    }
  }]);

  return Ball;
}(Circle);

var MagnetAnimation = /*#__PURE__*/function () {
  function MagnetAnimation(ctx) {
    _classCallCheck(this, MagnetAnimation);

    this.ctx = ctx;
    this.cvs = ctx.canvas;
    this.frameIsPaused = false;
    this.balls = [];
    this.mouse = {
      x: 0,
      y: 0
    };
    this.magnet = null;
    this.init();
  }

  _createClass(MagnetAnimation, [{
    key: "init",
    value: function init() {
      this.time = performance.now();
      this.setCanvasSize();
      this.initEvents();
      this.initBalls();
      this.animate();
    }
  }, {
    key: "initBalls",
    value: function initBalls() {
      var _this2 = this;

      BALLS.forEach(function (o, i) {
        var ball = new Ball(o.x, o.y, o.radius, o.mass);

        _this2.balls.push(ball);
      });
    }
  }, {
    key: "initEvents",
    value: function initEvents() {
      this.initVisibilityChangeEvent();
      this.initMouseEvent();
    }
  }, {
    key: "initVisibilityChangeEvent",
    value: function initVisibilityChangeEvent() {
      var _this3 = this;

      window.addEventListener('visibilitychange', function () {
        if (document.visibilityState !== "visible") {
          _this3.frameIsPaused = true;
        } else {
          _this3.frameIsPaused = false;
          _this3.time = performance.now();
        }
      });
    }
  }, {
    key: "initMouseEvent",
    value: function initMouseEvent() {
      var _this4 = this;

      this.cvs.addEventListener('mousedown', function () {
        _this4.isClicked = true;
      });
      this.cvs.addEventListener('mousemove', function (e) {
        if (!_this4.isClicked) return;

        var rect = _this4.cvs.getBoundingClientRect();

        _this4.mouse.x = e.clientX - rect.left;
        _this4.mouse.y = e.clientY - rect.top;
      });
      this.cvs.addEventListener('mouseup', function () {
        console.log(_this4.balls);
        _this4.isClicked = false;
      });
      this.cvs.addEventListener('mouseleave', function () {
        _this4.isClicked = false;
      });
    }
  }, {
    key: "drawAll",
    value: function drawAll() {
      this.drawMagnet();
      this.drawBalls();
    }
  }, {
    key: "drawMagnet",
    value: function drawMagnet() {
      new Circle(this.mouse.x, this.mouse.y, MAGNET_SIZE / 2).draw(this.ctx);
    }
  }, {
    key: "drawBalls",
    value: function drawBalls() {
      var _this5 = this;

      this.balls.forEach(function (o, i) {
        o.draw(_this5.ctx);
      });
    }
  }, {
    key: "animate",
    value: function animate() {
      if (this.frameIsPaused) {
        this.animate();
      }

      var $this = this;
      var frameDelay = 10; // frameDelay 是用來做動畫抽幀的常數，可以想像成會讓動畫加速！

      var dt = (performance.now() - this.time) * frameDelay / 1000;
      this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);
      this.drawAll();
      this.refreshBallsLocation(dt);
      this.refreshBallsSpeed(dt);
      this.refreshBallsAcc();
      this.time = performance.now();
      requestAnimationFrame(this.animate.bind($this));
    }
  }, {
    key: "refreshBallsLocation",
    value: function refreshBallsLocation(dt) {
      this.balls.forEach(function (o, i) {
        o.refreshLocation(dt);
      });
    }
  }, {
    key: "refreshBallsSpeed",
    value: function refreshBallsSpeed(dt) {
      this.balls.forEach(function (o, i) {
        o.refreshSpeed(dt);
      });
    }
  }, {
    key: "refreshBallsAcc",
    value: function refreshBallsAcc() {
      var _this6 = this;

      this.balls.forEach(function (o, i) {
        var distToMouse = getDist(_this6.mouse.x, _this6.mouse.y, o.x, o.y);

        if (distToMouse < MAGNET_SIZE / 2 + o.radius && distToMouse > 1e-2) {
          o.force = new _class__WEBPACK_IMPORTED_MODULE_0__.Vector2D(_this6.mouse.x - o.x, _this6.mouse.y - o.y).para(MAGNET_FORCE_CONST / distToMouse);
          o.acc = o.force.multiply(1 / o.mass);
        } else {
          o.force = new _class__WEBPACK_IMPORTED_MODULE_0__.Vector2D(0, 0);
          o.acc = new _class__WEBPACK_IMPORTED_MODULE_0__.Vector2D(0, 0);
        }
      });
    }
  }, {
    key: "setCanvasSize",
    value: function setCanvasSize() {
      this.cvs.width = CANVAS.width;
      this.cvs.height = CANVAS.height;
      this.cvs.style.backgroundColor = CANVAS.background;
    }
  }]);

  return MagnetAnimation;
}();

(function () {
  var ctx = document.querySelector('canvas').getContext('2d');
  var instance = new MagnetAnimation(ctx);
})();
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=magnetAnimation.js.map