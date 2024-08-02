"use strict";
let guest_list = ["noman ali", "omer noman", "ali noman"];
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Dear Mr ${guest_list[i]} ,\n\n It is our pleasure to invite you in our party. \n\n thank you!\n\n`);
}
let absent_Guest = "noman ali";
let new_Guest = "humair khan";
guest_list[0] = new_Guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Dear Mr ${guest_list[i]} ,\n\n It is our pleasure to invite you in our party. \n\n thank you!\n\n`);
}
console.log(`MR ${absent_Guest} is not coming to the party.`);
