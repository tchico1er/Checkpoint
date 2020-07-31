/*
PLEASE DO NOT TOUCH THE TEST SECTION

ALL FUNCTION HAVE BEEN DECLARED FOR YOU BUT YOU WILL NEED TO
MANIPULATE THE DEFINITION ALONG WITH THE PARAMETERS





*/

/*
EXAMPLE

CREATE A FUNCTION THAT RETURNS THE BOOLEAN true

*/

function example() {
  let b = true
  return b;
}
example()
/*
QUESTION 1

CREATE A FUNCTION THAT RETURNS THE BOOLEAN false

*/

function firstFunction() {
  // YOUR CODE HERE
  return false;
}
firstFunction()
/*
QUESTION 2

CREATE A FUNCTION THAT RETURNS THE STRING 'hello world'

*/

function helloWorld() {
  // YOUR CODE HERE
  return "hello world"
}
helloWorld()
/*
QUESTION 3

CREATE A FUNCTION THAT HAS ONE PARAMTER (i.e. YOU CAN GIVE IT ONE ARGUMENT WHEN INVOKING THE FUNCTION)

HAVE IT RETURN THAT ARGUMENT

<---- NOTE ---->
YOU WILL HAVE TO EDIT THE FUNCTION DECLARATION (the line where the key word 'function' is)

*/

function question3(param) {
  // YOUR CODE HERE
  return param;
}
question3(5)
/*
QUESTION 4

CREATE A FUNCTION THAT TAKES A STRING AS AN ARGUMENT AND CONCATINATES THE STRING WITH hello

e.g.

concatQuestion('blake') ===> 'hello blake'

*/

function concatQuestion(str) {
  // YOUR CODE HERE
  return "hello " + str
}
concatQuestion('black ')
concatQuestion()
/*
QUESTION 5

CREATE A FUNCTION THAT TAKES TWO ARGUMENTS AND SUBTRACTS THE SECOND ARGUMENT FROM THE FIRST
e.g.

subtraction(2, 1) ===> 1

subtraction(1, 2) ===> -1

*/

function subtraction(num1, num2) {
  // YOUR CODE HERE
  return num1 - num2;
}
subtraction(2,1)
//subtraction(1,2)
/*
QUESTION 6

CREATE A FUNCTION THAT TAKES TWO ARGUMENTS AND MULTIPLIES THEM TOGETHER
e.g.

multiplication(2, 1) ===> 2

multiplication(2, 0) ===> 0

*/

function multiplication(num1, num2) {
  // YOUR CODE HERE
  return num1 * num2;
}
multiplication(4,5)
/*
QUESTION 7

CREATE A FUNCTION THAT TAKES ONE ARGUMENT AND SQUARES IT
e.g.

square(2) ===> 4

square(4) ===> 16

*/

function square(num) {
  // YOUR CODE HERE
  return Math.pow(num,2)
}
square(3)
/*
QUESTION 8

1) CREATE A FUNCTION THAT RETURNS A STRING ---> 'we can save return values in variables'
2) ASSING VARIABLE answerToQuestion8 TO THE RETURN VALUE OF THE FUNCTION

e.g.


*/

var answerToQuestion8;

function question8() {
  // YOUR CODE HERE
  return 'we can save return values in variables'
}

answerToQuestion8 = 'we can save return values in variables'
console.log(answerToQuestion8)
question8('we can save return values in variables')
/*
TEST SECTION, PLEASE DO NOT TOUCH




*/

const Mocha = require('mocha');

const runner = new Mocha({});

runner.addFile('./test.js');

runner.run();

module.exports = {
  example,
  firstFunction,
  helloWorld,
  question3,
  concatQuestion,
  subtraction,
  multiplication,
  square,
  answerToQuestion8,
  question8,
};

console.log('');
