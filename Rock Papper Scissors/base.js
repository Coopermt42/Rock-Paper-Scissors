const rock = 1;
const paper = 2;
const scissors = 3;

// Determines the player's choice with event listeners
document.getElementById("rock").addEventListener("click", () => playerSelect(rock));
document.getElementById("paper").addEventListener("click", () => playerSelect(paper));
document.getElementById("scissors").addEventListener("click", () => playerSelect(scissors));

// This function handles the player's choice and triggers the computer's choice
function playerSelect(choice) {
    let playerChoice = choice;  // Save the player's choice
    let aiChoice = computerPicks();        // Trigger the AI's pick and determine the result
    determineWinner(playerChoice, aiChoice);  // Check the winner

}

// This picks a random number for the AI and assigns the AI's choice
function computerPicks() {
    var randomNumber = Math.floor(Math.random() * 3) + 1;  // Random number between 1 and 3

    if (randomNumber === rock) {
        aiChoice = rock;
    } else if (randomNumber === paper) {
        aiChoice = paper;
    } else {
        aiChoice = scissors;
    }

    return aiChoice
    
    //displayComputerChoice(aiChoice);  // Display the AI's choice
}

/*
// This displays the computer's choice by checking the AI's choice number
function displayComputerChoice(aiChoice) {
    let aiChoiceText = "";

    if (aiChoice === rock) {
        aiChoiceText = "Rock";
    } else if (aiChoice === paper) {
        aiChoiceText = "Paper";
    } else {
        aiChoiceText = "Scissors";
    }

    // Create or update the element that displays the AI's choice
    let aiChoiceElement = document.getElementById("ai-choice");
    if (!aiChoiceElement) {
        aiChoiceElement = document.createElement("p");
        aiChoiceElement.id = "ai-choice";
        document.body.appendChild(aiChoiceElement);
    }
}
*/

// This checks both the player's and AI's choices and determines the winner
function determineWinner(playerChoice, aiChoice) {
    let result = "";

    // Logic to determine the winner
    if (playerChoice === aiChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === rock && aiChoice === scissors) ||
        (playerChoice === paper && aiChoice === rock) ||
        (playerChoice === scissors && aiChoice === paper)
    ) {
        result = "You win!";
    } else {
        result = "Computer wins!";
    }

    // Create or update the element that displays the result
    let resultElement = document.getElementById("result");
    if (!resultElement) {
        resultElement = document.createElement("p");
        resultElement.id = "result";
        document.body.appendChild(resultElement);
    }
    resultElement.textContent = result;
}
