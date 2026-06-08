/* //type Alias - reusing !

// Type Alias - named reference for type shape ! 

// Introducing Type Alias
// Reusable named type
// Best for maintainability and clarity

type poetAlias = {
  born: number;
  name: string;
};

// ___________________________________________________

// Reusing poetAlias - works directly 'no need of typealias prefix'

let p5: poetAlias = {
  born: 2035,
  name: "Mary Oliver",
};

let p6: poetAlias = {
  born: 1940,
  name: "Yennifer Jaimes",
};
 */

/* Most TypeScript projects prefer using the interface keyword to describe object types,
 which is a feature I will cover late.  */

/*  Aliased object types and interfaces are almost identical: everything in this
part applies to interfaces as well. - but there are some differences as well  */
