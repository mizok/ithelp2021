/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/class.js":
/*!*************************!*\
  !*** ./src/js/class.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Vector2D\": () => (/* binding */ Vector2D),\n/* harmony export */   \"Point2D\": () => (/* binding */ Point2D)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Vector2D = /*#__PURE__*/function () {\n  function Vector2D(x, y) {\n    _classCallCheck(this, Vector2D);\n\n    this.x = x;\n    this.y = y;\n  }\n\n  _createClass(Vector2D, [{\n    key: \"lengthSquared\",\n    value: function lengthSquared() {\n      return this.x * this.x + this.y * this.y;\n    }\n    /**\n     * 求純量值\n     *\n     * @returns\n     * @memberof Vector2D\n     */\n\n  }, {\n    key: \"length\",\n    value: function length() {\n      return Math.sqrt(this.lengthSquared());\n    }\n    /**\n     * 複製該向量\n     *\n     * @returns\n     * @memberof Vector2D\n     */\n\n  }, {\n    key: \"clone\",\n    value: function clone() {\n      return new Vector2D(this.x, this.y);\n    }\n    /**\n     *倒轉該向量\n     *\n     * @memberof Vector2D\n     */\n\n  }, {\n    key: \"negate\",\n    value: function negate() {\n      this.x = -this.x;\n      this.y = -this.y;\n    }\n    /**\n     * 把該向量轉變成單位向量\n     *\n     * @returns\n     * @memberof Vector2D\n     */\n\n  }, {\n    key: \"normalize\",\n    value: function normalize() {\n      var length = this.length();\n\n      if (length > 0) {\n        this.x /= length;\n        this.y /= length;\n      }\n\n      return this.length();\n    }\n    /**\n     * 回傳與某向量的向量和\n     *\n     * @param {*} vec\n     * @returns\n     * @memberof Vector2D\n     */\n\n  }, {\n    key: \"add\",\n    value: function add(vec) {\n      return new Vector2D(this.x + vec.x, this.y + vec.y);\n    }\n    /**\n     * 加上某向量\n     *\n     * @param {*} vec\n     * @memberof Vector2D\n     */\n\n  }, {\n    key: \"incrementBy\",\n    value: function incrementBy(vec) {\n      this.x += vec.x;\n      this.y += vec.y;\n    }\n    /**\n     * \n     * 回傳與某向量的向量差\n     * @param {*} vec\n     * @returns\n     * @memberof Vector2D\n     */\n\n  }, {\n    key: \"subtract\",\n    value: function subtract(vec) {\n      return new Vector2D(this.x - vec.x, this.y - vec.y);\n    }\n    /**\n     * 扣除某向量\n     *\n     * @param {*} vec\n     * @memberof Vector2D\n     */\n\n  }, {\n    key: \"decrementBy\",\n    value: function decrementBy(vec) {\n      this.x -= vec.x;\n      this.y -= vec.y;\n    }\n    /**\n       * 回傳擴增k倍後的向量\n       *\n       * @param {*} k\n       * @memberof Vector2D\n       */\n\n  }, {\n    key: \"multiply\",\n    value: function multiply(k) {\n      return new Vector2D(k * this.x, k * this.y);\n    }\n    /**\n     * 擴增該向量\n     *\n     * @param {*} k\n     * @memberof Vector2D\n     */\n\n  }, {\n    key: \"scaleBy\",\n    value: function scaleBy(k) {\n      this.x *= k;\n      this.y *= k;\n    }\n    /**\n     * 求取該向量與其他向量的內積\n     *\n     * @param {*} vec\n     * @returns\n     * @memberof Vector2D\n     */\n\n  }, {\n    key: \"dotProduct\",\n    value: function dotProduct(vec) {\n      return this.x * vec.x + this.y * vec.y;\n    }\n    /**\n     * 求取此向量映射在某向量上的長度\n     *\n     * @param {*} vec\n     * @returns\n     * @memberof Vector2D\n     */\n\n  }, {\n    key: \"projection\",\n    value: function projection(vec) {\n      var length = this.length();\n      var lengthVec = vec.length();\n      var proj;\n\n      if (length == 0 || lengthVec == 0) {\n        proj = 0;\n      } else {\n        proj = (this.x * vec.x + this.y * vec.y) / lengthVec;\n      }\n\n      return proj;\n    }\n    /**\n     * 回傳一個新向量，新向量的方向會跟作為參數向量相同，但是量值上是作為此向量投射在參數向量上的長度\n     *\n     * @param {*} vec\n     * @returns\n     * @memberof Vector2D\n     */\n\n  }, {\n    key: \"project\",\n    value: function project(vec) {\n      return vec.para(this.projection(vec));\n    }\n    /**\n       * 根據傳入的u值來回傳一個u倍(或-u倍)的單位向量\n       *\n       * @param {*} vec\n       * @returns\n       * @memberof Vector2D\n       */\n\n  }, {\n    key: \"para\",\n    value: function para(u) {\n      var positive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n      var length = this.length();\n      var vec = new Vector2D(this.x, this.y);\n\n      if (positive) {\n        vec.scaleBy(u / length);\n      } else {\n        vec.scaleBy(-u / length);\n      }\n\n      return vec;\n    }\n    /**\n     * 回傳垂直與此向量的u倍單位向量\n     *\n     * @param {*} vec\n     * @returns\n     * @memberof Vector2D\n     */\n\n  }, {\n    key: \"perp\",\n    value: function perp(u) {\n      var anticlockwise = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n      if (typeof anticlockwise === 'undefined') anticlockwise = true;\n      var length = this.length();\n      var vec = new Vector2D(this.y, -this.x);\n\n      if (length > 0) {\n        if (anticlockwise) {\n          vec.scaleBy(u / length);\n        } else {\n          vec.scaleBy(-u / length);\n        }\n      } else {\n        vec = new Vector2D(0, 0);\n      }\n\n      return vec;\n    }\n  }, {\n    key: \"addScaled\",\n    value: function addScaled(vec, k) {\n      return new Vector2D(this.x + k * vec.x, this.y + k * vec.y);\n    }\n    /**\n     * 求取該向量與其他向量的夾角\n     *\n     * @param {*} vec\n     * @returns\n     * @memberof Vector2D\n     */\n\n  }]);\n\n  return Vector2D;\n}();\n\n_defineProperty(Vector2D, \"angleBetween\", function (vec1, vec2) {\n  return Math.acos(vec1.dotProduct(vec2) / (vec1.length() * vec2.length()));\n});\n\nvar Point2D = function Point2D(x, y) {\n  _classCallCheck(this, Point2D);\n\n  this.x = x;\n  this.y = y;\n};\n\n//# sourceURL=webpack://webpack_playground/./src/js/class.js?");

