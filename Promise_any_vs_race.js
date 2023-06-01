//1) Resolving value: Promise.race() resolves with the value of the first promise that settles, 
// whether it's resolved or rejected. Promise.any() resolves with the value of the first promise that resolves.

//2) Rejection behavior: Promise.race() rejects with the same rejection reason as the first promise that rejects. 
// Promise.any() rejects with an AggregateError containing the rejection reasons of all the rejected promises, 
// if all promises reject.

//3) Timing of resolution: Promise.race() resolves or rejects as soon as any promise in the input array settles. 
// Promise.any() only resolves when the first promise in the input array resolves.

const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'Error in promise1'));
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'Error in promise2'));
const promise3 = new Promise((resolve, reject) => setTimeout(reject, 300, 'Error in promise3'));

Promise.race([promise1, promise2, promise3])
    .then((result) => console.log(result)) // If resolved then ---> 'Error in promise2'
    .catch((error) => console.error(error)) 

Promise.any([promise1, promise2, promise3])
    .then((result) => console.log(result)) // Error in promise1
    .catch((error) => console.error(error)) 