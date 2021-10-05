import { Vector2D } from '../class'

const CANVAS = {
  width: 800,
  height: 600,
  background: 'gray'
}

const BALLS = [
  {
    x: 300,
    y: 300,
    radius: 25,
    mass: 50,
  },
  {
    x: 380,
    y: 380,
    radius: 25,
    mass: 50,
  },
  {
    x: 375,
    y: 330,
    radius: 25,
    mass: 50,
  },
  {
    x: 200,
    y: 200,
    radius: 55,
    mass: 100,
  },
  {
    x: 250,
    y: 250,
    radius: 15,
    mass: 50,
  },
  {
    x: 450,
    y: 450,
    radius: 10,
    mass: 10,
  },
  {
    x: 600,
    y: 600,
    radius: 75,
    mass: 50,
  },
]

const getDist = (x0, y0, x1, y1) => {
  return Math.sqrt((x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0));
}

const MAGNET_SIZE = 500;

const MAGNET_FORCE_CONST = 7000;

class Circle {
  constructor(x, y, radius, fillColor = 'transparent', strokeColor = 'black', lineWidth = 1) {
    this.x = x;
    this.y = y;
    this.fillColor = fillColor;
    this.strokeColor = strokeColor;
    this.lineWidth = lineWidth;
    this.radius = radius;
  }
  draw(ctx) {
    ctx.save()
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
}

class Ball extends Circle {
  constructor(x, y, radius, mass, fillColor = 'rgba(0,0,0,0.25)', strokeColor = 'transparent') {
    super(x, y, radius, fillColor, strokeColor);
    this.friction = 0.995;
    this.force = new Vector2D(0, 0);
    this.acc = new Vector2D(0, 0);
    this.velocity = new Vector2D(0, 0);
    this.mass = mass;
  }
  refreshLocation(dt) {
    this.x += this.velocity.x * dt;
    this.y += this.velocity.y * dt;
  }
  refreshSpeed(dt) {
    this.velocity.scaleBy(this.friction);
    this.velocity.incrementBy(this.acc.multiply(dt));
  }
}

class MagnetAnimation {
  constructor(ctx) {
    this.ctx = ctx;
    this.cvs = ctx.canvas;
    this.frameIsPaused = false;
    this.balls = [];
    this.mouse = {
      x: 0,
      y: 0
    }
    this.magnet = null
    this.init();
  }
  init() {
    this.time = performance.now();
    this.setCanvasSize();
    this.initEvents();
    this.initBalls();
    this.animate();
  }
  initBalls() {
    BALLS.forEach((o, i) => {
      const ball = new Ball(o.x, o.y, o.radius, o.mass);
      this.balls.push(ball);
    })
  }
  initEvents() {
    this.initVisibilityChangeEvent();
    this.initMouseEvent();
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
  initMouseEvent() {
    this.cvs.addEventListener('mousedown', () => {
      this.isClicked = true;
    })
    this.cvs.addEventListener('mousemove', (e) => {
      if (!this.isClicked) return;
      let rect = this.cvs.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
    })
    this.cvs.addEventListener('mouseup', () => {
      console.log(this.balls);
      this.isClicked = false;
    })
    this.cvs.addEventListener('mouseleave', () => {
      this.isClicked = false;
    })
  }

  drawAll() {
    this.drawMagnet();
    this.drawBalls();
  }

  drawMagnet() {
    new Circle(this.mouse.x, this.mouse.y, MAGNET_SIZE / 2).draw(this.ctx);
  }

  drawBalls() {
    this.balls.forEach((o, i) => {
      o.draw(this.ctx);
    })
  }

  animate() {
    if (this.frameIsPaused) {
      this.animate();
    }
    const $this = this;
    const frameDelay = 10 // frameDelay 是用來做動畫抽幀的常數，可以想像成會讓動畫加速！
    const dt = (performance.now() - this.time) * frameDelay / 1000;
    this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);
    this.drawAll();
    this.refreshBallsLocation(dt);
    this.refreshBallsSpeed(dt);
    this.refreshBallsAcc();

    this.time = performance.now();
    requestAnimationFrame(this.animate.bind($this));
  }

  refreshBallsLocation(dt) {
    this.balls.forEach((o, i) => {
      o.refreshLocation(dt);
    })
  }

  refreshBallsSpeed(dt) {
    this.balls.forEach((o, i) => {
      o.refreshSpeed(dt);
    })
  }

  refreshBallsAcc() {
    this.balls.forEach((o, i) => {
      const distToMouse = getDist(this.mouse.x, this.mouse.y, o.x, o.y);
      if (distToMouse < MAGNET_SIZE / 2 + o.radius && distToMouse > 1e-2) {
        o.force = new Vector2D(this.mouse.x - o.x, this.mouse.y - o.y).para(MAGNET_FORCE_CONST / (distToMouse));
        o.acc = o.force.multiply(1 / o.mass);
      }
      else {
        o.force = new Vector2D(0, 0);
        o.acc = new Vector2D(0, 0);
      }
    })
  }

  setCanvasSize() {
    this.cvs.width = CANVAS.width;
    this.cvs.height = CANVAS.height;
    this.cvs.style.backgroundColor = CANVAS.background;
  }
}


(() => {
  let ctx = document.querySelector('canvas').getContext('2d');
  let instance = new MagnetAnimation(ctx);
})()