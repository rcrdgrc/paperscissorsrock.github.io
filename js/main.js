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


// take our state (which our the variables we initialized in our init function)
// and update the dom with those values
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

    // try and write the code that will update the dom with the 
    // grey border based on the winner

    // hint you can use an if/else or a ternary opertator ? :
    choicesEl[choice].borderEl.style.borderColor = winner === choice ? 'grey': 'white';
    // another way to do the above ^
    // if(winner === choice){
    //   choicesEl[choice].borderEl.style.borderColor = 'grey';
    // } else {
    //   choicesEl[choice].borderEl.style.borderColor = 'white';
    // }

    choicesEl[choice].imgEl.src = rpsLookup[choices[choice]].imageUrl
  }
}

// any function that depends on an event listener
/// all it does it it updates our state variables
// ! important staty consitent with what you defined your values as
// in your init function

// then at the end you always call render, which will update the dom, with your new state
function playRound(){
  console.log('play round is firing on the click of my button')
  // its job is to just update state thats it, 
  // don't touch the dom 


  // determine choice 
  // know whether the computer or user through paper scissors or rock
  choices.player = getRandomRPS(); // what should this return 
  choices.computer =  getRandomRPS(); // 'r', 'p', 's' refering to our choices object defined in our state
  // go in to them dom after you press your button, then check your state
  // What piece state are you updating?


  // determine the winner
  // if else if else 
  if(choices.player === choices.computer){
    // we have tie
    winner = 'tie';
  } else if(choices.computer === rpsLookup[choices.player].beats){
    winner = 'player';
  } else {
    winner = 'computer';
  }
  // update state // what do want to update
  // update our score
  scores[winner]++;
  // render

  // this where we transfer the state we just updated to to the dom in the render function
  // winner state, choices state, scores state
  // we made sure our values stayed consistent with what we planned in our init function
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