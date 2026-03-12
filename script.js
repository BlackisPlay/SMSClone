let chatSelector = document.getElementById("chatSelector");
let clickIndicator = document.getElementById("clickIndicator");

function startClickedAnimation(){
    clickIndicator.style.opacity = 0.2;
    clickIndicator.style.width = "97%";
}

chatSelector.addEventListener("click", () => {
    startClickedAnimation();
    setTimeout(() => {
        window.location.href = "dpmkchat.html"
    }, 200);
});

