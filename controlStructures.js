num1 = 100;
num2 = 220;
let num3 = 33;

// Now write a conditional statement that compares “num1” and “num2” and displays the larger value.
if (num1 > num2) {
  console.log("num1 is greater");
} else if (num1 < num2) {
  console.log("num2 is greater");
} else {
  console.log("Equal");
}

// Write a conditional statement that determines whether “num1” is odd or even and displays the result.
//  (Tip: remember the modulus operator %)
remender = num1 % 2;
if (remender == 0) {
  console.log("num1 is even the remeder of division by 2 = ", remender);
} else {
  console.log("num1 is odd the remender of division by 2 = ", remender);
}

// write a JavaScript conditional statement to sort the three numbers from largest to smallest.
let max = 0;
let mid = 0;
let min = 0;
if (num1 > num2 && num1 > num3) {
  max = num1;
  if (num2 > num3) {
    mid = num2;
    min = num3;
  } else {
    mid = num3;
    min = num2;
  }
} else if (num2 > num3 && num2 > num1) {
  max = num2;
  if (num1 > num3) {
    mid = num1;
    min = num3;
  } else {
    mid = num3;
    min = num1;
  }
} else {
  max = num3;
  mid = num2;
  min = num1;
}
console.log("the largest", max, "the middle", mid, "the smallest", min);

// Write a variables called amount . print "Please enter a positive number" if it is not positive.
//  and print "Please enter a number" if the type of the argument is not a number. otherwise print the number.

let amount = -10;
if (typeof amount === "number" && amount >= 1) {
  console.log(amount);
} else if (typeof amount !== "number") {
  console.log("Please enter a number");
} else {
  console.log("Please enter a positive number");
}

// Write two string variables , username and password, and print a string "login successful"
// if the username length is more than 6 and password length is more than or equal to 8 otherwise print "login failed."

let username = "Najla";
let password = "Najla12345";
if (username.length > 6 && password.length >= 8) {
  console.log("login successful");
} else {
  console.log("login faild");
}

//Now write a JavaScript while loop that will display the numbers 0 - 20.
let number = 0;
while (number <= 20) {
  console.log(number);
  number++;
}

//// Write a JavaScript for loop that will display the numbers 20 - 0.
for (i = 20; i >= 0; i--) {
  console.log(i);
}

// Next, create a for loop that will display all even numbers between 1 and 20.
for (j = 1; j <= 20; j++) {
  if (j % 2 == 0) {
    console.log(j);
  }
}

// Write two variable startRange and endRange Assign each variable a number value like (5,8)
//  or (6,18) . print a string of all the numbers in between the two values in an acceding order,
//  start and end are included example if we assign (5,8) the output will be
let startRange = 6;
let endRange = 8;
console.log("Start range is 6 and end range 8");
for (; startRange <= endRange; startRange++) {
  console.log(startRange);
}

// Create a for loop that will produce the following output:
// *
// **
// ***
// ****
// *****
for (i = 0; i < 6; i++) {
  for (j = 0; j < i; j++) {
    console.log("*");
  }
  console.log("\n");
}
