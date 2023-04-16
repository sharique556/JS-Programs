// Implement a product method which will return the product of two numbers when invoked using any of the following two ways
// a) product(4, 5)
// b) product(4)(5)


// Concepts used  : HOFs,Closures 
function product(a,b){
    if(b || b===0){
        console.log("huehueue",a*b)
    }
    else return function(b){
        console.log("heheheh",a*b)
    }
}

product(7,0)
product(3)(0)  //Here 3 is passed as an argument to product function 
// and 4 is passed as an argument to returning function of product

