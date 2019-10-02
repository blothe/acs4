/*********************
* POSITION DU JOUEUR ***********************************************************
*********************/

// coordonnées en valeur brute
var x = 0;
var y = 0;

// coordonnées en pixels (CSS)
var playerPosX = x + "px";
var playerPosY = y + "px";

/*********************
* POSITION OBSTACLES ***********************************************************
*********************/

var obstacleObjects = document.querySelectorAll("div.obstacle"); // liste tous les objets "obstacle"
var obstacleCoordinates = ["obstacleCoordinates"]; // liste toutes les coordonnées de ces objets
for (var obstacleObject of obstacleObjects) {
  obstacleCoordinates[obstacleObject.id] =
  "[" + obstacleObject.style.left + " from left, " + obstacleObject.style.top + " from top]";
}

/*********************
* DÉPLACEMENT / TEST ***********************************************************
*********************/

function canMoveLeft() {
  var testPlayerPosX = x - 25 + "px"; // test décalage d'une case vers la gauche
  var testPlayerPosY = playerPosY; // hauteur inchangée
  var testCoordinates = "[" + testPlayerPosX + " from left, " + testPlayerPosY + " from top]";
  // enregistrement des coordonnées de test
  if (obstacleCoordinates.includes(testCoordinates)) {
    // si ces coordonnées correspondent à celles d'un obstacle connu...
    return false;
    // ... la case est occupée, le déplacement est donc impossible
  }
  else if (x <= 0) {
    // si elles sont hors limites...
    return false;
    // ... la case est hors du plateau de jeu, le déplacement est donc impossible
  }
  else {
    // dans tous les autres cas...
    return true;
    // ... la case est libre et accessible, le déplacement est donc possible
  }
}

function canMoveUp() {
  var testPlayerPosX = playerPosX; // largeur inchangée
  var testPlayerPosY = y - 25 + "px"; // test décalage d'une case vers le haut
  var testCoordinates = "[" + testPlayerPosX + " from left, " + testPlayerPosY + " from top]";
  // enregistrement des coordonnées de test
  if (obstacleCoordinates.includes(testCoordinates)) {
    // si ces coordonnées correspondent à celles d'un obstacle connu...
    return false;
    // ... la case est occupée, le déplacement est donc impossible
  }
  else if (y <= 0) {
    // si elles sont hors limites...
    return false;
    // ... la case est hors du plateau de jeu, le déplacement est donc impossible
  }
  else {
    // dans tous les autres cas...
    return true;
    // ... la case est libre et accessible, le déplacement est donc possible
  }
}

function canMoveRight() {
  var testPlayerPosX = x + 25 + "px"; // test décalage d'une case vers la droite
  var testPlayerPosY = playerPosY; // hauteur inchangée
  var testCoordinates = "[" + testPlayerPosX + " from left, " + testPlayerPosY + " from top]";
  // enregistrement des coordonnées de test
  if (obstacleCoordinates.includes(testCoordinates)) {
    // si ces coordonnées correspondent à celles d'un obstacle connu...
    return false;
    // ... la case est occupée, le déplacement est donc impossible
  }
  else if (x >= 500) {
    // si elles sont hors limites...
    return false;
    // ... la case est hors du plateau de jeu, le déplacement est donc impossible
  }
  else {
    // dans tous les autres cas...
    return true;
    // ... la case est libre et accessible, le déplacement est donc possible
  }
}

function canMoveDown() {
  var testPlayerPosX = playerPosX; // largeur inchangée
  var testPlayerPosY = y + 25 + "px"; // test décalage d'une case vers le bas
  var testCoordinates = "[" + testPlayerPosX + " from left, " + testPlayerPosY + " from top]";
  // enregistrement des coordonnées de test
  if (obstacleCoordinates.includes(testCoordinates)) {
    // si ces coordonnées correspondent à celles d'un obstacle connu...
    return false;
    // ... la case est occupée, le déplacement est donc impossible
  }
  else if (y >= 500) {
    // si elles sont hors limites...
    return false;
    // ... la case est hors du plateau de jeu, le déplacement est donc impossible
  }
  else {
    // dans tous les autres cas...
    return true;
    // ... la case est libre et accessible, le déplacement est donc possible
  }
}

/*********************
* DÉPLACEMENT / EXEC ***********************************************************
*********************/

// identification de l'élément à déplacer
var player = document.getElementById("player");

function moveLeft() {
  x -=25; // modification + enregistrement de la position en valeur brute
  playerPosX = x + "px"; // enregistrement de la position en pixels (CSS)
  player.style.left = playerPosX; // application du style (propriété CSS)
}
function moveUp() {
  y -= 25; // modification + enregistrement de la position en valeur brute
  playerPosY = y + "px"; // enregistrement de la position en pixels (CSS)
  player.style.top = playerPosY; // application du style (propriété CSS)
}
function moveRight() {
  x += 25; // modification + enregistrement de la position en valeur brute
  playerPosX = x + "px"; // enregistrement de la position en pixels (CSS)
  player.style.left = playerPosX; // application du style (propriété CSS)
}
function moveDown() {
  y += 25; // modification + enregistrement de la position en valeur brute
  playerPosY = y + "px"; // enregistrement de la position en pixels (CSS)
  player.style.top = playerPosY; // application du style (propriété CSS)
}

/*********************
* DÉPLACEMENT / BIND ***********************************************************
*********************/

document.onkeydown = function(move) {
  switch (move.keyCode) {

    case 37:
    if (canMoveLeft()) {
      moveLeft();
    }
    break;

    case 38:
    if (canMoveUp()) {
      moveUp();
    }
    break;

    case 39:
    if (canMoveRight()) {
      moveRight();
    }
    break;

    case 40:
    if (canMoveDown()) {
      moveDown();
    }
    break;

    default:
    alert("Flèches directionnelles uniquement !");
  }
}
