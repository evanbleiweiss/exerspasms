 // Hello World
 // Exercise 1 of 18

// # Task

// Write a function that takes an input string and returns it uppercased.

// ## Arguments

//   * input: a String of random words (lorem ipsum).

// ## Boilerplate

//     function upperCaser(input) {
//       // SOLUTION GOES HERE
//     }
    
//     module.exports = upperCaser


//  » To print these instructions again, run: functional-javascript print
//  » To execute your program in a test environment, run: functional-javascript run program.js
//  » To verify your program, run: functional-javascript verify program.js
//  » For help run: functional-javascript help


function upperCaser(input) {
    if (typeof(input) === "string") {
        return input.toUpperCase();
    }
}

module.exports = upperCaser


// Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────
//     module.exports = function(input) {
//       return input.toUpperCase()
//     }

// ────────────────────────────────────────────────────────────────────────────────
