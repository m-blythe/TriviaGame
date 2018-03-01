
/*===============global variables========================*/
var timeRemain = 10;
var total = 6;
var qRightCount = 0;
var qWrongCount = 0;
var rightAnswers = ["1884", "190", "Labrador Retriever", "Catahoula Leopard Dog", "Grand Basset Griffon Vendeen", "Sporting"];

/*===============start timer==============================*/
/*when user answers the first question, the clock will start counting down from 30*/

function startTimer() {

    intervalId = setInterval(function () {
        timeRemain--;
        span = document.getElementById("counter").innerHTML = timeRemain;
        //console.log(timeRemain);

        if (timeRemain == 0) {
            stopTimer();
        }
    }, 1000);
}
//
//
$(".q1").click(function () {
    startTimer();
    var q1 = document.querySelector("input[name=question1]:checked").value;
    if (q1 == rightAnswers[0]) {
        qRightCount = qRightCount + 1;
    } else {
        qWrongCount = qWrongCount + 1;
    }
});
//
function stopTimer() {
    clearInterval(intervalId);
    span = document.getElementById("counter").innerHTML = timeRemain;
    if (qRightCount == 1){
        span = document.getElementById("rAnswers").innerHTML = "You got "+ qRightCount + " question correct!";
    } else {
        span = document.getElementById("rAnswers").innerHTML = "You got "+ qRightCount + " questions correct!";
    }
    //
    if (qWrongCount == 1){
        span = document.getElementById("wAnswers").innerHTML = "You got "+ qWrongCount + " question wrong!";
    } else {
        span = document.getElementById("wAnswers").innerHTML = "You got "+ qWrongCount + " questions wrong!";
    }
    //
    if((total-qRightCount-qWrongCount)==1){
        span = document.getElementById("nAnswers").innerHTML = "You left " + (total - qRightCount - qWrongCount) + " question unanswered";
    } else {
        span = document.getElementById("nAnswers").innerHTML = "You left " + (total - qRightCount - qWrongCount) + " questions unanswered";
    }
    //alert("clock stopped")
}
//
$(".q2").click(function () {
    var q2 = document.querySelector("input[name=question2]:checked").value;
    if (q2 == rightAnswers[1]) {
        qRightCount = qRightCount + 1;
    } else {
        qWrongCount = qWrongCount + 1;
    }
});
//
$(".q3").click(function () {
    var q3 = document.querySelector("input[name=question3]:checked").value;
    if (q3 == rightAnswers[2]) {
        qRightCount = qRightCount + 1;
    } else {
        qWrongCount = qWrongCount + 1;
    }
});
//
$(".q4").click(function () {
    var q4 = document.querySelector("input[name=question4]:checked").value;
    if (q4 == rightAnswers[3]) {
        qRightCount = qRightCount + 1;
    } else {
        qWrongCount = qWrongCount + 1;
    }
});
//
$(".q5").click(function () {
    var q5 = document.querySelector("input[name=question5]:checked").value;
    if (q5 == rightAnswers[4]) {
        qRightCount = qRightCount + 1;
    } else {
        qWrongCount = qWrongCount + 1;
    }
});
//
$(".q6").click(function () {
    stopTimer();
    var q6 = document.querySelector("input[name=question6]:checked").value;
    if (q6 == rightAnswers[5]) {
        qRightCount = qRightCount + 1;
    } else {
        qWrongCount = qWrongCount + 1;
    }
});

