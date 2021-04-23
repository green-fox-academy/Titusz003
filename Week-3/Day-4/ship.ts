'use strict';
import  Pirate from './pirate';

export default class Ship {

  private _crew: Pirate[];
  private _captain: Pirate;
  private _name:string
  private _isDestroyed:boolean
  private _cannons:number
  private _type:string
  private _evasion:number
  private _integrity:number

  constructor(name:string,type:string){
     this._name=name
     this._type=type
     this._isDestroyed=false
     if(type==='Galleon'){
         this._cannons=40
         this._evasion=0.1
         this._integrity=200
     }
     else if(type==='Frigate'){
         this._cannons=10
         this._evasion=0.3
         this._integrity=100
     }
     else if(type==='Galiot'){
         this._cannons=12
         this._evasion=0.3
         this._integrity=100
     }
      
  }
  public manpower():number{
    return this._crew.length
  }

  public getIntegrity():number{
      return this._integrity
  }

  public getStatus():boolean{
      return this._isDestroyed
  }

  public getCaptain(): Pirate {
    return this._captain;
  }

  public fillShip(): void {
  this._crew = [];
  this._captain = new Pirate('THE CAPTAIN');
  if(this._type === 'Galleon'){
  let crewNumber: number = Math.floor(Math.random() * 100+101);
  for(let i: number = 0; i < crewNumber; i++){
    this._crew.push(new Pirate(`Pirate nr. ${i}`))
   }
}
else if(this._type === 'Frigate' || this._type === 'Galiot'){
    let crewNumber: number = Math.floor(Math.random() * 50+51);
    for(let i: number = 0; i < crewNumber; i++){
      this._crew.push(new Pirate(`Pirate nr. ${i}`))
}
  }
}

public searchByName(name: string) {
 for(let i: number = 0; i < this.manpower(); i++){
     if(this._crew[i].getName() === name){
       return this._crew[i];
  }
 }
}

public nextAlive(){
    for(let i=0;i<this.manpower();i++){
        if(this._crew[i].getHealth()===false){
            return this._crew[i]
        }
    }
}

public crewAlive(){
    let counter:number=0
    for(let i = 0; i < this.manpower(); i++){
        if(this._crew[i].getHealth() === false){
            counter++
        }
    }
    return counter
}


public shipStats(){
    let cptStatus= this._captain.getHealth()
    cptStatus===true ? console.log(`The Captian drank ${this._captain.getIntoxicationLevel()} rum and dead`) : console.log(`The Captian drank ${this._captain.getIntoxicationLevel()} rum and alive`)
    console.log(`${this._crew.length} crewmen alive`)
}

public battle(otherShip:Ship){
if(this.manpower() - this._captain.getIntoxicationLevel() > otherShip.manpower() - otherShip._captain.getIntoxicationLevel()){
    for(let i=0;i<otherShip.manpower();i++){
        let kill= Math.floor(Math.random()*3)
        if(kill===1){
            otherShip._crew[i].die
        }
    }
    for(let i=0; i<this.manpower();i++){
        for(let k=0;k<Math.floor(Math.random()*4);k++){
            this._crew[i].drinkSomeRum()
        }
    }
    for(let k=0;k<Math.floor(Math.random()*4);k++){
        this._captain.drinkSomeRum()
        }
    return `The ship won. Let's have a party!`
}
else{
    for(let i=0;i<this.manpower();i++){
        let kill= Math.floor(Math.random()*3)
        if(kill===1){
            this._crew[i].die()
        }
}
for(let i=0; i<otherShip.manpower();i++){
    for(let k=0;k<Math.floor(Math.random()*4);k++){
        otherShip._crew[i].drinkSomeRum()
    }
}
for(let k=0;k<Math.floor(Math.random()*4);k++){
    otherShip._captain.drinkSomeRum()
    }
return `The ship lost. ${this.manpower()-this.crewAlive()} crewmen died.`
}

}

public fire(target:Ship){
if(this._isDestroyed===true){
    return `${this._name} is sunk.`
}
else{
for(let i=0;i<this._cannons;i++){
    if(target._evasion < Math.random()){
    target._integrity = target._integrity - Math.round(Math.random())
    }
    }
}
}

public boarding(defender:Ship){
    let i=0
    let k=0
    let j=0
for(;;){
if(i%2===0){
    if(k>=this._crew.length){
        k=0
    }
    if(this._crew[k].getHealth()===true){
        k++
    }
    this._crew[k].attack(defender.nextAlive())
    if(defender.crewAlive()===0){
        return `${this._name} successfully boarded ${defender._name}`
    }
    k++
}
else{
    if(j>=defender._crew.length){
        j=0
    }
    if(defender._crew[j].getHealth()===true){
        j++
    }
    defender._crew[j].attack(this.nextAlive())
    if(this.crewAlive()===0){
        return `${this._name} failed to boarded ${defender._name}`
    }
    j++
}
i++
}
}

public engagement(defender:Ship){
    let i=0
for(;;){
  if(i%2===0){
      this.fire(defender)  
      //console.log(`defender HP ${defender._integrity}`)
      if(defender._integrity<=0){
          return `${this._name} won!`
      }    
    }
    else {
        defender.fire(this)
        //console.log(`attacker HP ${this._integrity}`)
        if(this._integrity<=0){
            
            return `${defender._name} won!`
        }
    }
    i++
}

    }
}

let titanic:Ship= new Ship('Titanic','Galleon')
let barbarossa:Ship= new Ship('Barbarossa','Galleon')
titanic.fillShip()
barbarossa.fillShip()
console.log(titanic.manpower())
console.log(barbarossa.manpower())
//console.log(titanic.battle(barbarossa))
console.log(barbarossa.boarding(titanic))
