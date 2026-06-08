// Tuple Assignability

// Tuple types are treated by TypeScript as more specific than variable length array types.
// That means variable length array types aren’t assignable to tuple types.

//_____________________________________________________________________________________________

// eg 1
// Here, although we as humans may see pairLoose as having [boolean, number] inside,
//  TypeScript infers it to be the more general (boolean | number)[] type:

/* // Type: (boolean | number)[]
const pairLoose = [false, 123];

const pairTupleLoose: [boolean, number] = pairLoose; // expected direct values , else pair loose should be assigned
// to : [boolean, number]

//    ~~~~~~~~~~~~~~
// Error: Type '(number | boolean)[]' is not
// assignable to type '[boolean, number]'.
//   Target requires 2 element(s) but source may have fewer. */

//_____________________________________________________________________________________________

// eg 2 Tuples of different lengths are also not assignable to each other,
// as TypeScript includes knowing how many members are in the tuple in tuple types.

// Here, tupleTwoExtra must have exactly two members, so although tupleThree starts with the correct members,
//  its third member prevents it from being assignable to tupleTwoExtra:

/* const tupleThree: [boolean, number, string] = [false, 1583, "Nzinga"];

const tupleTwoExact: [boolean, number] = [tupleThree[0], tupleThree[1]];

const tupleTwoExtra: [boolean, number] = tupleThree;
//    ~~~~~~~~~~~~~
// Error: Type '[boolean, number, string]' is
// not assignable to type '[boolean, number]'.
//   Source has 3 element(s) but target allows only 2. */

//_____________________________________________________________________________________________
