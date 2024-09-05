// same task


const getRollPromise = new Promise((resolve,reject)=>{
    var arr = [1,2,3,4,5]
    setTimeout(() => {
        resolve(arr[1])
    }, 2000);
})

const getInfo = function(data){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`Name is Md Sharique and roll num is ${data}`)
        }, 2000);
    
})
}

// getRollPromise
//     .then((data)=>{
//         console.log("second roll nums are : ",data)
//         return getInfo(data)
//     })
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })

async function resolvingPr() {
    const data1 = await getRollPromise
    console.log(data1)
    const data2 = await getInfo(data1)
    console.log(data2)
}

resolvingPr()



















// const promiseObj = new Promise( (resolve,reject) =>{
//     setTimeout(() => {
//         const rollArr = [30,31,32,33,34,35]
//         resolve(rollArr)
//         reject("Error in getting roll numbers")
//     }, 2000);
// })

// const getInfo = (rollNum2) => {
//     return new Promise((resolve,rejec)=>{
//         setTimeout(() => {
//         let info = {
//             name : "Sharique",
//             gender : "M",
//             place : "Kolkata"
//         }
//         resolve(`The student having name ${info.name} and roll num ${rollNum2} and gender ${info.gender} living in ${info.place}` )
//         },2000);
//     })
// }

// promiseObj
// .then((rollArray)=>{
//     console.log("Roll numbers are :",rollArray);
//     return getInfo(rollArray[1])
// })
// .then((data)=>{
//     console.log(data);
// })
// // Gracefully handling the errors
// .catch((err)=>{
//     console.log(err);
// })







