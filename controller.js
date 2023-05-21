// API call to find a synonym corresponding to user input
async function findSynonym() {
    if (gameStarted) return;
    url = `https://api.datamuse.com/words?rel_syn=${origWord}`;
    result = await axios.get(url);
    data = result.data;
    if (data.length === 0) {
        alert("Nothing found.");
        return;
    }

    // List all possible synonyms without spaces
    words = data
        .filter((x) => !x.word.includes(" "))
        .map((x) => x.word);

    if (words.length === 0) {
        alert("No suitable synonyms found.");
        return;
    }

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

// Fisher-Yates scrambler
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

    // Ensure that the word is scrambled properly
    if (scrambleText === pickedWord) scrambler();
}

function checkGuess() {
    if(!gameStarted) return;

    // Case-insensitive handling
    if (guess.toLowerCase() === pickedWord) {
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