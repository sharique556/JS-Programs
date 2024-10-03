// Q. Finding second longest word in a string
// Concept used : sorting of array of numbers. 
// .sort(a,b => return a-b)  //for numbers
// .sort((a,b)=>{
    // if(a>b) return 1
    // if(a<b) return -1
    // return 0
    // })   //for sorting words

let str = "I love programming in Javascript";

function findLongestWord(str){
    str = str.split(" ")
    let arr = str.map((elem)=>{
        return{
            length : elem?.length,
            wrd : elem
        }
    });
     let newArr = arr.sort((a,b)=>{
        return a.length - b.length
     })

     return newArr[newArr.length-2].wrd
    
}

console.log("Longest word",findLongestWord(str))