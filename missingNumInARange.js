// Lets find a missing number in a range of 1-10
// With this you can find a missing number in any range
const arr = [1,2,3,4,5,6,8,9,10]

function findMissingNum(arr) {
    const sum = (10*(10+1))/2
    const result = arr.reduce((acc,currVal)=>{
        acc = currVal + acc
        return acc
    },0)

    return sum-result

}

console.log(findMissingNum(arr))