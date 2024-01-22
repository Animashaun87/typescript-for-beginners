export {}
let message = "Welcome Back";
console.log(message);

let x = 0;
const y = 20;

let sum;
const title = 'revolution';

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Abidemi';

let sentence = `My name is ${name}. I am a beginner in typescript`;
console.log(sentence); 

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

// let person1: [string, number] = ['Bidemi', 24];
let person1: (string | number)[] = ['Bidemi', 1, 'Animashaun', 29, false];
console.log(person1);

enum Color {Red = 5, Green, Blue};
let c: Color = Color.Green;
console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = 'Bidemi';

// let myVariable: any = 10;
// console.log(myVariable.name);
// myVariable();
// myVariable.toUpperCase();

let myVariable: unknown = 10;
function hasName(obj: any): obj is { name: string } {
    return !!obj && typeof obj === "object" && "name" in obj
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}

(myVariable as string).toUpperCase();

let a;
a = 10;
a = true;

let b =20;
b = 50;
b = true;

let multiType: number | boolean;
multiType = 20;
multiType = true;

let anyType: any;
anyType = 20;
anyType = true;

//Function
// function add(num1: number, num2: string) {
//     return num1 + num2;
// }
// add(5, 10);
// add(5, '10');

function add(num1: number, num2: number = 10): number {
    if (num2) {
        return num1 + num2;
    } else {
        return num1;
    }
}
add(5, 10);
add(5);

//Interfaces
interface Person {
    firstName: string;
    lastName: string;
}

function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
}

// function fullName(person: {firstName: string, lastName: string}) {
//     console.log(`${person.firstName} ${person.lastName}`);
// }

let p = {
    firstName: 'Abidemi',
    lastName: 'Animashaun'
}

fullName(p);







