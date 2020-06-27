function isSamePassword(formulaire) {
  //  recuperation de la valeur de mes input
  let pwd = formulaire.pwd.value;
  let pwdVerif = formulaire.pwd_verif.value;
  let btn = document.getElementById("btn_submit");

  // Condition pour verifier si le mot de passe a un minimun 6 caracter
  if (pwd.length > 5) {
    /* condition pour savoir si le mot de passe  sont identique */
    if (pwd === pwdVerif) {
      console.log("ok");
      btn.disabled = false;
      formulaire.pwd_verif.style.border = "2px solid green";
    } else {
      console.log("les mot de passe ne correspond pas");
      btn.disabled = true;
      // formulaire.pwd_verif.style.border = "2px solid red";
    }
  } else {
    btn.disabled = true;
    // formulaire.pwd_verif.style.border = "2px solid red";
  }
}
