var x = 0;
var y = 0;

var playerPosX = x + "px";
var playerPosY = y + "px";

function moveUp() {
  y -= 25;
}

function moveRight() {
  x += 25;
}

function moveDown() {
  y += 25;
}

function moveLeft() {
  x -=25;
}

function reFresh() {
  playerPosX = x + "px";
  playerPosY = y + "px";
  player.style.left = playerPosX;
  player.style.top = playerPosY;
}

var player = document.getElementById("player");

document.onkeydown = function(move) {
  switch (move.keyCode) {

    case 37:
    if (x > 0) {
      moveLeft();
      reFresh();
    }
    break;

    case 38:
    if (y > 0) {
      moveUp();
      reFresh();
    }
    break;

    case 39:
    if (x < 475) {
      moveRight();
      reFresh();
    }
    break;

    case 40:
    if (y < 475) {
      moveDown();
      reFresh();
    }
    break;

    default:
    alert("Flèches directionnelles uniquement !");
  }
}
