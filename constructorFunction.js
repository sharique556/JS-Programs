// 1. Constructor function used to create function dynamically
debugger;
const sum = new Function("a","b","return a*b")
console.log(sum(3,9))

// 2. They are named with Caps & should be executed with 'new' keyword


// 3. With constr func we can use many reusuable objects


// const user1 = {
//     name : "John",
//     isIndian : false
// }
// const user2 = {
//     name : "Vivek",
//     isIndian : true
// }

// const use3 = {
//     name : "Satish",
//     isIndian : true
// }

// Do it efficiently with cnstr func
function User(name,isIndian){
 this.name = name;
 this.isIndian = isIndian
}

const user1 = new User("John",false)
const user2 = new User("Vivek",true)
const user3 = new User("Satish",true)

console.log("see result",user1,user2,user3)

// Note : So basically, when a function is executed with new, it does the following steps:

// A new empty object is created and assigned to this.
// The function body executes. Usually it modifies this, adds new properties to it.
// The value of this is returned.