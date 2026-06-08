// Function Type Parentheses

// Function types may be placed anywhere that another type would be used. That includes union types.

// In union types, parentheses may be used to indicate which part of an annotation is the function return
// or the surrounding union type:

//_____________________________________________________________________________________________________
//eg function types with union types

/* // Type is a function that returns a union: string | undefined
let returnsStringOrUndefined: () => string | undefined;

// Type is either undefined or a function that returns a string
let maybeReturnsString: (() => string) | undefined; */

//_____________________________________________________________________________________________________
