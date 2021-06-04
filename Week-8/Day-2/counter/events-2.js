'use strict'

const button = document.querySelector('button')
const listofli = document.querySelectorAll('li')
const counter = document.querySelector('.result')

button.addEventListener('click', () =>{
    console.log( button,listofli,counter)
    counter.textContent = listofli.length
})