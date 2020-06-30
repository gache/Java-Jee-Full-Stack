function afficheChamp(form) {
  let nom = "\n Le nom de la personne est :" + form.nom.value;
  let prenom = "\n Le prenom de la personne est : " + form.prenom.value;
  let email = "\n Le email de la personne est :" + form.email.value;
  let mdp = "\n Le mdp de la personne est :" + form.mdp.value;
  let vmp = "\n Le vmp de la personne est :" + form.vmp.value;

  document.writeln(
    "<p> Le nom de la personne est :" +
      form.nom.value +
      "</p>" +
      "<p> Le prenom de la personne est :" +
      form.prenom.value +
      "</p>" +
      "<p> Le email de la personne est :" +
      form.email.value +
      "</p>" +
      "<p> Le mdp de la personne est :" +
      form.mdp.value +
      "</p>" +
      "<p> Le vmp de la personne est :" +
      form.vmp.value +
      "</p>"
  );
}
