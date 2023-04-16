// Task is to get the roll no array afer 2 secs
// To get the name of secod roll num after 2 secs
// to get the info of that student

const rollArr = [30,31,32,33,34,35]

function getRollNum(arr) {
    setTimeout(()=>{
        console.log(arr)
        function getSecondRoll(arr){
            setTimeout(() => {
                console.log("second roll num",arr[1])
                const name = "Md Sharique"
                function getInfo(name,rollNum){
                    setTimeout(() => {
                        console.log(`Second student name is ${name} and roll num is ${rollNum}`)
                    },2000);
                }
                getInfo(name,arr[1])
            },2000);
        }
        getSecondRoll(arr)
    },2000)
}
getRollNum(rollArr)