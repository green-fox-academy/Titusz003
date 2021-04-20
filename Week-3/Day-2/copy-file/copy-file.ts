'use Strict';

export{}

const fs = require('fs');

let status:boolean=true;

let copy=function(copied:string,phaste:string){
    try{
    copied= fs.readFileSync(copied, 'utf-8');
    phaste=fs.writeFileSync(phaste,copied);
}
catch{
    status=false;
}
console.log(status);
}
copy('original.txt','copy.txt')