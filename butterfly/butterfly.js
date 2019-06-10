let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
context.lineWidth = 0.5;

const PI = Math.PI;
let x = 0;
let y = 0;
let maxx = 0;
let maxy = 0;

var lastPoint = { x: canvas.width / 2, y: canvas.height / 2 };

let palette = {
  radial : function (x, y) {
    let distance = Math.sqrt(x * x + y * y);
    if (distance < 1) {
      return "red";
    } else if (distance < 2) {
      return "green";
    } else if (distance < 3) {
      return "blue";
    } else if (distance < 4) {
      return "yellow";
    } else {
      return "black";
    }
  },
  quadrant : function (x, y) {
    if (x > 0 && y > 0) {
      return "red";
    } else if (x > 0 && y < 0) {
      return "green";
    }
    else if (x < 0 && y > 0) {
      return "black";
    }
    else if (x < 0 && y < 0) {
      return "blue";
    }
    else {
      return "black"; // black
    }
  }
}

for (let theta = 0; theta < 10 * PI; theta += 0.010) {
  r =
    Math.exp(Math.cos(theta)) -
    2 * Math.cos(4 * theta) +
    Math.pow(Math.sin(theta / 12), 5);

  x = r * Math.cos(theta);
  y = r * Math.sin(theta);

  maxx = (Math.max(Math.abs(x) > maxx)) ? Math.max(Math.abs(x)) : maxx;
  maxy = (Math.max(Math.abs(y) > maxy)) ? Math.max(Math.abs(y)) : maxy;

  xx = x * 60 + canvas.width / 2;
  yy = y * 60 + canvas.height / 2;

  context.beginPath();
  context.moveTo(lastPoint.x, lastPoint.y);
  context.strokeStyle = palette.radial(x, y);
  context.lineTo(xx, yy);
  context.stroke();
  context.closePath();
  lastPoint.x = xx;
  lastPoint.y = yy;
}

console.log("max", maxx, maxy);