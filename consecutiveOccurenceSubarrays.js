// The quiz program is used to group together consecutive occurrences 
// of the same number in an array and store them as subarrays within a new array.

const arr = [1, 2, 3, 2, 3, 2]


// Solution without polyfills
arr.sort()
let tempArr = []
let result = []

// [1,2,2,2,3,3]
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
        tempArr.push(arr[i])
    } else {
        tempArr.push(arr[i])
        result.push(tempArr)
        tempArr = []
    }
}
console.log("RESULT WITHOUT POLYFILLS-->",result);


// Solution with polyfills
Array.prototype.sameOccurenceGroup = function () {
    let tempArr = []
    let result = []
    // [1,2,2,2,3,3]
    for (let i = 0; i < this.length; i++) {
        if (this[i] === this[i + 1]) {
            tempArr.push(this[i])
        } else {
            tempArr.push(this[i])
            result.push(tempArr)
            tempArr = []
        }
    }
    return result

}

arr.sameOccurenceGroup()

console.log("RESULT WITH POLYFILLS ---> ",arr.sort().sameOccurenceGroup())

