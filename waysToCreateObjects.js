// Using object literals

const candidate = {
    name : "Hamza Shakil",
    class : "XI",
    stream : "Science"
}

console.log("with general way ==>",candidate);
// Using the ‘new’ keyword with’ in-built Object constructor function
const person1 = new Object()

person1.firstName = "Md"
person1.lastName = "Sharique"

console.log("with new keyword and Object constructor ==>",person1);

// Using ‘new’ with user defined constructor function

function Person(fName,lName) {
    this.firstName = fName,
    this.lastName = lName
}

const person2 = new Person("Rohan","Mehra")
const person3 = new Person("Rehana","Khatoon")

console.log("with new keyword and defined function constructor ==>",person2,person3);

// Using Object.create() to create new objects

const orgObject = { company: 'LTIMIndtree' };

const employee = Object.create(orgObject,{name:{value : "Sharique",enumerable:true}})

console.log("with Object.create method ==>",employee,)

// Using Object.assign() to create new objects

const orgObject1 = { company: 'LTIMIndtree' };
const carName = {name : 'Ford'}
const employee1 = Object.assign({},orgObject1,carName)
console.log("with Object.assign method ==>",employee1);

// Using ES6 classes contructor

class Player {
    constructor(firstName,lastName){
        this.firstName = firstName,
        this.lastName = lastName
    }
}

const player1 = new Player("Virat","Kohli")
const player2 = new Player("MS","Dhoni")

console.log("with ES6 class constructor ==>",player1,player2);