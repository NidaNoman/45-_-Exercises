// Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name
// of each magician in the array.
let magicians_names: string[] = ["harry potter","hermione granger","ron weasley", "albus dumbledore",];
function show_magicians(magicians: string[]) {
  magicians.forEach((Element) => {
    console.log(Element);
  });
}
show_magicians(magicians_names);
