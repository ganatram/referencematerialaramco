//Discriminated Unions

/* Another popular form of union typed objects in JavaScript and TypeScript 
is to have a property on the object indicate what shape the object is. 

This kind of type shape is called a discriminated union, 
and the property whose value indicates the object’s type is a discriminant. 

TypeScript is able to perform type narrowing for code that type guards
 on discriminant properties. */

//______________________________________________________________________

/* type PoemWithPages = {
  name: string;
  pages: number;
  type: "pages"; // discriminant
};

type PoemWithRhymes = {
  name: string;
  rhymes: boolean;
  type: "rhymes"; // discriminant
};

type Poem = PoemWithPages | PoemWithRhymes;

const poem: Poem =
  Math.random() > 0.5
    ? { name: "The Double Image", pages: 7, type: "pages" }
    : { name: "Her Kind", rhymes: true, type: "rhymes" };

if (poem.type === "pages") {
  console.log(`It's got pages: ${poem.pages}`); // Ok
} else {
  console.log(`It rhymes: ${poem.rhymes}`);
}

poem.type; // Type: 'pages' | 'rhymes'

poem.pages; // not safe to use without checking the discriminant // refer line 32 -- a distinguishing feature or characteristic.

//   ~~~~~
// Error: Property 'pages' does not exist on type 'Poem'.
//   Property 'pages' does not exist on type 'PoemWithRhymes'. */
