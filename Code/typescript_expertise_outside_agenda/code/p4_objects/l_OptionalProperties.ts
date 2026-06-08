//Optional Properties

/* Object type properties don’t all have to be required in the object. 
You can include a ? before the : in a type property’s type annotation
 to indicate that it’s an optional property.
 */

//______________________________________________________________________
//eg 1
/* type Book = {
  author: string;
  pages?: number;
};

// Ok
const ok: Book = {
  author: "Rita Dove",
  pages: 80,
};

const missing: Book = {
  author: "Rita Dove", // author is mandatory
  // pages are optional ,
};
 */

//______________________________________________________________________
//eg 2 undefined is not the same as optional
/* type Writers = {
  author: string | undefined;
  editor?: string;
};

// Ok: author is provided as undefined
const hasRequired: Writers = {
  author: undefined,
};

const missingRequired: Writers = {
  //author: "undefined", // undefined types should be explictly mentioned and are not optional .
}; */
