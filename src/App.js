import "./styles.css";

import React, { useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";

import { GuessButton } from "./GuessButton";
import { Answer } from "./Answer";
import { Input } from "./Input";
import { validateGuess } from "./game";
import { words } from "./words";
import {
  compareGuessWithWordleAnswer,
  isCorrectGuess
} from "./CompareGuessWithWordleAnswer";

/* 
  wordle of the session must exist outside the export default app function
  so it does not continuously update.
*/
const wordleOfTheSession = words[Math.floor(Math.random() * 5757)];

export default function App() {
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [guessArray, setGuessArray] = useState([]);
  const [isExploding, setIsExploding] = useState(false);

  const onClick = () => {
    const trimmedGuess = guess.trim();
    const validation = validateGuess(trimmedGuess);
    if (isExploding === true) {
      setMessage("You've already won! Refresh for a new word.");
      return;
    }
    if (guessArray.length > 5) {
      setMessage(
        "Too many guesses! You lose, the word was: " +
          wordleOfTheSession +
          "! :( Refresh the page to try again!"
      );
      return;
    } else if (validation.length === 0) {
      const compareResult = compareGuessWithWordleAnswer(
        trimmedGuess,
        wordleOfTheSession
      );
      const currentGuess = { guess: trimmedGuess, result: compareResult };
      setGuessArray([...guessArray, currentGuess]);
      if (isCorrectGuess(compareResult) === true) {
        setIsExploding(true);
        setMessage("AWESOME! You guessed right!");
        return;
      }
    }
    setMessage(validation);
  };

  const updateInput = (event) => {
    setGuess(event.target.value);
  };

  return (
    <div className="App" style={styles.container}>
      {isExploding && <ConfettiExplosion />}
      <h3>
        A simplified version of the game{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.nytimes.com/games/wordle/index.html"
        >
          wordle
        </a>
      </h3>

      {guessArray.map((guess, inc) => (
        <Answer key={inc} attempt={guess.guess} result={guess.result} />
      ))}
      <Input onChange={updateInput} />
      <GuessButton onClick={onClick} />
      <h3>{message}</h3>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
};
