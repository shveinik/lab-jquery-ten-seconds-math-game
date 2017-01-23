// Use this file to write the interactions between your game and the user

//Initialize ion library


window.onload = function(){

};

console.log(document.getElementById("start"));

document.getElementById("start").onclick = function(){
  document.getElementById("game-started").setAttribute("class", "display");
  document.getElementById("start-screen").setAttribute("class", "display-none");
};
