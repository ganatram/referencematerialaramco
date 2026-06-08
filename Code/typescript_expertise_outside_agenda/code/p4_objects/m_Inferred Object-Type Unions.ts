//Inferred Object-Type Unions
/* If a variable is given an initial value that could be one of multiple object types,
 TypeScript will infer its type to be a union of object types.
  That union type will have a constituent for each of the possible object shapes.
   Each of the possible properties on the type will be present in each 
   of those constituents, though they’ll be ? optional types on any type
    that doesn’t have an initial value for them. */

//___________________________________________________________________________

/* const poem =
  Math.random() > 0.5
    ? { name: "The Double Image", pages: 7 }
    : { name: "Her Kind", rhymes: true };
// Type:
// {
//   name: string;
//   pages: number;
//   rhymes?: undefined;
// }
// |
// {
//   name: string;
//   pages?: undefined;
//   rhymes: boolean;
// }

poem.name; // string
poem.pages; // number | undefined
poem.rhymes; // boolean | undefined */

//___________________________________________________________________________
