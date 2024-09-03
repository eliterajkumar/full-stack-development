const useremail = []

if(useremail){
    console.log("email is present");
}
else{
    console.log("email is not present");}


    //falsy value

    //false,0,-0,BigInt,"",NAN,0n,null undefined


    //truthy value 

    // "0",`false`, " ", [], {}, function(){}


    if (useremail.length === 0){
        console.log("Array is empty")
    }


    const emptyObj = {}

    if (Object.keys(emptyObj).length === 0) {
        console.log("object is empty");
    }

    // Nullish coalescing operator (??): Null undefined 

    let val1;

    //val1 = 5 ?? 10
     //val1 = null ?? 10
     //val1 = undefined ?? 10

     val1 = null ?? 10 ?? 20

    console.log(val1);



//Terniary operator

//condition ? true : false

const iceTeaprice = 100

iceTeaprice <= 80 ? console.log("less then 80") : console.log("less then more 80")