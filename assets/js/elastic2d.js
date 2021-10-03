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

/***/ "./src/js/elastic-2d/index.js":
/*!************************************!*\
  !*** ./src/js/elastic-2d/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class */ \"./src/js/class.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar CANVAS = {\n  width: 800,\n  height: 600,\n  background: 'gray'\n};\nvar MAX_GRAB_DIST = 50;\nvar FRICTION_HALF__LIFE = 1.5;\nvar BALL = {\n  radius: 5,\n  color: 'white'\n};\nvar CORDS = [{\n  length: 10,\n  elasticConst: 600\n}, {\n  length: 10,\n  elasticConst: 600\n}, {\n  length: 10,\n  elasticConst: 600\n}, {\n  length: 10,\n  elasticConst: 600\n}, {\n  length: 10,\n  elasticConst: 600\n}, {\n  length: 10,\n  elasticConst: 600\n}];\nvar GRAVITY = 9.8;\nvar BALL_MASS_CONST = 100;\n\nvar Ball = /*#__PURE__*/function () {\n  function Ball(x, y, radius, color, fixed) {\n    _classCallCheck(this, Ball);\n\n    this.radius = radius;\n    this.mass = BALL_MASS_CONST * radius;\n    this.color = color;\n    this.fixed = fixed; //球是否固定在當前空間中 \n\n    this.x = x;\n    this.y = y;\n    this.velocity = new _class__WEBPACK_IMPORTED_MODULE_0__.Vector2D(0, 0);\n    this.force = new _class__WEBPACK_IMPORTED_MODULE_0__.Vector2D(0, 0);\n    this.acc = new _class__WEBPACK_IMPORTED_MODULE_0__.Vector2D(0, 0);\n    this.gravity = new _class__WEBPACK_IMPORTED_MODULE_0__.Vector2D(0, GRAVITY);\n  } // 這次我們給球的class 新增這一個方法。用途是用來計算與另外一顆球的距離向量(不含兩顆球的半徑)\n\n\n  _createClass(Ball, [{\n    key: \"distBetween\",\n    value: function distBetween(ball) {\n      var dx = ball.x - this.x;\n      var dy = ball.y - this.y;\n      var vectorBetween = new _class__WEBPACK_IMPORTED_MODULE_0__.Vector2D(dx, dy);\n      var lengthAlpha = vectorBetween.length();\n      var length = vectorBetween.length() - this.radius - ball.radius;\n      var lengthVector = vectorBetween.multiply(length / lengthAlpha);\n      return lengthVector;\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(ctx) {\n      ctx.save();\n      ctx.fillStyle = this.color;\n      ctx.beginPath();\n      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);\n      ctx.closePath();\n      ctx.fill();\n      ctx.restore();\n    }\n  }]);\n\n  return Ball;\n}(); // 這次的我們沒有要用之前寫的Spring ，而是新增了Cord(弦)這個類，弦在初始化的時候必須要傳入兩個Ball的實例，還有弦的原始長度、弦的彈性係數\n\n\nvar Cord = /*#__PURE__*/function () {\n  function Cord(ballFormer, ballLatter, cordLength, elasticConst) {\n    var cordWidth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;\n    var color = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '#555';\n\n    _classCallCheck(this, Cord);\n\n    this.ballFormer = ballFormer; //上面端點的球\n\n    this.ballLatter = ballLatter; //下面端點的球\n\n    this.cordLength = cordLength; // 原始長度\n\n    this.elasticConst = elasticConst; //彈性係數\n\n    this.cordWidth = cordWidth;\n    this.color = color;\n  }\n\n  _createClass(Cord, [{\n    key: \"lengthVector\",\n    value: function lengthVector() {\n      return this.ballFormer.distBetween(this.ballLatter);\n    }\n  }, {\n    key: \"calcForce\",\n    value: function calcForce() {\n      var deltaLength = this.lengthVector().length() - this.cordLength; // 變形量\n\n      var forceValue = deltaLength * this.elasticConst;\n      var force = this.lengthVector().para(forceValue, false);\n      return force;\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(ctx) {\n      ctx.beginPath();\n      ctx.moveTo(this.ballFormer.x, this.ballFormer.y);\n      ctx.lineTo(this.ballLatter.x, this.ballLatter.y);\n      ctx.strokeStyle = this.color;\n      ctx.lineWidth = this.cordWidth;\n      ctx.stroke();\n      ctx.closePath();\n    }\n  }]);\n\n  return Cord;\n}();\n\nvar Elastic2DCordAnimation = /*#__PURE__*/function () {\n  function Elastic2DCordAnimation(ctx) {\n    _classCallCheck(this, Elastic2DCordAnimation);\n\n    _defineProperty(this, \"getDist\", function (x, y, ball) {\n      return Math.sqrt((x - ball.x) * (x - ball.x) + (y - ball.y) * (y - ball.y));\n    });\n\n    this.ctx = ctx;\n    this.cvs = ctx.canvas;\n    this.balls = [];\n    this.cords = [];\n    this.frameIsPaused = false;\n    this.ballGrabbed = null;\n    this.init();\n  } // 入口方法\n\n\n  _createClass(Elastic2DCordAnimation, [{\n    key: \"init\",\n    value: function init() {\n      this.time = 0;\n      this.setCanvasSize();\n      this.initEntities();\n      this.initEvents();\n      this.animate();\n    } // 把所有的實體(entity) 也就是弦和球都先做實例的初始化\n\n  }, {\n    key: \"initEntities\",\n    value: function initEntities() {\n      var _this = this;\n\n      var _loop = function _loop(i) {\n        var x = _this.cvs.width / 2;\n        var y = 0;\n        var cordsBefore = CORDS.filter(function (cord, index) {\n          return index < i;\n        }); // 依據每條弦的長短，總合出球的具體位置\n\n        if (cordsBefore.length > 0) {\n          y = cordsBefore.map(function (cord) {\n            return cord.length;\n          }).reduce(function (prev, next, index) {\n            var gap = index >= 1 ? BALL.radius * 2 : 0;\n            return prev + next + gap;\n          }, BALL.radius);\n        } // 最頂端，也就是連結天花板的部分也會被視為一顆球，但是這顆球半徑為0，而且會有『固定（fixed）』屬性\n\n\n        _this.balls.push(new Ball(x, y, i === 0 ? 0 : BALL.radius, BALL.color, i === 0));\n      };\n\n      // init balls;\n      for (var i = 0; i <= CORDS.length; i++) {\n        _loop(i);\n      } // init cords\n\n\n      for (var _i = 0; _i < CORDS.length; _i++) {\n        var cord = new Cord(this.balls[_i], this.balls[_i + 1], CORDS[_i].length, CORDS[_i].elasticConst);\n        this.cords.push(cord);\n      }\n    }\n  }, {\n    key: \"initEvents\",\n    value: function initEvents() {\n      this.initVisibilityChangeEvent();\n      this.initMouseEvent();\n    }\n  }, {\n    key: \"initVisibilityChangeEvent\",\n    value: function initVisibilityChangeEvent() {\n      var _this2 = this;\n\n      window.addEventListener('visibilitychange', function () {\n        if (document.visibilityState !== \"visible\") {\n          _this2.frameIsPaused = true;\n        } else {\n          _this2.frameIsPaused = false;\n          _this2.time = performance.now();\n        }\n      });\n    }\n  }, {\n    key: \"setCanvasSize\",\n    value: function setCanvasSize() {\n      this.cvs.width = CANVAS.width;\n      this.cvs.height = CANVAS.height;\n      this.cvs.style.backgroundColor = CANVAS.background;\n    }\n  }, {\n    key: \"animate\",\n    value: function animate() {\n      if (this.frameIsPaused) {\n        this.animate();\n      }\n\n      var $this = this;\n      var correct = 10;\n      var dt = (performance.now() - this.time) * 10 / (1000 * correct);\n      this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);\n\n      for (var i = 0; i < correct; i++) {\n        this.refreshCords();\n        this.refreshBalls(dt);\n      }\n\n      this.drawAll(dt);\n      this.time = performance.now();\n      requestAnimationFrame(this.animate.bind($this));\n    }\n  }, {\n    key: \"refreshCords\",\n    value: function refreshCords() {\n      for (var i = 0; i < this.cords.length; i++) {\n        var cord = this.cords[i];\n        var force = cord.calcForce(); // cord.ballFormer.force.incrementBy(force);\n\n        cord.ballFormer.force.incrementBy(force.multiply(-1).add(cord.ballFormer.gravity.multiply(cord.ballFormer.mass))); // cord.ballLatter.force.decrementBy(force);\n\n        cord.ballLatter.force = force.add(cord.ballLatter.gravity.multiply(cord.ballLatter.mass));\n      }\n    }\n  }, {\n    key: \"refreshBalls\",\n    value: function refreshBalls(dt) {\n      var frictionConst = Math.pow(0.5, dt / FRICTION_HALF__LIFE);\n\n      var _iterator = _createForOfIteratorHelper(this.balls),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var ball = _step.value;\n\n          if (!ball.fixed) {\n            var dv = ball.force.multiply(dt / ball.mass); // Update the position using the mean speed in this increment.\n\n            ball.x += dt * (ball.velocity.x + dv.x / 2);\n            ball.y += dt * (ball.velocity.y + dv.y / 2); // Update the ball's speed. Apply friction to gradually reduce energy.\n\n            ball.velocity.scaleBy(frictionConst);\n            ball.velocity.incrementBy(dv);\n          }\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    }\n  }, {\n    key: \"drawAll\",\n    value: function drawAll(dt) {\n      var _this3 = this;\n\n      // 把球和弦都個別畫出來\n      this.cords.forEach(function (o, i) {\n        o.draw(_this3.ctx);\n      });\n      this.balls.forEach(function (o, i) {\n        o.draw(_this3.ctx);\n      });\n    }\n  }, {\n    key: \"grabBall\",\n    value: function grabBall(x, y) {\n      if (!!this.ballGrabbed) return; // 用泡沫排序法去求得目前距離滑鼠位置最近的球\n\n      this.ballGrabbed = this.balls[0];\n      var shortestDist = this.getDist(x, y, this.ballGrabbed);\n\n      var _iterator2 = _createForOfIteratorHelper(this.balls),\n          _step2;\n\n      try {\n        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n          var ball = _step2.value;\n          var dist = this.getDist(x, y, ball);\n\n          if (dist <= shortestDist) {\n            shortestDist = dist;\n            this.ballGrabbed = ball;\n          }\n        }\n      } catch (err) {\n        _iterator2.e(err);\n      } finally {\n        _iterator2.f();\n      }\n\n      if (this.ballGrabbed.fixed || shortestDist > MAX_GRAB_DIST) return;\n      this.pullBall(x, y, shortestDist);\n    }\n  }, {\n    key: \"pullBall\",\n    value: function pullBall(x, y) {\n      if (!this.ballGrabbed || this.ballGrabbed.fixed) return;\n      if (this.getDist(x, y, this.ballGrabbed) > MAX_GRAB_DIST) return;\n      this.ballGrabbed.x = x;\n      this.ballGrabbed.y = y;\n      this.ballGrabbed.velocity = new _class__WEBPACK_IMPORTED_MODULE_0__.Vector2D(0, 0);\n    }\n  }, {\n    key: \"initMouseEvent\",\n    value: function initMouseEvent() {\n      var _this4 = this;\n\n      this.cvs.addEventListener('mousedown', function (e) {\n        var mouseX = e.clientX - _this4.cvs.getBoundingClientRect().left;\n\n        var mouseY = e.clientY - _this4.cvs.getBoundingClientRect().top;\n\n        _this4.grabBall(mouseX, mouseY);\n      });\n      this.cvs.addEventListener('mouseup', function () {\n        _this4.ballGrabbed = null;\n      });\n      this.cvs.addEventListener('mousemove', function (e) {\n        var mouseX = e.clientX - _this4.cvs.getBoundingClientRect().left;\n\n        var mouseY = e.clientY - _this4.cvs.getBoundingClientRect().top;\n\n        _this4.pullBall(mouseX, mouseY);\n      });\n      this.cvs.addEventListener('mouseleave', function () {\n        _this4.ballGrabbed = null;\n      });\n    }\n  }]);\n\n  return Elastic2DCordAnimation;\n}();\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var ctx = document.querySelector('canvas').getContext('2d');\n  var instance = new Elastic2DCordAnimation(ctx);\n});\n\n//# sourceURL=webpack://webpack_playground/./src/js/elastic-2d/index.js?");

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
/******/ 	__webpack_require__("./src/js/elastic-2d/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scss/main.scss");
/******/ 	
/******/ })()
;