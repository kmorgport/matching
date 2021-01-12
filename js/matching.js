"use strict"
const letters = 'data/matching.json'
const pokemon = "https://pokeapi.co/api/v2/pokemon/"

fetch(letters)
    .then(data=>data.json())
    .then(data=>console.log(data));