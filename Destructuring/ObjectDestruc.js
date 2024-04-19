const game = {
  title: "Space Invaders",
  genre: "Shooter",
  year: 1978,
  developer: "Takashi Motor",
  character: {
    hero: "Tom",
    badBoy: "David",
    level: 1,
    weapon: "Knife",
  },
};

// console.log(game.title, game.genre, game.year, game.developer);
// create variables
// let title = game.title;
// let genre = game.genre;
// let year = game.year;
// let developer = game.developer; // ! harder to write

// console.log(title, genre, year, developer);

// DEstructuring assignment:
// Syntax:
// const { prop1, prop2, prop3, prop4 } = game;
// const { title, genre, year, developer } = game; //! easier to read and write
// const { title, genre, year: release, developer } = game; //! easier to read and write
// ! and we can access each property as a variable
// console.log(title, genre, year, developer);
// console.log(release);
const {
  title,
  genre,
  year: release,
  developer,
  character,
  character: { hero, badBoy, level, weapon },
} = game; //! easier to read and write

console.log(title, genre, release, developer, character, badBoy); //Space Invaders Shooter 1978 Takashi Motor { hero: 'Tom', badBoy: 'David', level: 1, weapon: 'Knife' } David

/**----------------------------- */
let {length} = "The day is wonderful"; 
console.log(length); //20

