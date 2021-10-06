
import { Canvas2DFxBase } from '../base';
import { randomWithinRange, degreeToRadian } from '../function';
import { drawSquare, drawCircle } from '../shape';
import { linearInterpolation, colorInterpolation } from '../interpolation';
import { FIRE } from './fire';
import { ILLUSION } from './illusion';
import { TRAIL } from './trail';
import { STARDUST } from './stardust';

const DEFAULT = {
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
    motionTrail: (x) => null,//  not valid if mouseControl is enabled.
    enableMouseAndGuestureControl: false,
    dispersionRange: 20,
    directionAngle: 90,
    width: 1,
    height: 1,
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
    },
  },
}



class ParticleSys extends Canvas2DFxBase {
  constructor(ele, config, defaultConfig) {
    super(ele, config, defaultConfig);
    this.pool = [];
    this.init();
  }
  init() {
    this.initProjector();
    if (this.config.projector.enableMouseAndGuestureControl) {
      this.addMouseAndGuestureControl();
    }
    this.drawAll();
  }

  initProjector() {
    this.projector = {
      width: this.config.projector.width,
      height: this.config.projector.height,
      position: {
        x: this.cvs.width / 2,
        y: this.cvs.height / 2
      }
    }
  }

  genParticle(type, width, color, speedX, speedY, positionX, positionY, lifespan, opacity) {
    let $this = this;
    let particle = {
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
        y: speedY,
      },
      position: {
        x: positionX,
        y: positionY
      },
      dead: false
    }
    return particle;
  }

  addMouseAndGuestureControl() {
    this.projector.position = {
      x: this.mouse.x,
      y: this.mouse.y,
    }

    requestAnimationFrame(this.addMouseAndGuestureControl.bind(this))
  }


  getParticleLaunchDirection() {
    return randomWithinRange(
      degreeToRadian(-this.config.projector.directionAngle - 180 - this.config.projector.dispersionRange / 2),
      degreeToRadian(-this.config.projector.directionAngle - 180 + this.config.projector.dispersionRange / 2),
    )
  }

  fillPool() {
    let particles = this.config.particles;
    let projector = this.projector;
    let type = particles.type;
    let color = particles.color.from;
    let opacity = particles.opacity;
    let positionX = projector.position.x + randomWithinRange(-projector.width / 2, projector.width / 2);
    let positionY = projector.position.y + randomWithinRange(-projector.height / 2, projector.height / 2);
    for (let i = 0; i < this.config.particles.density / 10; i++) {
      let width = particles.width.base + randomWithinRange(-particles.width.floatingThreshold, particles.width.floatingThreshold);
      let lifespan = particles.lifespan.base + randomWithinRange(-particles.lifespan.floatingThreshold, particles.lifespan.floatingThreshold);
      let speedX = particles.speed.base * Math.sin(this.getParticleLaunchDirection()) + randomWithinRange(-particles.speed.floatingThreshold.x, particles.speed.floatingThreshold.x) + this.config.space.gravity.x + this.config.space.wind.x;
      let speedY = particles.speed.base * Math.cos(this.getParticleLaunchDirection()) + randomWithinRange(-particles.speed.floatingThreshold.y, particles.speed.floatingThreshold.y) + this.config.space.gravity.y + this.config.space.wind.y;
      let particle = this.genParticle(type, width, color, speedX, speedY, positionX, positionY, lifespan, opacity);
      this.pool.push(particle);
    }
  }

  refreshParticlesPosition() {
    for (let i = 0; i < this.pool.length; i++) {
      this.pool[i].position.x += this.pool[i].speed.x * this.timeElapsed;
      this.pool[i].position.y += this.pool[i].speed.y * this.timeElapsed;
    }
  }

  getParticleDrawingType(type) {
    switch (type) {
      case 'square':
        return drawSquare
      case 'circle':
        return drawCircle
    }
  }


  drawAll() {
    this.background(this.config.bgColor);
    for (let i = 0; i < this.pool.length; i++) {
      if (!this.pool[i].dead) {
        this.pool[i].draw(this.ctx, this.pool[i].position.x, this.pool[i].position.y, this.pool[i].width, this.pool[i].color, this.pool[i].opacity);
        this.pool[i].life -= 1;
        if (this.pool[i].life > 0) {
          this.pool[i].width = linearInterpolation(this.pool[i].life, this.pool[i].lifespan, 0, this.pool[i].maxWidth, 0);
          this.pool[i].opacity = linearInterpolation(this.pool[i].life, this.pool[i].lifespan, 0, this.config.particles.opacity, 0);
          this.pool[i].color = colorInterpolation(this.pool[i].life, this.pool[i].lifespan, 0, this.config.particles.color.from, this.config.particles.color.to);
        }
        else {
          this.pool[i].dead = true;
        }
      }
      else {
        this.pool.splice(i, 1);
        i--;
      }
    }

    this.refreshParticlesPosition();

    this.fillPool();

    requestAnimationFrame(this.drawAll.bind(this))
  }

}

(() => {
  let cvs = document.querySelector('canvas');
  let instance = new ParticleSys(cvs, STARDUST, DEFAULT);
})()