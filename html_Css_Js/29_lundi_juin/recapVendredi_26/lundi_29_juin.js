function condition(a, b) {
  if (a >= b) {
    console.log("a >= b");
  } else {
    console.log("a < b");
  }
}
// condition(20, 8);
var pays = [
  "Allemagne",
  "Autriche",
  "Belgique",
  "Bulgarie",
  "Chypre",
  "Croatie",
];
var paysCollection = new Array(
  "Allemagne",
  "Autriche",
  "Belgique",
  "Bulgarie",
  "Chypre",
  "Croatie"
);
function boucleFor(tab) {
  for (var i = 0; i < tab.length; i++) {
    console.log("boucleFor : " + tab[i]);
  }
}
function boucleForeach(tab) {
  for (var i in tab) {
    console.log("boucleForeach : " + tab[i]);
  }
}
function boucleWhile(tab) {
  var i = 0;
  while (i < tab.length) {
    console.log("boucleWhile : " + tab[i]);
    i++;
  }
}
// boucleFor(pays);
// boucleForeach(paysCollection);
// boucleWhile(pays);
function boucleContinue() {
  for (var i = 0; i < 20; i++) {
    if (i % 2 !== 0) {
      continue;
    }
    console.log("bouclecontinue : " + i);
  }
}
// boucleContinue();
function boucleBreak() {
  for (var i = 0; i < 20; i++) {
    if (i > 15) {
      break;
    }
    console.log("boucleBreak : " + i);
  }
}
// boucleBreak();
console.log(document.forms[0]);
