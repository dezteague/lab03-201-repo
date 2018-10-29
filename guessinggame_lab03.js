//next time, remember to always make a branch to start working with pull requests!

'use strict';

var userName = prompt('Hello, what is your name?').toUpperCase();
alert('Thanks for playing the Deziree Guessing Game, ' + userName + '!'); //Thanks for playing the Deziree Guessing Game, ___!
console.log('userName', userName);

//___, please respond to the following questions with y/yes or n/no.
alert(userName + ', please respond to the following question with y/yes or n/no.');

var correctAnswers = 0;

//#1 Was I born in Seattle? yes some code is missing from here
function yesNo1() {
  var responseOne = prompt('Was I born in Seattle?').toLowerCase();
  if (responseOne === 'y' || responseOne === 'yes') {
    alert('Yes, that is correct!');
    correctAnswers++;
  } else {
    (responseOne === 'n' || responseOne === 'no');
    alert('Sorry, that is incorrect. I was born in North Seattle');
    console.log('responseOne', responseOne);
  }
}
yesNo1();

//#2 Did I study Communication at the University of Washington? yes
function yesNo2() {
  var responseTwo = prompt('Did I study Communication at the University of Washington?').toLowerCase();
  if (responseTwo === 'y' || responseTwo === 'yes') {
    alert('Congrats, you are right.');
    correctAnswers++;
  } else {
    (responseTwo === 'n' || responseTwo === 'no');
    alert('Sorry, wrong answer. I studied Communication and Diversity at the University of Washington.');
  }
  console.log('responseTwo', responseTwo);
}
yesNo2();

//#3 Did I study abroad in Paris? no
function yesNo3() {
  var responseThree = prompt('Did I study abroad in Paris?').toLowerCase();
  if (responseThree === 'n' || responseThree === 'no') {
    alert('Congrats, ' + userName + '! You know me very well.');
    correctAnswers++;
  } else {
    (responseThree === 'y' || responseThree === 'yes');
    alert('Sorry, wrong answer. My first study abroad trip was to Buenos Aires, Argentina.');
  }
  console.log('responseThree', responseThree);

}
yesNo3();

//#4 Am I a certified ESL teacher? yes
function yesNo4() {
  var responseFour = prompt('Am I a certified ESL teacher?').toLowerCase();
  if (responseFour === 'y' || responseFour === 'yes') {
    alert('Yes, that is correct.');
    correctAnswers++;
  } else {
    (responseFour === 'n' || responseFour === 'no');
    alert('Sorry, that is incorrect. I received my TEFL certification in 2013.');
  }
  console.log('responseFour', responseFour);
}
yesNo4();


//#5 Do I aspire to be a full-stack developer? yes
function yesNo5() {
  var responseFive = prompt('Do I aspire to be a full-stack developer?').toLowerCase();
  if (responseFive === 'y' || responseFive === 'yes') {
    alert('Yes, that is correct.');
    correctAnswers++;
  } else {
    (responseFive === 'n' || responseFive === 'no');
    alert('Sorry, that is incorrect. I would love to become a full-stack developer');
  }

}
yesNo5();

//#6 Guess the number of countries I have visited
//  CONDITION:
function yesNo6() {
  var numberCountriescorrect = 36;
  console.log('numberCountriescorrect', numberCountriescorrect);
  var numberCountriesguess = parseInt(prompt('Guess the number of countries I have visited.  Hint: The answer is between 1-50'));
  console.log('numberCountriesguess', numberCountriesguess);

  //   IF TOO HIGH/ TOO LOW:
  var counter = 0;
  console.log('counter', counter);
  while (numberCountriesguess !== 36 && counter < 3) {
    if (numberCountriesguess > 36) {
      numberCountriesguess = parseInt(prompt('Your guess was too high. Try again'));
    } else if (numberCountriesguess < 36 && counter < 3) {
      numberCountriesguess = parseInt(prompt('Your guess was too low. Try again'));
    } else {
      numberCountriesguess = parseInt(prompt(numberCountriesguess + 'is not a number. Try again!'));
    }

    counter++;
    console.log('counter', counter);
  }
  // IF CORRECT:
  if (numberCountriesguess === 36) {
    alert('Wow, you got it right! I have been to ' + numberCountriescorrect + ' countries.');
    correctAnswers++;
  } else {
    alert('Oh no, you\'re out of tries! The correct answer is 36');
  }
}
yesNo6();

//#7 Can you guess one of my favorite outdoor activities?
function yesNo7() {
  var activities = ['scuba diving', 'hiking', 'paddle boarding', 'kayaking', 'white-water rafting'];
  var activityResponse = prompt('Can you guess one of my favorite outdoor activities?  You will have 6 chances! Good luck :)').toLowerCase();
  var correct = false;
  var counter2 = 0;

  while (counter2 < 5 && correct === false) {
    for (var a = 0; a < activities.length; a++) {
      if (activityResponse === activities[a]) {
        correct = true;
        break;
      }
    }
    if (correct === true) {
      alert('Congrats, you got one! I enjoy scuba diving, hiking, paddle boarding, kayaking, and white-water rafting.');
      correctAnswers++;
    }
    else {
      alert('Good guess ' + userName + ', but that\'s not on my list.' );
      activityResponse = prompt('Try again.  What is one of my favorite outdoor activities?');
      counter2++;
    }
  }
}
yesNo7();

//FINAL MESSAGE
alert('Hey ' + userName + ', you got ' + correctAnswers + ' out of 7 questions correct.  Thanks for visiting my site!');

