export class Vector2D {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  lengthSquared() {
    return this.x * this.x + this.y * this.y;
  }
  /**
   * 求純量值
   *
   * @returns
   * @memberof Vector2D
   */
  length() {
    return Math.sqrt(this.lengthSquared());
  }
  /**
   * 複製該向量
   *
   * @returns
   * @memberof Vector2D
   */
  clone() {
    return new Vector2D(this.x, this.y);
  }
  /**
   *倒轉該向量
   *
   * @memberof Vector2D
   */
  negate() {
    this.x = - this.x;
    this.y = - this.y;
  }

  /**
   * 把該向量轉變成單位向量
   *
   * @returns
   * @memberof Vector2D
   */
  normalize() {
    let length = this.length(); if (length > 0) {
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
  add(vec) {
    return new Vector2D(this.x + vec.x, this.y + vec.y);
  }

  /**
   * 加上某向量
   *
   * @param {*} vec
   * @memberof Vector2D
   */
  incrementBy(vec) {
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
  subtract(vec) {
    return new Vector2D(this.x - vec.x, this.y - vec.y);
  }

  /**
   * 扣除某向量
   *
   * @param {*} vec
   * @memberof Vector2D
   */
  decrementBy(vec) {
    this.x -= vec.x;
    this.y -= vec.y;
  }


  /**
     * 回傳擴增k倍後的向量
     *
     * @param {*} k
     * @memberof Vector2D
     */
  multiply(k) {
    return new Vector2D(k * this.x, k * this.y);
  }

  /**
   * 擴增該向量
   *
   * @param {*} k
   * @memberof Vector2D
   */
  scaleBy(k) {
    this.x *= k; this.y *= k;
  }


  /**
   * 求取該向量與其他向量的內積
   *
   * @param {*} vec
   * @returns
   * @memberof Vector2D
   */
  dotProduct(vec) {
    return this.x * vec.x + this.y * vec.y;
  }

  /**
   * 求取此向量映射在某向量上的長度
   *
   * @param {*} vec
   * @returns
   * @memberof Vector2D
   */
  projection(vec) {
    const length = this.length();
    const lengthVec = vec.length();
    let proj;
    if ((length == 0) || (lengthVec == 0)) {
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
  project(vec) {
    return vec.para(this.projection(vec));
  }


  /**
     * 根據傳入的u值來回傳一個u倍(或-u倍)的單位向量
     *
     * @param {*} vec
     * @returns
     * @memberof Vector2D
     */
  para(u, positive = true) {

    const length = this.length();
    const vec = new Vector2D(this.x, this.y);
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
  perp(u, anticlockwise = true) {
    if (typeof (anticlockwise) === 'undefined') anticlockwise = true;
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

  addScaled(vec, k) {
    return new Vector2D(this.x + k * vec.x, this.y + k * vec.y);
  }


  /**
   * 求取該向量與其他向量的夾角
   *
   * @param {*} vec
   * @returns
   * @memberof Vector2D
   */
  static angleBetween = function (vec1, vec2) {
    return Math.acos(vec1.dotProduct(vec2) / (vec1.length() * vec2.length()));
  }

}

export class Point2D {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}