// Turn your if-else chain from Exercise 5-4 into an if-else chain.
// Write three versions of this program, making sure each message is printed for the appropriate color alien.
let alien_color: string = "green";

// If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// version 1 of the program
if (alien_color === "green") {
  console.log("version 1: player earned 5 points.");
} else if (alien_color === "yellow") {
  console.log("player earned 10 points.");
} else if (alien_color === "red") {
  console.log("player earned 15 points.");
} else {
  console.log("please select right color");
}
// version 2 of the program
alien_color = "yellow";
if (alien_color === "green") {
  console.log("player earned 5 points.");
} else if (alien_color === "yellow") {
  console.log("version 2: player earned 10 points.");
} else if (alien_color === "red") {
  console.log("player earned 15 points.");
} else {
  console.log("please select right color");
}

// version 3 of the program
alien_color = "red";
if (alien_color === "green") {
  console.log("player earned 5 points.");
} else if (alien_color === "yellow") {
  console.log("player earned 10 points.");
} else if (alien_color === "red") {
  console.log("version 3: player earned 15 points.");
} else {
  console.log("please select right color");
}
