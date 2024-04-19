const book = [
  "The last battle",
  "Ernest Hemingway",
  1943,
  "Auto-biography",
    "Best seller",
  ["love","adventure","drama"],
];

// deconstruction of the array : clean and readable code.
const [title, author, year, genre, prestation, [a, b, c]] = book;

console.log(title, author, year, genre, prestation, [a, b, c]);
console.log(a,b,c);  //access to each element in the nested array 


// console.log(`${title} was written by ${author} in ${year}. It's a ${genre} that was considered as a ${prestation} and it has tags of ${tags.join(", ")}`);
