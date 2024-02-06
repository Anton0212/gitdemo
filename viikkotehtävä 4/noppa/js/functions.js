
function rollDice() {
    var randomNumber = Math.floor(Math.random() * 6) + 1; 
    var diceImage = document.getElementById('diceImage');


    switch (randomNumber) {
        case 1:
            diceImage.src = 'img/dice-one.png';
            break;
        case 2:
            diceImage.src = 'img/dice-two.png';
            break;
        case 3:
            diceImage.src = 'img/dice-three.png';
            break;
        case 4:
            diceImage.src = 'img/dice-four.png';
            break;
        case 5:
            diceImage.src = 'img/dice-five.png';
            break;
        case 6:
            diceImage.src = 'img/dice-six.png';
            break;
        default:
            break;
    }
}

