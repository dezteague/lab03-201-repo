'use strict';

var userName = prompt('Hello, what is your name?').toUpperCase();
alert('Thanks for playing the Deziree Guessing Game, ' + userName + '!'); //Thanks for playing the Deziree Guessing Game, ___!
console.log('userName', userName);

//___, please respond to the following questions with y/yes or n/no.
alert(userName + ', please respond to the following question with y/yes or n/no.');

//#1 Was I born in Seattle? yes
var responseOne = prompt('Was I born in Seattle?').toLowerCase();
if (responseOne === 'y' || responseOne === 'yes') {
  alert('Yes, that is correct!');
} else {
  (responseOne === 'n' || responseOne === 'no');
  alert('Sorry, that is incorrect. I was born in North Seattle');
}
console.log('responseOne', responseOne);

//#2 Did I study Communication at the University of Washington? yes
var responseTwo = prompt('Did I study Communication at the University of Washington?').toLowerCase();
if (responseTwo === 'y' || responseTwo === 'yes') {
  alert('Congrats, you are right.');
} else {
  (responseTwo === 'n' || responseTwo === 'no');
  alert('Sorry, wrong answer. I studied Communication and Diversity at the University of Washington.');
}
console.log('responseTwo', responseTwo);

//#3 Did I study abroad in Paris? no
var responseThree = prompt('Did I study abroad in Paris?').toLowerCase();
if (responseThree === 'n' || responseThree === 'no') {
  alert('Congrats, ' + userName + '! You know me very well.');
} else {
  (responseThree === 'y' || responseThree === 'yes');
  alert('Sorry, wrong answer. My first study abroad trip was to Buenos Aires, Argentina.');
}
console.log('responseThree', responseThree);

//#4 Am I a certified ESL teacher? yes
var responseFour = prompt('Am I a certified ESL teacher?').toLowerCase();
if (responseFour === 'y' || responseFour === 'yes') {
  alert('Yes, that is correct.');
} else {
  (responseFour === 'n' || responseFour === 'no');
  alert('Sorry, that is incorrect. I received my TEFL certification in 2013.');
}
console.log('responseFour', responseFour);

//#5 Do I aspire to be a full-stack developer? yes
var responseFive = prompt('Do I aspire to be a full-stack developer?').toLowerCase();
if (responseFive === 'y' || responseFive === 'yes') {
  alert('Yes, that is correct.');
} else {
  (responseFive === 'n' || responseFive === 'no');
  alert('Sorry, that is incorrect. I would love to become a full-stack developer');
}
console.log('responseFive', responseFive);

//#6 Guess the number of countries I have visited
//  CONDITION:
var numberCountriescorrect = 36;
console.log('numberCountriescorrect', numberCountriescorrect);
var numberCountriesguess = parseInt(prompt('Guess the number of countries I have visited.  Hint: The answer is between 1-50'));
console.log('numberCountriesguess', numberCountriesguess);

//   IF TOO HIGH:
var i = 0;
while (numberCountriesguess !== 36 && i < 3) {
  if (numberCountriesguess > 36) {
    numberCountriesguess = parseInt(prompt('Your guess was too high. Try again'));
    i++;
    console.log('i', i);
  }
  //  IF TOO LOW:
  if (numberCountriesguess < 36 && i < 3) {
    numberCountriesguess = parseInt(prompt('Your guess was too low. Try again'));
    i++;
    console.log('i', i);
  }
}
// IF CORRECT:
if (numberCountriesguess === 36) {
  alert('Wow, you got it right! I have been to ' + numberCountriescorrect + ' countries.');
} else {
  alert('Oh no, you\'re out of tries! The correct answer is 36');
}
