//1) Resolving value: Promise.race() resolves with the value of the first promise that settles, 
// whether it's fullfilled or rejected. Promise.any() resolves with the value of the first promise that fulfilled.

//2) Rejection behavior: Promise.race() resolves with the same rejection reason as the first promise that rejects. 
// Promise.any() resolves with an AggregateError containing the rejection reasons of all the rejected promises, 
// if all promises reject.

//3) Timing of resolution: Promise.race() resolves or rejects as soon as any promise in the input array settles. 
// Promise.any() only resolves when the first promise in the input array fulfilled.

const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'Success in promise1'));
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'Error in promise2'));
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 300, 'Error in promise3'));

// Promise.race([promise1, promise2, promise3])
//     .then((result) => console.log(result)) // If resolved then ---> 'Error in promise2'
//     .catch((error) => console.error(error))

// Promise.any([promise1, promise2, promise3])
//     .then((result) => console.log(result)) // Error in promise1
//     .catch((error) => console.error(error))


// Promise.all([promise1, promise2, promise3])
//     .then(result => console.log("check success of All ", result))
//     .catch((error) => console.error("check reject of All ", error))

// Promise.allSettled([promise1, promise2, promise3])
//     .then(result => console.log("check success of All Settled ", result))
//     .catch((error) => console.error("check reject of All Settled", error)) 