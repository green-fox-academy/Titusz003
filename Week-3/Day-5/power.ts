'use strict'

function power(base:number,n:number){
    if(n<1){
        return 1
    }
    else{
        return base*power(base,n-1)
    }
}

console.log(power(3,3))