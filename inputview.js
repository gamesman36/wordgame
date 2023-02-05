updateInputView();
function updateInputView(){
    inputHTML = /*html*/ 
    `<input type="text" oninput="guess = this.value"> 
    <button onclick="checkGuess()">Check answer</button>
    <p>${answerStatus}</p>`;
    
    input.innerHTML = inputHTML;
}
