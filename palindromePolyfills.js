// Finding palindrome (solution with poyfills)

String.prototype.isPalindrome = function () {
    let str1 = this
    if (str1 == str1.split("").reverse().join("")) {
        return true
    } else {
        return false
    }
}

const input1 = "anna"
const input2 = "madam"
const input3 = "sharique"

console.log(input1.isPalindrome());
console.log(input2.isPalindrome());
console.log(input3.isPalindrome());