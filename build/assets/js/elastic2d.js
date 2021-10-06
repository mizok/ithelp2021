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
/*!************************************!*\
  !*** ./src/js/elastic-2d/index.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class */ "./src/js/class.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var CANVAS = {
  width: 800,
  height: 600,
  background: 'gray'
};
var MAX_GRAB_DIST = 50;
var FRICTION_HALF__LIFE = 1.5;
var BALL = {
  radius: 2,
  color: 'white'
};
var CORDS = [{
  length: 10,
  elasticConst: 100
}, {
  length: 10,
  elasticConst: 100
}, {
  length: 10,
  elasticConst: 100
}, {
  length: 10,
  elasticConst: 100
}, {
  length: 10,
  elasticConst: 100
}, {
  length: 10,
  elasticConst: 100
}];
var GRAVITY = 9.8;
var BALL_MASS_CONST = 1;

var Ball = /*#__PURE__*/function () {
  function Ball(x, y, radius, color, fixed) {
    _classCallCheck(this, Ball);

    this.radius = radius;
    this.mass = BALL_MASS_CONST * radius;
    this.color = color;
    this.fixed = fixed; //球是否固定在當前空間中 

    this.x = x;
    this.y = y;
    this.velocity = new _class__WEBPACK_IMPORTED_MODULE_0__.Vector2D(0, 0);
    this.force = new _class__WEBPACK_IMPORTED_MODULE_0__.Vector2D(0, 0);
    this.acc = new _class__WEBPACK_IMPORTED_MODULE_0__.Vector2D(0, 0);
    this.gravity = new _class__WEBPACK_IMPORTED_MODULE_0__.Vector2D(0, GRAVITY);
  } // 這次我們給球的class 新增這一個方法。用途是用來計算與另外一顆球的距離向量(不含兩顆球的半徑)


  _createClass(Ball, [{
    key: "distBetween",
    value: function distBetween(ball) {
      var dx = ball.x - this.x;
      var dy = ball.y - this.y;
      var vectorBetween = new _class__WEBPACK_IMPORTED_MODULE_0__.Vector2D(dx, dy);
      var lengthAlpha = vectorBetween.length();
      var length = vectorBetween.length() - this.radius - ball.radius;
      var lengthVector = vectorBetween.multiply(length / lengthAlpha);
      return lengthVector;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.save();
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
  }]);

  return Ball;
}(); // 這次的我們沒有要用之前寫的Spring ，而是新增了Cord(弦)這個類，弦在初始化的時候必須要傳入兩個Ball的實例，還有弦的原始長度、弦的彈性係數


var Cord = /*#__PURE__*/function () {
  function Cord(ballFormer, ballLatter, cordLength, elasticConst) {
    var cordWidth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
    var color = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '#555';

    _classCallCheck(this, Cord);

    this.ballFormer = ballFormer; //上面端點的球

    this.ballLatter = ballLatter; //下面端點的球

    this.cordLength = cordLength; // 原始長度

    this.elasticConst = elasticConst; //彈性係數

    this.cordWidth = cordWidth;
    this.color = color;
  }

  _createClass(Cord, [{
    key: "lengthVector",
    value: function lengthVector() {
      return this.ballFormer.distBetween(this.ballLatter);
    }
  }, {
    key: "calcForce",
    value: function calcForce() {
      var deltaLength = this.lengthVector().length() - this.cordLength; // 變形量

      var forceValue = deltaLength * this.elasticConst;
      var force = this.lengthVector().para(forceValue, false); // 這邊要注意 force 會跟變形量的方向相反, 所以para的第二參數要給false來轉變成逆向

      return force;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.beginPath();
      ctx.moveTo(this.ballFormer.x, this.ballFormer.y);
      ctx.lineTo(this.ballLatter.x, this.ballLatter.y);
      ctx.strokeStyle = this.color;
      ctx.lineWidth = this.cordWidth;
      ctx.stroke();
      ctx.closePath();
    }
  }]);

  return Cord;
}();

var Elastic2DCordAnimation = /*#__PURE__*/function () {
  function Elastic2DCordAnimation(ctx) {
    _classCallCheck(this, Elastic2DCordAnimation);

    _defineProperty(this, "getDist", function (x, y, ball) {
      return Math.sqrt((x - ball.x) * (x - ball.x) + (y - ball.y) * (y - ball.y));
    });

    this.ctx = ctx;
    this.cvs = ctx.canvas;
    this.balls = [];
    this.cords = [];
    this.frameIsPaused = false;
    this.ballGrabbed = null;
    this.init();
  } // 入口方法


  _createClass(Elastic2DCordAnimation, [{
    key: "init",
    value: function init() {
      this.time = 0;
      this.setCanvasSize();
      this.initEntities();
      this.initEvents();
      this.animate();
    } // 把所有的實體(entity) 也就是弦和球都先做實例的初始化

  }, {
    key: "initEntities",
    value: function initEntities() {
      var _this = this;

      var _loop = function _loop(i) {
        var x = _this.cvs.width / 2;
        var y = 0;
        var cordsBefore = CORDS.filter(function (cord, index) {
          return index < i;
        }); // 依據每條弦的長短，總合出球的具體位置
        // 這邊大於0的判斷是用來排除掉第一條弦用的

        if (cordsBefore.length > 0) {
          y = cordsBefore.map(function (cord) {
            return cord.length;
          }).reduce(function (prev, next, index) {
            var gap = index >= 1 ? BALL.radius * 2 : 0;
            return prev + next + gap;
          }, BALL.radius);
        } // 最頂端，也就是連結天花板的部分也會被視為一顆球，但是這顆球半徑為0，而且會有『固定（fixed）』屬性


        _this.balls.push(new Ball(x, y, i === 0 ? 0 : BALL.radius, BALL.color, i === 0));
      };

      // init balls;
      for (var i = 0; i <= CORDS.length; i++) {
        _loop(i);
      } // init cords


      for (var _i = 0; _i < CORDS.length; _i++) {
        var cord = new Cord(this.balls[_i], this.balls[_i + 1], CORDS[_i].length, CORDS[_i].elasticConst);
        this.cords.push(cord);
      }
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
      var _this2 = this;

      window.addEventListener('visibilitychange', function () {
        if (document.visibilityState !== "visible") {
          _this2.frameIsPaused = true;
        } else {
          _this2.frameIsPaused = false;
          _this2.time = performance.now();
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
  }, {
    key: "animate",
    value: function animate() {
      if (this.frameIsPaused) {
        this.animate();
      }

      var $this = this;
      var frameDelay = 10; // frameDelay 是用來做動畫抽幀的常數，可以想像成會讓動畫加速！

      var correct = 1000;
      var dt = (performance.now() - this.time) * frameDelay / (1000 * correct);
      this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);

      for (var i = 0; i < correct; i++) {
        this.refreshCords(); //更新弦

        this.refreshBalls(dt); //更新球
      }

      this.drawAll(dt); // 把全部都畫出來

      this.time = performance.now();
      requestAnimationFrame(this.animate.bind($this));
    }
  }, {
    key: "refreshCords",
    value: function refreshCords() {
      for (var i = 0; i < this.cords.length; i++) {
        var cord = this.cords[i];
        var force = cord.calcForce(); // 這邊要格外注意的是ballFormer 是用incrementBy, 而不是add, 原因是因為在跑loop的時候，前面幾圈可能已經有賦予ballFormer force ，如果用add給新值，前面的值就被吃掉了

        cord.ballFormer.force.incrementBy(force.multiply(-1).add(cord.ballFormer.gravity.multiply(cord.ballFormer.mass))); // 但是 ballLatter就可以直接用add了

        cord.ballLatter.force = force.add(cord.ballLatter.gravity.multiply(cord.ballLatter.mass));
      }
    }
  }, {
    key: "refreshBalls",
    value: function refreshBalls(dt) {
      var frictionConst = Math.pow(0.5, dt / FRICTION_HALF__LIFE);

      var _iterator = _createForOfIteratorHelper(this.balls),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var ball = _step.value;

          if (!ball.fixed) {
            // 速度變化量的向量
            var dv = ball.force.multiply(dt / ball.mass); // 更新位置

            ball.x += dt * (ball.velocity.x + dv.x / 2);
            ball.y += dt * (ball.velocity.y + dv.y / 2); // 先做摩擦力的耗損運算，然後再加上新的速度變化量

            ball.velocity.scaleBy(frictionConst);
            ball.velocity.incrementBy(dv);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "drawAll",
    value: function drawAll(dt) {
      var _this3 = this;

      // 把球和弦都個別畫出來
      this.cords.forEach(function (o, i) {
        o.draw(_this3.ctx);
      });
      this.balls.forEach(function (o, i) {
        o.draw(_this3.ctx);
      });
    }
  }, {
    key: "grabBall",
    value: function grabBall(x, y) {
      if (!!this.ballGrabbed) return; // 用泡沫排序法去求得目前距離滑鼠位置最近的球

      this.ballGrabbed = this.balls[0];
      var shortestDist = this.getDist(x, y, this.ballGrabbed);

      var _iterator2 = _createForOfIteratorHelper(this.balls),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var ball = _step2.value;
          var dist = this.getDist(x, y, ball);

          if (dist <= shortestDist) {
            shortestDist = dist;
            this.ballGrabbed = ball;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      if (this.ballGrabbed.fixed || shortestDist > MAX_GRAB_DIST) return;
      this.pullBall(x, y, shortestDist);
    }
  }, {
    key: "pullBall",
    value: function pullBall(x, y) {
      if (!this.ballGrabbed || this.ballGrabbed.fixed) return; // 如果已經有被抓到的球或是抓到的球本身有fixed屬性則return

      if (this.getDist(x, y, this.ballGrabbed) > MAX_GRAB_DIST) return; // 這邊是抓取的最大距離防呆

      this.ballGrabbed.x = x;
      this.ballGrabbed.y = y;
      this.ballGrabbed.velocity = new _class__WEBPACK_IMPORTED_MODULE_0__.Vector2D(0, 0);
    }
  }, {
    key: "initMouseEvent",
    value: function initMouseEvent() {
      var _this4 = this;

      this.cvs.addEventListener('mousedown', function (e) {
        var mouseX = e.clientX - _this4.cvs.getBoundingClientRect().left;

        var mouseY = e.clientY - _this4.cvs.getBoundingClientRect().top;

        _this4.grabBall(mouseX, mouseY);
      });
      this.cvs.addEventListener('mouseup', function () {
        _this4.ballGrabbed = null;
      });
      this.cvs.addEventListener('mousemove', function (e) {
        var mouseX = e.clientX - _this4.cvs.getBoundingClientRect().left;

        var mouseY = e.clientY - _this4.cvs.getBoundingClientRect().top;

        _this4.pullBall(mouseX, mouseY);
      });
      this.cvs.addEventListener('mouseleave', function () {
        _this4.ballGrabbed = null;
      });
    }
  }]);

  return Elastic2DCordAnimation;
}();

document.addEventListener('DOMContentLoaded', function () {
  var ctx = document.querySelector('canvas').getContext('2d');
  var instance = new Elastic2DCordAnimation(ctx);
});
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
//# sourceMappingURL=elastic2d.js.map