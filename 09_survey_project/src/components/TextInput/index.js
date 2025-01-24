import React from 'react';

const TextInput = ({ answers, setAnswers }) => {
  return (
    <input
      type="text"
      value={answers}
      onChange={(e) => {
        setAnswers(e.target.value);
      }}
    />
  );
};

export default TextInput;
