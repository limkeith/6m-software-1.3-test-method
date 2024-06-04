/*
    Task
    - In the function, iterate through the array `studentList`.
    - Print each student's name inside the loop using console.log().
*/

const studentList = ["Johnson", "Christina", "Michael", "Lina", "Larry", "Michelle", "Bob", "Wilson"]

function printStudentNames(){
   // Iterate through the studentList array
   for (let i = 0; i < studentList.length; i++) {
    // Print each student's name
    console.log(studentList[i]);
}
}

printStudentNames();

// Ignore the code below this line
module.exports = {
    studentList,
    printStudentNames
}