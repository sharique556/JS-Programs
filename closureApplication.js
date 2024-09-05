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
// console.log(game('xh123'))

// Data encapsulation with closures 
// 1)  Here count variable is not directly accessed outside outer function

function outer() {
    var count = 0;
    return function counter() {
        count++
        console.log(count)
    }
}

 var counter1 = outer()
 counter1()
 counter1()
 counter1()

//  2) Lets make above code scalable with 'this' keyword



