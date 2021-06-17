'use strict'

const nav = document.querySelector('nav')
let imgInspetor = document.querySelector(".img-inspector")
let X = 0
let Y = 0
let size = 200

nav.addEventListener('click', (event)=>{
    console.log(event.target.dataset.direction)
    if(event.target.dataset.direction === 'up'){
        Y-=10
    }
    if(event.target.dataset.direction === 'down'){
        Y+=10
    }
    if(event.target.dataset.direction === 'left'){
        X-=10
    }
    if(event.target.dataset.direction === 'right'){
        X+=10
    }
    if(event.target.dataset.direction === 'in'){
        size+=20
    }
    if(event.target.dataset.direction === 'out'){
        size-=20
    }
    imgInspetor.setAttribute('style',`background-position: ${X}px ${Y}px; background-size: ${size}%`)
})