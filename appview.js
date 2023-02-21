updateAppView();
function updateAppView(){
    formatTime(secondsLeft);
    appHTML = /*html*/`
    <p>${formattedTime}</p><p>${spaced}</p>`;
    
    app.innerHTML = appHTML;
}