// Object Type Enforcement
/* When providing a value to a location annotated with an object type, TypeScript will check
 that the value is assignable to that object type. To start,
  the value must have the object type’s required properties.
  
  If any member required on the object type is missing in the object, TypeScript will issue a type error. */

//_____________________________________________________________________

/* type FirstAndLastNames = {
  first: string;
  last: string;
};

// Ok
const hasBoth: FirstAndLastNames = {
  first: "Sarojini",
  last: "Naidu",
};

// doesnt work --- TypeScript is strict when you directly assign an object literal to a type.
const hasOnlyOne: FirstAndLastNames = {
  first: "Sappho",
};
// Property 'last' is missing in type '{ first: string; }'
// but required in type 'FirstAndLastNames'.

//works -- You're assigning an existing value that is structurally compatible. excess property compatibility - structural typing
const hasOnlyOne1: FirstAndLastNames = hasBoth; */
