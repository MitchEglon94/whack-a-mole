////////////////////////////////////////
///////////      MITCH      ////////////
////////////////////////////////////////

const newGame = document.getElementById("new-game");
const startGame = document.getElementById("start-game");
const leaderboard = document.getElementById("leaderboard");
const leaderboardDetails = document.getElementById("leaderboard-details");
const leaderboardForm = document.getElementById("leaderboard-form");
const countdown = document.getElementById("countdown");
const scoreCount = document.getElementById("score-count");
const gameGrid = document.getElementById("game-grid");
const play = document.getElementById("play");
const difficulty = document.querySelector(".level-select");
const moleHill = document.querySelectorAll(".grid-square");
let gameOver = false;
let moleVisSpeed = 700;
let moleHillAssignSpeed = 800;

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
  }, moleVisSpeed);
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
    if (!gameOver) {
      const rand = getRandomIntInclusive(0, moleHill.length - 1);
      randomMole(rand);
    } else {
      clearMoles();
      clearInterval(moleInterval);
      return;
    }
  }, moleHillAssignSpeed);
}

//COUNTDOWN TIMER

function countdownTimer() {
  let timeCount = countdown.textContent;
  const counterTimer = setInterval(() => {
    if (timeCount && !gameOver) {
      timeCount -= 1;
      countdown.textContent = timeCount;
    } else {
      gameOver = true;
      newGame.classList.remove("hide-play");
      leaderboardForm.classList.remove("hide-play");
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
}

/********************************
 * START A NEW GAME
 * 1 SET INTERVAL TO COUNTDOWN
 * 1 TIMEOUT TO REMOVE COUNTDOWN DIV
 * 1 TIMEOUT TO REVEAL GAME GRID DIV
 ********************************/

startGame.addEventListener("click", (e) => {
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
  newGame.classList.add("hide-play");
  leaderboardForm.classList.add("hide-play");
});

leaderboard.addEventListener("click", (e) => {
  leaderboardDetails.classList.toggle("hide-leaderboard");
  gameGrid.classList.toggle("hide-leaderboard");
});

// FUTURE CODE FOR IMPROVEMENTS

// const easy = document.getElementById("easy");
// const medium = document.getElementById("medium");
// const hard = document.getElementById("hard");

// LEVEL SELECTION

// difficulty.addEventListener("click", (e) => {
//   if (e.target.id === "easy") {
//     moleVisSpeed = 700;
//     moleHillAssignSpeed = 800;
//   } else if (e.target.id === "medium") {
//     moleVisSpeed = 500;
//     moleHillAssignSpeed = 600;
//   } else if (e.target.id === "hard") {
//     moleVisSpeed = 300;
//     moleHillAssignSpeed = 350;
//   }
//   console.log(moleVisSpeed, moleHillAssignSpeed);
//   startGame.classList.remove("hide-start-game");
// });

//////////////////////////////////////
///////////      CHI      ////////////
//////////////////////////////////////

///////////////////////////////////////////////
/////////////////////LEADERBOARD///////////////
///////////////////////////////////////////////

//////////////// draft 1 ///////////////
////////////////////////////////////////
// const nameDisplay = document.getElementById('leaderboard-name');

// const name_submit = document.forms['name-submit'];

// name_submit.addEventListener('submit', (e) => {
// e.preventDefault();
// const nameData = new FormData(name_submit);
// const {name} = Object.fromEntries(nameData);
// console.log("🚀 ~ file: main.js ~ line 158 ~ name_submit.addEventListener ~ name", name);
// name_submit.reset();
// handleNames(name);
// });

// const leaderboardNames = [];

// function handleNames(name){
//   leaderboardNames.push(name);
//   inputLeaderboardName();
// }

// function inputLeaderboardName() {
//   nameDisplay.textContent = leaderboardNames.join(', ');
// }

// function handleNames(name){
//   leaderboardNames.push(name);
//   inputLeaderboardName();
//  }

///////////////////draft 2//////////////////
////////////////////////////////////////////
// const nameDisplay = document.getElementById('leaderboard-name');

// const name_submit = document.forms['name-submit'];

// name_submit.addEventListener('submit', (e) => {
// e.preventDefault();
// const nameData = new FormData(name_submit);
// const {name} = Object.fromEntries(nameData);
// console.log("🚀 ~ file: main.js ~ line 158 ~ name_submit.addEventListener ~ name", name);
// name_submit.reset();
// handleNames(name);
// });

// const leaderboardNames = [];

// const ol = document.getElementById('name-list');
// const newName = document.createElement("li");

// function handleNames(name){
//   leaderboardNames.push(name);
//   // inputLeaderboardName();

//   leaderboardNames.forEach(function(name, index) {
//         ol.appendChild(newName);
//     nameDisplay.textContent = name;
//   })
// }

/////////////////////// draft 3 ////////////////////
////////////////////////////////////////////////////
const nameDisplay = document.getElementById("leaderboard-name1");

const leaderboardName1 = document.getElementById("leaderboard-name1");
const leaderboardName2 = document.getElementById("leaderboard-name2");
const leaderboardName3 = document.getElementById("leaderboard-name3");
const leaderboardName4 = document.getElementById("leaderboard-name4");
const leaderboardName5 = document.getElementById("leaderboard-name5");

const hideList = document.getElementsByClassName("leaderboard-name");

const name_submit = document.forms["name-submit"];

name_submit.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameData = new FormData(name_submit);
  const { name } = Object.fromEntries(nameData);
  console.log(
    "🚀 ~ file: main.js ~ line 158 ~ name_submit.addEventListener ~ name",
    name
  );
  name_submit.reset();
  handleNames(name);
  console.log("name array", leaderboardNames);
  handleScores();
  console.log("score array", leaderboardScores);
});

const leaderboardNames = [];

function handleNames(name) {
  leaderboardNames.push(name);
  leaderboardName1.textContent = leaderboardNames[0];
  leaderboardName2.textContent = leaderboardNames[1];
  leaderboardName3.textContent = leaderboardNames[2];
  leaderboardName4.textContent = leaderboardNames[3];
  leaderboardName5.textContent = leaderboardNames[4];
}

////////////////////////////////////////////////////
/////////////////////// SCORE //////////////////////
////////////////////////////////////////////////////

//show the score
const leaderboardScores = [];

const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const score3 = document.getElementById("score3");
const score4 = document.getElementById("score4");
const score5 = document.getElementById("score5");

function handleScores(score) {
  score = scoreCount.innerHTML;
  leaderboardScores.push(score);
  score1.textContent = leaderboardScores[0];
  score2.textContent = leaderboardScores[1];
  score3.textContent = leaderboardScores[2];
  score4.textContent = leaderboardScores[3];
  score5.textContent = leaderboardScores[4];
}
