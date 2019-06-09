const PI = Math.PI;
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
console.log(canvas.width);
let x = 0;
let y = 0;

context.beginPath();
context.moveTo(canvas.width / 2, canvas.height / 2);

context.lineWidth = .05;
for (let theta = 0; theta < 10 * PI; theta += 0.010) {
    r = Math.exp(Math.cos(theta))
        - 2 * Math.cos(4 * theta)
        + Math.pow(Math.sin(theta / 12), 5);

    x = r * Math.cos(theta);
    y = r * Math.sin(theta);

    xx = (x * 30) + canvas.width / 2;
    yy = (y * 30) + canvas.height / 2;

    context.beginPath();
    // context.lineTo(xx, yy);

    if (x > 0 && y > 0) {
        context.strokeStyle = "#F00";
        console.log(0);
    } else if (x > 0 && y < 0) {
        context.strokeStyle = "#F00";
        console.log(1);
    } else if (x < 0 && y < 0) {
        context.strokeStyle = "#00F";
        console.log(2)
    } else if (x < 0 && y > 0) {
        context.styleStyle = "#0AF";
        console.log(3);
    } else {
        context.strokeStyle = "#000";
        console.log("A");
    }
    // context.beginPath();
    context.lineTo(xx, yy);
    context.stroke();


}

