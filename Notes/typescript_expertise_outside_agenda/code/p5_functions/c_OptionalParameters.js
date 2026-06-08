//Optional Parameters
//  TypeScript allows annotating a parameter as optional by adding a ? before the : in its type annotation
//  —similar to optional object type properties.
//_____________________________________________________________________________________________________
// In the following announceSong function, the singer parameter is marked optional. Its type is string | undefined,
//  and it doesn’t need to be provided by callers of the function.
//  If singer is provided, it may be a string value or undefined:
function announceSong(song, singer) {
    console.log("Song: ".concat(song));
    if (singer) {
        console.log("Singer: ".concat(singer));
    }
}
announceSong('Greensleeves'); // Ok
announceSong('Greensleeves', undefined); // Ok
announceSong('Chandelier', 'Sia'); // Ok
//_____________________________________________________________________________________________________
