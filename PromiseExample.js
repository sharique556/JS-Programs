// This snippet prints A,B,C in random order

// function printString(string){
//     setTimeout(() => {
//         console.log(string)
//     },Math.floor(Math.random()*100)+1);
    
// }

// function printAll(){
//     printString("A")
//     printString("B")
//     printString("C")
// }

// printAll()

// Let fix this with callbacks

// function printString(string,callBack){
//     setTimeout(() => {
//         console.log(string)
//         callBack()
//     },Math.floor(Math.random()*100)+1);
    
// }

// function printAll(){
//     printString("A",function(){
//         printString("B",function(){
//             printString("C",function(){})
//         })
//     })
// }

// printAll()

// Let fix this with promise/async await

function printString(string){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(string);
            resolve()
        },Math.floor(Math.random()*100)+1);
    })
}

// function printAll(){
//     printString("A")
//     .then(()=>{
//        return printString("B")
//     })
//     .then(()=>{
//        return printString("C")
//     })
// }

// printAll()

async function getTheResult() {
    await printString("A")
    await printString("B")
    await printString("C")
}

getTheResult()
