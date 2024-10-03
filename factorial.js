// Finding factorial of a number

function findFact(n){
    if(n == 1){
        return 1
    }else{
        return n * findFact(n-1)
    }
}

console.log(findFact(5));