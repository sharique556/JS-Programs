// Counting of char and display it like
// "a6b2c2"
// Map is similar to like an object, but the differenec lies between
// in Obj we cannot put numbers as keys, it will be converted to string like(123 --> '123')
// but with map we can do so
// map allows object as keys but object does not

const str = "aaaaaabbcc"
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
for(let [keys,values] of map){
    res = res + keys + values
}
console.log(res)