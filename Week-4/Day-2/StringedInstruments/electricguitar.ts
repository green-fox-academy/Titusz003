'use strict'

import { StringedInstruments } from "./stringedInstruments";

export class ElectricGuitar extends StringedInstruments{

    constructor(numberOfStrings?:number){
        super('Electric Guitar')
        this._numberOfStrings=numberOfStrings || 6
    }

    sound():string{
        return `Twang`
    }
}