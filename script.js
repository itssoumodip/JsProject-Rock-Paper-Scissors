const choices = document.querySelectorAll(".userChoices");
const userWar = document.getElementById('userWar').querySelector('img');
const computerWar = document.getElementById('computerWar').querySelector('img');
const msgBox = document.getElementById('msgBox');
const scoreBoard = document.getElementById('scoreBoard');
const resultBtn = document.getElementById('restratBtn');
// const warGoing = document.getElementsByClassName('warGoing').querySelector('img')

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
        userWar.src = userImgPaths["rock"];
        computerWar.src = computerImgPaths["rock"];
        userWar.classList.add('handMotion');
        computerWar.classList.add('handMotion');
        msgBox.textContent = "Loading....";   
        setTimeout(() => {
            userWar.classList.remove('handMotion');
            computerWar.classList.remove('handMotion');
            const userChoice = choiceArray[index];
            const computerChoice = choiceArray[Math.floor(Math.random()*3)];
            userWar.src = userImgPaths[userChoice];
            computerWar.src = computerImgPaths[computerChoice];
            const result = winnerDecide(userChoice, computerChoice);
            updateMesg(result);
            updateScore(result);
        },2000)
    })
});
function winnerDecide(user, computer) {
    if (user===computer) 
        return "draw";
    else if (
        (user==="rock" && computer==="scissors") ||
        (user==="paper" && computer==="rock") ||
        (user==="scissors" && computer==="paper")
    )
        return "win";
    else 
        return "lost";
}
function updateMesg(result) {
    if (result === "win")
        msgBox.textContent = "You Win";
    else if (result === "lost") 
        msgBox.textContent = "You Loss !!";
    else 
        msgBox.textContent = "It's a Draw!";
}
function updateScore(result) {
    if (result==="win") 
        userScore++;
    if (result==="lost")
        computerScore++;
    scoreBoard.textContent = `User : ${userScore} | CPU : ${computerScore}`;
    scoreBoard.style.display = "block";
    resultBtn.style.display = "block";
}
function restrat () {
    userScore = 0;
    computerScore = 0;
    msgBox.textContent = "Let's Play !!";   
    userWar.src = userImgPaths["rock"];
    computerWar.src = computerImgPaths["rock"];
    scoreBoard.style.display = "none";
    resultBtn.style.display = "none";
}
