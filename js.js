let userName = prompt("What is your name", " ");
let user = document.querySelector("#name");

user.innerHTML = userName;

if(!(userName === " "))  {


let buttonClick = document.querySelector("#button");


buttonClicked = buttonClick.addEventListener("click", playRound);


 let Name = document.querySelector("#User");
 Name.innerHTML = userName;

let humanScore = 0;
let computerScore = 0;

let computerReply;
function playRound() {
function getComputerValue()  {
computerReply = ["Rock", "Paper", "Scissors"];
computerReply = computerReply[Math.floor(Math.random() * 3)];

}
getComputerValue();
       
let humanReply;
let r = "rock";
let p = "paper";
let s = "scissors";
 let human;
 let computer;


let whyChoice = document.querySelector("#Why");

function getBothChoices(humanChoice, computerChoice) {
  humanReply = prompt("Rock,Paper,Scissors", " ");
  humanReply = humanReply.toLowerCase();
      if(humanReply == r || humanReply == p || humanReply == s) {
       
   if((humanReply == r && computerReply == "Scissors") || (humanReply == p && computerReply == "Rock") || (humanReply == s && computerReply=="Paper")) {
   human = "win";
 
  } else if((humanReply == p && computerReply == "Scissors") || (humanReply == s && computerReply == "Rock") || (humanReply == r && computerReply=="Paper")) {
   human = "lose";
  } else {
    human = "draw";
  }
  

  if(human === "win") {
   
    humanScore+=1;
    let humanUpdate = document.querySelector("#hScore");
    humanUpdate.innerHTML = humanScore;
   
    if(humanReply == r) {
      whyChoice.innerHTML =  "You won rock beats scissors";
    } else if(humanReply == p) {
      whyChoice.innerHTML =  "You won paper beats rock";
      
    } else {
      whyChoice.innerHTML =  "You won scissors beats paper";
    }

  }

  if(human === "lose") {
    computerScore+=1;
    let computerUpdate = document.querySelector("#cScore");
    computerUpdate.innerHTML = computerScore;
    if(computerReply == r) {
      whyChoice.innerHTML =  "You lost rock beats scissors";
    } else if(computerReply == p) {
      whyChoice.innerHTML =  "You lost paper beats rock";
    } else {
      whyChoice.innerHTML =  "You lost scissors beats paper";
      
    }
  }
   
  if(human === "draw") {
    whyChoice.innerHTML =  "It is a draw";
  

  }

    
  

} else {
  alert(`"I can't comprehend your Value"`);
  alert(`Type either "Rock" "Paper" or "Scissors"`);
} 

}
getBothChoices();
}

}
  else {
  alert(`I am sorry, but you cant continue without typing your name`);
  alert(`Refresh the page if you change your mind`);

 
}
