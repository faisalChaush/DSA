

let str='qwerty'

const plainDom=()=>{
    for(let i=0;i<str.length/2;i++){
        if(str[i]!==str[str.length-1-i]){
          return false
        }
    }
    return true
}
plainDom()
console.log("Before",plainDom())

if(!plainDom()){
      for(let i=str.length-2;i>=0;i--){
        str+=str[i]
      }
    plainDom()
    console.log("After",plainDom())
}









