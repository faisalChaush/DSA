//To change the strings type like upper case to lower case


// Try 1

// let str1="THIS IS SMALL TEXT"
// let result=[]

// for(let i=0;i<str1.length;i++){
//     if(str1[i]==str1[i].toUpperCase()){
//       result.push(str1[i].toLowerCase())  
//     }else if(str1[i]==str1[i].toLowerCase()){
//      result.push(str1[i].toUpperCase())    
//     }
// }
// let final=result.join('')
// console.log(final)

// Try 2

// let str1="THIS IS SMALL TEXT"

// const changeCase=()=>{
//     let result=[]
// for(let i=0;i<str1.length;i++){
//     if(str1[i]==str1[i].toUpperCase()){
//       result.push(str1[i].toLowerCase())  
//     }else if(str1[i]==str1[i].toLowerCase()){
//      result.push(str1[i].toUpperCase())    
//     }
// }
// let final=result.join('')

// return final
// }
// console.log(changeCase(str1))



// Try 3

const changeCase = (str)=>{
    let newStr =''
    for(i=0;i<str.length;i++){
        if(str[i]==str[i].toUpperCase()){
          newStr+=str[i].toLowerCase()
        
        }else{
          newStr+= str[i].toUpperCase()
             
        }
    }
    return newStr
    
}

let result = changeCase("faisal")
console.log(result)