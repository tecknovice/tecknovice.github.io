/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores;
var roundScore;
var point;
var currentPlayer;
var winScore = 100;
var isPlaying = false;

var dice = document.querySelector(".dice");

document.querySelector(".btn-roll").addEventListener("click", function() {
  if (isPlaying === false) return;
  point = Math.ceil(Math.random() * 6);
  dice.style.display = "block";
  dice.setAttribute("src", `dice-${point}.png`);
  if (point !== 1) {
    //add point to the round score
    roundScore += point;
    document.querySelector(
      `#current-${currentPlayer}`
    ).textContent = roundScore;
  } else {
    changePlayer();
  }
});

document.querySelector(".btn-hold").addEventListener("click", function() {
  if (isPlaying === false) return;
  //add round score to global score
  scores[currentPlayer] += roundScore;
  document.querySelector(`#score-${currentPlayer}`).textContent =
    scores[currentPlayer];
  //check winner
  if (scores[currentPlayer] >= winScore) {
    document.querySelector(`#name-${currentPlayer}`).textContent = "WINNER";
    document
      .querySelector(`.player-${currentPlayer}-panel`)
      .classList.remove("active");
    isPlaying = false;
  } else {
    changePlayer();
  }
});

document.querySelector(".btn-new").addEventListener("click", function() {
  if (isPlaying === false) init();
});

window.onload = function() {
  init();
};

function init() {
  document.querySelector("#name-0").textContent = "PLAYER 1";
  document.querySelector(".player-0-panel").classList.add('active');
  document.querySelector("#name-1").textContent = "PLAYER 2";
  scores = [0, 0];
  roundScore = 0;
  currentPlayer = 0;
  dice.style.display = "none";
  document.querySelector("#score-0").textContent = "0";
  document.querySelector("#score-1").textContent = "0";
  document.querySelector("#current-0").textContent = "0";
  document.querySelector("#current-1").textContent = "0";
  isPlaying = true;
}

function changePlayer() {
  //reset round score
  roundScore = 0;
  document.querySelector(`#current-${currentPlayer}`).textContent = roundScore;
  //change player
  currentPlayer = 1 - currentPlayer;
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
}
