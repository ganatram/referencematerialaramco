/* type Poet = {
  born: number;
  name: string;
};

// Ok: all fields match what's expected in Poet
const poetMatch: Poet = {
  born: 1928,
  name: "Maya Angelou",
};

const namedReference = {
  activity: "walking",
  born: 1935,
  name: "Mary Oliver",
};

// const extraProperty: Poet = {
//   activity: "walking",
//   born: 1935,
//   name: "Mary Oliver",
// };

// Error: Type '{ activity: string; born: number; name: string; }'
// is not assignable to type 'Poet'.
//   Object literal may only specify known properties,
//   and 'activity' does not exist in type 'Poet'.

const extraProperty1: Poet = namedReference;

console.log(extraProperty1);

// tsc index.ts

// node index.js
 */
