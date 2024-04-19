/**
 * ###Tasks####
 * 1. Create an object called user with the following properties:
 * firstName, country. Add a nested object called Todos and add a few todos with numbered property names for e.g : 1: do the shopping
 *               2: play some games.
 * Use the destructuring assignment to destructure all these object properties (including the nested todos object) and simply log to the console.
 *
 * 2. Create an array with a list of any values (e.g. books, films, etc..), and use the destructuring assignment to destructure these values, log to the console.
 *
 * 3. Add a nested array with any three values, and add this to the deconstructing whilst skipping the second value. log your deconstructed array values to the console.
 */
// creating the javascript object:
let user = {
  firstName: "John",
  country: "USA",
  Todos: {
    task1: "do the shopping",
    task2: "play some games",
  },
};
// Destruction of the object:
const {
  firstName,
  country,
  Todos: { task1, task2 },
} = user;
// Login in the console:
console.log(firstName, country, task1, task2);

// Creating the array:

const film = [
  "The Shaw shank Redemption",
  "Henry ford Coppola",
  1768,
  "Drama",
  ["Morgan Freeman", "Tim Robbins", "Bob Galton"],
];
// Deconstruction
let [filmName, filmDirector, filmYear, filmGenre, [a, b, c]] = film;
// Login  in the console:
console.log(filmName, filmDirector, filmYear, filmGenre, a, c);
