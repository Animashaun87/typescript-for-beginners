"use strict";
// const person: {
//     name: string;
//     age: number;
// } = {
//     name: "Bidemi",
//     age: 37,
// }
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     // role: [number, string]; tuple
// } = {
//     name: "Bidemi",
//     age: 37,
//     hobbies: ["sporty", "cooking"],
//     role: [10, 'author']
// }
// const person = {
//     name: "Bidemi",
//     age: 37,
//     hobbies: ["sporty", "cooking"],
//     role: [2, 'author']
// }
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
// const person = {
//     name: "Bidemi",
//     age: 37,
//     hobbies: ["sporty", "cooking"],
//     role: [2, 'author'],
// }
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
// enum Role { 
//     ADMIN = 'ADMIN',
//     READ_ONLY = 'READ_ONLY', 
//     AUTHOR = 'AUTHOR',
//  }
const person = {
    name: "Bidemi",
    age: 37,
    hobbies: ["sporty", "cooking"],
    role: Role.ADMIN,
};
let favouriteActivities;
favouriteActivities = ["Sports"];
console.log(person);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
