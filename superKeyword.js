class A {
    constructor(){
        this.greet = "Hello"
    }
}

class B extends A {
    constructor() {
         super()  // Without 'super()' keyword, you cannot access parent object property, it will throw error
        console.log(this)  //here this refers to the object which is made by A class contructor & extended by B
    }
}

new B()
