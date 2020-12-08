var scores,roundScore,activePlayer,gamePlaying;

init();
var lastDice;
document.querySelector('.btn-roll').addEventListener('click',function(){
if(gamePlaying){
var dice = Math.floor(Math.random() * 6) + 1;
var diceDOM = document.querySelector('.dice');
diceDOM.style.display= 'block';
diceDOM.src = "dice-" + dice + ".png"; 
if(dice === 6 && lastDice === 6){
scores[activePlayer] =0;
document.querySelector('#score-' + activePlayer).textContent = '0';
nextplayer();
}else if(dice !== 1){
roundScore += dice;
document.querySelector('#current-' + activePlayer).textContent = roundScore;
}else{
nextplayer();
}
lastDice = dice;
}

});

document.querySelector('.btn-hold').addEventListener('click',function(){
if(gamePlaying){
scores[activePlayer] += roundScore;
document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

if(scores[activePlayer] >= 20){
document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
document.querySelector('.dice').style.display = 'none';
document.querySelector('.player-'+activePlayer+ '-panel').classList.add('winner');
document.querySelector('.player-'+activePlayer+ '-panel').classList.remove('active');
gamePlaying = false;
}
else{

nextplayer();


}
}


});
function nextplayer(){


activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
roundScore = 0; 
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.querySelector('.player-0-panel').classList.toggle('active');
document.querySelector('.player-1-panel').classList.toggle('active');
document.querySelector('.dice').style.display = 'none';


}
document.querySelector('.btn-new').addEventListener('click',init);






function init(){

scores = [0,0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;
document.querySelector('.dice').style.display = 'none';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('name-0').textContent = 'player 1';
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
}