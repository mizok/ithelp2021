import { Canvas2DFxBase } from '../base';
import * as dat from 'dat.gui';

const STATUS = {
  blurSize: 0,
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
  isRimPixel(pixelIndex, blurSize) {
    return pixelIndex / this.cvs.width < blurSize || //位於上邊緣的像素
      pixelIndex % this.cvs.width < blurSize || //位於左邊緣的像素
      pixelIndex / this.cvs.width > (this.cvs.height - 1) - blurSize ||//位於下邊緣的像素
      pixelIndex % this.cvs.width > (this.cvs.width - 1) - blurSize//位於右邊緣的像素
  }

  // blurSize 指的是 (卷積核的寬度-1) / 2
  boxBlur(img, blurSize = 1) {
    const kernelSize = blurSize * 2 + 1;
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
      if (this.isRimPixel(pixelIndex, blurSize)) return;

      //接著總和橫向所有像素 r/g/b/a的和, 取平均
      let rTotal, gTotal, bTotal, aTotal, rAverage, gAverage, bAverage, aAverage;
      rTotal = gTotal = bTotal = aTotal = rAverage = gAverage = bAverage = aAverage = 0;

      for (let i = pixelIndex - blurSize; i < pixelIndex + blurSize + 1; i++) {
        rTotal += data[i * 4];
        gTotal += data[i * 4 + 1];
        bTotal += data[i * 4 + 2];
        aTotal += data[i * 4 + 3];
      }

      rAverage = rTotal / kernelSize;
      gAverage = gTotal / kernelSize;
      bAverage = bTotal / kernelSize;
      aAverage = aTotal / kernelSize;

      data[channelIndex] = rAverage;
      data[channelIndex + 1] = gAverage;
      data[channelIndex + 2] = bAverage;
      data[channelIndex + 3] = aAverage;

      rTotal = gTotal = bTotal = aTotal = rAverage = gAverage = bAverage = aAverage = 0;

      for (let i = pixelIndex - imgWidth * blurSize; i < pixelIndex + imgWidth * (blurSize + 1); i = i + imgWidth) {
        rTotal += data[i * 4];
        gTotal += data[i * 4 + 1];
        bTotal += data[i * 4 + 2];
        aTotal += data[i * 4 + 3];
      }

      rAverage = rTotal / kernelSize;
      gAverage = gTotal / kernelSize;
      bAverage = bTotal / kernelSize;
      aAverage = aTotal / kernelSize;

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


  }
}

function initControllerUI() {
  const hiddenInput = document.createElement('input');
  hiddenInput.id = "img-upload";
  hiddenInput.type = 'file';
  hiddenInput.style.display = 'none';
  document.body.append(hiddenInput);
  const gui = new dat.GUI();
  const blurSizeController = gui.add(STATUS, 'blurSize', 0, 100, 1).name('模糊量');
  const fileUploader = gui.add(STATUS, 'imgSrc').name('上傳圖片');
  return {
    blurSizeController: blurSizeController,
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

  gui.blurSizeController.onChange(() => {
    blurKit.boxBlur(img, STATUS.blurSize)
  })

  //
})()