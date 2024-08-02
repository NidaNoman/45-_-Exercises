"use strict";
// Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter 
// that collects as many items as the function call provides, and it should print a summary of the sandwich that is being
//  ordered. Call the function three times, using a different number of arguments each time.
function makesandwich(...items) {
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\nNow enjoy sandwich");
}
makesandwich("bread", "butter");
makesandwich("chicken", "cheese", "egg");
makesandwich("bread", "butter", "chicken", "tomato", "cheese", "egg", "mayo");
