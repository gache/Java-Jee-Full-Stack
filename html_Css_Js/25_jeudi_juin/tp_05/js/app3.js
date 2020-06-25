function afficheChamp(form) {
  let nom = "Le nom de la personne est : " + document.form.nom.value;
  let prenom = "\nLe prenom de la personne est : " + document.form.prenom.value;
  let email = "\nLe email de la personne est : " + document.form.email.value;
  let mdp = "\nLe mdp de la personne est : " + document.form.mdp.value;
  let vmp = "\nLe vmp de la personne est : " + document.form.vmp.value;

  window.alert(nom + prenom + email + mdp + vmp);
}
