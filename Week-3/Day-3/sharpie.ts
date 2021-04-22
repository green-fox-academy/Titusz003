'use Strict';

export{}

class Sharpie{
    color:string
    width:number
    inkAmount:number

    constructor(color:string,width:number){
        this.color=color
        this.width=width
        this.inkAmount=100
    }
    use(){
        return this.inkAmount-10
    }  
    }
    let sharpie1= new Sharpie('blue',200)