// Function Types
// JavaScript allows us to pass functions around as values. That means we need a way to declare
//  the type of a parameter or variable meant to hold a function.

// Function type syntax looks similar to an arrow function, but with a type instead of the body.

//_____________________________________________________________________________________________________
//eg -1 - return function types

// This nothingInGivesString variable’s type describes a function with no parameters and a returned string value:

/* let nothingInGivesString: () => string;

nothingInGivesString = function (): string {
  return 'Hi there!';
};

console.log(nothingInGivesString()); // Output: Hi There! */

//_____________________________________________________________________________________________________
//eg -2 - return function types

// This inputAndOutput variable’s type describes a function with a string[] parameter,
// an optional count parameter, and a returned number value:

/* let inputAndOutput: (songs: string[], count?: number) => number;

inputAndOutput = (songs, count = 0) => {
  return songs.length + count;
};

console.log(inputAndOutput(['a', 'b', 'c'])); // Output: 3
console.log(inputAndOutput(['a', 'b', 'c'], 2)); // Output: 5 */

//_____________________________________________________________________________________________________
//eg -3 - return function types

// For example, the following runOnSongs snippet declares the type of its getSongAt parameter to be a function
// that takes in an index: number and returns a string.

// Passing getSongAt matches that type, but logSong fails for taking in a string as
//  its parameter instead of a number:

/* const songs = ['Juice', 'Shake It Off', "What's Up"];

function runOnSongs(getSongAt: (index: number) => string) {
  for (let i = 0; i < songs.length; i += 1) {
    console.log(getSongAt(i));
  }
}

function getSongAt(index: number) {
  return `${songs[index]}`;
}

runOnSongs(getSongAt); // Ok

function logSong(song: string) {
  return `${song}`;
}

// runOnSongs(logSong);  // Error
//         ~~~~~~~
// Error: Argument of type '(song: string) => string' is not
// assignable to parameter of type '(index: number) => string'.
//   Types of parameters 'song' and 'index' are incompatible.
//     Type 'number' is not assignable to type 'string'.

runOnSongs((i) => logSong(songs[i])); // Works */

//_____________________________________________________________________________________________________
