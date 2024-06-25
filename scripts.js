document.getElementById('envelope').addEventListener('click', function() {
    this.src = 'assets/envelope-open.png';
    setTimeout(() => {
        document.querySelector('.initial').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        launchConfetti();
    }, 1000);
});

function showLetter() {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('letter-content').style.display = 'block';
    launchConfetti();
}

function showJar() {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('letter-content').style.display = 'none';
    document.getElementById('jar-content').style.display = 'block';
    launchConfetti();
}

function