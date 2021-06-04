'use strict'

const button = document.querySelector('button')
const body = document.querySelector('body')

function createP(){
    const p = document.createElement('p')
    p.innerText = 'You clicked'
    body.appendChild(p)
}

button.addEventListener('click', () =>{
    setTimeout(createP,2000)
})