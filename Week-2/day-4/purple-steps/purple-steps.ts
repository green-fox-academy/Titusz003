'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

let x:number=0
let y:number=0
ctx.fillStyle='blue';
for(let i=0;i<19;i++){
    x=x+10
    ctx.fillRect(x,x, 10, 10);
    ctx.strokeRect(x,x, 10, 10);
}