function Quiz(questions) {
    this.score= 0;
    this.questions= questions;
    this.currentQuestionIndex= 0;
}

Quiz.prototype.guess = function(answer) {
    if (this.getCurrentQuestion(). is CorrectAnswer(answer)){
        this.score++;
    }
    this.currentQuestionIndex++;
};
Quiz.prototype.getCurrentQuestion= function() {
    return this.questions [this.currentQuestionIndex];
};
Quiz prototype. hasEnded = function() {
    return this. currentQuestionIndex >= this.questions.length;
};
function Question (text, choices, answer) {
    this.text=text;
    this.choices=choices;
    this.answer=answer;
};
Questions.prototype.iscorrectAnswer= function(choice) {
    return this.answer===choice;
};
Var QuizUI= {
    displayNext: function() {
        if (Quiz.hasEnded()) {
            this.displayScore();
        } else {
        this.displayQuestion();
        this.displayChoices();
        this.displayProgress();
    }
},
displayQuestions: function() {
    this.populateIdWithHTML ("question", quiz.getCurrentQuestion().text);
},
displayChoices: function() {
    var choices= quiz.getCurrentQuestion().choices;

    for (var i = 0; i < choices.lengh; i++) {
    this. populateIdWithHTML ("choice" + i, choices [i]);
    this.guessHandler ("guess" + i, choices [i]);
    }
},
displayScore: function() {
    var gameOverHTML= "<h1>Game Over</h1>";
    gameOverHTML+="<h2> Your score is: "+ quiz.score + "/5 </h2>";
    this.populateIdWithHTML ("quiz, gameOverHTML");
},
populateIdWithHTML: function(id, text) {
    var element= document.getElementById(id);
    element.innerHTML = text;
},
guessHandler: function(id, guess) {
    var button = document.getElementById(id);
    button.onclick= function() {
        quiz.guess (guess);
        QuizUI.displayNext();
    }
},
displayProgress: function() {
    var currentQuestionNumber= quiz.currentQuestionIndex + 1;
    this.populateIdWithHTML ("progress", "Question"+ currentQuestionNumber + "of" + quiz.questions.length);
},

var questions = [
    new Question ("What is meant by one light year?", ["The distance light travels in one year", "Distance that light travels in one day", "The distance that travels in one min"], "The distance light travels in one year"),
    new Question ("Which is the closest planet to the sun?"), ["Mercure", "Venus", "Mars"],"Mercure"),
    new Question ("How many minutes does the sun light takes to come to earth?", ["Just over eight minutes", "Just over four minutes","Just over nine minutes"], "Just over eight minutes"),
    new Question ("Which is the spacecraft that NASA launched in 2006, to study Pluto?, ["Voyager", "New Horizons", "Messenger"], "New Horizons"),
    new Question ("Which was the first living creature to be sent to space?", ["Laika the dog", "Yuri Gagarin", "A monkey"], "Laika the dog"),

];
var quiz= new Quiz(questions);
QuizUI.displayNext();
    


