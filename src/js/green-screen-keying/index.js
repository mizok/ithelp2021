const videoSource = require('../../video/t-rex.mp4');
import { Canvas2DFxBase } from '../base';


class GreenScreenKeying extends Canvas2DFxBase {
  constructor(cvs, gmin = 150, rmax = 100, bmax = 100) {
    super(cvs);
    this.gmin = gmin;
    this.rmax = rmax;
    this.bmax = bmax;
    this.init();
  }

  init() {
    this.initScreens(videoSource, 500);
  }


  initScreens(videoSrc, size) {
    // 這邊我們創建一個video tag用來承接透過require() import 進來的 source
    this.video = document.createElement('video');

    // 這邊我們透過promise 來確保後續的程式都會在video 載入完畢之後執行, 這部分這樣寫的原因主要是因為要把canvas的大小設置成和影片一樣，但是video 的長寬尺寸必須要在載入完畢之後才能正確取得(否則可能會取得0)
    let resolve;
    const promise = new Promise((res) => { resolve = res });


    this.video.addEventListener('loadeddata', () => {
      // Video is loaded and can be played
      resolve();
    }, false);

    // body 被按下的時候發動 video的play方法，然後開始canvas的渲染
    document.body.addEventListener('click', () => {
      this.video.play();
      this.animate();
    }, false);

    promise.then(() => {
      // videoWidth/videoHeight分別是video 的原始高/原始寬
      const vw = this.video.videoWidth;
      const vh = this.video.videoHeight;
      // 這邊就是開始把canvas和video的大小都設定為一樣
      this.videoStyleWidth = size;
      this.videoStyleHeight = (vh / vw) * size;
      this.video.style.width = this.videoStyleWidth + 'px';
      this.video.style.height = this.videoStyleHeight + 'px';
      this.video.style.pointerEvents = 'none'; // 這一行主要是for移動裝置, 因為移動裝置的video點擊後會自動放大, 這樣就看不到我們的效果了

      // 創建一個架空的canvas, 把他的長寬設定成跟video現在一樣
      this.virtualCanvas = document.createElement('canvas');
      this.virtualCanvas.width = this.videoStyleWidth;
      this.virtualCanvas.height = this.videoStyleHeight;
      // 取得架空canvas的2Dcontext，並把它設置為本class的一項property
      this.virtualCtx = this.virtualCanvas.getContext('2d');
      this.setCanvasSize(this.videoStyleWidth, this.videoStyleHeight);
      document.body.prepend(this.video);
    })

    this.video.src = videoSrc;
    this.video.load(); // 這一行主要是for移動裝置, 因為移動裝置的loadeddata必須要用.load來觸發
  }

  animate() {
    // 若影片停止或被暫停, 則停止canvas動畫的渲染
    if (this.video.paused || this.video.ended) return;
    const $this = this;
    // 把當前video 的樣子繪製在架空的canvas上
    this.virtualCtx.drawImage(this.video, 0, 0, this.videoStyleWidth, this.videoStyleHeight);
    // 取得架空canvas的imageData
    const virtualImageData = this.virtualCtx.getImageData(0, 0, this.videoStyleWidth, this.videoStyleWidth);
    // 把取得的imageData做綠幕摳像處理
    const keyedImageData = this.getKeyedImageData(virtualImageData);
    // 回填imageData
    this.ctx.putImageData(keyedImageData, 0, 0);
    requestAnimationFrame(this.animate.bind($this))
  }

  getKeyedImageData(imageData) {
    const data = imageData.data;
    const keyedImageData = this.ctx.createImageData(imageData.width, imageData.height);
    for (let i = 0; i < data.length; i = i + 4) {
      // 這邊的運算其實也很簡單，原理就是若偵測到g channel的值超過150 ,且 r和b都低於100(也就是顏色很可能偏綠)，那就把該組像素的alpha channel值設置為0, 讓他變透明 
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      keyedImageData.data[i] = r;
      keyedImageData.data[i + 1] = g;
      keyedImageData.data[i + 2] = b;
      if (g > this.gmin && r < this.rmax && b < this.bmax) {
        keyedImageData.data[i + 3] = 0;
      }
      else {
        keyedImageData.data[i + 3] = data[i + 3];
      }
    }
    return keyedImageData;
  }


}


(() => {
  const cvs = document.querySelector('canvas');
  const instance = new GreenScreenKeying(cvs);
})();