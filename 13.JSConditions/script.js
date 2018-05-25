var age = Number(prompt("Please enter your age"));
if (age < 0) alert("Age can't be less then 0");
else if (age === 21) alert("happy 21st birthday!");
if (age % 2 !== 0) alert("You age is odd!")

var i;
if (age % Math.sqrt(age) === 0) alert("Perfect square")
//for (i = 1; i <= 10; i++) {
//    if (age == i * i) alert("Perfect square")
//}