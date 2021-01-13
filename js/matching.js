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

const row = document.getElementById("row")
function createCard(){
    const flipContainer = document.createElement('div');
    flipContainer.setAttribute('class','col-3 flip-container');
    flipContainer.setAttribute('onclick','this.classList.toggle(\'clicked\');')
    const flipper = document.createElement('div');
    flipper.setAttribute('class','flipper flipcard border border-dark rounded')
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
    //backImage.innerHtml is image (unique image)
    back.appendChild(backImage);
    flipper.appendChild(front)
    flipper.appendChild(back)
    flipContainer.appendChild(flipper)
    row.appendChild(flipContainer)
}


// `