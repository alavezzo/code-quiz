let numberCorrect = 0
let numberIncorrect = 0
let percentCorrect = 0
let timeRemaining = ''
let finalScore = ''
let fS = ''
let user = ''

let highScores = []

let saveValues = function() {
    localStorage.setItem("Correct", JSON.stringify(numberCorrect));
    localStorage.setItem("Incorrect", JSON.stringify(numberIncorrect));
    localStorage.setItem("Percentage", JSON.stringify(percentCorrect))
};

let saveTimeRemaining = function() {
    localStorage.setItem("Time Remaining", JSON.stringify(timeRemaining))
}

let saveFinalScore = function(finalScore) {
    localStorage.setItem('Final Score', finalScore)
}
let question = {
    one: 'Commonly used data Types DO NOT Include:',
    two: 'The condition in an if/else statement is enclosed with _____.',
    three: 'Arrays in javascript can be used to store _____.',
    four: 'String values must be enclosed within ____ when being assigned to variables.',
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
let counterTwo = 0
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
        document.querySelector(".time-tag").remove();
        document.querySelector(".countdown").innerHTML = "Time Is Up";
        timeRemaining = 0
    }
    else if (counterTwo===quizQuestions.length) {
        clearInterval(x);
        document.querySelector(".countdown").innerHTML = "Quiz Complete!";
    }
    saveTimeRemaining();
    finalScore = timeRemaining;
    saveFinalScore(finalScore);
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
        timeRemaining = 0
    }
    else if (counterTwo===quizQuestions.length) {
        clearInterval(x);
        document.querySelector(".countdown").innerHTML = "Quiz Complete!";
    }
    saveTimeRemaining()
    }, 1000);
}


let randomNumber = function(min, max) {
    let value = Math.floor((Math.random() * (max-min+1)) + min);
    return value;
}

// Obsolete Next Question Button Feature

// let loadNextBtn = function() {
//     if (counter<quizQuestions.length) {
//     let formItemEl = document.querySelector('.form')
//     let btnDiv = document.querySelector('.btn-div');
//     btnDiv.remove();
//     let divItemEl = document.createElement('div');
//     divItemEl.className = 'btn-div';
//     let nextBtn = document.createElement('button');
//         nextBtn.className = 'btn next-btn';
//         nextBtn.type = 'submit';
//         nextBtn.innerHTML = 'Next Question!';
//     divItemEl.appendChild(nextBtn);
//     formItemEl.appendChild(divItemEl)
//     } 
//     else {
//         mainHeader.innerHTML = 'Your Final Score is ' + percentCorrect;
//         let btnDiv = document.querySelector('.btn-div');
//         btnDiv.remove();
//         document.querySelector('.time-tag').remove();
//     }
//     counterTwo++ 
// }

// let newQuestion = function() {
//     event.preventDefault();
//     // button was clicked
//     if (event.target.matches('.btn')) {
//         let questionForm = document.querySelector('.form');
//         questionForm.remove();
//         //get the element's task id
//         loadQuestion();
//     } 
// }

let loadQuestion = function() {
    event.preventDefault();
    let targetEl = event.target;
    if (event.target.matches('.btn')) {
        let formItemEl = document.querySelector('.form');

        if (counter<quizQuestions.length) {

            mainHeader.innerHTML = quizQuestions[counter];
            let btnDiv = document.querySelector('.btn-div');
            btnDiv.remove();
            
            // let formItemEl = document.createElement('form');
            // formItemEl.className = 'form';
            
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
        }   
        else {
            counterTwo = quizQuestions.length
            document.querySelector('.time-tag').remove()

            mainHeader.innerHTML = 'All Done!'

            let btnValue = targetEl.getAttribute('value');
            if (btnValue === 'true') {
                fS = finalScore
                let btnDiv = document.querySelector('.btn-div');
                btnDiv.remove()

                
                let pItemEl = document.createElement('div');

                pItemEl.className = "final-message"

                pItemEl.innerText = 'Your final Score is ' + fS
                formItemEl.appendChild(pItemEl)
                let labelItemEl = document.createElement('label')
                    labelItemEl.setAttribute('for', 'initials')
                    labelItemEl.innerText = 'Enter Initals'
                let inputItemEl = document.createElement('input')
                    inputItemEl.type = 'text'
                    inputItemEl.name = 'initials'
                    inputItemEl.className = 'form-input'
                let submitItemEl = document.createElement('button')
                    submitItemEl.type = 'submit'
                    submitItemEl.className = 'btn submit-btn'
                    submitItemEl.innerText = 'Submit'
                formItemEl.appendChild(labelItemEl)
                formItemEl.appendChild(inputItemEl)
                formItemEl.appendChild(submitItemEl)
            }
            if (btnValue === 'false') {
                fS = finalScore-10
                let btnDiv = document.querySelector('.btn-div');
                btnDiv.remove()

                let pItemEl = document.createElement('div');

                pItemEl.className = "final-message"

                pItemEl.innerText = 'Your final Score is ' + fS
                formItemEl.appendChild(pItemEl)
                let labelItemEl = document.createElement('label')
                    labelItemEl.setAttribute('for', 'initials')
                    labelItemEl.innerText = 'Enter Initals:'
                let inputItemEl = document.createElement('input')
                    inputItemEl.type = 'text'
                    inputItemEl.name = 'initials'
                    inputItemEl.className = 'form-input'
                let submitItemEl = document.createElement('button')
                    submitItemEl.type = 'submit'
                    submitItemEl.className = 'btn submit-btn'
                    submitItemEl.innerText = 'Submit'
                formItemEl.appendChild(labelItemEl)
                formItemEl.appendChild(inputItemEl)
                formItemEl.appendChild(submitItemEl)
            }
        }
        retrieveValue();
        counter++
    }
}
let retrieveValue = function () {
    event.preventDefault();
    let targetEl = event.target;
    form = document.querySelector('.form')
    if (event.target.matches('.answer-btn')) {
        //remove feedback div
        document.querySelector('.feedback').remove()
        let fbDiv = document.createElement('div')
        fbDiv.className = 'feedback'
        //get the element's value
        let btnValue = targetEl.getAttribute('value');
        if (btnValue === 'true') {
            let feedback = document.createElement('h2');
            feedback.className = 'feedback-text';
            feedback.innerText = 'Correct'
            fbDiv.appendChild(feedback) 
            form.appendChild(fbDiv);
            numberCorrect++
        }
        else {
            timerMinusTen();
            let feedback = document.createElement('h2');
            feedback.className = 'feedback-text';
            feedback.innerText = 'Incorrect';
            fbDiv.appendChild(feedback) 
            form.appendChild(fbDiv);
            numberIncorrect++
        }
        percentCorrect = (((numberCorrect/(numberCorrect + numberIncorrect))*100) + '%')
        saveValues();
    }
}
let loadHighScores = function() {
    if (JSON.parse(localStorage.getItem('High Scores'))!==null){
    highScores = JSON.parse(localStorage.getItem('High Scores'));
    console.log(highScores)
    }
    // for (i=0; i < highScores.length; i++) {
    //     var yDataObj = {
    //        name: highScores[i].initials,
    //        type: highScores[i].score,
    //        id: i
    //    }
    //    console.log(yDataObj);
    // }
   
}

