const obj = {country:"India",name:"Kolkata"}
const mySet = new Set()
mySet.add('Kolkata')
mySet.add(1002)
mySet.add(obj)
console.log([...mySet])
console.log(mySet.has('1'))
console.log(mySet.has(1002))
console.log(mySet.has(obj)) //Object reference are same
console.log(mySet.has({country:"India",name:"Kolkata"}))  //Object reference are different
console.log(mySet.size)