'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

let pointToMiddle=function(x:number,y:number){
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(300,200);
    ctx.stroke();
    return(ctx)
}

for(let i=1;i<4;i++){
    pointToMiddle(150*i,100)
}
