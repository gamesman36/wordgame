let timer;
let secondsLeft = 60;
let formattedTime;
let scrambleText = "";
let pickedWord = "";
let guess = "";
let answerStatus = "";

const app = document.getElementById("app");
const input = document.getElementById("input");

const words = ["empire", "table", "circular", "possible", "ballroom"];