document.getElementById('banner').addEventListener('click', function() {
    this.style.display = 'none';
    document.getElementById('content').style.display = 'block';
    launchConfetti();
});

function showEnvelope() {
    hideAllGifts();
    document.getElementById('envelope').style.display = 'block';
    launchConfetti();
}

function showJar() {
    hideAllGifts();
    document.getElementById('jar').style.display = 'block';
    launchConfetti();
}

function hideAllGifts() {
    document.getElementById('envelope').style.display = 'none';
    document.getElementById('jar').style.display = 'none';
}

function launchConfetti() {
    const duration = 2 * 1000;
    const animationEnd = Date.now() + duration;
    const colors = ['#ff69b4', '#ffffff'];

    (function frame() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return;
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({
            particleCount,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors,
            shapes: ['heart']
        });
        confetti({
            particleCount,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors,
            shapes: ['heart']
        });

        requestAnimationFrame(frame);
    }());
}