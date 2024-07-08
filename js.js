let userName = prompt("What is your name", " ");
let user = document.querySelector("#name");
user.innerHTML = userName;


let bod = document.querySelector("body");
let ptag = document.querySelector("#ptag");
let ptags = document.querySelector("#ptags");
let whyChoice = document.querySelector("#Why");

user.innerHTML = userName;


if(!(userName === " "))  {
    let buttonClick = document.querySelector("button");
let sbuttonClick = buttonClick.addEventListener("click", buttonClicked);
    function buttonClicked() {
        buttonClick.remove();
        ptag.textContent = "In order to start the game click one of the buttons below";
        ptags.textContent = "We would play until someone get up to five points";
      
    }
    


    
    
    
    
    
     let Name = document.querySelector("#User");
    
     Name.innerHTML = userName;
    
    let humanScore = 0;
    let computerScore = 0;
    let computerUpdate = document.querySelector("#cScore");
    let humanUpdate = document.querySelector("#hScore");
  
    let human;
    let computer;
    
    let computerReply;
    
  
    
    



    
    let rock =  document.querySelector("#bat");
    let paper = document.querySelector("#but");
   
    let scissors = document.querySelector("#bot");
    rock = rock.addEventListener("click",  Rock);
    paper = paper.addEventListener("click",   Paper);
    scissors = scissors.addEventListener("click",  Scissors)
    let humanValue; 
   
  
    function Rock() {
       if(Rock) {
        computerReply = ["Rock", "Paper", "Scissors"];
        computerReply = computerReply[Math.floor(Math.random() * 3)];
        
       }
        if(Rock && computerReply == "Scissors") {
            whyChoice.innerHTML =  "You Won! : Computer chose scissors";
            human = "Win";
        } else if(Rock && computerReply == "Paper") {
            whyChoice.innerHTML =  "You lost! : Computer chose paper";
           human = "Lose";
        }  else if(Rock && computerReply == "Rock") {
            whyChoice.innerHTML =  "It is a draw";
            human = "Draw";
        }
        if(human == "Win") {
            humanScore+=1;
            humanUpdate.innerHTML = humanScore;
            computerUpdate.innerHTML = computerScore;
        }else if(human == "Lose") {
            computerScore+=1;
            humanUpdate.innerHTML = humanScore;
            computerUpdate.innerHTML = computerScore;
        } else {
            humanScore;
            computerScore;
            humanUpdate.innerHTML = humanScore;
            computerUpdate.innerHTML = computerScore;
        }
        
        if(humanScore === 5) {
            whyChoice.innerHTML =  `${userName} Wins!`;
            computerScore = 0;
            humanScore = 0;
           
        } else if(computerScore === 5) {
            whyChoice.innerHTML =  `Computer Wins!`;   
            computerScore = 0;
            humanScore = 0;
        }
      
    }

    function Paper() {
       if(Paper) {
        computerReply = ["Rock", "Paper", "Scissors"];
        computerReply = computerReply[Math.floor(Math.random() * 3)];
       }
        if(Paper && computerReply == "Rock") {
            whyChoice.innerHTML =  "You Won! : Computer chose rock";
            human = "Win";

             } else if(Paper && computerReply == "Scissors") {
                whyChoice.innerHTML =  "You lost! : Computer chose scissors";
                human = "Lose";
     
             }  else if(Paper && computerReply == "Paper") {
                whyChoice.innerHTML =  "It is a draw";
                human = "Draw";
     
             }

             if(human == "Win") {
                humanScore+=1;
                humanUpdate.innerHTML = humanScore;
                computerUpdate.innerHTML = computerScore;
            }else if(human == "Lose") {
                computerScore+=1;
                humanUpdate.innerHTML = humanScore;
                computerUpdate.innerHTML = computerScore;
            } else {
                humanScore;
                computerScore;
                humanUpdate.innerHTML = humanScore;
                computerUpdate.innerHTML = computerScore;
            }
            
            
            if(humanScore === 5) {
                whyChoice.innerHTML =  `${userName} Wins!`;
                computerScore = 0;
                humanScore = 0;
                
            } else if(computerScore === 5) {
                whyChoice.innerHTML =  `Computer Wins!`;   
                computerScore = 0;
                humanScore = 0;
            }
            
    }

function Scissors() {
    if(Scissors) {
        computerReply = ["Rock", "Paper", "Scissors"];
        computerReply = computerReply[Math.floor(Math.random() * 3)];
       }
        if(Scissors && computerReply == "Paper") {
            whyChoice.innerHTML =  "You Won! : Computer chose paper";
            human = "Win";
             } else if(Scissors && computerReply == "Rock") {
                whyChoice.innerHTML =  "You lost! : Computer chose rock";
                human = "Lose";
     
             }  else if(Scissors && computerReply == "Scissors") {
                whyChoice.innerHTML =  "It is a draw";
                human = "Draw";
     
             }

             if(human == "Win") {
                humanScore+=1;
                humanUpdate.innerHTML = humanScore;
                computerUpdate.innerHTML = computerScore;
            }else if(human == "Lose") {
                computerScore+=1;
                humanUpdate.innerHTML = humanScore;
                computerUpdate.innerHTML = computerScore;
            } else {
                humanScore;
                computerScore;
                humanUpdate.innerHTML = humanScore;
                computerUpdate.innerHTML = computerScore;
            } 

            if(humanScore === 5) {
                whyChoice.innerHTML =  `${userName} Wins!`;
                computerScore = 0;
                humanScore = 0;
               
            } else if(computerScore === 5) {
                whyChoice.innerHTML =  `Computer Wins!`;   
                computerScore = 0;
                humanScore = 0;
            }
            
}
  

 
 
}
   else {
    whyChoice.textContent = `You must type in your name in order to start`;
   }


