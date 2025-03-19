function updateCountdown() {
    const targetDate = new Date('2025-05-07T00:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = 
        `Còn lại ${days} ngày, ${hours} giờ, ${minutes} phút, ${seconds} giây`;

    if (timeLeft < 0) {
        document.getElementById('countdown').innerHTML = 'Đã hết thời gian!';
    }
}

// Update countdown every second
updateCountdown();
setInterval(updateCountdown, 1000);