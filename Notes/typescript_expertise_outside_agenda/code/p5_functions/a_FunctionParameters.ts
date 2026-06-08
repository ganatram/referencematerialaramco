// Function Parameters

// Take the following sing function that takes in a song parameter and logs it:
/* function sing(song) {
  console.log(`Singing: ${song}!`);
} */

// What value type did the developer who wrote the sing function intend
// for the song parameter to be provided with?
// Is this code buggy? Who knows?!
// Without explicit type information declared, we may never know—TypeScript
// will consider it to be the any type, meaning the parameter’s type could be anything.
/* function sing(song: string) {
  console.log(`Singing: ${song}!`);
}
sing('hello'); */
