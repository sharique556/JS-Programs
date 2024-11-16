// 1)  (calculation,log)  ---> comma operator

// let x = 20;
// const result = (x++,x)  
// console.log(result,x/3)



// ----------------------------------------------------------------------------


// 2) swapping of variable values

// let x = 20 ; 
// let y = 56;
// [x,y] = [y,x]
// console.log(x,y);


// ---------------------------------------------------------------------------

// 3) Terminating array upto 3 elements 

// const arr = [1,2,3,4,5,6,7]
// arr.length = [3]

// console.log(arr);

// ----------------------------------------------------------------------------
// Find o/p
const person = {
    firstName: 'John',
    lastName: 'Doe',
    address : {
      city : "Delhi"
    }
};


const p1 = person
person.firstName = "Rohan"
console.log(p1,person) //same coz while copying variable 
// value gets copied,but copying objects means location gets copied

// --------------------------------------------------------------------------

const a = {};
const b = {key : 'b'};
const c = {key : 'c'};

a[b] = 123;  //""+[object Object] = "[object Object]"
a[c] = 456;  //""+[object Object] = "[object Object]"

console.log(a[b]===a[c])   //true

// Keys/Property of an object are string, but here it is an object i.e [object Object]
// So ""+[object Object] = "[object Object]" (string)

// ---------------------------------------------------------------------------------

function x({y=5}){      //If it would have been without curly braces then y will be having valye 2
  console.log(y)
}

let y=2;
x(2)
