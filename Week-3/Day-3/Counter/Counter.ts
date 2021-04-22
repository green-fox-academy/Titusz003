'use Strict';

export{}

export class Counter{
    counter:number
    original:number
    constructor(counter?:number){
        this.counter=counter || 0
        this.original=counter || 0
    }
    add (number?:number){
        this.counter+=number || 1
    }
    get(){
        return this.counter
    }
    reset(){
        this.counter=this.original
    }
}