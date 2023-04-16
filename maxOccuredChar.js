const str = "mumbai"
let obj = {}
let count=0
let maxCount = 0

for(let char of str){
//   console.log(char)
  if(obj[char]){
    obj[char] = obj[char] + 1
  }else{
    obj[char] = 1
  }
  
}

for(let elem in obj){
  if(obj[elem]>maxCount){
    maxCount = obj[elem]
  }
}

for(let elem in obj){
  if(obj[elem] == maxCount){
    console.log(elem+":"+obj[elem])
  }
}