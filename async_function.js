// async function always returns a promise
async function getValue() {
    return "Hello"
}

// Below code is same as above

async function getValue1() {
    return new Promise((resolve, reject) => {
        resolve("hello 1")
    })
}

// same as above
async function getValue2() {
    return Promise.resolve("hello 2");
}


console.log(getValue());
getValue1().then((data)=>{
    console.log(data);
})

getValue2().then((data)=>{
    console.log(data);
    
})