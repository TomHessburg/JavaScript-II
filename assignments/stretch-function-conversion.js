// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

console.log("====BEGGINING OF STRETCH FUNCTION CONVERSION");
console.log(" ");


 let myFunction = () => {};
 


let anotherFunction = param => param;
console.log(anotherFunction("hey im a param.."));



let add = (param1, param2) =>  param1 + param2;
console.log(add(1,5));



let subtract = (param1, param2) =>  param1 - param2;
console.log(subtract(1,5));


exampleArray = [1,2,3,4];
const triple = exampleArray.map(num => num * 3);
console.log(triple);


console.log("====END OF STRETCH FUNCTION CONVERSION");