//首先檢查該pixel是不是邊緣像素，如果是邊緣像素，那就要做特殊處理
if (this.isRimPixel(pixelIndex, blurSize).bool) {
  //做邊緣像素的特殊處理
  const boolArray = this.isRimPixel(pixelIndex, blurSize).boolArray;
  // 如果是左上角的像素(卷積核左上角沒有涵蓋到像素的情況)
  // 0: 上, 1:右, 2:下, 3:左
  if (boolArray[0] && boolArray[3]) {

  }
  // 如果是右上角的像素(卷積核右上角沒有涵蓋到像素的情況)
  else if (boolArray[0] && boolArray[1]) {

  }
  // 如果是左下角的像素(卷積核左下角沒有涵蓋到像素的情況)
  else if (boolArray[2] && boolArray[3]) {

  }
  // 如果是右下角的像素(卷積核左上角沒有涵蓋到像素的情況)
  else if (boolArray[2] && boolArray[1]) {

  }
  // 如果是上緣的像素(卷積核上面沒有涵蓋到像素的情況)
  else if (boolArray[0]) {

  }
  // 如果是右緣的像素(卷積核右邊沒有涵蓋到像素的情況)
  else if (boolArray[1]) {

  }
  // 如果是下緣的像素(卷積核下面沒有涵蓋到像素的情況)
  else if (boolArray[2]) {

  }
  // 如果是左緣的像素(卷積核左邊沒有涵蓋到像素的情況)
  else if (boolArray[3]) {

  }
};