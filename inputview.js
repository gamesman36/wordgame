updateInputView();
function updateInputView(){
    inputHTML = /*html*/`
    <p>How good are you with English synonyms?</p>
    <p>Enter a word and see if you can solve the scramble!</p>
    <input type="text" oninput="origWord = this.value">
    <button onclick="findSynonym()">Find synonym</button><br />
    <input type="text" oninput="guess = this.value"> 
    <button onclick="checkGuess()">Check answer</button>
    `;
    
    input.innerHTML = inputHTML;
}
