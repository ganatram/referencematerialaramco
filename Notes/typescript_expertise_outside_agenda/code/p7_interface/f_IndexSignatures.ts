// Index Signatures

// Some JavaScript projects create objects meant to store values under any arbitrary string key.
//  For these “container” objects, declaring an interface with a field for
//  every possible key would be impractical or impossible.

// TypeScript provides a syntax called an index signature to indicate that an interface’s objects
// are allowed to take in any key and give back a certain type under that key.

// They’re most commonly used with string keys because JavaScript object property lookups
//  convert keys to strings implicitly. An index signature looks like a
//  regular property definition but with a type after the key,
//  and array brackets surrounding them, like { [i: string]: ... }.

//______________________________________________________________________________________________________________

// eg 1
// This WordCounts interface is declared as allowing any string key with a number value.
//  Objects of that type aren’t bound to receiving any particular key—as long as the value is a number:

/* interface WordCounts {
  [i: string]: number;
}

const counts: WordCounts = {};

counts.apple = 0; // Ok
counts.banana = 1; // Ok

counts.cherry = false;
// Error: Type 'boolean' is not assignable to type 'number'.

// Index signatures are convenient for assigning values to an object
// but aren’t completely type safe. They indicate that an object should
// give back a value no matter what property is being accessed. */

//______________________________________________________________________________________________________________

// eg 2

// This publishDates value safely gives back Frankenstein as a Date but tricks TypeScript
//  into thinking its Beloved is defined even though it’s undefined:

/* interface DatesByName {
  [i: string]: Date;
}

const publishDates: DatesByName = {
  Frankenstein: new Date("1 January 1818"),
};

publishDates.Frankenstein; // Type: Date
console.log(publishDates.Frankenstein.toString()); // Ok

publishDates.Beloved; // Type: Date, but runtime value of undefined!
console.log(publishDates.Beloved.toString()); // Ok in the type system, but...
// Runtime error: Cannot read property 'toString'
// of undefined (reading publishDates.Beloved)
 */
// When possible, if you’re looking to store key-value pairs and the keys aren’t known ahead of time,
//  it is generally safer to use a Map. Its .get method always returns a type with | undefined
//  to indicate that the key might not exist.

//______________________________________________________________________________________________________________
