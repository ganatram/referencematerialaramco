//Intersection Types

/* TypeScript’s | union types represent the type of a value that could be one of two or more different types.
 Just as JavaScript’s runtime | operator acts as a counterpart to its & operator,

  TypeScript allows representing a type that is multiple types at the same time:
   an & intersection type. Intersection types are typically used with aliased object types
    to create a new type that combines multiple existing object types. */

//______________________________________________________________________

/* The following Artwork and Writing types are used to form a combined WrittenArt type
 that has the properties genre, name, and pages: */
//eg 1

/* type Artwork = {
  genre: string;
  name: string;
};

type Writing = {
  pages: number;
  name: string;
};

type WrittenArt = Artwork & Writing;
// Equivalent to:
// {
//   genre: string;
//   name: string;
//   pages: number;
// }

let Art: WrittenArt = {
  genre: "classic",
  name: "Picasso",
  pages: 500,
}; */

//______________________________________________________________________
