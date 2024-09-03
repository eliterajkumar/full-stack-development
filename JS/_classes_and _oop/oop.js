const user = {
    username: "rajkumar",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");

        console.log(`username: ${ this.username}`);

    }
}

console.log(user.username);
console.log(user.getUserDetails());


function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    return this

} 


const userOne = new User("rajkumar", 8, true)
const userTwo = new User("a6-platform", 13, false) 

console.log(userOne);
console.log(userTwo);