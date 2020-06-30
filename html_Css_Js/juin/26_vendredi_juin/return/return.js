// function HexDec(St) {
//   return parseInt(St, 16);
// }

// function Conversion(form) {
//   let valeur = HexDec(form.Hex.value);
//   form.Dec.value = valeur;
// }

// var t = ["Paris", "Londres", "AmstErdAm", "Madrid"];

// function toto(num) {
//   return t[num];
// }

// function affichage(n) {
//   debugger;
//   var x = toto(n);
//   document.write(x);
// }

function pairOuImpaire(champs) {
  // if (champs % 2 === 0) {
  //   return "pair";
  // } else {
  //   return "impaire";
  // }

  // la condition ternaire
  return champs % 2 === 0 ? "pair" : "impair";
}

function affichage(form) {
  let a = parseInt(form.champs1.value);
  console.log(pairOuImpaire(a));

  let b = parseInt(form.champs2.value);
  alert(pairOuImpaire(b));

  let c = parseInt(form.champs3.value);
  document.write(pairOuImpaire(c));
}
