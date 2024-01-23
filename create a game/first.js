let userScore = 0;
let computerScore = 0;
let choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");
const userScorebox = document.querySelector("#user-score");
const computerScorebox = document.querySelector("#comp-score");

const genCompchoice = () =>{
    const option = ["happy", "sad", "angry"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx]; 
    //happy, sad, angry
}
const drawGame = () => {
    // console.log("Game is Draw.");
    msg.innerText = "Game is Draw. Play again.";
    msg.style.backgroundColor = "rgb(2, 2, 29)";
};
const showWinner = (userWin, userChoise,compChoice) => {
    if(userWin) {
       userScore++;
       userScorebox.innerText =  userScore;
        msg.innerText = `User Win! your ${userChoise} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else{
       computerScore++;
       computerScorebox.innerText = computerScore;
        msg.innerText = `User Lose. ${compChoice} beats your ${userChoise}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoise) => {
    //generate computer choice
    const compChoice = genCompchoice();

    if(userChoise===compChoice){
          //draw game
          drawGame();
    } else{
        let userWin = true;
        if(userChoise==="happy"){
            //sad,angry
            userWin = compChoice === "angry" ? false: true;
        } else if(userChoise === "sad"){
        //happy, angry
        userWin = compChoice === "happy" ? false: true;
        } else{
            //happy,sad
            compChoice === "sad" ? false: true;
        }
        showWinner(userWin, userChoise, compChoice);
    }
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoise = choice.getAttribute("id");
    playGame(userChoise);
  });
});

