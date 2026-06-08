// Arrays

// TypeScript respects the best practice of keeping to one data type per array
// by remembering what type of data is initially inside an array,
// and only allowing the array to operate on that kind of data.

//_____________________________________________________________________________________________

// eg -1

// TypeScript knows the warriors array initially contains string typed values,
// so while adding more string typed values is allowed,
// adding any other type of data is not:

/* const warriors = ["Artemisia", "Boudica"];

// Ok: "Zenobia" is a string
warriors.push("Zenobia");

warriors.push(true);
//            ~~~~
// Argument of type 'boolean' is not assignable to parameter of type 'string'. */

//_____________________________________________________________________________________________
