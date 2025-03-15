// Difference between setTimeout and setInterval is that
// setTimeout performs the task once the specified time is elapsed
// where as setInterval performs the task after every interval of specified time

// Show the console after the interval of every sec upto 5 secs

let intervalId = setInterval(() => {
    console.log('Display');
  }, 1000);
  
  // Clear the interval after 5 seconds
  setTimeout(() => {
    clearInterval(intervalId);
  }, 7000);

  // Log number from 1 to 10 in each 1 second intervals using setInterval

  function logNumbers(){
    let number = 1;
    let timer = setInterval(() => {
        console.log(number);
        if(number==10) clearInterval(timer)
        number++;
    },1000);
}

logNumbers()