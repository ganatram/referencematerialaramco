// Parameter Type Inferences

// It would be cumbersome if we had to declare parameter types for every function we write,
//  including inline functions used as parameters. Fortunately, TypeScript can infer the
//   types of parameters in a function provided to a location with a declared type.

//_____________________________________________________________________________________________________
//eg - 1
// This singer variable is known to be a function that takes in a parameter of type string,
//  so the song parameter in the function later assigned to singer is known to be a string:

/* let singer: (song: string) => string;

singer = function (song) {
  // Type of song: string
  return `Singing: ${song.toUpperCase()}!`; // Ok
};

console.log(singer('Elton John')); */

//_____________________________________________________________________________________________________

//eg - 2

// When you pass a function as an argument, TypeScript can automatically infer the types of its parameters based on the context.
// For example, in the forEach callback below, the song and index parameters are inferred as string and number, respectively:

const songs = ['Call Me', 'Jolene', 'The Chain'];

// song: string
// index: number
songs.forEach((song, index) => {
  console.log(`${song} is at index ${index}`);
});
