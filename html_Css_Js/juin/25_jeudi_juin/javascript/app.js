//  convertion de type

// eval(): évaluation et convertion  numerique
// parseFloat()
// parseInt()

/* **************   eval ********* */

var a = 5;
let n = eval("a*2"); /* retourne un valeur numerique  */
let x = eval(123.45); /* retourne un valeur numerique 123.45 */

// console.log(typeof n);
// console.log(typeof x);

/* ************** parseInt() ********* */

// c'est une chaine de caracter qu'on souhaite convertir un numero entier
var b = parseInt("AF", 16);
// console.log(b);
var c = parseInt("12", 8);
// console.log(c);
var d = parseInt("12");
// console.log(d);
var e = parseInt("12.96");
// console.log(e);

/* ************** parseFloat() ********* */
// c'est une chaine de caracter qu'on souhaite convertir un numero entier ou reel

parseFloat("437.35E-1"); /* retourne la valeur numerique 42.735 */
parseFloat("X12"); /* retourne la valeur NaN */

/* calcule des operations mathematiques*/

const result = document.getElementById("result");

function addition(form) {
  let one = form.one.value;
  let two = form.two.value;
  result.innerText = "Résultat = " + (parseFloat(one) + parseFloat(two));
}
function soustraction(form) {
  let one = form.one.value;
  let two = form.two.value;
  result.innerText = "Résultat = " + (parseFloat(one) - parseFloat(two));
}
function multiplication(form) {
  let one = form.one.value;
  let two = form.two.value;
  result.innerText = "Résultat = " + parseFloat(one) * parseFloat(two);
}

function division(form) {
  let one = form.one.value;
  let two = form.two.value;
  result.innerText = "Résultat = " + parseFloat(one) / parseFloat(two);
}

function result() {
  var r1 = parseFloat(document.formulaire.r1.value);
  var r2 = parseFloat(document.formulaire.r2.value);
  var res = "";
  res += "r1 += r2 : ";
  res += r1 + r2;
  res += "\n";
  res += "r1 -= r2 : " + (r1 - r2) + "\n";
  res += "r1 *= r2 : " + r1 * r2 + "\n";
  res += "r1 /= r2 : " + r1 / r2 + "\n";
  res += "r1 %= r2 : " + r1 % r2 + "\n";
  document.formulaire.resultat.value = res;
}
