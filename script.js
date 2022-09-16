
"use strict";

const GameFunctions = (() => {
    let secretNumber = generateSecretNumber();
    let score = 20;
    let highscore = 0;
    
    function onPageLoaded() {
        document.querySelector(".check").addEventListener("click", () => {
            const guess = Number(document.querySelector(".guess").value);
            
            if (!guess) {
                displayMessage("no number");
                return;
            }
        
            guess === secretNumber ? onCorrectGuess() : onIncorrectGuess(guess);
        });
        
        document.querySelector(".again").addEventListener("click", () => {
            secretNumber = generateSecretNumber();
            displayMessage("start again");
            score = 20;
            document.querySelector(".score").textContent = score;
            document.querySelector(".guess").value = "";
        });
    }
    
    function generateSecretNumber() {
        return Math.trunc(Math.random() * 20) + 1;
    }
    
    function displayMessage(message) {
        document.querySelector(".message").textContent = message;
    };
    
    function onCorrectGuess() {
        document.querySelector(".message").textContent = "correct";
        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    }
    
    function onIncorrectGuess(guess) {
        if (score > 1) {
            const message = guess > secretNumber ? "too high" : "too low";
            document.querySelector(".message").textContent = message;
            score--;
            document.querySelector(".score").textContent = score;
        }
        else {
            displayMessage("you lost");
        }
    }

    return {
        onPageLoaded: onPageLoaded
    }
})();