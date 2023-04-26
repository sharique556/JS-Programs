// Grouping of people as per age
// Expected o/p { '20': [ 'John', 'Kyle' ], '22': [ 'Alice' ] }

let obj = [
    { name: "Alice", age: 22 },
    { name: "John", age: 20 },
    { name: "Kyle", age: 20 }
]

let result = obj.reduce((acc, currVal) => {
    if (acc[currVal.age]) {
        acc[currVal.age].push(currVal.name)
    } else {
        acc[currVal.age] = [currVal.name]
    }
    return acc
}, {})

console.log(result);


