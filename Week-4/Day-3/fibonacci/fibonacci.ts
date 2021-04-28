'use strict'

export function fibonacciIndex(index:number){
    let n1=0
    let n2=1
    let next:number
    for(let i=0;i<index-2;i++){
        next=n1+n2
        n1=n2
        n2=next
    }
    return next
}