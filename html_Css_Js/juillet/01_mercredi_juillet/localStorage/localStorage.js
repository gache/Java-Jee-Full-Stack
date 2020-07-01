let lit = document.getElementById("lit");
let enregistre = document.getElementById("enregistre");
let effacer = document.getElementById("effacer");
let effacerTout = document.getElementById("effacerTout");

getAllLocalStorage();
lit.addEventListener("click", function() {
  getAllLocalStorage();
  let nom = document.forms["form"].name.value;
  document.forms["form"].donnee.value = localStorage.getItem(nom);
});

enregistre.addEventListener("click", function() {
  let nom = document.forms["form"].name.value;
  let texterea = document.forms["form"].donnee.value;

  localStorage.setItem(nom, texterea);
  alert("Bien Enregistre");
  document.forms["form"].name.value;
  document.forms["form"].donnee.value;
  getAllLocalStorage();
});

effacer.addEventListener("click", function() {
  let nom = document.forms["form"].name.value;
  localStorage.removeItem(nom);
  alert(`Le ${nom} a bien été supprimer`);
  document.forms["form"].name.value = "";
  document.forms["form"].donnee.value = "";
  getAllLocalStorage();
});

effacerTout.addEventListener("click", function() {
  localStorage.clear();
});

function getAllLocalStorage() {
  let stokage = document.getElementById("stokage");
  var str = "";
  for (let i = 0; i < localStorage.length; i++) {
    str += `<tr>
    <td>${localStorage.key(i)}</td>
    <td> ${localStorage.getItem(localStorage.key(i))}  </td>
    </tr>`;
  }
  stokage.innerHTML = str;
}
