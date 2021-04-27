'use strict'

import { PrintAllFields } from "./printable"

export class Domino implements PrintAllFields{
    _a:number
    _b:number

    constructor(a:number,b:number){
    this._a=a
    this._b=b
    }

    printAllFields():void{
        console.log(`Domino A side: ${this._a}, B side: ${this._b}`)
    }
}