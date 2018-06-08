var inputGameNumber = document.querySelector("input");
var playerOneButton = document.querySelector("#playerOne");
var playerTwoButton = document.querySelector("#playerTwo");
var resetButton = document.querySelector("#reset");

var playerOneScoreField = document.querySelector("#playerOneScore")
var playerTwoScoreField = document.querySelector("#playerTwoScore");
var numberOfGamesField = document.querySelector("#numberOfGames");

var playerOneScore = 0;
var playerTwoScore = 0;
var gameOver = false;
var numberOfGames = 5;

playerOneButton.addEventListener("click", function(){
    if (!gameOver){
        playerOneScore++;
        if (playerOneScore === numberOfGames){
            gameOver = true;
            playerOneScoreField.classList.add("winner");
        }
        playerOneScoreField.textContent = playerOneScore;
    }
});

playerTwoButton.addEventListener("click", function(){
    if (!gameOver){
        playerTwoScore++;
        if (playerTwoScore === numberOfGames){
            gameOver = true;
            playerTwoScoreField.classList.add("winner");
        }
        playerTwoScoreField.textContent = playerTwoScore;
    }
});

resetButton.addEventListener("click", reset)

inputGameNumber.addEventListener("change", function(){
    numberOfGamesField.textContent = this.value;
    numberOfGames = this.valueAsNumber;
});

function reset(){   
    playerOneScore = 0;
    playerTwoScore = 0;
    gameOver = false;
    playerOneScoreField.classList.remove("winner");
    playerTwoScoreField.classList.remove("winner");
    playerOneScoreField.textContent = 0;
    playerTwoScoreField.textContent = 0;
    numberOfGamesField.textContent = 5;
    inputGameNumber.value = "";
}