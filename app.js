const countdown = () => {
    const countDate = new Date('Jul 01, 2024 00:00:00').getTime();
    const currentTime = new Date().getTime();
    const timeDiff = countDate - currentTime;

    // time calculations
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // calcuate difference
    const textDay = Math.floor(timeDiff / day);
    const textHour = Math.floor((timeDiff % day) / hour);
    const textMinute = Math.floor((timeDiff % hour) / minute);
    const textSecond = Math.floor((timeDiff % minute) / second);

    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;
};

setInterval(countdown, 1000);