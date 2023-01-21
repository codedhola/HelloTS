"use strict";
// Basic types
let id = 5;
let developer = "coded hola";
let is_developer = true;
let languages = ["javascript", "typescript"];
let profile_card = ["developer", 23, true];
// Tuple
let person = [1, 'Brad', true];
// Tuple Array
let employees;
employees = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill'],
];
// Enums
var gender;
(function (gender) {
    gender["male"] = "male";
    gender["female"] = "female";
})(gender || (gender = {}));
const Hola = {
    id: 10001,
    name: "coded hola"
};
const davio = {
    id: 10003,
    name: "davio whites",
    designer: true
};
// Function
function addition(x, y) {
    return x + y;
}
function sayHello(name) {
    return `hi my name is ${name}, saying hello to the typescript community`;
}
const hammad = {
    stack: "frontend",
    experience: 4,
    remote: true
};
// OOP
class users {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
}
const hopkins = new users("hopkins", "hopkin@gmail.com");
console.log(hopkins);
