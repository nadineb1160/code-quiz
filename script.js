// ******************
// ***** TIMER ******
// ******************

// Timer Element - numeric
var timeEl = document.getElementById("timer");

// Timer function
var timerInterval;

// **************************
// ***** INTRO SECTION ******
// **************************

// Intro Section
var introSec = document.getElementById("intro");

// Start Button
var startBtn = document.getElementById("start");

// Event listener to start button
startBtn.addEventListener("click", start);

// **************************
// ***** ANSWER SECTION *****
// **************************

// Answer Section
var answerSec = document.getElementById("answer-check");

// Answer incorrect or Correct
var answer = document.getElementById("answer");

// ***********************
// ***** END SECTION *****
// ***********************

// End section
var endSec = document.getElementById("end-game");

// Score heading
var finalScore = document.getElementById("final-score");

// Input field
var inputInitials = document.getElementById("inputInitials");

// Submit button
var submitBtn = document.getElementById("submit");

// Event listener to submit button
submitBtn.addEventListener("click", submit);

// ***********************
// ***** HIGHSCORES ******
// ***********************

var highscoreIndex = [];

// *****************************
// ***** QUESTION SECTION ******
// *****************************

// Current Question index
var currentIndex = 0;

// Question Element
var questionSec = document.getElementById("question");

// Question Text
var questionText = document.getElementById("question-text");

// Answer #1 option button
var answerOne = document.getElementById("btn-1");
// Answer #2 option button
var answerTwo = document.getElementById("btn-2");
// Answer #3 option button
var answerThree = document.getElementById("btn-3");
// Answer #4 option button
var answerFour = document.getElementById("btn-4");

// Answer Options Array
var answerArray = [answerOne, answerTwo, answerThree, answerFour];

// Event Listeners on answer buttons to check if user selection is correct
for (var i = 0; i < answerArray.length; i++) {
    answerArray[i].addEventListener("click", function() {
        checkCorrect(i);
    });
}

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

// Start of quiz
function start() {

    console.log(timeLeft);

    // Start timer
    startTimer();

    // Hide intro page
    introSec.style.display = "none";

    startQuiz();
}


// ******************
function startTimer() {

    timerInterval = setInterval(function() {
        
        timeEl.textContent = timeLeft;
        // Decrement time left
        timeLeft--;
        console.log(timeLeft);

      
        // Countdown finished, switch to score section
        if (timeLeft === 0) {
            timeEl.textContent = "";
            clearInterval(timerInterval);
            // Call End Game
            endGame();

        }
    
    }, 1000);
}
// ******************

function startQuiz() {

    // display first question
    displayQuestion(0);

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


var scoreCount = 0;

// Number of total questions
var questionsLeft = questionArray.length;
// lastIndex number
var lastIndex = questionsLeft - 1;

// check if button selected is correct answer
function checkCorrect (indexOfAnswer) {

    // Check if correct answer is the same as answer index
    if (questionArray[currentIndex].answerIndex === indexOfAnswer) {
        // Display correct
        answer = "Correct";
        // + 20 points if answered correctly
        scoreCount = scoreCount + 20;
        
    }
    // Incorrect answer 
    else {

        // Display incorrect
        answer = "Incorrect";
         // - 5 points if answered incorrectly
         scoreCount = scoreCount - 5;

        // Decrement time
        if (timeLeft > 20) {
            timeLeft = timeLeft - 10;
        }

    }

    // Display if you answered correct
    answerSec.style.display = "block";

    // Display correct
    if (currentIndex !== lastIndex) {
        // Move to next question
        currentIndex++;
        // display next question
        displayQuestion(currentIndex);
    }
    else {
        // End game screen
        endGame();
    }

}


// Show endgame section
function endGame() {

    // Stop timer
    clearInterval(timerInterval);

    // Add to score the number of seconds left
    scoreCount = scoreCount +  timeEl.textContent;

    // Set to 0
    timeEl.textContent = 0;

    // Hide question section
    questionSec.style.display = "none";

    // Show end section
    endSec.style.display = "block";

}

function submit() {

    // Get initials value and trim 
    var initialsTrim = inputInitials.value.trim();

    // User highscore object
    // var userScore = {
    //     initials: initialsTrim,
    //     highscore: scoreCount
    // }

    // Set initials in local storage
    // will overwrite if initials are the same
    localStorage.setItem(initialsTrim, scoreCount);

    // Go to highscores page

}

// Back button
var backBtn = document.getElementById("back");
// Event listener on back button
backBtn.addEventListener("click", function() {
    // Go back to index.html?
    console.log("back");
});

// clear button
var clearBtn = document.getElementById("clear");
// Event listener on clear button
clearBtn.addEventListener("click", function() {
    // 
    console.log("clear");
});