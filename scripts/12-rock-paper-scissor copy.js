let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0,
  };
  updateScore();

  function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
        result = 'You lose.';
      } else if (computerMove === 'paper') {
        result = 'You win.';
      } else if (computerMove === 'scissors') {
        result = 'Tie.';
      }
    } else if (playerMove === 'paper') {
      if (computerMove === 'rock') {
        result = 'You win.';
      } else if (computerMove === 'paper') {
        result = 'Tie.';
      } else if (computerMove === 'scissors') {
        result = 'You lose.';
      }
    } else if (playerMove === 'rock') {
      if (computerMove === 'rock') {
        result = 'Tie.';
      } else if (computerMove === 'paper') {
        result = 'You lose.';
      } else if (computerMove === 'scissors') {
        result = 'You win.';
      }
    }

    if (result === 'You win.') {
      score.wins++;
    } else if (result === 'You lose.') {
      score.losses++;
    } else if (result === 'Tie.') {
      score.ties++;
    }

    localStorage.setItem('score', JSON.stringify(score));
    updateScore();
    document.querySelector('.js-result').innerHTML = `You picked ${playerMove}. Computer picked ${computerMove}. ${result}`;
    document.querySelector('.js-moves').innerHTML = `You
    <img class="move-icon" src="images/${playerMove}-emoji.png" alt="${playerMove}">
    <img class="move-icon" src="images/${computerMove}-emoji.png" alt="${computerMove}">
    Computer`;
  }

  function updateScore() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
  }

  function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScore();
    alert('Score has been reset.');
  }

  function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'scissors';
    }

    return computerMove;
  }

  
  let isAutoPlay = false;
  let intervalId ;
  function autoplay(){
    if(!isAutoPlay){
       intervalId = setInterval(() => {
        const playerMove = pickComputerMove();
        playGame(playerMove);
    }, 1000);
    isAutoPlay = true;
    }
    else {
      clearInterval(intervalId);
      isAutoPlay = false;
    }
 }
 document.querySelector('js-rock-button')
 .addEventListener('click', () => {
   playGame('rock');
 });

 document.querySelector('js-paper-button')
 .addEventListener('click', () => {
   playGame('paper');
 });

 document.querySelector('js-scissors-button')
 .addEventListener('click', () => {
   playGame('scissors');
 });

 document.body.addEventListener('keydown', (event) => {
    if(event.key==='r') {
      playGame('rock');
    }
    else if (event.key==='p') {
      playGame('paper');
    }
    else if (event.key==='s') {
      playGame('scissors');

    }
 });

 

  
