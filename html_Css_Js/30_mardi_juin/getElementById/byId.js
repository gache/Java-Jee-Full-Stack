/*######### getElementById #########*/

// let maDiv = document.getElementById("maDiv");
// maDiv.innerHTML = "<h1>Mon premier getElementById</h1>";
// maDiv.style.color = "red";
// maDiv.style.backgroundColor = "green";
// maDiv.style.textAlign = "center";
// maDiv.style.padding = "20px";
// console.log(maDiv);

//  autre exemple de getElementById avec form

// let maDiv = document.getElementById("jeuneFille");
// function mSelection() {
//   maDiv.style.display = "none";
// }
// function mSelection() {
//   maDiv.style.display = "block";
// }

// function avec parametre
function deplacerDiv(px) {
  // document.getElementById("lien").style.transform = "translate(" + px + ")";
  document.getElementById("lien").style.marginLeft = px;
}
