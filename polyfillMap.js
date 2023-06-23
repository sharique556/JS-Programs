// Polyfill for map

// arr.map((elem,i.arr)=>{})

const num = [1,2,3,4,5]

Array.prototype.myMap = function(cb) {
    let temp = []
    for(let i=0; i<this.length; i++){
        temp.push(cb(this[i],i,this))
    }
    return temp
}

const result1 = num.myMap((elem)=>{
 return elem * 3
})
console.log(result1)