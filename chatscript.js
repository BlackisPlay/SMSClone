let goBack = document.getElementById("goBack");
goBack.addEventListener("click", () => {
    setTimeout(() => {
        window.location.href = "index.html"
    }, 200);
});