var number = prompt("Please enter a number");
var kebabString = prompt("Please enter a string")

alert(isEven(number));
alert(factorial(number));
alert(kebabToSnake(kebabString))

function isEven(num){
    return num % 2 === 0

function factorial(num) {
    var result = 1;
    while (num > 0){
        result *= num;
        num--;
    }
    return result;
}

function kebabToSnake(string) {
    for (var i = 0; i <= string.length; i++){
        if (string.indexOf("-") !== -1){
            string = string.replace("-","_");
        }
    }
    return string;
}