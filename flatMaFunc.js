// ["Md Sharique","Hamza Shakil"] ----> ["Md", "Sharique", "Hamza", "Shakil"]

const arr = ["Md Sharique","Hamza Shakil"]

// Solution 1
const result1 = arr.map((elem)=>{
  return elem.split(" ")
})
console.log(result1.flat())

// Solution 2
const result2 = arr.flatMap(str => str.split(" "))
console.log(result2)