let highScore = function(){
    event.preventDefault();
    let targetEl = event.target;
    sortScores = [];
    form = document.querySelector('.form')
    if (targetEl.matches('.submit-btn')){
        user = document.querySelector('.form-input').value;
        let highScoreObj = {
            initials: user,
            score: fS
        }
        if (highScores.length===0) {
            sortScores.push(highScoreObj);
            localStorage.setItem('High Scores', JSON.stringify(sortScores))
            }
        else {
            // for (i=0; i<highScores.length; i++) {
            //         if (highScoreObj.score <= highScores[i].score) {
            //             sortScores.push(highScores[i])
            //         }
            //         else {
            //             sortScores.push(highScoreObj) 
            //             sortScores.push()
            //         }
            // }
            if (highScoreObj.score<=highScores[(highScores.length-1)].score) {
                for (i=0; i<highScores.length; i++) {
                sortScores.push(highScores[i]);
                } 
                sortScores.push(highScoreObj)
            }
            else {
                for (i=0; i<highScores.length; i++) {
                    if (highScoreObj.score < highScores[i].score) {
                        sortScores.push(highScores[i])
                     }
                    else {
                        sortScores.push(highScoreObj)
                            while (i<highScores.length){
                            sortScores.push(highScores[i])
                            i++
                            }
                    }
                }
            }
        if (sortScores.length > 5) {
            sortScores.pop();
        };
        localStorage.setItem('High Scores', JSON.stringify(sortScores));
    }
    document.querySelector('.form').remove();
    document.querySelector('.high-scores').remove();
    document.querySelector('.timer').remove();
    mainHeader.innerHTML = 'High Scores';
    let listDivEl = document.createElement('div')
    let listEl = document.createElement('ul')
    for (i=0;i<sortScores.length; i++) {
        let listItemEl = document.createElement('li')
        listItemEl.innerHTML = (i+1) + '. ' + sortScores[i].initials + ': ' + sortScores[i].score
        listEl.appendChild(listItemEl)
}


listDivEl.appendChild(listEl)
main.appendChild(listDivEl)
}
}

let takeMeToTheHighScorePage = function () {
    event.preventDefault();
    document.querySelector('.form').remove();
    document.querySelector('.high-scores').remove();
    document.querySelector('.timer').remove();
    mainHeader.innerHTML = 'High Scores';
    let listDivEl = document.createElement('div')
    let listEl = document.createElement('ul')
    for (i=0;i<highScores.length; i++) {
        let listItemEl = document.createElement('li')
        listItemEl.innerHTML = (i+1) + '. ' + highScores[i].initials + ': ' + highScores[i].score
        listEl.appendChild(listItemEl)
}


listDivEl.appendChild(listEl)
main.appendChild(listDivEl)
}

let noFeedback = function() {
    if (event.target.matches('.btn')) {
        document.querySelector('.feedback-text').innerHTML = ''
    }
}

loadHighScores();
let startButton = document.querySelector('#start-btn')
let highScoreButton = document.querySelector('.high-score-anchor')
highScoreButton.addEventListener('click', takeMeToTheHighScorePage)
startButton.addEventListener('click', startTimer)
// main.addEventListener('click', newQuestion)
main.addEventListener('mousedown', noFeedback)
main.addEventListener('click', loadQuestion)
main.addEventListener('click', highScore)
