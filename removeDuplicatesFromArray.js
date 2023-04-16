let arr = ["scale", "happy", "strength","peace", "happy", "happy"];
 let numbers = [1,2,3,4,1,6,7,3]
    // function removeDuplicates(arr) {
    //     return arr.filter((item,
    //         index) => arr.indexOf(item) === index);
    // }
 
    // console.log(removeDuplicates(arr));


    // Implementing polyfills for unique array elements
    Array.prototype.unique = function(){
        let uniqueArr = this.filter((elem,index)=>{   //Here 'this' refers to the array where it invoked that is arr in this case
            return this.indexOf(elem)===index
        }) 
        return uniqueArr
    }
    console.log(arr.unique());
    console.log(numbers.unique());
    console.log("With set",[...new Set(arr)]);

