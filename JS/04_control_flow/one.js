// //if

// const isUserLoggedIn = true
// const temperature = 45

// if (temperature == 50){
//     //console.log("temperature is less then 50");
// } 
// else{
//     //console.log("temperature is not less then 50");
// }


// // < less then , > grater then, less then or equal, grater then or equal, <=, >=, ==, !=, ===, !==


// const score = 200

// if(score > 100){
//     const power = "fly"
//     //console.log(`User power: ${power}`);

    
// }
// //console.log(`User power: ${power}`);

// const balance = 1000

// //if(balance == 500) console.log("Buy something"), console.log("Buy something else")

// if (balance < 500){
//     console.log("less then 500 ");
// }
// else if (balance < 750){
//     console.log("grater then 750");
// }
// else if (balance < 600  ){
//     console.log("grater then 1000");
// }
// else{
//     console.log("1200");
// }


const isUserLoggedIn = true
const debitCard = true
const loggedInfromGoogle = false
const loggedInFromEmail = true



if (isUserLoggedIn && debitCard ){
    console.log("Allow to course buy");
}

if (loggedInfromGoogle || loggedInFromEmail){
    console.log("User logged in");
}
