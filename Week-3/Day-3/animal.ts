'use Strict';

export{}

class Animal{
    hunger:number
    thirst:number
    constructor(){
        this.hunger=50
        this.thirst=50
    }
eat(){
    return this.hunger--
}
drink(){
    return this.thirst--
}
play(){
    return this.hunger++, this.thirst++
}
}

let Vufvuf= new Animal()