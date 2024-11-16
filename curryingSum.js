function sum(...args){
    if(args.length==3) console.log(args[0]+args[1]+args[2]);
    else {
        return function(...args1){
            if(args1.length==2){
                console.log(args[0]+args1[0]+args1[1])
            }else{
                return function(...args2){
                    console.log(args[0]+args1[0]+args2[0])
                }
            }
        }
    }
}

sum(1,2,3)
sum(1)(2,3)
sum(1)(2)(3)

// Variations "1_2_3"