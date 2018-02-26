
/*===============global variables========================*/
var timeRemain = 30;
//var timeCounter;
var newTime = 0;
var qRightCount = 0;
var qWrongCount = 0;

/*===============start timer==============================*/
/*when user answers the first question, the clock will start counting down from 30*/

function startTimer() {
    
    intervalId = setInterval(function () {
        timeRemain--;
        span = document.getElementById("counter").innerHTML = timeRemain;
        console.log(timeRemain);
    }, 1000);

}

function checkAnswer() {
    if (document.querySelector('input[name="first"]:checked').value = "3") {
        qRightCount++;
        console.log(qRightCount);
    } else qWrongCount++;
        console.log(qWrongCount);
    }

    $(".radio1").click(function () {
        startTimer();
        checkAnswer();
    });

    function stopTimer() {
        if (timeRemain == 0) {
            clearInterval(intervalId);
            span = document.getElementById("counter").innerHTML = timeRemain;
            alert("clock stopped");
        }
        else if (timeRemain !== 0) {
            clearInterval(intervalId);
            span = document.getElementById("counter").innerHTML = timeRemain;
            console.log(timeRemain);
        }


    }

    $(".radio10").click(function () {
        stopTimer();
        checkAnswer();
    });
