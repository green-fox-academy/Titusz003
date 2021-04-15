'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

let squares=function(x:number,y:number){
    ctx.fillRect(x, y, 50, 50);
    return(ctx)
}

squares(50,50)
squares(100,100)
squares(150,150)