


// const reversString=(str)=>{
//     let s1=str.split("")
//     let myReverse=[]
//       for(let i=s1.length-1;i>=0;i--){
//         myReverse.push(s1[i])
//       }
//       return myReverse.join('')
//     }
    
// console.log(reversString('faisal'))





const reversString=(str)=>{
    let myReverse=""
      for(let i=str.length-1;i>=0;i--){
        myReverse+=str[i]
      }
      return myReverse
    }
    
console.log(reversString('faisal'))




// const reversString=(str)=>{
//     return str.split('').reverse().join('')
// } 

// console.log(reversString('suleman'))