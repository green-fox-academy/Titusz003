'use strict';

export{}

let black: string="";

for(let i=1; i<=8;i++){
    black="";
    if(i%2===0){
       for (let k=1;k<=16;k++){
           if(k%2===0){
               black= black+"%";
           }
           else{black=black+" ";
        }
    }
    console.log(black); 
    }
    else{
    for(let k=1;k<=16;k++){
        if(k%2===0){
        black=black+" ";
        }
        else{
            black=black+"%" 
    }   
}
console.log(black);
}
}