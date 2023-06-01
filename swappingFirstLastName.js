// Javascript .split() method splits the given string(str) 
// into an array element with separator, which is separating the string
// syntax   :   str.split("...separator")


// Question no 1

const str = "Amrit Pal Singh"
const arr = str.split(" ")
console.log(arr[2]+" "+arr[1]+" "+arr[0])

// Question no 2

const str1 = "John Doe"
// desired o/p "nhoJ eoD"
const result = str1.split(" ").map((elem)=>{
    return elem.split("").reverse().join("")
})
console.log(result.join(" "))