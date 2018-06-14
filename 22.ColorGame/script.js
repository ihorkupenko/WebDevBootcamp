var squaresColors = []
var numberOfColors = 6;
var pickedColor;
var h1 = document.querySelector("h1");
var squares = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorDisplay");
var result = document.querySelector("#result");
var resetButton = document.getElementById("resetButton");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    reset();

    for (var i = 0; i < squares.length; i++){
        squares[i].addEventListener("click", function(){ 
            var clickedColor = this.style.backgroundColor;           
            if (clickedColor === pickedColor){
                result.textContent = "Correct"
                changeColors(clickedColor)
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Try Again?"
            }
            else (result.textContent = "Try Again")
        });
    }
    modeSelector();
    resetButton.addEventListener("click", reset)
}

function modeSelector(){
    for (var i = 0; i < modeButtons.length; i++){        
        modeButtons[i].addEventListener("click", function(){            
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.textContent === "Easy" ? numberOfColors = 3 : numberOfColors = 6;
            this.classList.add("selected");
            reset();
        });
    }
}

function reset(){
    squaresColors = generateRandomColors();
    for (var i = 0; i < squares.length; i++){
        if (squaresColors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = squaresColors[i];            
        }else{
            squares[i].style.display = "none";
        }
    }
    pickedColor = pickedRandomColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Color";
    result.textContent = "";

}


// Colors region

function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickedRandomColor(){
    return squaresColors[Math.floor(Math.random() * squaresColors.length)]
}

function generateRandomColors(){
    var arr = [];
    for (var i = 0; i < numberOfColors; i++){
        arr.push(randomColor());
    }
    return arr;
}
function randomColor(){
    var color = []
    for (var i = 0; i < 3; i++){
        color.push(Math.floor(Math.random() * 255));
    }
    return "rgb(" + color[0] + ", " + color[1] + ", " + color[2] + ")"
}