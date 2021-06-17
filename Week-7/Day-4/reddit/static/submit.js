'use strict'

const URL = 'http://localhost:3000/posts'
const title = document.querySelector('#title')
const postURL = document.querySelector('#postURL')
const submit = document.querySelector("#form")

submit.addEventListener('submit', (event) => {
    event.preventDefault()
fetch(URL,{
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({
        title:title.value,
        url:postURL.value
    })
})
.then(response =>{ 
    if(response.status !==200){
        return console.log('Cant submit post')
    }
        return console.log(response)})
})