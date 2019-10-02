var id = 1; // incrémenté pour attribuer un "id" unique à chaque obstacle

for (y = 0; y < 500 ; y += 25) {
  for (x = 0; x < 500 ; x += 25) {
    if(x % 2 != 0 && y % 2 != 0) { // pour chaque case dont les coordonnées x et y sont impaires...
      var obstacle = document.createElement("div"); // ... création d'un élément "div"
      obstacle.setAttribute("class", "obstacle"); // ... appartenant à la classe "obstacle"
      obstacle.setAttribute("id", id); // ... portant le numéro d'identification "id"
      id += 1; // incrémentation de l'identifiant (pour obstacle suivant)
      obstacle.style.left = x + "px"; // réglage CSS >> position par rapport au bord gauche
      obstacle.style.top = y + "px"; // réglage CSS >> position par rapport au bord droit
      document.getElementById("board").appendChild(obstacle); // ajout au plateau de jeu
    }
  }
}
