// Suspending a code execution for 2 sec

var sleep = function(ms){
    return new Promise((resolve)=>{
        setTimeout(resolve,ms);
    })
}

var example = async function(){
    console.log("Start");
    await sleep(2000)
    console.log("End");
}
example()