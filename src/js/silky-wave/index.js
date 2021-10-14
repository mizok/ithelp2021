import { Canvas2DFxBase } from '../base';
import { linearInterpolation } from '../interpolation';
import { perlinNoise } from '../noise';

const DEFAULT = {
  range: 100,
  strokeWeight: 2,
  strokeColor: 'white',
  lineNumber: 10,
  vertexGap: 50,
  frequency: 0.005,
  verticalNoiseParameter: 0.025,
  horizontalNoiseParameter: 0.001,
  globalAlpha: 0.15,
  bgColor: 'black'
}

class SilkyWave extends Canvas2DFxBase {
  constructor(ele, defaultConfig, config) {
    super(ele, defaultConfig, config);
    this.init();
  }
  init() {
    this.drawAll();
  }
  drawAll() {
    this.background(this.config.bgColor);
    for (let i = 0; i < this.config.range; i++) {
      let thisLineAlpha = linearInterpolation(i, 0, this.config.range, 0, 1); //定義單一線條顏色
      this.ctx.strokeStyle = `rgba(255,255,255,${thisLineAlpha})`;
      this.ctx.globalAlpha = this.config.globalAlpha;
      //把水平座標分割成複數段落
      for (let x = 0; x < this.cvs.width + this.config.vertexGap; x += this.config.vertexGap) {
        let randomNoise = perlinNoise(x * this.config.horizontalNoiseParameter, i * this.config.verticalNoiseParameter, this.frameCount * this.config.frequency);
        let y = linearInterpolation(randomNoise, 0, 1, 0, this.cvs.height);
        if (x === 0) {
          this.ctx.beginPath();
          this.ctx.moveTo(x, y);
        }
        else if (x < this.cvs.width + (this.config.vertexGap / 2)) {
          this.ctx.lineTo(x, y, x, y + 100)
        }
      }
      this.ctx.stroke();
    }
    requestAnimationFrame(this.drawAll.bind(this))
  }
}


(() => {
  const cvs = document.querySelector('canvas');
  const instance = new SilkyWave(cvs, DEFAULT, {})
})()