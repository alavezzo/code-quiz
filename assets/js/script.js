var testQuestions = {
    one: "what is blah blah blah"
}

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

startButton.addEventListener('click', startTimer)