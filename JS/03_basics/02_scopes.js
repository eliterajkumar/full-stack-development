let c = 300


if(true){
  let c = 10 
const b = 20
//console.log("INNER:", c);

}



//console.log(b);
//console.log(c);


function one(){
    const username = "rajkumar"

    function two(){
        const website = "youtube"

        console.log(username);
    }
    //console.log(website);

    two()
}

//one()

if (true) {
    const username = "rajkumar"
    if (username === "rajkumar") {
        const website = " youtube"
        //console.log(username  +  website); 
        
    }
    //console.log(website);
}

//console.log(username);


//+++++++++++++++++++++ intersting+++++++++++++++++++++++++

function addone(num){
    return num + 1
}
addone (5)

const addTwo = function(num) {
    return num + 2

}

console.log(addTwo (5));