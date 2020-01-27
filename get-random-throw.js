export function getRandomThrow() {

    const randomNumber = Math.floor(Math.random() * 3);
    const array = ['Rock', 'Paper', 'Scissors'];
    return array[randomNumber];

}

export function compareNumbers(userThrow, ComputerThrow) {

    if (userThrow === ComputerThrow) {
        return 'Draw';
    } else if (userThrow === 'Rock' && ComputerThrow === 'Paper') {
        return 'Lose';
    } else if (userThrow === 'Paper' && ComputerThrow === 'Scissors') {
        return 'Lose';
    } else if (userThrow === 'Scissors' && ComputerThrow === 'Rock') {
        return 'Lose';
    } else {
        return 'Win';
    }

}