const num = [1,2,3,4,5]
const str = ["India","is","great"]

// Polyfill for reduce method
// arr.reduce((acc,currVal)=>{},initialValue)


Array.prototype.myReduce = function(cb,initialValue){
    var accumulator = initialValue
    for(let i=0;i<this.length;i++){
        accumulator = accumulator ? cb(accumulator,this[i],i,this) : this[i]
    }
    return accumulator
}

const sum = num.myReduce((acc,currVal)=>{
    acc += currVal
    return acc
},0)

const sentence = str.myReduce((acc,currVal)=>{
    acc = `${acc} ${currVal}`
    return acc
},"")
console.log(sum)
console.log(sentence)