$(document).ready(function() {

// declare variables to be used
var answers = ["Remus Lupin","Cloak of Invisibility", "Hippogriff", "Dentists", "Prongs"];

var correctAnswers = 0;
var incorrectAnswers = 0;
var time = 5;
var intervalId;
var clockRunning = false;

// set the timer

$("#start-button").on("click", function() {
   window.location.replace("trivia.html");
   
})

function timer() {
    if(!clockRunning) {
    time--;
    $("#time").html(time);
    if(time == 0) {
        alert("Time's up!");
        stop();
    }
}
}

intervalId = setInterval(timer, 1000);

function stop() {
    clearInterval(intervalId);
}

// when the user clicks "Done", check the user input against the answers
$('#done').on("click", function() {

    var answer1 = $("input[name='marauders']:checked").val();
    console.log(answer1);
    var answer2 = $("input[name='gift']:checked").val();
    console.log(answer2);
    var answer3 = $("input[name='creature']:checked").val();
    var answer4 = $("input[name='profession']:checked").val();
    var answer5 = $("input[name='nickname']:checked").val();

    // empty questions div
    $('#container').empty();

    $('#container').html('<div id="results"><h1>All Done!</h1><br><br><br><p>Correct Answers: <span id="number-correct"></span></p><br><p>Incorrect Answers: <span id="number-incorrect"></span></p><br><br><p id="restart">Start Over?</p></div>');

    if(answer1 == answers[0]) {
        correctAnswers++;
        $("#number-correct").text(correctAnswers);
    }
    else {
        incorrectAnswers++;
        $("#number-incorrect").text(incorrectAnswers);        
    }

    if(answer2 == answers[1]) {
        correctAnswers++;
        $("#number-correct").text(correctAnswers);
    }
    else {
        incorrectAnswers++;
        $("#number-incorrect").text(incorrectAnswers);
        console.log(answer2);
    }

    if(answer3 == answers[2]) {
        correctAnswers++;
        $("#number-correct").text(correctAnswers);
    }
    else {
        incorrectAnswers++;
        $("#number-incorrect").text(incorrectAnswers);
        console.log(answer3);
    }

    if(answer4 == answers[3]) {
        correctAnswers++;
        $("#number-correct").text(correctAnswers);
    }
    else {
        incorrectAnswers++;
        $("#number-incorrect").text(incorrectAnswers);
        console.log(answer4);
    }

    if(answer5 == answers[4]) {
        correctAnswers++;
        $("#number-correct").text(correctAnswers);
    }
    else {
        incorrectAnswers++;
        $("#number-incorrect").text(incorrectAnswers);
        console.log(answer5);
    }    

    $("#restart").on("click", function() {
        window.location.replace("start.html");
    });

});

});
