// Call Signatures

// Interfaces and object types can declare call signatures, which is a type system
// description of how a value may be called like a function.

// Only values that may be called in the way the call signature
// declares will be assignable to the interface—

// i.e., a function with assignable parameters and return type.
//  A call signature looks similar to a function type, but with a : colon instead of an => arrow.

//______________________________________________________________________________________________________________

// eg 1

// The following FunctionAlias and CallSignature types both describe the same function parameters and return type:
/* 
type FunctionAlias = (input: string) => number;

interface CallSignature {
  (input: string): number;
}

// Type: (input: string) => number
const typedFunctionAlias: FunctionAlias = (input) => input.length; // Ok

// Type: (input: string) => number
const typedCallSignature: CallSignature = (input) => input.length; // Ok */

// Call signatures can be used to describe functions that additionally have some user-defined
//  property on them. TypeScript will recognize a property added
//  to a function declaration as adding to that function declaration’s type.

//______________________________________________________________________________________________________________

// eg 2

// The following keepsTrackOfCalls function declaration is given a count property of type number,
//  making it assignable to the FunctionWithCount interface. It can therefore be assigned to the
//  hasCallCount argument of type FunctionWithCount.
//  The function at the end of the snippet was not given a count:

/* interface FunctionWithCount {
  count: number;
  (): void;
}

let hasCallCount: FunctionWithCount;

function keepsTrackOfCalls() {
  keepsTrackOfCalls.count += 1;
  console.log(`I've been called ${keepsTrackOfCalls.count} times!`);
}

keepsTrackOfCalls.count = 0;

hasCallCount = keepsTrackOfCalls; // Ok

function doesNotHaveCount() {
  console.log("No idea!");
}

hasCallCount = doesNotHaveCount;
// Error: Property 'count' is missing in type
// '() => void' but required in type 'FunctionWithCount' */

//______________________________________________________________________________________________________________
