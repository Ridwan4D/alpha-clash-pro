// function play(){
//     const homeSection = document.getElementById("home-screen");
//     homeSection.classList.add("hidden")
//     const playGround = document.getElementById("play-ground");
//     playGround.classList.remove("hidden")
// }
function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;
    if (playerPressed === "Escape") {
        gameOver()
    }
    if (playerPressed === "Enter") {
        hideElementById("home-screen");
        showElementById("play-ground");
        setElementScoreWithId("current-life", 6)
        continueGame();
    }


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
        let currentLife = getElementValueWithId("current-life");
        if (playerPressed === " ") {
            currentLife = currentLife;
        } else {
            const availableLife = currentLife - 1;
            setElementScoreWithId("current-life", availableLife)
            if (availableLife === 0) {
                gameOver();
            }
        }
    }
}

document.addEventListener("keyup", handleKeyboardButtonPress)

function continueGame() {
    const alphabet = getRandomAlphabet();
    // console.log("your random alphabet is: ",alphabet);

    setTextElementById("current-alphabet", alphabet)
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
    let highestScore = getElementValueWithId("high-score");
    if (highestScore < finalScore) {
        highestScore = finalScore;
        setElementScoreWithId("high-score", highestScore)
    }
}


function playAgain() {
    hideElementById("score-section");
    showElementById("play-ground");
    setElementScoreWithId("current-score", 0)
    setElementScoreWithId("current-life", 5)
}

