'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};


ctx.fillStyle='red';
ctx.fillRect(10, 10, 50, 50);
ctx.fillStyle='green';
ctx.fillRect(160, 10, 75, 75);
ctx.fillStyle='blue';
ctx.fillRect(10, 160, 100,100 );
ctx.fillStyle='yellow';
ctx.fillRect(160, 160, 125, 125);