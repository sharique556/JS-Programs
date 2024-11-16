// Polyfill for flattenning array

let arr = [1,[1.1],[2,[3,4,[5,6,[7]],[10,[11]]]],[12,[13,[14]]]]
Array.prototype.flatArray = function(){
    let newArr = []
    function flatRec(arr){
        arr.map((elem)=>{
            if(Array.isArray(elem)){
                flatRec(elem)
            }else{
                newArr.push(elem)
            }
        })
    }
    flatRec(this)
    return newArr;
    
}

// console.log(arr.flat(4))
console.log(arr.flatArray())