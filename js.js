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


/* function getHumanChoice(){

    let humanChoice = prompt("CHOOSE: ROCK, PAPER OR SCISSOR?")
    
    if(humanChoice.toUpperCase() !== "ROCK" &&
        humanChoice.toUpperCase() !== "PAPER" &&
        humanChoice.toUpperCase() !== "SCISSOR"){
        alert("check for typos!");
        return getHumanChoice()
    }
    return humanChoice.toUpperCase()
    

    better way to do this , removes the risk of Stack OverFlow
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


    

function playRound (humanChoice, computerChoice =getComputerChoice()){

    let resultVal = [] // index 0: (0:draw, 1: win, -1: lose) index 1: string vlaue with computer and user chouce. index 2: computerChocie 
    if(humanChoice == computerChoice){
        resultVal[0] = 0;
        resultVal[1]= `DRAW, You both chose: ${humanChoice}`;
        resultVal[2] = computerChoice;

        return resultVal;

    }else if(humanChoice == "PAPER" && computerChoice =="Rock" ) {
        resultVal[0] = 1;
        resultVal[1] = `Computer Choice: ${computerChoice}, Human Choice:  ${humanChoice}`;
        resultVal[2] = computerChoice;
        return resultVal;
    }else if (humanChoice == "SCISSOR" && computerChoice == "PAPER"  ){
        resultVal[0] = 1 ;
        resultVal[1] `Computer Choice: ${computerChoice}, Human Choice: ${humanChoice}`;
        resultVal[2] = computerChoice;

        return resultVal;
    }else if(humanChoice == "ROCK" && computerChoice == "SCISSOR"  ){
        
        resultVal[0] = 1 ;
        resultVal[1] = `Computer Choice : " + ${computerChoice}, Human Choice: ${humanChoice}`;
        resultVal[2] = computerChoice;

        return resultVal;
    }else if(humanChoice == "PAPER" && computerChoice == "ROCK"  ){

        resultVal[0] = 1;
        resultVal[1] = `Computer Choice :${computerChoice}, Human Choice: ${humanChoice}`;
        resultVal[2] = computerChoice;

        return resultVal;
    }
    else{
        resultVal[0] = -1;
        resultVal[1] = `Computer Choice : ${computerChoice}, "Human Choice: ${humanChoice}`;
        resultVal[2] = computerChoice;

        return resultVal;
    }
    
}


const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorBtn = document.createElement('button');

rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorBtn.textContent="Scissors";

rockBtn.classList.add("gameButton");
paperBtn.classList.add("gameButton");
scissorBtn.classList.add("gameButton");

const buttonSpan = document.createElement('span');
buttonSpan.append(rockBtn, paperBtn, scissorBtn);

buttonSpan.classList.add("buttonDiv");
const gameDiv = document.querySelector("#gameContainer");
gameDiv.appendChild(buttonSpan)


const resultPara = document.createElement('p')
resultPara.classList.add("resultPara")
let computerScore = 0;
let humanScore = 0;

resultDiv = document.createElement('div');
resultDiv.appendChild(resultPara);

gameDiv.appendChild(resultDiv);


const winnerPara = document.createElement('p');
gameDiv.append(winnerPara);
winnerPara.classList.add("winnerPara", "resultPara")


const clankerChoicePara = document.createElement('p');
clankerChoicePara.id  = "clankerId";

buttonSpan.before(clankerChoicePara);

buttonSpan.addEventListener('click', function(e){
    if(e.target == rockBtn || e.target == paperBtn || e.target == scissorBtn){
        const humanChoice = e.target.textContent.toUpperCase();
        const result = playRound(humanChoice)
        console.log(`Result Array From playRound Function: ${result}`)
        clankerChoicePara.textContent = `Clanker: ${result[2]}`
        appendScore(result);
        console.log(`Clanker: ${computerScore}, You: ${humanScore}`);
        console.log(`clanker choice = ${result[2]}`)
        resultPara.textContent = `Clanker: ${computerScore}  You: ${humanScore}`
    }
})

function appendScore(givenresult){
    if (givenresult[0]  == 1){
        humanScore +=1
        
    }else if (givenresult[0] == -1){
        computerScore += 1

    }
    checkIfWon();
}

function checkIfWon(){
    if (humanScore == 5){
        winnerPara.textContent = "You have saved the humanity! You can officially call yourself Clanker beater."
        winnerPara.textContent= winnerPara.textContent.toUpperCase()

        document.querySelectorAll('.gameButton').forEach(btn => btn.disabled = true);
        
    }else if(computerScore ==5){     
        winnerPara.textContent = "You are a disgrace to humanity, Clankers are taking over now. beep beep boop boop"
        winnerPara.textContent = winnerPara.textContent.toUpperCase()
        document.querySelectorAll('.gameButton').forEach(btn => btn.disabled = true);
        


    }
    
    
}

