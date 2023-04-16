// Implementing custom 'Bind' Method

// let obj = {
//     firstName : "Md",
//     lastName : "Sharique"
// }

// let printMyName = function(city,state,country){
//     console.log(this.firstName+" "+this.lastName+" is from"+" "+city+" ,"+state+" ,"+country);
// }

// Function.prototype.mybind = function(...args){
//     let borrowedMethod = this
//     params = args.slice(1)
//     return function(...args2){
//         // borrowedMethod.call(args[0],args[1])
//         borrowedMethod.apply(args[0],[...params,...args2])
//     }
// }

// let anotherInfo = printMyName.mybind(obj,"Kolkata","West Bengal")
// anotherInfo("India")

const person = {
    firstName : "Md",
    lastName : "Sharique"
  }
  
  const getName = function(city,state,country,continent){
    console.log(`${this.firstName} ${this.lastName} ${city} ${state} ${country} ${continent}`)
  }
  
  const Info = getName.bind(person,"kolkata")
  Info("West Bengal","India","Asia")
  
  Function.prototype.myOwnBind = function(...args){
    // console.log(args)
    let params = args.slice(1)
    let borrowedMethod = this;
    return function(...props){
    //   console.log("see",props)
  //    borrowedMethod.call(args[0],params,props[0],props[1],props[2])
      borrowedMethod.apply(args[0],[...params,...props])
    }
  }
  
  const InfoPolyfill = getName.myOwnBind(person,"kolkata")
  InfoPolyfill("west bengal","India","Asia")