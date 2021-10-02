import { Vector2D, Point2D } from '../class';

const CANVAS = {
  width: 600,
  height: 600,
  background: 'gray'
}

const BALL = {
  radius: 15,
  color: '#333'
}

const ACC = 100;

const WALLS = [
  [new Point2D(50, 50), new Point2D(50, 550)],// 左邊界
  [new Point2D(550, 50), new Point2D(550, 550)],//右邊界
  [new Point2D(50, 550), new Point2D(550, 550)],//下邊界
  [new Point2D(125, 150), new Point2D(475, 100)],// 第一斜坡
  [new Point2D(75, 250), new Point2D(425, 300)],// 第二斜坡
  [new Point2D(125, 450), new Point2D(550, 400)]// 第三斜坡
]

class Ball {
  constructor(x, y, color = BALL.color, radius = BALL.radius, randomSpeed = true) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.radius = radius;
    this.gravity = new Vector2D(0, ACC);
    this.friction = 0.999;
    if (randomSpeed) {
      this.velocity = new Vector2D(
        (Math.random() * this.radius * 2 - radius) * 10,
        (Math.random() * this.radius * 2 - radius) * 10
      )
    }
    else {
      this.velocity = new Vector2D(0, 0);
    }
  }
  draw(ctx) {

    ctx.save()
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }
  refreshLocation(dt) {
    this.x += this.velocity.x * dt;
    this.y += this.velocity.y * dt;
  }
  refreshSpeed(dt) {
    this.velocity.scaleBy(this.friction);
    this.velocity.incrementBy(this.gravity.multiply(dt));
  }
}

class Boundary {
  constructor() {
    this.walls = WALLS;
  }

  draw(ctx) {
    this.walls.forEach((o, i) => {
      ctx.beginPath();
      ctx.moveTo(o[0].x, o[0].y);
      ctx.lineTo(o[1].x, o[1].y);
      ctx.closePath();
      ctx.lineWidth = 5;
      ctx.lineJoin = 'round';
      ctx.strokeStyle = 'white';
      ctx.stroke();
    })
  }
}

class InclinedWallsAndBouncingBallsAnimation {
  constructor(ctx) {
    this.ctx = ctx;
    this.cvs = ctx.canvas;
    this.balls = [];
    this.frameIsPaused = false;
    this.init();
  }

  init() {
    this.time = 0;
    this.setCanvasSize();
    this.initBoundary();
    this.initEvents();
    this.animate();
  }

  initBoundary() {
    this.boundary = new Boundary();
    this.boundary.draw(this.ctx);
  }

  initEvents() {
    this.initVisibilityChangeEvent();
    this.initClickEvent();
  }

  initVisibilityChangeEvent() {
    window.addEventListener('visibilitychange', () => {
      if (document.visibilityState !== "visible") {
        this.frameIsPaused = true;
      }
      else {
        this.frameIsPaused = false;
        this.time = performance.now();
      }
    });
  }

  initClickEvent() {
    this.cvs.addEventListener('click', (e) => {
      const rect = e.target.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      this.balls.push(new Ball(mouseX, mouseY))
    })
  }

  animate() {
    if (this.frameIsPaused) {
      this.animate();
    }
    const $this = this;
    const dt = (performance.now() - this.time) / 1000;
    this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);
    this.animateBalls(dt);
    this.boundary.draw(this.ctx);
    this.time = performance.now();
    requestAnimationFrame(this.animate.bind($this));
  }

  animateBalls(dt) {

    this.balls.forEach((o, i) => {
      o.draw(this.ctx);
      o.refreshLocation(dt);
      if (o.x > this.cvs.width || o.y > this.cvs.height || o.x < 0) {
        this.balls.splice(i, 1);
      }
      o.refreshSpeed(dt);
      this.checkBoundary(dt);
    })
  }

  setCanvasSize() {
    this.cvs.width = CANVAS.width;
    this.cvs.height = CANVAS.height;
    this.cvs.style.backgroundColor = CANVAS.background;
  }

  checkBoundary(dt) {
    this.boundary.walls.forEach((o, i) => {
      const vectorAB = new Vector2D(
        o[1].x - o[0].x,
        o[1].y - o[0].y
      )
      this.balls.forEach((ball, index) => {
        const vectorAToBall = new Vector2D(
          ball.x - o[0].x,
          ball.y - o[0].y
        );
        const vectorBToBall = new Vector2D(
          ball.x - o[1].x,
          ball.y - o[1].y
        );

        const vectorAToBallProj = vectorAToBall.project(vectorAB);
        const vectorBToBallProj = vectorBToBall.project(vectorAB);
        const distVector = vectorAToBall.subtract(vectorAToBallProj);
        const dist = distVector.length();
        if (!dist) return;
        const collisionDetection =
          dist < ball.radius &&
          vectorAToBallProj.length() < vectorAB.length() &&
          vectorBToBallProj.length() < vectorAB.length();
        if (collisionDetection) {
          // 這邊是要先做reposition的部分
          // 這邊的算法是利用『插進牆壁後的球到牆壁距離+球的半徑 = (球在正確的碰撞點到已經插進牆壁這一幀的實際距離, 也就是deltaS)*sin(90度 - 入射角)』

          // 這邊一連串的動作是要把deltaS從純量轉換成向量，以便用substract方法去把球的位置倒回去正確的碰撞點

          // perp 是牆壁的單位法向量
          const perp = vectorAB.perp(1);

          // 這邊因為單位法向量的n必須要跟球的來向大致相反(也就是向量要夾超過90度)，而perp本身又沒有辦法確定到底是取到正或反的法向量，所以要補一個防呆
          if (perp.dotProduct(ball.velocity) > 0) {
            perp.scaleBy(-1)
          }

          // 球速向量和牆壁的夾角
          const angle = Vector2D.angleBetween(ball.velocity, vectorAB);

          // 我們可以藉由算 (球半徑＋球到牆壁距離向量和牆壁法向量的內積)/sin(球速與牆壁夾角) 來取得deltaS

          const deltaS = (ball.radius + distVector.dotProduct(perp)) / Math.sin(angle);

          // 把球速轉化成單位向量，接著再擴張deltaS倍，這樣就能取的到底要倒回去多少距離才能來到正確的碰撞點
          let displ = ball.velocity.para(deltaS);
          ball.x -= displ.x * dt;
          ball.y -= displ.y * dt;
          //到這邊就reposition完畢～

          // 這邊的vcor是我們之前有提到過，加速度和幀間誤差的相互關係會導致球被額外加速一小段距離，而這邊可以藉由乘以vcor 這個參數來抵銷多餘的加速量
          var vcor = 1 - ball.gravity.dotProduct(displ.multiply(dt)) / ball.velocity.lengthSquared();
          // 原速度乘以vcor
          var Velo = ball.velocity.multiply(vcor);

          // 這邊就是取球速於牆壁法線方向的分量
          var normalVelo = distVector.para(Velo.projection(distVector));
          // 這邊則是取球速平行於牆壁的分量
          var tangentVelo = Velo.subtract(normalVelo);
          // 兩者合併就是反射後的速度
          ball.velocity = tangentVelo.addScaled(normalVelo, -ball.friction);

        }
      })

    })
  }
}


document.addEventListener('DOMContentLoaded', () => {
  let ctx = document.querySelector('canvas').getContext('2d');
  let instance = new InclinedWallsAndBouncingBallsAnimation(ctx);
})