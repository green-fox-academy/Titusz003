'use strict'

import { StringedInstruments } from "./stringedInstruments";

export class Violin extends StringedInstruments{

    constructor(numberOfStrings?:number){
        super('Violin')
        this._numberOfStrings=numberOfStrings || 4
    }

        sound():string{
            return `Screech`
        }
    }
