// Union Type Arrays
// You can use a union type to indicate that each element of an array can be one of multiple select types.
//_____________________________________________________________________________________________
// eg -1
// When using array types with unions, parentheses may need to be used to indicate
// which part of an annotation is the contents of the array or the surrounding union type.
// Using parentheses in array union types is important—the following two types are not the same:

// Type is either a string or an array of numbers

/* var stringOrArrayOfNumbers;
// Type is an array of elements that are each either a number or a string
var arrayOfStringOrNumbers;
// howt to use :
stringOrArrayOfNumbers = "hello";
console.log(stringOrArrayOfNumbers);
stringOrArrayOfNumbers = [10, 20, 30];
console.log(stringOrArrayOfNumbers);
arrayOfStringOrNumbers = [100, "hello", 200, "hi", 300, "hola"];
console.log(arrayOfStringOrNumbers); */
//_____________________________________________________________________________________________
