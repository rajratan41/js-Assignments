//Declare a varibale and assign string value to it and then split it into an array using split() method

// String
let str = "I'm String"
console.log("This is String -");
console.log(str);

// split()
let split = str.split()
console.log("This is String inside Array -");
console.log(split);

// split (seperator)

let sep = str.split(" ")
console.log("string sepreted inside Array -");
console.log(sep);

// split (seperator, limt) 
let sepe = "Hello how are you"
let sepLimit = sepe.split(" ", 2)
console.log("string sepreted with limit inside Array -");
console.log(sepLimit);


// Outputs are-

// This is String -
// I'm String

// This is String inside Array -
// [ "I'm String" ]

// string sepreted inside Array -
// [ "I'm", 'String' ]

// string sepreted with limit inside Array -
// [ 'Hello', 'how' ]