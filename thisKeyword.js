// 1. this refers to the object, that the function is a property of
debugger;
const person = {
    name : "Vivek",
    getName : function() {
        console.log(this.name);
        
    }
}
person?.getName()

// Note : arrow function do not have its own this, and it does not create its own execution context

// 2. outside of any object this keyword points to the global window object