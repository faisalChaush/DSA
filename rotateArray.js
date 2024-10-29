// Write a program to get the following output. Do not use any inbuilt functions!
// A = [1,2,3,4,5] Rotate the array n times 
// Input - N = 1, A = [1,2,3,4,5] == Output a = [5,1,2,3,4] 
// Input - N = 2, A = [1,2,3,4,5] ===> Output aa =[4,5,1,2,3]



let array=[1,2,3,4,5]
let output=[]

const convertArray=(arr,n)=>{
    for(let i=0;i<arr.length;i++){
    if(n>i){
        output[i]=arr.length-i
    }else{
       output[i]=arr[i-n]
    }
    
  }
return output
}

let result1=convertArray(array,1)
console.log(result1)

