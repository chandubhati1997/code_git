// null is object but does not inherhit the prototype of objects or ojects methods 
// singleton objects when you made it by constructor 
// objects literal 

// constructor thrugh making of object 
 // by using create 
// Object.create 

//objectliterals


const mysym =Symbol("key1")
const objuser ={

    name: "chandreveer", //name is the key
    age: 23,
    "full name": "chanderveer singh bhati",
    [mysym]:"mykey1",
    location: "Ahmedabad",
    email: "chandreveersingh.com",
    isloggedin : false,
    lastdayloggedin :["Mon","tue"]
    
}



console.log(objuser.email);  //simple way of acessing the email in the object
console.log(objuser["email"]); //2nd way but it should written in a string way
console.log(objuser["full name"])//it cannot used oobjuser.full name
console.log(objuser[mysym]);
