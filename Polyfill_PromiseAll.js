const p1 = new Promise((resolve,reject)=>{
    resolve("First promise resolved")
})
const p2 = new Promise((resolve,reject)=>{
    // resolve("Second promise resolved")
    reject("second rejects");
})
const p3 = new Promise((resolve,reject)=>{
    resolve("Third promise resolved")
})

Promise.myPromiseAll = function(arrayOfPromises){
    return new Promise((resolve,reject)=>{
        const results = [];
        let counter = 0;
        for(let i=0;i<arrayOfPromises.length;i++){
            arrayOfPromises[i].then((data)=>{
                results[i] = data;
                counter++;
            if(counter === arrayOfPromises.length){
                resolve(results)
            }
            }).catch((err)=>{
                reject(err)
            })
        }
    })
}

Promise.myPromiseAll([p1,p2,p3]).then((data)=>{
    console.log("Results of promises ==>",data);
    
}).catch((err)=>{
console.log("Failure case",err);
})