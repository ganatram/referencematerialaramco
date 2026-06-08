//  Structural Typing
// excess property compatibility or type compatibility by structural typing

/* TypeScript’s type system is structurally typed: meaning any value that happens to satisfy a type
 is allowed to be used as a value of that type. In other words, when you declare that a parameter
  or variable is of a particular object type, you’re telling TypeScript that whatever object(s) you use,
   they need to have those properties. */
//_________________________________________________________________________________________

/* type WithFirstName = {
  firstName: string;
};

type WithLastName = {
  lastName: string;
};

const hasBoth = {
  firstName: "Lucille",
  lastName: "Clifton",
};

// Ok: `hasBoth` contains a `firstName` property of type `string`
let withFirstName: WithFirstName = hasBoth;

// Ok: `hasBoth` contains a `lastName` property of type `string`
let withLastName: WithLastName = hasBoth; */

//_________________________________________________________________________________________

/* excess property compatibility or type compatibility by structural typing
not duck/nominal typing

javascript is duck typed but typescript is structual typed

 Structural typing is not the same as duck typing, which comes from the phrase 
“If it looks like a duck and quacks like a duck, it’s probably a duck.”

Structural typing is when there is a static system checking the type—in TypeScript’s case,
 the type checker.

Duck typing is when nothing checks object types until they’re used at runtime.  */
