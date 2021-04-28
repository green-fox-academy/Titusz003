'use strict'

import { Instrument } from "./instruments";

export abstract class StringedInstruments extends Instrument{
    protected _numberOfStrings:number

    abstract sound():string

    play():void{
         console.log(`${this._name},a ${this._numberOfStrings}-stringed instrument that goes ${this.sound()}.`)
    }
}