//Required Parameters

// Unlike JavaScript, which allows functions to be called with any number of arguments,
//  TypeScript assumes that all parameters declared on a function are required.

//  If a function is called with a wrong number of arguments, TypeScript will protest in the form of a type error.

//  TypeScript’s argument counting will come into play if a function is called with either too few or too many arguments.

//_____________________________________________________________________________________________________

// This singTwo function requires two parameters, so passing one argument and passing three arguments are both not allowed:

/* function singTwo(first: string, second: string) {
  console.log(`${first} / ${second}`);
}

// Logs: "Ball and Chain / undefined"
singTwo('Ball and Chain');
//      ~~~~~~~~~~~~~~~~
// Error: Expected 2 arguments, but got 1.

// Logs: "I Will Survive / Higher Love"
singTwo('I Will Survive', 'Higher Love'); // Ok

// Logs: "Go Your Own Way / The Chain"
singTwo('Go Your Own Way', 'The Chain', 'Dreams');
//                                      ~~~~~~~~
// Error: Expected 2 arguments, but got 3. */

// Enforcing that required parameters be provided to a function helps enforce type safety
//  by making sure all expected argument values exist inside the function.
//  Failing to ensure those values exist could result in unexpected behavior in code

//_____________________________________________________________________________________________________
