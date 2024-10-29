let str = 'swiss';
let charCount = {};  // Object to count occurrences of each character

// Step 1: Count occurrences of each character
for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charCount[char]) {
        charCount[char]++;
    } else {
        charCount[char] = 1;
    }
}

// Step 2: Find the first non-repeated character
let result = '';
for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]] === 1) {
        result+= str[i];
    
    }
}

console.log(result[0]);
