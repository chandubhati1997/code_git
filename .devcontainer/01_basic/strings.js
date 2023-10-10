const name ="chanderveer"

const repoCount = 5

console.log(`hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);


const gameName =new String("chandu-hit")



console.log(gameName.toUpperCase()); //convert into uppercase


console.log(gameName.charAt(0));  // which index has which charcter

//reverse of charAt()

console.log(gameName.indexOf('c'));  ///which charcter has which index 

console.log(typeof gameName);  //


const newstring = gameName.substring(0,5) //the values of 0 to 4 printed  by doing that function...cannot give negative values 
console.log(newstring);


const anotherString =gameName.slice(-8,4) ///in these slice method we can give negative values also 
console.log(anotherString);


const newStringOne = "  chandu   "
console.log(newStringOne);
console.log(newStringOne.trim());// its ends the space in the front and end 



const url ="https://hitesh.com/hitesh%20choudary"
console.log(url.replace('%20','-'))  //its replacing the charcters 


console.log(gameName.split('-')) // splits converts the string into array by using a speraters












