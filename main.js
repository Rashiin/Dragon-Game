const dino = document.getElementById("dino");
const cac = document.getElementById("cac");

let wini = setInterval(function () {
    let winidino = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let winicac = parseInt(window.getComputedStyle(cac).getPropertyValue("left"));
    if (winicac<100 && winicac>80 && winidino>=241) {
        cac.style.animation = "none";
        cac.style.display = "none";
        alert("GAME OVER ☠️");
    }
}, 10);
function juming() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");
        setTimeout(function () {
            dino.classList.remove("jump");
        }, 300);
    }
}
document.addEventListener("keydown", function (event) {
    juming();
});
