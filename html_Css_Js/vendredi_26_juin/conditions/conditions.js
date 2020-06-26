// function cheking(saisie) {
//   let newSaisie = saisie.value;
//   if (saisie.value === newSaisie.toUpperCase()) {
//     console.log(`La lettre est majuscule `);
//   } else {
//     console.log(`La lettre est minuscule`);
//   }
// }

//  autre façon de faire l'exercice de manière plus complet

function cheking(saisie) {
  if (saisie.value >= "A" && saisie.value <= "Z") {
    console.log(`La lettre est majuscule `);
  } else if (saisie.value >= "a" && saisie.value <= "z") {
    console.log(`La lettre est minuscule`);
  } else if (saisie.value >= 0 && saisie.value <= 9) {
    console.log(`c'est une chiffre`);
  } else {
    console.log(`Autre caractère"`);
  }
}
