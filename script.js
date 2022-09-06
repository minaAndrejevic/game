
"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    // document.querySelector(".score").textContent = score;
    if (!guess) {
        displayMessage("no number");
    } else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "correct";
        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent =
                guess > secretNumber ? "too high" : "too low";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            displayMessage("you lost");
        }
    }
});
document.querySelector(".again").addEventListener("click", function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage("start again");
    score = 20;
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";
});