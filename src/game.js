import { words } from "./words";

export const validateGuess = (guess) => {
  if (guess.length > 5) {
    return "Too many letters!";
  } else if (guess.length < 5) {
    return "Not enough letters!";
  } else if (words.indexOf(guess) < 0) {
    return "Word not in list!";
  } else {
    return "";
  }
};
