let guest_list: string[] = ["noman ali", "omer noman", "ali noman"];
// for (let i = 0; i < guest_list.length; i++) {
//   console.log(
//     `Dear Mr ${guest_list[i]} ,\n\n It is our pleasure to invite you in our party. \n\n thank you!\n\n`
//   );
// }

let absent_Guest: string = "noman ali";
let new_Guest: string = "humair khan";
guest_list[0] = new_Guest;

// for (let i = 0; i < guest_list.length; i++) {
//   console.log(
//     `Dear Mr ${guest_list[i]} ,\n\n It is our pleasure to invite you in our party. \n\n thank you!\n\n`
//   );
// }
console.log(`MR ${absent_Guest} is not coming to the party.`);
console.log("Good News! we find big table so we are inviting 3 more guest. ");
guest_list.unshift("daniyal nagori");
guest_list.splice(2, 0, "ameen alam");
guest_list.push("hamza syed");

for (let i = 0; i < guest_list.length; i++) {
  console.log(
    `Dear Mr ${guest_list[i]} ,\n\n It is our pleasure to invite you in our party. \n\n thank you!\n\n`
  );
}
console.log(
  "\nsorry we can not arrange big table, only two peoples will be invited"
);
while (guest_list.length > 2) {
  let remove_guest = guest_list.pop();
  console.log(`sorry Mr. ${remove_guest} you are not invited for dinner`);
}

for (let i = 0; i < guest_list.length; i++) {
  console.log(
    `Dear Mr ${guest_list[i]} ,\n\n you are still invited.\n\n thank you!\n\n`
  );
}

guest_list.splice(0, 2);
console.log(guest_list);
