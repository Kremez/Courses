let questionSection = document.getElementById('questionSection');
let step = 0;
let totalPrize = 0;
let currentPrize = 100;
let answerClick = document.querySelector('.answer-section');
let questions = questions;

function showQuestion() {
    document.getElementById("skipButton").style.display = "block";
    document.querySelector('.question').innerHTML = questions[step]['question'];
    let answer = '';
    for (let key in questions[step]['content']) {
        answer += "<li data-variant = " + key + " class = 'anwser-variant'"
            + "> " + questions[step]['content'][key] + "</li>";
    }
    document.querySelector(".answer-section").innerHTML = answer;
    document.querySelector('.total-prize').innerHTML = "Total prize: " + totalPrize;
    document.querySelector('.current-prize').innerHTML = "Prize on current round: " + currentPrize;
    //console.log(document.querySelector('.answer-variant'));
}

function skipQuestion() {
    step++;
    showQuestion();
    document.getElementById("skipButton").disabled = true;
}


answerClick.onclick = function (event) {
    event.stopPropagation();
    event.target.classList.contains('anser-variant');

    if (event.target.dataset.variant === questions[step]['correct']) {

        totalPrize = totalPrize + currentPrize;
        currentPrize = currentPrize * 2;
        step++;
        showQuestion();

    } else if (event.target.dataset.variant !== questions[step]['correct']) {
        document.querySelector('.question-section-disabled').style.display = "none";
        document.getElementById("skipButton").style.display = "none";
        document.querySelector('.message').innerHTML = "Game over. Your prize is:" + totalPrize;

    } else if (totalPrize >= 1000000) {
        document.querySelector('.question-section-disabled').style.display = "none";
        document.getElementById("skipButton").style.display = "none";
        document.querySelector('.message').innerHTML = "Congratulations! Your won 1000000";
    } else {
        step++;
        showQuestion();
    }

} 
