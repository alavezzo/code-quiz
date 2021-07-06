var testQuestions = {
    one: "what is blah blah blah"
}

questionOne = ['right', 'wrong','wrong','wrong'];
questionTwo = ['right', 'wrong','wrong','wrong'];
questionThree = ['right', 'wrong','wrong','wrong'];
testAnswers = [questionOne, questionTwo, questionThree]

var second = 1000

var startButton = document.querySelector('#start-btn')

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

var initializeTest = function() {
    var main = document.querySelector('.main');
    var mainBody = document.querySelector('.paragraph-button')
    mainBody.remove();
    mainHeader.innerHTML = "This is the first Question"

    var formItemEl = document.createElement('form');

    var randomQuestion = testAnswers[randomNumber(0,2)];
        
    for (i=0; i<randomQuestion.length; i++) {
        var answers = randomQuestion[i]
        var answerBtn = document.createElement('button');
        answerBtn.type = 'submit';
        answerBtn.value = 'answer';
        answerBtn.innerHTML = answers;
        formItemEl.appendChild(answerBtn);
    }

    main.appendChild(formItemEl)
}
startButton.addEventListener('click', startTimer)
startButton.addEventListener('click', initializeTest)