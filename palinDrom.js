
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

let isPlainD = false;
let str2 = "lol";

for (let i = 0; i < str2.length / 2; i++) {
  if (str2[i] == str2[str2.length - 1 - i]) {
    isPlainD = true; 
  }else{
    isPlainD = false;
    break;
  }
}

if (isPalindrome) {
  console.log(`${str2} is palindrome`);
} else {
  console.log(`${str2} is not palindrome`);
}





// Try 3

const plainDom=(str)=>{
  let isPalindrome=true
  for(let i=0;i<str.length/2;i++)
  
  if(str[i]!=str.length-1-i){
    isPalindrome=false
    break;
  }
  return isPalindrome
    
}
console.log(plainDom('boob'))



// Try 4

const plainDom2=(str)=>{

return str===str.split('').reverse().join('')
  
}

console.log(plainDom2('saas'))