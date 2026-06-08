// Tuples

// Although JavaScript arrays may be any size in theory, it is sometimes useful to use an array
//  of a fixed size—also known as a tuple.

//  Tuple arrays have a specific known type at each index that may be more specific than a union type
//   of all possible members of the array.

//_____________________________________________________________________________________________

// eg 1
// Here, the array yearAndWarrior is declared as being a tuple type with a number at index 0 and a string at index 1:
/* 
let yearAndWarrior: [number, string];

yearAndWarrior = [530, "Tomyris"]; // Ok

yearAndWarrior = [false, "Tomyris"];
//                ~~~~~
// Error: Type 'boolean' is not assignable to type 'number'.

yearAndWarrior = [530];
// Error: Type '[number]' is not assignable to type '[number, string]'.
//   Source has 1 element(s) but target requires 2. */

//_____________________________________________________________________________________________

// eg 2 Tuples with Array Destructuring :

// Tuples are often used in JavaScript alongside array destructuring to be able to assign multiple values at once,
//  such as setting two variables to initial values based on a single condition

// For example, TypeScript recognizes here that year is always going to be a number and warrior is always going to be a string:

/* // year type: number
// warrior type: string
let [year, warrior] =
  Math.random() > 0.5 ? [340, "Archidamia"] : [1828, "Rani of Jhansi"]; */
//_____________________________________________________________________________________________
