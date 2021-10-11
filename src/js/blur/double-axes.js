import { Canvas2DFxBase } from '../base';
import * as dat from 'dat.gui';

const STATUS = {
  horizontalBlurSize: 1,
  verticalBlurSize: 1,
  imgSrc: function () {
    const imgUploader = document.getElementById('img-upload');
    imgUploader.click();
  }
}


class FilterBlur extends Canvas2DFxBase {
  constructor(cvs) {
    super(cvs);
  }

  // blurSize 指的是 (卷積核的寬度-1) / 2
  isRimPixel(pixelIndex, horizontalBlurSize, verticalBlurSize) {
    return pixelIndex / this.cvs.width < verticalBlurSize || //位於上邊緣的像素
      pixelIndex % this.cvs.width < horizontalBlurSize || //位於左邊緣的像素
      pixelIndex / this.cvs.width > (this.cvs.height - 1) - verticalBlurSize ||//位於下邊緣的像素
      pixelIndex % this.cvs.width > (this.cvs.width - 1) - horizontalBlurSize//位於右邊緣的像素
  }


  // blurSize 指的是 (卷積核的寬度-1) / 2
  boxBlur(img, horizontalBlurSize = 1, verticalBlurSize = 1) {
    const horizontalKernelSize = horizontalBlurSize * 2 + 1;
    const verticalKernelSize = verticalBlurSize * 2 + 1;
    const imgWidth = img.width;
    const imgHeight = img.height;
    this.setCanvasSize(imgWidth, imgHeight);
    this.ctx.drawImage(img, 0, 0, imgWidth, imgHeight);

    // 先取得imageData
    const imageData = this.ctx.getImageData(0, 0, imgWidth, imgHeight);
    const data = imageData.data;

    const calcAverage = (channelIndex) => {
      const pixelIndex = channelIndex / 4;
      //首先檢查該pixel是不是邊緣像素
      if (this.isRimPixel(pixelIndex, horizontalBlurSize, verticalBlurSize)) return;

      //接著總和橫向所有像素 r/g/b/a的和, 取平均
      let rTotal, gTotal, bTotal, aTotal, rAverage, gAverage, bAverage, aAverage;
      rTotal = gTotal = bTotal = aTotal = rAverage = gAverage = bAverage = aAverage = 0;

      for (let i = pixelIndex - horizontalBlurSize; i < pixelIndex + horizontalBlurSize + 1; i++) {
        rTotal += data[i * 4];
        gTotal += data[i * 4 + 1];
        bTotal += data[i * 4 + 2];
        aTotal += data[i * 4 + 3];
      }

      rAverage = rTotal / horizontalKernelSize;
      gAverage = gTotal / horizontalKernelSize;
      bAverage = bTotal / horizontalKernelSize;
      aAverage = aTotal / horizontalKernelSize;

      data[channelIndex] = rAverage;
      data[channelIndex + 1] = gAverage;
      data[channelIndex + 2] = bAverage;
      data[channelIndex + 3] = aAverage;

      rTotal = gTotal = bTotal = aTotal = rAverage = gAverage = bAverage = aAverage = 0;

      for (let i = pixelIndex - imgWidth * verticalBlurSize; i < pixelIndex + imgWidth * (verticalBlurSize + 1); i = i + imgWidth) {
        rTotal += data[i * 4];
        gTotal += data[i * 4 + 1];
        bTotal += data[i * 4 + 2];
        aTotal += data[i * 4 + 3];
      }

      rAverage = rTotal / verticalKernelSize;
      gAverage = gTotal / verticalKernelSize;
      bAverage = bTotal / verticalKernelSize;
      aAverage = aTotal / verticalKernelSize;

      data[channelIndex] = rAverage;
      data[channelIndex + 1] = gAverage;
      data[channelIndex + 2] = bAverage;
      data[channelIndex + 3] = aAverage;
    }


    for (let i = 0; i < data.length; i = i + 4) {
      // i is channelIndex
      calcAverage(i);
    }

    this.ctx.clearRect(0, 0, imgWidth, imgHeight);
    this.ctx.putImageData(imageData, 0, 0);

    return imageData;
  }

}

function initControllerUI() {
  const hiddenInput = document.createElement('input');
  hiddenInput.id = "img-upload";
  hiddenInput.type = 'file';
  hiddenInput.style.display = 'none';
  document.body.append(hiddenInput);
  const gui = new dat.GUI();
  const horizontalBlurSizeController = gui.add(STATUS, 'horizontalBlurSize', 0, 100, 1).name('水平模糊量');
  const verticalBlurSizeController = gui.add(STATUS, 'verticalBlurSize', 0, 100, 1).name('垂直模糊量');
  const fileUploader = gui.add(STATUS, 'imgSrc').name('上傳圖片');
  return {
    horizontalBlurSizeController: horizontalBlurSizeController,
    verticalBlurSizeController: verticalBlurSizeController,
    fileUploader: hiddenInput
  }
}


(() => {
  const cvs = document.querySelector('canvas');
  const blurKit = new FilterBlur(cvs);
  const gui = initControllerUI();
  const reader = new FileReader();
  const img = new Image();

  // 設定上傳圖片時的操作
  gui.fileUploader.addEventListener('change', (e) => {
    const file = e.currentTarget.files[0];
    if (!file) return;
    img.onload = () => {
      blurKit.boxBlur(img, STATUS.blurSize)
    }
    reader.onload = (ev) => {
      img.src = ev.target.result;
    }
    reader.readAsDataURL(file);
  })

  gui.horizontalBlurSizeController.onChange(() => {
    blurKit.boxBlur(img, STATUS.horizontalBlurSize, STATUS.verticalBlurSize)
  })
  gui.verticalBlurSizeController.onChange(() => {
    blurKit.boxBlur(img, STATUS.horizontalBlurSize, STATUS.verticalBlurSize)
  })

  //
})()