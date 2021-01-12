"use strict"
const letters = 'data/greekmatch.json'
const pokemon = "https://pokeapi.co/api/v2/pokemon/"
function addNumbers(stuff){
    console.log(stuff[1].id + stuff[2].id)
}
function writeDoc(stuff){
    let item = stuff[1].id
    document.open();
    document.write('<h1>'+item+'</h1>')
    document.close()
}
// writeDoc(data)
fetch(letters)
    .then(data=>data.json())
    .then(data=> console.log(data));

const cards = document.querySelectorAll('[data-card]')

cards.forEach(card=>{
    card.addEventListener('click',()=>{
        if(!card.hasAttribute('flip')){
            card.setAttribute('class', 'flip')
        }else if(card.hasAttribute('flip')){
            card.removeAttribute('flip')
        }
    })
})