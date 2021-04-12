'use strict';

export{}

let lineCount:number=7;

for(let i=0;i<lineCount;i++){
    let symbol="%";
if(i<Math.round(lineCount/2)){
    for(let k=0;k<Math.round(lineCount/2)-i;k++){
        symbol=" "+symbol;
    }
    for(let j=0;j<i;j++){
        symbol=symbol+"%%";
    }
    console.log(symbol);
}
else{
    for(let k=0;k<i-Math.round(lineCount/2)+2;k++){
        symbol=" "+symbol;
    }
    for(let j=0;j<lineCount-i-1;j++){
        symbol=symbol+"%%";
    }
    console.log(symbol);
}
}
