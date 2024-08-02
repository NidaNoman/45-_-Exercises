"use strict";
// Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
//  Because the original array will be unchanged, return the new array and store it in a separate array. Call
//   show_magicians() with each array to show that you have one array of the original names and one array with the Great
//    added to each magician’s name.
let magicians_names = ["harry potter", "hermione granger", "ron weasley", "albus dumbledore",];
function copyArray(arr) {
    return [...arr];
}
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = "the great" + " " + magicianArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach((Element) => {
        console.log(Element);
    });
}
const copyMagicianArray = copyArray(magicians_names);
make_great(copyMagicianArray);
console.log('\n\nthis is my original array');
show_magicians(magicians_names);
console.log('\n\nthis is my modified copy of the array');
show_magicians(copyMagicianArray);
