// To find duplicates numbers in array


//  try 1
// find duplicates numbers using the built-in JavaScript

let arr = [10,20,30,40,20,30,10,];
let uniqArray1 = [];

arr.forEach((item)=>{
   if(!uniqArray1.includes(item)){
      uniqArray1.push(item)
   }
})
  console.log(uniqArray1)

// 
// find duplicates numbers using the pure JavaScript

let duplicateArr=[]
let uniqArray = [];

for(let i=0;i<arr.length;i++){
    let isDuplicate=false
    for(let j=0;j<uniqArray.length;j++){
        if(arr[i]==uniqArray[j]){
            duplicateArr.push(arr[i])
            isDuplicate=true
            break
        }
    }
    if(!isDuplicate){
        uniqArray.push(arr[i])
    }
}

console.log("arr",arr)
console.log("uniqArray",uniqArray)
console.log("duplicateArr",duplicateArr)