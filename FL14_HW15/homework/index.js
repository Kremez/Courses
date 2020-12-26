/* START TASK 1: Your code goes here */

window.onload = function () {
    const first = 0;
    const second = 3;
    const third = 6;
    const last = 9;

    for (let i = first; i < second; i++) {
        document.getElementById('task1').innerHTML += '<div class="block first">Cell</div>';
    }
    for (let i = second; i < third; i++) {
        document.getElementById('task1').innerHTML += '<div class="block second">Cell</div>';
    }
    for (let i = third; i < last; i++) {
        document.getElementById('task1').innerHTML += '<div class="block third">Cell</div>';
    }

    let array = document.getElementsByClassName('block');
    const specialIndex = 1;
    array[specialIndex].innerHTML = 'Special Cell';
    array[specialIndex].classList.add('special');


    for (let i = 0; i < array.length; i++) {
        document.getElementsByClassName('block')[i].style.backgroundColor = 'green';
    }

    for (let i = 0; i < array.length; i++) {
        if (i !== first || i !== second || i !== third) {
            document.getElementsByClassName('block')[i].onclick = function () {
                changeColor(i, 'yellow');
            }
        }
    }

    document.getElementsByClassName('block')[first].onclick = function () {
        firstCellChangings(first);
    }
    document.getElementsByClassName('block')[second].onclick = function () {
        firstCellChangings(second);
    }
    document.getElementsByClassName('block')[third].onclick = function () {
        firstCellChangings(third);
    }

    document.querySelector('.special').onclick = function () {
        for (let i = 0; i < array.length; i++) {
            if (document.getElementsByClassName('block')[i].style.backgroundColor === 'green') {
                changeColor(i, 'yellow');
            }
        }
    }

    function firstCellChangings(i) {
        changeColor(i, 'blue');
        if (document.getElementsByClassName('block')[i + 1].style.backgroundColor === 'green') {
            changeColor(i + 1, 'blue');
        }
        if (document.getElementsByClassName('block')[i + 2].style.backgroundColor === 'green') {
            changeColor(i + 2, 'blue');
        }
    }

    function changeColor(elementNumber, colorName) {
        document.getElementsByClassName('block')[elementNumber].style.backgroundColor = colorName;
    }
}


/* END TASK 1 */

/* START TASK 2: Your code goes here */

let submitButton = document.querySelector('.submit');
let numberInput = document.querySelector('.number');
let notificationBlock = document.querySelector('.notification');

submitButton.onclick = function () {
    let phoneNumber = numberInput.value;
    if (phoneNumber.startsWith('+380') && phoneNumber.length === 13) {
        notificationBlock.style.backgroundColor = 'green';
        notificationBlock.style.display = 'block';
        notificationBlock.innerHTML = 'Data was successfully sent';
    } else {
        notificationBlock.style.backgroundColor = '#f5848c';
        notificationBlock.style.display = 'block';
        notificationBlock.innerHTML = 'Type number does not follow format +380*********';
        submitButton.disabled = true;
    }
}

/* END TASK 2 */

/* START TASK 3: Your code goes here */

let court = document.querySelector('.court');
let ball = document.querySelector('.ball');

court.onclick = function (event) {
    let courtCoords = this.getBoundingClientRect();

    let ballCoords = {
        top: event.clientY - courtCoords.top - court.clientTop - ball.clientHeight / 2,
        left: event.clientX - courtCoords.left - court.clientLeft - ball.clientWidth / 2
    }

    if (ballCoords.top < 0) {
        ballCoords.top = 0;
    }
    if (ballCoords.left < 0) {
        ballCoords.left = 0;
    }
    if (ballCoords.left + ball.clientWidth > court.clientWidth) {
        ballCoords.left = court.clientWidth - ball.clientWidth;
    }
    if (ballCoords.top + ball.clientHeight > court.clientHeight) {
        ballCoords.top = court.clientHeight - ball.clientHeight;
    }

    let scoreMessage = document.querySelector('.score-message');

    function toHide() {
        scoreMessage.style.display = 'none';
    }

    if (ballCoords.top > 137 && ballCoords.top < 152 && ballCoords.left > 12 && ballCoords.left < 27) {
        let bTeam = document.querySelector('#b');
        let count = parseInt(bTeam.innerText);
        count = count + 1;
        bTeam.innerHTML = count;
        scoreMessage.style.display = 'block';
        scoreMessage.innerHTML = 'Team B score!';
        setTimeout(toHide, 3000);
    }
    if (ballCoords.top > 137 && ballCoords.top < 152 && ballCoords.left > 530 && ballCoords.left < 545) {
        let aTeam = document.querySelector('#a');
        let count = parseInt(aTeam.innerText);
        count = count + 1;
        aTeam.innerHTML = count;
        scoreMessage.style.display = 'block';
        scoreMessage.innerHTML = 'Team A score!';
        setTimeout(toHide, 3000);
    }
    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
}
/* END TASK 3 */
