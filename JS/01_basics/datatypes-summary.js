//primitive

//  7 types : String, Number, BigInt, Boolean, Null, Undefined, Symbo

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);

//const bigNumber = 23324788439573995n



//Reference (Non primitive)

// array, object, function

const heros = ["spiderman", "thor", "hulk", "ironman"]
letmyObj = { name: "rajkumar", age: 23 }

const func = () => {
    console.log("hello");
}


console.log(typeof anotherId);


//  ++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive), Heap (Non Primitive)

let myYoutubename = "eliterajkumar"

let anothername = myYoutubename


anothername = "a6-platform"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    Email: "user@google.com",
    Upi: "user@ybl" 
}

let userTwo = userOne

userTwo.Email = "rajkumar@google.com"

console.log(userOne.Email);

console.log(userTwo.Email);