let bars = document.getElementById("bars");
let barContainer = document.getElementById('bar-container');
let menu = document.getElementById('menu');

const mq = window.matchMedia("(max-width:600px)");
console.log(mq.matches);

mq.addEventListener("change", event => {
    if (event.matches) {
        menu.style.display = "none";
    }
    else {
        menu.style.display = "block";
    }
})

barContainer.addEventListener("click", () => {
    if (menu.style.display === "none") {
        menu.style.display = "flex";
        bars.classList.remove("fa-bars");
        bars.classList.add("fa-times");
    }
    else {
        menu.style.display = "none";
        bars.classList.remove("fa-times");
        bars.classList.add("fa-bars");
    }
}) 
