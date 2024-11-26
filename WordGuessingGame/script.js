// Array of words
const words = ["ASTEROID", "GALAXY", "NEBULA", "TELESCOPE", "SATELLITE", "CONSTELLATION", "METEOR", "GRAVITY", "PLANET", "INTERSTELLAR",]
const randomWord = words[Math.floor(Math.random() * words.length)]; //expression to pick random word from array
const word = randomWord
var guessedLetters = [];
var beamOpacity = 0;
var spacemanOpacity = 1;
var letter = ""
var letterClicked = ""
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F',
                'G', 'H', 'I', 'J', 'K', 'L', 
                'M', 'N', 'O', 'P', 'Q', 'R',
                'S', 'T', 'U', 'V', 'W', 'X',
                'Y', 'Z']


// Return all elements from document
var ufo = document.querySelector(".ufo")
var spaceman = document.querySelector(".spaceman")
var spacesContainer = document.querySelector(".spacesContainer")
var alphabetContainer = document.getElementById("alphabetContainer")
var currentWordContainer = document.querySelector('#currentWord')
var gameOverContainer = document.querySelector(".gameover")
var hintButton = document.querySelector("#hint")
var hintWrapper = document.querySelector("#hintWrapper")
var letterContainer = document.querySelector(".letterContainer")


// Display alphabet buttons
var displayAlphabet = () => {
    var lettersList = document.createElement('ul');

    for (let i = 0; i < alphabet.length; i++) { // create unordered list of letters using alphabet array
      lettersList.id = 'alphabet'; 
      letter = document.createElement('li');
      letter.id = alphabet[i];
      letter.setAttribute("class", "letter")
      letter.innerHTML = alphabet[i];
      alphabetContainer.appendChild(lettersList);
      lettersList.appendChild(letter);
    }      
}

// When player clicks letter
var guess = () => {
    document.querySelectorAll(".letter").forEach(element => {
        element.addEventListener('click', event => {
            letterClicked = (element.innerText)

            if(word.includes(letterClicked)){ // If word contains letter clicked (correct guess)
                guessedLetters.push(letterClicked)
                displayWord();
                hideButton(letterClicked);
                displayGameWon();
            }
            
            else{ // If word does not contain letter clicked (wrong guess)
                subtractGuess() // subtract 1 from guess count
                hideButton(letterClicked)
                
                // increase opacity of beam AND decrease opacity of spaceman
                var beam = document.querySelector(".beam")
                beamOpacity += 0.16
                spacemanOpacity -= 0.18
                beam.style.opacity = beamOpacity
                spaceman.style.opacity = spacemanOpacity
            }
        },{once : true}) // makes the button clickable once
     })
 }

 // Display word AND spaces
 var displayWord = (word) => {
    resetSpaces();
    var currentWord = getWordStatus();
     currentWord.forEach(function (letterClicked) {
         var spanLetter = document.createElement("span")
         var content = document.createTextNode(letterClicked);

         spanLetter.appendChild(content)
         currentWordContainer.appendChild(spanLetter)
     })
 }

 // Go through all the letters of the word and if a letter has not been guessed, there is an underscore
var getWordStatus = () => {
    var wordStatus  = [];
    var splitWord = word.split("");
  
    splitWord.forEach(function (letter) {
      if (guessedLetters.includes(letter)) {
        wordStatus.push(letter);
      } 
      else {
        wordStatus.push("_");
      }
    });
  
    return wordStatus;
};

// reset spaces
var resetSpaces = function () {
    var word = document.getElementById("currentWord");
    while (word.firstChild) { // while word returns first child element
      word.removeChild(word.firstChild); // removes child node from DOM
    }
}

// Subtract 1 guess everytime player chooses wrong letter
var subtractGuess = () => {
     var num = document.querySelector(".guessesLeft").innerText
     var newNum = parseInt(num);
     newNum = (newNum -1)
     document.querySelector(".guessesLeft").innerText = newNum;
    if (newNum == 0){
        displayGameOver()
    }
}

// Display game over message
var displayGameOver = () => {
    console.log("game over")
    var gameOver = document.createElement("h1");
    var subHeader = document.createElement("p")
    var subHeader2 = document.createElement("p")
    gameOver.innerText = "GAME OVER"
    subHeader.innerText = "The astronaut was abducted :("
    subHeader2.innerText = `The word is ${word}`
    gameOverContainer.appendChild(gameOver)
    gameOverContainer.appendChild(subHeader)
    gameOverContainer.appendChild(subHeader2)
}

// Display game won message
var displayGameWon = () => {
    if (getWordStatus().includes("_") == false){
        console.log("game won")
        var gameOver = document.createElement("h1");
        var subHeader = document.createElement("p")
        gameOver.innerText = "GAME OVER"
        subHeader.innerText = "You won! :)"
        gameOverContainer.appendChild(gameOver)
        gameOverContainer.appendChild(subHeader)
    }
}

// Restart game when button pressed
var restart = () => {
    var restartButton = document.querySelector(".restart")
    restartButton.addEventListener("click", event => {
        location.reload(); // refresh page
    })
}

// Change button styling to show it has been clicked
var hideButton = (letterClicked) => {
    var id = letterClicked;
    var letterButton = document.querySelector(`#${id}`)
    letterButton.style.opacity = "0.25";                                                              
}

// Display hint upon click
var hint = () => {
    hintButton.addEventListener('click', event => {
        console.log("hint button test")
        var hint = document.createElement("p")
        if(word == "ASTEROID"){
            hint.innerText = "A rocky fragment floating around space"
        }
        if(word == "GALAXY"){
            hint.innerText = "A system of stars and planets"
        }
        if(word == "NEBULA"){
            hint.innerText = "A giant cloud of dust and gas in space"
        }
        if(word == "TELESCOPE"){
            hint.innerText = "An instrument used to view distant objects in space"
        }
        if(word == "SATELLITE"){
            hint.innerText = "An object in orbit"
        }
        if(word == "CONSTELLATION"){
            hint.innerText = "A group of stars that form a pattern in the sky"
        }
        if(word == "METEOR"){
            hint.innerText = "A space rock that enters Earth's atmosphere"
        }
        if(word == "GRAVITY"){
            hint.innerText = "A force that pulls two objects toward each other. Also the name of a movie starring Sandra Bullock and George Clooney"
        }
        if(word == "INTERSTELLAR"){
            hint.innerText = "Situated or occurring between the stars. Also the name of a Christopher Nolan movie."
        }
        if(word == "PLANET"){
            hint.innerText = "A celestial body orbiting around a star."
        }

        hint.setAttribute("id", "hintDescription")
        hintWrapper.appendChild(hint)
    }, {once : true})
}

console.log(word)
displayWord()
displayAlphabet()
guess()
restart()
hint()



