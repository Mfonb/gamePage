//!Guess the Number Game - Project Brief
//!Introduction
//!Create a JavaScript program that simulates a Guess the Number game. The user will try to guess a randomly generated number within a 
//!specified range. The program will provide feedback after each guess and allow the user to restart the game at any time.
//!Project Requirements
//!1. Random Number Generation: Generate a random number within a given range (e.g., 1 to 100) at the start of each game.
//!2. User Input: Allow the user to input their guesses.
//!3. Feedback: Provide feedback after each guess:
//o If the guess is too high, display "Too High."
//o If the guess is too low, display "Too Low."
//o If the guess is correct, congratulate the user.
//!4. Track Guesses: Keep track of the number of guesses the user has made.
//!5. Game Restart Option: Provide a button to restart the game, resetting the random number and guess count.
//!6. Input Validation: Ensure that the user's input is a number within the specified range and provide an error message if the input is invalid.
//!Design Considerations
//• Structure your program with clear and modular functions (e.g., generating random numbers, validating input, providing feedback).
//• Use meaningful variable and function names to ensure code readability.
//• Incorporate basic styling to make the game visually appealing (optional but encouraged).
//• Ensure intuitive and user-friendly input and restart functionality

//? First, user login page leading to page 2. Username/password saved to a library.

//?Secnd, Start page
//? Third, create a prompt for user to choose number from a random number range within a specified range. Ensure item entered is a number, 
//? else return to prompt with option of same number range option to choose. Page shows number of trial. Page RESTARTS button resets no of
//? trial, and random number range. 
 
//? Check if number chosen greater, lower, or equal generated number; give necessary feedback to user as an alert. Save and increase number 
//? of guesses made by user to an array and displayed. 

//console.log(document)
//const startButton = document.getElementById("start")
//const page3Heading = document.querySelector("h3");
//const inputCommand = document.querySelector("h4"); // Use the correct variable name
//let inputSubmission = document.querySelector("dialog");
//const restartButton = document.getElementById("restart")
//const trackGames = document.querySelectorAll("p")
//const heading = document.getElementById("heading")
//const body = document.querySelector("body")
//const trialMessage = document.getElementById("trialMessage")
//let noOfTrial = document.getElementById("noOfTrial")
//const guessAlert = document.getElementById("guessAlert")
//let noOfGuesses = document.getElementById("noOfGuesses")

//page3Heading.style.backgroundColor = "pink";
//inputCommand.style.backgroundColor = "yellow"
//heading.style.backgroundColor = "green"
//body.style.backgroundColor = "yellow"

//let trials = 0;
//let correctGuesses = 0;
//noOfGuesses = 0;
//noOfTrial = 0;

//trialMessage.textContent = `You have made ${noOfTrial} attempts so far.`;
//guessAlert.textContent = `You've made ${noOfGuesses} correct guesses so far.`;
 
//inputCommand.append(#prompt)
//function input() {
    //random range generation
  //  const randomRange1 = Math.floor(Math.random() * 50); //0 to range 50.
   // const randomRange2 = Math.floor(Math.random() * (100 - randomRange1 + 1)) + randomRange1; //(100 - randomRange1 + 1) from randomRange1
    //const randomRange = Math.floor(Math.random() * (randomRange2 - randomRange1 + 1)) + randomRange1; // 
    //const lowerLimit = Math.floor(Math.random() * randomRange);
    //const upperLimit = Math.floor(Math.random() * 101) + randomRange; // from range randomRange to 101
   // const question = prompt(`enter a number from ${lowerLimit} to ${upperLimit}`)

    //if (question === randomRange) {
      //  correctGuesses = correctGuesses + 1;
        //trials = trials + 1;
       // noOfGuesses = correctGuesses;
       // noOfTrial = trials;
      //  alert("you did it. see how much more you can predict the robot.")
      //  trialMessage.textContent = `You have made ${noOfTrial} attempts so far.`;
       // guessAlert.textContent = `You've made ${noOfGuesses} correct guesses so far.`;
        //return input;

    //} else if (question > randomRange) {
     //   trials = trials + 1;
       // noOfTrial = trials;
       // alert(`too high. robot predicted ${randomRange}.`);
      //  trialMessage.textContent = `You have made ${noOfTrial} attempts so far.`;
      //  guessAlert.textContent = `You've made ${noOfGuesses} correct guesses so far.`;
      //  return input;

    //} else if (question < randomRange) {
      //  trials = trials + 1;
       // noOfTrial = trials;
      //  alert(`too low. robot predicted ${randomRange}.`);
      //  trialMessage.textContent = `You have made ${noOfTrial} attempts so far.`;
      //  guessAlert.textContent = `You've made ${noOfGuesses} correct guesses so far.`;
      //  return input;
    //} else if (question === null) {
        // User canceled the prompt
      //  alert("Input canceled. Click start to try again");
      //  return null;
    //} else if (!isNaN(question) && question <= randomRange1 && question >= randomRange2) {
     //   alert("response above or below range");
      //  return input;
    //} else {
        // Invalid input, ask again
     //   alert("invalid response");
       // return input;
   // }
