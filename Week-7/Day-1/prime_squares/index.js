'use strict'

let section = document.querySelector('section')
for(let i=1;i<=100;i++){
    let div = document.createElement('div')
    section.appendChild(div)
    let newContent = document.createTextNode(i)
    div.appendChild(newContent)
}

function isPrime(number){
    if(number.textContent==1){
        return number.className = 'not-prime'
    }

    for(let i=2;i<number.textContent;i++){
        if(number.textContent%i===0){
            return number.className = 'not-prime'
        }
    }
    return number.className = 'prime'
    
}



    let i = 0
        let array = document.querySelectorAll('div')
            const colorDivs =setInterval(() => {
            isPrime(array[i])
            i++
            if(i === array.length){
                clearInterval(colorDivs)
            }
        },100)