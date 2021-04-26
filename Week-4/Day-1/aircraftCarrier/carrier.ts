'use strict'

import { Console, timeStamp } from 'node:console'
import Aircraft from './aircraft'
import F16 from './F-16'
import F35 from './F-35'

class Carrier{
   private _aircraftfleet:Aircraft[]
   private _ammoStorage:number
   private _HP:number

   constructor(ammoStorage:number,HP:number){
       this._aircraftfleet = []
       this._ammoStorage = ammoStorage
       this._HP = HP
   }

   addAircraft(aircraft:Aircraft){
       this._aircraftfleet.push(aircraft)
   }

   fillAircrafts(){
       this._aircraftfleet.sort( function (x,y){
            return Number(y.isPriority()) - Number(x.isPriority())
        });
        if(this._ammoStorage!==0){
       for(let i=0;i<this._aircraftfleet.length;i++){
           this._ammoStorage = this._aircraftfleet[i].refillAmmo(this._ammoStorage)
       }
    }
   }

   Strike(target:Carrier){
       for(let i=0;i<this._aircraftfleet.length;i++){
           target._HP = target._HP - this._aircraftfleet[i].fight()
       }
       if(target._HP<0){
           target._HP=0
       }
   }

   getStatus(){
       let counter:number=0
       let aircraftStats:string=''
       for(let i=0;i<this._aircraftfleet.length;i++){
           counter=counter + this._aircraftfleet[i].getDamage()
       }

       for(let i=0; i<this._aircraftfleet.length;i++){
           aircraftStats= aircraftStats + '\n' + this._aircraftfleet[i].getStatus();
       }
       if(this._HP===0){
       return `It's dead Jim :(`
   }
   else{
       return `HP: ${this._HP}, Aircraft count: ${this._aircraftfleet.length}, Ammo: ${this._ammoStorage}, Total damage: ${counter}, ${aircraftStats}`
   }

}   

}

let aircraft1 = new F16
let aircraft2 = new F35
let aircraft3 = new F35
let aircraft4 = new F16

let USS_Enterprise= new Carrier(3000,5000)
let USSR_Moscow = new Carrier(1000,2000)
USS_Enterprise.addAircraft(aircraft1)
USS_Enterprise.addAircraft(aircraft2)
USS_Enterprise.addAircraft(aircraft3)
USS_Enterprise.addAircraft(aircraft4)
USS_Enterprise.fillAircrafts()
USS_Enterprise.Strike(USSR_Moscow)
console.log (USS_Enterprise.getStatus())
console.log(USSR_Moscow.getStatus())
