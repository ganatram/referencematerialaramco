// Union Type Arrays

// You can use a union type to indicate that each element of an array can be one of multiple select types.

//_____________________________________________________________________________________________

// eg -1
// When using array types with unions, parentheses may need to be used to indicate
// which part of an annotation is the contents of the array or the surrounding union type.

// Using parentheses in array union types is important—the following two types are not the same:

/* // Type is either a string or an array of numbers
let stringOrArrayOfNumbers: string | number[];

// Type is an array of elements that are each either a number or a string
let arrayOfStringOrNumbers: (string | number)[];

// howt to use :
stringOrArrayOfNumbers = "hello";
console.log(stringOrArrayOfNumbers);

stringOrArrayOfNumbers = [10, 20, 30];
console.log(stringOrArrayOfNumbers);

arrayOfStringOrNumbers = [100, "hello", 200, "hi", 300, "hola"];
console.log(arrayOfStringOrNumbers); */

//_____________________________________________________________________________________________

// eg -2

// TypeScript will understand from an array’s declaration that it is a union-type array
//  if it contains more than one type of element.

//  In other words, the type of an array’s elements is the union of all possible types
//   for elements in the array.

/* // Here, namesMaybe is (string | undefined)[] because it has both string values and an undefined value:
// Type is (string | undefined)[]
const namesMaybe = ["Aqualtune", "Blenda", undefined]; */

//_____________________________________________________________________________________________
