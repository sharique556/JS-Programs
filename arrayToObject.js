const arr = ["a","b","c"]

const obj = arr.reduce((acc,currVal,index)=>{
    acc[index] = currVal
    return acc
},{})

console.log(obj);
console.log(Object.assign({},arr),{...arr})