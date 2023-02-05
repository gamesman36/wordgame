function scrambleString(str) {
    let arr = str.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
}

formatTime(secondsLeft);
function formatTime(secondsLeft){
    let hours = Math.floor(secondsLeft / 60 / 60);
    let minutes = Math.floor(secondsLeft / 60) - (hours * 60);
    let seconds = secondsLeft % 60;
    formattedHours = hours.toString().padStart(2,'0');
    formattedMinutes = minutes.toString().padStart(2,'0');
    formattedSeconds = seconds.toString().padStart(2,'0');
    formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function setTimer(){
    timer = setInterval(countdown,1000);
}

function countdown(){
    secondsLeft--;
    formatTime(secondsLeft);
    updateAppView();
    if (secondsLeft == 0) {
        clearInterval(timer);
        alert("Game over!");
    }
}

function checkGuess(){
    if(guess === pickedWord) {
        answerStatus = "<h2>Correct</h2>";
        clearInterval(timer);
    }
    else answerStatus = "<h2>Incorrect</h2>";
    updateInputView();
}

pickedWord = pickWord();
scrambleText = scrambleString(pickedWord);
setTimer();
function pickWord(){
    num = Math.floor(Math.random() * words.length);
    return words[num];
}