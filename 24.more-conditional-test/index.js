"use strict";
// enquality and inequality test 1
console.log("enquality test with strings : ", "Apple" === "Apple");
// enquality and inequality test 2
console.log("Inequality test with strings : ", "Apple" != "orange");
// test using the lower function
console.log("lower case function:", "HELLO".toLowerCase() === "hello");
// Numerical tests involving equality ,
console.log("equality test with numbers: ", 25 === 25);
// Numerical tests involving  inequality,
console.log("Inequality test with numbers: ", 25 != 35);
// greater than test
console.log("greater than test: ", 10 > 5);
// less than test
console.log("less than test: ", 5 < 10);
//  greater than or equal to
console.log("greater than and equal to test: ", 10 >= 10);
// less than or equal to
console.log("less than or equal to test: ", 5 <= 10);
// Tests using "and" operator
console.log("And operator tesr: ", 5 === 5 && 10 > 5);
// Tests using "or" operator
console.log("or  operator tesr: ", 5 === 5 || false);
// Test whether an item is in a array
const fruits = ['Apple', 'banana', 'grapes'];
console.log('test "Apple" in the array:', fruits.includes("Apple"));
// Test whether an item is not in a array
console.log('testing "Apple" is not in array:', !fruits.includes('testing "Apple" is not in array'));
