'use strict'

function adder(n:number){
if(n<1){
    return 0;
}
else{ 
    return n + adder(n-1);
}
}

console.log(adder(5));