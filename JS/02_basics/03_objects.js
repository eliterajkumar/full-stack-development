//Singleton
//object.create

//object literals

const JsUser ={
    name: "rajkumar",
    "full name": "rajkumar Tajpuriya",
    //[mySym]: "mykey1",
    age: 21,
    location:"BHaratpur",
    email: "rajkumar@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","wensdays"]


}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser["mySym"]);


JsUser.email= "rajkumar@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "rajkumar@microsoft.com"

// console.log(JsUser);

JsUser.greeting = function(){
    console.log(`hello JsUser, ${this.name}`);


}
console.log(JsUser.greeting());