"use strict"
const letters = 'data/abjadmatch.json'
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

const row = document.getElementById("row")
function createCard(jsondeck, ranNum){
    const flipContainer = document.createElement('div');
    let name = jsondeck[ranNum].name
    flipContainer.setAttribute('class',`col-3 flip-container ${name}`);
    flipContainer.setAttribute('onclick','this.classList.toggle(\'clicked\');');
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
    //backImage.innerHtml is image (unique image)
    back.appendChild(backImage);
    flipper.appendChild(front)
    flipper.appendChild(back)
    flipContainer.appendChild(flipper)
    row.appendChild(flipContainer)
}

// function countOccurrence(arr,val){
//     return arr.filter(v=>(v===val)).length
// }

const orderedDeck = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]

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

fetch(letters)
    .then(data=>data.json())
    .then(data=>
        buildDeck(data)
    )