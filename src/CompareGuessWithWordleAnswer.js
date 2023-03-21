export function compareGuessWithWordleAnswer(guess, wordleOfTheSession) {
  const guessArray = guess.split("");
  const wordleOfTheSessionArray = wordleOfTheSession.split("");

  var result = [];

  for (let i = 0; i < guess.length; i++) {
    if (guessArray[i] === wordleOfTheSessionArray[i]) {
      result.push(2);
    } else if (wordleOfTheSessionArray.indexOf(guessArray[i]) > -1) {
      result.push(1);
    } else {
      result.push(0);
    }
  }
  return result;
}

export function isCorrectGuess(result) {
  if (result.length < 4) {
    return false;
  }
  for (let i = 0; i < result.length; i++) {
    if (result[i] !== 2) {
      return false;
    }
  }
  return true;
}
