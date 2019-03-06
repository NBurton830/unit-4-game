$(document).ready(function() {
var winsCount = 0;
var lossesCount = 0;
var totalScore = 0;

var computerPick = Math.floor(Math.random() * 100) + 2;
var blackGem = Math.floor(Math.random() * 10) + 1;
var redGem = Math.floor(Math.random() * 10) + 1;
var greenGem = Math.floor(Math.random() * 10) + 1;
var blueGem = Math.floor(Math.random() * 10) + 1;
var randomNumber = $(".random-number");
var totalScoreNumber = $(".total-score-number");
var winsCountDisplay = $(".wins");
var lossesCountDisplay = $(".losses");

updateTotalScore()
updateTarget()
updateLosses()
updateWins()
$(".black-gem").click(function(){
    totalScore += blackGem;
    updateTotalScore()
    if (totalScore == computerPick){
        winsCount++;
        updateWins()
        reset();
    }
    else if (totalScore > computerPick){
        lossesCount++;
        updateLosses()
        reset();
        console.log('too high')
    }
    else {
        return;
    }
    updateTotalScore()
    updateTarget();
});

$(".red-gem").click(function(){
    totalScore += redGem;
    updateTotalScore()
    if (totalScore == computerPick){
        winsCount++;
        updateWins()
        reset();
    }
    else if (totalScore > computerPick){
        lossesCount++;
        updateLosses()
        reset();
        console.log('too high')
    }
    else {
        return;
    }
    updateTotalScore()
    updateTarget();
});

$(".green-gem").click(function(){
    totalScore += greenGem;
    updateTotalScore()
    if (totalScore == computerPick){
        winsCount++;
        updateWins()
        reset();
    }
    else if (totalScore > computerPick){
        lossesCount++;
        updateLosses()
        reset();
        console.log('too high')
    }
    else {
        return;
    }
    updateTotalScore()
    updateTarget();
});

$(".blue-gem").click(function(){
    totalScore += blueGem;
    updateTotalScore()
    if (totalScore == computerPick){
        winsCount++;
        updateWins()
        reset();
    }
    else if (totalScore > computerPick){
        lossesCount++;
        updateLosses()
        reset();
        console.log('too high')
    }
    else {
        return;
    }
    updateTotalScore()
    updateTarget();
});
// updateLosses()
// updateWins()
// updateTarget()


function reset() {
    totalScore = 0;
    computerPick = Math.floor(Math.random() * 100) + 2;
    blackGem = Math.floor(Math.random() * 10) + 1;
    redGem = Math.floor(Math.random() * 10) + 1;
    greenGem = Math.floor(Math.random() * 10) + 1;
    blueGem = Math.floor(Math.random() * 10) + 1;
}

function updateTotalScore() {
    totalScoreNumber.text(totalScore);
}

function updateTarget() {
    randomNumber.text(computerPick)
}
function updateWins() {
    winsCountDisplay.text("Wins" + "  " + winsCount)
}
function updateLosses() {
    lossesCountDisplay.text("Losses" + "  " + lossesCount)
}
});
