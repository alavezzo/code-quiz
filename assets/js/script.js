var question = {
    one: "Commonly used data Types DO NOT Include:",
    two: "blah blah blah",
    three: "blah blah blah"
}
var quizQuestions = [question.one, question.two, question.three]

var answerOne = ['right', 'wrong','wrong','wrong'];
var answerTwo = ['wrong','wrong','wrong','right'];
var answerThree = ['wrong','right', 'wrong','wrong'];
var testAnswers = [answerOne, answerTwo, answerThree]

var counter = 0
var second = 1000

var startTimer = function () {
    var countDownDate = new Date().getTime() + (75*second);

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var seconds = Math.floor((distance / 1000));

    // Display the result in the element with id="demo"
    document.querySelector('.countdown').innerHTML = seconds

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".countdown").innerHTML = "Time Is Up";
    }
    }, 1000);
} 
var randomNumber = function(min, max) {
    var value = Math.floor((Math.random() * (max-min+1)) + min);

    return value;
}

var mainHeader = document.getElementById('main-header')
var main = document.querySelector('.main');

var newQuestion = function() {
    event.preventDefault();
    // button was clicked
    if (event.target.matches('.btn')) {
        var questionForm = document.querySelector('.form');
        questionForm.remove();
        var targetEl = event.target;
        //get the element's task id
    loadQuestion();
    }
    
}

var loadQuestion = function () {

    mainHeader.innerHTML = quizQuestions[counter];

    var formItemEl = document.createElement('form');
    formItemEl.className = 'form';
    var randomQuestion = testAnswers[randomNumber(0,2)];
        
    for (i=0; i<randomQuestion.length; i++) {
        var answers = randomQuestion[i]
        var answerBtn = document.createElement('button');
        answerBtn.className = 'btn answer-btn';
        answerBtn.type = 'submit';
        answerBtn.value = 'answer';
        answerBtn.innerHTML = answers;
        formItemEl.appendChild(answerBtn);
    }

    main.appendChild(formItemEl)
    counter++  
}

var startButton = document.querySelector('#start-btn')
startButton.addEventListener('click', startTimer)
main.addEventListener('click', newQuestion)

