function playGuessingGame(numToGuess, totalGuesses = 10) {
  let numguessCount = 0;

  while (numguessCount < totalGuesses) {
    let numuserGuess = prompt(getPromptText(numguessCount));

    if (numuserGuess === null) {
      return 0;
    }

    if (numuserGuess.trim() === '' || isNaN(numuserGuess)) {
      alert("Please enter a number.");
      continue;
    }

    numguessCount++;
    numuserGuess = parseInt(numuserGuess);

    if (numuserGuess < numToGuess) {
      alert(numuserGuess + " is too small. Guess a larger number.");
    }
    else
      if (numuserGuess > numToGuess) {
        alert(numuserGuess + " is too large. Guess a smaller number.");
      }
      else {
        return numguessCount;
      }
  }

  return 0;
}


function getPromptText(numguessCount) {
  if (numguessCount === 0) {
    return "Enter a number between 1 and 100.";
  }
  else {
    return "Enter a number.";
  }
}

