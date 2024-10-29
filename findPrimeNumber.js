
// try 1 and easy way to understand

const isPrimeNumber = (num) => {
  if (num <= 1) return false; // Numbers less than 2 are not prime
  for (let divider = 2; divider < num; divider++) {
    console.log(`Checking divider: ${divider}`);
    if (num % divider === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrimeNumber(1));



// try 2
// const isPrimeNumber = (num) => {
//   let divider = 2;
//   if (num % divider == 0) {
//     return false;
//   } else {
//     divider++;
//   }
//   return true;
// };
// console.log(isPrimeNumber(71));











// To find Prime factors (Ase numbers jss wo number / hta)
// To find how many prime factor present in given number

// const primeFactors = (num) => {
//   let primeFactorsArray = [];
//   let divider = 2;

//   while (num > 2) {
//     if (num % divider == 0) {
//       primeFactorsArray.push(divider);
//       num = num / divider;
//     } else {
//       divider++;
//     }
//   }
//   return primeFactorsArray;
// };
// console.log(primeFactors(55));



//       function factorial(number) { 

// if (number === 0 || number === 1) { 

//   return 1; 

// } else { 

//   return number * factorial(number – 1); 

// } 

// } 

//   To find how many prime numbers present in givin number 

// function isPrime(num) {
//   if (num < 2) {
//     return false;
//   }
//   // 2 se leaker sqrt(num) tak ke numbers se check karo
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       // Agar koi smaller number se divide ho rah hai toh yeh prime nhi hai
//       return false;
//     }
//   }
//   // Agar koi smaller number se divide nhi ho rah toh yeh prime hai
//   return true;
// }
// // Example: 1 se 50 tak ke prime numbers nkl
// for (let i = 1; i <= 50; i++) {
//   if (isPrime(i)) {
//     console.log(i);
//   }
// }
