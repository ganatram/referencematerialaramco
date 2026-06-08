//Explicit Object-Type Unions - more typing but better code safety

/* Alternately, you can be more explicit about your object types by being explicit 
with your own union of object types. Doing so requires writing a bit more code 
but comes with the advantage of giving you more control over your object types. 

Most notably, if a value’s type is a union of object types, TypeScript’s type system
 will only allow access to properties that exist on all of those union types.
 */

//______________________________________________________________________________________________

/* type PoemWithPages = {
  name: string;
  pages: number;
};

type PoemWithRhymes = {
  name: string;
  rhymes: boolean;
};

type Poem = PoemWithPages | PoemWithRhymes;

const poem: Poem =
  Math.random() > 0.5
    ? { name: "The Double Image", pages: 7 }
    : { name: "Her Kind", rhymes: true };

poem.name; // Ok

poem.pages;
//   ~~~~~
// Property 'pages' does not exist on type 'Poem'.
//   Property 'pages' does not exist on type 'PoemWithRhymes'.

poem.rhymes; */
//   ~~~~~~
// Property 'rhymes' does not exist on type 'Poem'.
//   Property 'rhymes' does not exist on type 'PoemWithPages'.

//______________________________________________________________________________________________

/* Restricting access to potentially nonexistent members of objects can be a good thing for code safety.
 If a value might be one of multiple types, properties that don’t exist on all of those types 
 aren’t guaranteed to exist on the object.

Just as how unions of literal and/or primitive types must be type narrowed to 
access properties that don’t exist on all type constituents, you’ll need to narrow those object type unions. */
