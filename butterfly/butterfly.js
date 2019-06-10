var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

const PI = Math.PI;
let x = 0;
let y = 0;

var lastPoint = { x: canvas.width / 2, y: canvas.height / 2 };
context.lineWidth = 0.5;

for (let theta = 0; theta < 10 * PI; theta += 0.010) {
  r =
    Math.exp(Math.cos(theta)) -
    2 * Math.cos(4 * theta) +
    Math.pow(Math.sin(theta / 12), 5);

  x = r * Math.cos(theta);
  y = r * Math.sin(theta);

  xx = x * 60 + canvas.width / 2;
  yy = y * 60 + canvas.height / 2;

  context.beginPath();
  context.moveTo(lastPoint.x, lastPoint.y);
  context.strokeStyle = setStrokeStyle(x, y);
  context.lineTo(xx, yy);
  context.stroke();
  context.closePath();
  lastPoint.x = xx;
  lastPoint.y = yy;
}

function setStrokeStyle(x, y) {
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
