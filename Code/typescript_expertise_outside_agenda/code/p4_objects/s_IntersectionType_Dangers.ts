// Dangers of Intersection Types

/* Intersection types are a useful concept, but it’s easy to use them in ways that confuse either yourself
 or the TypeScript compiler. I recommend trying to keep code as simple as possible when using them. */

//__________________________________________________________________________________________________

//eg 1 - Long assignability errors

/* Assignability error messages from TypeScript get much harder to read when you create 
complex intersection types, such as one combined with a union type. 

This will be a common theme with TypeScript’s type system (and typed programming languages in general):
the more complex you get, the harder it will be to understand messages from the type checker. */

/* In the case of the previous code snippet’s ShortPoem, it would be much more readable to split the type 
into a series of aliased object types to allow TypeScript to print those names, as below: */

/* type ShortPoemBase = { author: string };
type Haiku = ShortPoemBase & { kigo: string; type: 'haiku' };
type Villanelle = ShortPoemBase & { meter: number; type: 'villanelle' };
type ShortPoem = Haiku | Villanelle;

const oneArt: ShortPoem = {
  author: 'Elizabeth Bishop',
  type: 'villanelle',
};
// Type '{ author: string; type: "villanelle"; }'
// is not assignable to type 'ShortPoem'.
//   Type '{ author: string; type: "villanelle"; }'
//   is not assignable to type 'Villanelle'.
//     Property 'meter' is missing in type
//     '{ author: string; type: "villanelle"; }'
//     but required in type '{ meter: number; type: "villanelle"; }'.
 */

//__________________________________________________________________________________________________

//eg 2 - 'never' type

/* Intersection types are also easy to misuse and create an impossible type with. 
Primitive types cannot be joined together as constituents in an intersection type 
because it’s impossible for a value to be multiple primitives at the same time.  */

// Trying to & two primitive types together will result in the never type, represented by the keyword never:

/* type NotPossible = number & string;
// Type: never

let notNumber: NotPossible = 0;
//  ~~~~~~~~~
// Error: Type 'number' is not assignable to type 'never'.

let notString: never = '';
//  ~~~~~~~~~
// Error: Type 'string' is not assignable to type 'never'. */

// The never keyword and type is what programming languages refer to as a bottom type, or empty type.
//  A bottom type is one that can have no possible values and can’t be reached.
//  No types can be provided to a location whose type is a bottom type:

//__________________________________________________________________________________________________
