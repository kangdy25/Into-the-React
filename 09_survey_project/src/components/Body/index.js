import React from 'react';
import TextInput from '../TextInput';
import TextAreaInput from '../TextAreaInput';
import SelectInput from '../SelectInput';

const Body = ({ type, answers, setAnswers, options }) => {
  let InputComponent = null;

  if (type === 'select') {
    InputComponent = SelectInput;
  } else if (type === 'text') {
    InputComponent = TextInput;
  } else if (type === 'textarea') {
    InputComponent = TextAreaInput;
  }
  return (
    <InputComponent
      answers={answers}
      setAnswers={setAnswers}
      options={options}
    />
  );
};

export default Body;
