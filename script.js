// **************************
// ***** INTRO SECTION ******
// **************************

// Intro Element
var introSec  = document.getElementById("intro");

// Start Button
var startBtn = document.querySelector("#start");

// *****************************
// ***** QUESTION SECTION ******
// *****************************

// Question Element
var questionSec  = document.getElementById("question");

// Question Text
var questionTxt = document.getElementById("question-text");

// Option button 1
var answerOne = document.getElementById("btn-1");

// Option button 2
var answerTwo = document.getElementById("btn-2");

// Option button 3
var answerThree = document.getElementById("btn-3");

// Option button 4
var answerFour = document.getElementById("btn-4");

// Answer Element Array
var answerArray = [answerOne, answerTwo, answerThree, answerFour];

// Question 1 Object
var questionOne = {
    question: "",
    answerOptions: [],
    answerIndex: 0,
};

// Question 2 Object
var questionTwo = {
    question: "",
    answerOptions: [],
    answerIndex: 0,
};

// Question 3 Object
var questionThree = {
    question: "",
    answersOptions: [],
    answerIndex: 0,
};

// Array of questions
var questionArray = [questionOne, questionTwo, questionThree];

// IF I click the start button
// Add event listener to start button
startBtn.addEventListener("click", startQuiz);


// THEN a timer starts and I am presented with a question
function startQuiz() {
    
    // Hide intro page
    introSec.style.display = "none";

    // Start timer

    // While timer not 0

    // Present next question

    // For all questions
    for (var i = 0; i < questionArray.length; i++) {
        
        // Current question
        var currentQuestion = questionArray[i];
        // Current answer array
        var answerOpts = currentQuestion.answerOptions;

        // Change question context to next question
        questionTxt.innerHTML = answerArray[i].question;

        // Change answer options
        for (var i = 0; i < answerArray.length; i++) {
            // Change answer elements to new answer options
            answerArray[i].innerHTML = answerOpts
        }

        // Show question section
        questionSec.style.display = "block";

        // wait for answer???
        // check that answer one click == answer of object
        answerOne.addEventListener("click", giveAnswer);
        answerTwo.addEventListener("click", giveAnswer);
        answerThree.addEventListener("click", giveAnswer);
        answerFour.addEventListener("click", giveAnswer);

    }

}


// answerOne.addEventListener("click", giveAnswer);



// IF I answer a question

// THEN I am presented with another question

// IF I answer a question incorrectly

// THEN time is subtracted from the clock

// IF all questions are answered or the timer reaches 0

// THEN the game is over

// IF the game is over

// THEN I can save my initials and score