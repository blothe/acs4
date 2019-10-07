var bomb_count = 1; // incrémenté pour attribuer un "id" unique à chaque élément

document.onkeypress = function(dropBomb) { // ajout pion "bomb" au plateau de jeu
  if (dropBomb.keyCode == 32) { // quand le joueur appuie sur "espace" = code touche "32"...
    var bomb_id = "bomb" + bomb_count; // ... formatage de l'id = type d'élément + numéro
    var bomb = document.createElement("div"); // ... création d'un élément "div"
    bomb.setAttribute("class", "bomb"); // ... appartenant à la classe "bomb"
    bomb.setAttribute("id", bomb_id); // ... portant le numéro d'identification "bomb_id"
    bomb_count += 1; // incrémentation de l'identifiant (pour élément suivant)
    bomb.style.left = player.style.left; // réglage CSS >> position par rapport au bord gauche = idem joueur
    bomb.style.top = player.style.top; // réglage CSS >> position par rapport au bord haut = idem joueur
    bomb.innerHTML = "<img src=\"img/Bomb_f01.png\">"; // insertion de l'image (bombe)
    document.getElementById("board").appendChild(bomb); // ajout au plateau de jeu

    // EXPLOSION DE LA BOMBE

    setTimeout(function explode() {
      // enregistrement des coordonnées de la zone d'effet
      var flameCoordinates = [
        // par rapport à la bombe : ligne préc., colonne préc.
        [parseInt(bomb.style.left.replace("px", "")) - 25 + "px",
        parseInt(bomb.style.top.replace("px", "")) - 25 + "px"],
        // par rapport à la bombe : ligne préc., colonne idem.
        [parseInt(bomb.style.left.replace("px", "")) + "px",
        parseInt(bomb.style.top.replace("px", "")) - 25 + "px"],
        // par rapport à la bombe : ligne préc., colonne suiv.
        [parseInt(bomb.style.left.replace("px", "")) + 25 + "px",
        parseInt(bomb.style.top.replace("px", "")) - 25 + "px"],
        // par rapport à la bombe : ligne idem., colonne préc.
        [parseInt(bomb.style.left.replace("px", "")) - 25 + "px",
        parseInt(bomb.style.top.replace("px", "")) + "px"],
        // par rapport à la bombe : ligne idem., colonne idem.
        [parseInt(bomb.style.left.replace("px", "")) + "px",
        parseInt(bomb.style.top.replace("px", "")) + "px"],
        // par rapport à la bombe : ligne idem., colonne suiv.
        [parseInt(bomb.style.left.replace("px", "")) + 25 + "px",
        parseInt(bomb.style.top.replace("px", "")) + "px"],
        // par rapport à la bombe : ligne suiv., colonne préc.
        [parseInt(bomb.style.left.replace("px", "")) - 25 + "px",
        parseInt(bomb.style.top.replace("px", "")) + 25 + "px"],
        // par rapport à la bombe : ligne suiv., colonne idem.
        [parseInt(bomb.style.left.replace("px", "")) + "px",
        parseInt(bomb.style.top.replace("px", "")) + 25 + "px"],
        // par rapport à la bombe : ligne suiv., colonne suiv.
        [parseInt(bomb.style.left.replace("px", "")) + 25 + "px",
        parseInt(bomb.style.top.replace("px", "")) + 25 + "px"]
      ];
      // propagation des flammes et destruction des objets
      for (var flameCoordinate of flameCoordinates) { // pour chaque jeu de coordonnées...
        var testX = flameCoordinate[0].replace("px", ""); // valeur brute x
        var testY = flameCoordinate[1].replace("px", ""); // valeur brute y
        if (testX >= 0 && testX <= 500 && testY >= 0 && testY <= 500) {
          // si ces coordonnées correspondent à celles d'une case située sur le plateau de jeu...
          var flame = document.createElement("div"); // ... création d'un élément "div"
          flame.setAttribute("class", "flame"); // ... appartenant à la classe "flame"
          flame.style.left = flameCoordinate[0]; // réglage CSS >> position par rapport au bord gauche
          flame.style.top = flameCoordinate[1]; // réglage CSS >> position par rapport au bord haut
          flame.innerHTML = "<img src=\"img/Flame_f01.png\">"; // insertion de l'image (flammes)
          document.getElementById("board").appendChild(flame); // ajout au plateau de jeu
          var creatures = [player, ghost1, ghost2, ghost3];
          for (creature of creatures) {
            if (creature.style.left == flame.style.left && creature.style.top == flame.style.top) {
              creature.remove(); // si une créature est touchée, elle est retirée de la partie...
            }
          }
          setTimeout(function fallout() {
            flame.remove();
          }, 250);
        }
        // TODO >> faire disparaître TOUTES les flammes après 250 ms ;
      }
      bomb.remove(); // disparition de la bombe
    }, 3000);
  }
}
