let score = JSON.parse(localStorage.getItem('score'));

if (score === null) {
    score = {
        win: 0,
        lose: 0,
        tie: 0
    };
}
socresUpdate();
let isPlaying = false;
let validId;

function autoPlay(){
    if (!isPlaying){
      validId =   setInterval(function(){
            const playGame= pickComputerMove();
            playerMove(playGame);
        },1000);
        isPlaying = true;
    }
    else{
        clearInterval(validId)
        isPlaying = false;
    }

}

document.querySelector('.same-jspaper').addEventListener('click',()=>{
    playerMove('paper')
});

document.querySelector('.same-jsscissors').addEventListener('click',()=>{
    playerMove('scissors')
});

document.querySelector('.same-jsrock').addEventListener('click',()=>{
    playerMove('rock')
});

document.body.addEventListener('keydown',(event)=>{
    if(event.key === 'r')
      {playerMove('rock')}
    else if(event.key ==='p')
      {playerMove('paper')}
    else if(event.key === 's')
      {playerMove('scissors')}

})

function playerMove(playerChoice) {
    const computerMove = pickComputerMove();
    let result = '';

    if (playerChoice === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose';
        } else if (computerMove === 'paper') {
            result = 'You win';
        } else if (computerMove === 'scissors') {
            result = 'It\'s a tie';
        }
    } else if (playerChoice === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win';
        } else if (computerMove === 'paper') {
            result = 'It\'s a tie';
        } else if (computerMove === 'scissors') {
            result = 'You lose';
        }
    } else if (playerChoice === 'rock') {
        if (computerMove === 'rock') {
            result = 'It\'s a tie';
        } else if (computerMove === 'paper') {
            result = 'You lose';
        } else if (computerMove === 'scissors') {
            result = 'You win';
        }
    }

    if (result === 'You win') {
        score.win += 1;
    } else if(result === 'You lose') {
        score.lose += 1;
    } else if (result === 'It\'s a tie') {
        score.tie += 1;
    }
    localStorage.setItem('score', JSON.stringify(score));

    socresUpdate();

    document.querySelector('.chooseOperator').innerHTML = result;

    document.getElementById('playerMoveIcon').src = `${playerChoice}-emoji.png`;
    document.getElementById('computerMoveIcon').src = `${computerMove}-emoji.png`;
}

function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove;
    if (randomNumber < 1/3) {
        computerMove = 'rock';
    } else if (randomNumber < 2/3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }
    return computerMove;
}

function socresUpdate() {
    document.querySelector('.score-js').innerHTML = `Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.tie}`;
}
