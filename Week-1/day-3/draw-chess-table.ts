'use strict';

export{}

let white: string="% % % % % % % % "
let black: string=" % % % % % % % %"

for(let i=1; i<=8;i++){
    if(i%2===0){
        console.log(black);
    }
    else{
        console.log(white);
    }
}