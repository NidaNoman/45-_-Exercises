let guest_list: string[] = ["noman ali", "omer noman", "ali noman"];
// for (let i = 0; i < guest_list.length; i++) {
//   console.log(
//     `Dear Mr ${guest_list[i]} ,\n\n It is our pleasure to invite you in our party. \n\n thank you!\n\n`
//   );
// }

let absent_Guest: string = "noman ali";
let new_Guest: string = "humair khan";
guest_list[0] = new_Guest;

for (let i = 0; i < guest_list.length; i++) {
  console.log(
    `Dear Mr ${guest_list[i]} ,\n\n It is our pleasure to invite you in our party. \n\n thank you!\n\n`
  );
}
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
