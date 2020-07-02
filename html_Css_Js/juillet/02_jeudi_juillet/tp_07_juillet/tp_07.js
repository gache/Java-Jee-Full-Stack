let enregistrer = document.getElementById("enregistrer");
let effacer = document.getElementById("effacer");

enregistrer.addEventListener("click", function() {
  let name = document.forms["formChat"].name.value;
  let age = document.forms["formChat"].age.value;
  let url = document.forms["formChat"].url.value;
  let description = document.forms["formChat"].description.value;

  localStorage.setItem(name, age);
  localStorage.setItem(url, description);

  alert("Bien enregistre");
  document.forms["formChat"].name.value;
  document.forms["formChat"].age.value;
  document.forms["formChat"].url.value;
});

effacer.addEventListener("click", function() {
  let name = document.forms["formChat"].name.value;
  let age = document.forms["formChat"].age.value;
  let url = document.forms["formChat"].url.value;
  let description = document.forms["formChat"].description.value;

  localStorage.removeItem(name, age);
  localStorage.removeItem(url, description);

  alert(`Le nom de ${name} a bien été supprimer`);
  document.forms["formChat"].name.value = "";

  alert(`Le Url ${url} a bien été supprimer`);
  document.forms["formChat"].url.value = "";
});

function getAllLocalStorage() {
  let photosAjouter = document.getElementById("photosAjouter");
  let str = "";
  for (let i = 0; i < localStorage.length; i++) {
    str += `<article>
    <figure></figure>
    <img> ${localStorage.key(i)}</img>
    <figcaption>
    <p></p>
    <p></p>
    </figcaption>
    </article>`;
  }
  photosAjouter.innerHTML = str;
}
