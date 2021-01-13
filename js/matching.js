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

// cards.forEach(card=>{
//     card.addEventListener('click',()=>{
//         let front = card.getElementsByTagName('div')[0]
//         let back = card.getElementsByTagName('div')[1]
//         if(!card.hasAttribute('flip')){
//             card.setAttribute('class', 'flip')
//             front.setAttribute('class','flip')
//         }else if(front.hasAttribute('flip')){
//             front.removeAttribute('flip')
//             back.setAttribute('class','flip')
//         }
//     })
// })