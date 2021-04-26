'use strict'


export default class Aircraft{
private _type:string
private _ammo:number
private _maxammo:number
private _damage:number
private _priority:boolean

constructor(type?:string,ammo?:number,maxammo?:number,damage?:number,priority?:boolean){
    this._type = type
    this._ammo = ammo
    this._maxammo = maxammo
    this._damage = damage
    this._priority = priority
}

fight():number{
    let ammo:number = this._ammo
    this._ammo = 0
return ammo * this._damage
}

refillAmmo(ammo:number){
    let currentAmmo = this._ammo
if(ammo > this._maxammo - currentAmmo){
this._ammo = this._maxammo
return ammo - this._maxammo + currentAmmo
}
else{
    this._ammo=ammo+currentAmmo
    return 0
}
}

getType(){
    return `${this._type}`
}

getStatus(){
    return `Type: ${this._type}, Ammo: ${this._ammo}, Damage: ${this._damage}, All damage: ${this._damage*this._ammo}`
}

getDamage(){
    return this._damage*this._ammo
}

isPriority(){
    return this._priority
}
}