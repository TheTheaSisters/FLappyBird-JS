const canvas = document.getElementById("flappyBird");
const ctx = canvas.getContext("2d");

var bg = new Image();
var bird = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();
var fg = new Image();
var score_sound = new Audio();
var hit = new Audio();

var bX = 10;
var bY = 150;
var gravity = 1.5;
var gap = 85;
var pipeNorthX = canvas.width;
var pipeNorthY = 0;
var pipeSouthX = canvas.width;
var pipeSouthY = pipeNorth.height + gap;
var score = 0;


bg.src = "Images-Flappy/bg.png";
bird.src = "Images-Flappy/bird.png";
pipeNorth.src = "Images-Flappy/pipeNorth.png";
pipeSouth.src = "Images-Flappy/pipeSouth.png";
fg.src = "Images-Flappy/fg.png";
score_sound.src = "Sounds-Flappy/score.mp3";
hit.src = "Sounds-Flappy/hit.mp3";

document.addEventListener("keydown", moveUp);

function moveUp() {
  bY = bY - 20;
}

function update() {
  bY = bY + gravity;
  pipeNorthX = pipeNorthX - 2;
  pipeSouthX = pipeSouthX - 2;
  pipeSouthY = pipeNorth.height + gap;

  if (pipeNorthX < 0) {
    score = score + 1;
    score_sound.play();
    pipeNorthX = canvas.width
  }

  if (pipeSouthX < 0) {
    pipeSouthX = canvas.width
  }

  if (touching(pipeNorthX, pipeNorthY, pipeNorth.width, pipeNorth.height)) {
    hit.play();
    clearInterval(myInterval);
  }

  if (touching(pipeSouthX, pipeSouthY, pipeSouth.width, pipeSouth.height)) {
    hit.play();
    clearInterval(myInterval);
  }
}

function touching(x, y, w, h) {
  if (bX + bird.width >= x &&
    bY + bird.height >= y &&
      bY <= y + h ) {
    return (true);
  }
  return (false);

}


function render() {
  ctx.drawImage(bg, 0, 0);
  ctx.drawImage(bird, bX, bY);
  ctx.drawImage(pipeNorth, pipeNorthX, pipeNorthY);
  ctx.drawImage(pipeSouth, pipeSouthX, pipeSouthY);
  ctx.drawImage(fg, 0, canvas.height - fg.height);
  //Rendering score
  ctx.fillStyle = "#000";
  ctx.font = "25px Teko";
  ctx.fillText("Score: " + score, 10, canvas.height - 20);
}

function game() {
  update();
  render();
}

const fps = 50;

const myInterval = setInterval(game, 1000 / fps)