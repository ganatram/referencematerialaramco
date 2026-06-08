// Caveat: Unsound Members
// The TypeScript type system is known to be technically unsound: it can get types mostly right,
//  but sometimes its understanding about the types of values may be incorrect.
//  Arrays in particular are a source of unsoundness in the type system.
//  By default, TypeScript assumes all array member accesses return a member of that array,
//  even though in JavaScript, accessing an array element with an index
//  greater than the array’s length gives undefined.
//_____________________________________________________________________________________________
// eg -1
// This code gives no complaints with the default TypeScript compiler settings:
function withElements(elements) {
    console.log(elements[9001].length); // No type error
}
withElements(["It's", "over"]);
console.log(withElements);
//_____________________________________________________________________________________________
