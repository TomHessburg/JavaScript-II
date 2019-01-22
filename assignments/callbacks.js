// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/



      //=======Return the length...
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr);
}

console.log(getLength(items, function(arr){
  return arr.length;
}));




  
      //=======return the last item in the array
function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr);
}

console.log(last(items, function(arr){
  return arr.slice(-1)[0] ;
}));





      //======= add two nums together
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x,y);
}


console.log(sumNums(20,90,function (x,y){
  return x+y;
}));





    //======= multiply two numbers together
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x,y);
}

console.log(multiplyNums(10,502, function(x,y){
  return x*y;
}))






function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(list,item);
}

function isItHere (list,item){
  if(list.indexOf(item) > -1){
    return true;
  }else{
    return false
  }
}

console.log(contains('Pen', items, isItHere)); //evaluates to false...
console.log(contains('Pencil', items, isItHere)); //evaluates to true...

    //edge case..
console.log(contains('pencil', items, isItHere)); //evaluates to false... could fix this eedge case by making the string .toLowerCase to even out capitolization..







/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
