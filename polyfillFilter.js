// Polyfill for filter

const num = [1,2,3,4,5]

// arr.filter((elem,i,arr)=>{})

Array.prototype.myFilter = function(cb){
    let temp = []
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i,this)){   //here cb taking 3 arguments just like filter callback : elem,index,array
            temp.push(this[i])
        }
    }
    return temp
}

const result = num.myFilter((elem)=>elem%2==0)
console.log(result)