setAllChatsToHtml();

document.getElementById("save").addEventListener("click", function() {
  //  objet
  const chat = {
    nom: document.f.nom.value,
    age: document.f.age.value,
    img: document.f.img.value,
    desc: document.f.description.value,
    //  methode pour valider les champs de mon formulaire
    checkValid: function() {
      if (
        this.nom === "" ||
        this.age === "" ||
        this.img === "" ||
        this.desc === ""
      ) {
        alert("les champs ne sont pas bien rempli");
        return false;
      }
      return true;
    },
  };

  //  si mon chat c'est valide tu ne rentre pas dans ma function
  if (!chat.checkValid()) return;
  let chats = JSON.parse(localStorage.getItem("chats"));
  if (chats === null) {
    chats = [chat];
  } else {
    let isNotExist = true;
    for (const i in chats) {
      if (chat.nom === chats[i].nom || chat.img === chats[i].img) {
        alert("Un chat est déjà présent avec ce nom ou cette image");
        isNotExist = false;
        break;
      }
    }
    if (isNotExist) {
      chats = [...chats, chat];
    } else {
      return;
    }
  }
  localStorage.setItem("chats", JSON.stringify(chats));
  document.f.reset();
  alert("Il est bien enregistré.");
  setAllChatsToHtml();
});

function setAllChatsToHtml() {
  let chats = JSON.parse(localStorage.getItem("chats"));
  if (chats === null || chats.length === 0)
    return; /*  s'il n'a rien dans localstorage pour eviter d'entrée */
  const articles = document.getElementById("articles");
  let str = "";
  for (const i in chats) {
    str += `
<article>
    <figure>
        <div class="chat">
         <img src="${chats[i].img}" alt="">
        </div>
        <figcaption>
            <p>Nom : ${chats[i].nom}</p>
            <p>Age : ${chats[i].age} ans</p>
            <p>${chats[i].desc}</p>
        </figcaption>
        <div class="close" onclick="removeChat('${chats[i].nom}')"></div>
    </figure>
</article>
        `;
  }
  articles.innerHTML = str;
}

function removeChat(chatName) {
  let chats = JSON.parse(localStorage.getItem("chats"));
  for (const i in chats) {
    if (chats[i].nom === chatName) {
      chats.splice(i, 1);
    }
  }
  localStorage.setItem("chats", JSON.stringify(chats));
  setAllChatsToHtml();
}
