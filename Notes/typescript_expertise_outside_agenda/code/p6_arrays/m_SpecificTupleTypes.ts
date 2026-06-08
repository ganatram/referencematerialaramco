// Specific Tuple Types -
// There are two common ways in TypeScript to indicate that a value should be
// a more specific tuple type instead of a general array type: explicit tuple types and const assertions.

//_____________________________________________________________________________________________
// eg 1 - Explicit tuple types

// Tuple types may be used in type annotations, such as the return type annotation for a function.
//  If the function is declared as returning a tuple type and returns an array literal,
//  that array literal will be inferred to be a tuple instead of a more general variable-length array.

// This firstCharAndSizeExplicit function version explicitly states that it returns a tuple of a string and number:

/* // Return type: [string, number] 
function firstCharAndSizeExplicit(input: string): [string, number] {
  return [input[0], input.length];
}

// firstChar type: string
// size type: number
const [firstChar, size] = firstCharAndSizeExplicit("Cathay Williams"); */

//_____________________________________________________________________________________________

// eg 2 - Const asserted tuples - 1

// Typing out tuple types in explicit type annotations can be a pain for the same reasons
// as typing out any explicit type annotations. It’s extra syntax for you to write and update as code changes.

// As an alternative, TypeScript provides an as const operator known as a const assertion that
//  can be placed after a value. Const assertions tell TypeScript to use the most literal,
//  read-only possible form of the value when inferring its type. If one is placed
//  after an array literal, it will indicate that the array should be treated as a tuple:

/* // implicit types
// Type: (string | number)[]
const unionArray = [1157, "Tomoe"];

// elements are mutable:
unionArray.push("More");
unionArray[0] = "Oops"; // Allowed
unionArray[1] = 9999; // Allowed

// order is not guaranteed
unionArray[0] = "Hello"; // Could be string
unionArray[1] = 42; // Could be number

// Values are treated as number and string, not literals
const id = unionArray[0]; // Type: number
const name = unionArray[1]; // Type: string */

//_____________________________________________________________
// solution const asserted tuples -1
// Type: readonly [1157, "Tomoe"]
/* const readonlyTuple = [1157, "Tomoe"] as const;

// elements are not mutable
// readonlyTuple[0] = 42;           Error: Cannot assign to read-only property
// readonlyTuple.push("Another");  Error: Property 'push' does not exist

// order is guaranteed
const first = readonlyTuple[0]; // Type: 1157
const second = readonlyTuple[1]; // Type: "Tomoe"

// values are treated as literals
function handle(id: 1157, name: "Tomoe") {
  console.log("Exact match");
}
handle(first, second); // Works */

//_____________________________________________________________________________________________
// const asserted tuples -2
// Note that as const assertions go beyond switching from flexible sized arrays to fixed size tuples:
//  they also indicate to TypeScript that the tuple is read-only and cannot be used in a place
//  that expects it should be allowed to modify the value

// In this example, pairMutable is allowed to be modified because it has a traditional explicit tuple type.
//  However, the as const makes the value not assignable to the mutable pairAlsoMutable,
//  and members of the constant pairConst are not allowed to be modified:

/* const pairMutable: [number, string] = [1157, "Tomoe"];
pairMutable[0] = 1247; // Ok

const pairAlsoMutable: [number, string] = [1157, "Tomoe"] as const;
//    ~~~~~~~~~~~~~~~
// Error: The type 'readonly [1157, "Tomoe"]' is 'readonly'
// and cannot be assigned to the mutable type '[number, string]'.

const pairConst = [1157, "Tomoe"] as const;
pairConst[0] = 1247;
//        ~
// Error: Cannot assign to '0' because it is a read-only property. */
//_____________________________________________________________________________________________

// const asserted tuples - 3

// In practice, read-only tuples are convenient for function returns.
// Returned values from functions that return a tuple are often destructured immediately anyway,
// so the tuple being read-only does not get in the way of using the function

// This firstCharAndSizeAsConst returns a readonly [string, number],
// but the consuming code only cares about retrieving the values from that tuple:

/* // Return type: readonly [string, number] 
function firstCharAndSizeAsConst(input: string) {
  return [input[0], input.length] as const;
}

// firstChar type: string
// size type: number
const [firstChar, size] = firstCharAndSizeAsConst("Ching Shih"); */

//_____________________________________________________________________________________________
