// ***********************
// ------ VARIABLES ------
// ***********************

// ******************
// ***** TIMER ******
// ******************

// Time remaining
var timeLeft = 80;

// Timer element - numeric
var timeEl = document.getElementById("timer");

// Timer function
var timerInterval;

// **************************
// ***** INTRO SECTION ******
// **************************

// Intro section
var introSec = document.getElementById("intro");

// Start button
var startBtn = document.getElementById("start");

// Event listener to start button
startBtn.addEventListener("click", start);

// **************************
// ***** ANSWER SECTION *****
// **************************

// Answer section
var answerSec = document.getElementById("answer-check");

// Answer incorrect or correct
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

// Total score count
var scoreCount = 0;

// Saved highscores array
var highscoresArr = [];

// Highscore section
var highscoreSec = document.getElementById("highscores");

// Highscore button - in navbar
var highscoreBtn = document.querySelector(".hs-btn");

// Event listener to highscores button
highscoreBtn.addEventListener("click", getHighscores);

// Highscore list - in HS section
var highscoresList = document.getElementById("highscore-list");

// Back button
var backBtn = document.getElementById("back");

// Event listener on back button
backBtn.addEventListener("click", returnToHomePage);

// clear button
var clearBtn = document.getElementById("clear");

// Event listener on clear button
clearBtn.addEventListener("click", clearScores);

// *****************************
// ***** QUESTION SECTION ******
// *****************************

// Current question index
var currentIndex = 0;

// Question element
var questionSec = document.getElementById("question");

// Question text
var questionText = document.getElementById("question-text");

// Answer #1 option button
var answerOne = document.getElementById("btn-1");
// Answer #2 option button
var answerTwo = document.getElementById("btn-2");
// Answer #3 option button
var answerThree = document.getElementById("btn-3");
// Answer #4 option button
var answerFour = document.getElementById("btn-4");

// Answer options array
var answerArray = [answerOne, answerTwo, answerThree, answerFour];

// Event listeners on answer buttons 
// Checks if user selection is correct
for (var i = 0; i < answerArray.length; i++) {
    answerArray[i].addEventListener("click", checkCorrect);
}

// Array of questions asked to user
var questionArray = [
    // Question #1 
    {
        question: "Which of the following git commands is used to create a branch?",
        answerOptions: ["1. git push origin <branch-name>", "2. git branch <branchname>", "3. git clone <link>", "4. git checkout <branchname"],
        answerIndex: 1,
    },

    // Question #2 
    {
        question: "Media queries...",
        answerOptions: ["1. are used to display alerts, prompts and confirmations.", "2. define which questions you can ask on webpage.",
            "3. help style videos.", "4. define how styles are applied based on characteristics of viewport."],
        answerIndex: 3,
    },

    // Question #3
    {
        question: "Viewport refers to...",
        answerOptions: ["1. the small icon in the webpage tab next to title.", "2. display being used to view the website.",
            "3. the header section that appears on every webpage with the same template.", "4. what the user views at a particular time."],
        answerIndex: 1,
    },

    // Question #4
    {
        question: "How do you output directly to HTML page?",
        answerOptions: ["1. print('hello')", "2. console.log('hello')", "3. document.write('hello')", "4. prompt('hello')"],
        answerIndex: 2,
    },

    // Question #5
    {
        question: "Which of the following is not true about rows?",
        answerOptions: ["1. In the syntax: row-sz-#, sz refers to viewing size.", "2. There can be sub-rows.", "3. They belong inside columns.", "4. They can be a maximum of 12 wide."],
        answerIndex: 2,
    },

    // Question #6
    {
        question: "What wraps around a Bootstrap grid?",
        answerOptions: ["1. class='container'", "2. class='row'", "3. class='col'", "4. class='wrapper'"],
        answerIndex: 0,
    },
]

// Number of total questions
var questionsLeft = questionArray.length;

// lastIndex number
var lastIndex = questionsLeft - 1;

// ************************************
// ------------- FUNCTIONS ------------
// ************************************

