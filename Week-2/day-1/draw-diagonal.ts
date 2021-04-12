'use strict';

export{}

let lineCount: number = 6;

for(let i=0;i<lineCount;i++){
    let sign="%";
    if(i===0){
        for(let k=0;k<lineCount-1;k++){
sign=sign+"%";
        }
        console.log(sign);
    }
    else if(i>0 && i<lineCount-1){
        for(let k=1;k<i;k++){
        sign=" "+sign;
    }
    for(let j=1;j<lineCount-1-i;j++){
        sign=sign+" ";
    }
    console.log("%"+sign+"%");
}   
    else{
        for(let k=0;k<lineCount-1;k++){
            sign=sign+"%";
        }
        console.log(sign);
    }
}
