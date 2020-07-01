var div = document.getElementById("carre");
var btn = document.getElementById("btn");
btn.addEventListener("click", toto);
// var tags = document.getElementsByTagName('button');
div.style.border = "2px solid red";
function toto() {
  if (div.style.borderRadius === "") {
    div.style.borderRadius = "50px";
    // tags[0].innerHTML = 'non radius'
    btn.innerHTML = "non radius";
  } else {
    div.style.borderRadius = "";
    // tags[0].innerHTML = 'radius'
    btn.innerHTML = "radius";
  }
}
