// eg -1
// A “type” is a description of what a JavaScript value shape might be. By “shape” I mean which properties and methods exist on a value,
//  and what the built-in typeof operator would describe it as.

// let singer = "Aretha"; // see properties,methods and type being assigned

//______________________________________________________________________________________________________________________________
/* // Basic type in javascript

// null;

// undefined;

// boolean; // true or false

// string; // "", "Hi!", "abc123", …​

// number; // 0, 2.1, -4, …​ */

//______________________________________________________________________________________________________________________________

/* let singer="Ella Fitzgerald"
let value=1.23; 
// If you ever forget the name of a primitive , just hover you will be guided !  */

//______________________________________________________________________________________________________________________________

/* //computed types - inferred 
// Inferred type: string
let bestSong = Math.random() > 0.5
  ? "Chain of Fools"
  : "Respect";
 */

//______________________________________________________________________________________________________________________________

/* // Type Systems
// A type system is the set of rules for how a programming language understands what types the constructs in a program may have.

// At its core, TypeScript’s type system works by:

// Reading in your code and understanding all the types and values in existence

// For each value, seeing what type its initial declaration indicates it may contain

// For each value, seeing all the ways it’s used later on in code

// Complaining to the user if a value’s usage doesn’t match with its type */

/* 
// let firstName = "Whitney";
// firstName.length();
//        ~~~~~~
//  This expression is not callable.
//    Type 'Number' has no call signatures.

// TypeScript came to that complaint by, in order:

// Reading in the code and understanding there to be a variable named firstName

// Concluding that firstName is of type string because its initial value is a string, "Whitney"

// Seeing that the code is trying to access a .length member of firstName and call it like a function

// Complaining that the .length member of a string is a number, not a function (it can’t be called like a function) */

//______________________________________________________________________________________________________________________________

/* // Kinds of Errors
// While writing TypeScript, the two kinds of “errors” you’ll come across most frequently are:

// Syntax
// Blocking TypeScript from being converted to JavaScript

// Type
// Something mismatched has been detected by the type checker

// The differences between the two are important. */

/* 
// eg of syntax error below:

// let let wat;
//      ~~~
// Error: ',' expected.

//compiled code below:
// let let, wat; */

//eg of a type error

// let name: boolean = "henry";

//______________________________________________________________________________________________________________________________

//Assignability

// TypeScript’s checking of whether a value is allowed to be provided to a function call or variable is called assignability:

/* // valid 
let firstName = "Carole";
firstName = "Joan"; */

/* //invalid 
let lastName = "King";
lastName = true;
// Error: Type 'boolean' is not assignable to type 'string'. */

//______________________________________________________________________________________________________________________________

// Type Annotations  -- decllaring a type with no value

// show how any and string behave ---

/* Sometimes a variable doesn’t have an initial value for TypeScript to read. TypeScript won’t attempt to figure out the initial
type of the variable from later uses. It’ll consider the variable by default to be implicitly the any type
 */

/* let rocker; // Type: any   -- revolving types , defeats purpose of typescript , even then checks properties and methods available !

rocker = "Joan Jett"; // Type: string
rocker.toUpperCase(); // Ok

rocker = 19.58; // Type: number
rocker.toPrecision(1); // Ok
rocker.toUpperCase();
//     ~~~~~~~~~~~
// Error: 'toUpperCase' does not exist on type 'number'. */

/* let rocker: string;
rocker = "Joan Jett";
rocker = 19.58; // Type: number -- error 
rocker.toPrecision(1); // Ok   
rocker.toUpperCase();
 */

// These type annotations exist only for TypeScript—they don’t affect the runtime code and are not valid JavaScript syntax.

/* 
// Unnecessary Type Annotations  -- variables with initial values can be inferred , assign them type annotation is not required 
let firstName: string = "Tina";
//           ~~~~~~~~ Does not change the type system...

// but it supports documentation  */

//______________________________________________________________________________________________________________________________

//Type Shapes: verify properties and methods available on a certain type

/* //eg: simple Shapes
let rapper = "Queen Latifah";
rapper.length; // ok

rapper.push("!");
//     ~~~~
// Property 'push' does not exist on type 'string'. */

/* //eg :- complex shapes such as objects :
let cher = {
  firstName: "Cherilyn",
  lastName: "Sarkisian",
};

cher.middleName;
//   ~~~~~~~~~~
//   Property 'middleName' does not exist on type
//   '{ firstName: string; lastName: string; }'. */

//______________________________________________________________________________________________________________________________

// Typescript support with ES6 Modules/Bindings

/* // a.ts
export const shared = "Cher";

// b.ts
export const shared = "Cher";

// c.ts
import { shared } from "./a";
//       ~~~~~~
// Error: Import declaration conflicts with local declaration of 'shared'.

export const shared = "Cher";
//           ~~~~~~
// Error: Individual declarations in merged declaration
// 'shared' must be all exported or all local. */

//_____________________________________________________________________
//Summary

// What a “type” is and the primitive types recognized by TypeScript

// What a “type system” is and how TypeScript’s type system understands code

// How type errors compare to syntax errors

// Inferred variable types and variable assignability

// Type annotations to explicitly declare variable types and avoid evolving any types

// Object member checking on type shapes

// ECMAScript module files’ declaration scoping compared to script files
