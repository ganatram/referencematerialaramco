// Narrowing Object Types

/* If the type checker sees that an area of code can only be run if a union typed value
contains a certain property, it will narrow the value’s type to only the constituents
 that contain that property. In other words, TypeScript’s type narrowing will apply to
  objects if you check their shape in code.

Continuing the explicitly typed poem example, check whether "pages" in poem acts as 
a type guard for TypeScript to indicate that it is a PoemWithPages. 
If poem is not a PoemWithPages, then it must be a PoemWithRhymes: */

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

poem.rhymes; 
//   ~~~~~~
// Property 'rhymes' does not exist on type 'Poem'.
//   Property 'rhymes' does not exist on type 'PoemWithPages'.
 */

//..........................................................
/* if (poem.pages) { /* ... */ //}
//       ~~~~~
// Property 'pages' does not exist on type 'Poem'.
//   Property 'pages' does not exist on type 'PoemWithRhymes'. */

/* if ("pages" in poem) {  // in operator works here as a typeguard 
    poem.pages; // Ok: poem is narrowed to PoemWithPages
} else {
    poem.rhymes; // Ok: poem is narrowed to PoemWithRhymes
} */
