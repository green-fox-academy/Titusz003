let animals = document.querySelector('.animals')
let paragraphs= document.querySelectorAll('p')
let variable= ""
let finishedString=document.querySelector('.animals').innerHTML

console.log(animals)
console.log(paragraphs)

for(let i=0;i<paragraphs.length-1;i++){
    variable= variable + " " +paragraphs[i].innerText
}

animals.innerHTML = finishedString + variable
console.log(animals)