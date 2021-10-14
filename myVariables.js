//My practice in Lecture

let firstName = "Najla";
let lastName = "Alofi";

let str = "heLLo wOrld";
let control = "UPPER"; //lower

// str = str.toUpperCase();
// console.log(str);

// str = str.toLowerCase();
// console.log(str);

if (str === "lower") {
  str = str.toUpperCase();
  console.log(str);
} else {
  str = str.toLowerCase();
  console.log(str);
}

let day = "1";
switch (day) {
  case 1:
    console.log("set");
    break;
  case 2:
    console.log("sun");
    break;
  case 3:
    console.log("mon");
    break;
  default:
    console.log("no match");
}

console.log("--------------Task 1--------------");
let language = "JavaScript";
let score = 10;
console.log(`The language is,${language} ${score}`);

let length = 2;
let width = 2;
let area = length * width;
console.log(`he area of the rectangle is ${area}`);

let num1 = 4;
let num2 = 2;
console.log("The result of division = ", Math.floor(num1 / num2));
console.log("The reminder = ", num1 % num2);
