// Guess Password

function guessPassword(){ 
    let password = "xh123"
    return function(guess){
        if(password === guess){
            return "Correct Password"
        }else{
            return "Wrong password"
        }
    }
}

let game = guessPassword()
console.log(game('xh123'))



