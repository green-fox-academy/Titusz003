'use strict'

const button = document.querySelector('button')


function currentTime(){
    let time = new Date(Date.now())
    let date = time.toString()
  console.log(date)
  button.disabled = true
  button.removeEventListener('click',currentTime)
}

button.addEventListener('click',currentTime)

