'use strict';

export{}

let lineCount:number=4;

for(let i=0;i<lineCount;i++){
    let symbol="%";
    for(let k=0;k<lineCount-i;k++){
        symbol=" "+symbol;
    }
    for(let j=0;j<=i-1;j++){
        symbol=symbol+"%%";
    }
    console.log(symbol);
}