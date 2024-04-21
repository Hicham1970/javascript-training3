// declaration des variables global:
// List des items:
const bloc = document.getElementsByClassName("list_items");
// console.log(bloc);

const container = document.getElementsByTagName("div");
// console.log(container);
const firstChild = document.getElementsByClassName("div");
// console.log(firstChild.length);
console.log(firstChild);

// Créer un nouveau element et l'ajouter a la liste: liste des taches:

// 1/ Creation de l'element/
const nouvelle_tache = document.createElement("il");
// 2/ Creation du contenu , un paragraphe ou un simple text:
const nouvelle_aptitude = document.createTextNode("GitHub & Figma");
// 3/ Rattachement du text a l'element:
nouvelle_tache.appendChild(nouvelle_aptitude);

// Choisir le nouveau emplacement de la nouvelle attache:
const liste_ancre = document.getElementsByTagName("ul")[0];
liste_ancre.appendChild(nouvelle_tache);
// appendChild attache le nouveau element en  fin de liste, on peut utiliser insertBefore pour mettre avant ou après dans la liste.