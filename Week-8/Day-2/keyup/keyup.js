'use strict'

const h1 = document.querySelector('h1')

console.log(window)

window.addEventListener('keyup',(event)=> {
    console.log(event)
    h1.textContent =`Last keycode is: ${event.keyCode}`
})