'use strict'

function stringxRemover(string:string,index=string.length){
    if(index<0){
        return string
    }
else{
    return stringxRemover(string.replace("x",""),index-1)
}
}

console.log(stringxRemover('XxxBestFunctionEuxxX'))