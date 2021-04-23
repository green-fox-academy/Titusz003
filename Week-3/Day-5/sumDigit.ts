'use strict'

function sumDigit(n:number){
if(n<1){
    return 0
}
else{
    return n%10+sumDigit(Math.floor(n/10))
}
}
console.log(sumDigit(126))