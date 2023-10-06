//primitive 

// 7 categories => String , Number , null , Boolean , undefined , symbol , BigInt


const score ="";

const scoreValue = 100.3

const isLoggedIN =false

const outsidetemp =null;

const id =Symbol('123')

const anotherid =Symbol('123')

const bigNumber = 12345678945612323265565n

//Refrence (Non primitive)

// Array , objects, functions, 

//console.log(id);
//console.log(anotherid);

const heros =['shaktiman','naagraj','doga'];

let obj ={
    name: "chandu",
    age: 22
}

const myfunction =function(){
    console.log("helloworld");

}

///+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++]

//stack(primitive), heap (non-primitive) memory 

let myYoutubename = "gamingcoder"

let anothername =  myYoutubename

anothername ="chaiorcode"

console.log(myYoutubename);

console.log(anothername);


let userOne ={
    name : "chanderveer",
    upi : "chandu@ypl"
}

let usertwo = userOne

usertwo.name = "chandu"
console.log(userOne.name);
console.log(usertwo.name);
