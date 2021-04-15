'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

let squares=function(x:number){
    ctx.strokeRect (300-x/2, 200-x/2, x, x);
}

squares(50);
squares(100);
squares(150);