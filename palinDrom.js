

// Try 1

let isPalindrome = true;
let str = "saas";
let length = str.length;

for (let i = 0; i < length / 2; i++) {
  if (str[i] !== str[length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log(`${str} is palindrome`);
} else {
  console.log(`${str} is not palindrome`);
}



// Try 2

// let isPalindrome = false;
// let str = "lol";
// let length = str.length;

// for (let i = 0; i < length / 2; i++) {

//   if (str[i] == str[length - 1 - i]) {
//     isPalindrome = true;
   
//   }else{
//     isPalindrome = false;
//     break;
//   }
// }

// if (isPalindrome) {
//   console.log(`${str} is palindrome`);
// } else {
//   console.log(`${str} is not palindrome`);
// }





// Try 3
// const plaindrom=(str)=>{
  // let isPalindrome=true
  // for(let i=0;i<str.length/2;i++)
  
  // if(str[i]!=str.length-1-i){
  //   isPalindrome=false
  //   break;
  // }
  // return isPalindrome
  
    
// }
// console.log(plaindrom('arra'))

// Try 4

// const plaindrom=(str)=>{
  
// return str===str.split('').reverse().join('')
  
// }



// console.log(plaindrom('arra'))