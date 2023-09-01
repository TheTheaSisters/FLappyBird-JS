const canvas = document.getElementById("pong");
const ctx = canvas.getContext("2d");

// User paddle object
const user = {
  x : 0,
  y : canvas.height/2 - 100/2,
  width : 10,
  height: 100,
  color : 'WHITE',
  score : 0
}
// Computer paddle object
const com = {
  x : canvas.width - 10,
  y : canvas.height/2 - 100/2,
  width : 10,
  height: 100,
  color : 'WHITE',
  score : 0
}

// Ball Object
const ball = {
  x : canvas.width/2,
  y : canvas.height/2,
  radius : 10,
  color : 'WHITE'
}

// Rendering user paddle
function drawRect(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

// Render ball
function drawCircle(x, y, r, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI*2, false);
  ctx.closePath();
  ctx.fill();
}

// this will render the shapes on the canvas
function render() {
  drawRect(0, 0, 600, 400, 'BLACK');
  drawRect(user.x, user.y, user.width, user.height, user.color);
  drawRect(com.x, com.y, com.width, com.height, com.color);
  drawRect(300, 0, 2, 400, 'WHITE');
  drawCircle(300, 200, 10, 'WHITE');

}

// this function will update the variables
function update () {

}

// game function
function game () {
  update();
  render();
}

const fps = 50;

setInterval(game, 1000/fps);  