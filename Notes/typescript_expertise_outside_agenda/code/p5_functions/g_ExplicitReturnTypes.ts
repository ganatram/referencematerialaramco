// "Explicit" Return Types

// As with variables, I generally recommend not bothering to explicitly declare the return types of functions
// with type annotations.

// Function declaration return type annotations are placed after the ) following the list of parameters.
//_____________________________________________________________________________________________________
//eg -1 - writing explicit return type of :number

/* function singSongsRecursive(songs: string[], count = 0): number {
  return songs.length ? singSongsRecursive(songs.slice(1), count + 1) : count;
}

console.log(singSongsRecursive(['song1', 'song2', 'song3'])); */

//_____________________________________________________________________________________________________
//eg -2 - writing explicit return type of : Date | undefined

// Here, the getSongRecordingDate function is explicitly declared as returning Date | undefined,
// but one of its return statements incorrectly provides a string:

/* function getSongRecordingDate(song: string): Date | undefined {
  switch (song) {
    case 'Strange Fruit':
      return new Date('April 20, 1939'); // Ok

    case 'Greensleeves':
      return 'unknown';
    // Error: Type 'string' is not assignable to type 'Date'.

    default:
      return undefined; // Ok
  }
}
 */
//_____________________________________________________________________________________________________
