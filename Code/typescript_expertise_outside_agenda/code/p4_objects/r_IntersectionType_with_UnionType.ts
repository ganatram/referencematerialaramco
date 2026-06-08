//Intersection Types with Union Type

/* Intersection types can be combined with union types, which is sometimes useful
 to describe discriminated unions in one type. */

//______________________________________________________________________

// This ShortPoem type always has an author property, then is also a discriminated union on a type property:

/* 
type ShortPoem = { author: string } & (
  | { kigo: string; type: 'haiku' }
  | { meter: number; type: 'villanelle' }
);

// Ok
const morningGlory: ShortPoem = {
  author: 'Fukuda Chiyo-ni',
  kigo: 'Morning Glory',
  type: 'haiku',
};

const oneArt: ShortPoem = {
  author: 'Elizabeth Bishop',
  // meter:100,                       // intersection type + union + discriminates
  type: 'villanelle',
}; */

// Error: Type '{ author: string; type: "villanelle"; }'
// is not assignable to type 'ShortPoem'.
//   Type '{ author: string; type: "villanelle"; }' is not assignable to
//   type '{ author: string; } & { meter: number; type: "villanelle"; }'.
//     Property 'meter' is missing in type '{ author: string; type: "villanelle"; }'
//     but required in type '{ meter: number; type: "villanelle"; }'.

//______________________________________________________________________
