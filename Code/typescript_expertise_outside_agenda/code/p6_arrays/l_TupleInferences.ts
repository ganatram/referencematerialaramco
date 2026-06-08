// Tuple Inferences

//TypeScript generally treats created arrays as variable length arrays, not tuples.
//  If it sees an array being used as a variable’s initial value or the returned value
// for a function, then it will assume a flexible size array rather than a fixed size tuple.

//_____________________________________________________________________________________________
// eg 1
// The following firstCharAndSize function is inferred as
// returning (string | number)[], not [string, number],
// because that’s the type inferred for its returned array literal:

/* // Return type: (string | number)[]
function firstCharAndSize(input: string) {
  return [input[0], input.length];
}

// firstChar type: string | number
// size type: string | number
const [firstChar, size] = firstCharAndSize("Gudit");   */

//_____________________________________________________________________________________________
