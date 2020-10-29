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


// cached element references ========================================
const scoreEls = {
  player: document.getElementById('p-score'),
  computer: document.getElementById('c-score'),
  tie: document.getElementById('t-score')
}

const choicesEl = {
  player: {
    borderEl: document.getElementById('p-result'),
    imgEl: document.querySelector('#p-result img')
  },
  computer: {
    borderEl: document.getElementById('c-result'),
    imgEl: document.querySelector('#c-result img')
  }
}


// event listeners ================================================================
document.querySelector('button')
  .addEventListener('click', playRound);


init(); // initialize our state when the app loads in the browser

function init(){
  // these properties in our state
  // should have similiar key names to
  // our cached elements where our state values
  // will be rendered on the dom, refer to scoreEls and choiceEls
  scores = {
    player: 0,
    computer: 0,
    tie: 0
  };
  
  choices = {
    player: "r", // 'r', 'p', 's'
    computer: "r"
  }

  winner = null; // who won? "player", "computer", or "tie"

  render();
}

function render(){
  console.log('render is firing')

  // render our score values to the dom, //reference our state for our score values, 
  // and our cached elemeents scoreEls for their location
  for (let score in scores){
    // scores[score] value
    scoreEls[score].innerText = scores[score];
  }

  // render out the intial choice, you'll have to use your rpsLookup
  // choicesEl.player.imgEl.setAttribute('src', rpsLookup[choices.player].imageUrl);
  // choicesEl.computer.imgEl.setAttribute('src', rpsLookup[choices.computer].imageUrl);

  // loop style
  for (let choice in choices){
    //
    // console.log(choice) // things to log
    // console.log(choices[choice]) the value
    choicesEl[choice].imgEl.src = rpsLookup[choices[choice]].imageUrl
  }
}

function playRound(){
  console.log('play round is firing on the click of my button')

  // determine choice 
  // know whether the computer or user through paper scissors or rock
  choices.player = getRandomRPS(); // what should this return 
  choices.computer =  getRandomRPS(); // 'r', 'p', 's' refering to our choices object defined in our state
  // go in to them dom after you press your button, then check your state
  // What piece state are you updating?


  // determine the winner

  // update state 
  // update our score

  // render
  render();
}

function getRandomRPS(){
  // try to finish this function
  const letters = ['r', 'p', 's'];
  // another way 
  // const letters = Object.keys(rpsLookup); // ['r', 'p', 's']
  const rndIndex = Math.floor(Math.random() * 3);

  return letters[rndIndex]
}