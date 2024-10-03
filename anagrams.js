// Anagrams are words or phrases which can be made by rearranging letters of another word
// List dusty -> study , listen -> silent

function isAnagramTo(str1,str2){
    str1 = str1?.replace(/\s/g,'').toLowerCase()
    str2 = str2?.replace(/\s/g,'').toLowerCase()
    console.log(str1,str2);
    if(str1?.length == str2?.length){
        if(str1.split("").sort().join("") == str2.split("").sort().join("")){
            return true
        }
        
    }else{
        return false
    }
    
}   

console.log(isAnagramTo("dustyhhh",'study'))

// Polyfills for anagrams
// String.prototype.isAnagram = function(str2) {
//     let str1 = this ;
//     str1 = str1?.replace(/\s/g,'').toLowerCase()
//     str2 = str2?.replace(/\s/g,'').toLowerCase()
//     if(str1?.length == str2?.length){
//         if(str1.split("").sort().join("") == str2.split("").sort().join("")){
//             return true
//         }
        
//     }else{
//         return false
//     }
// }

// console.log('sport'.isAnagram('rsotp'))