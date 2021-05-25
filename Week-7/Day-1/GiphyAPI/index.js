'use strict'

const URL = 'https://api.giphy.com/v1/gifs/search'
const API_KEY = '89d8k2WNErORUDWImErRl4oiw5exZqNH'

const htmlBody = document.querySelector('body')

fetch(`${URL}?api_key=${API_KEY}&q=pokemon&limit=16`)
.then(response => response.json())
.then(responseBody => {console.log(responseBody)
responseBody.data.forEach(gif => {
    console.log(gif.images)
    const img = document.createElement('img')
    img.src = gif.images.original.url
    htmlBody.appendChild(img)
});
});