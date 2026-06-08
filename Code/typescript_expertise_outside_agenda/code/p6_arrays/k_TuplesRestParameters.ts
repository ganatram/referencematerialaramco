// Tuples as rest parameters

// Because tuples are seen as arrays with more specific type information on length and element types,
//  they can be particularly useful for storing arguments to be passed to a function.

//  TypeScript is able to provide accurate type checking for tuples passed as ... rest parameters.

//_____________________________________________________________________________________________
// eg 1
// Here, the logPair function’s parameters are typed string and number. Trying to pass in a value
// of type (string | number)[] as arguments wouldn’t be type safe as the contents might not match up:

// they could both be the same type, or one of each type in the wrong order.
// However, if TypeScript knows the value to be a [string, number] tuple, it understands the values match up:

/* function logPair(name: string, value: number) {
  console.log(`${name} has ${value}`);
}

const pairArray: ["Amage", 1];

logPair(...pairArray);
// Error: A spread argument must either have a
// tuple type or be passed to a rest parameter.

const pairTupleIncorrect: [number, string] = [1, "Amage"];

logPair(...pairTupleIncorrect);
// Error: Argument of type 'number' is not
// assignable to parameter of type 'string'.

const pairTupleCorrect: [string, number] = ["Amage", 1];

logPair(...pairTupleCorrect); // Ok */

//_____________________________________________________________________________________________
// eg 2 If you really want to go wild with your rest parameters tuples, you can mix them
//  with arrays to store a list of arguments for multiple function calls :

/* function logTrio(name: string, value: [number, boolean]) {
  console.log(`${name} has ${value[0]} (${value[1]})`);
}

const trios: [string, [number, boolean]][] = [
  ["Amanitore", [1, true]],
  ["Æthelflæd", [2, false]],
  ["Ann E. Dunwoody", [3, false]],
];

trios.forEach(logTrio);
//            ~~~~~~~
// Argument of type '(name: string, value: [number, boolean]) => void'
// is not assignable to parameter of type
// '(value: [string, [number, boolean]], ...) => void'.
//   Types of parameters 'name' and 'value' are incompatible.
//     Type '[string, [number, boolean]]' is not assignable to type 'string'.

trios.forEach((trio) => logTrio(...trio)); // Ok */

//_____________________________________________________________________________________________
