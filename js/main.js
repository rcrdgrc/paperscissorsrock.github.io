/*----- constants -----*/
const beepAudio = new Audio('http://soundbible.com/mp3/Robot_blip-Marianne_Gagnon-120342607.mp3');
const shootAudio = new Audio('http://soundbible.com/mp3/shooting_star-Mike_Koenig-1132888100.mp3');

// we want access to the images
// and we want to know what beats whats
// so maybe a "beats property somewhere"
const rpsLookup = {
  r: {
    imageUrl: 'imgs/rock.png',
    beats: 's'
  },
  p: {
    imageUrl: 'imgs/paper.png',
    beats: 'r'
  },
  s: {
    imageUrl: 'imgs/scissors.png',
    beats: 'p'
  }
}

// State variables ===============================================
let scores; // what values or data structures can we use here
let choices;
let winner;


function init(){

  scores = {
    player: 0,
    computer: 0,
    tie: 0
  };
  
  choices = {
    player: "r",
    computer: "r"
  }

  winner = null; // who won? "player", "computer", or "tie"
}