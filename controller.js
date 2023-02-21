// API call to find a synonym corresponding to user input
async function findSynonym() {
    if(gameStarted) return;
    url = `https://api.datamuse.com/words?rel_syn=${origWord}`;
    result = await axios.get(url);
    data = result.data;
    if (data.length == 0) {
        alert("Nothing found.");
        return;
    }

    // List all possible synonyms
    for (x of data) words.push(x.word);

    pickedWord = pickWord();
    scrambler();
    setTimer();
    gameStarted = true;
}

function pickWord() {
    // Choose random synonym from list
    num = Math.floor(Math.random() * words.length);

    return words[num];
}

// Fischer-Yates scrambler
function scrambleString(str) {
    let arr = str.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
}

function scrambler() {
    scrambleText = scrambleString(pickedWord);
    unspaced = pickedWord.replace(/\s/g, "");
    spaced = scrambleText.replace(/\s/g, "[space]");

    // Ensure that the word is scrambled properly
    if (scrambleText === pickedWord) scrambler();
}

function checkGuess() {
    if(!gameStarted) return;
    if (guess === unspaced) {
        alert("Correct!");
        clearInterval(timer);
        location.reload();
    }
    else alert("Incorrect!");
}


// Convert number of seconds to HH:MM:SS
formatTime(secondsLeft);
function formatTime(secondsLeft) {
    let hours = Math.floor(secondsLeft / 60 / 60);
    let minutes = Math.floor(secondsLeft / 60) - (hours * 60);
    let seconds = secondsLeft % 60;
    formattedHours = hours.toString().padStart(2, '0');
    formattedMinutes = minutes.toString().padStart(2, '0');
    formattedSeconds = seconds.toString().padStart(2, '0');
    formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function setTimer() {
    timer = setInterval(countdown, 1000);
}

function countdown() {
    secondsLeft--;
    formatTime(secondsLeft);
    updateAppView();

    // Game over condition
    if (secondsLeft == 0) {
        clearInterval(timer);
        alert(`Time is up! The word was ${pickedWord}.`);
        location.reload();
    }
}