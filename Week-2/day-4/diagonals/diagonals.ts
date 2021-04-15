  
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

let drawLine= function(xStart:number,yStart:number,xEnd:number,yEnd:number){

    if(xStart===0 && yStart===0){
        ctx.strokeStyle = 'green';
    }
    else{
        ctx.strokeStyle = 'red';
    }
    
    ctx.beginPath();
    ctx.moveTo(xStart,yStart );
    ctx.lineTo(xEnd, yEnd);
    ctx.stroke();
    return(ctx)
}

drawLine(0,0,600,400)
drawLine(600,0,0,400)
