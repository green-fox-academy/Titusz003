'use strict'

const URL = 'http://localhost:3000/api/links'
const alias = document.querySelector('#alias')
const aliasurl = document.querySelector('#url')
const form = document.querySelector('#form')
const header = document.querySelector('#header')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    fetch(URL, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            alias:alias.value,
            url:aliasurl.value
        })
    }).then(response => response.json())
    .then(resp => {
        if (resp === 'Alias alredy exist'){
            header.innerHTML = 'Your alias is already in use!'
            return
        }
        else{
    header.innerHTML = `Your URL is aliased to ${resp[0].alias} and your secret code is ${resp[0].secretcode}`
    aliasurl.value = ''
    alias.value = ''
    return
        }
})
})

