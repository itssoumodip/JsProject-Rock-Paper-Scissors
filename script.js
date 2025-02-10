const choices = document.querySelectorAll(".userChoices");
const userWar = document.getElementById('userWar').querySelector('img');
const computerWar = document.getElementById('computerWar').querySelector('img');
const msgBox = document.getElementById('msgBox');
const scoreBoard = document.getElementById('scoreBoard');

let userScore = 0;
let computerScore = 0;

const choiceArray = ["rock", "paper", "scissors"];
const userImgPaths = {
    "rock": "images/1L.png",
    "paper": "images/2L.png",
    "scissors": "images/3L.png"
}
const computerImgPaths = {
    "rock": "images/1R.png",
    "paper": "images/2R.png",
    "scissors": "images/3R.png"
}

choices.forEach((choice, index) => {
    choice.addEventListener("click", () => {
        const userChoice = choiceArray[index];
        const computerChoice = choiceArray[Math.floor(Math.random()*3)];

        userWar.src = userImgPaths[userChoice];
        computerWar.src = computerImgPaths[computerChoice];
    })
});

