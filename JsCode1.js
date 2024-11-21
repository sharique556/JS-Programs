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
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     address : {
//       city : "Delhi"
//     }
// };


// const p1 = person
// person.firstName = "Rohan"
// console.log(p1,person) //same coz while copying variable 
// value gets copied,but copying objects means location gets copied

// --------------------------------------------------------------------------

// const a = {};
// const b = {key : 'b'};
// const c = {key : 'c'};

// a[b] = 123;  //""+[object Object] = "[object Object]"
// a[c] = 456;  //""+[object Object] = "[object Object]"

// console.log(a[b]===a[c])   //true

// Keys/Property of an object are string, but here it is an object i.e [object Object]
// So ""+[object Object] = "[object Object]" (string)

// ---------------------------------------------------------------------------------

// function x({y=5}){      //If it would have been without curly braces then y will be having valye 2
//   console.log(y)
// }

// let y=2;
// x(2)

// ---------------------------------------------------------------------

console.log(NaN==NaN);
console.log(NaN===NaN);
console.log(Object.is(NaN,NaN));
console.log(-0===+0);
console.log(Object.is(-0,0));


// Object.is(first,second) is same as === with two exceptions
// which is for Object.is(NaN,NaN) & Object.is(-0,0)

// ------------------------------------------------------------------------------------

let obj = {a : 1};
let ref = obj; // Here ref is referring to same object obj
ref.a = 2; //here we are indireectly manipulating object obj
ref = {a:3}; //Now this 'ref' is referring to some different object
console.log(obj.a,ref.a);

//-----------------------------------------------------------------------------------------

const userName = null;
const defaultName = "Guest";

console.log(userName ?? defaultName);   // Guest
console.log(userName && defaultName);    // null '&&' operator always search for falsey expression first if not find, gives last expression
console.log(userName || defaultName);   //Guest '||' operator always search for truthy expression first if not find, gives last expression



console.log(null && 0 && "" && undefined && "Hello");
console.log(null || 0 || "" || undefined || "Hello");