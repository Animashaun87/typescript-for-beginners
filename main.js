"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let message = "Welcome Back";
console.log(message);
let x = 0;
const y = 20;
let sum;
const title = 'revolution';
let isBeginner = true;
let total = 0;
let name = 'Abidemi';
let sentence = `My name is ${name}. I am a beginner in typescript`;
console.log(sentence);
let n = null;
let u = undefined;
let isNew = null;
let myName = undefined;
let list1 = [1, 2, 3];
let list2 = [1, 2, 3];
// let person1: [string, number] = ['Bidemi', 24];
let person1 = ['Bidemi', 1, 'Animashaun', 29, false];
console.log(person1);
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
let c = Color.Green;
console.log(c);
let randomValue = 10;
randomValue = true;
randomValue = 'Bidemi';
// let myVariable: any = 10;
// console.log(myVariable.name);
// myVariable();
// myVariable.toUpperCase();
let myVariable = 10;
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
myVariable.toUpperCase();
let a;
a = 10;
a = true;
let b = 20;
b = 50;
b = true;
let multiType;
multiType = 20;
multiType = true;
let anyType;
anyType = 20;
anyType = true;
//Function
// function add(num1: number, num2: string) {
//     return num1 + num2;
// }
// add(5, 10);
// add(5, '10');
function add(num1, num2 = 10) {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
add(5, 10);
add(5);
function fullName(person) {
    console.log(`${person.firstName} ${person.lastName}`);
}
// function fullName(person: {firstName: string, lastName: string}) {
//     console.log(`${person.firstName} ${person.lastName}`);
// }
let p = {
    firstName: 'Abidemi',
    lastName: 'Animashaun'
};
fullName(p);
