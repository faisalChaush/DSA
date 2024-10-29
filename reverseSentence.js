let str='my.name.is.faisal.chaush'

const reverseSentence=(str)=>{
  let words=[]
let word=''
    for(let i=0;i<str.length;i++){
        if(str[i]=='.' ){
            words.push(word)
            word=''
        }else{
            word+=str[i]
        }
    }
         words.push(word)
    let result=''
        for(let j=words.length-1;j>=0;j--){
           result+=words[j]
           if(j!==0){
               result+='.' 
           }
        }
    return result

}

console.log(reverseSentence(str))




// try 2

const input = "I.love.my.javascript.program";
const output = input.split('.').reverse().join('.');
console.log(output); // Output: "program.javascript.my.love.I"