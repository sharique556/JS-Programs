const person = {
    name : "Md Sharique",
    age : 27,
    contact : {
        phoneNo : 12345,
        mobileNo : 8981059816
    },
    // Uncomment below one to find limitation of JSON parse method
    // x : undefined,  //Lost
    // date : new Date  //type converts from obj to string with json parse
}
// Shallow copy
// const shallowCopy = Object.assign({},person)
// shallowCopy.name = "Md Danish"
// shallowCopy.contact.phoneNo = "67890"
// console.log(shallowCopy,person)

// Deep Copy with JSON parse
const deepCopyJson = JSON.parse(JSON.stringify(person))
deepCopyJson.name = "Md Danish"
deepCopyJson.contact.phoneNo = "67890"
console.log(person,deepCopyJson);

// Limitations of jSON parse with date,circular reference,regEx etc
console.log(typeof person.date,typeof deepCopyJson.date)

// with structeredClone
const clone = structuredClone(person)
console.log(person,clone)