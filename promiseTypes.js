const promise1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('After 2 secs')
    }, 2000);
})

const promise2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        // resolve('After 3 secs')
        reject("err in promise2")
    }, 3000);
})

const promise3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('After 4 secs')
    }, 4000);
})

promise1.then((data1)=>{
    console.log(data1)
    return promise2
}).then((data2)=>{
    console.log(data2);
    return promise3
})
.then((data3)=>{
    console.log(data3);
})
.catch((err)=>{
    console.log("Error is : ",err);
})

// Promise.race

// Promise.race([promise1,promise2,promise3])
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log("In catch block :",err);
// })

// Promise.allSettled 
 
// Promise.all([promise1,promise2,promise3])
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log("In catch block :",err);
// })

// Promise.allSettled 

// Promise.allSettled([promise1,promise2,promise3])
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log("In catch block :",err);
// })



