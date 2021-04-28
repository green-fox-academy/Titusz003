'use strict'

export class Sum{
    _a:number
    _b:number
    constructor(a:number,b:number){
        this._a=a
        this._b=b
    }

    getSum(){
        return this._a+this._b
    }
}