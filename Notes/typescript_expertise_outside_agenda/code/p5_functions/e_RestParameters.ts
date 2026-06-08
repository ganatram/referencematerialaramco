//Rest Parameters

// Some functions in JavaScript are made to be called with any number of arguments.
// The ... spread operator may be placed on the last parameter in a function declaration
//  to indicate any “rest” arguments passed to the function starting at that parameter
//  should all be stored in a single array.

// TypeScript allows declaring the types of these rest parameters similarly to regular parameters,
//  except with a [] syntax added at the end to indicate it’s an array of arguments.

//_____________________________________________________________________________________________________
//eg

// Here, singAllTheSongs is allowed to take zero or more arguments of type string for its songs rest parameter:

/* function singAllTheSongs(singer: string, ...songs: string[]) {
  for (const song of songs) {
    console.log(`${song}, by ${singer}`);
  }
}

singAllTheSongs('Alicia Keys'); // Ok
singAllTheSongs('Lady Gaga', 'Bad Romance', 'Just Dance', 'Poker Face'); // Ok

singAllTheSongs('Ella Fitzgerald', 2000);
//                                 ~~~~
// Error: Argument of type 'number' is not
// assignable to parameter of type 'string'.
 */
//_____________________________________________________________________________________________________
