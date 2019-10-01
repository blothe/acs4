var x = 0;
var y = 0;

var pawnPosX = x + "px";
var pawnPosY = y + "px";

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
  pawnPosX = x + "px";
  pawnPosY = y + "px";
  pawn.style.left = pawnPosX;
  pawn.style.top = pawnPosY;
}

var pawn = document.getElementById("pawn");

document.onkeydown = function(move) {
  switch (move.keyCode) {

    case 37:
    moveLeft();
    reFresh();
    break;

    case 38:
    moveUp();
    reFresh();
    break;

    case 39:
    moveRight();
    reFresh();
    break;

    case 40:
    moveDown();
    reFresh();
    break;

    default:
    alert("Flèches directionnelles uniquement !");
  }
}
