// But same cachingDecorator implementation will not work with object method. 
// For that, we need to use .call method with 'this' keyword
// For solution visit javascript.info Decorators page

let worker = {
    someMethod() {
      return 1;
    },
  
    slow(x) {
      // scary CPU-heavy task here
      console.count("Called with " + x);
      return x * this.someMethod(); // (*)
    }
  };

  function cachingDecorators(fun){
    let cache = new Map();
    return function(x){
        if(cache.has(x)){
            return cache.get(x)
        }
        // let val = fun(x)  / Unlike previous, it will not work simply, we need to bind func(borrowerMethod)
        // to this(borrowerObject)
        let val = fun.call(this,x)
        cache.set(x,val)
        return val

    }
}

worker.slow = cachingDecorators(worker.slow)
worker.slow(4)
worker.slow(4)
worker.slow(4)