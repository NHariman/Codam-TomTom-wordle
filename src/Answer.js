/*
  attempt: string
  result: array with 5 ints. Where:
    0: wrong letter
    1: wrong position
    2: correct letter at correct position!
*/
export const Answer = ({ attempt, result }) => {
  const attemptArray = attempt.split("");

  const Letters = () => {
    return (
      <>
        {attemptArray.map((letter, index) => (
          <div
            key={index}
            style={
              result[index] === 1
                ? styles.wrong_position
                : result[index] === 2
                ? styles.right_position
                : styles.letterBox
            }
          >
            <p style={styles.letter}>{letter}</p>
          </div>
        ))}
      </>
    );
  };

  return (
    <div style={styles.letterContainer}>
      <Letters />
    </div>
  );
};

const styles = {
  letterContainer: {
    display: "flex",
    flexDirection: "row"
  },
  letterBox: {
    width: "3rem",
    height: "3rem",
    margin: 4,
    backgroundColor: "#3a3a3c"
  },
  wrong_position: {
    width: "3rem",
    height: "3rem",
    margin: 4,
    backgroundColor: "#ffae1a"
  },
  right_position: {
    width: "3rem",
    height: "3rem",
    margin: 4,
    backgroundColor: "#00cc00"
  }
};
