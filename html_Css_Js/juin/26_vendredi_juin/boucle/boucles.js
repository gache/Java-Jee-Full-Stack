// for (let i = 32; i <= 255; i++) {
//   // console.log("&#" + i + ";");
//   console.log(`${i}: &#${i};`);
//   document.write(i + ":  &#" + i + "; <br>");
// }

let city = ["Paris", "Londre", "Amsterdam", "Madrid"];

// for (let i = 0; i <= city.length; i++) {
//   console.log(city[i]);
// }

// ce for s'occupe pas de la condition ça resmble à la boucle for each
// for (let i in city) {
//   document.write(city[i] + "<br>");
// }

// let i = 0;
// while (i < city.length) {
//   console.log(city[i]);
//   document.write(city[i] + "<br>");
//   i++;
// }

/* ******* se rappeler ******** */

// la question à se poser combien de fois que je dois boucler
// si je sais combien d'iteraction je dois faire j'utilise une boucle For
// si je ne sais pas combien d'iteraction je vais faire j'utilise une boucle While

/* continue  il continue la boucle*/

// '0' == '0' => true
// '0' === '0' => false

let i = 0;
debugger;
while (i < city.length) {
  if (city[i].toLowerCase() === "amsterdam") {
    i++;
    continue;
  }
  document.write(city[i] + "<br>");
  i++;
}

/* break  */
// il coupe la boucle
