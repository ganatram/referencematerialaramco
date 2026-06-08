// Function Type Aliases

// Remember type aliases in, “Unions and Literals”? They can be used for function types as well.

//_____________________________________________________________________________________________________
//eg - 1

// This StringToNumber type aliases a function that takes in a string and returns a number,
// which means it can be used later to describe the types of variables:

/* type StringToNumber = (input: string) => number;

let stringToNumber: StringToNumber;

stringToNumber = (input) => input.length; // Ok

stringToNumber = (input) => input.toUpperCase(); */
//                          ~~~~~~~~~~~~~~~~~~~
// Error: Type 'string' is not assignable to type 'number'.

//_____________________________________________________________________________________________________

//eg - 2

// Similarly, function parameters can themselves be typed with aliases that happen to refer to a function type.

// This usesNumberToString function has a single parameter which is itself the NumberToString aliased function type:

/* type NumberToString = (input: number) => string;

function usesNumberToString(numberToString: NumberToString) {
  console.log(`The string is: ${numberToString(1234)}`);
}

usesNumberToString((input) => `${input}! Hooray!`); // Ok

usesNumberToString((input) => input * 2);
//                            ~~~~~~~~~
// Error: Type 'number' is not assignable to type 'string'. */

//_____________________________________________________________________________________________________
