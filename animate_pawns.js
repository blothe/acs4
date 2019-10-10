function animate(pawn) {

  // POSITION DE LA CRÉATURE ***************************************************

  /* Pour chaque créature appelée, identification et enregistrement de ses coordonnées de départ :
  -- en valeur brute à l'aide de variables x et y de type "int" incrémentés ou décrémentées pour ajuster et "mémoriser" sa position au fur et à mesure de ses déplacements (x et y sont des curseurs) ;
  -- en pixels à l'aide de variables posX et posY de type composite "int" et "str" concaténées, exploitables par CSS et transmises à la feuille de style, dynamiquement (posX et posY sont des valeurs).
  Ces coordonnées s'ajustent donc avec les déplacements, "dans la mémoire" et "à l'écran". */

  switch(pawn.id) {

    case "player":
    // coordonnées en valeur brute
    var x = 250;
    var y = 250;
    // coordonnées en pixels (CSS)
    var posX = x + "px";
    var posY = y + "px";
    break;

    case "ghost1":
    var x = 0;
    var y = 0;
    var posX = x + "px";
    var posY = y + "px";
    break;

    case "ghost2":
    var x = 500;
    var y = 0;
    var posX = x + "px";
    var posY = y + "px";
    break;

    case "ghost3":
    var x = 500;
    var y = 500;
    var posX = x + "px";
    var posY = y + "px";
    break;

    case "ghost4":
    var x = 0;
    var y = 500;
    var posX = x + "px";
    var posY = y + "px";
    break;

  }

  // POSITIONS DES OBSTACLES ***************************************************

  /* Enregistre les coordonnées des obstacles pour évaluer la faisabilité des déplacements. */

  var obstacleObjects = document.querySelectorAll("div.obstacle"); // liste tous les objets "obstacle"
  var obstacleCoordinates = ["obstacleCoordinates"]; // liste toutes les coordonnées de ces objets
  for (var obstacleObject of obstacleObjects) {
    obstacleCoordinates[obstacleObject.id.replace("cell", "")] =
    "[" + obstacleObject.style.left + " from left, " + obstacleObject.style.top + " from top]";
  }

  // RESTRICTION DÉPLACEMENT ***************************************************

  /* Les tests suivants s'assurent que :
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

  // RÉALISATION DÉPLACEMENT ***************************************************

  /* Déplace la créature / décale le pion d'une case dans la direction demandée. */

  function moveLeft() {
    x -= 25; // modification + enregistrement de la position en valeur brute
    posX = x + "px"; // enregistrement de la position en pixels (CSS)
    pawn.style.left = posX; // application du style (propriété CSS)
  }

  function moveUp() {
    y -= 25; // modification + enregistrement de la position en valeur brute
    posY = y + "px"; // enregistrement de la position en pixels (CSS)
    pawn.style.top = posY; // application du style (propriété CSS)
  }

  function moveRight() {
    x += 25; // modification + enregistrement de la position en valeur brute
    posX = x + "px"; // enregistrement de la position en pixels (CSS)
    pawn.style.left = posX; // application du style (propriété CSS)
  }

  function moveDown() {
    y += 25; // modification + enregistrement de la position en valeur brute
    posY = y + "px"; // enregistrement de la position en pixels (CSS)
    pawn.style.top = posY; // application du style (propriété CSS)
  }

  // CONTRÔLE DU DÉPLACEMENT ***************************************************

  /* Les fonctions suivantes déclenchent les tests et les déplacements :
  -- du bomberman : manuellement à l'aide des flèches directionnelles ;
  -- des fantômes : automatiquement et aléatoirement, = tirage au sort.
  Si les déplacements sont possibles, ils sont réalisés. */

  if (pawn.id == "player") {

    document.onkeydown = function(move) {

      switch (move.keyCode) {

        case 37: // flèche clavier gauche
        if (canMoveLeft()) {
          moveLeft();
        }
        break;

        case 38: // flèche clavier haut
        if (canMoveUp()) {
          moveUp();
        }
        break;

        case 39: // flèche clavier droite
        if (canMoveRight()) {
          moveRight();
        }
        break;

        case 40: // flèche clavier bas
        if (canMoveDown()) {
          moveDown();
        }
        break;

      }

    }

  }

  else {

    function autoMove() {

      var randMove = Math.floor(Math.random() * 4) + 1; // tirage au sort

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

      }

    }
    setInterval(autoMove, 250); // répétition toutes les 250 ms
  }

}

var pawns = [player, ghost1, ghost2, ghost3, ghost4]; // liste des pions du jeu
for (pawn of pawns) { // pour chacun de ces pions...
  animate(pawn); // ... l'animer !
}
