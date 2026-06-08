//Return Types

// TypeScript is perceptive: if it understands all the possible values returned by a function,
// it’ll know what type the function returns.

//_____________________________________________________________________________________________________
//eg -1

// In this example, singSongs is understood by TypeScript to return a number:

// Type: (songs: string[]) => number
/* function singSongs(songs: string[]) {
  for (const song of songs) {
    console.log(`${song}`);
  }

  return songs.length;
}

let person: (songs: string[]) => number;

person = function (songs: string[]): number {
  return songs.length;
};

console.log(person(['hi', 'hello', 'hola'])); // Output: 3 */

//_____________________________________________________________________________________________________

//eg -2 -  function contains multiple return statements with different values

// If a function contains multiple return statements with different values,
// TypeScript will infer the return type to be a union of all the possible returned types.

// This getSongAt function would be inferred to return string | undefined because
// its two possible returned values are typed string and undefined, respectively:

// Type: (songs: string[], index: number) => string | undefined
/* function getSongAt(songs: string[], index: number) {
  return index < songs.length ? songs[index] : undefined;
}

const playlist = ['Bohemian Rhapsody', 'Imagine', 'Hotel California'];

const first = getSongAt(playlist, 0); // 'Bohemian Rhapsody'
const second = getSongAt(playlist, 1); // 'Imagine'
const invalid = getSongAt(playlist, 5); // undefined

console.log(first); // 'Bohemian Rhapsody'
console.log(second); // 'Imagine'
console.log(invalid); // undefined */
