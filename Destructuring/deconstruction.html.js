/**
 * Deconstruction:
 
 * Mixed content;
 */

const userOne = {
  theName: "John Doe",
  theAge: 30,
  skills: ["html", "css", "javascript"],
  theAdresse: {
    street: "12345 Street",
    city: "Safi",
    country: "Morocco",
  },
};
/**
 ** On a un objet userOne qu'on veut déstructurer,
 ** On va créer un objet ( on va utiliser alors {}) userTwo qui va contenir certaines propriétés que userOne : comme theName, theAge, la dernière propriété skills et la première propriété de theAdresse qui est street.
 */
// To create variables without destructuring :
let name = userOne.theName;
let age = userOne.theAge;
let skills = userOne.skills[2]; // Accessing to javascript property
// too much writing codes........====> here comes the destructuring assignment:
// aussi l objet initial reste intact (not mutate or changed) et on peut y acceder,  ce qui est plus propre!
// on a aussi crée un autre objet avec le même nom ,et on peut changer les noms des propretés de ce nouveau objet.
// =====> Object destructuring:
let {
  theName: n,
  theAge: a,
  skills: [one, two, three],
  theAdresse: { city: cty },
} = userOne;

console.log(`Your name is : ${n}`);
console.log(`Your age is : ${a}`);
console.log(`Your last skill : ${three}`);
console.log(`Your city is : ${cty}`);
