// Pangrams is a sentence which contains all the alphabets from A to Z
let str = "The five boxing wizards jump quickly."

function checkPangram(str){
const arr = new Array(26).fill(false)

for(let i=0;i<str.length;i++){
  if(str[i] >= "A" && str[i] <= 'Z'){
    index = str.charCodeAt(i) - "A".charCodeAt(0)
  }
  else if(str[i] >= "a" && str[i] <= 'z'){
    index = str.charCodeAt(i) - "a".charCodeAt(0)
  } 
  else continue
  arr[index] = true
}

  for(let j=0;j<arr.length;j++){
    if(arr[j]==false){
      return false
    }
  }
  return true
}

console.log(checkPangram(str))