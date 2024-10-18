// Polyfill for map
// map(elem,index,array)

const num = [1,2,3,4,5]

Array.prototype.myMap = function(cb) {
    let arr = this;
    let temp = []
    for(let i=0; i<arr.length; i++){
        temp.push(cb(arr[i],i,arr))
    }
    return temp
}

const tripleArr = num.myMap((elem)=>{
 return elem * 3
})
console.log(tripleArr)