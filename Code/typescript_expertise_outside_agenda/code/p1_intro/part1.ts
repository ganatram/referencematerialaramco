/* eg 1 
Typescript Type checker 
& language service in action -- length is not a function , its just a number property 
Havent added any typescript as yet */
/* const firstName = "Georgia";
const nameLength = firstName.length(); */

//                           ~~~~~~
// This expression is not callable.

//___________________________________________________________________________

//eg 2 - wrong number of arguments.

// Previously: sayMyName(firstName, lastName) { ...
/* function sayMyName(fullName) {
  console.log(`You acting kind of shady, ain't callin' me ${fullName}`);
}

sayMyName("Beyoncé", "Knowles"); */
//                   ~~~~~~~~~
// Expected 1 argument, but got 2.

//___________________________________________________________________________

//eg 3 - strong developer tooling

// "test"/se

//or

/* interface Painter {
  finish: boolean;
  ownMaterials: string;
}


let inst1:Painter={
    finish: false,
    ownMaterials: "Yes"
}
 */

//___________________________________________________________________________

//eg 4 Compiling Syntax - immediately shows you compiled js

/* const artist: string = "Augusta Savage";
const id: number = 100;

console.log(artist + id); */

//___________________________________________________________________________

//eg 4 Getting started locally

// npm i -g typescript

// tsc --version

//create a new folder intro
// tsc --init

// Try adding a file named index.ts with the following contents:
// console.blub("Nothing is worth more than laughter.");

// tsc index.ts
// note even though there are type errors still .js file was produced for production

// Note - VS code detects the tsconfig.json and sets our development environment to typescript automatically

//___________________________________________________________________________

// summary

/* A brief history of JavaScript

JavaScript’s pitfalls: costly freedom, loose documentation, and weaker developer tooling

What TypeScript is: a programming language, a type checker, a compiler, and a language service

TypeScript’s advantages: freedom through restriction, precise documentation, and stronger developer tooling

Getting started writing TypeScript code on the TypeScript Playground and locally on your computer

What TypeScript is not: a remedy for bad code, extensions to JavaScript (mostly), slower than JavaScript, or finished evolving */
