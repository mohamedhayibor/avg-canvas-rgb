# avg-canvas-rgb ![](https://img.shields.io/badge/status-stable-green.svg)
----
This module calculates the average rgb value of a canvas.

## Installation
```
  > npm install avg-canvas-rgb
```

## Usage
The only argument you need to pass in is the [imageData](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getImageData).

```js
var avrRGB = require('avg-canvas-rgb');

console.log( avrRGB( context ) ); // [35, 34, 95]
```

## Raison d'être
Had a fun reading on [CanvasRenderingContext2D.getImageData()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getImageData) and there were not any module that does this calculation.

> super light, no dependencies, written in ES5.

## License
![](https://img.shields.io/badge/license-MIT-blue.svg) © [Mohamed Hayibor](https://github.com/mohamedhayibor)
