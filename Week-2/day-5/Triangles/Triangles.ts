'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

    let startX:number=400
    let startY:number=450
    let endX:number=200
    let endY:number=450-(Math.sqrt(3)/2*400)
    let lineStartX:number=0
    let lineStartY:number=450
    let lineEndX:number=400
    let lineEnedY:number=450

    for(let i=0;i<20;i++){
        ctx.beginPath()
        ctx.moveTo(startX,startY)
        ctx.lineTo(endX,endY)
        ctx.stroke()
        startX=startX-20
        endX=endX-10
        endY=endY+Math.sqrt(3)/2*20
    }

    for(let i=0;i<20;i++){
        ctx.beginPath()
        ctx.moveTo(lineStartX,lineStartY)
        ctx.lineTo(lineEndX,lineEnedY)
        ctx.stroke()
        lineStartX=lineStartX+10
        lineStartY=lineStartY-Math.sqrt(3)/2*20
        lineEndX=lineEndX-10
        lineEnedY=lineEnedY-Math.sqrt(3)/2*20
    }

    startX=0
    startY=450
    endX=200
    endY=450-(Math.sqrt(3)/2*400)

    for( let i=0;i<20;i++){
        ctx.beginPath()
        ctx.moveTo(startX,startY)
        ctx.lineTo(endX,endY)
        ctx.stroke()
        startX=startX+20
        endX=endX+10
        endY=endY+Math.sqrt(3)/2*20
    }
