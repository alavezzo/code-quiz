
var question = {
    one: 'Commonly used data Types DO NOT Include:',
    two: 'The condition in an if/else statement is enclosed with _____.',
    three: 'Arrays in javascript can be used to store _____.',
    four: 'String values must be enclosed within ____ when being assigned to variables.',
    five: 'A very useful tool during development and debugging for printing content to the debugger is ______. '
};

var answerSetOne = {
    answers: ['booleans', 'numbers', 'alerts','strings'],
    answerValues: [false, false, true, false]
};

var answerSetTwo = {
    answers: ['quotes', 'parantheses', 'curly brackets','square bracket'],
    answerValues: [false, true, false, false]
};

var answerSetThree = {
    answers: ['numbers and strings','other arrays', 'booleans','all of the above'],
    answerValues: [false, false, false, true]
};

var answerSetFour = {
    answers: ['commas','curly brackets', 'quotes','parantheses'],
    answerValues: [false, false, true, false]
};

var answerSetFive = {
    answers: ['Javascript','terminal.bash', 'for loops','console.log'],
    answerValues: [false, false, false, true]
};
var quizQuestions = [question.one, question.two, question.three, question.four, question.five]
var testAnswers = [answerSetOne.answers, answerSetTwo.answers, answerSetThree.answers, answerSetFour.answers, answerSetFive.answers]
var testAnswerValues = [answerSetOne.answerValues, answerSetTwo.answerValues, answerSetThree.answerValues, answerSetFour.answerValues, answerSetFive.answerValues]

var counter = 0
var second = 1000

var mainHeader = document.getElementById('main-header')
var main = document.querySelector('.main');

setCountDown = {
    date: '',
    getDate: function() {
        this.date = new Date().getTime() + (75*second);
    }
}

var startTimer = function () {
    setCountDown.getDate();
    countDownDate = setCountDown.date;

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

var timerMinusTen = function() {
    setCountDown.date = setCountDown.date - (10*second);
    countDownDate = setCountDown.date;

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

    if (counter<quizQuestions.length) {

        mainHeader.innerHTML = quizQuestions[counter];

        var formItemEl = document.createElement('form');
        formItemEl.className = 'form';
        var nextQuestion = testAnswers[counter];
        var answerValues = testAnswerValues[counter]
        for (i=0; i<nextQuestion.length; i++) {
            var order = (1 + i);
            var answers = nextQuestion[i];
            var values = answerValues[i];
            var answerBtn = document.createElement('button');
            answerBtn.className = 'btn answer-btn';
            answerBtn.type = 'submit';
            answerBtn.value = values;
            answerBtn.innerHTML = order + '. ' + answers;
            formItemEl.appendChild(answerBtn);
        }
    counter++  
    main.appendChild(formItemEl)
}   
}
var retrieveValue = function () {
    event.preventDefault();
    var targetEl = event.target;
    form = document.querySelector('.form')
    // edit button was clicked
    if (event.target.matches('.answer-btn')) {
        //get the element's value
        var btnValue = targetEl.getAttribute('value');
        console.log(btnValue);
        if (btnValue === 'true') {
            var feedback = document.createElement('h2');
            feedback.className = 'feedback';
            feedback.innerText = 'Correct'
            form.appendChild(feedback)
        }
        else {
            var feedback = document.createElement('h2');
            feedback.className = 'feedback';
            feedback.innerText = 'Incorrect';
            form.appendChild(feedback);
            timerMinusTen();
        }
    }
}
var startButton = document.querySelector('#start-btn')
startButton.addEventListener('click', startTimer)
main.addEventListener('click', newQuestion)
main.addEventListener('click', retrieveValue)
