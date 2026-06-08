//Default Parameters

// Optional parameters in JavaScript may be given a default value with an = and a value in their declaration.
//  For these optional parameters, because a value is provided by default, their TypeScript type
//   does not implicitly have the | undefined union added on inside the function.

//   TypeScript will still allow the function to be called with missing or undefined arguments for those parameters.

//_____________________________________________________________________________________________________
//eg

// In the following rateSong function, rating is inferred to be of type number,
//  but is an optional number | undefined in the code that calls the function:

/* function rateSong(song: string, rating = 0) {
  console.log(`${song} gets ${rating}/5 stars!`);
}

rateSong('Photograph'); // Ok
rateSong('Set Fire to the Rain', 5); // Ok
rateSong('Set Fire to the Rain', undefined); // Ok

rateSong('At Last!', '100');
//                   ~~~~~
// Error: Argument of type '"100"' is not assignable
// to parameter of type 'number | undefined'.
 */
//_____________________________________________________________________________________________________
