let isPaused = false; // Variable to track if speech is paused

function textSpeak() {
    var text = document.getElementById("txt").value;
    responsiveVoice.speak(text);
}

function pauseOrResumeSpeech() {
    if (!isPaused) {
        responsiveVoice.pause();
        isPaused = true;
        document.getElementById("pauseBtn").value = "▶"; // Change button text to "Resume"
    } else {
        responsiveVoice.resume();
        isPaused = false;
        document.getElementById("pauseBtn").value = "▐▐"; // Change button text back to "Pause"
    }
}
