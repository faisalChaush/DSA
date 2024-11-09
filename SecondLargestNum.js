// Try 1


let arr=[5,4,10,8,3,6,14,9,1,]

const secondLargest=()=>{
let secondNum=0
let LargestNum=0

    for(let i=0;i<arr.length;i++){
      for(let j=0;j<arr.length;j++){
        if(arr[j]>LargestNum){
            secondNum=LargestNum
            LargestNum=arr[j]
        }
      }
    }
 return {LargestNum,secondNum}
}
console.log(secondLargest())



// Try 2

let array=[5,4,10,8,3,6,14,9,1]

const dynamicLargestNum=(array,num)=>{
    
    for(let i=0;i<array.length;i++){
     for(let j=0;j<array.length;j++){
          if(array[j]>array[j+1]){
              let temp=array[j]
              array[j]=array[j+1]
              array[j+1]=temp
          }
      }
    }

 return {result:array[array.length-num]}
}
console.log(dynamicLargestNum(array,2))