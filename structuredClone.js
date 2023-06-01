const person = {
    name : "Md Sharique",
    address : {
        street : "10C Kustia Road,Kolkata",
        pincode : '700039'
    },
    x : undefined
}

const deepPerson = JSON.parse(JSON.stringify(person))
deepPerson.name = "Md Danish"
deepPerson.address.pincode = '700089'
console.log(person,deepPerson)
const structeredClone = structuredClone(person)
console.log(person,structeredClone)