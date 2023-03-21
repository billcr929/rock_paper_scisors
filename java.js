
document.getElementById("play").addEventListener("click",play);


function getComputerChoice(){;//returns random rock/paper/scissors
    const ranNum= Math.floor(Math.random() *3)+1;
    let choice;
    if(ranNum===1){
        choice="rock";
    }else if(ranNum===2){
        choice="paper";
    }else {
        choice="scissors"
    }
    return choice;
}

function getPlayerSelection(attempt){//player chooses rock/paper/scissors from text input
    let input;
    if (attempt === 0){
    input = prompt("rock, paper, scissors --> your choice");}else{
        input = prompt("try again deekweed --> rock, paper, scissors")
    }

    input=input.toLowerCase();

    if (input == "rock"|| input == "paper" || input == "scissors"){
       
    }else{input = getPlayerSelection(1);}

return input;
}



function singleRound(comp,play){ //takes playerSelection and getComputerChoice and outputs text
    console.log(comp+" "+play)
    if(comp === play){
        return "tie"
    }else if(comp === "rock" && play === "paper" ||
             comp === "paper" && play === "scissors" ||
             comp === "scissors" && play === "rock"){
        return "player"
    }else{
        return "computer"
    }
}

function play(){
    let tie=0, win =0, loss=0;
    for(let i=1; i<=1; i++){
        let winner = singleRound(getComputerChoice(),getPlayerSelection(0));
        console.log(winner)
        if (winner == "tie") {
            tie++;
            i--;            
        }else if(winner == "player"){
            win++;
        }else{loss++;}       
    }
    alert("final score or "+win+"-"+loss+"-"+tie);


}

