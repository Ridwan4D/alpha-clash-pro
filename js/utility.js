function hideElementById(elementId){    
    const element = document.getElementById(elementId)
    element.classList.add("hidden");
}
function showElementById(elementId){    
    const element = document.getElementById(elementId)
    element.classList.remove("hidden");
}

function setBackgroundColor(elementId){
    const element = document.getElementById(elementId)
    element.classList.add("bg-orange-400")
    element.classList.add("text-white")
}



function getRandomAlphabet(){
    // create an alphabet array
    const alphabetString = "abcdefghijklmnopqrstuvwxyz"
    const alphabets = alphabetString.split("");
    console.log(alphabets);

    // get random index between 0-25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    
    const alphabet = alphabets[index];
    // console.log(index,alphabet);
    return alphabet;
}