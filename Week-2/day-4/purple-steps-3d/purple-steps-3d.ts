'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};


let x:number=0;
let y:number=0;
ctx.fillStyle='blue';
for(let i=0;i<6;i++){
    x=x+10;
    y=y+10*i;
    ctx.fillRect(10+y,10+y,x,x);
    ctx.strokeRect(10+y,10+y,x,x);
}