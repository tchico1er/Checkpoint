/*
PLEASE DO NOT TOUCH THE TEST SECTION

ALL FUNCTION HAVE BEEN DECLARED FOR YOU BUT YOU WILL NEED TO
MANIPULATE THE DEFINITION ALONG WITH THE PARAMETERS


THESE QUESTIONS ARE GOING TO BE BUILT FROM CREATING TWO CLASSES
SO EACH QUESTION YOU WILL HAVE TO GO BACK AND MODIFY THE CODE OF EACH CLASS

*/

/*
QUESTION 1

CREATE A CONSTRUCTOR FUNCTION THAT TAKES AN ARGUMENT name AND ASSIGNS A PROPERTY name EQUAL TO THE ARGUMENT
IT ALSO HAS ANOTHER PROPERTY type THAT EQUALS THE STRING 'parent class'


*/

function MyFirstClass(name) {
  // CODE HERE
   constructor(name);{
    this.name = name,
    this.type = 'parent class'

    // getNumberOfChars = function(){
    //   return name.length;
    // }
    
   }
}
 
/*
QUESTION 2

USING THE PROTOTYPE CHAIN, ADD THE METHOD getNumberOfChars THAT JUST RETURNS THE NUMBER OF CHARACTERS IN THE NAME

*/

// CODE HERE
MyFirstClass.prototype.getNumberOfChars = function(){
  console.log(this.name.length)
  return this.name.length;
}

/*
QUESTION 3

CREATE A CLASS MySecondClass THAT INHERITS PROPERTIES FROM MyFirstClass. MySecondClass ALSO HAS A PARAMETER name THAT WILL BE PASSED TO MyFirstClass

REMEMBER TO USE THE METHOD call AND FEED this AS THE FIRST ARGUMENT

*/

function MySecondClass(name) {
  // CODE HERE
  MyFirstClass.call(this,name)
  

}

/*
QUESTION 4

MAKE IT THAT MySecondClass INHERITS METHODS FROM MyFirstClass

YOU MAY WANT TO LINK THE PROTOTYPICAL CHAINS AND USE Object.create


*/

// CODE HERE
MySecondClass.prototype = new MyFirstClass();
/*
QUESTION 5

MAKE SURE THE CONSTRUCTOR FUNCTION FOR MySecondClass's INSTANCE IS INDEED MySecondClass


*/

// CODE HERE
MySecondClass.prototype.constructor = MySecondClass;

/*
TEST SECTION, PLEASE DO NOT TOUCH




*/

const Mocha = require('mocha');
const { spyCall } = require('sinon');

const runner = new Mocha({});

runner.addFile('./test.js');

runner.run();

module.exports = {
  MyFirstClass,
  MySecondClass,
};

console.log('');
