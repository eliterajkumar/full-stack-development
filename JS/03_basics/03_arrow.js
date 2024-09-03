const user = {
    username: "rajkumar",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username},welocome to website`);
         //console.log(this);
    }
}

//console.log(user.welcomeMessage());
//user.username = "sam"
//console.log(user.welcomeMessage());

// function chai (){
//     let username = "rajkumar"
//     console.log(this.username)

// }
// chai()

// const chai = function(){
//     let username = "rajkumar"
//     console.log(this.username)
// }

const chai = () => {
    let username = "rajkumar"
    console.log(this.username)
}
//chai()


// const addTwo = (num1,num2) => {
//     return num1 + num2
// }



//const addTwo = (num1,num2) =>num1 + num2

//const addTwo = (num1,num2) => (num1 + num2)

const addTwo = (num1,num2) =>({username:"rajkumar"})
console.log(addTwo(3,5));


