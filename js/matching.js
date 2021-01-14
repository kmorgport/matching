"use strict"
const letters = 'data/abjadmatch.json'
const orderedDeck = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]

const row = document.getElementById("row")
function createCard(jsondeck, ranNum){
    const flipContainer = document.createElement('div');
    let name = jsondeck[ranNum].name
    flipContainer.setAttribute('class',`col-3 flip-container ${name}`);
    flipContainer.setAttribute('onclick','this.classList.toggle(\'clicked\');');
    flipContainer.setAttribute('data-card','data-card')
    const flipper = document.createElement('div');
    flipper.setAttribute('class',`flipper flipcard border border-dark rounded`)
    const front = document.createElement('div');
    front.setAttribute('class','front details rounded')
    const frontImage = document.createElement('div');
    frontImage.setAttribute('class','frontImage')
    //frontImage.html something front (default image)
    front.appendChild(frontImage)
    const back = document.createElement('div');
    back.setAttribute('class','back details rounded')
    const backImage = document.createElement('div');
    backImage.setAttribute('class','backImage')
    const img = document.createElement('img')
    img.src = jsondeck[ranNum].img;
    backImage.appendChild(img)
    back.appendChild(backImage);
    flipper.appendChild(front)
    flipper.appendChild(back)
    flipContainer.appendChild(flipper)
    row.appendChild(flipContainer)
}

// function countOccurrence(arr,val){
//     return arr.filter(v=>(v===val)).length
// }

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}
function buildDeck(json){
    let gameDeck = shuffleArray(orderedDeck)
    gameDeck.map(card=>createCard(json,card))
}

function clickey(arr){
    arr.forEach(card=>{
        card.addEventListener('click',()=>{
            console.log(card)
        })
    })
}

fetch(letters)
    .then(data=>data.json())
    .then(data=>{
        buildDeck(data)
            const cards = [...document.getElementsByClassName('col-3')]
        console.log(cards)
        clickey(cards)

}
    )


// const cards = document.getElementsByClassName('col-3')
// let cardarr = Array.from(cards)
// console.log(cardarr)
// console.log(cards)
// cards.forEach(card=>{
//     card.addEventListener('click',()=>{
//         let child = card.childNodes
//         console.log(child)
//         }
//     )
// })