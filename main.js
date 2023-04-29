const dino = document.getElementById("dino");
const cac = document.getElementById("cac");
const scoreEl = document.getElementById("score");
const reverseEl = document.getElementById("reverse");
const jumpBtn = document.getElementById("jump-btn");
const startBtn = document.getElementById("start-btn");
const gameWrapper = document.querySelector(".wrapper");
const scoreWrapper = document.querySelector(".score-wrapper");

let score = 0;
let reverse = 0;
let reverseInterval = null;

function startReverseCount() {
  let count = 3;
  reverseInterval = setInterval(function() {
    reverse--;
    reverseEl.innerHTML = `-${Math.abs(reverse)}`;
    count--;
    if (count === 0) {
      clearInterval(reverseInterval);
      reverseEl.innerHTML = '';
      animate();
      startReverseCount();
    }
  }, 1000);
}

function stopReverseCount() {
  clearInterval(reverseInterval);
}

function animate() {
  cac.style.animation = "cac-animation 1.5s linear infinite";
}

let wini = setInterval(function () {
  let winidino = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let winicac = parseInt(window.getComputedStyle(cac).getPropertyValue("left"));
  if (winicac<100 && winicac>80 && winidino>=241) {
    cac.style.animation = "none";
    cac.style.display = "none";
    clearInterval(wini);
    stopReverseCount();
    alert("GAME OVER ☠️");
  } else if (winicac < -30) {
    score++;
    scoreEl.innerHTML = score;
  } else if (winicac < 60 && winicac > 40 && winidino >= 241) {
    score += 10;
    scoreEl.innerHTML = score;
  }
}, 10);

function juming() {
    if (dino.classList != "jump") {
      dino.classList.add("jump");
      setTimeout(function () {
        dino.classList.remove("jump");
      }, 300);
  
      let winicac = parseInt(window.getComputedStyle(cac).getPropertyValue("left"));
      if (winicac < 60 && winicac > 40) {
        score += 10;
        scoreEl.innerHTML = score;
      } else {
        score++;
        scoreEl.innerHTML = score;
      }
    }
  }

function startGame() {
  startBtn.style.display = "none";
  gameWrapper.style.display = "block";
  scoreWrapper.style.display = "block";
  jumpBtn.style.display = "block";
  reverseEl.innerHTML = `-${Math.abs(reverse)}`;
  startReverseCount();
}

startBtn.addEventListener("click", startGame);
jumpBtn.addEventListener("click", juming);