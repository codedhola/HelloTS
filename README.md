# HelloTS
Beginning typescript

## *TYPES*
Typescript supports types inferrence by default i.e it declare the type is not given from beginning, to declare your explicit types you use a column then the type you want to be given

**BASIC TYPES**
```ts
    let name: string = "Coded hola"         // given a string type
    let age: number = 23                    // given a int value
    let is_developer: boolean = true        // boolean type given
    let user_id: number|string = "828383928-84838" //  A union type
    let unknown: any;                       // could be mutated and modified

``` 

**OBJECT TYPES**

```ts
    // Arrays
    let hobbies: string[] = ["play games", "code"]
    let user_data: (string|boolean)[] = ["front-end", true, "javascript"] // A union Array type
    let all_data: any[] = ["coded", "javascript", true, 23, null]   // 'any' type accepts all

    // OBJECTS
    let dev_data: object;
    dev_data = { name: "Hola", stack: "backend-dev"}

    let data: {
        name: string,
        dev_stack: string,
        age: number,
        remote?: boolean  // '?' syntax makes the remote instance optional
    }

    data = {
        name: "cypher philz",
        dev_stack: "cloud engineering",
        age: 27,
        true
    }
```


## **ENUMS AND LITERALS**

The typescripts literals and enums allows you to choose between a set of assigned variables
```ts
// literal types (just like enums)
let work: "developer" | "designer";
work = "developer"

// Enums
enum gender {
    male = "male",
    female = "female"
}
```

## **TYPES AND INTERFACE**

Typescript ***TYPES***
```ts
// Objects
type User = {
    id: number | string, // EITHER
    name: string,
    designer?: boolean 
}

const Hola: User = {
    id: 10001,
    name: "coded hola"
}
```

Typescript ***INTERFACE***
```ts
// Interfaces
interface RoleInterface {
    stack: "front-end"|"back-end"|"cloud",
    readonly experience: number,
    remote?: boolean
}

const hammad: RoleInterface = {
    stack: "frontend",
    experience: 4,
    remote: true
}

```

## ***Function***

```ts
let greet: Function;
greet = (name: string): void => {
    console.log(`Hello my name is ${name}`)
}

// When a return statement is stated and not explicitly typed, typescript chooses the inferred types
let addUP = (a: number, b: number, name: string = "user"): string => {
    return `The summation of the 2 number added by ${name} is ${a + b}`    
}

addUp(10, 4, "samuel")
```

   **FUNCTION SIGNATURE**
```ts
// example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add') {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
}

// example 3
let logDetails: (obj: {name: string, age: number}) => void;

logDetails = (ninja: {name: string, age: number}) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
}
```
