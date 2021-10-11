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

for (let i = pixelIndex - imgWidth * blurSize; i < pixelIndex + imgWidth * (blurSize + 1); i++) {
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