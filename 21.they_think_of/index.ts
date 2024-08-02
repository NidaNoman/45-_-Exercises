// Write a program that creates a list containing these items.
interface items {
  name: string;
  price: number;
}
const book: items = {
  name: "essential typescript",
  price: 450,
};

const mobilephones: items = {
  name: "samsung A24",
  price: 70000,
};
console.log(book);
console.log(mobilephones);
