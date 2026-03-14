

function getComputerChoice(){
    let randomNum = getRandomInt(0,3) //IF MINUMUM ==1, min = 0 | IF MAXIMUM ==3, max =3

    switch(randomNum){
        case 1:
            return "ROCK";
        case 2:
            return "SCISSOR";
        case 3:
            return "PAPER";
    }
}


function getRandomInt(min, max){
    return Math.floor(Math.random() * (max-min) +min) +1
}


function getHumanChoice(){

    let humanChoice = prompt("CHOOSE: ROCK, PAPER OR SCISSOR?")
    
    if(humanChoice.toUpperCase() !== "ROCK" &&
        humanChoice.toUpperCase() !== "PAPER" &&
        humanChoice.toUpperCase() !== "SCISSOR"){
        alert("check for typos!");
        return getHumanChoice()
    }
    return humanChoice.toUpperCase()
    

    /*better way to do this , removes the risk of Stack OverFlow
    let humanChoice = "";

    Keep looping as long as the choice is NOT valid
    while (true) {
        humanChoice = prompt("Choose: ROCK, PAPER, or SCISSORS?").toUpperCase();

        if (humanChoice === "ROCK" || humanChoice === "PAPER" || humanChoice === "SCISSORS") {
            return humanChoice; // This breaks the loop and sends the answer back
        }

        alert("Check for typos and try again!");
    }
    */


}
    

function playRound (computerChoice =getComputerChoice(), humanChoice = getHumanChoice()){

    
    if(humanChoice == computerChoice){
        alert("DRAW, You both chose: " + humanChoice)
        return false

    }else if(humanChoice == "PAPER" && computerChoice =="Rock" )
        {
         alert("You win with " + humanChoice)
         alert("Computer Choice : " + computerChoice, "Human Choice: " + humanChoice)
         return true

    }else if (humanChoice == "SCISSOR" && computerChoice == "PAPER"  ){
        promt("You win with " + humanChoice)
        alert("Computer Choice : " + computerChoice, "Human Choice: " + humanChoice)
        return true
    }else if(humanChoice == "ROCK" && computerChoice == "SCISSOR"  ){
        alert("You win with " + humanChoice)
        alert("Computer Choice : " + computerChoice, "Human Choice: " + humanChoice)
        return true
    }else if(humanChoice == "PAPER" && computerChoice == "ROCK"  ){
        alert("You win with " + humanChoice)
        alert("Computer Choice : " + computerChoice, "Human Choice: " + humanChoice)
        return true
    }
    else{
        alert("You lose with " + humanChoice)
        alert("Computer Choice : " + computerChoice, "Human Choice: " + humanChoice)
        return false
    }
    
}


function startGame(){
    let gameCount = 5;
    alert(`You have ${gameCount } tries to win against the clanker!`)
    let didUserWin = false;
    while(gameCount >0 && didUserWin == false ){
        didUserWin = playRound();
    }
}

startGame()