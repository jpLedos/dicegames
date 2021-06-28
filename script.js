// les element HTML 
const rollButton = document.getElementById('rollButton');
const holdButton = document.getElementById('holdButton');
const global1 = document.getElementById('global1');
const global2 = document.getElementById('global2');
const roundHtml = document.getElementById('round');
const roll = document.getElementById('roll');
const newPartybutton= document.getElementById('newParty');

//les variable de la parties
const playerNumbers = 2;
let round ; // point cumulés sur un tour
let turn  ; // compte les tours
const players = ['player1','player2']; // les joueurs
let globals = [0,0]; //les points cumulé par joueur
let result // resultat d'un lancé
newParty() //initalise les valeurs à zero


//remet tout a zero pour  une nouvelle partie 
function newParty() {
  // initialisation des variables
  round = 0;
  globals = [0,0];
  result = 0;
  //et tirage au sort du joueur qui commance :
  Math.random() >0.5 ? turn =0 : turn = 1;
  console.log('le joueur ' +players[currentPlayernumber()] + 'commence');
  refresh();
  }


//function rollResult()  return random from 1 to 6
function rollResult() {
  return Math.ceil(Math.random() *6);
};

function currentPlayernumber () {
  return turn % playerNumbers
} // defini le n° du joueur en fonction des tours

//function change player passe au jour suivant en incrementant le nombre de tours
function  changePlayer() {
  turn++
}


// fonction que va rafraichir l'affichage
function refresh() {
  global1.innerText = globals[0]
  global2.innerText = globals[1]
  roundHtml.innerText = round
  roll.innerText = result
}


// on ecoute les trois boutons sur le click
rollButton.addEventListener('click', () => {
  result = rollResult() 
  console.log('le joureur '+ players[currentPlayernumber()] + ' a eu ' + result );
 
  if (result === 1) {
    round = 0 
    changePlayer()
  } else {
  round += result
}
console.log(result)
refresh()
})

holdButton.addEventListener('click', () => {
  globals[currentPlayernumber()] += round 
  if (globals[currentPlayernumber()] >= 100 ) {
    let partyFinished = true
  }
  round = 0
  refresh()
  changePlayer()
})

newPartybutton.addEventListener('click', () => {
  newParty()
})



