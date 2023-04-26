function* myFunc(){
    yield 100
    yield 250
    yield 500
}

let func = myFunc()

console.log(func.next())
console.log(func.next())
console.log(func.next())
console.log(func.next())