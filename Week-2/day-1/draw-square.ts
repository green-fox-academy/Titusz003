'use strict';

export{}

let lineCount: number = 6;

for(let i=0; i<lineCount;i++){
let sign="";
if(i===0){
    for(let k=0;k<lineCount;k++){
        sign=sign+"%";
    }
    console.log(sign);
}
else if(i>0 && i<lineCount-1){
    for(let k=0;k<lineCount-2;k++){
        sign=sign+" ";
    }
    console.log("%"+sign+"%");
}
else{
    for(let k=0;k<lineCount;k++){
    sign=sign+"%";
}
console.log(sign);
}
}
