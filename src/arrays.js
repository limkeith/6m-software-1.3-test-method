// Declaring an empty array
let empty = [];

// Initializing array with default values
let defaults = [1,2,"3"]; // some programming languages do not allow mixed type.
console.log("defaults", defaults);

// Retrieve the first element in array
console.log("first element value is", defaults[0]);

// Looping an array
for(let i=0 ;i<defaults.length; i++){
    console.log("value of i is", i, "and the value is", defaults[i]);
}

/*Class discussion
Array methods:
Break out into groups and research how each of the array methods can be used and give an example.
    1. push
    2. pop
    3. shift
    4. unshift
    5. splice
    6. slice
*/

//Exercise:
/*
Question 1:
1. Create an array called "grades" with 5 numeric values
2. Use a for loop to loop through the array to get the average of the values.
*/

let grades=[1,2,3,4,5];
let sum = 0;

for(let i=0; i<grades.length; i++){
    sum = sum + grades[i];
    console.log(sum);
    }
 
let average = sum/grades.length;
console.log(`Average grade is ${average}`);

/*
Question 2:
1. Use array methods to combine the two arrays and remove all even-indexed values
const arr1 = [15, 12, 11, 29, 5];
const arr2 = [13, 2, 6, 7];
*/


const arr1 = [15, 12, 11, 29, 5];
const arr2 = [13, 2, 6, 7];

const combinedArray = arr1.concat(arr2);
console.log(combinedArray);

const newArr =[];
for (i=0; i<combinedArray.length; i++) {
    if (i%2 !== 0){
        newArr.push(combinedArray[i]);
    }
}  
console.log(newArr);