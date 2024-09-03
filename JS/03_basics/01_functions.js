function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("J");
    console.log("K");
    console.log("U");
    console.log("M");
    console.log("A");
    console.log("R");


}
//sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);

// }

function addTwoNumbers(number1, number2){
    //    let result = number1 + number2
    //    console.log("rajkumar");
       return number1 + number2
}


const result = addTwoNumbers(3,5)

//console.log("Result:", result);


function loginUserMessage(username){
    if (!username) {
        console.log("please enter a username");
        return
        
    }
    return `${username} just logged in`

}

//console.log(loginUserMessage("rajkumar"));
//console.log(loginUserMessage());

//console.log(calculateCartPrice(200,300,400))

const user = {
    name: "rajkumar",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}` );
}
//handleObject(user)

handleObject({
    username: "sam", 
    price: 399
})

const myNewArray = [200,400,500,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));

