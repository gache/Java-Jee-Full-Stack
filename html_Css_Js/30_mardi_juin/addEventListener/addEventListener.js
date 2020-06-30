/* ############### addEventListener ############### */

// let test = document.getElementById("test");

// test.addEventListener("click", changeColor);

// function changeColor() {
//   test.style.color = "red";
// }

// autre façon de faire de faire addEventListener

// let test = document.getElementById("test");
// test.addEventListener("click", function() {
//   test.style.color = "red";
// });

//  je recupere mes balises p et je le stock sur une variable
let paragraphes = document.getElementsByTagName("p");
//  je fais une boucle pour faire de manière dynamique que mes P changent de couleur et la taille
// for (let i = 0; i < paragraphes.length; i++) {
//   let paragraphe = paragraphes[i];
//   paragraphe.addEventListener("mouseover", function() {
//     this.style.fontSize = "2em";
//     this.style.color = "red";
//   });
// }

var color = function() {
  test.style.color = "red";
};

let test = document.getElementById("test");
test.addEventListener("click", function() {
  test.style.color = "red";
});
