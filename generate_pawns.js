// CRÉATION DES PIONS **********************************************************

/* Génère le bomberman et ses "fantômes" antagonistes. */

// ajout pion "player" au plateau de jeu
var player = document.createElement("div"); // ... création d'un élément "div"
player.setAttribute("class", "player"); // ... appartenant à la classe "player"
player.setAttribute("id", "player"); // ... portant l'identifiant unique "player"
player.style.left = "250px"; // réglage CSS >> position par rapport au bord gauche
player.style.top = "250px"; // réglage CSS >> position par rapport au bord haut
player.innerHTML = "<img src=\"img/Bman_F_f00.png\">"; // insertion de l'image (avatar)
document.getElementById("board").appendChild(player); // ajout au plateau de jeu

// ajout pion "ghost1" au plateau de jeu
var ghost1 = document.createElement("div");
ghost1.setAttribute("class", "ghosts");
ghost1.setAttribute("id", "ghost1");
ghost1.style.left = "0px";
ghost1.style.top = "0px";
ghost1.innerHTML = "<img src=\"img/Creep_F_f00.png\">";
document.getElementById("board").appendChild(ghost1);

// ajout pion "ghost2" au plateau de jeu
var ghost2 = document.createElement("div");
ghost2.setAttribute("class", "ghosts");
ghost2.setAttribute("id", "ghost2");
ghost2.style.left = "500px";
ghost2.style.top = "0px";
ghost2.innerHTML = "<img src=\"img/Creep_F_f00.png\">";
document.getElementById("board").appendChild(ghost2);

// ajout pion "ghost3" au plateau de jeu
var ghost3 = document.createElement("div");
ghost3.setAttribute("class", "ghosts");
ghost3.setAttribute("id", "ghost3");
ghost3.style.left = "500px";
ghost3.style.top = "500px";
ghost3.innerHTML = "<img src=\"img/Creep_F_f00.png\">";
document.getElementById("board").appendChild(ghost3);

// ajout pion "ghost4" au plateau de jeu
var ghost4 = document.createElement("div");
ghost4.setAttribute("class", "ghosts");
ghost4.setAttribute("id", "ghost4");
ghost4.style.left = "0px";
ghost4.style.top = "500px";
ghost4.innerHTML = "<img src=\"img/Creep_F_f00.png\">";
document.getElementById("board").appendChild(ghost4);
