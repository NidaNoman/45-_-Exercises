"use strict";
// Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array
//  of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has
//   actually been modified.
let magicians_names = ["harry potter", "hermione granger", "ron weasley", "albus dumbledore",
];
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magicians_names[i] = "the great" + " " + magicianArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach((Element) => {
        console.log(Element);
    });
}
make_great(magicians_names);
show_magicians(magicians_names);
