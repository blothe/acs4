// CRÉATION DE LA MAP ********************************************************** DS/TODO

/* Docstring à compléter */

var id = 1; // incrémenté pour attribuer un "id" unique à chaque élément

for (y = 0; y < 525 ; y += 25) { // scan lignes
  for (x = 0; x < 525 ; x += 25) { // et colonnes
    if(x % 2 != 0 && y % 2 != 0) { // pour chaque case dont les coordonnées x et y sont impaires...
      var obstacle = document.createElement("div"); // ... création d'un élément "div"
      obstacle.setAttribute("class", "obstacle"); // ... appartenant à la classe "obstacle"
      obstacle.setAttribute("id", id); // ... portant le numéro d'identification "id"
      id += 1; // incrémentation de l'identifiant (pour élément suivant)
      obstacle.style.left = x + "px"; // réglage CSS >> position par rapport au bord gauche
      obstacle.style.top = y + "px"; // réglage CSS >> position par rapport au bord haut
      obstacle.innerHTML = "<img src=\"img/SolidBlock.png\">"; // insertion de l'image (texture)
      document.getElementById("board").appendChild(obstacle); // ajout au plateau de jeu
    }
    else { // pour toutes les autres cases
      var freecell = document.createElement("div"); // ... création d'un élément "div"
      freecell.setAttribute("class", "freecell"); // ... appartenant à la classe "freecell"
      freecell.setAttribute("id", id); // ... portant le numéro d'identification "id"
      id += 1; // incrémentation de l'identifiant (pour élément suivant)
      freecell.style.left = x + "px"; // réglage CSS >> position par rapport au bord gauche
      freecell.style.top = y + "px"; // réglage CSS >> position par rapport au bord haut
      freecell.innerHTML = "<img src=\"img/BackgroundTile.png\">"; // insertion de l'image (texture)
      document.getElementById("board").appendChild(freecell); // ajout au plateau de jeu
    }
  }
}
