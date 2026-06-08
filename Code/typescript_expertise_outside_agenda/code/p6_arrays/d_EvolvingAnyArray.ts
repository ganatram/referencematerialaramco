// Evolving Any Arrays

// If you don’t include a type annotation on a variable initially set to an empty array,
// TypeScript will treat the array as evolving any[], meaning it can receive any content.

// As with evolving any variables, we don’t like evolving any[] arrays.
//  They partially negate the benefits of TypeScript’s type checker
//  by allowing you to add potentially incorrect values.

//_____________________________________________________________________________________________

// eg -1
// This values array starts off containing any elements, evolves to contain string elements,
//  then again evolves to include number | string elements:

// TS playground - Try...

/* // Type: any[]
let values = [];

// Type: string[]
values.push("");

// Type: (number | string)[]
values[0] = 0;
 */

//_____________________________________________________________________________________________

// eg -2

//_____________________________________________________________________________________________
