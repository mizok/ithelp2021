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
/*!********************************************!*\
  !*** ./src/js/inclined-wall-ball/index.js ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class */ "./src/js/class.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var CANVAS = {
  width: 600,
  height: 600,
  background: 'gray'
};
var BALL = {
  radius: 15,
  color: '#333'
};
var ACC = 100;
var WALLS = [[new _class__WEBPACK_IMPORTED_MODULE_0__.Point2D(50, 50), new _class__WEBPACK_IMPORTED_MODULE_0__.Point2D(50, 550)], // 左邊界
[new _class__WEBPACK_IMPORTED_MODULE_0__.Point2D(550, 50), new _class__WEBPACK_IMPORTED_MODULE_0__.Point2D(550, 550)], //右邊界
[new _class__WEBPACK_IMPORTED_MODULE_0__.Point2D(50, 550), new _class__WEBPACK_IMPORTED_MODULE_0__.Point2D(550, 550)], //下邊界
[new _class__WEBPACK_IMPORTED_MODULE_0__.Point2D(125, 150), new _class__WEBPACK_IMPORTED_MODULE_0__.Point2D(475, 100)], // 第一斜坡
[new _class__WEBPACK_IMPORTED_MODULE_0__.Point2D(75, 250), new _class__WEBPACK_IMPORTED_MODULE_0__.Point2D(425, 300)], // 第二斜坡
[new _class__WEBPACK_IMPORTED_MODULE_0__.Point2D(125, 450), new _class__WEBPACK_IMPORTED_MODULE_0__.Point2D(550, 400)] // 第三斜坡
];

var Ball = /*#__PURE__*/function () {
  function Ball(x, y) {
    var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : BALL.color;
    var radius = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : BALL.radius;
    var randomSpeed = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

    _classCallCheck(this, Ball);

    this.x = x;
    this.y = y;
    this.color = color;
    this.radius = radius;
    this.gravity = new _class__WEBPACK_IMPORTED_MODULE_0__.Vector2D(0, ACC);
    this.friction = 0.999;

    if (randomSpeed) {
      this.velocity = new _class__WEBPACK_IMPORTED_MODULE_0__.Vector2D((Math.random() * this.radius * 2 - radius) * 10, (Math.random() * this.radius * 2 - radius) * 10);
    } else {
      this.velocity = new _class__WEBPACK_IMPORTED_MODULE_0__.Vector2D(0, 0);
    }
  }

  _createClass(Ball, [{
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
  }, {
    key: "refreshLocation",
    value: function refreshLocation(dt) {
      this.x += this.velocity.x * dt;
      this.y += this.velocity.y * dt;
    }
  }, {
    key: "refreshSpeed",
    value: function refreshSpeed(dt) {
      this.velocity.scaleBy(this.friction);
      this.velocity.incrementBy(this.gravity.multiply(dt));
    }
  }]);

  return Ball;
}();

var Boundary = /*#__PURE__*/function () {
  function Boundary() {
    _classCallCheck(this, Boundary);

    this.walls = WALLS;
  }

  _createClass(Boundary, [{
    key: "draw",
    value: function draw(ctx) {
      this.walls.forEach(function (o, i) {
        ctx.beginPath();
        ctx.moveTo(o[0].x, o[0].y);
        ctx.lineTo(o[1].x, o[1].y);
        ctx.closePath();
        ctx.lineWidth = 5;
        ctx.lineJoin = 'round';
        ctx.strokeStyle = 'white';
        ctx.stroke();
      });
    }
  }]);

  return Boundary;
}();

