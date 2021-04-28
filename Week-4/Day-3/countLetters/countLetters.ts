'use strict'

export function countLetters(string:string){
    let object = {};
       let arr = string.split("")

       for(let i=0;i<arr.length;i++){
           if(Object.keys(object).includes(arr[i]) === false){
               object[arr[i]]=1;
       }
       else{
           object[arr[i]]+=1
       }

    }
    return object
}