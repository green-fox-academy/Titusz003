'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

let colours:string[]= ['violet','indigo','blue','green','yellow','orange','red']
let v:number=400
let squares=function(x:number,colour:string){
    ctx.fillStyle=colour;
    ctx.fillRect (300-x/2, 200-x/2, x, x);
}
for(let i=0;i<7;i++){
v=v-50
squares(v,colours[i])
}