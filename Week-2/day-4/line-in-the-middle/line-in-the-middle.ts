'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(275, 200);
ctx.lineTo(325, 200);
ctx.stroke();

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(300,175 );
ctx.lineTo(300, 225);
ctx.stroke();