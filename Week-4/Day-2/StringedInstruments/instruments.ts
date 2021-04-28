'use strict'

export abstract class Instrument {
    protected _name:string

    abstract play():void

    constructor(name:string){
        this._name=name
    }


}