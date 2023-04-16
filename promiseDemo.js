const roll = [101,102,103,104]

const obj1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(roll[1])
        reject('At roll')
    }, 3000);
})

const obj2 = function(secondRoll){
    return new Promise((resolve, reject) => {
        const name = "Md Sharique";
        const city = "Kolkata"
        setTimeout(() => {
            resolve(`Student having roll num ${secondRoll} has name ${name} and is living in ${city}`)
        }, 3000);
    })
    
}
// obj1.then((secondRoll)=>{
//     console.log(secondRoll)
//     return obj2(secondRoll)
// })
// .then((msg)=>{
//     console.log(msg);
// })
// .catch((err)=>{
//     console.log(err);
// })

async function getInfo() {
    const secondRoll = await obj1
    console.log(secondRoll);
    const Info = await obj2(secondRoll)
    console.log(Info)
}

getInfo()