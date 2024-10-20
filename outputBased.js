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


const p1 = person  //This means that now both p1 & person is refering to the same object location
person.firstName = "Rohan"
console.log(p1,person) //same coz while copying variable 
// value gets copied,but copying objects means location gets copied

// ---------------------------------------------------------------------------------
// Guess the output

function test(){
  var x = "UncommonGeeks"
  if(x === "UncommonGeeks"){
    var x = "Vasanth"
    console.log("Value of first x :",x);
  }
  console.log("Value of second x :",x);
}

test()

// Ans : 
// Value of first x : Vasanth
// Value of second x : Vasanth

// ---------------------------------------------------------------------------------

let obj1 = {};

function A() {
    this.name = "A is the name";
    return obj1;
}

function B() {
    this.name = "B is the name";
    return obj1;
}

console.log(new A()==new B())  
// result  : true

// ----------------------------------------------------------------------------

let obj2 = {};

function A() {
    this.name = "A is the name";
    return;
}

function B() {
    this.name = "B is the name";
    return;
}

console.log(new A()==new B())  
// result  : false

// ------------------------------------------------------------------------