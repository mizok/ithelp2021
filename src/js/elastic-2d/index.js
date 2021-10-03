import { Vector2D } from '../class';

const CANVAS = {
  width: 800,
  height: 600,
  background: 'gray'
}

const MAX_GRAB_DIST = 50;
const FRICTION_HALF__LIFE = 1.5;

const BALL = {
  radius: 5,
  color: 'white'
}

const CORDS = [
  {
    length: 10,
    elasticConst: 600,
  },
  {
    length: 10,
    elasticConst: 600,
  },
  {
    length: 10,
    elasticConst: 600,
  },
  {
    length: 10,
    elasticConst: 600,
  },
  {
    length: 10,
    elasticConst: 600,
  },
  {
    length: 10,
    elasticConst: 600,
  }


]



const GRAVITY = 9.8;



const BALL_MASS_CONST = 100;

class Ball {
  constructor(x, y, radius, color, fixed) {
    this.radius = radius;
    this.mass = BALL_MASS_CONST * radius;
    this.color = color;
    this.fixed = fixed; //球是否固定在當前空間中 

    this.x = x;
    this.y = y;
    this.velocity = new Vector2D(0, 0);
    this.force = new Vector2D(0, 0)
    this.acc = new Vector2D(0, 0);
    this.gravity = new Vector2D(0, GRAVITY);
  }

  // 這次我們給球的class 新增這一個方法。用途是用來計算與另外一顆球的距離向量(不含兩顆球的半徑)
  distBetween(ball) {
    const dx = ball.x - this.x;
    const dy = ball.y - this.y;
    const vectorBetween = new Vector2D(dx, dy);
    const lengthAlpha = vectorBetween.length();
    const length = vectorBetween.length() - this.radius - ball.radius;
    const lengthVector = vectorBetween.multiply(length / lengthAlpha);
    return lengthVector;
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
}

// 這次的我們沒有要用之前寫的Spring ，而是新增了Cord(弦)這個類，弦在初始化的時候必須要傳入兩個Ball的實例，還有弦的原始長度、弦的彈性係數
class Cord {
  constructor(ballFormer, ballLatter, cordLength, elasticConst, cordWidth = 1, color = '#555') {
    this.ballFormer = ballFormer; //上面端點的球
    this.ballLatter = ballLatter;//下面端點的球
    this.cordLength = cordLength;  // 原始長度
    this.elasticConst = elasticConst;   //彈性係數
    this.cordWidth = cordWidth;
    this.color = color;
  }

  lengthVector() {
    return this.ballFormer.distBetween(this.ballLatter);
  }

  calcForce() {
    const deltaLength = this.lengthVector().length() - this.cordLength; // 變形量
    const forceValue = deltaLength * this.elasticConst;
    const force = this.lengthVector().para(forceValue, false);// 這邊要注意 force 會跟變形量的方向相反, 所以para的第二參數要給false來轉變成逆向

    return force;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.ballFormer.x, this.ballFormer.y);
    ctx.lineTo(this.ballLatter.x, this.ballLatter.y);
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.cordWidth;
    ctx.stroke();
    ctx.closePath();
  }

}

class Elastic2DCordAnimation {
  constructor(ctx) {
    this.ctx = ctx;
    this.cvs = ctx.canvas;
    this.balls = [];
    this.cords = [];
    this.frameIsPaused = false;
    this.ballGrabbed = null;
    this.init();
  }
  // 入口方法
  init() {
    this.time = 0;
    this.setCanvasSize();
    this.initEntities();
    this.initEvents();
    this.animate();
  }
  // 把所有的實體(entity) 也就是弦和球都先做實例的初始化
  initEntities() {
    // init balls;
    for (let i = 0; i <= CORDS.length; i++) {
      const x = this.cvs.width / 2;
      let y = 0;
      const cordsBefore = CORDS.filter((cord, index) => {
        return index < i
      })
      // 依據每條弦的長短，總合出球的具體位置
      // 這邊大於0的判斷是用來排除掉第一條弦用的
      if (cordsBefore.length > 0) {
        y = cordsBefore.map(cord => cord.length).reduce((prev, next, index) => {
          const gap = index >= 1 ? BALL.radius * 2 : 0;
          return prev + next + gap;
        }, BALL.radius)
      }
      // 最頂端，也就是連結天花板的部分也會被視為一顆球，但是這顆球半徑為0，而且會有『固定（fixed）』屬性
      this.balls.push(new Ball(x, y, i === 0 ? 0 : BALL.radius, BALL.color, i === 0))
    }

    // init cords
    for (let i = 0; i < CORDS.length; i++) {
      const cord = new Cord(this.balls[i], this.balls[i + 1], CORDS[i].length, CORDS[i].elasticConst)
      this.cords.push(cord);
    }


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

  setCanvasSize() {
    this.cvs.width = CANVAS.width;
    this.cvs.height = CANVAS.height;
    this.cvs.style.backgroundColor = CANVAS.background;
  }

  animate() {
    if (this.frameIsPaused) {
      this.animate();
    }
    const $this = this;
    const frameDelay = 10 // frameDelay 是用來做動畫抽幀的常數，可以想像成會讓動畫加速！
    const dt = (performance.now() - this.time) * frameDelay / 1000;
    this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);
    this.refreshCords(); //更新弦
    this.refreshBalls(dt); //更新球

    this.drawAll(dt); // 把全部都畫出來


    this.time = performance.now();
    requestAnimationFrame(this.animate.bind($this));
  }

