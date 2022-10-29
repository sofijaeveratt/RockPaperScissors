function getComputerChoice() {
    const list =['rock', 'paper', 'scissors'];
    const randomIndex= Math.floor(Math.random()*list.length);
    return list[randomIndex]; 
}
function SingleRound(playerSelection){
    let  computerSelection = getComputerChoice();
    console.log(computerSelection)
    console.log(playerSelection);
    if (playerSelection==computerSelection) {
        document.getElementById("result").innerHTML = "It's a draw!";
        return "draw";
    } else if (playerSelection=="rock") {
        if (computerSelection=="paper") {
            document.getElementById("result").innerHTML = "You loose! Paper beats rock";
            return "loose";
        } else { //computer==scissors
            document.getElementById("result").innerHTML = "You win! Rock beats scissors";
            return "win";
        }
    } else if (playerSelection=="paper") {
        if (computerSelection == "rock") {
            document.getElementById("result").innerHTML = "You win! Paper beats rock";
            return "win";
        } else {//computer == scissors
            document.getElementById("result").innerHTML = "You loose! scissors beat paper";
            return "loose";
        }
    } else if (playerSelection=="scissors"){ 
        if (computerSelection=="rock") {
            document.getElementById("result").innerHTML = "You loose! Rock beats scissors";
            return "loose";
        } else {//computer==paper
            document.getElementById("result").innerHTML = "You win! Scissors beat paper";
            return "win";
        } 
    } else {
        alert ("error")
        return "error"
    }
    }       

let computerscore = 0;
let playerscore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.id;
        let result = SingleRound(playerSelection);
        if (result=="win") {
            let playercore=++playerscore;
            document.getElementById("playerScore").innerHTML = "Your score:" +' ' + playerscore;
        } else if (result=="loose") {
            let computercore=++computerscore;
            document.getElementById("computerScore").innerHTML = "Computer score" + ' ' + computerscore;
        } else {
            //pass
        }
        if (playerscore==5 || computerscore==5) {
            if (playerscore==5){
                document.getElementById("gameWinner").innerHTML = "You won the game!";
                let playerscore = 0;
                let computerscore =0;
                document.getElementById("computerScore").innerHTML = "Computer score:" + ' ' + computerscore;
                document.getElementById("playerScore").innerHTML = "Your score:" +' ' + playerscore;
            } else {
                document.getElementById("gameWinner").innerHTML = "You lost the game!";
                let playerscore = 0;
                let computerscore =0;
                document.getElementById("computerScore").innerHTML = "Computer score:" + ' ' + computerscore;
                document.getElementById("playerScore").innerHTML = "Your score:" +' ' + playerscore;
            }
        } else {
            //pass
        }    });
  });

