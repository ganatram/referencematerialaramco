/* // Type Alias example
// programmatic reference for Type Shape

type Poet = {
  born: number;
  name: string;
};

let poetLater: Poet;

// Ok
poetLater = {
  born: 1935,
  name: "Sara Teasdale",
};

poetLater = "Emily Dickinson";
// Error: Type 'string' is not assignable to type 'Poet'.

 */
