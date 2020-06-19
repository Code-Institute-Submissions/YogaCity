document.getElementById("welcome").onmouseenter = function() {mouseEnter()};
document.getElementById("welcome").onmouseleave = function() {mouseLeave()};

function mouseEnter() {
  document.getElementById("welcome").textContent = "IT'S NOT ABOUT BEING GOOD AT SOMETHING. IT'S ABOUT BEING GOOD TO YOURSELF";
}

function mouseLeave() {
  document.getElementById("welcome").textContent = "";
}