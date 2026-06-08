// Nested Object Types:
/* As JavaScript objects can be nested as members of other objects,
 TypeScript’s object types must be able to represent nested object types 
 in the type system. The syntax to do so is the same as before
  but with a { ... } object type instead of a primitive name. */

/* type Poem = {
  author: {
    firstName: string;
    lastName: string;
  };
  name: string;
};

// Ok
const poemMatch: Poem = {
  author: {
    firstName: "Sylvia",
    lastName: "Plath",
  },
  name: "Lady Lazarus",
};

const poemMismatch: Poem = {
  author: {
    name: "Sylvia Plath",
  },
  // Error: Type '{ name: string; }' is not assignable
  // to type '{ firstName: string; lastName: string; }'.
  //   Object literal may only specify known properties, and 'name'
  //   does not exist in type '{ firstName: string; lastName: string; }'.
  name: "Tulips",
};
 */
