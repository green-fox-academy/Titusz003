'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

let edgex:number=0;
let edgey:number=0;

let pointToMiddle=function(x:number,y:number){
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(300,200);
    ctx.stroke();
    return(ctx)
}
for(let i=0;i<=60;i++){
    if(i<30){
    pointToMiddle(edgex,0)
    edgex=edgex+20;
    }
    else{
        pointToMiddle(edgex,400)
        edgex=edgex-20;
    }
}
for(let i=0;i<=40;i++){
    if(i<20){
    pointToMiddle(0,edgey)
    edgey=edgey+20;
    }
    else{
        pointToMiddle(600,edgey)
        edgey=edgey-20;
    }
}