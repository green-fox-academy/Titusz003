'use Strict';

export{}

const fs = require('fs');
let copyphaste=function(Original:string,Copy:String){
    let Copied:string="";
    Original=fs.readFileSync(Original,'utf-8').split('\n')
    for(let i=0;i<Original.length;i++){
        for(let k=1;k<Original[i].length+1;k++)
        Copied=Copied+Original[i][Original[i].length-k]
    }
    Copy=fs.writeFileSync(Copy,Copied)
}

copyphaste('reversed-lines.txt','Copy.txt')