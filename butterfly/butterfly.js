const PI = Math.PI;
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
let x = 0;
let y = 0;

var lastPoint = { x: canvas.width / 2, y: canvas.height / 2 };

for (let theta = 0; theta < 2 * PI; theta += 0.01) {
  r =
    Math.exp(Math.cos(theta)) -
    2 * Math.cos(4 * theta) +
    Math.pow(Math.sin(theta / 12), 5);

  x = r * Math.cos(theta);
  y = r * Math.sin(theta);

  xx = x * 30 + canvas.width / 2;
  yy = y * 30 + canvas.height / 2;

  context.beginPath();
  context.moveTo(lastPoint.x, lastPoint.y);
  context.lineWidth = 1;
  context.lineTo(xx, yy);
  if (x > 0 && y > 0) {
    context.strokeStyle = "#F00"; // red
    // console.log(0);
  } else if (x > 0 && y < 0) {
    context.strokeStyle = "#F00";
    // console.log(1);
  } else if (x < 0 && y < 0) {
    context.strokeStyle = "#00F"; // blue
    // console.log(2);
  } else if (x < 0 && y > 0) {
    context.styleStyle = "#0AF"; // light blue
    // console.log(3);
  } else {
    context.strokeStyle = "#000"; // black
    // console.log("A");
  }

  context.stroke();
  context.closePath();
  (lastPoint.x = xx), (lastPoint.y = yy);
}
