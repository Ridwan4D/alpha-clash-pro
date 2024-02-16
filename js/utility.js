function hideElementById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add("hidden");
}
function showElementById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.remove("hidden");
}

function setBackgroundColor(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add("bg-orange-400")
}
// function setWrongBackgroundColor(elementId){
//     const element = document.getElementById(elementId)
//     element.classList.add("bg-red")
// }
function removeBackgroundColor(elementId) {
    const element = document.getElementById(elementId)
    element.classList.remove("bg-orange-400")
}

function setTextElementById(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText = value
}

function getElementValueWithId(elementId) {
    const element = document.getElementById(elementId)
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setElementScoreWithId(elementId,value){
    const element = document.getElementById(elementId)
    element.innerText = value;    
}

function getRandomAlphabet() {
    // create an alphabet array
    const alphabetString = "abcdefghijklmnopqrstuvwxyz"
    const alphabets = alphabetString.split("");
    // console.log(alphabets);

    // get random index between 0-25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    // console.log(index,alphabet);
    return alphabet;
}
