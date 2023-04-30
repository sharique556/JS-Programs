const person = {
    name : "Md Sharique",
    get fullName(){
        return this.name
    },
    set fullName(newName){
        this.name = newName
    }
}

console.log(person.fullName)
person.fullName = "Danish Shakil"
console.log(person.fullName)