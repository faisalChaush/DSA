// Example usage:
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [5, 3, 2, 1];

function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;  // Array is not sorted
        }
    }
    return true;  // Array is sorted
}



console.log(isSorted(arr1));  // Output: true
console.log(isSorted(arr2));  // Output: false