/***/ }),

/***/ "./src/js/inclined-wall-ball/index.js":
/*!********************************************!*\
  !*** ./src/js/inclined-wall-ball/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class */ \"./src/js/class.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar CANVAS = {\n  width: 600,\n  height: 600,\n  background: 'gray'\n};\nvar BALL = {\n  radius: 15,\n  color: '#333'\n};\nvar ACC = 100;\nvar WALLS = [[new _class__WEBPACK_IMPORTED_MODULE_0__.Point2D(50, 50), new _class__WEBPACK_IMPORTED_MODULE_0__.Point2D(50, 550)], // 左邊界\n[new _class__WEBPACK_IMPORTED_MODULE_0__.Point2D(550, 50), new _class__WEBPACK_IMPORTED_MODULE_0__.Point2D(550, 550)], //右邊界\n[new _class__WEBPACK_IMPORTED_MODULE_0__.Point2D(50, 550), new _class__WEBPACK_IMPORTED_MODULE_0__.Point2D(550, 550)], //下邊界\n[new _class__WEBPACK_IMPORTED_MODULE_0__.Point2D(125, 150), new _class__WEBPACK_IMPORTED_MODULE_0__.Point2D(475, 100)], // 第一斜坡\n[new _class__WEBPACK_IMPORTED_MODULE_0__.Point2D(75, 250), new _class__WEBPACK_IMPORTED_MODULE_0__.Point2D(425, 300)], // 第二斜坡\n[new _class__WEBPACK_IMPORTED_MODULE_0__.Point2D(125, 450), new _class__WEBPACK_IMPORTED_MODULE_0__.Point2D(550, 400)] // 第三斜坡\n];\n\nvar Ball = /*#__PURE__*/function () {\n  function Ball(x, y) {\n    var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : BALL.color;\n    var radius = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : BALL.radius;\n    var randomSpeed = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;\n\n    _classCallCheck(this, Ball);\n\n    this.x = x;\n    this.y = y;\n    this.color = color;\n    this.radius = radius;\n    this.gravity = new _class__WEBPACK_IMPORTED_MODULE_0__.Vector2D(0, ACC);\n    this.friction = 0.999;\n\n    if (randomSpeed) {\n      this.velocity = new _class__WEBPACK_IMPORTED_MODULE_0__.Vector2D((Math.random() * this.radius * 2 - radius) * 10, (Math.random() * this.radius * 2 - radius) * 10);\n    } else {\n      this.velocity = new _class__WEBPACK_IMPORTED_MODULE_0__.Vector2D(0, 0);\n    }\n  }\n\n  _createClass(Ball, [{\n    key: \"draw\",\n    value: function draw(ctx) {\n      ctx.save();\n      ctx.fillStyle = this.color;\n      ctx.beginPath();\n      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);\n      ctx.closePath();\n      ctx.fill();\n      ctx.restore();\n    }\n  }, {\n    key: \"refreshLocation\",\n    value: function refreshLocation(dt) {\n      this.x += this.velocity.x * dt;\n      this.y += this.velocity.y * dt;\n    }\n  }, {\n    key: \"refreshSpeed\",\n    value: function refreshSpeed(dt) {\n      this.velocity.scaleBy(this.friction);\n      this.velocity.incrementBy(this.gravity.multiply(dt));\n    }\n  }]);\n\n  return Ball;\n}();\n\nvar Boundary = /*#__PURE__*/function () {\n  function Boundary() {\n    _classCallCheck(this, Boundary);\n\n    this.walls = WALLS;\n  }\n\n  _createClass(Boundary, [{\n    key: \"draw\",\n    value: function draw(ctx) {\n      this.walls.forEach(function (o, i) {\n        ctx.beginPath();\n        ctx.moveTo(o[0].x, o[0].y);\n        ctx.lineTo(o[1].x, o[1].y);\n        ctx.closePath();\n        ctx.lineWidth = 5;\n        ctx.lineJoin = 'round';\n        ctx.strokeStyle = 'white';\n        ctx.stroke();\n      });\n    }\n  }]);\n\n  return Boundary;\n}();\n\nvar InclinedWallsAndBouncingBallsAnimation = /*#__PURE__*/function () {\n  function InclinedWallsAndBouncingBallsAnimation(ctx) {\n    _classCallCheck(this, InclinedWallsAndBouncingBallsAnimation);\n\n    this.ctx = ctx;\n    this.cvs = ctx.canvas;\n    this.balls = [];\n    this.frameIsPaused = false;\n    this.init();\n  }\n\n  _createClass(InclinedWallsAndBouncingBallsAnimation, [{\n    key: \"init\",\n    value: function init() {\n      this.time = 0;\n      this.setCanvasSize();\n      this.initBoundary();\n      this.initEvents();\n      this.animate();\n    }\n  }, {\n    key: \"initBoundary\",\n    value: function initBoundary() {\n      this.boundary = new Boundary();\n      this.boundary.draw(this.ctx);\n    }\n  }, {\n    key: \"initEvents\",\n    value: function initEvents() {\n      this.initVisibilityChangeEvent();\n      this.initClickEvent();\n    }\n  }, {\n    key: \"initVisibilityChangeEvent\",\n    value: function initVisibilityChangeEvent() {\n      var _this = this;\n\n      window.addEventListener('visibilitychange', function () {\n        if (document.visibilityState !== \"visible\") {\n          _this.frameIsPaused = true;\n        } else {\n          _this.frameIsPaused = false;\n          _this.time = performance.now();\n        }\n      });\n    }\n  }, {\n    key: \"initClickEvent\",\n    value: function initClickEvent() {\n      var _this2 = this;\n\n      this.cvs.addEventListener('click', function (e) {\n        var rect = e.target.getBoundingClientRect();\n        var mouseX = e.clientX - rect.left;\n        var mouseY = e.clientY - rect.top;\n\n        _this2.balls.push(new Ball(mouseX, mouseY));\n      });\n    }\n  }, {\n    key: \"animate\",\n    value: function animate() {\n      if (this.frameIsPaused) {\n        this.animate();\n      }\n\n      var $this = this;\n      var dt = (performance.now() - this.time) / 1000;\n      this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);\n      this.animateBalls(dt);\n      this.boundary.draw(this.ctx);\n      this.time = performance.now();\n      requestAnimationFrame(this.animate.bind($this));\n    }\n  }, {\n    key: \"animateBalls\",\n    value: function animateBalls(dt) {\n      var _this3 = this;\n\n      this.balls.forEach(function (o, i) {\n        o.draw(_this3.ctx);\n        o.refreshLocation(dt);\n\n        if (o.x > _this3.cvs.width || o.y > _this3.cvs.height || o.x < 0) {\n          _this3.balls.splice(i, 1);\n        }\n\n        o.refreshSpeed(dt);\n\n        _this3.checkBoundary(dt);\n      });\n    }\n  }, {\n    key: \"setCanvasSize\",\n    value: function setCanvasSize() {\n      this.cvs.width = CANVAS.width;\n      this.cvs.height = CANVAS.height;\n      this.cvs.style.backgroundColor = CANVAS.background;\n    }\n  }, {\n    key: \"checkBoundary\",\n    value: function checkBoundary(dt) {\n      var _this4 = this;\n\n      this.boundary.walls.forEach(function (o, i) {\n        var vectorAB = new _class__WEBPACK_IMPORTED_MODULE_0__.Vector2D(o[1].x - o[0].x, o[1].y - o[0].y);\n\n        _this4.balls.forEach(function (ball, index) {\n          var vectorAToBall = new _class__WEBPACK_IMPORTED_MODULE_0__.Vector2D(ball.x - o[0].x, ball.y - o[0].y);\n          var vectorBToBall = new _class__WEBPACK_IMPORTED_MODULE_0__.Vector2D(ball.x - o[1].x, ball.y - o[1].y);\n          var vectorAToBallProj = vectorAToBall.project(vectorAB);\n          var vectorBToBallProj = vectorBToBall.project(vectorAB);\n          var distVector = vectorAToBall.subtract(vectorAToBallProj);\n          var dist = distVector.length();\n          if (!dist) return;\n          var collisionDetection = dist < ball.radius && vectorAToBallProj.length() < vectorAB.length() && vectorBToBallProj.length() < vectorAB.length();\n\n          if (collisionDetection) {\n            // 這邊是要先做reposition的部分\n            // 這邊的算法是利用『插進牆壁後的球到牆壁距離+球的半徑 = (球在正確的碰撞點到已經插進牆壁這一幀的實際距離, 也就是deltaS)*sin(90度 - 入射角)』\n            // 這邊一連串的動作是要把deltaS從純量轉換成向量，以便用substract方法去把球的位置倒回去正確的碰撞點\n            // perp 是牆壁的單位法向量\n            var perp = vectorAB.perp(1); // 這邊因為單位法向量的n必須要跟球的來向大致相反(也就是向量要夾超過90度)，而perp本身又沒有辦法確定到底是取到正或反的法向量，所以要補一個防呆\n\n            if (perp.dotProduct(ball.velocity) > 0) {\n              perp.scaleBy(-1);\n            } // 球速向量和牆壁的夾角\n\n\n            var angle = _class__WEBPACK_IMPORTED_MODULE_0__.Vector2D.angleBetween(ball.velocity, vectorAB); // 我們可以藉由算 (球半徑＋球到牆壁距離向量和牆壁法向量的內積)/sin(球速與牆壁夾角) 來取得deltaS\n\n            var deltaS = (ball.radius + distVector.dotProduct(perp)) / Math.sin(angle); // 把球速轉化成單位向量，接著再擴張deltaS倍，這樣就能取的到底要倒回去多少距離才能來到正確的碰撞點\n\n            var displ = ball.velocity.para(deltaS);\n            ball.x -= displ.x * dt;\n            ball.y -= displ.y * dt; //到這邊就reposition完畢～\n            // 這邊的vcor是我們之前有提到過，加速度和幀間誤差的相互關係會導致球被額外加速一小段距離，而這邊可以藉由乘以vcor 這個參數來抵銷多餘的加速量\n\n            var vcor = 1 - ball.gravity.dotProduct(displ.multiply(dt)) / ball.velocity.lengthSquared(); // 原速度乘以vcor\n\n            var Velo = ball.velocity.multiply(vcor); // 這邊就是取球速於牆壁法線方向的分量\n\n            var normalVelo = distVector.para(Velo.projection(distVector)); // 這邊則是取球速平行於牆壁的分量\n\n            var tangentVelo = Velo.subtract(normalVelo); // 兩者合併就是反射後的速度\n\n            ball.velocity = tangentVelo.addScaled(normalVelo, -ball.friction);\n          }\n        });\n      });\n    }\n  }]);\n\n  return InclinedWallsAndBouncingBallsAnimation;\n}();\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var ctx = document.querySelector('canvas').getContext('2d');\n  var instance = new InclinedWallsAndBouncingBallsAnimation(ctx);\n});\n\n//# sourceURL=webpack://webpack_playground/./src/js/inclined-wall-ball/index.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack_playground/./src/scss/main.scss?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/js/inclined-wall-ball/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scss/main.scss");
/******/ 	
/******/ })()
;