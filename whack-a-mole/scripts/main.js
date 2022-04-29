const newGame = document.getElementById("new-game");
const startGame = document.getElementById("start-game");
const leaderboard = document.getElementById("leaderboard");
const countdown = document.getElementById("countdown");
const scoreCount = document.getElementById("score-count");
const gameGrid = document.getElementById("game-grid");
const play = document.getElementById("play");
const moleHill = document.querySelectorAll(".grid-square");
let gameOver = false;

//RANDOM NUMBER FUNCTION

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

//ASSIGN MOLE TO RANDOM HILL

function randomMole(num) {
  moleHill[num].classList.toggle("mole");
  setTimeout(() => {
    moleHill[num].classList.toggle("mole");
  }, 800);
}

//CLEAR ALL MOLE HILLS

function clearMoles() {
  moleHill.forEach((e) => {
    e.classList.remove("mole");
  });
}

//ADD POINTS TO SCOREBOARD

gameGrid.addEventListener("click", (e) => {
  if (e.target.classList.contains("mole")) {
    scoreCount.textContent = parseInt(scoreCount.textContent) + 1;
  }
});

//GENERATE RANDOM NUMBER AND ASSIGN
function moleSet() {
  const moleInterval = setInterval(() => {
    console.log("int2");
    if (!gameOver) {
      console.log("running");
      const rand = getRandomIntInclusive(0, moleHill.length - 1);
      randomMole(rand);
    } else {
      clearMoles();
      clearInterval(moleInterval);
      return;
    }
  }, 900);
}

//COUNTDOWN TIMER

function countdownTimer() {
  let timeCount = countdown.textContent;
  console.log(timeCount);
  const counterTimer = setInterval(() => {
    console.log("int1");
    if (timeCount && !gameOver) {
      timeCount -= 1;
      countdown.textContent = timeCount;
    } else {
      gameOver = true;
      clearInterval(counterTimer);
      return;
    }
  }, 1000);

  return counterTimer;
}

//RESTART FUNCTION, RESET STATS COUNTERS AND START PROCESSES AGAIN

function restartGame() {
  countdown.textContent = "30";
  scoreCount.textContent = "0";
  moleSet();
  countdownTimer();
  console.log(gameOver);
}

/********************************
 * START A NEW GAME
 * 1 SET INTERVAL TO COUNTDOWN
 * 1 TIMEOUT TO REMOVE COUNTDOWN DIV
 * 1 TIMEOUT TO REMOVE COUNTDOWN DIV
 ********************************/

startGame.addEventListener("click", (e) => {
  console.log("clicked");
  //1 SET INTERVAL TO COUNTDOWN
  let counter = 3;
  const interval = setInterval(() => {
    play.textContent = counter;
    counter -= 1;
  }, 1000);

  //1 TIMEOUT TO REMOVE COUNTDOWN DIV
  setTimeout(() => {
    play.classList.add("hide-play");
    clearInterval(interval);
  }, 4000);

  //1 TIMEOUT TO REVEAL GAME GRID DIV
  setTimeout(() => {
    gameGrid.classList.remove("hide-grid");
  }, 4000);

  //GENERATE RANDOM NUMBER AND ASSIGN MOLE TO HILL

  moleSet();

  //COUNTDOWN TIMER

  setTimeout(() => {
    countdownTimer();
  }, 3000);
});

// BUTTON TO INITIATE NEW GAME
newGame.addEventListener("click", (e) => {
  gameOver = false;
  restartGame();
});
