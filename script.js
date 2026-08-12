// Simple Countdown Timer
let time = 14 * 60 + 59;
setInterval(() => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    document.getElementById('timer').innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    if (time > 0) time--;
}, 1000);
