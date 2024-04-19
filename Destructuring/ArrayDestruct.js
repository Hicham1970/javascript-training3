// create a array:

const book = [
  "The last battle",
  "Ernest Hemingway",
  1943,
  "Auto-biography",
  "Best seller",
];

// let title = book[0];
// let author = book[1];
// let release = book[2];
// let genre = book[3];
// let prestation = book[4];

// avec le deconstruction
// let [title, author, release, genre, prestation] = book;
// console.log(title, author, release, genre, prestation);
// si on veut seulement conserver le titre et la prestation
let [title, , , , prestation] = book;
console.log(title, prestation);