//}

//function restart() {
  //  return input;
//}

//function mouseOver() {
  //  alert("restarting resets game page and current game data lost")
//}
//restartButton.addEventListener("mouseover", mouseOver)
//startButton.addEventListener("click", input);
//restartButton.addEventListener("click", restart);

console.log(document);
const startButton = document.getElementById("start");
const page3Heading = document.querySelector("h3");
const inputCommand = document.querySelector("h4");
let inputSubmission = document.querySelector("dialog");
const restartButton = document.getElementById("restart");
const trackGames = document.querySelectorAll("p");
const heading = document.getElementById("heading");
const body = document.querySelector("body");
const trialMessage = document.getElementById("trialMessage");
const noOfTrial = document.getElementById("noOfTrial");
const guessAlert = document.getElementById("guessAlert");
const noOfGuesses = document.getElementById("noOfGuesses");
const prompt = document.getElementById("prompt");
const userInput = document.getElementById("input");
const submitButton = document.querySelector("button[type='submit']");
const rewardOutput = document.getElementById("reward")

inputCommand.textContent = `Click the "play" button to reshuffle or begin.`;
page3Heading.style.backgroundColor = "pink";
inputCommand.style.backgroundColor = "yellow";
heading.style.backgroundColor = "green";

let trials = 0;
let correctGuesses = 0;
let lowerLimit = 0;
let upperLimit = 0;
let randomRange = 0;

trialMessage.textContent = `So far, you have made ${trials} attempts.`;
guessAlert.textContent = `You've made ${correctGuesses} correct guesses. Keep Going!`;

function displayInteraction() {
  userInput.style.display = "block"; // show the number input space
  submitButton.style.display = "block"; // show the OK button
  return true
}

function hideInteraction() {
  userInput.style.display = "none"; // Hide the number input space
  submitButton.style.display = "none"; // Hide the OK button
  return false;
}

function generateRandomNumber() {
    lowerLimit = Math.floor(Math.random() * 50); // Between 0 and 49
    upperLimit = Math.floor(Math.random() * (100 - lowerLimit + 1)) + lowerLimit; // From lowerLimit to 100
    randomRange = Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
    prompt.textContent = `Enter a number between ${lowerLimit} and ${upperLimit}:`;
}

function trialsDisplay() {
  guessAlert.textContent = `You've made ${correctGuesses} correct guesses. Keep Going!`;
  trialMessage.textContent = `So far, you have made ${trials} attempts.`;
  userInput.value = ""; // Clear input field
}


function input() {
    generateRandomNumber();
}

function processGuess() {

    const userNumber = Number(userInput.value.trim()); // Get user input and convert to number

    if (userInput.value === "") {
        rewardOutput.textContent = "Please enter a number.";
        trialsDisplay()
        return generateRandomNumber();
    }

    if (isNaN(userNumber)) {
        rewardOutput.textContent = "Invalid input. Please enter a valid number.";
        trialsDisplay()
        return generateRandomNumber();
    }

    if (userNumber < lowerLimit || userNumber > upperLimit) {
        rewardOutput.textContent = `Your input is outside the range ${lowerLimit}-${upperLimit}. Enter the new Number.`;
        trialsDisplay()
        return generateRandomNumber();
    }

    trials++;
    trialMessage.textContent = `You have made ${trials} attempts so far.`;

    if (userNumber === randomRange) {
        correctGuesses++;
        guessAlert.textContent = `You've made ${correctGuesses} correct guesses. Keep Going!`;
        rewardOutput.textContent = `You guessed it! Great job! The correct number was ${randomRange}. Keep Going!`;
        trialsDisplay()
        generateRandomNumber(); // Start a new round

    } else if (userNumber > randomRange) {
        rewardOutput.textContent = `${userNumber} is too high! The robot predicted ${randomRange} from between ${lowerLimit}-${upperLimit}. Enter the new Number.`;
        trialsDisplay()
        generateRandomNumber(); // Start a new round

    } else if (userNumber < randomRange) {
        rewardOutput.textContent = `${userNumber} is too low! The robot predicted ${randomRange} from between ${lowerLimit}-${upperLimit}. Enter the new Number.`;
        trialsDisplay()
        generateRandomNumber(); // Start a new round
    }
}

function restart() {
    trials = 0;
    correctGuesses = 0;
    trialMessage.textContent = `You have made ${trials} attempts so far.`;
    guessAlert.textContent = `You've made ${correctGuesses} correct guesses. Keep Going!`;
    rewardOutput.textContent = "Game has been reset. Click 'Play' to start again.";
    prompt.textContent = "";
    userInput.value = "";
}

// Event Listeners/calling functions

hideInteraction()

startButton.addEventListener("click", () => {
  input();
  displayInteraction();
});

submitButton.addEventListener("click", processGuess);

restartButton.addEventListener("click", () => {
  restart();
  hideInteraction();
});