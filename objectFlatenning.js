// Flatenning Objects

// Input
const nestedObject = {
    a: {
        b: {
            c: 1,
            d: 2,
        },
        e: 3,
    },
    f: 4,
};

function flattenObject(obj,parentKey="",result={}){
    for(let key in obj){
        const fullKey = parentKey ? `${parentKey}.${key}` : key;
        if(typeof obj[key] ==="object" && 
            !Array.isArray(obj[key]) &&
            obj[key] !== null
        ){
            flattenObject(obj[key],fullKey,result)
        }else{
            result[fullKey] = obj[key]
        }
    }
    return result
}


console.log(flattenObject(nestedObject))

// Output
//   {
//     a.b.c : "1",
//     a.e:"3",
//     f:"4"
//   }
