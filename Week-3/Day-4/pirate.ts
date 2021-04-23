'use strict';

export default class Pirate {
   private _intoxicationLevel: number;
   private _isPassedOut: boolean;
   private _isDead: boolean;
   private _name: string;
   private _weapon:string

  constructor(name: string){
    this._intoxicationLevel = 0;
    this._isPassedOut = false;
    this._isDead = false;
    this._name = name;
    let randomWeapon=Math.floor(Math.random()*3)
    if( randomWeapon===0){
      this._weapon= 'musket'
    }
    else if(randomWeapon===1){
      this._weapon='pistol'
    }
    else{
    this._weapon='sabre'
  }
}

  public getName(): string {

    return this._name;
  }

  public getIntoxicationLevel(): number {
    return this._intoxicationLevel;
  }

  public getIsPassedOut(): boolean {
    return this._isPassedOut;
  }

  public getHealth():boolean{
      return this._isDead;
  }

  public setIntoxicationLevel(number: number): void {
    this._intoxicationLevel +=  number;
  }

  public drinkSomeRum(): void {
   if(this._isDead === true){
      console.log(`The pirate is dead!`);
    }
  this._intoxicationLevel += 1;
  }

  public howsItGoingMate(): string{
    if(this._isDead === true){
      return `The pirate is dead!`;
    }
    if(this._intoxicationLevel < 4){
      return `Pour me anudder!`;
    }
    this._isPassedOut = true;
    this._intoxicationLevel = 0;
    return `Arghh, I'ma Pirate. How d'ya d'ink its goin?`;
  }

  public die(): void {
    this._isDead = true;
  }
  public brawl(otherPirate: Pirate): string {
  let chance: number = Math.floor(Math.random() *3);
  if (chance === 0){
    this._isPassedOut = true;
    otherPirate._isPassedOut = true;
    return `Both pirates passed out!`;
  } else if(chance === 1){
    otherPirate.die();
    return `${this._name} won the fight!`
  } else {
    this.die();
    return `${otherPirate._name} won the fight`;
   }
 }
 public attack(target:Pirate){
   if(this._isDead===true){
     return
   }
   let Accuracy= Math.floor(Math.random()*100)
   if(this._weapon='sabre'){
     if(Accuracy>50){
       target.die()
     }
   }
   if(this._weapon='pistol'){
     if(Accuracy*2>50){
       target.die()
     }
   }
   if(this._weapon='musket'){
     if(Accuracy*3>50)
     target.die()
   }
 }
}

let marika:Pirate = new Pirate('Marika')
let petike:Pirate = new Pirate('Petike')
marika.attack(petike)
petike.attack(marika)
console.log(petike.getHealth())
console.log(marika.getHealth())