'use strict'

const contentContainer = document.querySelector('.contentContainer')

const URL = 'http://localhost:3000/posts'
window.addEventListener('load',() =>{
    
    fetch(URL).then(response => response.json().then(posts => {
        posts.forEach(post => {
            let postContainer = document.createElement('div')
            let newPost = document.createElement('a');
            let deleteLink = document.createElement('p');
            let time = document.createElement('p')
            let upvote = document.createElement('img')
            let downvote = document.createElement('img')
            let modifyButton = document.createElement('button')
            let score = document.createElement('p')


            newPost.innerHTML = post.title
            newPost.setAttribute('href',`${post.url}`)
            newPost.className ='postName'
            newPost.dataset.id = post.id

            deleteLink.innerHTML = 'Delete'
            deleteLink.className = 'deleteButton'
            deleteLink.dataset.id = post.id

            time.innerHTML = post.timestamp

            upvote.src = "/images/upvote.png"
            upvote.dataset.id = post.id
            upvote.className = 'upvote'

            downvote.src = "/images/downvote.png"
            downvote.dataset.id = post.id
            downvote.className = "downvote"

            modifyButton.innerHTML = 'Edit'
            modifyButton.dataset.id = post.id
            modifyButton.className = "modifyButton"

            score.innerHTML = post.score
            score.className = "score"

            postContainer.appendChild(newPost)
            postContainer.appendChild(deleteLink)
            postContainer.appendChild(time)
            postContainer.appendChild(upvote)
            postContainer.appendChild(downvote)
            postContainer.appendChild(modifyButton)
            postContainer.appendChild(score)
            contentContainer.appendChild(postContainer)

            modifyButton.addEventListener('click',event => {
                event.preventDefault()
                modifyButton.hidden = true
                let modifyForm = document.createElement('form')
                let titleLabel = document.createElement('label')
                let titleInput = document.createElement('input')
                let urlLabel = document.createElement('label')
                let urlInput = document.createElement ('input')
                let formButton = document.createElement('button')

                modifyForm.dataset.id = modifyButton.dataset.id
            
                titleLabel.setAttribute('for','titleInput')
                titleLabel.innerHTML='Title'
                titleInput.setAttribute('type','text')
                titleInput.id = 'titleInput'
                titleInput.setAttribute('name','titleInput')
                titleInput.value = `${newPost.innerHTML}`
            
                urlLabel.setAttribute('for','urlInput')
                urlLabel.innerHTML= 'URL'
                urlInput.setAttribute('type','text')
                urlInput.id = 'urlInput'
                urlInput.setAttribute('name','urlInput')
                urlInput.value = `${newPost}`
            
                formButton.setAttribute('type','submit')
                formButton.innerHTML = 'Modify'

            
                modifyForm.appendChild(titleLabel)
                modifyForm.appendChild(titleInput)
                modifyForm.appendChild(urlLabel)
                modifyForm.appendChild(urlInput)
                modifyForm.appendChild(formButton)
                postContainer.appendChild(modifyForm)

                modifyForm.addEventListener('submit', (event) => {
                    event.preventDefault()
                    console.log(event)
                fetch(URL + `/${event.target.dataset.id}`,{
                    method: 'PUT',
                    headers: {'content-type': 'application/json'},
                    body: JSON.stringify({
                        title:titleInput.value,
                        url:urlInput.value
                    })
                })
                .then(response =>{ 
                    if(response.status !==200){
                        return console.log('Cant submit post')
                    }
                        return console.log(response)})
                })
            })
            
        })
    }))
    })

contentContainer.addEventListener('click', (event) =>{
    if(event.target.className === 'deleteButton'){
        let confirmDelete = confirm('Are you sure?')
        if(confirmDelete===true){
        fetch(URL + `/${event.target.dataset.id}`, {
            method: 'DELETE'
        })
    }
    }
    else if (event.target.className === 'upvote'){
        fetch(URL + `/${event.target.dataset.id}/upvote`, {
            method: 'PUT'
        })
    }
    else if (event.target.className === 'downvote'){
        fetch(URL + `/${event.target.dataset.id}/downvote`, {
            method: 'PUT'
        })
    }
})