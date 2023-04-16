// Finding whether a given string has all the unique characters or not ? 

const str1 = "Javascript"
const str2 = "Jayesh"
// Solution 1

function foo(str){
    let obj = {}
    for(let char of str){
      if(obj[char]){
        return false
      }else{
        obj[char] = true
      }
    }
    return true
  }
  
  console.log(foo(str1))
  console.log(foo(str2))



//   Solution 2 
const uniqueStr = (str) => {
    const unique = [...new Set(str.split(""))].join("")
    if(unique === str){
      return true;
    }
    else {
      return false;
    }
  }
  
  
  
  console.log("Checking str1",uniqueStr(str1))
  console.log("Checking str2",uniqueStr(str2))
  