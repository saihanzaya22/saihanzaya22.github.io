// Countdown Timer
const countdownDate = new Date("June 28, 2024 00:00:00").getTime();

const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("timer").innerHTML = "Happy Birthday!";
    }
}, 1000);

// Password Protection
function checkPassword() {
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (password === "Khulan") {
        document.getElementById("password-protection").style.display = "none";
        document.getElementById("content").style.display = "block";
        launchConfetti();
    } else {
        errorMessage.textContent = "Incorrect password. Please try again.";
    }
}

// Confetti Effect
function launchConfetti() {
    const end = Date.now() + 5 * 1000;

    const colors = ['#FF66B2', '#FF99CC', '#FFC0CB', '#FFDDE2']; // Different shades of pink

    (function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}