var InclinedWallsAndBouncingBallsAnimation = /*#__PURE__*/function () {
  function InclinedWallsAndBouncingBallsAnimation(ctx) {
    _classCallCheck(this, InclinedWallsAndBouncingBallsAnimation);

    this.ctx = ctx;
    this.cvs = ctx.canvas;
    this.balls = [];
    this.frameIsPaused = false;
    this.init();
  }

  _createClass(InclinedWallsAndBouncingBallsAnimation, [{
    key: "init",
    value: function init() {
      this.time = 0;
      this.setCanvasSize();
      this.initBoundary();
      this.initEvents();
      this.animate();
    }
  }, {
    key: "initBoundary",
    value: function initBoundary() {
      this.boundary = new Boundary();
      this.boundary.draw(this.ctx);
    }
  }, {
    key: "initEvents",
    value: function initEvents() {
      this.initVisibilityChangeEvent();
      this.initClickEvent();
    }
  }, {
    key: "initVisibilityChangeEvent",
    value: function initVisibilityChangeEvent() {
      var _this = this;

      window.addEventListener('visibilitychange', function () {
        if (document.visibilityState !== "visible") {
          _this.frameIsPaused = true;
        } else {
          _this.frameIsPaused = false;
          _this.time = performance.now();
        }
      });
    }
  }, {
    key: "initClickEvent",
    value: function initClickEvent() {
      var _this2 = this;

      this.cvs.addEventListener('click', function (e) {
        var rect = e.target.getBoundingClientRect();
        var mouseX = e.clientX - rect.left;
        var mouseY = e.clientY - rect.top;

        _this2.balls.push(new Ball(mouseX, mouseY));
      });
    }
  }, {
    key: "animate",
    value: function animate() {
      if (this.frameIsPaused) {
        this.animate();
      }

      var $this = this;
      var dt = (performance.now() - this.time) / 1000;
      this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);
      this.animateBalls(dt);
      this.boundary.draw(this.ctx);
      this.time = performance.now();
      requestAnimationFrame(this.animate.bind($this));
    }
  }, {
    key: "animateBalls",
    value: function animateBalls(dt) {
      var _this3 = this;

      this.balls.forEach(function (o, i) {
        o.draw(_this3.ctx);
        o.refreshLocation(dt);

        if (o.x > _this3.cvs.width || o.y > _this3.cvs.height || o.x < 0) {
          _this3.balls.splice(i, 1);
        }

        o.refreshSpeed(dt);

        _this3.checkBoundary(dt);
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
    key: "checkBoundary",
    value: function checkBoundary(dt) {
      var _this4 = this;

      this.boundary.walls.forEach(function (o, i) {
        var vectorAB = new _class__WEBPACK_IMPORTED_MODULE_0__.Vector2D(o[1].x - o[0].x, o[1].y - o[0].y);

        _this4.balls.forEach(function (ball, index) {
          var vectorAToBall = new _class__WEBPACK_IMPORTED_MODULE_0__.Vector2D(ball.x - o[0].x, ball.y - o[0].y);
          var vectorBToBall = new _class__WEBPACK_IMPORTED_MODULE_0__.Vector2D(ball.x - o[1].x, ball.y - o[1].y);
          var vectorAToBallProj = vectorAToBall.project(vectorAB);
          var vectorBToBallProj = vectorBToBall.project(vectorAB);
          var distVector = vectorAToBall.subtract(vectorAToBallProj);
          var dist = distVector.length();
          var collisionDetection = dist < ball.radius && vectorAToBallProj.length() < vectorAB.length() && vectorBToBallProj.length() < vectorAB.length();

          if (collisionDetection) {
            // 這邊是要先做reposition的部分
            // 這邊的算法是利用『插進牆壁後的球到牆壁距離+球的半徑 = (球在正確的碰撞點到已經插進牆壁這一幀的實際距離, 也就是deltaS)*sin(90度 - 入射角)』
            // 這邊一連串的動作是要把deltaS從純量轉換成向量，以便用substract方法去把球的位置倒回去正確的碰撞點
            // perp 是牆壁的單位法向量
            var perp = vectorAB.perp(1); // 這邊因為單位法向量的n必須要跟球的來向大致相反(也就是向量要夾超過90度)，而perp本身又沒有辦法確定到底是取到正或反的法向量，所以要補一個防呆

            if (perp.dotProduct(ball.velocity) > 0) {
              perp.scaleBy(-1);
            } // 球速向量和牆壁的夾角


            var angle = _class__WEBPACK_IMPORTED_MODULE_0__.Vector2D.angleBetween(ball.velocity, vectorAB); // 我們可以藉由算 (球半徑＋球到牆壁距離向量和牆壁法向量的內積)/sin(球速與牆壁夾角) 來取得deltaS

            var deltaS = (ball.radius + distVector.dotProduct(perp)) / Math.sin(angle); // 把球速轉化成單位向量，接著再擴張deltaS倍，這樣就能取的到底要倒回去多少距離才能來到正確的碰撞點

            var displ = ball.velocity.para(deltaS);
            ball.x -= displ.x * dt;
            ball.y -= displ.y * dt; //到這邊就reposition完畢～
            // 這邊的vcor是我們之前有提到過，加速度和幀間誤差的相互關係會導致球被額外加速一小段距離，而這邊可以藉由乘以vcor 這個參數來抵銷多餘的加速量

            var vcor = 1 - ball.gravity.dotProduct(displ.multiply(dt)) / ball.velocity.lengthSquared(); // 原速度乘以vcor

            var Velo = ball.velocity.multiply(vcor); // 這邊就是取球速於牆壁法線方向的分量

            var normalVelo = distVector.para(Velo.projection(distVector)); // 這邊則是取球速平行於牆壁的分量

            var tangentVelo = Velo.subtract(normalVelo); // 兩者合併就是反射後的速度

            ball.velocity = tangentVelo.addScaled(normalVelo, -ball.friction);
          }
        });
      });
    }
  }]);

  return InclinedWallsAndBouncingBallsAnimation;
}();

document.addEventListener('DOMContentLoaded', function () {
  var ctx = document.querySelector('canvas').getContext('2d');
  var instance = new InclinedWallsAndBouncingBallsAnimation(ctx);
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
//# sourceMappingURL=inclinedWallBall.js.map