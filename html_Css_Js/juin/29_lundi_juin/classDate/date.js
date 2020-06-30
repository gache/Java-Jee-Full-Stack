/*
############### La class Date ###############

dans la class date existe de methode qui sont attaché aux objets Date
 */

function date() {
  var date1 = new Date();
  // document.write(date1.setFullYear(1983));
  // document.write(date1);
}
date();
//  Autre façon de faire
var date = new Date();
var tab = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];
// document.writeln(date.setFullYear(1981) + "<br>");
// document.writeln(
//   tab[date.getDay()] + " " + date.getDate() + " " + date.getMonth()
// );

//  afficher en temps réel

function affichageDate() {
  let date = new Date();
  document.forms["f"].date.value = date.toLocaleString();
}

setInterval(affichageDate, 1000);
