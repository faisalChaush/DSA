
// Try 1
// To find missing numbers

// function findMissingNumbers(arr) {

//     arr.sort((a, b) => a - b);
//     let missingNumbers = [];

//     for (let i = 0; i <arr.length ; i++) {
//         if (!arr.includes(i)) {
//             missingNumbers.push(i);
//         }
//     }

//     return missingNumbers;
// }

// let numbers = [8, 3, 1, 5, 11];
// let missingNumbers = findMissingNumbers(numbers);

// console.log("Missing Numbers:", missingNumbers);






// Try 2
// To find missing numbers

// function findMissingNumbers(arr) {
//     const n = arr.length;
//     const missingNumbers = [];

//      arr.sort((a, b) => a - b);

//     for (let i = 1; i < n; i++) {
//         const diff = arr[i] - arr[i - 1];

//         if (diff > 1) {
//             for (let j = 1; j < diff; j++) {
//                 missingNumbers.push(arr[i - 1] + j);
//             }
//         }
//     }
//     return missingNumbers;
// }

// const inputArray = [4, 2, 7, 1, 15];
// console.log("Missing numbers:", findMissingNumbers(inputArray));


// Try 3
// To fill missing numbers in given array


const arr = [3, 5, 6, 8, 9, 10, 13, 15];
let missedArray = [];//4,7,11,14
let max =arr[ arr.length-1];
let min =arr[0];

for (let i = min+1; i <= max; i++) { 
    let isFound = false;
    for (let j = min; j <max; j++) {
        if (arr[j] === i) {
            isFound = true;
            break;
        }}
    if (!isFound) {
        missedArray.push(i);
    }
}
console.log(missedArray)




// Try 4
// To find missing numbers from 1 to last element of array


// const newArray = [3, 5, 6, 8, 9, 10, 13, 15];
// let filledArray = [];

// // Check if the first element in newArray is greater than 1
// if (newArray[0] > 1) {
//     // Add missing numbers from 1 up to the first element in newArray
//     for (let i = 1; i < newArray[0]; i++) {
//         filledArray.push(i);
//     }
// }

// for (let i = 0; i < newArray.length; i++) {
//     let currentItem = newArray[i];
//     filledArray.push(currentItem);

//     if (i < newArray.length - 1) {
//         let nextItem = newArray[i + 1];

//         // Check for missing numbers between the current and next item
//         for (let j = currentItem + 1; j < nextItem; j++) {
//             filledArray.push(j);
//         }
//     }
// }

// console.log(filledArray);
