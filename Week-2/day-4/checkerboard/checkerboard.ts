'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

let boardmaker=function(width:number,height:number,size:number){
let x:number=0;
let y:number=0;
for(let i=0;i<width/size;i++){
    if(i%2===0){
for(let k=0;k<height/size;k++){
    if(k%2===0){
        ctx.fillRect(x,y, size, size);
}
y=y+size;
}
    }
    else{
        for(let k=0;k<height/size;k++){ 
        if(k%2!==0){
            ctx.fillRect(x,y, size, size);      
        }
        y=y+size;
    }
}
x=x+size;
y=0
}
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(size*(Math.ceil(width/size)),0);
ctx.lineTo(size*(Math.ceil(width/size)),size*(Math.ceil(height/size)));
ctx.lineTo(0,size*(Math.ceil(height/size)));
ctx.stroke();
}

boardmaker(1200,400,40)