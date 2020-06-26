//  de façon traditionnelle
// var t = [];

//  en objet
// var t = new Array();

//  de façon traditionnelle
// var t = ["chien", "chat", "cochon"];

// en objet
// var t = new Array("chien", "chat", "cochon");

/* les objet standart */

// location.href = "http://www.google.fr";
// document.title = "conversion";
document.body.style.color = "red";
document.body.style.backgroundColor = "green";

function HexDec(St) {
  return parseInt(St, 16);
}

function Conversion(form) {
  let valeur = HexDec(form.Hex.value);
  form.Dec.value = valeur;
}
