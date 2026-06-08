// More Return Types

// Now, let’s look at one return type: void

//_____________________________________________________________________________________________________

//eg - 1 - Void Return Type
/* 
Some functions aren’t meant to return any value. They either have no return statements 
or only have return statements that don’t return a value. 
TypeScript allows using a void keyword to refer to the return type of such a function that returns nothing. */

// Functions whose return type is void may not return a value.

// This logSong function is declared as returning void, so it’s not allowed to return a value:

/* function logSong(song: string | undefined): void {
  if (!song) {
    return; // Ok
  }

  console.log(`${song}`);

  return true;
  // Error: Type 'boolean' is not assignable to type 'void'.
} */

//_____________________________________________________________________________________________________

//eg - 2 - Void Return Type - usage example

/* let songLogger: (song: string) => void;

songLogger = (song) => {
  console.log(`${song}`);
};

songLogger('Heart of Glass'); // Ok
 */

//_____________________________________________________________________________________________________

//eg - 3 - Undefined is not Void

/* function returnsVoid() {
  return;
}

let lazyValue: string | undefined;

lazyValue = returnsVoid();
// Error: Type 'void' is not assignable to type 'string | undefined'. */

//_____________________________________________________________________________________________________

// The void type is not JavaScript. It’s a TypeScript keyword used to declare return types of functions
