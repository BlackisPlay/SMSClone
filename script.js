let chatSelector = document.getElementById("chatSelector");
let clickIndicator = document.getElementById("clickIndicator");
let backgroundImage = document.getElementById("intro");
let fullscreenButton = document.getElementById("goFullscreen");
let statsHider = document.getElementById("statsHider");
let goBack = document.getElementById("goBack");

function startClickedAnimation(){
    clickIndicator.style.opacity = 0.2;
    clickIndicator.style.width = "97%";
}

chatSelector.addEventListener("click", () => {
    startClickedAnimation();
    setTimeout(() => {
        statsHider.style.backgroundColor = "#1f2022";
        clickIndicator.style.opacity = 0;
        fullscreenButton.style.display = "none";
        goBack.style.display = "block";
        intro.src = "chat.jpg";
    }, 200);
});

goBack.addEventListener("click", () => {
    setTimeout(() => {
        statsHider.style.backgroundColor = "#1f1e23";
        fullscreenButton.style.display = "block";
        goBack.style.display = "none";
        clickIndicator.style.width = "10%";
        intro.src = "intro.jpg";
    }, 50);
});


