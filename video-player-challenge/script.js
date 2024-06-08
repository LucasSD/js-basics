// Element Selectors
const video = document.getElementById("video");
const playBtn = document.getElementById('play');
const playBtnIcon = document.querySelector('#play i');
const stopBtn = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById("timestamp");

// Event Listeners
playBtn.addEventListener("click", togglePlayPause);
stopBtn.addEventListener("click", stopVideo);
video.addEventListener('timeupdate', updateProgress);
video.addEventListener("click", togglePlayPause)
progress.addEventListener("input", setProgress);

// Functions
function togglePlayPause() {
    if (video.paused || video.ended) {
        playVideo();
    } else {
        pauseVideo();
    }
}

function playVideo() {
    video.play();
    updatePlayButtonIcon(true);
}

function pauseVideo() {
    video.pause();
    updatePlayButtonIcon(false);
}

function stopVideo() {
    video.pause();
    video.currentTime = 0;
    updatePlayButtonIcon(false);
}

function updatePlayButtonIcon(isPlaying) {
    if (isPlaying) {
        playBtnIcon.classList.remove("fa-play");
        playBtnIcon.classList.add("fa-pause");
    } else {
        playBtnIcon.classList.remove("fa-pause");
        playBtnIcon.classList.add("fa-play");
    }
}

function setProgress(e) {
    const setPercent = this.value;
    const duration = video.duration;
    video.currentTime = (setPercent / 100) * duration;
}

function updateProgress() {
    const { duration, currentTime } = video;
    progress.value = (currentTime / duration) * 100;
    timestamp.textContent = formatTime(currentTime);
}

function formatTime(seconds) {
    const min = Math.floor(seconds / 60).toString().padStart(2, '0');
    const sec = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${min}:${sec}`;
}
