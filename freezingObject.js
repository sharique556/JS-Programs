function deepFreeze(obj){
    Object.keys(obj).forEach((elem)=>{
        if(typeof obj[elem]==='object' && obj[elem] !== null){
            deepFreeze(obj[elem])
        }
    })
    return Object.freeze(obj)
}


const user = { name: "Alice", details : { age:30 }};
Object.freeze(user);
user.name = "Box";
user.details.age = 23;
console.log("with in-built freeze",user);
deepFreeze(user);
user.details.age = 45;
console.log("With deep freeze",user);



