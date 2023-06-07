// Finding no. of days between two dates

var date1 = new Date('2022-01-01')
var date2 = new Date('2023-06-07')

const differenetMs = date2.getTime() - date1.getTime()

const diffDays = Math.floor(differenetMs/(1000*60*60*24))

console.log(`Difference between ${date1.toDateString()} & ${date2.toDateString()} would be ${diffDays} days`);