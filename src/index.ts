// Basic types
let id: number = 5;

let developer: string = "coded hola";

let is_developer: boolean = true;

let languages: string[] = ["javascript", "typescript"];

let profile_card: any[] = ["developer", 23, true]

// Tuple
let person: [number, string, boolean] = [1, 'Brad', true]
// Tuple Array
let employees: [number, string][]

employees = [
  [1, 'Brad'],
  [2, 'John'],
  [3, 'Jill'],
]

// Enums
enum gender {
    male = "male",
    female = "female"
}

// Objects
type User = {
    id: number | string, // EITHER
    name: string,
    designer?: boolean  // OPTIONAL DECLEARATION
}

const Hola: User = {
    id: 10001,
    name: "coded hola"
}

const davio: User = {
    id: 10003,
    name: "davio whites",
    designer: true
}

// Function
function addition(x: number, y: number): number {
    return x + y
}

function sayHello(name: string): string {
    return `hi my name is ${name}, saying hello to the typescript community`
}


// Interfaces
interface RoleInterface {
    stack: string,
    readonly experience: number,
    remote?: boolean
}

const hammad: RoleInterface = {
    stack: "frontend",
    experience: 4,
    remote: true
}


