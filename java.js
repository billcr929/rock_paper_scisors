
const computerChoice = getComputerChoice();
const playerSelection = getPlayerSelection("roCK");
const roundResult = singleRound(computerChoice,playerSelection);
console.log(computerChoice + " "+ playerSelection +"\n"+roundResult);

function getComputerChoice(){;//returns random rock/paper/scissors
    const a= Math.floor(Math.random() *3)+1;
    let choice;
    if(a===1){
        choice="rock";
    }else if(a===2){
        choice="paper";
    }else {
        choice="scissors"
    }
    return choice;
}

function getPlayerSelection(playerInput){//player chooses rock/paper/scissors from text input
return playerInput.toLowerCase();
}
function singleRound(comp,play){ //takes playerSelection and getComputerChoice and outputs text
if(comp === play){
    return "tie game!"
}else if(comp === "rock" && play === "paper" || comp === "paper" && play === "scissors" || comp === "scissors" && play === "rock"){
    return play+ " beats " +comp+". you win!!"
}else{
    return comp+ " beats " +play+". you loose!"
}
}