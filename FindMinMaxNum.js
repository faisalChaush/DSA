function findMinMax(arr) {
    let max = arr[0];
    let min = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return { max: max, min: min };
}


// Example usage:
let arr = [3, 5, 1, 8, -2, 7];
let result = findMinMax(arr);
console.log("Max:", result.max); // 8
console.log("Min:", result.min); // -2
