let RandNUM=parseInt(Math.random()*100+1)
// console.log(RandNUM)
let submmitBtn=document.querySelector("#SubmmitBtn");
let UserInput=document.querySelector("#GuessField");
let GuessSlot=document.querySelector(".guess");
let prev=document.querySelector(".lastResult");
let LowHI=document.querySelector(".LowHI");
let startOver=document.querySelector(".resultparas")



let p=document.createElement('p');

let prevguess=[];
let numGuess=1;
let playGame=true;

if(playGame){
    submmitBtn.addEventListener('click',function(e){
        e.preventDefault();
        let guess=parseInt(UserInput.value);
        console.log(guess);
        VaildGuess(guess);
    })
    
}


function VaildGuess(guess){
    if(isNaN(guess)){
        alert("Please Enter a vaild Number !");
    }
    else if(guess<1){
        alert("Enter Enter a Number more than one");
    }
    else if(guess>100){
        alert("Please Enter a number lessThan 100");
    }
    else{
        prevguess.push(guess)
        if(numGuess===10){
            displayGuess(guess);
           displayMessage(`Game over. The Random Number is ${RandNUM}`);
           endGame();
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
    
    
}
function checkGuess(guess){

    if(guess===RandNUM){
        displayMessage(`You guessed right `);
        endGame();
    }else if(guess<RandNUM){
        displayMessage("Number is low");
    }
    else if(guess>RandNUM){
        displayMessage("Number is high");
    }
    
}

function displayGuess(guess) {
    UserInput.value = '';
    GuessSlot.innerHTML += `${guess}, `;
    numGuess++;
    prev.innerHTML = `${10- numGuess} `;
    
}
function displayMessage(Message){
    LowHI.innerHTML=`<h2>${Message}</h2>`

}
function endGame(){
UserInput.value='';
UserInput.setAttribute('disabled', '');
p.classList.add('button')
p.innerHTML=`<h2 id="newGame">Start New Game</h2>`;
startOver.appendChild(p);
playGame=false;
newGame()

}

function newGame(){
  let newGamebtn=  document.querySelector("#newGame");
  newGamebtn.addEventListener('click',function(e){
  RandNUM=parseInt(Math.random()*100+1);
  prevguess=[];
  numGuess=1;
  GuessSlot.innerHTML='';
  prev.innerHTML = `${10- numGuess} `;
 UserInput.removeAttribute('disabled');
 startOver.removeChild(p);
    playGame=true;
  })
    
}