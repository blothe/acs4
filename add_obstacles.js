var id = 1;

for (y = 0; y < 500 ; y += 25) {
  for (x = 0; x < 500 ; x += 25) {
    if(x % 2 != 0 && y % 2 != 0) {
      var obstacle = document.createElement("div");
      obstacle.setAttribute("class", "obstacle");
      obstacle.setAttribute("id", id);
      id += 1;
      obstacle.style.left = x + "px";
      obstacle.style.top = y + "px";
      document.getElementById("board").appendChild(obstacle);
    }
  }
}
