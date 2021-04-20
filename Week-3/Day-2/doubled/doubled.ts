'use Strict';

export{}

const fs = require('fs');

let copyphaste=function(Original:string,Copy:String){
    let Copied:string="";
    Original=fs.readFileSync(Original,'utf-8')
for(let i=0;i<Original.length;i++){
if(i%2===0){
    Copied=Copied+Original[i];
    }
}
Copy=fs.writeFileSync(Copy,Copied)
}
copyphaste('dublicated-char.txt','Copied.txt')