//____________________________________

// Unions
// Expanding a value’s allowed type to be two or more possible types

// Narrowing
// Reducing a value’s allowed type to not be one or more possible types

// Take this mathematician variable:
/* let mathematician = Math.random() > 0.5 ? undefined : "Mark Goldberg";
 */ // What type is mathematician?  // "either type"

// Declaring Union Types
/* let thinker: string | null = null;

if (Math.random() > 0.5) {
  thinker = "Susanne Langer"; // Ok
}

// Union type declarations can be placed anywhere you might declare a type with a type annotation. */

//____________________________________
// Union Properties:
//  When a value is known to be a union type, TypeScript will only allow you to access member properties
// that exist on all possible types in the union. It will give you a type-checking error if you try
// to access a member property that doesn’t exist on all possible types.

// In the following snippet, physicist is of type number | string. While .toString() exists in both types and
// is allowed to be used, .toUpperCase() and .toFixed() are not because .toUpperCase()
//  is missing on the number type and .toFixed() is missing on the string type:

/* let physicist = Math.random() > 0.5 ? "Marie Curie" : 84;

physicist.toString(); // Ok

physicist.toUpperCase();
//        ~~~~~~~~~~~
// Error: Property 'toUpperCase' does not exist on type 'string | number'.
//   Property 'toUpperCase' does not exist on type 'number'.

physicist.toFixed();
//        ~~~~~~~
// Error: Property 'toFixed' does not exist on type 'string | number'.
//   Property 'toFixed' does not exist on type 'string'. */

//____________________________________

// Assignment Narrowing for Union Types

/* let admiral: number | string;

admiral = "Grace Hopper";

admiral.toUpperCase(); // Ok: string

admiral.toFixed();
//      ~~~~~~~
// Error: Property 'toFixed' does not exist on type 'string'. */

/* 
let inventor: number | string = "Hedy Lamarr";  // immediate Assignment narrowing 

inventor.toUpperCase(); // Ok: string

inventor.toFixed();
//       ~~~~~~~
// Error: Property 'toFixed' does not exist on type 'string'. */

//____________________________________

// Conditional checks for Union Types

// A common way to get TypeScript to narrow a variable’s value is to write an if statement checking the variable
// for being equal to a known value. TypeScript is smart enough to understand that inside the body of that if statement,
// the variable must be the same type as the known value:

/* // Type of scientist: number | string
let scientist = Math.random() > 0.5 ? "Rosalind Franklin" : 51;

if (scientist === "Rosalind Franklin") {
  // Type of scientist: string
  scientist.toUpperCase(); // Ok
}

// Type of scientist: number | string
scientist.toUpperCase();
//        ~~~~~~~~~~~
// Error: Property 'toUpperCase' does not exist on type 'string | number'.
//   Property 'toUpperCase' does not exist on type 'number'. */

// Narrowing with conditional logic shows TypeScript’s type-checking logic mirroring good JavaScript coding patterns.

//____________________________________

// Typeof Checks checks for Union Types

/* let researcher = Math.random() > 0.5 ? "Rosalind Franklin" : 51;

if (typeof researcher === "string") {
  researcher.toUpperCase(); // Ok: string
}  */

/* // Logical negations from ! and else statements work as well:
 if (!(typeof researcher === "string")) {
    researcher.toFixed(); // Ok: number
} else {
    researcher.toUpperCase(); // Ok: string
}
  */

//Ternary statements also understood
/* typeof researcher === "string"
  ? researcher.toUpperCase() // Ok: string
  : researcher.toFixed(); // Ok: number
 */

//____________________________________

//   Literal Types  -- specific values  -- narrowing types

/* const mathematician = "Mark Goldberg"; // specific value or literal type with const

let mathematician1 = "Mark Goldberg"; // primitive type with let */

//____________________________________
/* // Hybrid union types
// Union type annotations can mix and match between literals and primitives.  -- hybrid union types
let lifespan: number | "ongoing" | "uncertain";

lifespan = 89; // Ok
lifespan = "ongoing"; // Ok

lifespan = true;
// Error: Type 'true' is not assignable to
// type 'number | "ongoing" | "uncertain"' */

