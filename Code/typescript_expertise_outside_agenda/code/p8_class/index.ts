// eg 1
/* class Greeter {
  greet(name: string) {
    console.log(`${name}, do your stuff!`);
  }
}

new Greeter().greet("Miss Frizzle"); // Ok

new Greeter().greet();
//            ~~~~~
// Error: Expected 1 arguments, but got 0. */

//______________________________________________________________________________

// eg - 2;

/* class Greeted {
    constructor(message: string) {
        console.log(`As I always say: ${message}!`);
    }
}

new Greeted("take chances, make mistakes, get messy");

new Greeted();
// Error: Expected 1 arguments, but got 0. */

//______________________________________________________________________________

// eg - 3 Class properties :

// To read from or write to a property on a class in TypeScript, it must be explicitly declared in the class.

/* class FieldTrip {
  destination: string;

  constructor(destination: string) {
    this.destination = destination; // Ok
    console.log(`We're going to ${this.destination}!`);

    this.nonexistent = destination;
    //   ~~~~~~~~~~~
    // Error: Property 'nonexistent' does not exist on type 'FieldTrip'.
  }
} */

//______________________________________________________________________________

// eg - 4 Class properties : not allowed non explicit properties in instance

/* class FieldTrip {
  destination: string;

  constructor(destination: string) {
    this.destination = destination; // Ok
    console.log(`We're going to ${this.destination}!`);

    this.nonexistent = destination;
    //   ~~~~~~~~~~~
    // Error: Property 'nonexistent' does not exist on type 'FieldTrip'.
  }
}

const trip = new FieldTrip("planetarium");

trip.destination; // Ok

trip.nonexistent;
//   ~~~~~~~~~~~
// Error: Property 'nonexistent' does not exist on type 'FieldTrip'.
 */

//______________________________________________________________________________

// eg - 5 Class properties : Function Properties

/* class WithPropertyParameters {
    takesParameters = (input: boolean) => input ? "Yes" : "No";
}

const instance = new WithPropertyParameters();

instance.takesParameters(true); // Ok

instance.takesParameters(123);
//                       ~~~
// Error: Argument of type 'number' is not
// assignable to parameter of type 'boolean'.

// Function properties can be given parameters and return types using the same syntax as class methods 
// and standalone functions. After all, they’re a value assigned to a class member and the value happens to be a function. */

//______________________________________________________________________________

// eg -6 Initialization Checking

// With strict compiler settings enabled, TypeScript will check that each property declared whose
// type does not include undefined is assigned a value in the constructor. This strict initialization
// checking is useful because it prevents code from accidentally forgetting to assign a value to a class property.

// The following WithValue class does not assign a value to its unused property, which TypeScript
// recognizes as a type error:

/* class WithValue {
  immediate = 0; // Ok
  later: number; // Ok (set in the constructor)
  mayBeUndefined: number | undefined; // Ok (allowed to be undefined)

  unused: number;
  // Error: Property 'unused' has no initializer
  // and is not definitely assigned in the constructor.

  constructor() {
    this.later = 1;
  }
}
 */
//______________________________________________________________________________

// eg -7 Definitely assigned properties

// If you are absolutely sure a property should not have strict initialization checking applied to it,
// you can add a ! after its name to disable the check

// Although strict initialization checking is useful most of the time, you may come across some
// cases where a class property is intentionally able to be unassigned after the class constructor

// This ActivitiesQueue class is meant to be re-initialized any number of times separately from its constructor,
//  so its pending property must be asserted with a !:

/* class ActivitiesQueue {
  pending!: string[]; // Ok

  initialize(pending: string[]) {
    this.pending = pending;
  }

  next() {
    return this.pending.pop();
  }
}

const activities = new ActivitiesQueue();

activities.initialize(["eat", "sleep", "learn"]);
activities.next(); */

//______________________________________________________________________________

// eg -8 Optional Properties

/* class MissingInitializer {
    property?: string;
}

new MissingInitializer().property?.length; // Ok

new MissingInitializer().property.length;
// Error: Object is possibly 'undefined'. */

//______________________________________________________________________________

// eg - 9 Read-Only Properties

/* class Quote {
  readonly text: string;

  constructor(text: string) {
    this.text = text;
  }

  emphasize() {
    this.text += "!";
    //   ~~~~
    // Error: Cannot assign to 'text' because it is a read-only property.
  }
}

const quote = new Quote(
  "There is a brilliant child locked inside every student."
);

quote.text = "Ha!";
// Error: Cannot assign to 'text' because it is a read-only property. */

//______________________________________________________________________________

/* class RandomQuote {
    readonly explicit: string = "Home is the nicest word there is.";
    readonly implicit = "Home is the nicest word there is.";

    constructor() {
        if (Math.random () > 0.5) {
            this.explicit = "We start learning the minute we're born." // Ok;

            this.implicit = "We start learning the minute we're born.";
            // Error: Type '"We start learning the minute we're born."' is
            // not assignable to type '"Home is the nicest word there is."'.
        }
    }
}

const quote = new RandomQuote();

quote.explicit; // Type: string
quote.implicit; // Type: "Home is the nicest word there is." */

//______________________________________________________________________________

// eg - 9  // Classes as Types

/* class Teacher {
    sayHello() {
        console.log("Take chances, make mistakes, get messy!");
    }
}

let teacher: Teacher;

teacher = new Teacher(); // Ok

teacher = "Wahoo!";
// Error: Type 'string' is not assignable to type 'Teacher'. */

//______________________________________________________________________________

// eg - 10

/* class SchoolBus {
    getAbilities() {
        return ["magic", "shapeshifting"];
    }
}

function withSchoolBus(bus: SchoolBus) {
    console.log(bus.getAbilities());
}

withSchoolBus(new SchoolBus()); // Ok

// Ok
withSchoolBus({
    getAbilities: () => ["transmogrification"],
});

withSchoolBus({
    getAbilities: () => 123,
    //                  ~~~
    // Error: Type 'number' is not assignable to type 'string[]'.
}); */

//______________________________________________________________________________
