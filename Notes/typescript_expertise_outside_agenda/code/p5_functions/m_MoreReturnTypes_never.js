// More Return Types
// Now, let’s look at one return type: never
// Some functions not only don’t return a value, but aren’t meant to return at all.
// Never-returning functions are those that always throw an error or
// run an infinite loop (hopefully intentionally!).
// If a function is meant to never return, adding an explicit : never type annotation
// indicates that any code after a call to that function won’t run.
// This fail function only ever throws an error, so it can help TypeScript’s control
// flow analysis with type narrowing param to string:
//_____________________________________________________________________________________________________
//eg - 1 - never Return Type
// This fail function only ever throws an error, so it can help TypeScript’s control
// flow analysis with type narrowing param to string:
// Example: never Return Type in TypeScript
// This function never returns: it throws an error, so its return type is `never`.
function fail(message) {
    throw new Error("Invariant failure: ".concat(message, "."));
}
// This function accepts an unknown input and ensures it's a string.
// If not, it uses `fail()` to throw — which helps TypeScript narrow the type.
function workWithUnsafeParam(param) {
    if (typeof param !== 'string') {
        fail("param should be a string, not ".concat(typeof param));
    }
    // At this point, TypeScript knows `param` is a string
    console.log(param.toUpperCase()); // Safe to use string methods
}
// Valid input
workWithUnsafeParam('hello'); // Output: HELLO
// Invalid input
workWithUnsafeParam(42); // Throws Error: Invariant failure: param should be a string, not number.
//_____________________________________________________________________________________________________
