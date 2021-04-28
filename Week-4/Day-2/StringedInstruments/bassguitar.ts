'use strict'

import { StringedInstruments } from "./stringedInstruments";

export class BassGuitar extends StringedInstruments{

    constructor(numberOfStrings?:number){
        super('Bass Guitar')
        this._numberOfStrings=numberOfStrings || 4
    }
    sound():string{
        return `Duum-duum-duum`
    }
}