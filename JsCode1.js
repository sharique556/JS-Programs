// 1)  (calculation,log)  ---> comma operator

let x = 20;
const result = (x++,x)  
console.log(result,x/3)



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
