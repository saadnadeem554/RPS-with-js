let userpoints = 0;
let computerpoints = 0;

function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) 
    {
      alert(`player choice: ${humanChoice}  computer choice: ${computerChoice}  \nIt's a tie!`);
    } 
    else if(humanChoice === "rock") 
    {
        if(computerChoice === "scissors") {
            userpoints++;
            alert(`player choice: ${humanChoice}  computer choice: ${computerChoice}  \nYou win!`);
        } else {
            computerpoints++;
            alert(`player choice: ${humanChoice}  computer choice: ${computerChoice}  \nYou lose!`);
        }
    }
    else if(humanChoice === "paper") 
    {
        if(computerChoice === "rock") {
            userpoints++;
            alert(`player choice: ${humanChoice}  computer choice: ${computerChoice}  \nYou win!`);
        } else {
            computerpoints++;
            alert(`player choice: ${humanChoice}  computer choice: ${computerChoice}  \nYou lose!`);
        }
    }
    else if(humanChoice === "scissors") 
    {
        if(computerChoice === "paper") {
            userpoints++;
            alert(`player choice: ${humanChoice}  computer choice: ${computerChoice}  \nYou win!`);
        } else {
            computerpoints++;
            alert(`player choice: ${humanChoice}  computer choice: ${computerChoice}  \nYou lose!`);
        }
    }
  }
  function getHumanChoice() {
    // get user choice
    let userchoice;
    userchoice = prompt(`User points: ${userpoints}  computer points: ${computerpoints} \nEnter your choice: rock, paper, or scissors`);
    userchoice = userchoice.toLowerCase();
    // validate user choice
    if (userchoice === "rock" || userchoice === "paper" || userchoice === "scissors") {
      return userchoice;
    } else {
      alert("Invalid choice. Please enter rock, paper, or scissors.");
      getHumanChoice();
    }
  }
  function getComputerChoice() {
    // get computer choice
    let computerchoice;
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
      computerchoice = "rock";
    } else if (random === 1) {
      computerchoice = "paper";
    } else {
      computerchoice = "scissors";
    }
    return computerchoice;
  }

function game()
{  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
}



for(let i=0; i<4; i++)
{
  game(userpoints, computerpoints);
}
if(userpoints > computerpoints)
{
  alert(`User wins with ${userpoints} points`);
}
else if(userpoints < computerpoints)
{
  alert(`Computer wins with ${computerpoints} points`);
}
else
{
  alert(`It's a tie with ${userpoints} points`);
}

  