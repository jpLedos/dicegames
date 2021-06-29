// les element HTML 
const rollButton = document.getElementById('rollButton');
const holdButton = document.getElementById('holdButton');
const global1 = document.getElementById('global1');
const global2 = document.getElementById('global2');
const roundHtml = document.getElementById('round');
const roll = document.getElementById('roll');
const newPartybutton= document.getElementById('newParty');
const resultImg = document.getElementById("resultImg");
const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')
let img;// variable image pour affichage du dé
let target = 25// nombre de point pour gagner la partie



//les variable de la parties
const playerNumbers = 2;
let round ; // point cumulés sur un tour
let turn  ; // compte les tours
const players = ['player1','player2']; // les joueurs
let globals = [0,0]; //les points cumulé par joueur
let result ;// resultat d'un lancé
let currentPlayer;//joueur actif
newParty(); //initalise les valeurs à zero

//les sons 
function clickOk() {
  //var snd = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");  
  var snd =new Audio("data:audio/wav;base64,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")
  snd.play();
}
function error() {
  var snd =new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");  
  snd.play();
}
function endOfParty() {
  var snd =new Audio("")
  snd.play();
}

//remet tout a zero pour  une nouvelle partie 
function newParty() {
  // initialisation des variables
  round = 0;
  globals = [0,0];
  result = 0;
  
  //et tirage au sort du joueur qui commance :
  Math.random() >0.5 ? turn =0 : turn = 1;
  console.log(currentPlayerName() + ' commence');
  refresh();
  }


//function rollResult()  return random from 1 to 6
function rollResult() {
  return Math.ceil(Math.random() *6);
};

function currentPlayerNumber () {
  return turn % playerNumbers;
} // defini le n° du joueur en fonction des tours


function currentPlayerName () {
  return players[turn % playerNumbers];
} // defini le n° du joueur en fonction des tours

function currentPlayerGlobal () {
  return  globals[turn % playerNumbers];
} // defini le n° du joueur en fonction des tours

//function change player passe au tour suivant en incrementant le nombre de tours
function  changePlayer() {
  if (currentPlayerGlobal() < target) { 
    turn++;
  }
}


//va rafraichir l'affichage
function refresh() {
  global1.innerText = globals[0];
  global2.innerText = globals[1];
  roundHtml.innerText = round;
  img="./images/" + result + "b.jpg";
  resultImg.setAttribute("src",img);

  if (currentPlayerGlobal()>= target ) {
    roundHtml.innerText = "LA PARTIE EST FINIE";
    rollButton.style.display = "none";
    holdButton.style.display = "none"; 
  } 

  if (currentPlayerName() === "player1") {
    player1.style.textDecoration = 'bold';
    player1.style.backgroundColor = 'lightgreen';
    player2.style.textDecoration = 'none';
    player2.style.backgroundColor = 'lightgray';
  }
  if (currentPlayerName() == "player2") {
    player2.style.textDecoration = 'bold';
    player2.style.backgroundColor = 'lightgreen';
    player1.style.textDecoration = 'none';
    player1.style.backgroundColor = 'lightgray';
  }
  
  //console.log('refresh OK")')
}


// on ecoute les trois boutons sur le click
rollButton.addEventListener('click', () => {
  result = rollResult() ;
  //console.log('le joureur '+ currentPlayerName() + ' a eu ' + result );
 
  if (result === 1) {
    error() //joue erreur.wav
    round = 0 ;
    changePlayer();
  } else {
      clickOk();
      round += result;
}
refresh();
})

holdButton.addEventListener('click', () => {
  globals[currentPlayerNumber()] += round ;
  console.log(currentPlayerName() + ' a ' + globals[currentPlayerNumber()] );
  round = 0;
  refresh();
  changePlayer();
  refresh();
})

newPartybutton.addEventListener('click', () => {
  document.location.reload(); //on recharge la page pour une nouvelle partie
})






