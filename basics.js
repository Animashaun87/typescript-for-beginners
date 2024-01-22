"use strict";
let firtName = "Bidemi";
let total = 1200;
let isBeginner = true;
let n = null;
let u = undefined;
let list = [1, 2, 3, 4, 5];
let person1 = ["Bidemi", 23];
// let person1: (string | number)[] = ["Seun", 1, "Ogidan", 5];
function add(n1, n2, showResult, phrase) {
    // if (typeof n1 === "number" && typeof n2 === "number") {
    //     return n1 + n2;
    // }
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";
add(number1, number2, printResult, resultPhrase);