//____________________________________

// Strict Null Checking

// I call it my billion-dollar mistake. It was the invention of the null reference in 1965…​This has led to innumerable errors,
//  vulnerabilities, and system crashes, which have probably caused a billion dollars of pain and damage in the last 40 years.

// Tony Hoare, 2009

/* const firstName: string = null;  // assigning null to string allowed in certain languages. 

firstName="henry"; 

firstName.toUpperCase();  */

// below strictNullChecks - false & true examples

/* With the strictNullChecks option set to false, the following code is considered totally type safe. That’s wrong,
 though; nameMaybe might be undefined when .toLowerCase is accessed from it:

let nameMaybe = Math.random() > 0.5
    ? "Tony Hoare"
    : undefined;

nameMaybe.toLowerCase();
// Potential runtime error: Cannot read property 'toLowerCase' of undefined. */

/* // With strict null checking enabled, TypeScript sees the potential crash in the code snippet:

let nameMaybe = Math.random() > 0.5 ? "Tony Hoare" : undefined;

nameMaybe.toLowerCase();
// Error: Object is possibly 'undefined'. */

//______________________________________________________________________________
// Truthiness Narrowing

/* let geneticist = Math.random() > 0.5 ? "Barbara McClintock" : undefined;

if (geneticist) {
  geneticist.toUpperCase(); // Ok: string   -- as undefined is considered falsy
}

geneticist.toUpperCase();
// Error: Object is possibly 'undefined'.

// TypeScript can also narrow a variable’s type from a truthiness check if only some of its potential values may be truthy.
//  In the following snippet, geneticist is of type string | undefined, and because undefined is always falsy, TypeScript can deduce
//   that it must be of type string within the if statement’s body:

// All values in JavaScript are truthy except for those defined as falsy: false, 0, -0, 0n, "", null, undefined, and NaN */

/* // Logical operators that perform truthiness checking work as well, namely && and ?.:

let geneticist = Math.random() > 0.5 ? "Barbara McClintock" : undefined;

geneticist && geneticist.toUpperCase(); // Ok: string | undefined
geneticist?.toUpperCase(); // Ok: string | undefined  */

//______________________________________________________________________________
// Type Aliases

// Type Aliases
// Most union types you’ll see in code will generally only have two or three constituents.
// However, you may sometimes find a use for longer union types that are inconvenient to type out repeatedly.

/* // Each of these variables can be one of five possible types:

let rawDataFirst: boolean | number | string | null | undefined;
let rawDataSecond: boolean | number | string | null | undefined;
let rawDataThird: boolean | number | string | null | undefined; */

/* // TypeScript includes type aliases for assigning easier names to reused types. A type alias
// starts with the type keyword, a new name, =, and then any type. By convention, type aliases are given names in PascalCase:

type RawData = boolean | number | string | null | undefined;

let rawDataFirst: RawData;
let rawDataSecond: RawData;
let rawDataThird: RawData;
 */

/* // Type aliases are not Javascript feature:

type SomeType = string | undefined;

console.log(SomeType);  // types are not compile in javascript code 
//          ~~~~~~~~
// Error: 'SomeType' only refers to a type, but is being used as a value here. */

//______________________________________________________________________________
// Combining Type Aliases

// Type aliases may reference other type aliases. It can sometimes be useful to have type aliases refer to each other,
// such as when one type alias is a union of types that includes (is a superset of) the union types within another type alias.

/* // This IdMaybe type is a union of the types within Id as well as undefined and null:

type Id = number | string;

// Equivalent to: number | string | undefined | null
type IdMaybe = Id | undefined | null; */

/* // The previous code snippet could be rewritten to have IdMaybe come before Id:

type IdMaybe = Id | undefined | null; // Ok
type Id = number | string; */

//________________________________________End of Part p3 ______________________________________
