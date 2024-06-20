/* jshint esversion: 11 */
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
            let choiceElement = document.getElementById("guess" + i);
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
    const progressElement = document.getElementById("progress");
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
const questions = [
    new Question("What is meant by one light year?", ["Distance light travels in one year", "Distance that light travels in one day", "Distance light travels in one month","Distance light travels in one min", "Distance light travels in one second"], "Distance light travels in one year"),
    new Question("Which is the closest planet to the sun?", ["Earth", "Venus", "Mercury", "Mars", "Jupiter"], "Mercury"),
    new Question("How many minutes does the sun light takes to come to earth?", ["Just over one hour","Just over eight minutes", "Just over four minutes","Just over nine minutes","Just over one second"],"Just over eight minutes"),
    new Question("Which is the spacecraft NASA launched in 2006 to study Pluto?", ["Voyager", "Jason", "Messenger", "Ulysses", "New Horizons"], "New Horizons"),
    new Question("What is the outer layer of the atmosphere?", ["Atmosphere", "Thermosphere", "Mesosphere","Exosphere", "Stratosphere" ], "Exosphere"),
    new Question("Which is the world’s largest light detecting telescope?", ["Chantra X-ray telescope", "Hubble telescope", "The twin Keck telescopes","Keck Observatory", "James Webb Space" ], "The twin Keck telescopes"),
    new Question("The nearest star to earth, after the sun, is?", ["Proxima Centauri", "Barnard’s star", "Gliese 581","Luyten's Star", "Ross 154" ], "Proxima Centauri"),
    new Question("Who was the first person in space?", ["Neil Armstrong", "Yuri Gagarin", "Kalpana Chawla","Elon Musk", "Mike Collins" ], "Neil Armstrong"),
    new Question("The first man landed on moon in?", ["1950", "1969", "1979","1985", "1990" ], "1969"),
    new Question("Which planet is nearest in size to earth?", ["Earth", "Jupiter", "Mercury", "Mars", "Venus" ], "Venus"),
];


// Initialize quiz
let quiz = new Quiz(questions);

// Display quiz
populate();