// function play(){
//     const homeSection = document.getElementById("home-screen");
//     homeSection.classList.add("hidden")
//     const playGround = document.getElementById("play-ground");
//     playGround.classList.remove("hidden")
// }
function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;

    // get element 
    const currentAlphabetElement = document.getElementById("current-alphabet")
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet);

    // check matched
    if (playerPressed === expectedAlphabet) {
        const currentScore = getElementValueWithId("current-score");
        const newScore = currentScore + 1;
        setElementScoreWithId("current-score", newScore)
        removeBackgroundColor(expectedAlphabet)
        continueGame();
    } else {
        // console.log("You lose");
        const currentLife = getElementValueWithId("current-life");
        const availableLife = currentLife - 1;
        setElementScoreWithId("current-life", availableLife)

        if (availableLife === 0) {
            gameOver();
        }
    }
}

document.addEventListener("keyup", handleKeyboardButtonPress)

function continueGame() {
    const alphabet = getRandomAlphabet();
    // console.log("your random alphabet is: ",alphabet);

    // set randomly generated alphabet
    const currentAlphabet = document.getElementById("current-alphabet");
    currentAlphabet.innerHTML = alphabet;

    setBackgroundColor(alphabet);
}



function play() {
    hideElementById("home-screen");
    showElementById("play-ground");
    continueGame();
}

function gameOver() {
    hideElementById("play-ground");
    showElementById("score-section");
    const finalScore = getElementValueWithId("current-score");
    setElementScoreWithId("score", finalScore)
}


function playAgain(){
    hideElementById("score-section");
    showElementById("play-ground");
}