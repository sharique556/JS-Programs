// Decorator is a wrapper around a function that alters/enhances its behavior, remaining origina code undisturbed. 
// The main job is still carried out by the function.
// Application : We  can imlement throttle and debounce function with the help of decorators


// Lets suppose this 'slow' function is CPU heavy intensive and pure func
function slow(x){
    console.count(`Called with ${x}`);
    return x;
}
slow(4)
slow(4)
slow(4)

// The above function calls will give count value upto 3, that means function is getting called
// each time for the same inputs

// Lets create caching function so that for the same input, fucntion will not get called.
function cachingDecorators(fun){
    let cache = new Map();
    return function(x){
        if(cache.has(x)){
            return cache.get(x)
        }

        let val = fun(x)
        cache.set(x,val)
        return val

    }
}

let dec = cachingDecorators(slow)
// dec(4)
// dec(4)
// dec(4)  //Comment line 6-8 and uncomment line 29-31 to see the changes

// The above function calls will give count value only 1 for the same input, that means function is not getting called
// each time for the same inputs, rather it is taking cached value if any.   




