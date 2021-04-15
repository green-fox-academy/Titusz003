'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

let square= [[10, 10], [290,  10], [290, 290], [10, 290]];
let face= [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],[120, 100], [85, 130], [50, 100]];

let connecter=function(arr){
ctx.beginPath()
ctx.moveTo(arr[0][0],arr[0][1])
ctx.lineTo(arr[arr.length-1][0],arr[arr.length-1][1])
ctx.stroke()
for(let i=0;i<arr.length-1;i++){
    ctx.beginPath()
    ctx.moveTo(arr[i][0],arr[i][1]);
    ctx.lineTo(arr[i+1][0],arr[i+1][1]);
    ctx.stroke()
}
return(ctx)
}
connecter(face)
connecter(square)


