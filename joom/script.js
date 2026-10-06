


//task 1



const studentName = "Lakshmi";
const courseName = "Data Structures";

let score = 75;

console.log("Student Name:", studentName);
console.log("Course Name:", courseName);
console.log("Initial Score:", score);

// Score can be changed because it is declared using let
score = 85;

console.log("Updated Score:", score);

// Block scope
{
    let score = 95;
    console.log("Score inside block:", score);
}

console.log("Score outside block:", score);


// ts2
const square = (n) => n * n;

const greet = (name) => "Hello " + name;

const isAdult = (age) => age >= 18;



//  task 3

