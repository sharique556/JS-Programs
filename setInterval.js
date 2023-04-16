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