let hits = 0;
let guesses = 0;
let userInput;
let shipAt = Array.from({ length: 3 }, () => Math.floor(Math.random() * 5) + 1);
let triesLeft = 5;

do {
  //userInput = prompt(
    "Enter a number between 1 and 5. Get 3 numbers right to sink the ship. " +
      "Try's left: " +
      triesLeft
  );


  let numberInput = parseInt(userInput);
  console.log(numberInput);
  guesses++;
  triesLeft--;
  console.log(shipAt);
  if (isNaN(numberInput)) {
    alert("Please enter a number");
  } else if (shipAt.includes(numberInput)) {
    let index = shipAt.indexOf(numberInput);
    alert("Correct!");
    shipAt.splice(index, 1);
    hits++;
  } else {
    alert("Incorrect!");
  }
} while (hits < 3 && guesses < 5);

if (hits === 3) {
  alert("Ship Sunk! Game won!");
}
if (guesses === 5 && hits < 3) {
  alert("Sorry, you lost. Play again!");
}
