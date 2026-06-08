// Spreads and Rests

// Arrays can be joined together using the ... spread operator.
// TypeScript understands the result array will contain values that can be from either of the input arrays.

// If the input arrays are the same type, the output array will be that same type.
// If two arrays of different types are spread together to create a new array,
// the new array will be understood to be a union type array of elements that are either of the two original types.

//_____________________________________________________________________________________________

// eg -1 - Spread
// Here, the conjoined array is known to contain both values that are type string
// and values that are type number, so its type is inferred to be (string | number)[]:

/* // Type: string[]
const soldiers = ["Harriet Tubman", "Joan of Arc", "Khutulun"];

// Type: number[]
const soldierAges = [90, 19, 45];

// Type: (string | number)[]
const conjoined = [...soldiers, ...soldierAges];
 */

//_____________________________________________________________________________________________

// eg -2 Rest parameters
// Arrays used as arguments for rest parameters must have the same array type as the rest parameter.

// The logWarriors function below takes in only string values for its ...names rest parameter.
// Spreading an array of type string[] is allowed, but a number[] is not:

/* function logWarriors(greeting: string, ...names: string[]) {
  for (const name of names) {
    console.log(`${greeting}, ${name}!`);
  }
}

const warriors = ["Cathay Williams", "Lozen", "Nzinga"];

logWarriors("Hello", ...warriors);

const birthYears = [1844, 1840, 1583];

logWarriors("Born in", ...birthYears);
//                     ~~~~~~~~~~~~~
// Error: Argument of type 'number' is not
// assignable to parameter of type 'string'. */
