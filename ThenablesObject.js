///////////////////* In JavaScript, a thenable is an object or function that defines a then method. *\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
///////////////////* This method is used to handle the fulfillment or rejection of a promise. *\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
///////////////////* Thenables are often used to create custom promise-like objects. *\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
///////////////////* Applications : It can be used as Lazy Executor and native Javascript promises are *\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
///////////////////* eager Executor. *\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

///////////////////* Example of Native JS Promise performs Eager Execution. *\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// console.log("Let Set Go : "+new Date().toLocaleTimeString())
// function eagerExecutor() {
//     return new Promise((resolve, reject) => {
//         console.log("Native Promise executing at:", new Date().toLocaleTimeString());
//         setTimeout(() => {
//             console.log("Promise resolved at:", new Date().toLocaleTimeString());
//             resolve("Resolved!");
//         }, 1000);
//     });
// }

///////////////////* The function is called, and execution starts immediately *\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// const promise = eagerExecutor(); 

///////////////////* Attaching .then() later, but execution has already started *\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// setTimeout(() => {
//     console.log("Attaching .then() at:", new Date().toLocaleTimeString());
//     promise.then((data)=>console.log(`${data}  : ${new Date().toLocaleTimeString()}`));
// }, 6000);


///////////////////* Output 
///////////////////* Native Promise executing at: 6:33:02 PM
///////////////////* Promise resolved at: 6:33:03 PM
///////////////////* Attaching .then() at: 6:33:08 PM
///////////////////* Resolved!  : 6:33:08 PM
///////////////////* Here promise starts executing even before attaching .then(), see the logs and timestamp

///////////////////* ----------------------------------------------------------------------------------------------

///////////////////* Example of Custom JS Promise with THenables Object performs Lazy Execution. *\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

console.log("Let Set Go : "+new Date().toLocaleTimeString())
const lazyExecutor = {
    isExecuted : false,
    resolvedValue : "Thenable Resolved!",
    then : function(resolve,reject){
        if(!this.isExecuted){
            console.log("Thenable executing..."+ new Date().toLocaleTimeString());
            this.isExecuted = true;
            setTimeout(()=>{
                resolve(this.resolvedValue)
            },2000)
        }
    }
}


setTimeout(()=>{
    Promise.resolve(lazyExecutor).then((data)=>{
        console.log(`${data} : ${new Date().toLocaleTimeString()}`)
    })
},5000)

/////*  Output 
/////*  Let Set Go : 6:56:51 PM
/////*  Thenable executing...6:56:56 PM
/////*  Thenable Resolved! : 6:56:58 PM
/////* Here promise starts executing only after attaching .then(), see the logs and timestamp
