//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);


// +++++++++++++ stack and heap memory +++++++++++++++++++++++++++++

// stack and heap memory

      // stack - Primitive data store and get copy value
      // let name = "primitive";
      // let name2 = name;
      // name2 = "non-primitive";
      // console.log("name" + ":" + name);
      // console.log("name2" + ":" + name2);

      // heap - Reference(Non-primitive) data store and get reference value
      // let user1 = {
      //   email: "user1@example.com",
      //   age: 25,
      // };
      // let user2 = user1;
      // user2.email = "user2@example.com";

      // console.log("user1" + ":" + user1.email);
      // console.log("user2" + ":" + user2.email);

// https://262.ecma-international.org/5.1/#sec-11.4.3