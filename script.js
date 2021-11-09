'use strict';

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const confDate = '12/10/2021';
const countDown = new Date(confDate).getTime();

const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDown - now;

    document.getElementById("days").innerText = Math.floor(distance / (day));
    document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour));
    document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));
    document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

    if (distance < 0) {
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";

        clearInterval(x);
    }
}, 0)