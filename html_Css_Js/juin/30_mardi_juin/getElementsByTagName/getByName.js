/* 
################## getElementsByTagName ##################

La méthode Element.getElementsByTagName() retourne une liste des éléments portant le nom de balise donné. La recherche porte sur le sous-arbre de l'élément spécifié, à l'exception de cet élément lui-même. La liste retournée est live, c'est à dire qu'elle se met à jour automatiquement à chaque changement de l'arbre DOM. Par conséquent, il n'est pas nécessaire d'appeller plusieurs fois Element.getElementsByTagName() avec le même élément et les mêmes arguments.

Quand elle est appelée sur un élément HTML dans un document HTML, getElementsByTagName place son argument en minuscule avant de continuer. Cela n'est pas souhaitable lorsque vous tentez de faire correspondre des éléments SVG " camel-cased" dans une sous-arborescence dans un document HTML. Element.getElementsByTagNameNS() fonctionne dans ce cas.

Element.getElementsByTagName est similaire à Document.getElementsByTagName(), à part que sa recherche est limitée aux éléments qui sont des descendants de l'élément spécifié.

*/

function change() {
  let el = document.getElementsByTagName("p");
  for (let i = 0; i < el.length; i++) {
    el[i].innerHTML = "un nouveau text depuis le document js";
  }
}
