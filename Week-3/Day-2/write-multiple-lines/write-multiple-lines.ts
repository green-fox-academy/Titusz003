'use Strict';

export{}

const fs = require('fs');

let liner= function(path:string,word:string,number:number){
    let solution:String='';
    for(let i=0;i<number;i++){
        solution=solution+'\n' + word;
    }
    try{
    fs.writeFileSync(path, solution);
    }
    catch(error){}
}

liner('mytext.txt','apple',5)

