// Mixing Properties and Index signatures

// Interfaces are able to include explicitly named properties and catchall string
// index signatures, with one catch: each named property’s type must be
// assignable to its catchall index signature’s type. You can think of
// mixing them as telling TypeScript that named properties give a more specific type,
// and any other property falls back to the index signature’s type.

//______________________________________________________________________________________________________________

// eg 1
// Here, HistoricalNovels declares that all properties are type number,
// and additionally the Oroonoko property must exist to begin with:

/* interface HistoricalNovels {
  Oroonoko: number;
  [i: string]: number;
}

// Ok
const novels: HistoricalNovels = {
  Outlander: 1991,
  Oroonoko: 1688,
};

const missingOroonoko: HistoricalNovels = {
  Outlander: 1991,
};
// Error: Property 'Oroonoko' is missing in type
// '{ Outlander: number; }' but required in type 'HistoricalNovels'. */

// One common type system trick with mixed properties and index signatures is to
// use a more specific property type literal for the named property
// than an index signature’s primitive.

// As long as the named property’s type is assignable to the index signature’s
// —which is true for a literal and a primitive, respectively—TypeScript will allow it.

//______________________________________________________________________________________________________________

// eg 2
// Here, ChapterStarts declares that a property under preface must be 0 and all
// other properties have the more general number. That means any object adhering
//  to ChapterStarts must have a preface property equal to 0:

/* interface ChapterStarts {
  preface: 0;
  [i: string]: number;
}

const correctPreface: ChapterStarts = {
  preface: 0,
  night: 1,
  shopping: 5,
};

const wrongPreface: ChapterStarts = {
  preface: 1,
  // Error: Type '1' is not assignable to type '0'.
}; */

//______________________________________________________________________________________________________________
