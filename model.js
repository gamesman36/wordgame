let timer;
let secondsLeft = 60;
let formattedTime;
let scrambleText = "";
let pickedWord = "";
let guess = "";
let origWord = "";
let spaces = "";
let num;
let spaced = "";
let unspaced;
let gameStarted = false;
let words = [];

const app = document.getElementById("app");
const input = document.getElementById("input");