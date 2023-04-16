//Here in the below code, o/p will be 5 times 6

// function count(){
//     for(var i=1;i<=5;i++){
//         setTimeout(() => {
//             console.log(i);
//         }, i*1000);
//     }
// }

// count()

// Here in the below code, o/p will be desired like 1 to 5 fter each second
// function countWithLet(){
//     for(let i=1;i<=5;i++){
//         setTimeout(() => {
//             console.log(i);
//         }, i*1000);
//     }
// }

// countWithLet()

// Here in the below code,o/p will be desired but with var keyword
function countWithVar(){
    for(var i=1;i<=5;i++){
        function close(i){
            setTimeout(() => {
                console.log(i);
            }, i*1000);
        }
        close(i)
    }
}

countWithVar()