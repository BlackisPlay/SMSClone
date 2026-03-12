let chatSelector = document.getElementById("chatSelector");
let clickIndicator = document.getElementById("clickIndicator");
let backgroundImage = document.getElementById("intro");
let fullscreenButton = document.getElementById("goFullscreen");
let statsHider = document.getElementById("statsHider");
let goBack = document.getElementById("goBack");
let goBack2 = document.getElementById("goBack2");
let validTicket = document.getElementById("validTicket");

function updateTicketTime() {

    const now = new Date();

    // start time = 5 minutes ago
    const start = new Date(now.getTime() - 5 * 60 * 1000);

    // end time = 1 hour after start
    const end = new Date(start.getTime() + 60 * 60 * 1000);

    const day = String(start.getDate()).padStart(2,'0');
    const month = String(start.getMonth() + 1).padStart(2,'0');
    const year = start.getFullYear();

    const startH = String(start.getHours()).padStart(2,'0');
    const startM = String(start.getMinutes()).padStart(2,'0');

    const endH = String(end.getHours()).padStart(2,'0');
    const endM = String(end.getMinutes()).padStart(2,'0');

    document.getElementById("validTicket").innerHTML = `
        DPMK,&nbsp;a.s.<br>
        SMS&nbsp;prestupny&nbsp;CL&nbsp;1.50&nbsp;EUR.<br>
        Platnost&nbsp;od&nbsp;<span class="time">${day}.${month}.${year}&nbsp; 
        ${startH}:${startM}</span>&nbsp;do<br>
        <span class="time">${endH}:${endM}</span>&nbsp;hod. <br>
        dQhZwowF
    `;
}

updateTicketTime();

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
        goBack2.style.display = "block";
        intro.src = "chat.jpg";
        validTicket.style.opacity = 1;
    }, 200);
});

goBack.addEventListener("click", () => {
    setTimeout(() => {
        statsHider.style.backgroundColor = "#1f1e23";
        fullscreenButton.style.display = "block";
        goBack.style.display = "none";
        goBack2.style.display = "none";
        clickIndicator.style.width = "10%";
        intro.src = "intro.jpg";
        validTicket.style.opacity = 0;
    }, 50);
});

goBack2.addEventListener("click", () => {
    setTimeout(() => {
        statsHider.style.backgroundColor = "#1f1e23";
        fullscreenButton.style.display = "block";
        goBack.style.display = "none";
        goBack2.style.display = "none";
        clickIndicator.style.width = "10%";
        intro.src = "intro.jpg";
        validTicket.style.opacity = 0;
    }, 50);
});

