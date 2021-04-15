'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

let board={
    width:600,
    height:400,
    size:40,
}
let x:number=0;
let y:number=0;
for(let i=0;i<board['width']/board['size'];i++){
    if(i%2===0){
for(let k=0;k<board['size'];k++){
    if(k%2===0){
        ctx.fillRect(x,y, board['size'], board['size']);
}
y=y+board['size'];
}
    }
    else{
        for(let k=0;k<board['height']/board['size'];k++){
        if(k%2!==0){
            ctx.fillRect(x,y, board['size'], board['size']);      
        }
        y=y+board['size'];
    }
}
x=x+board['size'];
y=0;
}