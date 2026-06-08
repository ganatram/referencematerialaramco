// Numeric Index Signatures

// Interfaces are able to include explicitly named properties and catchall string
// index signatures, with one catch: each named property’s type must be
// assignable to its catchall index signature’s type. You can think of
// mixing them as telling TypeScript that named properties give a more specific type,
// and any other property falls back to the index signature’s type.

//______________________________________________________________________________________________________________

// eg 1

// Numeric index signatures
// Although JavaScript implicitly converts object property lookup keys to strings,
//  it is sometimes desirable to only allow numbers as keys for an object.

//  TypeScript index signatures can use a number type instead of string
//  but with the same catch as named properties that their types
//  must be assignable to the catchall string index signature’s.

// The following MoreNarrowNumbers interface would be allowed because string
// is assignable to string | undefined, but MoreNarrowStrings would not
// because string | undefined is not assignable to string:

// Ok
/* interface MoreNarrowNumbers {
  [i: number]: string;
  [i: string]: string | undefined;
}

// Ok
const mixesNumbersAndStrings: MoreNarrowNumbers = {
  0: "",
  key1: "",
  key2: undefined,
};

interface MoreNarrowStrings {
  [i: number]: string | undefined;
  // Error: 'number' index type 'string | undefined'
  // is not assignable to 'string' index type 'string'.
  [i: string]: string; */
//}

//______________________________________________________________________________________________________________

// eg 2

//______________________________________________________________________________________________________________
