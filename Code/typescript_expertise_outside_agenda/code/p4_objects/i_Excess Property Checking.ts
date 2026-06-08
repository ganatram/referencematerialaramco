// Excess Property Checking
/* TypeScript will report a type error if a variable is declared with an object type 
and its initial value has more fields than its type describes.

Therefore, declaring a variable to be of an object type is a way of getting the 
type checker to make sure it has only the expected fields on that type. */

//__________________________________________________________________________
/* type Poet = {
  born: number;
  name: string;
};

// Ok: all fields match what's expected in Poet
const poetMatch: Poet = {
  born: 1928,
  name: 'Maya Angelou',
};

const extraProperty: Poet = {
  activity: 'walking',
  born: 1935,
  name: 'Mary Oliver',
};

// Error: Type '{ activity: string; born: number; name: string; }'
// is not assignable to type 'Poet'.
//   Object literal may only specify known properties,
//   and 'activity' does not exist in type 'Poet'.

const existingObject = {
  activity: 'walking',
  born: 1935,
  name: 'Mary Oliver',
};

const extraPropertyButOk: Poet = existingObject; // Ok - as its not OL but named reference */
//__________________________________________________________________________
