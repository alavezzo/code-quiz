let numberCorrect = 0
let numberIncorrect = 0
let percentCorrect = 0
let timeRemaining = ''

let saveValues = function() {
    localStorage.setItem("Correct", JSON.stringify(numberCorrect));
    localStorage.setItem("Incorrect", JSON.stringify(numberIncorrect));
    localStorage.setItem("Percentage", JSON.stringify(percentCorrect))
};

let saveTimeRemaining = function() {
    localStorage.setItem("Time Remaining", JSON.stringify(timeRemaining))
}
let question = {
    one: 'Commonly used data Types DO NOT Include:',
    two: 'The condition in an if/else statement is enclosed with _____.',
    three: 'Arrays in javascript can be used to store _____.',
    four: 'String values must be enclosed within ____ when being assigned to letiables.',
    five: 'A very useful tool during development and debugging for printing content to the debugger is ______. '
};

let answerSetOne = {
    answers: ['booleans', 'numbers', 'alerts','strings'],
    answerValues: [false, false, true, false]
};

let answerSetTwo = {
    answers: ['quotes', 'parantheses', 'curly brackets','square bracket'],
    answerValues: [false, true, false, false]
};
    
let answerSetThree = {
    answers: ['numbers and strings','other arrays', 'booleans','all of the above'],
    answerValues: [false, false, false, true]
};

let answerSetFour = {
    answers: ['commas','curly brackets', 'quotes','parantheses'],
    answerValues: [false, false, true, false]
};

let answerSetFive = {
    answers: ['Javascript','terminal.bash', 'for loops','console.log'],
    answerValues: [false, false, false, true]
};
let quizQuestions = [question.one, question.two, question.three, question.four, question.five]
let testAnswers = [answerSetOne.answers, answerSetTwo.answers, answerSetThree.answers, answerSetFour.answers, answerSetFive.answers]
let testAnswerValues = [answerSetOne.answerValues, answerSetTwo.answerValues, answerSetThree.answerValues, answerSetFour.answerValues, answerSetFive.answerValues]

let counter = 0
let second = 1000

let mainHeader = document.getElementById('main-header')
let main = document.querySelector('.main');

setCountDown = {
    date: '',
    getDate: function() {
        this.date = new Date().getTime() + (75*second);
    }
}

let startTimer = function () {
    setCountDown.getDate();
    countDownDate = setCountDown.date;

    // Update the count down every 1 second
    let x = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let seconds = Math.floor((distance / 1000));

    // Display the result in the element with id="demo"
    document.querySelector('.countdown').innerHTML = seconds
    
    timeRemaining = seconds
    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".countdown").innerHTML = "Time Is Up";
        timeRemaining = 0
    }
    saveTimeRemaining();
    }, 1000);
    
} 

let timerMinusTen = function() {
    setCountDown.date = setCountDown.date - (10*second);
    countDownDate = setCountDown.date;

    // Update the count down every 1 second
    let x = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let seconds = Math.floor((distance / 1000));

    // Display the result in the element with id="demo"
    document.querySelector('.countdown').innerHTML = seconds

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".countdown").innerHTML = "Time Is Up";
    }
    }, 1000);
}
let randomNumber = function(min, max) {
    let value = Math.floor((Math.random() * (max-min+1)) + min);

    return value;
}

let loadNextBtn = function() {
    let formItemEl = document.querySelector('.form')
    let btnDiv = document.querySelector('.btn-div');
    btnDiv.remove();
    let divItemEl = document.createElement('div');
    divItemEl.className = 'btn-div';
    let nextBtn = document.createElement('button');
        nextBtn.className = 'btn next-btn';
        nextBtn.type = 'submit';
        nextBtn.innerHTML = 'Next Question!';
    divItemEl.appendChild(nextBtn);
    formItemEl.appendChild(divItemEl)
}

let newQuestion = function() {
    event.preventDefault();
    // button was clicked
    if (event.target.matches('.next-btn')) {
        let questionForm = document.querySelector('.form');
        questionForm.remove();
        //get the element's task id
        loadQuestion();
    } 
}

let loadQuestion = function() {

    if (counter<quizQuestions.length) {

        mainHeader.innerHTML = quizQuestions[counter];

        let formItemEl = document.createElement('form');
        formItemEl.className = 'form';
        let divItemEl = document.createElement('div');
        divItemEl.className = "btn-div"
        let nextQuestion = testAnswers[counter];
        let answerValues = testAnswerValues[counter]
        for (i=0; i<nextQuestion.length; i++) {
            let order = (1 + i);
            let answers = nextQuestion[i];
            let values = answerValues[i];
            let answerBtn = document.createElement('button');
            answerBtn.className = 'btn answer-btn';
            answerBtn.type = 'submit';
            answerBtn.value = values;
            answerBtn.innerHTML = order + '. ' + answers;
            divItemEl.appendChild(answerBtn);
        }
        formItemEl.appendChild(divItemEl)
    counter++  
    main.appendChild(formItemEl)
}   
}
let retrieveValue = function () {
    event.preventDefault();
    let targetEl = event.target;
    form = document.querySelector('.form')
    if (event.target.matches('.answer-btn')) {
        //get the element's value
        let btnValue = targetEl.getAttribute('value');
        console.log(btnValue);
        if (btnValue === 'true') {
            let feedback = document.createElement('h2');
            feedback.className = 'feedback';
            feedback.innerText = 'Correct'
            form.appendChild(feedback) 
            numberCorrect++
        }
        else {
            let feedback = document.createElement('h2');
            feedback.className = 'feedback';
            feedback.innerText = 'Incorrect';
            form.appendChild(feedback);
            timerMinusTen();
            numberIncorrect++
        }
        percentCorrect = (numberCorrect/(numberCorrect + numberIncorrect))
        
        saveValues();
        loadNextBtn();
    }
}

let startButton = document.querySelector('#start-btn')
startButton.addEventListener('click', startTimer)
main.addEventListener('click', newQuestion)
main.addEventListener('click', retrieveValue)