
let students = [
    {name: 'John', id: 123, marks : 98},
    {name: 'Baba', id: 101, marks : 23},
    {name: 'yaga', id: 200, marks : 45},
    {name: 'Wick', id: 115, marks : 75}
]

// names of the students who scored more than 50 marks using reduce
const morethan50 = students.reduce((acc,currVal)=>{
    if(currVal.marks > 50){
        acc.push(currVal.name)
    }
    return acc
},[])
console.log(morethan50);


//sum of marks of the students with id > 120.
let acc = 0 ;
const sumOfMarksGreaterThan120 = students.reduce((acc,currVal)=>{
    if(currVal.id > 120){
        acc += currVal.marks
    }
    return acc
},acc)

console.log(sumOfMarksGreaterThan120)

// print the total marks of the students with marks greater than 50 after a 
// grace of 15 marks has been added to those students who scored less than 50.

const sumOfMarks = students.reduce((acc,currVal)=>{
    if(currVal.marks < 50){
        acc += (currVal.marks + 15)
    }else{
        acc += currVal.marks 
    }
    return acc
},acc=0)
console.log(sumOfMarks);