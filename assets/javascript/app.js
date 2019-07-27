// declare variables
var time = 60;
var intervalId;
var clockRunning = false;
var answers = ["Remus Lupin","Cloak of Invisibility", "Hippogriff", "Dentists", "Prongs"];
var correctAnswers = 0;
var incorrectAnswers = 0;


// timer function
function timer() {
    if(!clockRunning) {
    time--;
    console.log(time);
    $("#time").html(time);
    if(time == 0) {
        alert("Time's up!");
        stop();
        gameOver();
    }
}
}
// timer stop function when time is up
function stop() {
    clearInterval(intervalId);
}

// wait for the page to load to begin the game
$(document).ready(function() {

    // keep the questions and results hidden at start of game
    $("#questions").hide();
    $("#results").hide();

// "start" will set the timer running, hide the start screen, then show the questions
$("#start-button").on("click", function() {
intervalId = setInterval(timer, 1000);
$(".start").hide();
$("#questions").show();
});

// when "done" is clicked the gameOver function is initiated and timers is stopped
$('#done').on("click", function() {
    stop();
    gameOver();
});

});

// need a variable to hold the value of each radio button selected
var selected = [];
// gameOver function hides the questions and shows the results
function gameOver() {
    $("#questions").hide();
    // get the value for each radion button and push it to the empty array
        $("input:checked").each(function() {
        selected.push($(this).val());
        console.log(selected.toLocaleString());
    });
    
        // compare radio selections to correct answers array
        for(var i = 0; i < answers.length; i++) {
            if(selected[i] === answers[i]) {
                correctAnswers++;
            }
            else {
                incorrectAnswers++;
            }
        }
    // print results to the html
        $("#number-correct").text(correctAnswers);
        $("#number-incorrect").text(incorrectAnswers);
        $("#results").show();
    }

    // restart function sets everything back to 0, hides all elements except the start page
    function restart() {
        time = 60;
        correctAnswers = 0;
        incorrectAnswers = 0;
        $("#results").hide();
        $(".start").show();
        // uncheck all radio buttons
        $("input:checked").each(function() {
            this.checked = false;
        });
    }
    // restart button resets the game
    $("#restart").on("click", function() {
        restart();
    });

    

