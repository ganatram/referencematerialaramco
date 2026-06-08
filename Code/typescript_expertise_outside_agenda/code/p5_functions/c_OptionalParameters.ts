//Optional Parameters

//  TypeScript allows annotating a parameter as optional by adding a ? before the : in its type annotation
//  —similar to optional object type properties.

//_____________________________________________________________________________________________________
//eg -1

// In the following announceSong function, the singer parameter is marked optional. Its type is string | undefined,
//  and it doesn’t need to be provided by callers of the function.

//  If singer is provided, it may be a string value or undefined:

/* function announceSong(song: string, singer?: string) {
  console.log(`Song: ${song}`);

  if (singer) {
    console.log(`Singer: ${singer}`);
  }
}

announceSong('Greensleeves'); // Ok
announceSong('Greensleeves', undefined); // Ok
announceSong('Chandelier', 'Sia'); // Ok */

//_____________________________________________________________________________________________________

//eg -2
// The singer parameter in this announceSongBy function must be provided explicitly.
// It may be a string value or undefined:

/* function announceSongBy(song: string, singer: string | undefined) {
  // any code
}

announceSongBy('Greensleeves');
// Error: Expected 2 arguments, but got 1.

announceSongBy('Greensleeves', undefined); // Ok
announceSongBy('Chandelier', 'Sia'); // Ok */

//_____________________________________________________________________________________________________

//eg -3 Optional Parameters should be last in arguments

/* function announceSinger(singer?: string, song: string) {}
//                                       ~~~~
// Error: A required parameter cannot follow an optional parameter. */

//_____________________________________________________________________________________________________
