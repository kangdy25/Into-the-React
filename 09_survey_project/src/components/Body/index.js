import React from 'react';
import TextInput from '../TextInput';

const Body = ({ type, answers, setAnswers }) => {
  let InputComponent = null;

  if (type === 'select') {
    // InputComponent = SelectInput
  } else if (type === 'text') {
    InputComponent = TextInput;
  } else if (type === 'textarea') {
  }
  return <InputComponent answers={answers} setAnswers={setAnswers} />;
};

export default Body;
