// function play(){
//     const homeSection = document.getElementById("home-screen");
//     homeSection.classList.add("hidden")
//     const playGround = document.getElementById("play-ground");
//     playGround.classList.remove("hidden")
// }

function continueGame(){
    const alphabet = getRandomAlphabet();
    // console.log("your random alphabet is: ",alphabet);

    // set randomly generated alphabet
    const currnetAlphabet = document.getElementById("current-alphabet");
    currnetAlphabet.innerHTML = alphabet;

    setBackgroundColor(alphabet);
}



function play(){
    hideElementById("home-screen");
    showElementById("play-ground");
    continueGame();
}