// Start quiz
function start() {

    // Start timer
    startTimer();

    // Hide intro page
    introSec.style.display = "none";

    startQuiz();
}

// Timer
function startTimer() {

    timerInterval = setInterval(function () {

        timeEl.textContent = timeLeft;
        // Decrement time left
        timeLeft--;

        // Countdown finished
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            timeEl.textContent = "";
            // Call End Game
            endGame();

        }

    }, 1000);
}

// Start quiz questions
function startQuiz() {

    // display first question
    displayQuestion(0);

}

// Display question at index
function displayQuestion(questionIndex) {

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

// Check if button selected is correct answer
function checkCorrect() {

    var id = parseInt(this.value);

    // If correct...
    if (questionArray[currentIndex].answerIndex === id) {
        // Display correct
        answer.innerHTML = "Correct";

        // + 20 points if answered correctly
        scoreCount = scoreCount + 20;

    }
    else { // Incorrect answer 

        // Display incorrect
        answer.innerHTML = "Incorrect";

        // - 5 points if answered incorrectly
        scoreCount = scoreCount - 5;

        // Decrement time
        if (timeLeft > 20) {
            timeLeft = timeLeft - 10;
        }
    }

    // Display if you answered correct
    answerSec.style.display = "block";

    // If not the last question...
    if (currentIndex !== lastIndex) {
        // Move to next question
        currentIndex++;
        // Display next question
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
    var timeInt = parseInt(timeEl.textContent);
    scoreCount = scoreCount + timeInt;

    // Set to 0
    timeEl.textContent = 0;

    // Hide question section
    questionSec.style.display = "none";

    // Show end section
    endSec.style.display = "block";

}

// When submit button is clicked
function submit() {

    event.preventDefault();

    // Get initials value and trim 
    var initialsTrim = inputInitials.value.trim();

    // Return early if initials is blank
    if (initialsTrim === "") {
        return;
    }

    // User highscore object
    var userScore = {
        initials: initialsTrim,
        highscore: scoreCount
    }

    // Get Highscores 
    getHighscores();

    // Add new highscore
    highscoresArr.push(userScore);

    // Clear input 
    inputInitials.value = "";

    // Store updatd highscores in local storage, re-render list
    storeHighscores();

}


// Create new objs from highscores Array
function renderHighscores() {

    // Clear highscores-list element
    highscoresList.innerHTML = "";

    // Render a new p for each highscore
    for (var i = 0; i < highscoresArr.length; i++) {
        // Get score for each input
        var userInitials = highscoresArr[i].initials;
        var score = highscoresArr[i].highscore;

        // Create a new obj, set content
        var p = document.createElement("p");
        p.textContent = userInitials + "-" + score;
        p.setAttribute("data-index", i);

        // Append initials - highscore
        highscoresList.appendChild(p);

    }
}

// Display highscore sec
function getHighscores() {

    // Stop / clear count if high scores is clicked in middle of game
    clearInterval(timerInterval);
    timeEl.textContent = "";

    // Hide All Sections
    clearDisplay();

    // Get highscores array of userscores
    storedHighscores = JSON.parse(localStorage.getItem("highscores"));

    // Set highscoresArr to stored array if not null
    if (highscoresArr !== null) {
        highscoresArr = storedHighscores;
    }

    // Render highscores on DOM
    renderHighscores();

    // Go to highscores page
    highscoreSec.style.display = "block";

}

// STORE HIGHSCORES
function storeHighscores() {

    // Set highscore to stringifyed array in local storage
    localStorage.setItem("highscores", JSON.stringify(highscoresArr));

}

// RETURN BACK
function returnToHomePage() {

    // Clear displays
    clearDisplay();

    // Reload page
    location.reload();
    
}

// CLEAR DISPLAY
function clearDisplay() {

    introSec.style.display = "none";
    questionSec.style.display = "none";
    answerSec.style.display = "none";
    endSec.style.display = "none";
    highscoreSec.style.display = "none";
}

// CLEAR SCORES
function clearScores() {

    localStorage.clear("highscore");
    highscoresArr = [];
    storeHighscores();
    renderHighscores();
}