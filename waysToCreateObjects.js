// Using object literals

const candidate = {
    name : "Hamza Shakil",
    class : "XI",
    stream : "Science"
}

console.log(candidate.stream);
// Using the ‘new’ keyword with’ in-built Object constructor function
const person1 = new Object()

person1.firstName = "Md"
person1.lastName = "Sharique"

console.log(person1);

// Using ‘new’ with user defined constructor function

function Person(fName,lName) {
    this.firstName = fName,
    this.lastName = lName
}

const person2 = new Person("Rohan","Mehra")
const person3 = new Person("Rehana","Khatoon")

console.log(person2,person3);

// Using Object.create() to create new objects

const orgObject = { company: 'LTIMIndtree' };

const employee = Object.create(orgObject,{name:{value : "Sharique"}})

console.log(employee.company)

// Using Object.assign() to create new objects

const orgObject1 = { company: 'LTIMIndtree' };
const carName = {name : 'Ford'}
const employee1 = Object.assign({},orgObject1,carName)
console.log(employee1);

// Using ES6 classes contructor

class Player {
    constructor(firstName,lastName){
        this.firstName = firstName,
        this.lastName = lastName
    }
}

const player1 = new Player("Virat","Kohli")
const player2 = new Player("MS","Dhoni")

console.log(player1.firstName,player2.lastName);