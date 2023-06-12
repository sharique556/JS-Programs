const person = {
    name : "John",
    age : "28"
}

Object.defineProperty(person,"email",{value:"john123@gmail.com",enumerable:false})

for (const key in person) {
    console.log(`${key}:${person[key]}`)
}

console.log(Object.keys(person))
console.log(Object.getOwnPropertyNames(person))