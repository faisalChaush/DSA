
let input= "<p>This is <b>an example</b> HTML string.</p>"
let isTag=true
let output=''

for(let i=0;i<input.length;i++){
    if(input[i]=='<'){
        isTag=true
    }else if(input[i]=='>'&& isTag){
        isTag=false
    }else if(!isTag){
        output+=input[i]
    }
}
console.log(output)