// Counting of char and display it like
// "a6b2c2"
// Map is similar to like an object, but the differenec lies between
// in Obj we cannot put numbers as keys, it will be converted to string like(123 --> '123')
// but with map we can do so
// map allows object as keys but object does not

const str = "aaaaaabbcc"

// Solution 1 : 
const map = new Map()
let res = ""
for(let char of str){
    if(map.get(char)){
        let count = map.get(char)
        map.set(char,count+1)
    }else{
        map.set(char,1)
    }
}
console.log(map)
for(let [keys,values] of map){     //we can use for...of loop in Map but not in object
    res = res + keys + values
}
console.log(res)

// Solution 2 : 
const countObj = {}
for(let elem of str){
    if(countObj[elem]){
        countObj[elem]++
    }else{
        countObj[elem] = 1
    }
}
console.log(countObj)
for(let key in countObj){
    console.log(`${key}${countObj[key]}`)
}