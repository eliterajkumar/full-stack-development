//const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "sammy@google.com",
    fullname:{
        userFullname:{
            fistname: "sammy",
            lastname: "kumar"
        }
    }

}

//console.log(regularUser.fullname.userFullname.fistname);

const obj1 = { 1:"a", 2:"b", 3:"c"}
const obj2 = { 4:"a", 5:"b", 6:"c"}

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1, ...obj2}

//console.log(obj3);

const users = [
    {
        id: "123abc",
        
        email: "sammy@google.com"
    },
    {
        id: "456def",
        
        email: "kumar@google.com"
    },
    {
        id: "456def",
        
        email: "raj@google.com"
    },
    {
        id: "456def",
        
        email: "taj@google.com"
    }
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("id"));


const course = {
    title: "JS in Hindi",
    price: 999,
    courseInstructer: "rajkumar",

}

const {courseInstructer:Instructer} = course

console.log(Instructer);