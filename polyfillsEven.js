let arr = [1,2,3,4,5,6,7]

function isEven(x){ return x%2===0}

function isOdd(x){ return x%2!==0}

Array.prototype.extractEven = function(callBck){
    let filteredArr = []
    for(let i of this){
        callBck(i) ? filteredArr.push(i) : null
    }
    return filteredArr
}

Array.prototype.extractOdd = function(callBck){
    let filteredArr = []
    for(let i of this){
        callBck(i) ? filteredArr.push(i) : null
    }
    return filteredArr
}

const result = arr.extractEven(isEven)
const resultOdd = arr.extractOdd(isOdd)
console.log(result,resultOdd);