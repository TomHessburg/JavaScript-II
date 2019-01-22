console.log(" ");
console.log("===CLOSURES ");
// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function simpleClosure (){
  let innerScope = 0;
  //debugger;
  function innerClosure(){
    //debugger;
    return innerScope; //calling this from its parent us a closure!!
  }
  innerClosure();
}

simpleClosure();







// ==== Challenge 2: Create a counter function ====

          //===the rules for this one seem a bit strange so im jsut going to talk through my thought process so I can show you where im at..


const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.

  //debugger;
  let myNumber = 0;//okay so im taking that this means that each time its called WITHIN the counter function, it will increment (since this is a closure thing..)
                    //if we wanted to continuously increment whenever we called counter, we wouldnt be nesting the function an extra level deep



                            // every time this is called WITHIN counter,it will intcrement the number, i.e. currecntly it will intrememnt 4 times seprately...
  function newCounterClosure (){          //we could allow the counter function to take in an argument that tells us how many times to run the newCounterClosure() function if we wanted...
    //debugger;
    myNumber++;
  }

  newCounterClosure();
  newCounterClosure();
  newCounterClosure();
  //debugger;             // found it interesting placing the debugger between a set of closure calls to see how it would respond. It jumps down at the third increment, then jumps back up to the second debugger....
  newCounterClosure();
  console.log(myNumber);
};  

counter();










/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};



console.log("===END CLOSURES ");
console.log(" ");