const timer = document.getElementById("timer");

let time = 1000;
let minutes = 60;
let seconds = time % minutes;
function countDownTimer() {
    seconds--;
    if (seconds === 0) {
        minutes--;
    }
    if(minutes && seconds === 0){
        clearInterval(intervalTime)
    }
    timer.textContent = `${minutes} : ${seconds}`;
}

const intervalTime = setInterval(countDownTimer, 1000);