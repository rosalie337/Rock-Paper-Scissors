import { getRandomThrow, compareNumbers } from './get-random-throw.js';

//get dom
const shootButton = document.getElementById('throw-button')
const winsText = document.getElementById('wins');
const lossesText = document.getElementById('losses');
const drawsText = document.getElementById('draws');
const resultsDisplay = document.getElementById('results-display');
const resetButton = document.getElementById('reset-button');

//set state
let wins = 0;
let losses = 0;
let draws = 0;


function useResults(results) {
    console.log('used results', results);
    if (results === 'Win') {
        wins++;
        winsText.textContent = wins;
    } else if (results === 'Lose') {
        losses++;
        lossesText.textContent = losses;
    } else {
        draws++;
        drawsText.textContent = draws;
    }
    resultsDisplay.textContent = results;
}

shootButton.addEventListener('click', () => {
    

    const checkedElement = document.querySelector('input:checked');
    const userInput = checkedElement.value;
    const compInput = getRandomThrow();
    const results = compareNumbers(userInput, compInput);

    useResults(results); 

});

resetButton.addEventListener('click', () => {
    wins = 0;
    losses = 0;
    draws = 0;

    winsText.textContent = '0';
    lossesText.textContent = '0';
    drawsText.textContent = '0';

    resultsDisplay.textContent = '';
});

