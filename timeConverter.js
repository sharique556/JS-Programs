// Convert time from 12H format to 24H format

function convert12To24(str){
    let [time,format] = str.split(" ")
    let [hr,min] = time.split(":")
    if(hr === "12") hr = "00"
    if(format === "PM") hr = parseInt(hr) + 12

    return `${hr}:${min}`
}

console.log(convert12To24("01:02 PM"))
console.log(convert12To24("02:05 PM"))
console.log(convert12To24("12:00 PM"))
console.log(convert12To24("12:00 AM"))