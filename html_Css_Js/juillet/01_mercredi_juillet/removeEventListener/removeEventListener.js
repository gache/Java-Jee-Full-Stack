//  Recuperacion de mes Id
let div = document.getElementById("carre");
let btn = document.getElementById("btn");
let btnRemove = document.getElementById("btnRemove");

// mise en place d'addEventListener
btn.addEventListener("click", toto);

btnRemove.addEventListener("click", function() {
  /* il faut mettre la même fucntion  qu'on a mis sur notre d'addEventListener */
  btn.removeEventListener("click", toto);
});

div.style.border = "2px solid red";

function toto() {
  if (div.style.borderRadius === "") {
    div.style.borderRadius = "50px";
    btn.innerHTML = "non radius";
  } else {
    div.style.borderRadius = "";
    btn.innerHTML = "radius";
  }
}
