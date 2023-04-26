let arr = ["hello","hi","hey","hola","hello","hi","hello"]

let result = arr.reduce((acc,currVal)=>{
    if(acc[currVal]){
        acc[currVal]++
    }else{
        acc[currVal] = 1
    }
    return acc
},{})

console.log(result);