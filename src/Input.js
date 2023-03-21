export const Input = ({ onChange }) => {
  return (
    <input
      className="form-field"
      onChange={onChange}
      placeholder={"Guess a 5 letters word"}
    />
  );
};
