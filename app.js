import { getRandomThrow, compareNumbers } from './get-random-throw.js';

//get dom
const shootButton = document.getElementById('throw-button')
const winsText = document.getElementById('wins');


//set state
let wins = 0;
let losses = 0;
let draws = 0;


function useResults(results) {
    // if results === wins
    wins++;
    winsText.textContent = wins;
    // sometextvar.textcontent = `the player has ${results}`;

}

shootButton.addEventListener('click', () => {

const userInput = document.querySelector('input:checked');

const compInput = getRandomThrow();

const results = compareNumbers(userInput, compInput);

useResults(results);

})