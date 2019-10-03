function animate(creature) {

  // POSITION DE LA CRÉATURE *************************************************** DS/TODO

  /* Docstring à compléter */

  switch(creature.id) {

    case "player":
    // coordonnées en valeur brute
    var x = 0;
    var y = 0;
    // coordonnées en pixels (CSS)
    var posX = x + "px";
    var posY = y + "px";
    break;

    case "ghost1":
    var x = 500;
    var y = 0;
    var posX = x + "px";
    var posY = y + "px";
    break;

    case "ghost2":
    var x = 500;
    var y = 500;
    var posX = x + "px";
    var posY = y + "px";
    break;

    case "ghost3":
    var x = 0;
    var y = 500;
    var posX = x + "px";
    var posY = y + "px";
    break;

  }

  // POSITIONS DES OBSTACLES *************************************************** DS/TODO

  /* Docstring à compléter */

  var obstacleObjects = document.querySelectorAll("div.obstacle"); // liste tous les objets "obstacle"
  var obstacleCoordinates = ["obstacleCoordinates"]; // liste toutes les coordonnées de ces objets
  for (var obstacleObject of obstacleObjects) {
    obstacleCoordinates[obstacleObject.id] =
    "[" + obstacleObject.style.left + " from left, " + obstacleObject.style.top + " from top]";
  }

  // RESTRICTION DÉPLACEMENT ***************************************************

  /* Les tests suivant s'assurent que :
  -- les créatures ne peuvent pas traverser les obstacles ;
  -- les créatures ne peuvent pas sortir du plateau de jeu.
  Ils seront effectués avant chaque déplacement, qui ne sera validé que s'il respecte ces conditions. */

  function canMoveLeft() {
    var testX = x - 25; // test décalage d'une case vers la gauche en valeur brute
    var testY = y; // aucun changement sur l'axe y
    var testPosX = testX + "px"; // test nouvelle position sur l'axe x en pixels
    var testPosY = testY + "px"; // aucun changement sur l'axe y
    var testCoordinates = "[" + testPosX + " from left, " + testPosY + " from top]";
    // enregistrement des coordonnées de test
    if (obstacleCoordinates.includes(testCoordinates)) {
      // si ces coordonnées correspondent à celles d'un obstacle connu...
      return false;
      // ... la case est occupée, le déplacement est donc impossible
    }
    else if (testX < 0) {
      // si elles sont hors limites (= valeurs < min ou valeurs > max)...
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
    var testX = x; // aucun changement sur l'axe x
    var testY = y - 25; // test décalage d'une case vers le haut en valeur brute
    var testPosX = testX + "px"; // aucun changement sur l'axe x
    var testPosY = testY + "px"; // test nouvelle position sur l'axe y en pixels
    var testCoordinates = "[" + testPosX + " from left, " + testPosY + " from top]";
    // enregistrement des coordonnées de test
    if (obstacleCoordinates.includes(testCoordinates)) {
      // si ces coordonnées correspondent à celles d'un obstacle connu...
      return false;
      // ... la case est occupée, le déplacement est donc impossible
    }
    else if (testY < 0) {
      // si elles sont hors limites (= valeurs < min ou valeurs > max)...
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
    var testX = x + 25; // test décalage d'une case vers la droite en valeur brute
    var testY = y; // aucun changement sur l'axe y
    var testPosX = testX + "px"; // test nouvelle position sur l'axe x en pixels
    var testPosY = testY + "px"; // aucun changement sur l'axe y
    var testCoordinates = "[" + testPosX + " from left, " + testPosY + " from top]";
    // enregistrement des coordonnées de test
    if (obstacleCoordinates.includes(testCoordinates)) {
      // si ces coordonnées correspondent à celles d'un obstacle connu...
      return false;
      // ... la case est occupée, le déplacement est donc impossible
    }
    else if (testX > 500) {
      // si elles sont hors limites (= valeurs < min ou valeurs > max)...
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
    var testX = x; // aucun changement sur l'axe x
    var testY = y + 25; // test décalage d'une case vers le bas en valeur brute
    var testPosX = testX + "px"; // aucun changement sur l'axe x
    var testPosY = testY + "px"; // test nouvelle position sur l'axe y en pixels
    var testCoordinates = "[" + testPosX + " from left, " + testPosY + " from top]";
    // enregistrement des coordonnées de test
    if (obstacleCoordinates.includes(testCoordinates)) {
      // si ces coordonnées correspondent à celles d'un obstacle connu...
      return false;
      // ... la case est occupée, le déplacement est donc impossible
    }
    else if (testY > 500) {
      // si elles sont hors limites (= valeurs < min ou valeurs > max)...
      return false;
      // ... la case est hors du plateau de jeu, le déplacement est donc impossible
    }
    else {
      // dans tous les autres cas...
      return true;
      // ... la case est libre et accessible, le déplacement est donc possible
    }
  }

  // RÉALISATION DÉPLACEMENT *************************************************** DS/TODO

  /* Docstring à compléter */

  function moveLeft() {
    x -=25; // modification + enregistrement de la position en valeur brute
    posX = x + "px"; // enregistrement de la position en pixels (CSS)
    creature.style.left = posX; // application du style (propriété CSS)
  }

  function moveUp() {
    y -= 25; // modification + enregistrement de la position en valeur brute
    posY = y + "px"; // enregistrement de la position en pixels (CSS)
    creature.style.top = posY; // application du style (propriété CSS)
  }

  function moveRight() {
    x += 25; // modification + enregistrement de la position en valeur brute
    posX = x + "px"; // enregistrement de la position en pixels (CSS)
    creature.style.left = posX; // application du style (propriété CSS)
  }

  function moveDown() {
    y += 25; // modification + enregistrement de la position en valeur brute
    posY = y + "px"; // enregistrement de la position en pixels (CSS)
    creature.style.top = posY; // application du style (propriété CSS)
  }

  // CONTRÔLE DU DÉPLACEMENT *************************************************** DS/TODO

  /* Docstring à compléter */

  if (creature.id == "player") {

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

  }

  else {

    function autoMove() {

      var randMove = Math.floor(Math.random() * 4) + 1;

      switch (randMove) {

        case 1:
        if (canMoveLeft()) {
          moveLeft();
        }
        break;

        case 2:
        if (canMoveUp()) {
          moveUp();
        }
        break;

        case 3:
        if (canMoveRight()) {
          moveRight();
        }
        break;

        case 4:
        if (canMoveDown()) {
          moveDown();
        }
        break;

        default:
        alert("Oups !")

      }

    }
    setInterval(autoMove, 250);
  }

}

animate(player);
animate(ghost1);
animate(ghost2);
animate(ghost3);
