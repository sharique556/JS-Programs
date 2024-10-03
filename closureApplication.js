// Guess Password

// function guessPassword(){ 
//     let password = "xh123"
//     return function(guess){
//         if(password === guess){
//             return "Correct Password"
//         }else{
//             return "Wrong password"
//         }
//     }
// }

// let game = guessPassword()
// console.log(game('2389'))

// Data encapsulation with closures 
// 1)  Here count variable is not directly accessed outside outer function

// function outer() {
//     var count = 0;
//     return function counter() {
//         count++
//         console.log(count)
//     }
// }

//  var counter1 = outer()
//  counter1()
//  counter1()
//  counter1()

//  2) Lets make above code scalable with 'this' keyword

// function Outer() {
//     var count = 0;
//     this.incrementCounter = function() {
//         count++
//         console.log(count)
//     }
//     this.decrementCounter =  function() {
//         count--
//         console.log(count)
//     }
// }

//  var counter1 = new Outer()
//  counter1?.incrementCounter()
//  counter1?.incrementCounter()
//  counter1?.decrementCounter()
//  counter1?.decrementCounter()
//  counter1?.decrementCounter()
