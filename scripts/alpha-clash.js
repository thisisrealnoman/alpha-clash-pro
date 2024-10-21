// function play(){
//     // Step 1: Hide the home screen
//     // To hide the home screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     // Step 2: Show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }

function continueGame(){
    //generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet is', alphabet);

    // set randomly generated alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    addBackgroundColorById(alphabet);

}

function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}