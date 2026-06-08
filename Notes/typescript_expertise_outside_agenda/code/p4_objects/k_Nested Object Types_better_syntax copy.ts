// Nested Object Types:
/* As JavaScript objects can be nested as members of other objects,
 TypeScript’s object types must be able to represent nested object types 
 in the type system. The syntax to do so is the same as before
  but with a { ... } object type instead of a primitive name. */

/* type Poem = {
  name: string;
};

type author = {
  // breaking author in it's own type - no nested objects !
  // breaking author in it's own type for better understanding of error msgs
  firstName: string;
  lastName: string;
};

// Ok
const poemMatch: author = {
  name: "Sylvia Plath",
};

const poemMismatch: Poem = {
  name: "Tulips",
};
 */
