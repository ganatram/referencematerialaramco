// Function Overloads

// Some JavaScript functions are able to be called with drastically different sets of parameters
// that can’t be represented just by optional and/or rest parameters.

// These functions can be described with a TypeScript syntax called overload signatures:
// declaring different versions of the function’s name, parameters, and return types multiple times
// before one final implementation signature and the body of the function.
//_____________________________________________________________________________________________________

//eg -
// This createDate function is meant to be called either with one timestamp parameter or with
// three parameters—month, day, and year. Calling with either of those numbers of arguments is allowed,
// but calling with two arguments would cause a type error because no overload signature allows for two arguments.

/* function createDate(timestamp: number): Date;
function createDate(month: number, day: number, year: number): Date;
function createDate(monthOrTimestamp: number, day?: number, year?: number) {
  return day === undefined || year === undefined
    ? new Date(monthOrTimestamp)
    : new Date(year, monthOrTimestamp, day);
}

createDate(554356800); // Ok
createDate(7, 27, 1987); // Ok

createDate(4, 1);
// Error: No overload expects 2 arguments, but overloads
// do exist that expect either 1 or 3 arguments. */

/* // Overload signatures, as with other type system syntaxes, are erased when compiling TypeScript to output JavaScript.

// The previous code snippet’s function would compile to roughly the following JavaScript:

/* function createDate(monthOrTimestamp, day, year) {
  return day === undefined || year === undefined
    ? new Date(monthOrTimestamp)
    : new Date(year, monthOrTimestamp, day);
} */

// Function overloads are generally used as a last resort for complex,
//  difficult-to-describe function types. It’s generally better to keep functions simple
//  and avoid using function overloads when possible.

//_______________
// ______________________________________________________________________________________