  refreshCords() {
    for (let i = 0; i < this.cords.length; i++) {
      const cord = this.cords[i];
      const force = cord.calcForce();
      // 這邊要格外注意的是ballFormer 是用incrementBy, 而不是add, 原因是因為在跑loop的時候，前面幾圈可能已經有賦予ballFormer force ，如果用add給新值，前面的值就被吃掉了
      cord.ballFormer.force.incrementBy(force.multiply(-1).add(cord.ballFormer.gravity.multiply(cord.ballFormer.mass)));
      // 但是 ballLatter就可以直接用add了
      cord.ballLatter.force = force.add(cord.ballLatter.gravity.multiply(cord.ballLatter.mass));


    }
  }

  refreshBalls(dt) {
    const frictionConst = Math.pow(0.5, dt / FRICTION_HALF__LIFE);
    for (const ball of this.balls) {
      if (!ball.fixed) {
        // 速度變化量的向量
        const dv = ball.force.multiply(dt / ball.mass);

        // 更新位置
        ball.x += dt * (ball.velocity.x + dv.x / 2);
        ball.y += dt * (ball.velocity.y + dv.y / 2);

        // 先做摩擦力的耗損運算，然後再加上新的速度變化量
        ball.velocity.scaleBy(frictionConst);
        ball.velocity.incrementBy(dv);

      }

    }
  }

  drawAll(dt) {
    // 把球和弦都個別畫出來
    this.cords.forEach((o, i) => {
      o.draw(this.ctx);
    })
    this.balls.forEach((o, i) => {
      o.draw(this.ctx);
    })
  }

  getDist = (x, y, ball) => {
    return Math.sqrt((x - ball.x) * (x - ball.x) + (y - ball.y) * (y - ball.y));
  }

  grabBall(x, y) {
    if (!!this.ballGrabbed) return;
    // 用泡沫排序法去求得目前距離滑鼠位置最近的球
    this.ballGrabbed = this.balls[0];
    let shortestDist = this.getDist(x, y, this.ballGrabbed);
    for (const ball of this.balls) {
      const dist = this.getDist(x, y, ball);
      if (dist <= shortestDist) {
        shortestDist = dist;
        this.ballGrabbed = ball;
      }
    }
    if (this.ballGrabbed.fixed || shortestDist > MAX_GRAB_DIST) return;
    this.pullBall(x, y, shortestDist)
  }

  pullBall(x, y) {
    if (!this.ballGrabbed || this.ballGrabbed.fixed) return; // 如果已經有被抓到的球或是抓到的球本身有fixed屬性則return
    if (this.getDist(x, y, this.ballGrabbed) > MAX_GRAB_DIST) return; // 這邊是抓取的最大距離防呆
    this.ballGrabbed.x = x;
    this.ballGrabbed.y = y;
    this.ballGrabbed.velocity = new Vector2D(0, 0);
  }

  initMouseEvent() {
    this.cvs.addEventListener('mousedown', (e) => {
      const mouseX = e.clientX - this.cvs.getBoundingClientRect().left;
      const mouseY = e.clientY - this.cvs.getBoundingClientRect().top;
      this.grabBall(mouseX, mouseY);
    });
    this.cvs.addEventListener('mouseup', () => {
      this.ballGrabbed = null;
    });
    this.cvs.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX - this.cvs.getBoundingClientRect().left;
      const mouseY = e.clientY - this.cvs.getBoundingClientRect().top;
      this.pullBall(mouseX, mouseY);
    });
    this.cvs.addEventListener('mouseleave', () => {
      this.ballGrabbed = null;
    });
  }

}




document.addEventListener('DOMContentLoaded', () => {
  let ctx = document.querySelector('canvas').getContext('2d');
  let instance = new Elastic2DCordAnimation(ctx)
})