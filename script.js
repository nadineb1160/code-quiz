// Timer Element - numeric
var timeEl = document.getElementById("timer");

// **************************
// ***** INTRO SECTION ******
// **************************

// Intro Element
var introSec = document.getElementById("intro");

// Start Button
var startBtn = document.getElementById("start");

// Event listener to start button
startBtn.addEventListener("click", start);

// *****************************
// ***** QUESTION SECTION ******
// *****************************

// Question Element
var questionSec = document.getElementById("question");

// Question Text
var questionText = document.getElementById("question-text");

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

for (var i = 0; i < answerArray.length; i++) {
    answerArray[i].addEventListener("click", checkCorrect);
}
// Event Listeners to answer buttons to check if correct
// answerOne.addEventListener("click", checkCorrect);
// answerTwo.addEventListener("click", checkCorrect);
// answerThree.addEventListener("click", checkCorrect);
// answerFour.addEventListener("click", checkCorrect);

// Question #1 
var questionOne = {
    question: "Which of the following git commands is used to create a branch?",
    answerOptions: ["1. git push origin <branch-name>", "2. git branch <branchname>", "3. git clone <link>", "4. git checkout <branchname"],
    answerIndex: 1,
};

// Question #2 
var questionTwo = {
    question: "Media queries...",
    answerOptions: ["1. are used to display alerts, prompts and confirmations.", "2. define which questions you can ask on webpage.", 
                    "3. help style videos.", "4. define how styles are applied based on characteristics of viewport."],
    answerIndex: 3,
};

// Question #3
var questionThree = {
    question: "Viewport refers to...",
    answerOptions: ["1. the small icon in the webpage tab next to title.", "2. display being used to view the website.",
                    "3. the header section that appears on every webpage with the same template.", "4. what the user views at a particular time."],
    answerIndex: 1,
};

// Question #4
var questionFour = {
    question: "How do you output directly to HTML page?",
    answerOptions: ["1. print('hello')", "2. console.log('hello')", "3. document.write('hello')", "4. prompt('hello')"],
    answerIndex: 2,
};

// Question #5
var questionFive = {
    question: "Which of the following is not true about rows?",
    answerOptions: ["1. In the syntax: row-sz-#, sz refers to viewing size.","2. There can be sub-rows.","3. They belong inside columns.", "4. They can be a maximum of 12 wide."],
    answerIndex: 2,
};

// Question #6
var questionSix = {
    question: "What wraps around a Bootstrap grid?",
    answerOptions: ["1. class='container'", "2. class='row'", "3. class='col'", "4. class='wrapper'"],
    answerIndex: 0,
};

// Array of questions
var questionArray = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix];


// Set timer count to 75
var timeLeft = 75;

function start() {

    // Start timer
    startTimer();

    // Hide intro page
    introSec.style.display = "none";

    startQuiz();
}


// ******************
function startTimer() {

    var timerInterval = setInterval(function() {
      timeEl.textContent = timeLeft;
      // Decrement time left
      timeLeft--;

      
      // Countdown finished, switch to score section
      if (timeLeft === 0) {
        timeEl.textContent = "";
        // speedRead();
        clearInterval(timerInterval);
        // call scoreboard
      }
  
    }, 1000);
}
// ******************

var isAnswered;

// THEN a timer starts and I am presented with a question
function startQuiz() {

    // Number of total questions
    var questionsLeft = questionArray.length;
    // lastIndex number
    var lastIndex = questionsLeft - 1;
    // starting question
    var currentIndex = 0;

    // While there are still more questions or more time
    while (currentIndex <= lastIndex && timeLeft !== 0) {
        // Reset is answered to false
        isAnswered = false;

        // display current question
        displayQuestion(currentIndex);


        if (isAnswered === true) {
            // Check results
            console.log('true');
            // Show correct or incorrect
        }

        currentIndex++;

    }

}

function displayQuestion (questionIndex) {
    // Current question
    var currentQuestion = questionArray[questionIndex];
    // Current answer array
    var answerOpts = currentQuestion.answerOptions;

    // Change question context to next question
    questionText.innerHTML = currentQuestion.question;

    // Change answer options
    for (var j = 0; j < answerArray.length; j++) {
        // Change answer elements to new answer options
        answerArray[j].innerHTML = answerOpts[j];
    }
    
    // Show question section
    questionSec.style.display = "block";
}

// check if button selected is correct answer
function checkCorrect () {
    // Question has been answered
    isAnswered = true;
    // Show correct or incorrent message

    // get user index
    // get correct index

    // add to score
    // or subtract
}

// IF I click the start button

// THEN a timer starts and I am presented with a question


// IF I answer a question

// THEN I am presented with another question

// IF I answer a question incorrectly

// THEN time is subtracted from the clock

// IF all questions are answered or the timer reaches 0

// THEN the game is over

// IF the game is over

// THEN I can save my initials and score