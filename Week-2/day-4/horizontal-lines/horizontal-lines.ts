'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

let lines=function(x:number,y:number){
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+50,y);
    ctx.stroke();
    return(ctx)
}

for(let i=1;i<4;i++){
    lines(100*i,50*i)
}
