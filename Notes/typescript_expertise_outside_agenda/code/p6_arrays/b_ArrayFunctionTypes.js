// Array and Function Types
// Array types are an example of a syntax container where function types may need parentheses
//  to distinguish what’s in the function type or not. Parentheses may be used to indicate
//  which part of an annotation is the function return or the surrounding array type.
//_____________________________________________________________________________________________
// eg -1
// The createStrings type here, which is a function type, is not the same as stringCreators, which is an array type:

// Type is a function that returns an array of strings:
/* var createStrings;
// Type is an array of functions that each return a string
var stringCreators;
// how to execute :
createStrings = function () {
    return ["string1", "string2", "string3"];
};
console.log(createStrings());
stringCreators = [function () { return "str1"; }, function () { return "str2"; }, function () { return "str3"; }];
console.log(stringCreators[0]());
console.log(stringCreators[1]());
console.log(stringCreators[2]()); */
//_____________________________________________________________________________________________
