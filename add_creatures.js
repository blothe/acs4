// ajout pion "player" au plateau de jeu
var player = document.createElement("div"); // ... création d'un élément "div"
player.setAttribute("class", "creature"); // ... appartenant à la classe "creature"
player.setAttribute("id", "player"); // ... portant l'identifiant unique "player"
player.style.left = "0px"; // réglage CSS >> position par rapport au bord gauche
player.style.top = "0px"; // réglage CSS >> position par rapport au bord droit
document.getElementById("board").appendChild(player); // ajout au plateau de jeu

// ajout pion "ghost1" au plateau de jeu
var ghost1 = document.createElement("div");
ghost1.setAttribute("class", "creature");
ghost1.setAttribute("id", "ghost1");
ghost1.style.left = "500px";
ghost1.style.top = "0px";
document.getElementById("board").appendChild(ghost1);

// ajout pion "ghost2" au plateau de jeu
var ghost2 = document.createElement("div");
ghost2.setAttribute("class", "creature");
ghost2.setAttribute("id", "ghost2");
ghost2.style.left = "500px";
ghost2.style.top = "500px";
document.getElementById("board").appendChild(ghost2);

// ajout pion "ghost3" au plateau de jeu
var ghost3 = document.createElement("div");
ghost3.setAttribute("class", "creature");
ghost3.setAttribute("id", "ghost3");
ghost3.style.left = "0px";
ghost3.style.top = "500px";
document.getElementById("board").appendChild(ghost3);
