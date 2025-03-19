
/*
let js = "Hello, World!";
console.log(40 + 2 + 21 - 10);

console.log("23");
console.log(23);
console.log("23" + 23);

let firstName = "Jonas"; 
console.log(firstName); // Variable declaration
console.log(firstName);
console.log(firstName);


// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

// Not allowed
let person = "jonas";
let PI = 3.1415;

// Reserved keywords
let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

console.log(myFirstJob);
console.log(myCurrentJob);

// Data types
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
//console.log(typeof "Joe");
//console.log(typeof undefined);
//console.log(typeof null);

// Type conversion
javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

// Type coercion
let year;
console.log(year);
console.log(typeof year);

year = 2025;
console.log(year);
console.log(typeof year);

console.log(typeof 23.5);
console.log(typeof Number(23.5));
console.log(typeof String(23.5));
console.log(typeof "23.5");
console.log(typeof "23.5" + 23);
console.log(typeof ("23.5" + 23));


// Variables
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

var job = 'programmer';
job = 'teacher'

let lastName = 'Rivera';
console.log(lastName);
lastName = 'Smith';
console.log(lastName);



// Basic Operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x = x + 1
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(isFullAge);


// Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

console.log(25 - (10 - 5));

console.log(3 * 5 - 10);

console.log(3 * (5 - 10));

let y = 25 - 10 - 5;
console.log(y);

y = 25 - (10 - 5);
console.log(y);

console.log(3 * 5 - 10);
console.log(3 * (5 - 10));
*/


// Coding Challenge #1

/*
CHALLENGE #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.



// TEST DATA 1
console.log('---------- TEST DATA 1 ----------');
// Store Mark's and John's mass and height
const massMark1 = 78;
const heightMark1 = 1.69;
const massJohn1 = 92;
const heightJohn1 = 1.95;

// Calculate BMIs
const BMIMark1 = massMark1 / (heightMark1 * heightMark1);
const BMIJohn1 = massJohn1 / (heightJohn1 * heightJohn1);

// Log BMI values
console.log('Mark\'s BMI:', BMIMark1);
console.log('John\'s BMI:', BMIJohn1);

// BONUS: Create boolean variable for comparison
const markHigherBMI1 = BMIMark1 > BMIJohn1;
console.log('Does Mark have a higher BMI than John?', markHigherBMI1);

// TEST DATA 2
console.log('---------- TEST DATA 2 ----------');
// Store Mark's and John's mass and height
const massMark2 = 95;
const heightMark2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;

// Calculate BMIs
const BMIMark2 = massMark2 / (heightMark2 * heightMark2);
const BMIJohn2 = massJohn2 / (heightJohn2 * heightJohn2);

// Log BMI values
console.log('Mark\'s BMI:', BMIMark2);
console.log('John\'s BMI:', BMIJohn2);

// BONUS: Create boolean variable for comparison
const markHigherBMI2 = BMIMark2 > BMIJohn2;
console.log('Does Mark have a higher BMI than John?', markHigherBMI2);
*/

/*
const firstName = 'Joseph';
const job = 'programmer';
const birthYear = 1982;

const joseph = firstName + ' ' + job + ' ' + birthYear;
console.log(joseph);

const josephNew = `${firstName} ${job} ${birthYear}`;
console.log(josephNew);



const age = 10; // age in years
const isOldEnough = age >= 18; // is the age 18 or older?

if (isOldEnough) { // if the age is 18 or older
  console.log('You are old enough to drive.👍🏿');
} else { // if the age is less than 18
  const yearsLeft = 18 - age;
     console.log(`You are too young to drive.🚫 You need to wait ${yearsLeft} years.`);
}

const birthYear = 1982;
let century;
if (birthYear <= 2000) {
  century = 25;
} else {
  century = 26;
}
console.log(century);




// TEST DATA 1
console.log('---------- TEST DATA 1 ----------');
// Store Mark's and John's mass and height
const massMark1 = 78;
const heightMark1 = 1.69;
const massJohn1 = 92;
const heightJohn1 = 1.95;

// Calculate BMIs
const BMIMark1 = massMark1 / (heightMark1 * heightMark1);
const BMIJohn1 = massJohn1 / (heightJohn1 * heightJohn1);

// Log BMI values
console.log('Mark\'s BMI:', BMIMark1);
console.log('John\'s BMI:', BMIJohn1);

// BONUS: Create boolean variable for comparison
const markHigherBMI1 = BMIMark1 > BMIJohn1;
console.log('Does Mark have a higher BMI than John?', markHigherBMI1);

// TEST DATA 2
console.log('---------- TEST DATA 2 ----------');
// Store Mark's and John's mass and height
const massMark2 = 95;
const heightMark2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;

// Calculate BMIs
const BMIMark2 = massMark2 / (heightMark2 * heightMark2);
const BMIJohn2 = massJohn2 / (heightJohn2 * heightJohn2);

// Log BMI values
console.log('Mark\'s BMI:', BMIMark2);
console.log('John\'s BMI:', BMIJohn2);

// BONUS: Create boolean variable for comparison
const markHigherBMI2 = BMIMark2 > BMIJohn2;
console.log('Does Mark have a higher BMI than John?', markHigherBMI2);

// Print nice output with template literals
if (markHigherBMI1) {
  console.log(`Mark's BMI (${BMIMark1}) is higher than John's (${BMIJohn1})!`);
} else {
  console.log(`John's BMI (${BMIJohn1}) is higher than Mark's (${BMIMark1})!`);
}

if (markHigherBMI2) {
  console.log(`Mark's BMI (${BMIMark2}) is higher than John's (${BMIJohn2})!`);
} else {
  console.log(`John's BMI (${BMIJohn2}) is higher than Mark's (${BMIMark2})!`);
}
*/
