// assets/js/script.js

// Question constructor function
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
};

// Quiz constructor function
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
};

Quiz.prototype.guess = function(answer) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
};

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
};

// Quiz display functions
function populate() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        // Show question
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        // Show choices
        let choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess("guess" + i, choices[i]);
        }

        showProgress();
    }
}

function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
}

function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let progressElement = document.getElementById("progress");
    progressElement.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
}

function showScores() {
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = `
        <h1>Result</h1>
        <h2 id='score'> Your score: ${quiz.score}</h2>
    `;
}

// Create questions
let questions = [
    new Question("What is meant by one light year?", ["The distance light travels in one year", "Distance that light travels in one day", "The distance light travels in one month","The distance light travels in one min", "The distance light travels in one second"], "The distance light travels in one year"),
    new Question("Which is the closest planet to the sun?", ["Earth", "Venus", "Mercury", "Mars", "Jupiter"], "Mercury"),
    new Question("How many minutes does the sun light takes to come to earth?", ["Just over one hour","Just over eight minutes", "Just over four minutes","Just over nine minutes","Just over one second"],"Just over eight minutes"),
    new Question("Which is the spacecraft NASA launched in 2006 to study Pluto?", ["Voyager", "Jason", "Messenger", "Ulysses", "New Horizons"], "New Horizons"),
    new Question("Which was the first living creature to be sent to space?", ["Michael Barrat", "Yuri Gagarin", "A monkey","Laika the dog", "A cat" ], "Laika the dog"),
];


// Initialize quiz
let quiz = new Quiz(questions);

// Display quiz
populate();