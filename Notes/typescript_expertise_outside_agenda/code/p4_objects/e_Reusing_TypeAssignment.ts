/* //type assignment - reusing !

let poetAssignment: {
  born: number;
  name: string;
};

// ___________________________________________________

// Reusing poetAssignment - doesnt work directly

let p3: typeof poetAssignment = {
  born: 1935,
  name: "Mary Oliver",
};

let p4: typeof poetAssignment = {  
  born: 2002,
  name: "something else ",
};

// Reusing poetAssignment - works with typeof

let p3: typeof poetAssignment = {
  born: 1935,
  name: "Mary Oliver",
};

let p4: typeof poetAssignment = {
  born: 1940,
  name: "Yennifer Jaimes",
};
 */
