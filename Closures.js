function creerClosures() {
  var variableInterne = "Je suis le pauvre variable interne";
  function functionInterne() {
    console.log(variableInterne);
  }
  return functionInterne;
}
const functionExtern = creerClosures();
functionExtern(); // Je suis le pauvre variable interne

/**
 * Example 2
 */

// function trimCorrection(draftArrière, draftAvant) {
//     draftArrière = 6.25;
//     draftAvant = 4.8;
//     function trimObserve() {
//         return (`${this.draftArrière} * ${this.draftAvant}`)  ;
//     }
//     return trimObserve;
// }
// const monTrim = trimCorrection();
// console.log(monTrim());
// Todo: revoir ce script why i get  6.25 * 4.8 , strings?
//! Correction:
function trimCorrection(draftArrière, draftAvant) {
  // Declare des variables locales en utilizing 'let' ou 'var'
  draftArrière = 6.25;
  draftAvant = 4.8;

  function trimObserve() {
    // Utilize 'let' ou 'var' pour declare la variable locale 'result'
    let result = draftArrière - draftAvant;
    return result;
  }

  // Renvoi simplement 'trimObserve'
  return trimObserve;
}

const monTrim = trimCorrection();
console.log(monTrim());
