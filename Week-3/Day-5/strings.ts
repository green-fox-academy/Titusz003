'use strict'

function stringxToy(string:string,index=string.length){
    if(index<0){
        return string
    }
    else {
        return stringxToy(string.replace('x','y'),index-1)
    }
}

console.log(stringxToy('XxxBestFunctonEUxxX'))