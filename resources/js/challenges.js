/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores,roundScore,activePlayer,dice,gamePlaying;
init();
var lastDiceVal;
document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
        dice = Math.floor(Math.random()*6) + 1;
        document.querySelector('.dice').style.display = 'block';
        document.querySelector('.dice').src = 'resources/img/dice-'+dice+'.png';
        
        if(dice !== 1){
            roundScore += dice;
            document.querySelector('#current-'+activePlayer).textContent = roundScore; 
        }else{
        nextPlayer();
        }
    }


});
function nextPlayer(){
    if(dice === 6 && lastDiceVal === 6){
        scores[activePlayer] = 0;
        document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
   nextPlayer();
    }else if(gamePlaying){
        activePlayer === 0 ? activePlayer = 1:activePlayer = 0;
        roundScore = 0;
    
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
       
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display = 'none';
    }
  
}

document.querySelector('.btn-hold').addEventListener('click',function(){
    var input,defaultScore;
    if(gamePlaying){
        scores[activePlayer] += roundScore;
        document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
    
        document.getElementById('current-'+activePlayer).textContent = '0';
         input = document.querySelector('.final-score').value;
         
        //remember the faulsy values concept
        if(input){
             defaultScore = input;
        }else{
             defaultScore = 25;
        }
        if(scores[activePlayer] > defaultScore){
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('#name-'+activePlayer).textContent = 'WINNER';
            document.querySelector('.dice').style.display = 'none';
            gamePlaying = false;
        }else{
            nextPlayer();
        }
    }
   
});
document.querySelector('.btn-new').addEventListener('click',init);
function init(){
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'player 1';
document.getElementById('name-1').textContent = 'player 2';
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.dice').style.display = 'none';

}









