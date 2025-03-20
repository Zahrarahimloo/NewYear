// تاریخ تحویل سال ۱۴۰۴ و ۱۴۰۵
const nowruz1404 = new Date('2025-03-20T12:31:30+03:30');
const nowruz1405 = new Date('2026-03-20T18:16:00+03:30');

function updateCountdown() {
    const now = new Date();
    let targetDate;

    // انتخاب تاریخ تحویل سال ۱۴۰۴ یا ۱۴۰۵
    if (now < nowruz1404) {
        targetDate = nowruz1404;
        document.getElementById('message').innerText = 'تا تحویل سال ۱۴۰۴';
    } else if (now < nowruz1405) {
        targetDate = nowruz1405;
        document.getElementById('message').innerText = 'تا تحویل سال ۱۴۰۵';
    } else {
        document.getElementById('message').innerText = 'سال نو مبارک!';
        return;
    }

    const timeDifference = targetDate - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = String(days).padStart(2, '0');
    document.getElementById('hours').innerText = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();