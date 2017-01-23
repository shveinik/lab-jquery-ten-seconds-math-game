// Use this file to write the logic of your game, the needed attrs and functions

var userOperation, userTopLimit;

function TenSecondsMathGame(operation, topLimit) {
    this.userOperation = operation;
    this.userTopLimit = topLimit;
    this.newQuestion = questionGen;
    this.isCorrectAnswer = isCorrectAnswer;
}

var game = new TenSecondsMathGame("-",10);


// Returns a random integer between [1..numberLimit]

var randomGen = function() {
  return Math.floor(Math.random() * (game.userTopLimit - 1)) +1;
};

// Returns an object with {question, answer}

var random1 = randomGen();
var random2 = randomGen();
var answer;

function questionGen() {
  var reRunRandom = function(){
    while((random1 - random2 < 3 &&  random1 - random2 >= 0) || (random2 - random1 < 3 && random2 - random1 >= 0)){
    random1 = randomGen();
    random2 = randomGen();
    }

  };

  switch(this.userOperation) {
    case '+':
      reRunRandom();
      answer = random1 + random2;
      break;
    case '-':
      reRunRandom();
      if(random1 < random2){
          answer = random2 - random1;
      } else {
        answer = random1 - random2;
      }
      break;
    case '*':
      reRunRandom();
      answer = random1 * random2;
      break;
    case '/':
      answer = random1 / random2;
      break;

  }

document.getElementById("operation").innerHTML = this.userOperation;

if (random1 > random2){  
  document.getElementById("random1").innerHTML = random1;  
  document.getElementById("random2").innerHTML = random2;
} else {
  document.getElementById("random1").innerHTML = random2;
  document.getElementById("random2").innerHTML = random1;
 }
}

game.newQuestion();

// document.getElementById("random1").innerHTML =

function isCorrectAnswer(userAnswer) {
  console.log(answer);
  if (userAnswer == answer) {
    console.log("You are correct sir.");
  }
  else {
    console.log("Nope, guess again.");
  }

}

function checkAnswer() {
  var userAnswer = document.getElementById('answer').value;
  isCorrectAnswer(userAnswer);
}



// Checks a user answer
