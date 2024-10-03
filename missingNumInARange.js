// Lets find a missing number in a range of given array of numbers
// With this you can find a missing number in any range
// const arr = [1,2,3,4,5,6,8,9,10]

const arr = [3,0,1]
function findMissingNum(arr) {
    arr = arr.sort((a,b) => a-b)  //First sort,because it may happen that the array is unsorted
    
    const sum = ((arr[arr.length-1])*((arr[arr.length-1])+1))/2
    const result = arr.reduce((acc,currVal)=>{
        acc = currVal + acc
        return acc
    },0)
    return sum-result;

}

console.log(findMissingNum(arr))