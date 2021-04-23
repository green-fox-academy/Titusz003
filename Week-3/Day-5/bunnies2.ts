'use strict'

function bunnies(n:number){
    if(n<1){
        return 0
    }
    else if(n%2===0){
        return 3+bunnies(n-1)
    }
    else{
        return 2+bunnies(n-1)
    }
}

console.log(bunnies(6))