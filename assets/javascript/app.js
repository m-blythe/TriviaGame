
/*===============global variables========================*/
var timeRemain = 10;
//var timeCounter;
var newTime = 0;
var qRightCount = 0;
var qWrongCount = 0;
var rightAnswers = ["1884", "190", "Golden Retriever", "Catahoula Leopard Dog", "Grand Basset Griffon Vendeen", "Sporting"]
var answer 

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

function checkAnswer() {
    //grab all the radio buttons with the name yrFounded//
    var d = document.getElementsByName("yrFounded");
    console.log(d.length);
    //check to see which button is checked//
    for (i = 0; i < d.length; i++) {
        if (d[i].checked) {
            answer = (d[i].value);
            console.log(answer);
        }
    }
    //check selected answer against correct answer
if (answer = rightAnswers[i]) {
        qRightCount + 1;
    }
    else { qwrongCount + 1 }
    console.log("Correct Answers: "+ qRightCount);
    console.log("Wrong Answers: "+ qWrongCount);
}

$(".first").click(function () {
    startTimer();
    checkAnswer();
});

function stopTimer() {
    clearInterval(intervalId);
    span = document.getElementById("counter").innerHTML = timeRemain;
    alert("clock stopped")
}

$(".last").click(function () {
    stopTimer();
    checkAnswer();
});
