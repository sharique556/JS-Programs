// class Person{
//     constructor(name,age){
//       this.name = name,
//         this.age = age
//     }
//   }
  
//   Person.prototype.getInfo = function(){
//     console.log(`Name is ${this.name} & age is ${this.age}`)
//   }
  
//   const jayesh = new Person("Jayesh",24)
  
//   console.log(jayesh.getInfo())
//   console.log(jayesh)

// // Object.hasOwn return the boolean true for all the properties which are owned by object itself.
//   console.log(Object.hasOwn(jayesh,"name"))
//   console.log(Object.hasOwn(jayesh,"age"))
//   console.log(Object.hasOwn(jayesh,"getInfo"))   // Here getInfo property is not owned by object Person


const arr = [1,2,3,2,3,2]
const arr1 = arr.sort()
const arr2 = arr.sort((a,b)=>{
    return a-b
})

console.log(arr);
console.log(arr1);
console.log(arr2);