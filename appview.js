updateAppView();
function updateAppView(){
    formatTime(secondsLeft);
    appHTML = /*html*/`
    <p>${formattedTime}</p><p>${scrambleText}</p>`;
    
    app.innerHTML = appHTML;
}