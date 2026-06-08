// "Explicit" Return Types
// As with variables, I generally recommend not bothering to explicitly declare the return types of functions
// with type annotations.
// Function declaration return type annotations are placed after the ) following the list of parameters.
//_____________________________________________________________________________________________________
//eg -1
function singSongsRecursive(songs, count) {
    if (count === void 0) { count = 0; }
    return songs.length ? singSongsRecursive(songs.slice(1), count + 1) : count;
}
console.log(singSongsRecursive(['song1', 'song2', 'song3']));
//_____________________________________________________________________________________________________
