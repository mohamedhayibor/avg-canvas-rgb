'use strict';

module.exports = function ( imageData ) {
  var pixelsData = imageData.data;
  var i = 0,
      len = pixelsData.length,
      avgRGB = [0, 0, 0],
      onePixelParam = 4;

  for (; i < len; i += onePixelParam) {
    avgRGB[0] += pixelsData[i  ]; // red
    avgRGB[1] += pixelsData[i+1]; // green
    avgRGB[2] += pixelsData[i+2]; // blue
    // i+3 is alpha > comes with either 0 or 255
  }

  return avgRGB.map( function(value) {
    return Math.floor( value / (len / onePixelParam) );
  });
}
