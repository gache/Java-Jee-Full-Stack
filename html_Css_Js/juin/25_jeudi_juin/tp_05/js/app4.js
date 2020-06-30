function afficheChamp(input) {
  // console.log(input.value);
  let span = input.nextElementSibling;
  span.innerHTML = input.value;
}
