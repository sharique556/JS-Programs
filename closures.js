let x = 10;
function foo(){
    let y = 5 ;
    function bar(){
        let z = 3;
        return x + y + z //Here bar func remembers the variables x & y defined in the outer scope 
    }
    return bar()
}

console.log(foo())