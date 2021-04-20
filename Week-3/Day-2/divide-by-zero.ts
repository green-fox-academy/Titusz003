'use Strict';

export{}

let divider= function(number: number){
    if(number===0){
        throw 'you cant divide with 0';
    }
   return 10/number
}
try{
console.log(divider(0))
}
catch(error){
    console.error(error)
}