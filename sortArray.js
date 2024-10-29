// Try 1
// To sort the array using the built-in JavaScript

let randomArray = [42, 15, 76, 34, 89, 5, 67, 21];

// Sort the array in ascending order
randomArray.sort(function (a, b) {
  return a - b;
});

// Sort the array in descending order
randomArray.sort(function (a, b) {
  return b - a;
});


// console.log("Sorted Array (Ascending):", randomArray);
// console.log("Sorted Array (Descending):", randomArray);




// Try 2
// To sort the array using pure javaScript

const myArray = [42, 15, 76, 34, 89, 5, 67, 21];
const length = myArray.length;

for (i = 0; i < length; i++) {
  for (j = 0; j < length; j++) {
    if (myArray[j] > myArray[j + 1]) {
      let temp = myArray[j];
      myArray[j] = myArray[j + 1];
      myArray[j + 1] = temp;
    }
  }
}
console.log(myArray);



