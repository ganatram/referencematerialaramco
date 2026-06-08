// Functions and Methods

// TypeScript provides two ways of declaring interface members as functions:

// Method syntax: declaring that a member of the interface is a function intended
//  to be called as a member of the object, like member(): void

// Property syntax: declaring that a member of the interface is equal to
// a standalone function, like member: () => void

// The two declaration forms are an analog for the two ways you can declare a JavaScript object as having a function.

//______________________________________________________________________________________________________________

// eg 1

// For example, the text property in the below Page interface gives back a string when accessed,
//  but causes a type error if assigned a new value:

// Both method and property members shown here are functions that may be called with no parameters and return a string:

/* interface HasBothFunctionTypes {
  property: () => string;
  method(): string;
}

const hasBoth: HasBothFunctionTypes = {
  property: () => "",
  method() {
    return "";
  },
};

hasBoth.property(); // Ok
hasBoth.method(); // Ok

// Both forms can receive the ? optional modifier to indicate they don’t need to be provided:

interface OptionalReadonlyFunctions {
  optionalProperty?: () => string;
  optionalMethod?(): string; */
}

//______________________________________________________________________________________________________________
