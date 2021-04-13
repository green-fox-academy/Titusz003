'use strict';

export{}
let factorial:number= 10

let calculateFactorial=function(factorial: number){
let a=1
for(let i=1;i<=factorial;i++){
a=a*i;
}
return(a)
}
console.log(calculateFactorial(factorial));