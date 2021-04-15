'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

let fillx:number=0
let filly:number=0
let strokex:number=0
let strokey:number=0
ctx.fillStyle='blue';
for(let i=0;i<19;i++){
    fillx=fillx+10
    filly=filly+10
    ctx.fillRect(fillx,filly, 10, 10);
}
for(let i=0;i<19;i++){
    strokex=strokex+10
    strokey=strokey+10
    ctx.strokeRect(strokex,strokey, 10, 10);
}