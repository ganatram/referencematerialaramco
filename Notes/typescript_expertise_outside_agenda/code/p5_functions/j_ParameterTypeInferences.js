// Parameter Type Inferences
// It would be cumbersome if we had to declare parameter types for every function we write,
//  including inline functions used as parameters. Fortunately, TypeScript can infer the
//   types of parameters in a function provided to a location with a declared type.
//_____________________________________________________________________________________________________
//eg
// This singer variable is known to be a function that takes in a parameter of type string,
//  so the song parameter in the function later assigned to singer is known to be a string:
var singer;
singer = function (song) {
    // Type of song: string
    return "Singing: ".concat(song.toUpperCase(), "!"); // Ok
};
console.log(singer('Elton John'));
//_____________________________________________________________________________________________________
