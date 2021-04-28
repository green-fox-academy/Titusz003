'use strict'

export function anagramCheck(StringA:string,StringB:string){
    if(StringA.split("").sort().join('') === StringB.split("").sort().join(''))
    return true
    else{
        return false
    }
}